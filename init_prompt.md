# Claude Code: Build alpha.thevixguy.com

## Project overview

Build a Next.js static site for `alpha.thevixguy.com` — a stock analysis research site that displays in-depth fundamental analysis reports. The site is part of the `thevixguy.com` brand ecosystem alongside `theta.thevixguy.com` (options premium selling analytics).

The primary technical goal beyond a functional site is **LLM Visibility Optimization (Generative Engine Optimization / GEO)** — making every page fully readable and citable by AI systems like ChatGPT, Perplexity, Claude, and Google AI Overviews. This is not optional; it is the core strategic purpose of the site architecture.

## Source files

- **Analysis HTML files**: `/references/analysis/*.html` — 8 self-contained HTML reports (BE, CLS, CRWD, HOOD, NVDA, PLTR, SNDK, TSLA)
- **Theme files**: `/references/styles/anthropic_theme.json` and `dark_theme.json` — use these for frontend styling
- All 8 HTML files share **identical CSS** (lines 8–533 in each file). Extract it once as shared styles.
- Body content starts after `<body>` tag and ends before `</body>` in each file.

## Tech stack & deployment

- **Framework**: Next.js 16+ with App Router (use `latest` — currently 16.2 as of March 2026)
- **Rendering**: Static Site Generation (`output: "export"`) — every page pre-rendered to HTML at build time
- **Deployment**: Cloudflare Pages (same as theta.thevixguy.com)
- **Config**: `trailingSlash: true`, `images: { unoptimized: true }`
- The `out/` directory is what gets deployed

## Architecture

```
alpha-site/
├── references/
│   ├── analysis/               # Stock analysis HTML files (source of truth)
│   │   ├── TSLA.html
│   │   ├── NVDA.html
│   │   └── ... (8 files)
│   └── styles/                 # Theme files for frontend styling
│       ├── anthropic_theme.json
│       └── dark_theme.json
├── src/
│   ├── lib/
│   │   ├── stocks.ts           # Ticker metadata (company, sector, description, color)
│   │   └── content.ts          # Build-time HTML extraction (body + shared CSS)
│   └── app/
│       ├── layout.tsx           # Root layout + Organization/WebSite schema
│       ├── page.tsx             # Landing page with ticker grid + ItemList schema
│       ├── globals.css          # Site-level styles (header, nav, landing, footer)
│       ├── robots.ts            # AI-crawler-optimized robots.txt
│       ├── sitemap.ts           # Dynamic sitemap for all routes
│       └── analysis/
│           └── [ticker]/
│               └── page.tsx     # SSG analysis page + Article/FAQ/Breadcrumb schema
├── next.config.mjs
├── tsconfig.json
└── package.json
```

### Key architectural decisions

1. **Each stock gets its own URL route**: `/analysis/TSLA/`, `/analysis/NVDA/`, etc. — NOT a single-page app with JS tab switching. AI crawlers cannot execute JavaScript; each page must serve full HTML content.

2. **Content extraction at build time**: `content.ts` reads each HTML file directly from `/references/analysis/`, extracts the `<body>` content and shared `<style>` block, and injects them into the Next.js page via `dangerouslySetInnerHTML`. This runs only during `npm run build`. No separate `content/` directory — `/references/analysis/` is the single source of truth.

3. **`generateStaticParams()`**: The `[ticker]/page.tsx` dynamic route uses this to pre-render all 8 ticker pages at build time.

4. **Shared CSS injection**: Since all analysis files share identical CSS, extract it once from any file and inject it via a `<style>` tag on analysis pages. The analysis CSS coexists with the site's `globals.css`.

## Stock metadata

Create a `stocks.ts` file with this data (used for routing, meta tags, schema, and UI):

```typescript
export const STOCKS: Record<string, StockMeta> = {
  TSLA: { ticker: "TSLA", company: "Tesla, Inc.", sector: "Automotive / Clean Energy / AI & Robotics", description: "Vertically integrated EV manufacturer with energy storage, autonomous driving (FSD), and robotics (Optimus) platforms.", color: "#e31937", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
  NVDA: { ticker: "NVDA", company: "NVIDIA Corporation", sector: "Semiconductors / AI Infrastructure", description: "Fabless semiconductor platform powering AI infrastructure — data center GPUs, networking, and software ecosystem.", color: "#76b900", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
  PLTR: { ticker: "PLTR", company: "Palantir Technologies Inc.", sector: "Enterprise Software / AI Infrastructure", description: "Enterprise data operating system (Ontology + AIP) for government and commercial AI deployment.", color: "#101010", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
  CRWD: { ticker: "CRWD", company: "CrowdStrike Holdings, Inc.", sector: "Cybersecurity / SaaS", description: "Cloud-native cybersecurity platform — Falcon agent with 28+ modules spanning endpoint, cloud, and identity protection.", color: "#ff0000", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
  HOOD: { ticker: "HOOD", company: "Robinhood Markets, Inc.", sector: "Financial Services / Fintech", description: "Retail financial services platform — commission-free trading with expanding crypto, banking, and advisory products.", color: "#00c805", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
  BE:   { ticker: "BE", company: "Bloom Energy Corporation", sector: "Clean Energy / Fuel Cells", description: "Solid oxide fuel cell manufacturer providing distributed, always-on power generation for data centers and industrial applications.", color: "#00a651", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
  CLS:  { ticker: "CLS", company: "Celestica Inc.", sector: "Electronics Manufacturing Services / AI Infrastructure", description: "Electronics manufacturing services provider specializing in AI/ML infrastructure, networking switches, and HPC hardware.", color: "#0072ce", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
  SNDK: { ticker: "SNDK", company: "Sandisk Corporation", sector: "Semiconductors / NAND Flash Storage", description: "NAND flash storage company — enterprise SSDs, consumer flash products, and data center storage solutions.", color: "#eb1c24", datePublished: "2026-03-03", dateModified: "2026-03-03", earningsQuarter: "Q4 2025" },
};

export const SITE_URL = "https://alpha.thevixguy.com";
export const SITE_NAME = "Alpha by TheVixGuy";
```

## GEO / LLM Visibility Optimization — CRITICAL REQUIREMENTS

This is the most important section. Every technical decision serves AI discoverability.

### 1. robots.txt — Allow all AI search crawlers

```
User-Agent: *
Allow: /

User-Agent: OAI-SearchBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: Claude-SearchBot
Allow: /

User-Agent: Claude-User
Allow: /

Sitemap: https://alpha.thevixguy.com/sitemap.xml
```

Training crawlers (GPTBot, ClaudeBot, Google-Extended) are allowed by default for now to build training presence. Add commented-out blocks showing how to block them if desired later.

### 2. Schema markup — 5 layers of JSON-LD

**On the root layout (every page):**

**Organization schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://alpha.thevixguy.com/#organization",
  "name": "TheVixGuy",
  "url": "https://thevixguy.com",
  "description": "Independent investment research and options analytics. Publisher of Theta Harvest (options premium selling) and Alpha (fundamental stock analysis).",
  "knowsAbout": ["Stock Analysis", "Fundamental Analysis", "Options Trading", "Options Premium Selling", "Investment Research", "Financial Analysis", "Equity Research", "Volatility Analysis", "Risk Management"],
  "sameAs": []
}
```

**WebSite schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alpha.thevixguy.com/#website",
  "name": "Alpha by TheVixGuy",
  "url": "https://alpha.thevixguy.com",
  "publisher": { "@id": "https://alpha.thevixguy.com/#organization" }
}
```

**On the landing page:**

**ItemList schema** — lists all analysis pages so AI systems know what content exists.

**On each analysis page (`/analysis/[TICKER]/`):**

**Article schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tesla, Inc. (TSLA) — Fundamental Analysis",
  "description": "...",
  "url": "https://alpha.thevixguy.com/analysis/TSLA/",
  "datePublished": "2026-03-03",
  "dateModified": "2026-03-03",
  "publisher": { "@id": "https://alpha.thevixguy.com/#organization" },
  "about": {
    "@type": "Corporation",
    "name": "Tesla, Inc.",
    "tickerSymbol": "TSLA"
  },
  "articleSection": "Stock Analysis",
  "keywords": ["TSLA analysis", "Tesla, Inc. stock", "TSLA fundamental analysis", "investment research"]
}
```

**FAQPage schema** — provides Q&A pairs that map to how LLMs generate answers:
- "What is the investment thesis for [Company] ([TICKER])?"
- "What are the key risks for [TICKER] stock?"
- "What is [Company]'s competitive moat?"

**BreadcrumbList schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Alpha by TheVixGuy", "item": "https://alpha.thevixguy.com" },
    { "@type": "ListItem", "position": 2, "name": "Tesla, Inc. (TSLA)", "item": "https://alpha.thevixguy.com/analysis/TSLA/" }
  ]
}
```

### 3. Meta tags per page

Every analysis page needs:
- `<title>` — e.g. "Tesla, Inc. (TSLA) — Fundamental Analysis & Investment Research | Alpha by TheVixGuy"
- `<meta name="description">` — company description + "Covers investment thesis, financial metrics, competitive moat, management assessment, risk framework, and valuation."
- `<meta name="robots" content="index, follow">`
- `<link rel="canonical">` — e.g. `https://alpha.thevixguy.com/analysis/TSLA/`
- Open Graph tags (og:title, og:description, og:url, og:type="article")
- Twitter card tags

### 4. Sitemap

Dynamic sitemap covering:
- `/` — priority 1.0, changeFrequency "weekly", lastmod = latest `dateModified` across all stocks
- `/analysis/TSLA/` through `/analysis/SNDK/` — priority 0.9, changeFrequency "weekly", lastmod = that stock's `dateModified` from `stocks.ts`

Using per-stock `dateModified` in the sitemap (rather than a generic build timestamp) tells crawlers exactly which pages have been freshly updated, which is a direct citation signal.

### 5. Content is served as static HTML

This is non-negotiable. The `output: "export"` config ensures `npm run build` generates plain HTML files in `/out/`. When an AI crawler hits `/analysis/TSLA/`, it gets the full analysis content without executing any JavaScript. Verify by checking that `out/analysis/TSLA/index.html` contains the actual analysis text, not just a JS bundle loader.

## Site UI structure

### Landing page (`/`)
- Site header: "TheVixGuy" (serif) + "Alpha" (mono, accent color) — links to thevixguy.com and theta.thevixguy.com
- H1: "Stock Analysis & Investment Research"
- Subtitle paragraph describing the analysis methodology
- Grid of ticker cards — each card shows ticker symbol, company name, sector, and description
- Each card links to `/analysis/[TICKER]/`
- Footer with copyright and financial disclaimer

### Analysis page (`/analysis/[TICKER]/`)
- Same site header
- **Ticker nav bar** — horizontal row of all ticker buttons, with the active ticker highlighted. Allows quick switching between stocks.
- Breadcrumb: Alpha / Tesla, Inc. (TSLA)
- The full analysis content from the HTML file, rendered inside an `<article>` tag
- Same footer

### Design
- Reference the theme files in `/references/styles/` for colors and styling
- The analysis pages already have their own complete CSS — extract and inject it alongside the site's global styles
- Fonts: Source Serif 4 (serif headings), DM Sans (body), JetBrains Mono (data/code)
- Overall feel: warm, editorial, data-dense — not generic SaaS

## Verification checklist

After building, verify:

1. `npm run build` completes with 0 errors
2. `out/` directory contains:
   - `index.html` (landing page)
   - `analysis/TSLA/index.html` through `analysis/SNDK/index.html` (8 stock pages)
   - `robots.txt` with AI crawler rules
   - `sitemap.xml` with all 9 URLs
3. Each analysis page HTML contains:
   - The full analysis body content (not just a JS loader)
   - At least 3 `application/ld+json` script tags (Article, FAQPage, BreadcrumbList)
   - Article schema includes `datePublished` and `dateModified` from stock metadata
   - Proper `<title>`, `<meta description>`, `<link rel="canonical">`, and OG tags
   - Visible freshness indicator showing last updated date and earnings quarter
4. Landing page HTML contains ItemList schema
5. All pages contain Organization + WebSite schema (from layout)
6. `robots.txt` explicitly allows OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User
7. Sitemap `<lastmod>` values use per-stock `dateModified` from metadata (not generic build timestamp)
8. Internal navigation works — ticker cards link to analysis pages, ticker nav bar switches between stocks, breadcrumb links back to landing

## Content freshness tracking — CRITICAL FOR GEO

Content freshness is a major AI citation signal. 76.4% of ChatGPT's most-cited pages were updated in the last 30 days. Content over 12 months old without updates loses 84% of citation volume. The architecture must track and surface update dates per stock.

### stocks.ts must include date fields

```typescript
export interface StockMeta {
  ticker: string;
  company: string;
  sector: string;
  description: string;
  color: string;
  datePublished: string;   // ISO date — when first analysis was published
  dateModified: string;    // ISO date — when analysis was last updated
  earningsQuarter: string; // e.g. "Q4 2025" — which earnings the analysis reflects
}
```

Example entry:
```typescript
TSLA: {
  ticker: "TSLA",
  company: "Tesla, Inc.",
  sector: "Automotive / Clean Energy / AI & Robotics",
  description: "...",
  color: "#e31937",
  datePublished: "2026-03-03",
  dateModified: "2026-03-03",
  earningsQuarter: "Q4 2025",
},
```

### Schema markup must include dates

The Article schema on each analysis page must include:
```json
{
  "@type": "Article",
  "datePublished": "2026-03-03",
  "dateModified": "2026-03-03",
  ...
}
```

The sitemap `<lastmod>` for each stock page must use `dateModified` from the stock's metadata (not `new Date()` at build time). This tells crawlers exactly which pages have fresh content.

### UI must surface freshness

Each analysis page should display the update context visually — for example, a subtle line near the top of the analysis content:

```
Last updated: March 3, 2026 · Reflects Q4 2025 earnings
```

This serves dual purpose: it signals freshness to human readers AND to AI crawlers that parse the visible text content.

The landing page ticker cards should also show `earningsQuarter` — e.g. a small badge or subtitle like "Q4 2025" so users can see at a glance how current each analysis is.

## Adding new stocks in the future

The process should be:
1. Drop a new HTML file into `references/analysis/` (e.g. `AAPL.html`)
2. Add the ticker metadata to `stocks.ts` (including `datePublished`, `dateModified`, and `earningsQuarter`)
3. Run `npm run build`
4. Everything else (routes, sitemap, schema, navigation) updates automatically

## Updating existing stock analysis after quarterly earnings

This happens roughly every 3 months per stock as new earnings data comes in. The process should be:
1. Replace the HTML file in `references/analysis/` with the updated version (e.g. overwrite `TSLA.html`)
2. Update that stock's entry in `stocks.ts`:
   - Set `dateModified` to today's date
   - Update `earningsQuarter` to the new quarter (e.g. "Q4 2025" → "Q1 2026")
3. Run `npm run build`
4. The sitemap `<lastmod>`, Article schema `dateModified`, and the on-page freshness indicator all update automatically

No other files need to change. The architecture ensures that a single metadata edit propagates the freshness signal everywhere it matters — schema markup, sitemap, and visible UI.
