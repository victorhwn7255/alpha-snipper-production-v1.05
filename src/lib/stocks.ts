export interface StockMeta {
  ticker: string;
  company: string;
  sector: string;
  description: string;
  color: string;
  datePublished: string;
  dateModified: string;
  earningsQuarter: string;
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
    earningsQuarter: "Q4 2025",
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
    earningsQuarter: "Q4 2025",
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
    earningsQuarter: "Q4 2025",
  },
};

export const TICKERS = Object.keys(STOCKS);

export const SITE_URL = "https://alpha.thevixguy.com";
export const SITE_NAME = "Alpha Sniper";
