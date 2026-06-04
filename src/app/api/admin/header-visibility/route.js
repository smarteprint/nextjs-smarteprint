import { connectDB } from '@/lib/mongodb';
import { successResponse, errorResponse } from '@/lib/response';
import { verifyToken } from '@/lib/jwt';
import SetupSettings from '@/models/SetupSettings';

/**
 * Verify setup admin token (from login-simple or real DB admin)
 */
function verifySetupAdmin(request) {
  const authHeader = request.headers.get('authorization') || '';
  if (!authHeader.startsWith('Bearer ')) return false;

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);
  return decoded && decoded.isAdmin;
}

/**
 * GET /api/admin/header-visibility
 * Get setup settings (public)
 */
export async function GET(request) {
  try {
    await connectDB();

    let settings = await SetupSettings.findOne();

    if (!settings) {
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
    console.error('Header-visibility GET error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * POST /api/admin/header-visibility
 * Update setup settings (requires setup admin token)
 */
export async function POST(request) {
  try {
    if (!verifySetupAdmin(request)) {
      return errorResponse('Not authorized as an admin', 401);
    }

    await connectDB();

    const body = await request.json();
    const { showHeader, showLogo, allowModelSearch, showInstallationFailed, showCompleteSetup } = body;

    // Ensure only one SetupSettings document exists
    const allSettings = await SetupSettings.find();
    if (allSettings.length > 1) {
      for (let i = 1; i < allSettings.length; i++) {
        await SetupSettings.findByIdAndDelete(allSettings[i]._id);
      }
    }

    let settings = await SetupSettings.findOne();

    if (settings) {
      if (showHeader !== undefined) settings.showHeader = showHeader;
      if (showLogo !== undefined) settings.showLogo = showLogo;
      if (allowModelSearch !== undefined) settings.allowModelSearch = allowModelSearch;
      if (showInstallationFailed !== undefined) settings.showInstallationFailed = showInstallationFailed;
      if (showCompleteSetup !== undefined) settings.showCompleteSetup = showCompleteSetup;

      const updatedSettings = await settings.save();
      return successResponse({ success: true, settings: updatedSettings }, 'Settings updated', 200);
    } else {
      const newSettings = await SetupSettings.create({
        showHeader,
        showLogo,
        allowModelSearch,
        showInstallationFailed,
        showCompleteSetup,
      });
      return successResponse({ success: true, settings: newSettings }, 'Settings created', 201);
    }
  } catch (error) {
    console.error('Header-visibility POST error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}
