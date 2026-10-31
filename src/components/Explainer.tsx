"use client";

import { useState } from "react";
import type { Content, FeatureId, RoleId } from "@/content/types";
import { BASE_VALUE, weights } from "@/content/weights";

type Props = { copy: Content["explain"] };

// A SHAP-style waterfall: each feature moves the score from the base value to the output.
export default function Explainer({ copy }: Props) {
  const [role, setRole] = useState<RoleId>(copy.roles[0].id);
  const [open, setOpen] = useState<FeatureId | null>(null);

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

  return (
    <div>
      <fieldset className="roles">
        <legend className="small soft">{copy.roleLabel}</legend>
        {copy.roles.map((r) => (
          <button
            key={r.id}
            type="button"
            className="role"
            aria-pressed={role === r.id}
            onClick={() => setRole(r.id)}
          >
            {r.label}
          </button>
        ))}
      </fieldset>

      <div className="waterfall" data-ui style={{ marginTop: 20 }}>
        <div className="waterfall__head">
          <span className="small soft">{copy.baseLabel}</span>
          <span className="tabular">{BASE_VALUE}</span>
        </div>
        <ol className="waterfall__rows">
          {steps.map((s) => {
            const feature = copy.features[s.id];
            const left = pct(Math.min(s.start, s.end));
            const width = Math.abs(pct(s.end) - pct(s.start));
            const expanded = open === s.id;
            return (
              <li key={s.id} className="waterfall__row">
                <span className="waterfall__label">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`evidence-${s.id}`}
                    onClick={() => setOpen(expanded ? null : s.id)}
                  >
                    {feature.label}{" "}
                    <span className="tabular soft">
                      {s.value > 0 ? "+" : "−"}
                      {Math.abs(s.value)}
                    </span>
                  </button>
                </span>
                <span className="waterfall__track" aria-hidden="true">
                  <span
                    className={`waterfall__bar ${s.value > 0 ? "waterfall__bar--pos" : "waterfall__bar--neg"}`}
                    style={{ left: `${left}%`, width: `${width}%` }}
                  />
                </span>
                <p id={`evidence-${s.id}`} className="waterfall__evidence" hidden={!expanded}>
                  {feature.evidence}
                </p>
              </li>
            );
          })}
        </ol>
        <div className="waterfall__foot">
          <span className="small soft">{copy.outputLabel}</span>
          <span className="waterfall__value tabular" aria-live="polite">
            {output}
          </span>
        </div>
      </div>
    </div>
  );
}
