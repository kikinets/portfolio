"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

type Props = { children: ReactNode; className?: string; tilt?: boolean };

// A card with a light that follows the cursor and an optional slight 3D tilt.
export default function SpotlightCard({ children, className = "", tilt = true }: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });
  const light = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, var(--glow), transparent 70%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);
    if (tilt && !reduce) {
      rx.set(((py / rect.height) - 0.5) * -6);
      ry.set(((px / rect.width) - 0.5) * 6);
    }
  }

  function onLeave() {
    x.set(-200);
    y.set(-200);
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong ${className}`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: light }} />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
