"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

// The vertical line of the journey timeline, drawn as the section scrolls past.
export default function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return (
    <div ref={ref} aria-hidden className="absolute top-0 bottom-0 left-5 w-px bg-line sm:left-7">
      <motion.div className="h-full w-full origin-top bg-gradient-to-b from-cyan via-violet to-transparent" style={{ scaleY }} />
    </div>
  );
}
