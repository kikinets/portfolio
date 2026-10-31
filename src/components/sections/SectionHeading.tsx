import Reveal from "@/components/ui/Reveal";

type Props = { kicker: string; title: string; intro?: string; id?: string };

export default function SectionHeading({ kicker, title, intro, id }: Props) {
  return (
    <Reveal className="grid gap-6 border-t border-line pt-6 lg:grid-cols-[14rem_1fr]">
      <p className="text-sm text-muted">{kicker}</p>
      <div className="max-w-3xl">
        <h2 id={id} className="font-serif text-4xl leading-[1.02] sm:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-xl text-lg text-muted">{intro}</p>}
      </div>
    </Reveal>
  );
}
