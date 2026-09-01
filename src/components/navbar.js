"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "/",         index: "01", label: "HOME" },
  { href: "/about",    index: "02", label: "ABOUT" },
  { href: "/projects", index: "03", label: "PROJECTS" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/95 border-b border-[#222222] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* ── Brand / Terminal Header ──────────────────────── */}
        <Link 
          href="/"
          className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-wider text-[#e5e2e1] hover:text-[#00FF41] transition-colors"
        >
          <span className="text-[#00FF41]">&gt;</span>
          <span>DAVIN_PF</span>
          <span className="text-[#555555]">{"//"}</span>
          <span className="text-[#888888] hidden sm:inline">SYS_v2.6</span>
        </Link>

        {/* ── Desktop Navigation ───────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 transition-all flex items-center gap-1.5 ${
                  active
                    ? "bg-[#1c1b1b] text-[#00FF41] border border-[#00FF41]/40 font-semibold"
                    : "text-[#888888] hover:text-[#e5e2e1] hover:bg-[#1c1b1b]/50 border border-transparent"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span className={active ? "text-[#00FF41]" : "text-[#555555]"}>{item.index}</span>
                <span className="text-[#555555]">{"//"}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}

          <Link
            href="/DavinPutraFibrian-Resume.pdf"
            download
            className="ml-2 px-3 py-1.5 bg-[#000000] text-[#e5e2e1] hover:bg-[#00FF41] hover:text-[#000000] border border-[#ffffff]/20 hover:border-[#00FF41] transition-all flex items-center gap-1 font-semibold"
          >
            <span>RESUME</span>
            <ArrowUpRight size={13} />
          </Link>
        </nav>

        {/* ── Status Indicator (Desktop) ───────────────────── */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#888888] bg-[#0e0e0e] px-3 py-1 border border-[#222222]">
          <span className="w-2 h-2 bg-[#00FF41] animate-pulse" />
          <span>STATUS:</span>
          <span className="text-[#00FF41]">OPEN_TO_WORK</span>
        </div>

        {/* ── Mobile Menu Trigger ─────────────────────────── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#888888] hover:text-[#e5e2e1] border border-[#222222] bg-[#1c1b1b]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ─────────────────────────────────── */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[#222222] bg-[#0e0e0e] px-4 py-4 space-y-2 font-mono text-xs"
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 border ${
                  active
                    ? "bg-[#1c1b1b] text-[#00FF41] border-[#00FF41]/50 font-semibold"
                    : "text-[#888888] border-[#222222] hover:bg-[#1c1b1b]"
                }`}
              >
                <span className="text-[#555555] mr-2">{item.index} {"//"}</span>
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/DavinPutraFibrian-Resume.pdf"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-center bg-[#00FF41] text-[#000000] font-bold mt-3 uppercase tracking-wider"
          >
            &gt; DOWNLOAD_RESUME
          </Link>
        </motion.div>
      )}
    </header>
  );
}