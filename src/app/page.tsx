import { STOCKS, TICKERS, SITE_URL, SITE_NAME } from "@/lib/stocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Stock Analysis & Investment Research`,
  description:
    "In-depth fundamental analysis and investment research for high-conviction stocks. Covers investment thesis, financial metrics, competitive moat, management assessment, risk framework, and valuation.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: `${SITE_NAME} — Stock Analysis & Investment Research`,
    description:
      "In-depth fundamental analysis and investment research for high-conviction stocks.",
    url: `${SITE_URL}/`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Stock Analysis & Investment Research`,
    description:
      "In-depth fundamental analysis and investment research for high-conviction stocks.",
  },
};

export default function HomePage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stock Analysis Reports",
    description:
      "Comprehensive fundamental analysis reports for high-conviction stocks, covering investment thesis, financials, competitive moat, risk framework, and valuation.",
    numberOfItems: TICKERS.length,
    itemListElement: TICKERS.map((ticker, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${STOCKS[ticker].company} (${ticker}) — Fundamental Analysis`,
      url: `${SITE_URL}/analysis/${ticker}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main className="landing">
        <h1>Stock Analysis &amp; Investment Research</h1>
        <p className="landing-subtitle">
          In-depth fundamental analysis for high-conviction stocks. Each report
          covers investment thesis, financial metrics, competitive moat,
          management assessment, risk framework, and valuation — built on a
          structured 19-section framework designed for rigorous, repeatable
          research.
        </p>
        <div className="ticker-grid">
          {TICKERS.map((ticker) => {
            const stock = STOCKS[ticker];
            return (
              <a
                key={ticker}
                href={`/analysis/${ticker}/`}
                className="ticker-card"
              >
                <div className="ticker-card-header">
                  <span
                    className="ticker-symbol"
                    style={{ color: stock.color }}
                  >
                    {ticker}
                  </span>
                  <span className="ticker-quarter">
                    {stock.earningsQuarter}
                  </span>
                </div>
                <div className="ticker-company">{stock.company}</div>
                <div className="ticker-sector">{stock.sector}</div>
                <div className="ticker-description">{stock.description}</div>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
