"use client";

import { motion } from "framer-motion";

/**
 * SectionLabel — Technical Brutalist section header.
 * Formats as: [ 01 // SECTION_TITLE ]
 */
export default function SectionLabel({ index, label, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider ${className}`}
      aria-label={`Section: ${label}`}
    >
      <span className="text-[#888888]">[</span>
      <span className="text-[#00FF41]">
        {String(index).padStart(2, "0")}
      </span>
      <span className="text-[#555555]">{"//"}</span>
      <span className="text-[#e5e2e1] uppercase">
        {label}
      </span>
      <span className="text-[#888888]">]</span>
    </motion.div>
  );
}
