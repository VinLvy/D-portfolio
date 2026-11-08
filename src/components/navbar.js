"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "/",            label: "Overview" },
  { href: "/projects",    label: "Systems" },
  { href: "/credentials", label: "Credentials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide navbar during maintenance mode
  const maintenanceActive = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  if (maintenanceActive || pathname === "/maintenance") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-glass)] border-b border-[var(--border-subtle)] backdrop-blur-md">
      <div className="max-w-[1080px] mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* ── Brand Monogram & Name ───────────────────────── */}
        <Link 
          href="/"
          className="flex items-center gap-2.5 text-sm font-medium text-[var(--text-primary)] hover:text-white transition-colors"
        >
          <span className="w-6 h-6 rounded bg-[var(--bg-surface-2)] border border-[var(--border-subtle)] font-mono text-[11px] font-semibold flex items-center justify-center text-[var(--text-primary)]">
            DPF
          </span>
          <span className="tracking-tight">Davin Putra Fibrian</span>
        </Link>

        {/* ── Desktop Navigation ───────────────────────────── */}
        <nav className="hidden md:flex items-center gap-6 text-[13px]">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? "text-[var(--text-primary)] font-medium"
                    : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[1px] bg-[var(--text-primary)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Actions: Download CV ─────────────────────────── */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/DavinPutraFibrian_CV.pdf"
            download="DavinPutraFibrian_CV.pdf"
            className="btn-primary text-xs"
          >
            <span>CV / Resume</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* ── Mobile Menu Trigger ─────────────────────────── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-1)]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ─────────────────────────────────── */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface-1)] px-6 py-4 space-y-3 text-sm"
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 ${
                  active
                    ? "text-[var(--text-primary)] font-semibold"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          
          <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            <Link
              href="/DavinPutraFibrian_CV.pdf"
              download="DavinPutraFibrian_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary text-xs justify-center py-2"
            >
              Download CV (PDF)
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
