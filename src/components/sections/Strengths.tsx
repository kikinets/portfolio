import { Bot, BriefcaseBusiness, MessagesSquare, Server, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import type { Content, IconName } from "@/content/types";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "./SectionHeading";

const icons: Record<IconName, LucideIcon> = {
  sparkles: Sparkles,
  server: Server,
  briefcase: BriefcaseBusiness,
  messages: MessagesSquare,
  bot: Bot,
  shield: ShieldCheck,
};

// Zig-zag bento: wide, narrow / narrow, wide / wide, narrow.
const spans = ["md:col-span-2", "", "", "md:col-span-2", "md:col-span-2", ""];

export function Credibility({ credibility }: { credibility: Content["credibility"] }) {
  return (
    <section className="border-y border-line bg-surface/40 py-8">
      <p className="mb-5 text-center text-xs font-medium tracking-wider text-muted uppercase">{credibility.label}</p>
      <Marquee label={credibility.label} duration={35}>
        {credibility.items.map((item) => (
          <span key={item} className="mx-8 text-lg font-semibold whitespace-nowrap text-fg/70 sm:mx-12 sm:text-xl">
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export default function Strengths({ strengths }: { strengths: Content["strengths"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="strengths-title">
      <SectionHeading id="strengths-title" kicker={strengths.kicker} title={strengths.title} intro={strengths.intro} />
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {strengths.items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.08} className={spans[i]}>
              <SpotlightCard className="h-full p-7">
                <div className="flex h-full flex-col">
                  <span className="grid size-11 place-items-center rounded-xl border border-line bg-surface-2 text-cyan transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{item.body}</p>
                  <p className="mt-auto pt-6 font-mono text-xs text-cyan">→ {item.proof}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
