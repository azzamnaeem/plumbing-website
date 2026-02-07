# Documentation

This folder contains all project documentation for the Arturo Morgadanes website.

## Documents

### [MAINTENANCE.md](MAINTENANCE.md) - Start Here for Updates

**Step-by-step guide for updating and maintaining the website.**

- Quick reference for common updates
- Content update instructions
- Image update guidelines
- Deployment process
- Monitoring checklist
- Troubleshooting guide
- Backup & recovery

### [DEPLOYMENT.md](DEPLOYMENT.md) - Initial Setup & Hosting

**Complete guide for deploying and hosting the website.**

- Prerequisites and setup
- Vercel deployment (dashboard + CLI)
- Domain and DNS configuration
- Third-party service setup (Resend, GA, Search Console)
- GDPR compliance checklist
- Cost summary

### [PRD.md](PRD.md) - Technical Reference

**Product Requirements Document for developers and AI-assisted coding.**

- Project overview and goals
- Technical architecture
- Directory structure
- Content management schemas
- Feature specifications
- API documentation
- Design system (colors, typography)
- Development guidelines
- Claude Code / AI assistant instructions

## Quick Links

| Task | Document |
|------|----------|
| **Update phone/email/hours** | [MAINTENANCE.md](MAINTENANCE.md#changing-business-information) |
| **Update prices** | [MAINTENANCE.md](MAINTENANCE.md#updating-service-prices) |
| **Add testimonial** | [MAINTENANCE.md](MAINTENANCE.md#adding-a-new-testimonial) |
| **Add gallery item** | [MAINTENANCE.md](MAINTENANCE.md#adding-a-gallery-item) |
| **Add new service** | [MAINTENANCE.md](MAINTENANCE.md#adding-a-new-service) |
| **Add new city** | [MAINTENANCE.md](MAINTENANCE.md#adding-a-new-cityservice-area) |
| **Deploy changes** | [MAINTENANCE.md](MAINTENANCE.md#deployment) |
| **Fix issues** | [MAINTENANCE.md](MAINTENANCE.md#troubleshooting) |
| **Initial setup** | [DEPLOYMENT.md](DEPLOYMENT.md) |
| **Technical details** | [PRD.md](PRD.md) |

## Content Files

All website content is in the `content/` folder:

| File | Purpose |
|------|---------|
| `site.config.ts` | Business info, contact, hours |
| `services.ts` | Service pages & prices |
| `testimonials.ts` | Customer reviews |
| `gallery.ts` | Portfolio items |
| `cities.ts` | Service area pages |

See [content/README.md](../content/README.md) for detailed editing instructions.

## For AI Assistants

If you're an AI assistant (Claude Code, Cursor, etc.) working on this project:

1. Read [PRD.md](PRD.md) first for full context
2. Check the "Claude Code Instructions" section for common tasks
3. Content files are in `content/` - each has inline documentation
4. Follow the code patterns documented in PRD.md
5. Always run `npm run build` before committing
