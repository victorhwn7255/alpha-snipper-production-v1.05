import { TICKERS, STOCKS, SITE_URL, SITE_NAME } from "@/lib/stocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `The Alpha Sniper Framework — A 19-Section Stock Analysis Methodology`,
  description:
    "The Alpha Sniper Framework is a structured 19-section, three-phase stock analysis methodology that transforms quarterly earnings into repeatable buy, hold, or sell decisions. It covers business model classification, thesis-weighted scorecards, earnings quality forensics, and pre-committed kill criteria.",
  alternates: { canonical: `${SITE_URL}/framework/` },
  openGraph: {
    title: `The Alpha Sniper Framework — A 19-Section Stock Analysis Methodology`,
    description:
      "A structured 19-section, three-phase stock analysis methodology for rigorous, repeatable investment research.",
    url: `${SITE_URL}/framework/`,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `The Alpha Sniper Framework — A 19-Section Stock Analysis Methodology`,
    description:
      "A structured 19-section, three-phase stock analysis methodology for rigorous, repeatable investment research.",
  },
};

export default function FrameworkPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Alpha Sniper Framework — A 19-Section Stock Analysis Methodology",
    description:
      "A structured 19-section, three-phase stock analysis methodology that transforms quarterly earnings into repeatable buy, hold, or sell decisions.",
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/framework/`,
    keywords: [
      "stock analysis framework",
      "quarterly earnings analysis",
      "thesis-weighted scorecard",
      "kill criteria investing",
      "fundamental analysis methodology",
      "earnings quality forensics",
      "investment research framework",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Alpha Sniper Framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Alpha Sniper Framework is a structured 19-section, three-phase stock analysis methodology designed for mid-to-long-term investors. It transforms quarterly earnings releases into repeatable buy, hold, or sell decisions by systematically evaluating business quality trajectory, management credibility, and thesis integrity across approximately 1,620 lines of structured analysis.",
        },
      },
      {
        "@type": "Question",
        name: "How does the thesis-weighted scorecard work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The thesis-weighted scorecard assigns locked weights to each metric based on your investment thesis. The thesis-core metric receives 2x weight (maximum one), thesis-supporting metrics receive 1.5x weight (maximum two), and general health metrics receive 1x weight. Weights are locked at position establishment and never changed quarter to quarter, preventing emotional rationalization of deteriorating metrics.",
        },
      },
      {
        "@type": "Question",
        name: "What are kill criteria in stock analysis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kill criteria are pre-committed, observable exit triggers written before you need them. Each criterion must be specific (named metric and threshold), time-bound (consecutive quarters), and pre-committed to an action (reduce, exit, or reassess). They include a compound trigger audit to test for false positives and remove emotional decision-making at the moment of deterioration.",
        },
      },
      {
        "@type": "Question",
        name: "How often should each section of the framework be updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sections follow three update cadences: quarterly updates for data-driven sections like financial statements, scorecards, and risk inventories (S7-S12, S15, S18-S19); material change updates for competitive landscape, catalysts, and sell-side coverage (S5, S13-S14); and annual updates for foundational sections like identity, thesis, business model, and kill criteria (S1-S4, S6, S16-S17).",
        },
      },
      {
        "@type": "Question",
        name: "What three questions does the Alpha Sniper Framework answer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every analysis answers exactly three governing questions: (1) Is the business getting better or worse? — measured through operational metrics, not estimate beats. (2) Is management trustworthy and competent? — tracked via guidance accuracy, promise delivery, and capital allocation scoring. (3) Has anything changed about the long-term thesis? — evaluated through pre-committed kill criteria and the thesis-weighted scorecard.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Analyze a Stock Using the Alpha Sniper Framework",
    description:
      "A three-phase process for conducting rigorous quarterly stock analysis.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Phase 1: Foundation & Business Model (Sections 1–7)",
        text: "Classify the business model, establish a falsifiable thesis with a key metric, map product architecture and revenue streams, assess competitive moat and management credibility, and build a cross-quarter acceleration table.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Phase 2: Financial Trajectory & Forward Assessment (Sections 8–15)",
        text: "Build 5-quarter financial progressions for income statement, balance sheet, and cash flow. Run earnings quality forensics, compute the thesis-weighted scorecard, evaluate sector-specific metrics, and assess management guidance credibility.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Phase 3: Risk & Stress Test (Sections 16–19)",
        text: "Design pre-committed kill criteria with compound trigger audits, build valuation scenarios, establish the rolling quarterly baseline, and compile a unified risk inventory with severity and probability ratings.",
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
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Framework",
        item: `${SITE_URL}/framework/`,
      },
    ],
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="landing framework-landing">
        {/* Hero */}
        <h1>The Alpha Sniper Framework</h1>
        <p className="landing-subtitle">
          A structured 19-section, three-phase stock analysis methodology that
          transforms quarterly earnings into repeatable buy, hold, or sell
          decisions. Built for mid-to-long-term investors who want rigorous,
          systematic research — not headline-driven reactions.
        </p>

        {/* What Is the Alpha Sniper Framework? */}
        <section className="framework-section">
          <h2>What Is the Alpha Sniper Framework?</h2>
          <p>
            The Alpha Sniper Framework is a comprehensive stock analysis system
            organized into 3 phases and 19 sections. It produces approximately
            1,620 lines of structured analysis per stock, updated on a quarterly
            cadence tied to each company&apos;s earnings releases.
          </p>
          <p>
            Every analysis answers three governing questions: is the business
            improving or deteriorating, is management trustworthy and competent,
            and has anything changed about the long-term investment thesis.
          </p>

          <table className="framework-overview-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Sections</th>
                <th>Focus</th>
                <th>~Lines</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase 1</td>
                <td>S1–S7</td>
                <td>Foundation &amp; Business Model</td>
                <td>~570</td>
              </tr>
              <tr>
                <td>Phase 2</td>
                <td>S8–S15</td>
                <td>Financial Trajectory &amp; Forward Assessment</td>
                <td>~600</td>
              </tr>
              <tr>
                <td>Phase 3</td>
                <td>S16–S19</td>
                <td>Risk Framework &amp; Stress Testing</td>
                <td>~455</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Three Governing Questions */}
        <section className="framework-section">
          <h2>What Are the Three Governing Questions?</h2>
          <p>
            Every quarterly analysis exists to answer exactly three questions.
            Everything else is noise.
          </p>

          <div className="framework-questions-grid">
            <div className="framework-phase" style={{ borderTopColor: "var(--primary)" }}>
              <h3>1. Is the Business Getting Better or Worse?</h3>
              <p>
                Measured through operational metrics, not estimate beats. A
                company can beat estimates while the business deteriorates.
                Revenue growth quality, customer economics, and competitive
                position reveal the real trajectory.
              </p>
            </div>

            <div className="framework-phase" style={{ borderTopColor: "var(--secondary)" }}>
              <h3>2. Is Management Trustworthy and Competent?</h3>
              <p>
                Trustworthy means guidance calibrates to actual results over
                time. Competent means capital flows to the highest-return
                opportunities. Tracked through a multi-quarter credibility
                scorecard.
              </p>
            </div>

            <div className="framework-phase" style={{ borderTopColor: "var(--accent)" }}>
              <h3>3. Has Anything Changed About the Long-Term Thesis?</h3>
              <p>
                Most quarters, the answer is no. Pre-committed kill criteria and
                the thesis-weighted scorecard detect the quarters when the answer
                is yes — before emotions override analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="framework-section">
          <h2>How Does the Foundation &amp; Business Model Phase Work?</h2>
          <p>
            Phase 1 (Sections 1–7) establishes the analytical foundation for
            every subsequent judgment. It classifies the business model, locks
            the investment thesis, and maps the competitive landscape — all
            before touching a single financial statement.
          </p>

          <table className="framework-section-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Name</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S1</td>
                <td>Identity &amp; Model Classification</td>
                <td>Business model type determines downstream thresholds for the entire analysis</td>
              </tr>
              <tr>
                <td>S2</td>
                <td>Thesis &amp; Key Metric</td>
                <td>Falsifiable thesis statement and the single metric that gets 2x scorecard weight</td>
              </tr>
              <tr>
                <td>S3</td>
                <td>Business Model &amp; Product Architecture</td>
                <td>Product lines, value creation/capture mechanisms, and unit economics</td>
              </tr>
              <tr>
                <td>S4</td>
                <td>Revenue Stream Map</td>
                <td>Segment revenue breakdown, mix shifts, and customer concentration</td>
              </tr>
              <tr>
                <td>S5</td>
                <td>Competitive Context &amp; Moat Evidence</td>
                <td>Named competitors, threat vectors, moat limitations, and durability assessment</td>
              </tr>
              <tr>
                <td>S6</td>
                <td>Management Team Assessment</td>
                <td>Executive profiles, guidance accuracy baseline, sandbagging factors</td>
              </tr>
              <tr>
                <td>S7</td>
                <td>Cross-Quarter Acceleration Table</td>
                <td>Multi-quarter trend data establishing the normal operating profile</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Key innovations in Phase 1:</strong> The model classification
            in S1 sets FCF conversion thresholds, Tier 2 metric selection, and
            DSO interpretation context. The &ldquo;normal operating profile&rdquo;
            is the most-referenced passage in the entire analysis. S6 introduces
            sandbagging factor calculation — quantifying management&apos;s
            historical tendency to underpromise.
          </p>
        </section>

        {/* Phase 2 */}
        <section className="framework-section">
          <h2>How Are Financials &amp; Forward Assessment Evaluated?</h2>
          <p>
            Phase 2 (Sections 8–15) is the computation-heavy core. It builds
            5-quarter financial progressions, runs earnings quality forensics,
            and produces the thesis-weighted scorecard that drives the buy, hold,
            or sell decision.
          </p>

          <table className="framework-section-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Name</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S8</td>
                <td>Quarterly Income Statement Progression</td>
                <td>5-quarter P&amp;L with segment breakdowns, margins, and EPS trends</td>
              </tr>
              <tr>
                <td>S9</td>
                <td>Balance Sheet Progression</td>
                <td>Liquidity, AR, deferred revenue, debt structure, and share count</td>
              </tr>
              <tr>
                <td>S10</td>
                <td>Earnings Quality &amp; Cash Flow Forensics</td>
                <td>FCF conversion, SBC reality check, DSO, ROIC, and per-share economics</td>
              </tr>
              <tr>
                <td>S11</td>
                <td>Thesis-Weighted Scorecard</td>
                <td>Locked-weight scoring system with normalized trajectory percentage</td>
              </tr>
              <tr>
                <td>S12</td>
                <td>Tier 2 Sector-Specific Metrics</td>
                <td>3–4 metrics specific to the business model (NDR, backlog, take rate, etc.)</td>
              </tr>
              <tr>
                <td>S13</td>
                <td>Forward Catalyst Pipeline</td>
                <td>Product roadmap, supply commitments, and upcoming catalyst events</td>
              </tr>
              <tr>
                <td>S14</td>
                <td>Sell-Side Landscape</td>
                <td>Analyst coverage map, consensus, bull/bear cases from top coverage</td>
              </tr>
              <tr>
                <td>S15</td>
                <td>Management Guidance &amp; Credibility</td>
                <td>Guidance accuracy tracking, credibility-adjusted forward expectations</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Key innovations in Phase 2:</strong> The thesis-weighted
            scorecard (S11) uses locked weights assigned at position
            establishment — never changed quarter to quarter. FCF conversion
            thresholds vary by business model type set in S1. S15 introduces
            credibility-adjusted guidance, discounting management projections
            based on their historical accuracy.
          </p>
        </section>

        {/* Phase 3 */}
        <section className="framework-section">
          <h2>How Does the Risk &amp; Stress Test Phase Work?</h2>
          <p>
            Phase 3 (Sections 16–19) is the adversarial phase. Its purpose is to
            actively try to break the investment thesis before locking the final
            assessment. It converts analytical findings into pre-committed
            decision rules.
          </p>

          <table className="framework-section-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Name</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S16</td>
                <td>Kill Criteria</td>
                <td>Pre-committed exit triggers with compound trigger audits and false-positive testing</td>
              </tr>
              <tr>
                <td>S17</td>
                <td>Valuation Framework</td>
                <td>Scenario analysis with implied growth rates and multiple expansion/compression</td>
              </tr>
              <tr>
                <td>S18</td>
                <td>Rolling Quarterly Baseline</td>
                <td>Snapshot of current state plus pre-earnings expectations for next quarter</td>
              </tr>
              <tr>
                <td>S19</td>
                <td>Risk Inventory</td>
                <td>Unified risk catalogue with severity/probability ratings and correlated risk identification</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Key innovations in Phase 3:</strong> Kill criteria (S16)
            require each trigger to be specific, time-bound, pre-committed,
            observable, and false-positive tested. The compound trigger audit
            converts single-metric triggers into multi-condition rules where
            benign scenarios could produce false signals. S19 identifies
            correlated risks — where multiple risk factors share a common driver.
          </p>
        </section>

        {/* Thesis-Weighted Scorecard Deep Dive */}
        <section className="framework-section">
          <h2>How Does the Thesis-Weighted Scorecard Work?</h2>
          <p>
            The thesis-weighted scorecard is the framework&apos;s central
            decision engine. It scores each metric as +1 (improving), 0
            (stable), or −1 (deteriorating), then applies thesis-derived weights
            to produce a normalized trajectory percentage.
          </p>

          <table className="framework-overview-table">
            <thead>
              <tr>
                <th>Weight</th>
                <th>Classification</th>
                <th>Limit</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2x</td>
                <td>Thesis-core</td>
                <td>Max 1 metric</td>
                <td>Directly tests why you own the stock</td>
              </tr>
              <tr>
                <td>1.5x</td>
                <td>Thesis-supporting</td>
                <td>Max 2 metrics</td>
                <td>Reinforces or contextualizes the thesis</td>
              </tr>
              <tr>
                <td>1x</td>
                <td>General health</td>
                <td>Remaining</td>
                <td>Important but not thesis-specific</td>
              </tr>
            </tbody>
          </table>

          <p>
            Weights are locked at position establishment. Changing weights
            quarter to quarter defeats the purpose — it lets you rationalize
            away deterioration by downgrading the metric that&apos;s failing.
          </p>
          <p>
            The normalized score determines trajectory: above 60% means
            clearly improving, 20–60% means mixed or stable, and below 20%
            triggers a thesis review. The 2x cap prevents any single metric
            from having veto power while ensuring thesis-critical deterioration
            cannot be drowned out.
          </p>
          <p>
            An equal-weighted scorecard can mask thesis-critical deterioration
            behind unrelated strength. Thesis weighting closes this gap by up to
            19 percentage points in real analyses.
          </p>
        </section>

        {/* Kill Criteria Deep Dive */}
        <section className="framework-section">
          <h2>What Are Kill Criteria and Why Do They Matter?</h2>
          <p>
            Kill criteria are pre-committed, observable exit triggers designed
            before you need them. They remove emotional decision-making at the
            exact moment emotions are strongest — when a position is
            deteriorating.
          </p>
          <p>
            Each criterion must pass five design rules. It must be specific
            (named metric and threshold), time-bound (consecutive quarters),
            pre-committed (action predetermined), observable (verifiable from
            public filings), and false-positive tested.
          </p>

          <h3>What Is the Compound Trigger Audit?</h3>
          <p>
            After drafting all kill criteria, the framework runs a compound
            trigger audit. For each criterion, ask: &ldquo;What benign scenario
            would fire this trigger?&rdquo; If a planned event like a factory
            transition could fire the trigger, convert it from a single-metric
            trigger to a compound condition.
          </p>
          <p>
            This prevents false exits during known disruptions while preserving
            the trigger&apos;s power during genuine deterioration. If any
            criterion fires, the pre-committed action executes — no
            rationalization, no waiting for &ldquo;one more quarter.&rdquo;
          </p>
        </section>

        {/* Update Cadence */}
        <section className="framework-section">
          <h2>How Often Is Each Section Updated?</h2>
          <p>
            Sections follow three distinct update cadences based on how quickly
            the underlying data changes. This routing table determines the
            quarterly workload.
          </p>

          <table className="framework-section-table">
            <thead>
              <tr>
                <th>Cadence</th>
                <th>Sections</th>
                <th>Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Every quarter</td>
                <td>S7, S8, S9, S10, S11, S12, S15, S18, S19</td>
                <td>New earnings release</td>
              </tr>
              <tr>
                <td>Material change</td>
                <td>S5, S13, S14</td>
                <td>Competitive shift, new catalyst, or coverage change</td>
              </tr>
              <tr>
                <td>Annually / thesis change</td>
                <td>S1, S2, S3, S4, S6, S16, S17</td>
                <td>Annual review or thesis revision</td>
              </tr>
            </tbody>
          </table>

          <p>
            The quarterly workload concentrates on Phases 2 and 3 — the
            data-driven financial sections. Phase 1 foundations are
            re-examined once a year unless the thesis itself changes.
          </p>
        </section>

        {/* CTA — Live Analyses */}
        <section className="framework-section">
          <h2>See the Framework in Action</h2>
          <p>
            Each stock analysis on {SITE_NAME} follows this 19-section framework.
            Explore live analyses to see how the methodology applies to real
            companies across sectors.
          </p>

          <div className="framework-cta">
            {TICKERS.map((ticker) => {
              const stock = STOCKS[ticker];
              return (
                <a
                  key={ticker}
                  href={`/analysis/${ticker}/`}
                  className="framework-cta-link"
                >
                  <span
                    className="framework-cta-ticker"
                    style={{ color: stock.color }}
                  >
                    {ticker}
                  </span>
                  <span className="framework-cta-company">{stock.company}</span>
                  <span className="framework-cta-sector">{stock.sector}</span>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
