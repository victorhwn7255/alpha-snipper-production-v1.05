import type { MetadataRoute } from "next";
import { STOCKS, TICKERS, SITE_URL } from "@/lib/stocks";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Landing page: lastmod = latest dateModified across all stocks
  const latestModified = TICKERS.reduce((latest, ticker) => {
    const d = STOCKS[ticker].dateModified;
    return d > latest ? d : latest;
  }, "1970-01-01");

  const stockPages: MetadataRoute.Sitemap = TICKERS.map((ticker) => ({
    url: `${SITE_URL}/analysis/${ticker}/`,
    lastModified: new Date(STOCKS[ticker].dateModified),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(latestModified),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/framework/`,
      lastModified: new Date("2026-03-21"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...stockPages,
  ];
}
