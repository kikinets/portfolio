import { BriefcaseBusiness, Download, GraduationCap, MapPin, Languages, Presentation } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type { Content } from "@/content/types";
import { site } from "@/content/site";
import Explainer from "@/components/Explainer";
import CopyEmail from "@/components/ui/CopyEmail";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import TimelineLine from "@/components/ui/TimelineLine";
import SectionHeading from "./SectionHeading";

export function WhyMe({ explain, locale }: { explain: Content["explain"]; locale: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="why-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading id="why-title" kicker={explain.kicker} title={explain.heading} intro={explain.intro} />
          <Reveal delay={0.1}>
            <p className="mt-6 rounded-xl border border-line bg-surface/60 p-4 text-sm text-muted">{explain.note}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Explainer copy={explain} locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}

const kindIcon = { work: BriefcaseBusiness, study: GraduationCap, teaching: Presentation };

export function Journey({ journey }: { journey: Content["journey"] }) {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="journey-title">
      <SectionHeading id="journey-title" kicker={journey.kicker} title={journey.title} />
      <div className="relative mt-14">
        <TimelineLine />
        <ol className="space-y-6">
          {journey.items.map((item) => {
            const Icon = kindIcon[item.kind];
            return (
              <Reveal key={item.role + item.period} as="li" delay={0.05} className="relative pl-14 sm:pl-20">
                <span className="absolute top-6 left-0 grid size-10 place-items-center rounded-full border border-line-strong bg-bg text-cyan sm:left-2">
                  <Icon className="size-4" />
                </span>
                <div className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-mono text-xs text-muted">{item.period}</p>
                    {item.tag && (
                      <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-400">{item.tag}</span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.role}</h3>
                  <p className="text-cyan">{item.org}</p>
                  <ul className="mt-4 space-y-2 text-muted">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Stack({ stack }: { stack: Content["stack"] }) {
  const all = stack.groups.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="stack-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="stack-title" kicker={stack.kicker} title={stack.title} />
      </div>
      <div className="mt-12 space-y-4">
        {[all.slice(0, half), all.slice(half)].map((row, i) => (
          <Marquee key={i} label={stack.title} duration={45} reverse={i === 1}>
            {row.map((s) => (
              <span key={s} className="mx-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium whitespace-nowrap">
                {s}
              </span>
            ))}
          </Marquee>
        ))}
      </div>
      <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stack.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-semibold">{g.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact({ contact }: { contact: Content["contact"] }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8" aria-labelledby="contact-title">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-24">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
          <div aria-hidden className="absolute -bottom-32 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full bg-violet/25 blur-[100px]" />
          <div className="relative">
            <p className="font-mono text-xs font-medium tracking-wider text-cyan uppercase">{contact.kicker}</p>
            <h2 id="contact-title" className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
              {contact.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{contact.body}</p>
            <a
              href={`mailto:${site.email}`}
              className="text-gradient mt-10 inline-block text-xl font-semibold break-all sm:text-3xl"
            >
              {site.email}
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CopyEmail email={site.email} copyLabel={contact.copy} copiedLabel={contact.copied} />
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium transition hover:border-cyan hover:text-cyan active:scale-[0.97]"
              >
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium transition hover:border-cyan hover:text-cyan active:scale-[0.97]"
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
              )}
              {site.cvAvailable && (
                <a
                  href={site.cvPath}
                  download
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium transition hover:border-cyan hover:text-cyan active:scale-[0.97]"
                >
                  <Download className="size-4" /> CV
                </a>
              )}
            </div>
            <p className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" /> {contact.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Languages className="size-4" /> {contact.languages}
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer({ footer }: { footer: Content["footer"] }) {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-10 text-sm text-muted sm:flex-row sm:px-8">
      <p>{footer.rights}</p>
      <p>{footer.line}</p>
    </footer>
  );
}
