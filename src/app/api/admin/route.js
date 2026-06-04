import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { successResponse, errorResponse } from '@/lib/response';
import { protectMiddleware, adminMiddleware } from '@/middleware/auth';
import { generateToken } from '@/lib/jwt';
import SetupSettings from '@/models/SetupSettings';
import PrinterRegistration from '@/models/PrinterRegistration';

/**
 * GET /api/admin
 * Get setup settings (public)
 */
export async function GET(request) {
  try {
    await connectDB();

    let settings = await SetupSettings.findOne();

    if (!settings) {
      // Create default settings if none exist
      settings = await SetupSettings.create({
        showHeader: false,
        showLogo: false,
        allowModelSearch: true,
        showInstallationFailed: true,
        showCompleteSetup: true,
      });
    }

    return successResponse(settings, 'Settings retrieved', 200);
  } catch (error) {
    console.error('Admin GET error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * POST /api/admin
 * Update settings, setup login, or register printer
 * body.action: 'login', 'update-settings', or 'register-printer'
 */
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { action } = body;

    // SETUP LOGIN - simple admin login (non-DB)
    if (action === 'login') {
      const { username, password } = body;

      if (username === 'admin' && password === 'password123') {
        return successResponse(
          {
            _id: 'setup-admin-id',
            name: 'Setup Admin',
            isAdmin: true,
            token: generateToken('setup-admin-id'),
          },
          'Login successful',
          200
        );
      } else {
        return errorResponse('Invalid setup admin credentials', 401);
      }
    }

    // UPDATE SETTINGS - admin only
    if (action === 'update-settings') {
      // Protect route
      const authResult = await protectMiddleware(request);
      if (authResult.error) {
        return errorResponse(authResult.message, authResult.status);
      }

      // Admin check
      const adminCheck = adminMiddleware(authResult.user);
      if (adminCheck.error) {
        return errorResponse(adminCheck.message, adminCheck.status);
      }

      const {
        showHeader,
        showLogo,
        allowModelSearch,
        showInstallationFailed,
        showCompleteSetup,
      } = body;

      // Ensure only one SetupSettings document exists
      const allSettings = await SetupSettings.find();
      if (allSettings.length > 1) {
        for (let i = 1; i < allSettings.length; i++) {
          await SetupSettings.findByIdAndDelete(allSettings[i]._id);
        }
      }

      let settings = await SetupSettings.findOne();

      if (settings) {
        settings.showHeader =
          showHeader !== undefined ? showHeader : settings.showHeader;
        settings.showLogo =
          showLogo !== undefined ? showLogo : settings.showLogo;
        settings.allowModelSearch =
          allowModelSearch !== undefined
            ? allowModelSearch
            : settings.allowModelSearch;
        settings.showInstallationFailed =
          showInstallationFailed !== undefined
            ? showInstallationFailed
            : settings.showInstallationFailed;
        settings.showCompleteSetup =
          showCompleteSetup !== undefined
            ? showCompleteSetup
            : settings.showCompleteSetup;

        const updatedSettings = await settings.save();

        return successResponse(
          { success: true, settings: updatedSettings },
          'Settings updated',
          200
        );
      } else {
        const newSettings = await SetupSettings.create({
          showHeader,
          showLogo,
          allowModelSearch,
          showInstallationFailed,
          showCompleteSetup,
        });

        return successResponse(
          { success: true, settings: newSettings },
          'Settings created',
          201
        );
      }
    }

    // REGISTER PRINTER - public
    if (action === 'register-printer') {
      const { name, email, phone, model, agree } = body;

      if (!name || !email || !phone || !model) {
        return errorResponse('All fields are required', 400);
      }

      if (!agree) {
        return errorResponse(
          'You must agree to the terms and conditions',
          400
        );
      }

      const registration = await PrinterRegistration.create({
        name,
        email,
        phone,
        model,
        agree,
      });

      if (!registration) {
        return errorResponse('Invalid registration data', 400);
      }

      return successResponse(
        {
          success: true,
          message: 'Registration successful',
          data: registration,
        },
        'Printer registered',
        201
      );
    }

    return errorResponse('Invalid action', 400);
  } catch (error) {
    console.error('Admin POST error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * PUT /api/admin
 * Update settings (admin only)
 */
export async function PUT(request) {
  try {
    await connectDB();

    // Protect route
    const authResult = await protectMiddleware(request);
    if (authResult.error) {
      return errorResponse(authResult.message, authResult.status);
    }

    // Admin check
    const adminCheck = adminMiddleware(authResult.user);
    if (adminCheck.error) {
      return errorResponse(adminCheck.message, adminCheck.status);
    }

    const body = await request.json();
    const {
      showHeader,
      showLogo,
      allowModelSearch,
      showInstallationFailed,
      showCompleteSetup,
    } = body;

    // Ensure only one SetupSettings document exists
    const allSettings = await SetupSettings.find();
    if (allSettings.length > 1) {
      for (let i = 1; i < allSettings.length; i++) {
        await SetupSettings.findByIdAndDelete(allSettings[i]._id);
      }
    }

    let settings = await SetupSettings.findOne();

    if (settings) {
      settings.showHeader =
        showHeader !== undefined ? showHeader : settings.showHeader;
      settings.showLogo =
        showLogo !== undefined ? showLogo : settings.showLogo;
      settings.allowModelSearch =
        allowModelSearch !== undefined
          ? allowModelSearch
          : settings.allowModelSearch;
      settings.showInstallationFailed =
        showInstallationFailed !== undefined
          ? showInstallationFailed
          : settings.showInstallationFailed;
      settings.showCompleteSetup =
        showCompleteSetup !== undefined
          ? showCompleteSetup
          : settings.showCompleteSetup;

      const updatedSettings = await settings.save();

      return successResponse(
        { success: true, settings: updatedSettings },
        'Settings updated',
        200
      );
    } else {
      const newSettings = await SetupSettings.create({
        showHeader,
        showLogo,
        allowModelSearch,
        showInstallationFailed,
        showCompleteSetup,
      });

      return successResponse(
        { success: true, settings: newSettings },
        'Settings created',
        201
      );
    }
  } catch (error) {
    console.error('Admin PUT error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}
