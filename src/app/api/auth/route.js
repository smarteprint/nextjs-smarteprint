import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { generateToken, verifyToken } from '@/lib/jwt';
import { successResponse, errorResponse } from '@/lib/response';
import { protectMiddleware } from '@/middleware/auth';
import User from '@/models/User';
import OTP from '@/models/OTP';
import { generateOTP, sendOTPEmail } from '@/lib/emailService';
import bcrypt from 'bcryptjs';

/**
 * POST /api/auth
 * Handles: login, register OTP, verify OTP, forgot password, reset password
 * Action parameter in body: login, send-registration-otp, verify-registration-otp, forgot-password, reset-password
 */
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { action } = body;

    // LOGIN
    if (action === 'login') {
      const { email, password, isAdminLogin } = body;

      if (!email || !password) {
        return errorResponse('Email and password are required', 400);
      }

      const normalizedEmail = email.trim().toLowerCase();
      const user = await User.findOne({ email: normalizedEmail });

      if (!user || !(await user.matchPassword(password))) {
        return errorResponse('Invalid email or password', 401);
      }

      // Check if user is blocked
      if (user.isBlocked) {
        return errorResponse('Your account has been blocked by admin. Please contact support.', 403);
      }

      // Strict Role Separation
      if (!isAdminLogin && user.isAdmin) {
        return errorResponse('You are not our user', 401);
      }

      if (isAdminLogin && !user.isAdmin) {
        return errorResponse('Not authorized as an admin', 401);
      }

      return successResponse(
        {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        },
        'Login successful',
        200
      );
    }

    // SEND REGISTRATION OTP
    if (action === 'send-registration-otp') {
      const { firstName, lastName, email, password } = body;

      if (!firstName || !lastName || !email || !password) {
        return errorResponse('All fields are required', 400);
      }

      if (password.length < 6) {
        return errorResponse('Password must be at least 6 characters', 400);
      }

      const trimmedEmail = email.trim().toLowerCase();
      const userExists = await User.findOne({ email: trimmedEmail });

      if (userExists) {
        return errorResponse('User already exists', 400);
      }

      const otp = generateOTP();
      await sendOTPEmail(trimmedEmail, otp, 'registration');

      // Clean old OTPs
      await OTP.findOneAndDelete({ email: trimmedEmail, type: 'registration' });

      // Create new OTP record with registration data
      await OTP.create({
        email: trimmedEmail,
        otp,
        type: 'registration',
        registrationData: {
          firstName,
          lastName,
          password,
        },
      });

      return successResponse(
        { message: 'OTP sent to your email' },
        'OTP sent successfully',
        200
      );
    }

    // VERIFY REGISTRATION OTP
    if (action === 'verify-registration-otp') {
      const { email, otp } = body;

      const trimmedEmail = email.trim().toLowerCase();

      const otpRecord = await OTP.findOne({
        email: trimmedEmail,
        otp,
        type: 'registration',
      });

      if (!otpRecord) {
        return errorResponse('Invalid or expired OTP', 400);
      }

      const { registrationData } = otpRecord;

      const existingUser = await User.findOne({ email: trimmedEmail });
      if (existingUser) {
        return errorResponse('User already exists with this email', 400);
      }

      try {
        const user = await User.create({
          firstName: registrationData.firstName,
          lastName: registrationData.lastName,
          name: `${registrationData.firstName} ${registrationData.lastName}`,
          email: trimmedEmail,
          password: registrationData.password,
        });

        // Clean up OTP
        await OTP.deleteOne({ _id: otpRecord._id });

        return successResponse(
          { email: user.email },
          'Account verified successfully. Please log in.',
          201
        );
      } catch (error) {
        return errorResponse('Failed to create user: ' + error.message, 500);
      }
    }

    // FORGOT PASSWORD
    if (action === 'forgot-password') {
      const { email } = body;

      const trimmedEmail = email.trim().toLowerCase();
      const user = await User.findOne({ email: trimmedEmail });

      if (!user) {
        return errorResponse('User not found', 404);
      }

      const otp = generateOTP();
      await sendOTPEmail(trimmedEmail, otp, 'password-reset');

      // Clean old OTPs
      await OTP.findOneAndDelete({ email: trimmedEmail, type: 'reset' });

      // Store OTP in DB
      await OTP.create({
        email: trimmedEmail,
        otp,
        type: 'reset',
      });

      return successResponse(
        { message: 'Password reset OTP sent to your email' },
        'OTP sent successfully',
        200
      );
    }

    // RESET PASSWORD
    if (action === 'reset-password') {
      const { email, otp, newPassword } = body;

      if (!newPassword || newPassword.length < 6) {
        return errorResponse('Password must be at least 6 characters', 400);
      }

      const trimmedEmail = email.trim().toLowerCase();

      const otpRecord = await OTP.findOne({
        email: trimmedEmail,
        otp,
        type: 'reset',
      });

      if (!otpRecord) {
        return errorResponse('Invalid or expired OTP', 400);
      }

      const user = await User.findOne({ email: trimmedEmail });
      if (!user) {
        return errorResponse('User not found', 404);
      }

      user.password = newPassword;
      await user.save();

      // Clean up OTP
      await OTP.deleteOne({ _id: otpRecord._id });

      return successResponse(
        { message: 'Password reset successfully' },
        'Password reset successful',
        200
      );
    }

    return errorResponse('Invalid action', 400);
  } catch (error) {
    console.error('Auth error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * GET /api/auth
 * Get current user profile (requires auth)
 */
export async function GET(request) {
  try {
    await connectDB();

    // Protect route
    const authResult = await protectMiddleware(request);
    if (authResult.error) {
      return errorResponse(authResult.message, authResult.status);
    }

    const user = authResult.user;

    return successResponse(
      {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      'Profile retrieved',
      200
    );
  } catch (error) {
    console.error('Auth GET error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * PUT /api/auth
 * Update user profile (requires auth)
 */
export async function PUT(request) {
  try {
    await connectDB();

    // Protect route
    const authResult = await protectMiddleware(request);
    if (authResult.error) {
      return errorResponse(authResult.message, authResult.status);
    }

    const user = authResult.user;
    const body = await request.json();
    const { firstName, lastName, email, password } = body;

    const updatedUser = await User.findById(user._id);

    if (!updatedUser) {
      return errorResponse('User not found', 404);
    }

    updatedUser.firstName = firstName || updatedUser.firstName;
    updatedUser.lastName = lastName || updatedUser.lastName;
    updatedUser.name = `${updatedUser.firstName} ${updatedUser.lastName}`;
    updatedUser.email = email || updatedUser.email;

    if (password) {
      updatedUser.password = password;
    }

    await updatedUser.save();

    return successResponse(
      {
        _id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      },
      'Profile updated successfully',
      200
    );
  } catch (error) {
    console.error('Auth PUT error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}
