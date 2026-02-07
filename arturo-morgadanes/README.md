# Arturo Morgadanes

Professional plumber website for Arturo Morgadanes serving Vigo and surrounding areas in Galicia, Spain.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Resend API
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Documentation

All documentation is in the [docs/](docs/) folder:

| Document | Description |
|----------|-------------|
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Complete deployment, hosting, and update guide |
| [PRD.md](docs/PRD.md) | Product requirements and development guidelines |

## Project Structure

```
arturo-morgadanes/
├── app/                 # Next.js pages and API routes
├── components/          # React components
├── content/             # Content data (TypeScript)
├── docs/                # Documentation
├── lib/                 # Utility functions
└── public/              # Static assets
```

## Content Management

All content is managed through TypeScript files in `content/`:

- `business.ts` - Business information
- `services.ts` - Service listings
- `cities.ts` - Service area cities
- `testimonials.ts` - Customer reviews
- `gallery.ts` - Gallery items

## Environment Variables

```env
RESEND_API_KEY=re_xxxxxxxxxx      # Required
RESEND_DOMAIN=domain.com          # Required
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX    # Optional
NEXT_PUBLIC_CAL_LINK=username     # Optional
```

## License

Private - All rights reserved.
