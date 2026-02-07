# Maintenance & Update Guide

Step-by-step guide for updating and maintaining the Arturo Morgadanes website.

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [Content Updates](#content-updates)
3. [Image Updates](#image-updates)
4. [Code Updates](#code-updates)
5. [Deployment](#deployment)
6. [Monitoring](#monitoring)
7. [Troubleshooting](#troubleshooting)
8. [Backup & Recovery](#backup--recovery)

---

## Quick Reference

### Most Common Updates

| Task | File | Time |
|------|------|------|
| Change phone number | `content/site.config.ts` | 2 min |
| Update prices | `content/services.ts` | 5 min |
| Add testimonial | `content/testimonials.ts` | 3 min |
| Add gallery photo | `content/gallery.ts` + images | 5 min |
| Update hours | `content/site.config.ts` | 2 min |

### Update Workflow

```
1. Edit file(s) locally
2. Test: npm run dev
3. Verify: npm run build
4. Deploy: git add . && git commit -m "message" && git push
```

---

## Content Updates

### Changing Business Information

**File:** `content/site.config.ts`

```typescript
export const siteConfig = {
  name: "Arturo Morgadanes",           // Business name
  tagline: "Fontanero de confianza",   // Tagline

  contact: {
    phone: "+34 666 123 456",          // Main phone
    whatsapp: "34666123456",           // WhatsApp (no +)
    email: "info@arturomorgadanes.es", // Email
    address: "Vigo, Pontevedra",       // Address
  },

  hours: {
    weekdays: "08:00 - 20:00",         // Mon-Fri
    saturday: "09:00 - 14:00",         // Saturday
    sunday: "Urgencias 24h",           // Sunday
  },

  stats: {
    experience: 15,                    // Years
    jobsCompleted: 2000,               // Total jobs
    googleReviewScore: 4.9,            // Rating
    googleReviewCount: 127,            // Reviews
  },
};
```

### Updating Service Prices

**File:** `content/services.ts`

Find the service and update:

```typescript
{
  slug: "desatascos",
  name: "Desatascos",
  priceRange: "60€ - 150€",  // ← Change this
  duration: "1-2 horas",      // ← And/or this
  // ...
}
```

### Adding a New Testimonial

**File:** `content/testimonials.ts`

Add at the **TOP** of the array:

```typescript
export const testimonials: Testimonial[] = [
  // ↓ ADD NEW ONES HERE ↓
  {
    name: "New Customer Name",
    location: "Vigo",
    service: "Desatascos",
    rating: 5,
    text: "Great service! Very professional...",
    date: "2025-01",  // YYYY-MM format
  },
  // existing testimonials below...
];
```

### Adding a Gallery Item

**Step 1:** Add images to `public/images/gallery/`
- Before image: `project-name-before.jpg`
- After image: `project-name-after.jpg`

**Step 2:** Edit `content/gallery.ts`, add at TOP:

```typescript
export const galleryItems: GalleryItem[] = [
  // ↓ ADD NEW ONES HERE ↓
  {
    id: "7",  // Increment from last ID
    title: "Project Title",
    description: "Description of work done...",
    beforeImage: "/images/gallery/project-name-before.jpg",
    afterImage: "/images/gallery/project-name-after.jpg",
    service: "Reforma de Baños",  // Must match service name
    date: "2025-01",
  },
  // existing items below...
];
```

### Adding a New Service

**Step 1:** Add image to `public/images/services/new-service.jpg`

**Step 2:** Edit `content/services.ts`, add new service object:

```typescript
{
  slug: "new-service",           // URL-friendly
  name: "New Service Name",
  shortDescription: "Brief one-liner...",
  priceRange: "50€ - 100€",
  duration: "1-2 horas",
  icon: "Wrench",                // Lucide icon name
  image: "/images/services/new-service.jpg",
  description: `
## Service Title

Full markdown description here...
  `,
  faqs: [
    {
      question: "Common question?",
      answer: "Answer here...",
    },
  ],
},
```

### Adding a New City/Service Area

**File:** `content/cities.ts`

Add new city object:

```typescript
{
  slug: "new-city",
  name: "New City",
  province: "Pontevedra",
  postalCodes: ["36XXX"],
  responseTime: "30 minutos",
  localContent: `
## Fontanero en New City

Content for the city page...
  `,
  nearbyAreas: ["Vigo", "Other City"],
},
```

---

## Image Updates

### Image Locations

| Type | Location | Recommended Size |
|------|----------|------------------|
| Hero | `public/images/hero/` | 1920x1080px |
| Services | `public/images/services/` | 800x600px |
| Gallery | `public/images/gallery/` | 1200x800px |
| OG Image | `public/og-image.jpg` | 1200x630px |
| Favicon | `public/favicon.ico` | 32x32px |

### Image Guidelines

1. **Format:** JPEG or WebP preferred (smaller file size)
2. **Quality:** 80-85% compression
3. **Naming:** lowercase, hyphens (e.g., `bathroom-reform-before.jpg`)
4. **Size:** Optimize before uploading (aim for < 200KB each)

### Replacing an Image

1. Delete old image from `public/images/`
2. Add new image with **same filename**
3. Clear browser cache to see changes

### Adding New Images

1. Add image to appropriate folder
2. Update content file with new path
3. Test locally: `npm run dev`

---

## Code Updates

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update to latest (may have breaking changes)
npm install package-name@latest

# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix
```

### Updating Next.js

```bash
# Update Next.js and React
npm install next@latest react@latest react-dom@latest
```

After major updates, always:
1. Run `npm run build`
2. Test locally: `npm start`
3. Check all pages work

### Adding New Pages

1. Create file: `app/new-page/page.tsx`
2. Add to navigation: `components/layout/Header.tsx`
3. Add to sitemap: `app/sitemap.ts`
4. Test and deploy

---

## Deployment

### Automatic Deployment

Pushing to `main` branch triggers automatic deployment on Vercel.

```bash
git add .
git commit -m "Update: description of changes"
git push
```

### Manual Deployment

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Deployment Checklist

- [ ] All changes tested locally
- [ ] Build passes: `npm run build`
- [ ] No TypeScript errors
- [ ] Images optimized
- [ ] Committed with descriptive message
- [ ] Pushed to main branch

### Rollback

If something breaks after deployment:

```bash
# View deployment history
vercel ls

# Rollback to previous deployment
vercel rollback
```

Or via Vercel Dashboard:
1. Go to project → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

## Monitoring

### Regular Checks

| Check | Frequency | Tool |
|-------|-----------|------|
| Site is live | Weekly | Browser |
| Contact form works | Weekly | Test submission |
| Analytics data | Monthly | Google Analytics |
| Search rankings | Monthly | Google Search Console |
| Email delivery | Weekly | Resend dashboard |

### Health Check URLs

```bash
# Check site is live
curl -I https://arturomorgadanes.es

# Check sitemap
curl https://arturomorgadanes.es/sitemap.xml

# Check robots.txt
curl https://arturomorgadanes.es/robots.txt
```

### Monitoring Dashboards

| Service | URL | Purpose |
|---------|-----|---------|
| Vercel | vercel.com/dashboard | Deployments, errors |
| Resend | resend.com/emails | Email delivery |
| Google Analytics | analytics.google.com | Traffic, events |
| Search Console | search.google.com/search-console | SEO, indexing |

---

## Troubleshooting

### Build Fails

```bash
# 1. Check error message in terminal
npm run build

# 2. Check TypeScript errors
npx tsc --noEmit

# 3. Check linting errors
npm run lint

# 4. Clear cache and rebuild
rm -rf .next && npm run build
```

### Site Not Loading

1. Check Vercel deployment status
2. Check DNS records
3. Check SSL certificate
4. Review Vercel function logs

### Contact Form Not Working

1. Check `RESEND_API_KEY` in Vercel environment variables
2. Check domain verification in Resend dashboard
3. Check Vercel function logs for errors
4. Test with a different email address

### Images Not Showing

1. Check file exists in `public/images/`
2. Check path in content file (case-sensitive!)
3. Check file extension matches
4. Clear browser cache

### Analytics Not Tracking

1. Check `NEXT_PUBLIC_GA_ID` is set
2. Check cookie consent was given (clear localStorage to re-test)
3. Check browser ad blockers
4. Use GA debug extension

---

## Backup & Recovery

### What to Backup

| Item | Location | Backup Method |
|------|----------|---------------|
| Code | GitHub | Automatic (git push) |
| Content | `content/` folder | Git history |
| Images | `public/images/` | Git history |
| Env vars | Vercel dashboard | Document separately |

### Restore from Backup

All code and content is in Git. To restore:

```bash
# View commit history
git log --oneline

# Restore specific file from previous commit
git checkout <commit-hash> -- path/to/file

# Restore entire project to previous state
git revert <commit-hash>
```

### Environment Variables Backup

Keep a secure copy of:
- `RESEND_API_KEY`
- `RESEND_DOMAIN`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_CAL_LINK`

Store in a password manager, not in code.

---

## Maintenance Schedule

### Weekly
- [ ] Test contact form
- [ ] Check site loads correctly
- [ ] Review any Vercel alerts

### Monthly
- [ ] Review Google Analytics
- [ ] Check Search Console for issues
- [ ] Review email delivery stats
- [ ] Add new testimonials (if available)

### Quarterly
- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Review and update content
- [ ] Check all images load
- [ ] Test on different devices

### Annually
- [ ] Review and update legal pages
- [ ] Update copyright year (automatic)
- [ ] Review SEO keywords
- [ ] Update business stats (experience, jobs completed)
- [ ] Review pricing across all services

---

## Support Contacts

| Issue | Contact |
|-------|---------|
| Hosting (Vercel) | vercel.com/help |
| Email (Resend) | resend.com/docs |
| Domain | Your registrar |
| Development | Check PRD.md for guidelines |
