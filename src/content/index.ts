import en from "./en";
import es from "./es";
import type { Locale } from "./site";
import type { Content } from "./types";

const content: Record<Locale, Content> = { en, es };

export function getContent(locale: Locale): Content {
  return content[locale];
}

export function isLocale(value: string): value is Locale {
  return value in content;
}
