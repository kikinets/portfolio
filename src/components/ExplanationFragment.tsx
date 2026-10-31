// A still of the thesis explanation view: contributions towards the recommended action.
type Props = {
  title: string;
  note: string;
  rows: { label: string; value: number }[];
};

export default function ExplanationFragment({ title, note, rows }: Props) {
  const max = Math.max(...rows.map((r) => Math.abs(r.value)));
  return (
    <figure className="wide explanation" data-ui>
      <p className="explanation__title">{title}</p>
      <ul className="explanation__rows">
        {rows.map((r) => (
          <li key={r.label} className="explanation__row">
            <span>{r.label}</span>
            <span className="explanation__track" aria-hidden="true">
              <span
                className={r.value > 0 ? "explanation__bar explanation__bar--pos" : "explanation__bar explanation__bar--neg"}
                style={{ width: `${(Math.abs(r.value) / max) * 50}%` }}
              />
            </span>
            <span className="tabular">
              {r.value > 0 ? "+" : "−"}
              {Math.abs(r.value).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="small soft">{note}</figcaption>
    </figure>
  );
}
