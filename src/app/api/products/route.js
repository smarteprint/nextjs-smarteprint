import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { successResponse, errorResponse } from '@/lib/response';
import { protectMiddleware, adminMiddleware } from '@/middleware/auth';
import Product from '@/models/Product';
import Category from '@/models/Category';

/**
 * GET /api/products
 * Fetch all products with filtering and pagination
 */
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const categoryName = searchParams.get('category');
    const search = searchParams.get('search');
    const brand = searchParams.get('brand');
    const sort = searchParams.get('sort');
    const technology = searchParams.get('technology');
    const usageCategory = searchParams.get('usageCategory');
    const allInOneType = searchParams.get('allInOneType');
    const wireless = searchParams.get('wireless');
    const mainFunction = searchParams.get('mainFunction');
    const pageSize = parseInt(searchParams.get('limit')) || 20;
    const page = parseInt(searchParams.get('page')) || 1;

    let query = {};

    // Category filter
    if (categoryName && categoryName !== 'undefined' && categoryName !== 'null') {
      const category = await Category.findOne({
        name: { $regex: new RegExp(`^${categoryName}$`, 'i') },
      });
      if (category) {
        query.category = category._id;
      } else {
        return successResponse(
          { products: [], page: 1, pages: 0, total: 0 },
          'No products found',
          200
        );
      }
    }

    // Search filter
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { shortDetails: { $regex: search, $options: 'i' } },
        { shortSpecification: { $regex: search, $options: 'i' } },
        { overview: { $regex: search, $options: 'i' } },
        { technicalSpecification: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } },
        { color: { $regex: search, $options: 'i' } },
      ];
    }

    // Structured attribute filters
    if (technology) {
      query.technology = technology;
    }
    if (usageCategory) {
      const values = Array.isArray(usageCategory)
        ? usageCategory
        : usageCategory.split(',');
      query.usageCategory = { $in: values };
    }
    if (allInOneType) {
      query.allInOneType = allInOneType;
    }
    if (wireless) {
      query.wireless = wireless;
    }
    if (mainFunction) {
      const values = Array.isArray(mainFunction)
        ? mainFunction
        : mainFunction.split(',');
      query.mainFunction = { $in: values };
    }

    // Brand filter
    if (brand && brand !== 'undefined' && brand !== 'null') {
      query.brand = { $regex: brand, $options: 'i' };
    }

    // Sort option
    let sortOption = {};
    if (sort === 'lowToHigh') {
      sortOption.price = 1;
    } else if (sort === 'highToLow') {
      sortOption.price = -1;
    }

    const count = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate('category', 'name')
      .sort(sortOption)
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return successResponse(
      { products, page, pages: Math.ceil(count / pageSize), total: count },
      'Products retrieved',
      200
    );
  } catch (error) {
    console.error('Products GET error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}

/**
 * POST /api/products
 * Create a new product (admin only)
 */
export async function POST(request) {
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
      title,
      brand,
      category,
      price,
      oldPrice,
      countInStock,
      description,
      shortDetails,
      shortSpecification,
      overview,
      technicalSpecification,
      color,
      width,
      height,
      depth,
      screenSize,
      images,
      technology,
      usageCategory,
      allInOneType,
      wireless,
      mainFunction,
    } = body;

    if (!title || !price || !category) {
      return errorResponse(
        'Title, price, and category are required',
        400
      );
    }

    // Generate slug
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');

    const product = await Product.create({
      title,
      brand: brand || '',
      category,
      price,
      oldPrice: oldPrice || price,
      countInStock: countInStock || 0,
      description: description || '',
      shortDetails: shortDetails || '',
      shortSpecification: shortSpecification || '',
      overview: overview || '',
      technicalSpecification: technicalSpecification || '',
      color: color || '',
      width: width || '',
      height: height || '',
      depth: depth || '',
      screenSize: screenSize || '',
      images: images || [],
      slug,
      technology: technology || '',
      usageCategory: usageCategory || [],
      allInOneType: allInOneType || '',
      wireless: wireless || '',
      mainFunction: mainFunction || [],
      reviews: [],
    });

    return successResponse(product, 'Product created successfully', 201);
  } catch (error) {
    console.error('Products POST error:', error);
    return errorResponse('Server error: ' + error.message, 500);
  }
}
