"use client";

/**
 * SectionLabel — High-Craft Industrial Blueprint section header.
 * Formats as: [ 01 / Section Title ] without underscores.
 */
export default function SectionLabel({ index, label, className = "" }) {
  // Replace any underscores with spaces automatically just in case
  const cleanLabel = String(label).replace(/_/g, " ");

  return (
    <div
      className={`section-label ${className}`}
      aria-label={`Section: ${cleanLabel}`}
    >
      <span className="text-[var(--text-muted)]">[</span>
      <span className="text-[var(--text-primary)] font-medium">
        {String(index).padStart(2, "0")}
      </span>
      <span className="text-[var(--text-muted)]">/</span>
      <span className="text-[var(--text-secondary)]">
        {cleanLabel}
      </span>
      <span className="text-[var(--text-muted)]">]</span>
    </div>
  );
}
