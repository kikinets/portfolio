import Image from "next/image";

type Props = { src: string; width: number; height: number; alt: string; caption: string; portrait?: boolean };

export default function CaseFigure({ src, width, height, alt, caption, portrait }: Props) {
  return (
    <figure className={portrait ? "case-figure--portrait" : "case-figure--inline"}>
      <Image src={src} width={width} height={height} alt={alt} sizes={portrait ? "(max-width: 720px) 100vw, 40vw" : "100vw"} />
      <figcaption className="small soft">{caption}</figcaption>
    </figure>
  );
}
