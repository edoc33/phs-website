import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/service-areas";
import { getAllPosts } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portuguesemaids.ca";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/request-a-call-back`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/journal`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/cleaning-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const cityPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${baseUrl}/cleaning-services/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const journalPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...journalPages];
}
