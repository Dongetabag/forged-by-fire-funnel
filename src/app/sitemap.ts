import type { MetadataRoute } from "next";

const BASE_URL = "https://forgedbyfire.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/process", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/who-we-help", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/donate", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/volunteer", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${BASE_URL}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
