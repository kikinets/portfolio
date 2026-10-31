import type { Content } from "@/content/types";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";

export function Credibility({ credibility }: { credibility: Content["credibility"] }) {
  return (
    <section className="border-y border-line py-7">
      <p className="mx-auto mb-4 max-w-6xl px-5 text-sm text-muted sm:px-8">{credibility.label}</p>
      <Marquee label={credibility.label} duration={40}>
        {credibility.items.map((item) => (
          <span key={item} className="flex items-center font-serif text-3xl whitespace-nowrap sm:text-4xl">
            <span className="px-8 sm:px-10">{item}</span>
            <span aria-hidden className="text-accent">/</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

// A ruled grid of six strengths; the hover lifts the card's tone, no icons.
export default function Strengths({ strengths }: { strengths: Content["strengths"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="strengths-title">
      <SectionHeading id="strengths-title" kicker={strengths.kicker} title={strengths.title} intro={strengths.intro} />
      <div className="mt-14 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
        {strengths.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08} className="border-r border-b border-line">
            <article className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-surface sm:p-8">
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 font-serif text-3xl leading-tight transition-colors group-hover:text-accent">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              <p className="mt-auto pt-8 text-sm font-medium">{item.proof}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
