"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import type { Content } from "@/content/types";
import { site } from "@/content/site";
import NeuralBackground from "@/components/ui/NeuralBackground";
import RotatingWord from "@/components/ui/RotatingWord";
import Counter from "@/components/ui/Counter";

type Props = { hero: Content["hero"]; locale: string; photo: { src: string; width: number; height: number } | null };

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({ hero, locale, photo }: Props) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60]);
  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } };

  return (
    <section id="about" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:min-h-[100svh] lg:pb-24">
      {/* Background: grid, glows and the live network */}
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div aria-hidden className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
      <div aria-hidden className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[110px]" />
      <div aria-hidden className="absolute inset-0 opacity-70">
        <NeuralBackground />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="order-2 lg:order-1">
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur sm:text-sm"
          >
            <span className="pulse-dot size-2 rounded-full bg-emerald-400" />
            {hero.badge}
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="mt-6 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl"
          >
            {hero.titleStart} <RotatingWord words={hero.rotating} /> <br className="hidden sm:block" />
            {hero.titleEnd}
          </motion.h1>

          <motion.p {...rise(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 text-sm font-semibold text-[#07090f] shadow-[0_8px_30px_-8px_var(--cyan)] transition hover:shadow-[0_10px_40px_-6px_var(--violet)] active:scale-[0.97]"
            >
              {hero.ctaWork}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-6 text-sm font-medium backdrop-blur transition hover:border-cyan hover:text-cyan active:scale-[0.97]"
            >
              <Mail className="size-4" />
              {hero.ctaEmail}
            </a>
            {site.cvAvailable && (
              <a
                href={site.cvPath}
                download
                className="inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted transition hover:text-fg"
              >
                <Download className="size-4" />
                {hero.ctaCv}
              </a>
            )}
          </motion.div>

          <motion.dl {...rise(0.45)} className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} locale={locale} />
                </dd>
                <dd className="mt-1.5 text-sm leading-snug text-muted" aria-hidden>
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait */}
        <motion.div
          className="order-1 mx-auto w-full max-w-[210px] sm:max-w-[300px] lg:order-2 lg:max-w-none"
          style={{ y: photoY }}
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <div className="relative">
            <div className="ring-gradient rounded-[2rem] p-[2px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
                {photo ? (
                  <Image
                    src={photo.src}
                    alt={hero.photoAlt}
                    width={photo.width}
                    height={photo.height}
                    priority
                    sizes="(max-width: 1024px) 300px, 420px"
                    quality={90}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-gradient-to-br from-surface-2 to-surface font-mono text-6xl font-bold text-muted">
                    ET
                  </div>
                )}
              </div>
            </div>
            <motion.span
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 -left-6 rounded-xl sm:top-10 sm:bottom-auto border border-line bg-surface/85 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur sm:-left-10 sm:text-sm"
            >
              <span className="mr-1.5 text-cyan">●</span>
              {hero.chips[0]}
            </motion.span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-3 rounded-xl sm:bottom-12 border border-line bg-surface/85 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur sm:-right-8 sm:text-sm"
            >
              <span className="mr-1.5 text-violet">●</span>
              {hero.chips[1]}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
