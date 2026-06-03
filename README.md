# Holiday Home Host

Premium holiday home rentals and short-term rental management in Ras Al Khaimah, UAE.

Built with **React 18**, **Vite 5**, and deployed on **Vercel**.

## Quick start

```bash
npm install
cp .env.example .env.local   # add LODGIFY_API_KEY
npm run dev                    # http://localhost:5173
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server with Lodgify API middleware |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `LODGIFY_API_KEY` | Production | Lodgify Public API key for `/api/properties` |

Set in `.env.local` for local dev and in Vercel Dashboard → Environment Variables for production.

## Project structure

```
api/           Vercel serverless (properties API)
lib/lodgify/   Shared Lodgify fetch/merge logic
public/        Static assets (WebP images, hero)
src/           React application
docs/          Deployment & audit documentation
scripts/       Image optimization utilities
```

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/about` | About |
| `/property/:id` | Property details (Lodgify ID) |
| `/gallery` | Full gallery |
| `/property-owners` | Owner information |
| `/services`, `/commission` | Services |
| `/how-it-works`, `/roi-calculator` | Process tools |
| `/partnerships`, `/partnership-agreements`, `/real-estate-agencies` | Partnerships |

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for Vercel setup, caching, and troubleshooting.

## Documentation

- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — Vercel deployment guide
- [docs/PERFORMANCE_ANALYSIS.md](docs/PERFORMANCE_ANALYSIS.md) — Lighthouse optimization report
- [docs/REPOSITORY_AUDIT.md](docs/REPOSITORY_AUDIT.md) — File dependency audit
- [docs/CLEANUP_REPORT.md](docs/CLEANUP_REPORT.md) — Phase 3 cleanup summary
