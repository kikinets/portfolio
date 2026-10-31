"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/content/site";
import type { Content } from "@/content/types";

type Props = { locale: Locale; nav: Content["nav"]; home?: boolean };

export default function Nav({ locale, nav, home = true }: Props) {
  const pathname = usePathname();
  const other: Locale = locale === "en" ? "es" : "en";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // On the case-study page the section anchors live on the home page.
  const prefix = home ? "" : `/${locale}`;
  const links = [
    { href: `${prefix}#about`, label: nav.about },
    { href: `${prefix}#work`, label: nav.work },
    { href: `${prefix}#journey`, label: nav.journey },
    { href: `${prefix}#contact`, label: nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link href="/" className="group flex items-center gap-2.5 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-violet font-mono text-xs font-bold text-[#07090f] transition-transform duration-300 group-hover:rotate-6">
            ET
          </span>
          <span className="hidden sm:inline">Enrique Travesí</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            href={pathname}
            locale={other}
            hrefLang={other}
            aria-label={nav.language}
            className="rounded-full px-3 py-2 font-mono text-xs font-medium text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            {other.toUpperCase()}
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={nav.theme}
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a
            href={`${prefix}#contact`}
            className="ml-1 hidden h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition hover:opacity-85 active:scale-[0.97] sm:inline-flex"
          >
            {nav.cta}
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full text-fg hover:bg-surface-2 md:hidden"
            aria-label={open ? nav.close : nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden px-5 md:hidden"
          >
            {[...links, { href: `${prefix}#contact`, label: nav.cta }].map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-lg font-medium">
                  {l.label}
                </a>
              </motion.li>
            ))}
            <li className="h-4" />
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
