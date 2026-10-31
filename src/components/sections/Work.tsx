import { ArrowUpRight, Check, CircleDot, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Content } from "@/content/types";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ShapMockup from "@/components/ShapMockup";
import SectionHeading from "./SectionHeading";

function Chip({ children }: { children: string }) {
  return <li className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted">{children}</li>;
}

export function Featured({ featured }: { featured: Content["featured"] }) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="featured-title">
      <SectionHeading id="featured-title" kicker={featured.kicker} title={featured.title} />
      <Reveal className="mt-14">
        <SpotlightCard tilt={false} className="p-6 sm:p-10">
          <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-violet/20 blur-[90px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-line bg-surface-2 px-4 py-3 text-center">
                  <p className="text-gradient text-3xl font-bold tabular-nums">{featured.grade}</p>
                  <p className="mt-0.5 max-w-[6rem] text-[11px] leading-tight text-muted">{featured.gradeLabel}</p>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{featured.name}</h3>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-muted">{featured.tagline}</p>
              <ul className="mt-6 space-y-3">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-relaxed">
                    <Check className="mt-1 size-4 shrink-0 text-cyan" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-7 flex flex-wrap gap-2">
                {featured.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </ul>
              <Link
                href={`/projects/${featured.slug}`}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-semibold text-bg transition hover:opacity-85 active:scale-[0.97]"
              >
                {featured.cta}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <ShapMockup mockup={featured.mockup} />
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}

export function Building({ building }: { building: Content["building"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="building-title">
      <SectionHeading id="building-title" kicker={building.kicker} title={building.title} intro={building.intro} />
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {building.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.1}>
            <SpotlightCard className="h-full p-7">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                      item.status === "now" ? "bg-emerald-400/10 text-emerald-400" : "bg-surface-2 text-muted"
                    }`}
                  >
                    {item.status === "now" ? <CircleDot className="size-3.5" /> : <Clock className="size-3.5" />}
                    {item.statusLabel}
                  </span>
                  <span className="font-mono text-xs text-muted">{item.date}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.name}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{item.pitch}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {item.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
