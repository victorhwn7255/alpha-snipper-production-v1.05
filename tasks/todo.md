# Alpha Sniper — Build Plan

## Phase 1: Project Setup
- [ ] Create package.json, next.config.mjs, tsconfig.json
- [ ] Install dependencies (next, react, react-dom, typescript, @types/react, @types/node)

## Phase 2: Core Library Files
- [ ] Create src/lib/stocks.ts — ticker metadata with dates/descriptions
- [ ] Create src/lib/content.ts — build-time HTML/CSS extraction from references/

## Phase 3: App Shell (Dark Theme)
- [ ] Create src/app/globals.css — dark theme variables, site-level styles, analysis CSS overrides
- [ ] Create src/app/layout.tsx — root layout + Organization/WebSite schema + fonts
- [ ] Create src/app/page.tsx — landing page with ticker grid + ItemList schema
- [ ] Create src/app/analysis/[ticker]/page.tsx — SSG analysis pages + Article/FAQ/Breadcrumb schema

## Phase 4: SEO & GEO Infrastructure
- [ ] Create src/app/robots.ts — AI-crawler-optimized robots.txt
- [ ] Create src/app/sitemap.ts — dynamic sitemap with per-stock dateModified

## Phase 5: Build & Verify
- [ ] npm run build succeeds with 0 errors
- [ ] out/ contains index.html + 8 analysis pages + robots.txt + sitemap.xml
- [ ] Each analysis page has full HTML content (not JS loader)
- [ ] Schema markup present: Organization, WebSite, ItemList, Article, FAQPage, BreadcrumbList
- [ ] Meta tags: title, description, canonical, OG, Twitter cards
- [ ] robots.txt allows AI search crawlers
- [ ] Sitemap uses per-stock dateModified
- [ ] Navigation works: cards → analysis, ticker nav, breadcrumbs
