import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const paths = ["", "/projects/xai-financial-decision-support"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    site.locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(site.locales.map((l) => [l, `${site.url}/${l}${path}`])),
      },
    })),
  );
}
