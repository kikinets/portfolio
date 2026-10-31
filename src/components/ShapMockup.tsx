"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Content } from "@/content/types";

// A still of the thesis explanation view; bars grow from the centre axis when it scrolls in.
export default function ShapMockup({ mockup }: { mockup: Content["featured"]["mockup"] }) {
  const reduce = useReducedMotion();
  const max = Math.max(...mockup.rows.map((r) => Math.abs(r.value)));

  return (
    <div className="border border-line bg-bg p-5 sm:p-7">
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <span className="font-mono text-xs text-muted uppercase">{mockup.title}</span>
        <span className="font-mono text-xs text-muted">{mockup.note}</span>
      </div>
      <div className="mt-6 flex items-baseline justify-between">
        <span className="text-sm text-muted">{mockup.label}</span>
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl text-accent"
        >
          {mockup.recommendation}
        </motion.span>
      </div>
      <ul className="mt-6 space-y-3.5">
        {mockup.rows.map((r, i) => {
          const width = (Math.abs(r.value) / max) * 50;
          const pos = r.value > 0;
          return (
            <li key={r.label} className="grid grid-cols-[minmax(0,9.5rem)_1fr_3rem] items-center gap-3 text-xs sm:text-sm">
              <span className="truncate text-muted">{r.label}</span>
              <span className="relative h-3">
                <span aria-hidden className="absolute -top-1.5 -bottom-1.5 left-1/2 w-px bg-line-strong" />
                <motion.span
                  aria-hidden
                  className={`absolute top-0 h-full ${pos ? "left-1/2 origin-left bg-accent" : "right-1/2 origin-right bg-neg"}`}
                  style={{ width: `${width}%` }}
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
              <span className="text-right font-mono tabular-nums">
                {pos ? "+" : "−"}
                {Math.abs(r.value).toFixed(2)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
