# SmartEPrint Next.js 15 Migration - Phase 2 In Progress

Complete migration from MERN (React + Express) to single Next.js 15 full-stack application with App Router, using MongoDB, Mongoose, and JWT authentication.

## 📊 Current Status: 25% Complete

### Phase 1: Infrastructure ✅ 100% COMPLETE
- [x] Package.json (54 dependencies)
- [x] Next.js 15 configuration with optimizations
- [x] Tailwind CSS with custom SmartEPrint theme
- [x] TypeScript configuration with path aliases
- [x] ESLint rules and code formatting
- [x] All 9 MongoDB models (User, Product, Order, Cart, Category, Chat, OTP, etc.)
- [x] Authentication middleware (JWT, admin checks)
- [x] Email service (Brevo SMTP, OTP, contact forms)
- [x] Utility libraries (JWT, response formatting)
- [x] Environment configuration (.env.local.example with all backend vars)
- [x] Comprehensive documentation (8 guides)

### Phase 2: APIs & Pages 🔄 25% COMPLETE

#### ✅ COMPLETED
- [x] Root layout (`src/app/layout.jsx`) with Redux Provider
- [x] Global styles (`src/app/globals.css`)
- [x] Providers setup (`src/app/providers.jsx`)
- [x] Home page with hero and featured sections
- [x] Public route group layout
- [x] 8 Public pages:
  - [x] Shop (with product filtering)
  - [x] Contact Us (with email integration)
  - [x] About Us
  - [x] FAQ (with expandable items)
  - [x] Privacy Policy
  - [x] Terms & Conditions
  - [x] Cart
- [x] Core reusable components:
  - [x] Header (with navigation & mobile menu)
  - [x] Footer (with links & contact info)
  - [x] ScrollToTop (floating button)
- [x] Basic Redux store setup
- [x] All 18 API route skeletons created
- [x] Phase 2 Completion Guide
- [x] Quick Reference Guide

#### ⏳ IN PROGRESS / TO DO

**Phase 2: API Routes (18 files required)**
- Authentication endpoints
- Product management
- Category management
- Order processing
- Shopping cart
- Chat system
- Contact forms
- Admin panel
- Shipping calculations

**Phase 3: Pages & Layouts (40+ files required)**
- Public pages (home, shop, product details, about, contact, etc.)
- Auth pages (login, register)
- User pages (profile, orders, track)
- Admin pages (dashboard, products, orders, customers, analytics)
- Setup pages (printer setup guide)

**Phase 4: React Components (60+ files required)**
- Copy all components from frontend/src/components/
- Update imports and dependencies
- Add 'use client' directive where needed
- Replace React Router with Next.js navigation
- Update API calls to new routes

**Phase 5: Redux Store**
- Copy Redux setup from frontend
- Add 'use client' wrapper
- Setup Provider in root layout

**Phase 6: Testing & Deployment**
- Test all features
- Deploy to Vercel
- Monitor performance

---

## 🚀 Quick Start

### 1. Installation
```bash
cd nextjs
npm install
```

### 2. Environment Setup
```bash
# Copy the example to create your local env
cp .env.local.example .env.local

# Edit .env.local with your configuration
nano .env.local
```

### Required Environment Variables
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secure_key_here_32_chars_min
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOVER_PUBLIC_KEY=your_key
```

### 3. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nextjs/
├── src/
│   ├── app/
│   │   ├── api/              # API routes (18 files to create)
│   │   ├── (auth)/           # Auth pages
│   │   ├── (admin)/          # Admin pages
│   │   ├── (public)/         # Public pages  
│   │   ├── (setup)/          # Setup pages
│   │   ├── layout.js         # Root layout (to create)
│   │   └── page.js           # Home page (to create)
│   ├── components/           # React components (to copy)
│   ├── lib/                  # Utilities (mostly complete)
│   ├── middleware/           # Auth middleware (complete)
│   ├── models/               # MongoDB schemas (complete)
│   ├── redux/                # State management (to copy)
│   ├── hooks/                # Custom hooks (to create)
│   ├── services/             # API services (to create)
│   └── utils/                # Helper functions (to create)
├── public/                   # Static assets
├── package.json              # Dependencies
├── next.config.js            # Next.js config
├── tailwind.config.js        # Tailwind CSS config
├── tsconfig.json             # TypeScript config
└── .env.local                # Local environment (create from .env.local.example)
```

---

## 🔄 Migration Files

### Key Documentation Files

1. **MIGRATION_GUIDE.md** - Complete step-by-step implementation guide
2. **FILE_LISTING_AND_ROUTES.md** - Complete file inventory and route mappings
3. **API_ROUTES_DOCUMENTATION.md** - API endpoint documentation (if created)
4. **README.md** - This file

### What's Already Done

1. ✅ All configuration files created
2. ✅ All MongoDB models converted to ESM format
3. ✅ Authentication middleware ready
4. ✅ JWT utilities ready
5. ✅ Email service configured
6. ✅ Response handling utilities ready
7. ✅ Tailwind CSS fully configured
8. ✅ ESLint configured

### What Needs to Be Done

The remaining work is primarily migrating:
- 18 API route files from Express to Next.js
- 40+ page files from React Router to Next.js App Router
- 60+ React component files (copy and update)
- Redux store setup with Next.js
- Various utility functions

---

## 📚 Documentation

### For Developers
- **MIGRATION_GUIDE.md** - Read this first! Comprehensive implementation guide
- **FILE_LISTING_AND_ROUTES.md** - Complete file structure and route mappings
- **next.config.js** - Next.js specific configuration
- **tailwind.config.js** - Styling configuration

### For API Development
- Study the middleware examples in `src/middleware/auth.js`
- Review MongoDB model patterns in `src/models/`
- Check utility functions in `src/lib/`

### For Component Development
- Move components from `../../frontend/src/components/` to `src/components/`
- Update all imports to use `@/` alias
- Add `'use client'` at the top of client components
- Replace `<img>` tags with `<Image from='next/image'>`
- Replace React Router navigation with Next.js

---

## 🔐 Security

### Authentication Flow
1. User logs in via `/api/auth` endpoint
2. JWT token is generated (30-day expiration)
3. Token is stored in localStorage (frontend)
4. Token is sent in Authorization header for protected routes
5. Middleware verifies token on each request

### Protected Routes Pattern
All protected routes use the `protectMiddleware` which:
- Extracts JWT token from Authorization header
- Verifies token signature
- Fetches user from database
- Checks if user is blocked
- Attaches user to request object

### Admin Routes Pattern
Admin routes chain both `protectMiddleware` and `adminMiddleware`:
- Verifies user authentication
- Checks if user has isAdmin flag
- Denies access if not admin

---

## 🗄️ Database

### Models Available
1. **User** - User accounts with passwords
2. **Product** - Product catalog with reviews
3. **Order** - Customer orders
4. **Cart** - Shopping cart per user
5. **Category** - Product categories
6. **Chat** - Customer support chats
7. **OTP** - One-time passwords for registration/reset
8. **PrinterRegistration** - Printer setup registration
9. **SetupSettings** - Admin settings for setup pages

### Connection
Database connection uses MongoDB connection pooling:
- Automatic connection management
- Connection pooling for performance
- Handles connection failures gracefully

---

## 📧 Email Configuration

### Supported Email Services
1. **Brevo (Sendinblue)** - Production recommended
2. **Gmail SMTP** - For testing
3. **Custom SMTP** - Any compatible service

### Email Features
- OTP for user registration
- Password reset emails
- Order confirmations (if implemented)
- Contact form replies

### Setup
Set these environment variables:
```
EMAIL_SERVICE=brevo
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-smtp-password
EMAIL_FROM=noreply@domain.com
```

---

## 🚢 Deployment to Vercel

### Pre-Deployment
1. Ensure all API routes are created and tested
2. Ensure all pages are created
3. Run `npm run build` successfully
4. Verify `.env.local` is NOT committed to git

### Deployment Steps
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Add environment variables in Vercel dashboard
# Go to Settings → Environment Variables
# Add all variables from .env.local

# 4. Trigger rebuild
vercel --prod
```

### Vercel Configuration
- Build command: `npm run build`
- Start command: `npm start`
- Node version: 18.x or later
- All environment variables from .env.local

---

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Run development server (hot reload)
npm run dev

# Run production build
npm run build

# Start production server
npm start

# Check code quality
npm run lint

# Format code
npm run lint -- --fix
```

---

## 📈 Performance Optimizations

### Already Implemented
- Image optimization via next/image
- Automatic code splitting
- Server-side rendering for SEO
- API routes compression
- CORS headers configured
- CSS minification with Tailwind

### Recommended Additions
- Image caching headers
- API route response caching
- Database query optimization
- React component lazy loading
- Monitoring with Vercel Analytics

---

## 🐛 Troubleshooting

### Issue: "Cannot find module '@/lib/mongodb'"
**Solution:** Ensure `tsconfig.json` has correct path aliases

### Issue: "MONGODB_URI is not defined"
**Solution:** Create `.env.local` file with all required variables

### Issue: "Port 3000 already in use"
**Solution:** `npm run dev -- -p 3001` (use different port)

### Issue: Hydration mismatch errors
**Solution:** Use `'use client'` directive and useEffect for client-only rendering

### Issue: API routes returning 405 Method Not Allowed
**Solution:** Ensure route.js file has the required HTTP method (GET, POST, etc.)

---

## 📝 Implementation Checklist

### Phase 1: Setup ✅
- [x] Create package.json
- [x] Create configuration files
- [x] Create middleware
- [x] Create models
- [x] Create utilities

### Phase 2: API Routes ⏳
- [ ] Create all 18 route files
- [ ] Test all endpoints
- [ ] Verify authentication
- [ ] Verify admin access

### Phase 3: Pages ⏳
- [ ] Create all page.js files
- [ ] Create layouts
- [ ] Setup route groups
- [ ] Create dynamic routes

### Phase 4: Components ⏳
- [ ] Copy components
- [ ] Update imports
- [ ] Add 'use client' directives
- [ ] Update navigation
- [ ] Test rendering

### Phase 5: State Management ⏳
- [ ] Copy Redux store
- [ ] Setup Provider
- [ ] Test Redux actions
- [ ] Verify state persistence

### Phase 6: Testing & Deployment ⏳
- [ ] Test all features
- [ ] Performance testing
- [ ] Deploy to Vercel
- [ ] Monitor in production

---

## 📞 Support

For help with:
- **Next.js Questions:** https://nextjs.org/docs
- **API Routes:** https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **MongoDB:** https://mongoosejs.com/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Deploy:** https://vercel.com/docs

---

## 📄 License

This project is part of the SmartEPrint application suite.

---

**Last Updated:** 2024  
**Migration Status:** In Progress (~15% Complete)  
**Target Completion:** 40-60 hours estimated  
**Framework:** Next.js 15 with App Router  
**Database:** MongoDB with Mongoose  
**Deployment:** Vercel Ready
