import type { ReactNode } from "react";

type Props = { children: ReactNode; duration?: number; reverse?: boolean; label: string };

// Renders its children twice in a row and slides the pair by half its width, forever.
export default function Marquee({ children, duration = 40, reverse = false, label }: Props) {
  return (
    <div className="marquee overflow-hidden" role="region" aria-label={label}>
      <div
        className="marquee__track flex w-max"
        style={{ ["--duration" as string]: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
