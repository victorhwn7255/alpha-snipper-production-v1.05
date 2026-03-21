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
        <div className="ticker-grid">
          {TICKERS.map((ticker) => {
            const stock = STOCKS[ticker];
            const scorePct = parseInt(stock.scorecard);
            const scoreColor = scorePct >= 60 ? "score-green" : scorePct >= 20 ? "score-amber" : "score-red";
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
                  <div className="ticker-card-badges">
                    <span className={`ticker-verdict ticker-verdict-${stock.verdict.toLowerCase()}`}>
                      {stock.verdict}
                    </span>
                    <span className="ticker-quarter">
                      <span className={`signal-dot signal-${stock.signal}`} />
                      {stock.earningsQuarter}
                    </span>
                  </div>
                </div>
                <div className="ticker-company">{stock.company}</div>
                <div className="ticker-sector">{stock.sector}</div>
                <div className="ticker-data">
                  <div className="ticker-key-metric">
                    <span className="ticker-key-metric-label">{stock.keyMetric}</span>
                    <span className="ticker-key-metric-value">{stock.keyMetricValue}</span>
                  </div>
                  <div className={`ticker-scorecard ${scoreColor}`}>
                    Scorecard: {stock.scorecard}
                  </div>
                </div>
                <div className="ticker-thesis">
                  &ldquo;{stock.thesis}&rdquo;
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
