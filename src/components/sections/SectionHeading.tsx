import Reveal from "@/components/ui/Reveal";

type Props = { kicker: string; title: string; intro?: string; id?: string };

export default function SectionHeading({ kicker, title, intro, id }: Props) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-xs font-medium tracking-wider text-cyan uppercase">{kicker}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl sm:leading-[1.05]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </Reveal>
  );
}
