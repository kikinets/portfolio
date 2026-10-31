// The thesis system, left to right (top to bottom on a phone). My part is highlighted.
type Props = { labels: { nodes: string[]; mine: string; caption: string } };

const MINE = 3;

export default function ArchitectureDiagram({ labels }: Props) {
  return (
    <figure className="my-12">
      <ol className="grid gap-3 sm:grid-cols-6">
        {labels.nodes.map((node, i) => (
          <li
            key={node}
            className={`relative flex min-h-20 flex-col justify-end border p-3 text-sm font-medium ${
              i === MINE ? "border-accent bg-accent text-accent-ink" : "border-line bg-surface"
            }`}
          >
            {i === MINE && <span className="mb-auto font-mono text-[11px] uppercase opacity-80">{labels.mine}</span>}
            {node}
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-sm text-muted">{labels.caption}</figcaption>
    </figure>
  );
}
