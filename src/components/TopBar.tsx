"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/content/site";

type Props = {
  locale: Locale;
  links: { href: string; label: string }[];
  themeLabel: string;
  languageLabel: string;
};

export default function TopBar({ locale, links, themeLabel, languageLabel }: Props) {
  const pathname = usePathname();
  const other: Locale = locale === "en" ? "es" : "en";

  function toggleTheme() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <nav className="topbar" aria-label="Main">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="topbar__control">
          {link.label}
        </a>
      ))}
      <Link href={pathname} locale={other} className="topbar__control" hrefLang={other} aria-label={languageLabel}>
        {other.toUpperCase()}
      </Link>
      <button type="button" className="topbar__control" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
        <span className="theme-dot" aria-hidden="true" />
      </button>
    </nav>
  );
}
