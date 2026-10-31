import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Content } from "@/content/types";
import Reveal from "@/components/ui/Reveal";
import ShapMockup from "@/components/ShapMockup";
import SectionHeading from "./SectionHeading";

function Stack({ items }: { items: string[] }) {
  return <p className="font-mono text-xs leading-relaxed text-muted">{items.join("  ·  ")}</p>;
}

export function Featured({ featured }: { featured: Content["featured"] }) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="featured-title">
      <SectionHeading id="featured-title" kicker={featured.kicker} title={featured.title} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[14rem_1fr]">
        <Reveal>
          <p className="font-serif text-8xl leading-none text-accent">{featured.grade}</p>
          <p className="mt-2 text-sm text-muted">{featured.gradeLabel}</p>
        </Reveal>
        <div className="grid items-start gap-10 xl:grid-cols-[1fr_0.95fr]">
          <Reveal delay={0.05}>
            <h3 className="text-2xl font-medium tracking-tight">{featured.name}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">{featured.tagline}</p>
            <ul className="mt-7 divide-y divide-line border-y border-line">
              {featured.highlights.map((h) => (
                <li key={h} className="py-3.5 leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Stack items={featured.stack} />
            </div>
            <Link href={`/projects/${featured.slug}`} className="group mt-8 inline-flex items-center gap-1.5 font-medium">
              <span className="link-draw">{featured.cta}</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <ShapMockup mockup={featured.mockup} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Planned work as a ruled list, like a programme, not a row of cards.
export function Building({ building }: { building: Content["building"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="building-title">
      <SectionHeading id="building-title" kicker={building.kicker} title={building.title} intro={building.intro} />
      <ol className="mt-14 border-t border-line">
        {building.items.map((item, i) => (
          <Reveal key={item.name} as="li" delay={i * 0.08} className="group border-b border-line">
            <div className="grid gap-4 py-8 transition-colors duration-300 group-hover:bg-surface sm:px-4 lg:grid-cols-[14rem_1fr_16rem] lg:gap-10">
              <div className="flex items-center gap-3 lg:block">
                <p className="font-mono text-xs text-muted uppercase">{item.date}</p>
                <p className={`text-sm lg:mt-2 ${item.status === "now" ? "text-accent" : "text-muted"}`}>
                  {item.status === "now" && <span className="live-dot mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />}
                  {item.statusLabel}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-3xl leading-tight transition-transform duration-300 group-hover:translate-x-1">{item.name}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.pitch}</p>
              </div>
              <div className="lg:pt-2">
                <Stack items={item.stack} />
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
