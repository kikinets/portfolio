import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getContent, isLocale } from "@/content";
import { site } from "@/content/site";
import Reveal from "@/components/Reveal";
import "../globals.css";

// Runs before paint: applies the saved theme and turns on the entrance styles.
const bootScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add("js");`;

export function generateStaticParams() {
  return site.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getContent(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: meta.title, template: `%s — ${site.shortName}` },
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es", "x-default": "/en" },
    },
    openGraph: {
      type: "profile",
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_GB",
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1122" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: "Software Engineer, Applied AI & Machine Learning",
    address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "Universidad Complutense de Madrid" }],
    knowsLanguage: ["es", "en"],
    sameAs: [site.linkedin, site.github].filter(Boolean),
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </head>
      <body>
        <NextIntlClientProvider>
          {children}
          <Reveal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
