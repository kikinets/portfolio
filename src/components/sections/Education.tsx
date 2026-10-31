import type { Content } from "@/content/types";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";

export default function Education({ education }: { education: Content["education"] }) {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="education-title">
      <SectionHeading id="education-title" kicker={education.kicker} title={education.title} intro={education.intro} />

      <div className="mt-14 grid gap-12 lg:grid-cols-[14rem_1fr]">
        <Reveal>
          <dl className="space-y-6">
            {education.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-serif text-4xl leading-none">{f.value}</dt>
                <dd className="mt-2 text-sm text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div>
          {/* The two degrees, joined by a plus sign */}
          <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
            {education.degrees.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.12} className={i === 1 ? "md:col-start-3" : ""}>
                <div className="h-full border border-line p-6 sm:p-8">
                  <h3 className="font-serif text-3xl leading-tight sm:text-4xl">{d.name}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{d.focus}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.06} className="row-start-2 flex items-center justify-center md:col-start-2 md:row-start-1">
              <span aria-hidden className="font-serif text-6xl text-accent">+</span>
            </Reveal>
          </div>

          {/* Honours */}
          <Reveal delay={0.1} className="mt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-3">
              <h3 className="font-serif text-2xl text-accent italic">{education.honoursLabel}</h3>
              <p className="text-sm text-muted">{education.honoursNote}</p>
            </div>
            <ul>
              {education.honours.map((h) => (
                <li
                  key={h.subject}
                  className="group flex flex-col gap-1 border-b border-line py-4 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between sm:px-3"
                >
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">{h.subject}</span>
                  <span className="font-mono text-xs text-muted uppercase">{h.area}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
