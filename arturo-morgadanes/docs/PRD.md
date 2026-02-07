# Product Requirements Document (PRD)
## Arturo Morgadanes - Professional Plumber Website

**Version:** 1.0
**Last Updated:** February 2026
**Status:** Production Ready

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Directory Structure](#directory-structure)
4. [Content Management](#content-management)
5. [Features & Components](#features--components)
6. [API Endpoints](#api-endpoints)
7. [SEO Implementation](#seo-implementation)
8. [GDPR Compliance](#gdpr-compliance)
9. [Styling & Design System](#styling--design-system)
10. [Development Guidelines](#development-guidelines)
11. [Future Enhancements](#future-enhancements)
12. [Claude Code Instructions](#claude-code-instructions)

---

## Project Overview

### Purpose

A professional Spanish-language website for "Arturo Morgadanes", a plumber serving Vigo and surrounding areas in Galicia, Spain. The site is designed for lead generation through contact forms, WhatsApp, and phone calls.

### Business Goals

- Generate leads from local searches (SEO-focused)
- Provide easy contact methods (form, WhatsApp, phone)
- Showcase services and build trust
- Zero CMS for maintenance-free operation

### Target Audience

- Homeowners in Vigo and surrounding cities
- Property managers
- Businesses needing plumbing services
- Spanish-speaking users (primary language: Spanish)

### Key Metrics

- Contact form submissions
- WhatsApp button clicks
- Phone call clicks
- Service page views
- Local search rankings

---

## Technical Architecture

### Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Email | Resend API | - |
| Analytics | Google Analytics 4 | - |
| Hosting | Vercel | - |
| Icons | Lucide React | - |

### Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Static Generation | Fast loading, SEO-friendly, low cost |
| No CMS | Zero maintenance, content in TypeScript files |
| App Router | Latest Next.js patterns, better SEO |
| Tailwind CSS | Rapid development, consistent styling |
| Resend | Simple email API, good deliverability |

### Environment Variables

```env
# Required
RESEND_API_KEY=re_xxxxxxxxxx
RESEND_DOMAIN=arturomorgadanes.es

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CAL_LINK=username
```

---

## Directory Structure

```
arturo-morgadanes/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (header, footer, analytics)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── not-found.tsx             # 404 page
│   ├── robots.ts                 # Robots.txt generator
│   ├── sitemap.ts                # Sitemap generator
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contacto/
│   │   └── page.tsx              # Contact page
│   ├── galeria/
│   │   └── page.tsx              # Gallery page
│   ├── politica-cookies/
│   │   └── page.tsx              # Cookie policy (GDPR)
│   ├── politica-privacidad/
│   │   └── page.tsx              # Privacy policy (GDPR)
│   ├── servicios/
│   │   ├── page.tsx              # Services listing
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic service pages
│   ├── sobre-mi/
│   │   └── page.tsx              # About page
│   └── zona-servicio/
│       └── [city]/
│           └── page.tsx          # Dynamic city landing pages
├── components/
│   ├── analytics/
│   │   └── GoogleAnalytics.tsx   # GA4 with Consent Mode v2
│   ├── gdpr/
│   │   └── CookieConsent.tsx     # Cookie consent banner
│   ├── layout/
│   │   ├── Header.tsx            # Site header
│   │   ├── Footer.tsx            # Site footer
│   │   └── MobileNav.tsx         # Mobile navigation
│   ├── seo/
│   │   ├── LocalBusinessSchema.tsx  # Schema.org markup
│   │   └── ServiceSchema.tsx        # Service schema
│   └── ui/
│       ├── CallButton.tsx        # Floating call button
│       ├── ContactForm.tsx       # Contact form component
│       ├── HeroSection.tsx       # Hero section
│       ├── TestimonialCard.tsx   # Testimonial display
│       ├── TrustBadges.tsx       # Trust indicators
│       └── WhatsAppButton.tsx    # Floating WhatsApp button
├── content/                      # Content data files
│   ├── business.ts               # Business information
│   ├── cities.ts                 # Service area cities
│   ├── gallery.ts                # Gallery items
│   ├── services.ts               # Services data
│   └── testimonials.ts           # Customer reviews
├── lib/
│   └── utils.ts                  # Utility functions
├── public/
│   └── images/                   # Static images
├── DEPLOYMENT.md                 # Deployment guide
├── PRD.md                        # This document
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Content Management

### Content Files

All content is managed through TypeScript files in the `content/` directory. This approach provides:

- Type safety
- No database needed
- Version control for content
- Zero runtime cost

### Business Information (`content/business.ts`)

```typescript
export const business = {
  name: string;           // Business name
  phone: string;          // Phone with country code
  whatsapp: string;       // WhatsApp number (no +)
  email: string;          // Contact email
  address: string;        // Physical address
  tagline: string;        // Short description
  experience: number;     // Years of experience
  serviceRadius: string;  // Service area description
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
};
```

### Services (`content/services.ts`)

```typescript
interface Service {
  slug: string;           // URL slug
  name: string;           // Service name
  shortDescription: string;
  description: string;    // Full description
  icon: string;           // Lucide icon name
  image: string;          // Image path
  features: string[];     // Service features
  callToAction: string;   // CTA text
}
```

### Cities (`content/cities.ts`)

```typescript
interface City {
  slug: string;           // URL slug
  name: string;           // City name
  description: string;    // SEO description
  areas: string[];        // Neighborhoods/areas
  distance: string;       // Distance from base
}
```

---

## Features & Components

### Contact Form

**File:** `components/ui/ContactForm.tsx`

Features:
- Client-side validation
- Rate limiting (5 submissions per hour)
- Honeypot spam protection
- Success/error feedback
- Spanish language

Fields:
- Name (required)
- Phone (required, Spanish format)
- Email (optional)
- Service type (select)
- Message (required)

### Floating Action Buttons

**WhatsApp Button** (`components/ui/WhatsAppButton.tsx`)
- Fixed position bottom-right
- Opens WhatsApp with pre-filled message
- Tracks clicks in GA4

**Call Button** (`components/ui/CallButton.tsx`)
- Fixed position bottom-right (above WhatsApp)
- Click-to-call on mobile
- Tracks clicks in GA4

### Cookie Consent

**File:** `components/gdpr/CookieConsent.tsx`

Features:
- Full-screen overlay until choice made
- Three options: Accept All, Only Necessary, Configure
- Granular cookie control
- localStorage persistence with versioning
- Footer link to reopen settings

### Google Analytics

**File:** `components/analytics/GoogleAnalytics.tsx`

Features:
- Consent Mode v2 (default denied)
- Automatic consent state restoration
- IP anonymization
- Custom event tracking
- Predefined events for form, WhatsApp, phone clicks

---

## API Endpoints

### POST `/api/contact`

**Purpose:** Handle contact form submissions

**Request Body:**
```typescript
{
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
  honeypot?: string;  // Must be empty
}
```

**Response:**
```typescript
// Success (200)
{ success: true, message: string }

// Error (400/429/500)
{ error: string }
```

**Features:**
- Input validation
- Rate limiting by IP
- Honeypot spam detection
- Email via Resend API
- Spanish response messages

---

## SEO Implementation

### Meta Tags

Each page includes:
- Title with template (`%s | Business Name`)
- Description
- Keywords
- Open Graph tags
- Twitter cards
- Canonical URLs

### Schema.org Markup

**LocalBusiness Schema** (`components/seo/LocalBusinessSchema.tsx`)
- Business name, address, phone
- Service area
- Opening hours
- Price range

**Service Schema** (`components/seo/ServiceSchema.tsx`)
- Service name, description
- Provider information
- Area served

### Sitemap

**File:** `app/sitemap.ts`

Includes:
- All static pages
- All service pages (dynamic)
- All city pages (dynamic)
- Legal pages

### Robots.txt

**File:** `app/robots.ts`

Configuration:
- Allow all crawlers
- Reference sitemap
- No disallowed paths

---

## GDPR Compliance

### Cookie Categories

| Category | Purpose | Required |
|----------|---------|----------|
| Necessary | Site functionality | Yes |
| Analytics | Google Analytics | Consent |
| Marketing | Advertising | Consent |

### Consent Flow

1. User visits site
2. Banner appears with overlay
3. User chooses: Accept All / Only Necessary / Configure
4. Choice saved to localStorage
5. Analytics enabled/disabled accordingly
6. User can change via footer link

### Legal Pages

- `/politica-privacidad` - RGPD/LOPDGDD compliant privacy policy
- `/politica-cookies` - Cookie policy with detailed list

---

## Styling & Design System

### Colors

```css
/* Primary */
--blue-700: #1d4ed8   /* Primary buttons */
--blue-600: #2563eb   /* Hover states */
--blue-500: #3b82f6   /* Accents */

/* Neutral */
--gray-900: #111827   /* Footer, headings */
--gray-700: #374151   /* Body text */
--gray-300: #d1d5db   /* Borders */
--gray-50: #f9fafb    /* Backgrounds */

/* Accent */
--green-500: #22c55e  /* WhatsApp */
--yellow-500: #eab308 /* Urgency indicators */
```

### Typography

- Font: Inter (Google Fonts)
- Headings: Bold, gray-900
- Body: Regular, gray-700
- Links: Blue-600

### Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

---

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Functional components with hooks
- Named exports (not default)
- Spanish text in UI, English in code comments

### Component Patterns

```typescript
// Component structure
"use client";  // Only if needed

import { ... } from "...";

interface Props {
  // Typed props
}

export function ComponentName({ prop }: Props) {
  // Hooks first
  // Logic
  // Return JSX
}
```

### Adding New Pages

1. Create `app/page-name/page.tsx`
2. Add metadata export
3. Add to sitemap.ts
4. Add to navigation if needed

### Adding New Services

1. Add entry to `content/services.ts`
2. Add service image to `public/images/services/`
3. Sitemap updates automatically (generateStaticParams)

### Testing

```bash
# Development
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production build
npm run build
```

---

## Future Enhancements

### Potential Features

| Feature | Priority | Complexity |
|---------|----------|------------|
| Blog section | Medium | Medium |
| Online booking (Cal.com) | High | Low |
| Multi-language (Galician) | Low | Medium |
| Customer portal | Low | High |
| Service request tracking | Medium | High |
| Photo upload in form | Medium | Medium |
| SMS notifications | Medium | Low |
| Review integration | High | Medium |

### Technical Improvements

| Improvement | Priority | Notes |
|-------------|----------|-------|
| Image optimization | High | Add next/image placeholders |
| Performance monitoring | Medium | Add web vitals tracking |
| Error tracking | Medium | Add Sentry or similar |
| A/B testing | Low | Test CTAs, forms |
| PWA support | Low | Offline capability |

---

## Claude Code Instructions

### Context for AI Development

This section provides guidance for Claude Code or other AI assistants working on this project.

### Project Understanding

1. **Language**: UI is in Spanish, code comments in English
2. **Content**: All managed in `content/` TypeScript files
3. **No CMS**: Content changes require code deployment
4. **Static First**: Most pages are statically generated

### Common Tasks

#### Adding a New Service

```bash
# 1. Edit content/services.ts - add new service object
# 2. Add image to public/images/services/
# 3. Build to verify: npm run build
# 4. Sitemap updates automatically
```

#### Adding a New City

```bash
# 1. Edit content/cities.ts - add new city object
# 2. Build to verify: npm run build
# 3. City page auto-generated via [city]/page.tsx
```

#### Updating Business Info

```bash
# Edit content/business.ts
# All components import from here
```

#### Modifying Contact Form

```bash
# Frontend: components/ui/ContactForm.tsx
# Backend: app/api/contact/route.ts
# Ensure validation matches both sides
```

### Important Files to Know

| Task | Files |
|------|-------|
| Layout changes | `app/layout.tsx`, `components/layout/*` |
| Styling | `app/globals.css`, `tailwind.config.ts` |
| SEO | `app/layout.tsx`, `components/seo/*` |
| Analytics | `components/analytics/GoogleAnalytics.tsx` |
| GDPR | `components/gdpr/CookieConsent.tsx` |
| Content | `content/*.ts` |

### Code Patterns to Follow

1. **Components**: Use `"use client"` only when needed
2. **Types**: Define interfaces in same file or import
3. **Icons**: Use Lucide React icons
4. **Links**: Use Next.js `Link` component
5. **Images**: Use Next.js `Image` when possible

### Testing Changes

```bash
# Always run before committing
npm run build

# For TypeScript issues
npx tsc --noEmit
```

### Deployment

Changes pushed to `main` branch auto-deploy to Vercel.

### Things to Avoid

1. Don't add database dependencies
2. Don't change content structure without updating all references
3. Don't remove GDPR compliance features
4. Don't hardcode business info outside `content/business.ts`
5. Don't use inline styles (use Tailwind)

### Questions to Ask User

When making changes, clarify:
- Is this for content or functionality?
- Should this be in Spanish or English?
- Does this need GDPR considerations?
- Should this track in analytics?

---

## Appendix

### Page Count Summary

| Type | Count |
|------|-------|
| Static pages | 8 |
| Service pages | 6 |
| City pages | 6 |
| Legal pages | 2 |
| API routes | 1 |
| **Total** | **23+** |

### Third-Party Dependencies

| Package | Purpose |
|---------|---------|
| next | Framework |
| react | UI library |
| typescript | Type safety |
| tailwindcss | Styling |
| lucide-react | Icons |
| resend | Email API |

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

---

*This document should be updated when significant changes are made to the project architecture or features.*
