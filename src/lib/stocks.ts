export interface StockMeta {
  ticker: string;
  company: string;
  sector: string;
  description: string;
  color: string;
  datePublished: string;
  dateModified: string;
  earningsQuarter: string;
  signal: "bullish" | "cautious";
  verdict: "Hold" | "Buy";
  conviction: string;
  scorecard: string;
  keyMetric: string;
  keyMetricValue: string;
  thesis: string;
}

export const STOCKS: Record<string, StockMeta> = {
  TSLA: {
    ticker: "TSLA",
    company: "Tesla, Inc.",
    sector: "Automotive / Clean Energy / AI & Robotics",
    description:
      "Vertically integrated EV manufacturer with energy storage, autonomous driving (FSD), and robotics (Optimus) platforms.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q4 2025",
    signal: "cautious",
    verdict: "Hold",
    conviction: "Medium",
    scorecard: "22% · Mixed",
    keyMetric: "Auto Gross Margin ex-Credits",
    keyMetricValue: "17.9%",
    thesis:
      "Margin recovery via FSD licensing and energy storage scale.",
  },
  NVDA: {
    ticker: "NVDA",
    company: "NVIDIA Corporation",
    sector: "Semiconductors / AI Infrastructure",
    description:
      "Fabless semiconductor platform powering AI infrastructure — data center GPUs, networking, and software ecosystem.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q4 FY2026",
    signal: "bullish",
    verdict: "Buy",
    conviction: "High",
    scorecard: "80% · Improving",
    keyMetric: "Data Center Revenue YoY",
    keyMetricValue: "+75%",
    thesis:
      "AI infrastructure dominance with 70%+ market share through architecture transitions.",
  },
  PLTR: {
    ticker: "PLTR",
    company: "Palantir Technologies Inc.",
    sector: "Enterprise Software / AI Infrastructure",
    description:
      "Enterprise data operating system (Ontology + AIP) for government and commercial AI deployment.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q4 2025",
    signal: "bullish",
    verdict: "Hold",
    conviction: "High",
    scorecard: "89% · Improving",
    keyMetric: "US Commercial Revenue YoY",
    keyMetricValue: "+137%",
    thesis:
      "AIP platform bridging LLMs to production workflows for enterprise AI adoption.",
  },
  CRWD: {
    ticker: "CRWD",
    company: "CrowdStrike Holdings, Inc.",
    sector: "Cybersecurity / SaaS",
    description:
      "Cloud-native cybersecurity platform — Falcon agent with 28+ modules spanning endpoint, cloud, and identity protection.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q4 FY2026",
    signal: "bullish",
    verdict: "Hold",
    conviction: "Medium-High",
    scorecard: "89% · Improving",
    keyMetric: "Net New ARR",
    keyMetricValue: "$331M",
    thesis:
      "Falcon platform consolidation via Flex adoption and 115% net retention.",
  },
  HOOD: {
    ticker: "HOOD",
    company: "Robinhood Markets, Inc.",
    sector: "Financial Services / Fintech",
    description:
      "Retail financial services platform — commission-free trading with expanding crypto, banking, and advisory products.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q4 2025",
    signal: "cautious",
    verdict: "Hold",
    conviction: "Medium",
    scorecard: "31% · Mixed",
    keyMetric: "Net Deposits",
    keyMetricValue: "$68.1B (+35% YoY)",
    thesis:
      "Capturing millennial/Gen-Z wealth cycle with 50%+ operating margins.",
  },
  BE: {
    ticker: "BE",
    company: "Bloom Energy Corporation",
    sector: "Clean Energy / Fuel Cells",
    description:
      "Solid oxide fuel cell manufacturer providing distributed, always-on power generation for data centers and industrial applications.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q4 2025",
    signal: "cautious",
    verdict: "Hold",
    conviction: "Medium",
    scorecard: "56% · Mixed",
    keyMetric: "Product Backlog Growth",
    keyMetricValue: "+140% YoY",
    thesis:
      "Behind-the-meter power for AI data centers via grid bottleneck conversion.",
  },
  CLS: {
    ticker: "CLS",
    company: "Celestica Inc.",
    sector: "Electronics Manufacturing Services / AI Infrastructure",
    description:
      "Electronics manufacturing services provider specializing in AI/ML infrastructure, networking switches, and HPC hardware.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q4 2025",
    signal: "bullish",
    verdict: "Hold",
    conviction: "Medium",
    scorecard: "67% · Improving",
    keyMetric: "CCS Comms Revenue YoY",
    keyMetricValue: "+79%",
    thesis:
      "AI infrastructure design partner for hyperscaler networking and custom compute.",
  },
  SNDK: {
    ticker: "SNDK",
    company: "Sandisk Corporation",
    sector: "Semiconductors / NAND Flash Storage",
    description:
      "NAND flash storage company — enterprise SSDs, consumer flash products, and data center storage solutions.",
    color: "#C8A96E",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    earningsQuarter: "Q2 FY2026",
    signal: "cautious",
    verdict: "Hold",
    conviction: "Medium",
    scorecard: "100% · Improving",
    keyMetric: "Enterprise SSD Revenue",
    keyMetricValue: "~18% of rev",
    thesis:
      "Transitioning from commodity NAND to structural AI storage growth story.",
  },
  LITE: {
    ticker: "LITE",
    company: "Lumentum Holdings Inc.",
    sector: "Optical & Photonic Components / AI Infrastructure",
    description:
      "Optical and photonic products manufacturer — laser chips, transceivers, and 3D sensing components powering AI/cloud networking infrastructure.",
    color: "#C8A96E",
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
    earningsQuarter: "Q2 FY2026",
    signal: "cautious",
    verdict: "Hold",
    conviction: "Medium",
    scorecard: "56% · Mixed",
    keyMetric: "Revenue YoY Growth",
    keyMetricValue: "+65.5%",
    thesis:
      "Optical interconnect upcycle via EML laser leadership for 800G+ transceivers.",
  },
  GOOGL: {
    ticker: "GOOGL",
    company: "Alphabet Inc.",
    sector: "Internet / Digital Advertising / Cloud / AI",
    description:
      "Global internet platform with dominant search, YouTube, and Google Cloud — leveraging AI across seven products with 2B+ monthly users.",
    color: "#C8A96E",
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
    earningsQuarter: "Q4 2025",
    signal: "cautious",
    verdict: "Hold",
    conviction: "Medium",
    scorecard: "40% · Mixed",
    keyMetric: "Google Cloud Revenue YoY",
    keyMetricValue: "+48%",
    thesis:
      "AI-powered Cloud acceleration and dominant search distribution justify $175B+ CapEx cycle.",
  },
};

export const TICKERS = Object.keys(STOCKS);

export const SITE_URL = "https://alpha.thevixguy.com";
export const SITE_NAME = "Alpha Sniper";
