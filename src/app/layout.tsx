import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/stocks";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Stock Analysis & Investment Research`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "In-depth fundamental analysis and investment research for high-conviction stocks. Covers investment thesis, financial metrics, competitive moat, management assessment, risk framework, and valuation.",
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "TheVixGuy",
  url: "https://thevixguy.com",
  description:
    "Independent investment research and options analytics. Publisher of Theta Harvest (options premium selling) and Alpha (fundamental stock analysis).",
  knowsAbout: [
    "Stock Analysis",
    "Fundamental Analysis",
    "Options Trading",
    "Options Premium Selling",
    "Investment Research",
    "Financial Analysis",
    "Equity Research",
    "Volatility Analysis",
    "Risk Management",
  ],
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <a href="/" className="site-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.svg" alt="" className="site-logo-icon" width={32} height={32} />
              <span className="site-logo-brand">Alpha Sniper</span>
            </a>
            <nav className="site-nav">
              <a href={SITE_URL}>Alpha</a>
              <a href="https://theta.thevixguy.com">Theta</a>
              <a href="https://thevixguy.com">Home</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} TheVixGuy. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              This site provides independent investment research for
              educational purposes only. Nothing on this site constitutes
              financial advice, a recommendation to buy or sell any security,
              or an offer to provide investment advisory services. All
              analysis reflects the author&apos;s personal views and may contain
              errors. Past performance does not guarantee future results.
              Always do your own due diligence and consult a qualified
              financial advisor before making investment decisions.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
