import { defineRouting } from "next-intl/routing";
import { site } from "@/content/site";

export const routing = defineRouting({
  locales: site.locales,
  defaultLocale: site.defaultLocale,
});
