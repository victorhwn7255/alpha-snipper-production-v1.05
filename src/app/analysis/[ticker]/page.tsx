import { STOCKS, TICKERS, SITE_URL, SITE_NAME } from "@/lib/stocks";
import { getAnalysisCSS, getAnalysisContent, getSectionLinks } from "@/lib/content";
import SectionNav from "@/components/AnalysisSidebar";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ ticker: string }>;
}

export async function generateStaticParams() {
  return TICKERS.map((ticker) => ({ ticker }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ticker } = await params;
  const stock = STOCKS[ticker];
  if (!stock) return {};

  const title = `${stock.company} (${ticker}) — Fundamental Analysis & Investment Research`;
  const description = `${stock.description} Covers investment thesis, financial metrics, competitive moat, management assessment, risk framework, and valuation. Reflects ${stock.earningsQuarter} earnings.`;
  const url = `${SITE_URL}/analysis/${ticker}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: stock.datePublished,
      modifiedTime: stock.dateModified,
      section: "Stock Analysis",
      tags: [
        `${ticker} analysis`,
        `${stock.company} stock`,
        `${ticker} fundamental analysis`,
        "investment research",
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function AnalysisPage({ params }: PageProps) {
  const { ticker } = await params;
  const stock = STOCKS[ticker];
  if (!stock) notFound();

  const analysisCSS = getAnalysisCSS();
  const analysisContent = getAnalysisContent(ticker);
  const sectionLinks = getSectionLinks(ticker);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${stock.company} (${ticker}) — Fundamental Analysis`,
    description: `${stock.description} Covers investment thesis, financial metrics, competitive moat, management assessment, risk framework, and valuation.`,
    url: `${SITE_URL}/analysis/${ticker}/`,
    datePublished: stock.datePublished,
    dateModified: stock.dateModified,
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: {
      "@type": "Corporation",
      name: stock.company,
      tickerSymbol: ticker,
    },
    articleSection: "Stock Analysis",
    keywords: [
      `${ticker} analysis`,
      `${stock.company} stock`,
      `${ticker} fundamental analysis`,
      "investment research",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the investment thesis for ${stock.company} (${ticker})?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${stock.description} This analysis evaluates whether ${stock.company}'s current trajectory, financials, and competitive position support a long-term investment case. The report covers a 19-section fundamental framework including financial metrics, management assessment, risk inventory, and valuation scenarios based on ${stock.earningsQuarter} earnings data.`,
        },
      },
      {
        "@type": "Question",
        name: `What are the key risks for ${ticker} stock?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The ${stock.company} (${ticker}) analysis includes a comprehensive risk inventory with severity ratings, kill criteria with specific quantitative triggers, and a bear case scenario. Risks are categorized by probability and impact, covering competitive, financial, regulatory, and execution factors in the ${stock.sector} sector.`,
        },
      },
      {
        "@type": "Question",
        name: `What is ${stock.company}'s competitive moat?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The competitive context and moat analysis for ${stock.company} (${ticker}) examines market position, barriers to entry, and sustainable advantages within ${stock.sector}. The report assesses moat durability through quantitative scoring and qualitative evaluation of the company's structural advantages.`,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${stock.company} (${ticker})`,
        item: `${SITE_URL}/analysis/${ticker}/`,
      },
    ],
  };

  const formattedDate = new Date(stock.dateModified).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style dangerouslySetInnerHTML={{ __html: analysisCSS }} />

      {/* Ticker navigation bar */}
      <nav className="ticker-nav" aria-label="Stock ticker navigation">
        <div className="ticker-nav-inner">
          {TICKERS.map((t) => (
            <a
              key={t}
              href={`/analysis/${t}/`}
              className={`ticker-nav-btn${t === ticker ? " active" : ""}`}
            >
              {t}
            </a>
          ))}
        </div>
      </nav>

      {/* Section navigation tabs */}
      <SectionNav links={sectionLinks} />

      {/* Analysis content */}
      <article className="analysis-content">
        <div dangerouslySetInnerHTML={{ __html: analysisContent }} />
      </article>
    </>
  );
}
