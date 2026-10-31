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
        <header className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
          <div aria-hidden className="absolute -top-40 left-1/3 h-[420px] w-[720px] rounded-full bg-violet/20 blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-cyan">
                <ArrowLeft className="size-4" /> {c.caseStudy.back}
              </Link>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl sm:leading-[1.03]">{featured.name}</h1>
              <p className="mt-5 max-w-xl text-lg text-muted">{featured.tagline}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 text-sm font-semibold text-[#07090f] transition active:scale-[0.97]"
              >
                <Mail className="size-4" /> {c.caseStudy.cta}
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <ShapMockup mockup={featured.mockup} />
            </Reveal>
          </div>
          <dl className="relative mx-auto mt-16 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {c.caseStudy.facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-surface p-5">
                  <dt className="font-mono text-xs text-cyan uppercase">{f.label}</dt>
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
