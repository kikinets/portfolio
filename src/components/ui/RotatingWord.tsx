"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

// Cycles through words; the first word is what crawlers and no-JS visitors see.
export default function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, [reduce, words.length]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.em
          key={words[index]}
          className="col-start-1 row-start-1 pr-[0.08em] text-accent italic"
          initial={{ y: "70%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-70%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}
