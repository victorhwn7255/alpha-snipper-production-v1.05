# Alpha Sniper — Codebase Handoff Prompt

Use this document to onboard Claude Code (or yourself) on a new machine. Paste it as your first message or place it in the project root so Claude reads it automatically.

---

## What Is This Project?

Alpha Sniper is a **static Next.js site** for stock analysis research, deployed at `https://alpha.thevixguy.com`. It displays in-depth 19-section fundamental analysis reports for individual stocks. The site is part of the TheVixGuy brand ecosystem alongside `theta.thevixguy.com` (options analytics).

The core strategic purpose is **Generative Engine Optimization (GEO)** — making every page fully readable and citable by AI systems (ChatGPT, Perplexity, Claude, Google AI Overviews). Every architectural decision serves this goal.

## Quick Start

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build → outputs to /out/
```

Requirements: Node.js v18+. No database, no environment variables, no external services.

## Tech Stack

- **Next.js** (latest, App Router) with `output: "export"` (static site generation)
- **React 19**, **TypeScript 5.7+**
- **Fonts**: Source Serif 4 (serif headings), DM Sans (body text), JetBrains Mono (data/code) — loaded via Google Fonts
- **Deployment**: Cloudflare Pages (the `out/` directory)
- **Config**: `trailingSlash: true`, `images: { unoptimized: true }`

## File Structure

```
alpha-sniper/
├── references/
│   ├── analysis/               # Source HTML files (10 stocks)
│   │   ├── TSLA.html, NVDA.html, PLTR.html, CRWD.html, HOOD.html
│   │   ├── BE.html, CLS.html, SNDK.html, LITE.html, GOOGL.html
│   └── styles/                 # Theme references
│       ├── anthropic_theme.json, dark_theme.json
├── src/
│   ├── lib/
│   │   ├── stocks.ts           # ★ Central stock registry — single source of truth
│   │   └── content.ts          # Build-time HTML extraction (main, sidebar, CSS)
│   ├── components/
│   │   └── AnalysisSidebar.tsx  # Client component: scroll-spy section navigation
│   └── app/
│       ├── layout.tsx           # Root layout + Organization/WebSite JSON-LD schemas
│       ├── page.tsx             # Homepage: ticker card grid + ItemList schema
│       ├── globals.css          # All site-level styles
│       ├── robots.ts            # AI-crawler-optimized robots.txt
│       ├── sitemap.ts           # Dynamic sitemap from TICKERS
│       ├── framework/
│       │   └── page.tsx         # 19-section methodology explainer (GEO-optimized)
│       └── analysis/
│           └── [ticker]/
│               └── page.tsx     # Dynamic analysis page + Article/FAQ/Breadcrumb schemas
├── CLAUDE.md                   # Claude Code behavior rules
├── init_prompt.md              # Original build prompt (historical reference)
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## How the Auto-Wiring Works

**The entire site is driven by `src/lib/stocks.ts`.** Adding a new stock requires exactly two steps:

1. Drop `TICKER.html` into `references/analysis/`
2. Add the ticker entry to the `STOCKS` object in `stocks.ts`

Everything else auto-wires:
- **Route** `/analysis/TICKER/` — `generateStaticParams()` reads from `TICKERS`
- **Sitemap** — auto-includes from `TICKERS` loop with per-stock `dateModified`
- **Homepage card** — auto-rendered from `TICKERS` with verdict, scorecard, key metric, thesis
- **Schema markup** — Article, FAQPage, BreadcrumbList auto-generated per stock
- **Section navigation** — auto-parsed from the HTML file's `<nav class="sidebar">`
- **Ticker nav bar** — auto-rendered from `TICKERS` on analysis pages
- **Framework CTA grid** — auto-includes all tickers

## Key File Details

### `src/lib/stocks.ts` — Stock Registry

```typescript
export interface StockMeta {
  ticker: string;
  company: string;
  sector: string;
  description: string;
  color: string;              // accent color (currently all #C8A96E gold)
  datePublished: string;      // ISO date
  dateModified: string;       // ISO date — drives sitemap lastmod + schema
  earningsQuarter: string;    // e.g. "Q4 2025" or "Q4 FY2026" (fiscal year)
  signal: "bullish" | "cautious";  // green/amber dot on homepage
  verdict: "Hold" | "Buy";
  conviction: string;         // "High", "Medium-High", "Medium"
  scorecard: string;          // e.g. "89% · Improving", "22% · Mixed"
  keyMetric: string;          // analyst-tracked metric name
  keyMetricValue: string;     // current value
  thesis: string;             // one-line investment thesis
}
```

Currently 10 stocks: TSLA, NVDA, PLTR, CRWD, HOOD, BE, CLS, SNDK, LITE, GOOGL.

### `src/lib/content.ts` — HTML Extraction

Three functions run at build time:
- `getAnalysisCSS()` — extracts shared CSS from TSLA.html, strips conflicting selectors (:root, body, .sidebar, etc.)
- `getAnalysisContent(ticker)` — extracts `<main class="main">` content from each HTML file
- `getSectionLinks(ticker)` — parses `<nav class="sidebar">` into structured section data with phase assignments

### `src/app/page.tsx` — Homepage

Renders a card grid of all stocks. Each card shows:
- Ticker symbol + verdict badge (Hold/Buy)
- Signal dot (green = bullish, amber = cautious) + earnings quarter
- Company name + sector
- Key metric with value
- Color-coded scorecard (green >=60%, amber 20-60%, red <20%)
- Thesis quote

### `src/app/analysis/[ticker]/page.tsx` — Analysis Pages

- Generates Article, FAQPage, BreadcrumbList JSON-LD schemas
- Renders ticker nav bar (all tickers, active highlighted)
- Renders section navigation (3-phase scroll-spy tabs via `AnalysisSidebar.tsx`)
- Injects analysis HTML content via `dangerouslySetInnerHTML`

### `src/components/AnalysisSidebar.tsx` — Section Navigation

Only `'use client'` component. Implements:
- 3-phase tab navigation (Foundation, Financials, Risk & Assembly)
- Scroll-spy via IntersectionObserver
- Auto-scroll active section into view
- Mobile-responsive phase labels

### `src/app/framework/page.tsx` — Framework Methodology

GEO-optimized page explaining the 19-section analysis framework. Includes:
- 4 JSON-LD schemas (Article, FAQPage with 5 Q&As, HowTo with 3 phases, BreadcrumbList)
- Question-based H2 headings for LLM query matching
- Semantic tables for phase overview, section details, scorecard weights, update cadence
- CTA grid linking to all stock analyses

## GEO Implementation

### Schema Markup (5 layers of JSON-LD)
1. **Organization** — on every page (layout.tsx)
2. **WebSite** — on every page (layout.tsx)
3. **ItemList** — homepage only (page.tsx)
4. **Article + FAQPage + BreadcrumbList** — each analysis page
5. **Article + FAQPage + HowTo + BreadcrumbList** — framework page

### robots.txt
Explicitly allows: OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User. Training crawlers (GPTBot, ClaudeBot) allowed by default with commented-out blocks to disable.

### Sitemap
Per-stock `dateModified` (not build timestamp) for freshness signaling.

### Content Architecture
- All pages are statically rendered HTML (`output: "export"`)
- No client-side rendering for content — AI crawlers get full HTML
- Semantic HTML: `<article>`, `<section>`, `<table>`, `<nav>`

## Updating After Quarterly Earnings

1. Replace `references/analysis/TICKER.html` with updated version
2. In `stocks.ts`, update:
   - `dateModified` to today's date
   - `earningsQuarter` to new quarter
   - `scorecard`, `keyMetricValue`, `signal`, `verdict` if changed
3. Run `npm run build`

## Known GEO Gaps (from latest audit — 52% compliance)

These are identified improvement opportunities, not yet implemented:

| Priority | Gap |
|----------|-----|
| Critical | Answer-first format missing in analysis HTML sections |
| Critical | Organization entity inconsistency ("TheVixGuy" vs "Alpha Sniper") |
| Critical | Empty `sameAs` array in Organization schema |
| High | Statement-based headings instead of question-based in HTML files |
| High | No HowTo schema on analysis pages |
| High | No bidirectional pillar-cluster internal linking |
| Medium | Non-self-contained sections, missing source attribution |

## Development Rules (from CLAUDE.md)

- **Simplicity First**: Minimal changes, minimal code impact
- **Plan Mode**: Enter plan mode for any non-trivial task (3+ steps)
- **Verify**: Always run `npm run build` to prove changes work
- **Track**: Use `tasks/todo.md` for plans, `tasks/lessons.md` for mistakes
- **No over-engineering**: Only change what's requested

## Earnings Quarter Convention

- Calendar year companies (TSLA, PLTR, HOOD, BE, CLS, GOOGL): use "Q4 2025"
- Fiscal year companies (NVDA, CRWD, SNDK, LITE): use "Q4 FY2026" or "Q2 FY2026"
