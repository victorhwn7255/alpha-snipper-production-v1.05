import fs from "fs";
import path from "path";

const ANALYSIS_DIR = path.join(process.cwd(), "references", "analysis");

/**
 * Extract shared CSS from analysis HTML files.
 * Strips :root, *, html, body selectors — those are handled by globals.css (dark theme).
 * Also strips sidebar/menu-toggle CSS blocks that conflict with our React sidebar.
 */
export function getAnalysisCSS(): string {
  const html = fs.readFileSync(
    path.join(ANALYSIS_DIR, "TSLA.html"),
    "utf-8"
  );
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (!styleMatch) throw new Error("No <style> block found in TSLA.html");

  let css = styleMatch[1];

  // Strip :root variable block (dark theme values defined in globals.css)
  css = css.replace(/:root\s*\{[^}]+\}/, "");

  // Strip universal reset (handled by globals.css)
  css = css.replace(/\*\s*\{[^}]+\}/, "");

  // Strip html selector (handled by globals.css)
  css = css.replace(/html\s*\{[^}]+\}/, "");

  // Strip body selector (handled by globals.css)
  css = css.replace(/body\s*\{[^}]+\}/, "");

  // Strip unscoped p rule (scoped version lives in globals.css)
  css = css.replace(/p\s*\{\s*margin-bottom:\s*12px;\s*\}/, "");

  // Strip .sidebar positioning block (React component handles layout)
  css = css.replace(/\.sidebar\s*\{[^}]+\}/, "");

  // Strip .sidebar-logo and children (redundant in site context)
  css = css.replace(/\.sidebar-logo\s*\{[^}]+\}/g, "");
  css = css.replace(/\.sidebar-logo\s+h2\s*\{[^}]+\}/, "");
  css = css.replace(/\.sidebar-logo\s+\.ticker\s*\{[^}]+\}/, "");

  // Strip all .menu-toggle rules (not used in site)
  css = css.replace(/\.menu-toggle\s*\{[^}]+\}/g, "");

  // Strip ".sidebar, .menu-toggle { display: none; }" in print media
  css = css.replace(
    /\.sidebar,\s*\.menu-toggle\s*\{\s*display:\s*none;\s*\}/,
    ""
  );

  // Strip remaining .sidebar rules inside media queries (e.g. transform)
  css = css.replace(/\.sidebar\s*\{[^}]+\}/g, "");
  css = css.replace(/\.sidebar\.open\s*\{[^}]+\}/g, "");

  // Strip .hero-eyebrow (element removed from content)
  css = css.replace(/\.hero-eyebrow\s*\{[^}]+\}/, "");

  // Reduce hero top padding (section tabs sit directly above now)
  css = css.replace(
    /\.hero\s*\{\s*padding:\s*48px\s+0\s+40px/,
    ".hero { padding: 24px 0 40px"
  );

  return css.trim();
}

/**
 * Extract the <main> body content from an analysis HTML file.
 */
export function getAnalysisContent(ticker: string): string {
  const filePath = path.join(ANALYSIS_DIR, `${ticker}.html`);
  const html = fs.readFileSync(filePath, "utf-8");

  const mainMatch = html.match(/<main class="main">([\s\S]*?)<\/main>/);
  if (!mainMatch) {
    throw new Error(`No <main class="main"> found in ${ticker}.html`);
  }

  let content = mainMatch[1].trim();

  // Strip "Delta Framework · Configuration Card" eyebrow
  content = content.replace(/<div class="hero-eyebrow">[^<]*<\/div>/, "");

  return content;
}

export interface SectionLink {
  id: string;
  label: string;
  name: string;
  phase: number;
}

/**
 * Extract section navigation links from an analysis HTML file.
 * Returns structured data: [{id: "s1", label: "S1", name: "Identity & Classification"}, ...].
 */
export function getSectionLinks(ticker: string): SectionLink[] {
  const filePath = path.join(ANALYSIS_DIR, `${ticker}.html`);
  const html = fs.readFileSync(filePath, "utf-8");

  const navMatch = html.match(/<nav class="sidebar">([\s\S]*?)<\/nav>/);
  if (!navMatch) {
    throw new Error(`No <nav class="sidebar"> found in ${ticker}.html`);
  }

  // Derive phase from section id: s1–s7 → 1, s8–s15 → 2, s16+ & checklists → 3
  function getPhase(id: string): number {
    const numMatch = id.match(/^s(\d+)$/);
    if (numMatch) {
      const n = parseInt(numMatch[1], 10);
      if (n <= 7) return 1;
      if (n <= 15) return 2;
      return 3;
    }
    return 3; // checkA, checkB
  }

  const links: SectionLink[] = [];
  const linkRegex = /<a class="nav-link" href="#([^"]+)">\s*<span class="snum">([^<]+)<\/span>\s*([^<]+)<\/a>/g;
  let match;
  while ((match = linkRegex.exec(navMatch[1])) !== null) {
    links.push({ id: match[1], label: match[2], name: match[3].trim(), phase: getPhase(match[1]) });
  }

  // Checklist links don't have .snum spans — handle them
  const checkRegex = /<a class="nav-link" href="#(check[AB])">([^<]+)<\/a>/g;
  while ((match = checkRegex.exec(navMatch[1])) !== null) {
    const name = match[2].replace(/^Checklist [AB]\s*[—–-]\s*/, "").trim();
    links.push({ id: match[1], label: match[1] === "checkA" ? "A" : "B", name, phase: 3 });
  }

  return links;
}
