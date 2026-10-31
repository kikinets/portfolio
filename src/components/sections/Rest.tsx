import { ArrowUpRight } from "lucide-react";
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
      <SectionHeading id="why-title" kicker={explain.kicker} title={explain.heading} intro={explain.intro} />
      <div className="mt-14 grid gap-10 lg:grid-cols-[14rem_1fr]">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted">{explain.note}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Explainer copy={explain} locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}

export function Journey({ journey }: { journey: Content["journey"] }) {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="journey-title">
      <SectionHeading id="journey-title" kicker={journey.kicker} title={journey.title} />
      <div className="relative mt-14">
        <TimelineLine />
        <ol>
          {journey.items.map((item) => (
            <Reveal key={item.role + item.period} as="li" className="relative pb-12 pl-12 last:pb-0 sm:pl-16">
              <span aria-hidden className="absolute top-2 left-[15px] size-3 rounded-full border-2 border-accent bg-bg sm:left-[23px]" />
              <div className="grid gap-3 lg:grid-cols-[12rem_1fr] lg:gap-10">
                <div>
                  <p className="font-mono text-xs text-muted uppercase">{item.period}</p>
                  {item.tag && <p className="mt-1 text-sm text-accent">{item.tag}</p>}
                </div>
                <div>
                  <h3 className="font-serif text-3xl leading-tight">{item.role}</h3>
                  <p className="mt-1 text-muted">{item.org}</p>
                  <ul className="mt-4 max-w-2xl space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Stack({ stack }: { stack: Content["stack"] }) {
  const all = stack.groups.flatMap((g) => g.items);
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="stack-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="stack-title" kicker={stack.kicker} title={stack.title} />
      </div>
      <div className="mt-12 border-y border-line py-6">
        <Marquee label={stack.title} duration={60}>
          {all.map((s) => (
            <span key={s} className="flex items-center font-serif text-4xl whitespace-nowrap italic sm:text-5xl">
              <span className="px-6">{s}</span>
              <span aria-hidden className="text-accent not-italic">·</span>
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stack.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.06}>
            <h3 className="border-b border-line pb-3 text-sm text-muted">{g.name}</h3>
            <ul className="mt-4 space-y-1.5">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function OutLink({ href, children, download }: { href: string; children: string; download?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1 font-medium"
    >
      <span className="link-draw">{children}</span>
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Contact({ contact }: { contact: Content["contact"] }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8" aria-labelledby="contact-title">
      <Reveal className="border-t border-line pt-6">
        <p className="text-sm text-muted">{contact.kicker}</p>
        <h2 id="contact-title" className="mt-10 max-w-5xl font-serif text-5xl leading-[0.98] sm:text-8xl">
          {contact.title}
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-xl text-lg text-muted">{contact.body}</p>
            <a href={`mailto:${site.email}`} className="link-draw mt-8 inline-block font-serif text-3xl break-all text-accent sm:text-5xl">
              {site.email}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <CopyEmail email={site.email} copyLabel={contact.copy} copiedLabel={contact.copied} />
            <OutLink href={site.linkedin}>LinkedIn</OutLink>
            {site.github && <OutLink href={site.github}>GitHub</OutLink>}
            {site.cvAvailable && (
              <OutLink href={site.cvPath} download>
                CV
              </OutLink>
            )}
          </div>
        </div>
        <p className="mt-14 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted uppercase">
          <span>{contact.location}</span>
          <span>{contact.languages}</span>
        </p>
      </Reveal>
    </section>
  );
}

export function Footer({ footer }: { footer: Content["footer"] }) {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-2 border-t border-line px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
      <p>{footer.rights}</p>
      <p>{footer.line}</p>
    </footer>
  );
}
