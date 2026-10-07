import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { landings } from "@/config/landing";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...landings.map((l) => ({
      url: `${site.url}/${l.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
