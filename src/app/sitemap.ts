import type { MetadataRoute } from "next";

const BASE_URL = "https://forgedbyfire.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    // Core funnel + core pages
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/process", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/who-we-help", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/donate", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/volunteer", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
    // Organizational & resources
    { url: "/leadership", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/financials", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/annual-report", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/press", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/news", priority: 0.6, changeFrequency: "weekly" as const },
    // Legal / compliance
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/accessibility", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/nondiscrimination", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/donor-rights", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/refund-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${BASE_URL}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
