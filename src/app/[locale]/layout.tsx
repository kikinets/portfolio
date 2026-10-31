import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getContent, isLocale } from "@/content";
import { site } from "@/content/site";
import "../globals.css";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Runs before paint so a saved light theme never flashes dark.
const bootScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

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

export const viewport: Viewport = { themeColor: "#07090f" };

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
    <html lang={locale} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
