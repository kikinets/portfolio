import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent, isLocale } from "@/content";
import { site } from "@/content/site";
import { Contact, Footer } from "@/components/Sections";
import TopBar from "@/components/TopBar";

const slugs = ["xai-financial-decision-support"];

export function generateStaticParams() {
  return site.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

type Params = { params: Promise<{ locale: string; slug: string }> };

function findProject(locale: string, slug: string) {
  if (!isLocale(locale) || !slugs.includes(slug)) return null;
  const c = getContent(locale);
  const project = c.work.projects.find((p) => p.slug === slug);
  return project ? { c, project, locale } : null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const found = findProject(locale, slug);
  if (!found) return {};
  return {
    title: found.project.title,
    description: found.project.summary,
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
  const { c, project } = found;
  const { default: Body } = await import(`@/content/projects/${found.locale}/${slug}.mdx`);

  return (
    <>
      <div className="case-top">
        <Link href="/" className="plain-link">
          {site.shortName}
        </Link>
        <TopBar
          locale={found.locale}
          links={[{ href: `/${found.locale}#work`, label: c.nav.work }]}
          themeLabel={c.nav.theme}
          languageLabel={c.nav.language}
        />
      </div>
      <main>
        <header className="case-hero">
          <h1 className="case-hero__title" data-reveal>
            {project.title}
          </h1>
          <p style={{ margin: "20px 0 0", maxWidth: "60ch" }} data-reveal>
            {project.summary}
          </p>
          <a className="button" href={`mailto:${site.email}`} data-reveal>
            {c.hero.action}
          </a>
          <dl className="case-facts" data-reveal style={{ ["--i" as string]: 1 }}>
            {c.caseStudy.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </header>
        {project.picture && (
          <figure className="case-figure">
            <Image
              src={project.picture.src}
              alt={project.picture.alt}
              width={project.picture.width}
              height={project.picture.height}
              sizes="100vw"
              priority
            />
            <figcaption className="small soft">{project.picture.caption}</figcaption>
          </figure>
        )}
        <article className="prose">
          <Body />
          <p style={{ marginTop: 48 }}>
            <Link href="/#work" className="link">
              ← {c.caseStudy.back}
            </Link>
          </p>
        </article>
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}
