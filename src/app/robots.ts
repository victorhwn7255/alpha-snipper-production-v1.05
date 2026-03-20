import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/stocks";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers by default
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow AI search/retrieval crawlers
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      {
        userAgent: "Claude-User",
        allow: "/",
      },
      // Training crawlers — allowed for now to build training presence.
      // To block training while keeping search, uncomment disallow:
      // { userAgent: "GPTBot", disallow: "/" },
      // { userAgent: "ClaudeBot", disallow: "/" },
      // { userAgent: "Google-Extended", disallow: "/" },
      // { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
