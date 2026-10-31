import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getContent, isLocale } from "@/content";
import { site } from "@/content/site";
import Nav from "@/components/ui/Nav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Reveal from "@/components/ui/Reveal";
import ShapMockup from "@/components/ShapMockup";
import { Contact, Footer } from "@/components/sections/Rest";

const slugs = ["xai-financial-decision-support"];

export function generateStaticParams() {
  return site.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

type Params = { params: Promise<{ locale: string; slug: string }> };

function findProject(locale: string, slug: string) {
  if (!isLocale(locale) || !slugs.includes(slug)) return null;
  const c = getContent(locale);
  return c.featured.slug === slug ? { c, locale } : null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const found = findProject(locale, slug);
  if (!found) return {};
  return {
    title: found.c.featured.name,
    description: found.c.featured.tagline,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: { en: `/en/projects/${slug}`, es: `/es/projects/${slug}` },
    },
  };
}

export default async function CaseStudy({ params }: Params) {
  const { locale, slug } = await params;
  const found = findProject(locale, slug);
  if (!found) notFound();
  setRequestLocale(found.locale);
  const { c } = found;
  const { featured } = c;
  const { default: Body } = await import(`@/content/projects/${found.locale}/${slug}.mdx`);

  return (
    <>
      <ScrollProgress />
      <Nav locale={found.locale} nav={c.nav} home={false} />
      <main>
        <header className="relative pt-32 pb-16 sm:pt-40">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent">
                <ArrowLeft className="size-4" /> {c.caseStudy.back}
              </Link>
              <h1 className="mt-6 font-serif text-5xl leading-[1] sm:text-7xl">{featured.name}</h1>
              <p className="mt-5 max-w-xl text-lg text-muted">{featured.tagline}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink transition hover:brightness-110 active:scale-[0.97]"
              >
                <Mail className="size-4" /> {c.caseStudy.cta}
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <ShapMockup mockup={featured.mockup} />
            </Reveal>
          </div>
          <dl className="relative mx-auto mt-16 grid max-w-6xl gap-x-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {c.caseStudy.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div className="h-full border-t border-line pt-4 pb-6">
                  <dt className="font-mono text-xs text-muted uppercase">{f.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed">{f.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </header>
        <article className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="prose-case mx-auto">
            <Body />
          </div>
        </article>
        <Contact contact={c.contact} />
      </main>
      <Footer footer={c.footer} />
    </>
  );
}
