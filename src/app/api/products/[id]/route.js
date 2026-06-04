import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { successResponse, errorResponse } from '@/lib/response';
import { protectMiddleware, adminMiddleware } from '@/middleware/auth';
import Product from '@/models/Product';
import mongoose from 'mongoose';

/**
 * GET /api/products/[id]
 * Fetch single product by ID or slug
 */
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    let product;

    // Try to find by ID first
    if (mongoose.Types.ObjectId.isValid(id)) {
      product = await Product.findById(id).populate('category', 'name');
    }

    // If not found by ID, try by slug
    if (!product) {
      product = await Product.findOne({ slug: id }).populate(
        'category',
        'name'
      );
    }

    // Fallback: try fuzzy match by title
    if (!product) {
      const titlePattern = id.replace(/-/g, ' ');
      product = await Product.findOne({
        title: { $regex: new RegExp(`^${titlePattern}$`, 'i') },
      }).populate('category', 'name');
    }

    // Last resort: partial match
    if (!product) {
      const parts = id.split('-');
      const firstFewParts = parts
        .slice(0, Math.min(parts.length, 3))
        .join(' ');
      if (firstFewParts.length > 5) {
        product = await Product.findOne({
          title: { $regex: new RegExp(firstFewParts, 'i') },
        }).populate('category', 'name');
      }
    }

    if (!product) {
      return errorResponse('Product not found', 404);
    }

    return successResponse(product, 'Product retrieved', 200);
  } catch (error) {
    console.error('Product GET error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * PUT /api/products/[id]
 * Update a product (admin only)
 */
export async function PUT(request, { params }) {
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

    const { id } = params;
    const body = await request.json();

    const product = await Product.findById(id);

    if (!product) {
      return errorResponse('Product not found', 404);
    }

    // Update fields
    Object.keys(body).forEach((key) => {
      if (key !== '_id') {
        product[key] = body[key];
      }
    });

    const updatedProduct = await product.save();

    return successResponse(
      updatedProduct,
      'Product updated successfully',
      200
    );
  } catch (error) {
    console.error('Product PUT error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * DELETE /api/products/[id]
 * Delete a product (admin only)
 */
export async function DELETE(request, { params }) {
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

    const { id } = params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return errorResponse('Product not found', 404);
    }

    return successResponse(
      { message: 'Product deleted successfully' },
      'Product deleted',
      200
    );
  } catch (error) {
    console.error('Product DELETE error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}
