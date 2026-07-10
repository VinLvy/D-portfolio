"use client";

import { motion } from "framer-motion";

/**
 * SectionLabel — animated section identifier used across all pages.
 *
 * Renders:  [01] ── SECTION NAME
 *
 * Triggers a blur+fade+slide reveal when it enters the viewport.
 */
export default function SectionLabel({ index, label, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 ${className}`}
      aria-label={`Section: ${label}`}
    >
      {/* Index */}
      <span
        className="text-[11px] font-bold tracking-[0.18em] tabular-nums"
        style={{ fontFamily: "var(--font-mono, monospace)", color: "var(--blue)" }}
      >
        {String(index).padStart(2, "0")}
      </span>

      {/* Divider line */}
      <span
        className="block h-px w-8 shrink-0"
        style={{ background: "rgba(59,130,246,0.45)" }}
        aria-hidden="true"
      />

      {/* Label */}
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.22em]"
        style={{ fontFamily: "var(--font-mono, monospace)", color: "var(--text-muted)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}
