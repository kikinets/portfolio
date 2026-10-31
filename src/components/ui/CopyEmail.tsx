"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

type Props = { email: string; copyLabel: string; copiedLabel: string };

export default function CopyEmail({ email, copyLabel, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium transition hover:border-cyan hover:text-cyan active:scale-[0.97]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "copied" : "copy"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="inline-flex items-center gap-2"
          aria-live="polite"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? copiedLabel : copyLabel}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
