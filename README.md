# My Pup and Me

A premium, mobile-first brand website for **My Pup and Me** — stylish, comfortable harnesses and matching leads designed for puppies, toy breeds and small dogs.

Products are purchased at [My Chi and Me](https://mychiandme.co.uk/collections/my-pup-and-me).

## Tech Stack

- React 19 + TypeScript
- Vite 6
- React Router 7
- Static prerendering for SEO
- Netlify deployment

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This runs:
1. TypeScript compilation (`tsc -b`)
2. Vite production build
3. Static prerendering of all routes (unique title, meta, canonical, structured data per page)

## SEO Audit

After building, validate SEO across all prerendered routes:

```bash
npm run seo-audit
```

This checks:
- Duplicate titles
- Missing meta descriptions
- Missing canonical URLs
- Missing/invalid JSON-LD structured data
- Routes missing from sitemap
- robots.txt validity

## Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       → Header, Footer, AnnouncementBar, ShopBar
│   ├── sections/     → Homepage sections
│   ├── seo/          → SEOHead, StructuredData
│   └── ui/           → Button, ProductCard, StickyMobileCTA
├── config/
│   └── site.ts       → Centralised SITE_URL and site name
├── data/
│   └── products.ts   → Central product data
├── pages/            → Route pages
├── styles/           → Global styles / design tokens
├── utils/
│   └── tracking.ts   → Outbound click tracking layer
├── App.tsx
└── main.tsx
scripts/
├── prerender.ts      → Post-build static prerendering
└── seo-audit.ts      → SEO validation
```

## Environment Variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `VITE_SITE_URL` | Production canonical domain | `https://mypupandme.co.uk` |

Set in `netlify.toml` for production builds.

## Deployment

The site deploys to Netlify from the `main` branch.

- Build command: `npm run build`
- Publish directory: `dist`
- Environment: `VITE_SITE_URL=https://mypupandme.co.uk`

The Netlify subdomain (mypupandme.netlify.app) redirects 301 to the custom domain.

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/collection` | Product collection with filtering |
| `/size-guide` | Sizing information |
| `/our-story` | Brand story |
| `/journal` | Article listing |
| `/journal/:slug` | Individual articles |
| `/contact` | Contact form (Netlify Forms) |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |
| `*` | 404 page |

## SEO Architecture

- Each route gets a unique prerendered HTML file with metadata in the initial response
- Unique `<title>`, `<meta description>`, `<link canonical>`, OG tags and JSON-LD per page
- Self-referencing canonicals (no cross-domain canonicalisation)
- My Pup and Me = brand entity; My Chi and Me = seller entity in structured data
- CollectionPage, Product, Article, BreadcrumbList, Organization, Brand, WebSite schemas

## Tracking

Outbound clicks to My Chi and Me fire a `outbound_shop_click` event with:
- `product_name`
- `product_pattern`
- `button_location`
- `destination_url`

Events push to `window.dataLayer` (GTM-compatible) and dispatch a DOM CustomEvent. No analytics provider is bundled — connect GTM or another tool separately.
