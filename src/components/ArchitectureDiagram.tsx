// The thesis system, left to right (top to bottom on a phone). My part is the filled step.
type Props = { labels: { nodes: string[]; mine: string; caption: string } };

const MINE = 3;

export default function ArchitectureDiagram({ labels }: Props) {
  return (
    <figure className="wide diagram" data-ui>
      <ol className="diagram__steps">
        {labels.nodes.map((node, i) => (
          <li key={node} className={i === MINE ? "diagram__step diagram__step--mine" : "diagram__step"}>
            {i === MINE && <span className="diagram__mine small">{labels.mine}</span>}
            {node}
          </li>
        ))}
      </ol>
      <figcaption className="small soft">{labels.caption}</figcaption>
    </figure>
  );
}
