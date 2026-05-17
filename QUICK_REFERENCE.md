# Quick Reference: Vercel Deployment

## 🚀 Essential Commands

```bash
# Install dependencies
npm install

# Local development
npm run dev
# Opens at http://localhost:5173

# Build for production (same as Vercel)
npm run build
# Output in: dist/

# Preview production build locally
npm run preview

# Check build size
npm run build --report
```

## ✨ What's Optimized

| Aspect | Optimization |
|--------|--------------|
| **Minification** | Terser with console removal |
| **Bundling** | React & Router split into separate chunks |
| **Caching** | Assets cached for 1 year with versioned names |
| **Security** | 5 security headers added |
| **Source Maps** | Disabled in production (smaller builds) |
| **Output Directory** | `/dist` (configured for Vercel) |

## 📦 Build Output Structure

```
dist/
├── index.html              (entry point)
├── js/
│   ├── main-[hash].js     (app code)
│   ├── react-vendor-[hash].js
│   └── router-[hash].js
└── assets/
    ├── images-[hash].webp
    └── fonts-[hash].woff2
```

## 🔧 Configuration Files Modified

1. **package.json** - Added Node.js version requirement
2. **vite.config.js** - Production optimization & asset organization
3. **vercel.json** - Build command, rewrites, caching, security headers
4. **.gitignore** - Excluded legacy files to reduce repo size

## 📡 Deployment Checklist

- [ ] Run `npm install`
- [ ] Run `npm run build` locally to verify
- [ ] Push to GitHub
- [ ] Connect repository on vercel.com
- [ ] Monitor first deployment
- [ ] Test all routes work correctly
- [ ] Check Vercel Analytics

## ⚡ Performance Tips

1. **Lazy load heavy components** using React.lazy()
2. **Optimize images** - use WebP format with fallbacks
3. **Monitor bundle** - run `npm run build` before each deployment
4. **Enable compression** - Vercel handles Brotli/Gzip automatically
5. **Use dynamic imports** for page routes to reduce initial bundle

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Routes return 404 | Vercel.json rewrite is configured ✓ |
| Slow load times | Check Vercel Analytics → Web Vitals |
| Assets not found | Ensure files are in `public/` or imported |
| Build fails | Check npm run build output locally first |

## 🌐 Next Deployment

Simply push code to GitHub and Vercel auto-deploys! No additional config needed.

---
See `VERCEL_DEPLOYMENT_GUIDE.md` for detailed setup instructions.
