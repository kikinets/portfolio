"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Content } from "@/content/types";

// A still of the thesis explanation view; bars grow from the centre axis when it scrolls in.
export default function ShapMockup({ mockup }: { mockup: Content["featured"]["mockup"] }) {
  const reduce = useReducedMotion();
  const max = Math.max(...mockup.rows.map((r) => Math.abs(r.value)));

  return (
    <div className="rounded-2xl border border-line bg-bg/80 p-5 shadow-2xl backdrop-blur sm:p-6">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="font-mono text-xs text-muted">{mockup.title}</span>
      </div>
      <div className="mt-5 flex items-baseline justify-between">
        <span className="text-sm text-muted">{mockup.label}</span>
        <motion.span
          initial={reduce ? false : { scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
          className="rounded-md bg-amber/15 px-2.5 py-1 font-mono text-sm font-bold text-amber"
        >
          {mockup.recommendation}
        </motion.span>
      </div>
      <ul className="mt-5 space-y-3">
        {mockup.rows.map((r, i) => {
          const width = (Math.abs(r.value) / max) * 50;
          const pos = r.value > 0;
          return (
            <li key={r.label} className="grid grid-cols-[minmax(0,9rem)_1fr_3rem] items-center gap-3 text-xs sm:text-sm">
              <span className="truncate text-muted">{r.label}</span>
              <span className="relative h-5">
                <span aria-hidden className="absolute top-[-4px] bottom-[-4px] left-1/2 w-px bg-line-strong" />
                <motion.span
                  aria-hidden
                  className={`absolute top-0 h-full rounded ${pos ? "left-1/2 origin-left bg-gradient-to-r from-cyan to-violet" : "right-1/2 origin-right bg-amber"}`}
                  style={{ width: `${width}%` }}
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
              <span className={`text-right font-mono tabular-nums ${pos ? "text-cyan" : "text-amber"}`}>
                {pos ? "+" : "−"}
                {Math.abs(r.value).toFixed(2)}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-5 text-right font-mono text-[11px] text-muted">{mockup.note}</p>
    </div>
  );
}
