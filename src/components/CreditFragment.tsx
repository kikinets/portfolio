import type { Content } from "@/content/types";

// A still of the credit-explainer project: the letter and the SHAP values it must match.
export default function CreditFragment({ copy }: { copy: Content["work"]["fragment"] }) {
  const max = Math.max(...copy.reasons.map((r) => Math.abs(r.value)));
  return (
    <div className="fragment" data-ui>
      <div>
        <p className="fragment__title">{copy.title}</p>
        <p className="fragment__letter">{copy.letter}</p>
      </div>
      <ul className="fragment__reasons">
        {copy.reasons.map((r) => (
          <li key={r.label} className="fragment__reason">
            <span>
              {r.label} <span className="tabular">{r.value > 0 ? "+" : "−"}{Math.abs(r.value).toFixed(2)}</span>
            </span>
            <span
              className={`fragment__bar ${r.value > 0 ? "fragment__bar--pos" : ""}`}
              style={{ width: `${(Math.abs(r.value) / max) * 100}%` }}
            />
          </li>
        ))}
      </ul>
      <p className="fragment__check">{copy.check}</p>
    </div>
  );
}
