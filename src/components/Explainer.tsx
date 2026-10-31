"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Content, FeatureId, RoleId } from "@/content/types";
import { BASE_VALUE, weights } from "@/content/weights";
import Counter from "@/components/ui/Counter";

type Props = { copy: Content["explain"]; locale: string };

// A SHAP-style waterfall: each feature moves the score from the base value to the output.
export default function Explainer({ copy, locale }: Props) {
  const [role, setRole] = useState<RoleId>(copy.roles[0].id);
  const [open, setOpen] = useState<FeatureId | null>(null);
  const reduce = useReducedMotion();

  const rows = (Object.entries(weights[role]) as [FeatureId, number][]).sort(
    (a, b) => Math.abs(b[1]) - Math.abs(a[1]),
  );

  let running = BASE_VALUE;
  const steps = rows.map(([id, value]) => {
    const start = running;
    running += value;
    return { id, value, start, end: running };
  });
  const output = running;

  const points = [BASE_VALUE, ...steps.map((s) => s.end)];
  const lo = Math.min(...points) - 3;
  const hi = Math.max(...points) + 3;
  const pct = (v: number) => ((v - lo) / (hi - lo)) * 100;
  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 220, damping: 26 };

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-8">
      <LayoutGroup>
        <div role="group" aria-label={copy.roleLabel} className="flex flex-wrap gap-2">
          {copy.roles.map((r) => {
            const active = role === r.id;
            return (
              <button
                key={r.id}
                type="button"
                aria-pressed={active}
                onClick={() => setRole(r.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-[#07090f]" : "text-muted hover:text-fg"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="role-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-violet"
                    transition={spring}
                  />
                )}
                <span className="relative">{r.label}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <div className="mt-8 flex items-center justify-between border-b border-line pb-3 text-sm">
        <span className="text-muted">{copy.baseLabel}</span>
        <span className="font-mono tabular-nums">{BASE_VALUE}</span>
      </div>

      <ol className="mt-3">
        {steps.map((s) => {
          const feature = copy.features[s.id];
          const left = pct(Math.min(s.start, s.end));
          const width = Math.abs(pct(s.end) - pct(s.start));
          const expanded = open === s.id;
          const pos = s.value > 0;
          return (
            <motion.li key={s.id} layout={!reduce} transition={spring} className="border-b border-line/60 py-2">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-center gap-3 sm:grid-cols-[minmax(0,15rem)_1fr]">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`evidence-${s.id}`}
                  onClick={() => setOpen(expanded ? null : s.id)}
                  className="flex items-center gap-1.5 text-left text-sm transition-colors hover:text-cyan"
                >
                  <ChevronDown className={`size-3.5 shrink-0 text-muted transition-transform ${expanded ? "rotate-180" : ""}`} />
                  <span>{feature.label}</span>
                  <span className={`ml-auto font-mono text-xs tabular-nums ${pos ? "text-cyan" : "text-amber"}`}>
                    {pos ? "+" : "−"}
                    {Math.abs(s.value)}
                  </span>
                </button>
                <span className="relative h-6" aria-hidden>
                  <motion.span
                    className={`absolute top-0 h-full rounded ${pos ? "bg-gradient-to-r from-cyan to-violet" : "bg-amber"}`}
                    initial={false}
                    animate={{ left: `${left}%`, width: `${width}%` }}
                    transition={spring}
                  />
                </span>
              </div>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.p
                    id={`evidence-${s.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-5 text-sm text-muted"
                  >
                    <span className="block pt-2 pb-1">{feature.evidence}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ol>

      <div className="mt-5 flex items-end justify-between">
        <span className="text-sm text-muted">{copy.outputLabel}</span>
        <span className="text-gradient text-5xl font-bold tracking-tight" aria-live="polite">
          <Counter key={role} value={output} locale={locale} />
        </span>
      </div>
    </div>
  );
}
