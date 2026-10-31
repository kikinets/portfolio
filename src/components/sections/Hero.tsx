"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, Download } from "lucide-react";
import type { Content } from "@/content/types";
import { site } from "@/content/site";
import RotatingWord from "@/components/ui/RotatingWord";
import Counter from "@/components/ui/Counter";

type Props = { hero: Content["hero"]; locale: string; photo: { src: string; width: number; height: number } | null };

const ease = [0.16, 1, 0.3, 1] as const;

// One line of the headline, rising from behind its own baseline.
function Line({ children, delay, reduce }: { children: React.ReactNode; delay: number; reduce: boolean | null }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ hero, locale, photo }: Props) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 50]);
  const fade = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } };

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36 lg:pb-28">
      <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div>
          <motion.p {...fade(0)} className="font-serif text-2xl sm:text-3xl">
            {site.name}
          </motion.p>
          <motion.p {...fade(0.05)} className="mt-3 flex items-center gap-2.5 text-sm text-muted">
            <span className="live-dot size-2 rounded-full bg-accent" />
            {hero.badge}
          </motion.p>

          <h1 className="mt-7 font-serif text-[3.1rem] leading-[0.98] tracking-[-0.01em] sm:text-7xl lg:text-[5.6rem]">
            <Line delay={0.1} reduce={reduce}>{hero.titleStart}</Line>
            <Line delay={0.22} reduce={reduce}>
              <RotatingWord words={hero.rotating} />
            </Line>
            <Line delay={0.34} reduce={reduce}>{hero.titleEnd}</Line>
          </h1>

          <motion.p {...fade(0.45)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.55)} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink transition hover:brightness-110 active:scale-[0.97]"
            >
              {hero.ctaEmail}
            </a>
            <a href="#work" className="group inline-flex items-center gap-1.5 text-sm font-medium">
              <span className="link-draw">{hero.ctaWork}</span>
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            {site.cvAvailable && (
              <a href={site.cvPath} download className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-fg">
                <Download className="size-4" />
                <span className="link-draw">{hero.ctaCv}</span>
              </a>
            )}
          </motion.div>
        </div>

        {/* Portrait, revealed upwards like a print coming out of a slot */}
        <motion.figure style={{ y: photoY }} className="mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden bg-surface"
            initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
          >
            {photo ? (
              <motion.div
                className="h-full w-full"
                initial={reduce ? false : { scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.3, ease }}
              >
                <Image
                  src={photo.src}
                  alt={hero.photoAlt}
                  width={photo.width}
                  height={photo.height}
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 340px, 400px"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ) : (
              <div className="grid h-full place-items-center font-serif text-7xl text-muted">ET</div>
            )}
          </motion.div>
          <motion.figcaption {...fade(0.9)} className="mt-3 flex justify-between font-mono text-[11px] text-muted uppercase">
            <span>{hero.chips[0]}</span>
            <span>{hero.chips[1]}</span>
          </motion.figcaption>
        </motion.figure>
      </div>

      <motion.dl {...fade(0.7)} className="mt-20 grid grid-cols-2 border-t border-line sm:grid-cols-4">
        {hero.stats.map((s, i) => (
          <div key={s.label} className={`py-6 pr-4 ${i % 2 === 1 ? "border-l border-line pl-6" : ""} ${i === 2 ? "sm:border-l sm:border-line sm:pl-6" : ""}`}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-serif text-5xl leading-none">
              <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} locale={locale} />
            </dd>
            <dd className="mt-3 text-sm leading-snug text-muted" aria-hidden>
              {s.label}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
