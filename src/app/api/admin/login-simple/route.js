import { successResponse, errorResponse } from '@/lib/response';
import jwt from 'jsonwebtoken';

/**
 * POST /api/admin/login-simple
 * Simple admin login (non-DB) for setup panel
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === 'admin' && password === 'password123') {
      // Sign a token that includes isAdmin: true so verifySetupAdmin works
      const token = jwt.sign(
        { id: 'setup-admin-id', isAdmin: true },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );

      return successResponse(
        {
          _id: 'setup-admin-id',
          name: 'Setup Admin',
          isAdmin: true,
          token,
        },
        'Login successful',
        200
      );
    } else {
      return errorResponse('Invalid setup admin credentials', 401);
    }
  } catch (error) {
    console.error('Simple login error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}
