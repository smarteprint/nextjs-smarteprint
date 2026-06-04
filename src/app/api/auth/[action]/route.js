import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { successResponse, errorResponse } from '@/lib/response';
import { protectMiddleware, adminMiddleware } from '@/middleware/auth';
import User from '@/models/User';

/**
 * GET /api/auth/[action]
 * Dynamic auth routes for profile, users (admin)
 * Actions: profile, users, users/[userId]
 */
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { action } = await params;
    
    // GET profile - same as /api/auth
    if (action === 'profile') {
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
    }

    // GET all users - admin only
    if (action === 'users') {
      const authResult = await protectMiddleware(request);
      if (authResult.error) {
        return errorResponse(authResult.message, authResult.status);
      }

      const adminCheck = adminMiddleware(authResult.user);
      if (adminCheck.error) {
        return errorResponse(adminCheck.message, adminCheck.status);
      }

      const { searchParams } = new URL(request.url);
      const page = parseInt(searchParams.get('page')) || 1;
      const limit = parseInt(searchParams.get('limit')) || 20;
      const search = searchParams.get('search') || '';

      let query = { isAdmin: false }; // Only non-admin users

      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { firstName: { $regex: search, $options: 'i' } },
          { lastName: { $regex: search, $options: 'i' } },
        ];
      }

      const count = await User.countDocuments(query);
      const users = await User.find(query)
        .select('-password')
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });

      return successResponse(
        {
          users,
          page,
          pages: Math.ceil(count / limit),
          total: count,
        },
        'Users retrieved',
        200
      );
    }

    return errorResponse('Invalid action', 400);
  } catch (error) {
    console.error('Auth GET error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * PUT /api/auth/[action]
 * Dynamic auth routes for user updates
 * Actions: profile, block/[userId], unblock/[userId]
 */
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { action } = await params;

    // UPDATE profile - same as /api/auth
    if (action === 'profile') {
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
        },
        'Profile updated',
        200
      );
    }

    // BLOCK user - admin only
    if (action.startsWith('block/')) {
      const authResult = await protectMiddleware(request);
      if (authResult.error) {
        return errorResponse(authResult.message, authResult.status);
      }

      const adminCheck = adminMiddleware(authResult.user);
      if (adminCheck.error) {
        return errorResponse(adminCheck.message, adminCheck.status);
      }

      const userId = action.split('/')[1];
      const user = await User.findByIdAndUpdate(
        userId,
        { isBlocked: true },
        { new: true }
      );

      if (!user) {
        return errorResponse('User not found', 404);
      }

      return successResponse(
        { message: 'User blocked successfully' },
        'User blocked',
        200
      );
    }

    // UNBLOCK user - admin only
    if (action.startsWith('unblock/')) {
      const authResult = await protectMiddleware(request);
      if (authResult.error) {
        return errorResponse(authResult.message, authResult.status);
      }

      const adminCheck = adminMiddleware(authResult.user);
      if (adminCheck.error) {
        return errorResponse(adminCheck.message, adminCheck.status);
      }

      const userId = action.split('/')[1];
      const user = await User.findByIdAndUpdate(
        userId,
        { isBlocked: false },
        { new: true }
      );

      if (!user) {
        return errorResponse('User not found', 404);
      }

      return successResponse(
        { message: 'User unblocked successfully' },
        'User unblocked',
        200
      );
    }

    return errorResponse('Invalid action', 400);
  } catch (error) {
    console.error('Auth PUT error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}
