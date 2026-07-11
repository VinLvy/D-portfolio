"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "/",        label: "Home",     icon: Home     },
  { href: "/about",   label: "About",    icon: User     },
  { href: "/projects",label: "Projects", icon: Briefcase},
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide navbar during maintenance mode
  const maintenanceActive = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  if (maintenanceActive || pathname === "/maintenance") {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pt-5 px-4"
      aria-label="Primary navigation"
    >
      <nav
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full"
        style={{
          background:   scrolled ? "rgba(10, 15, 30, 0.45)" : "rgba(10, 15, 30, 0.25)",
          backdropFilter:       "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
          border:               "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled
            ? "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)"
            : "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* ── Nav links ─────────────────────────────────────── */}
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full
                         text-sm font-medium transition-colors duration-200"
              style={{ color: active ? "#ffffff" : "rgba(255,255,255,0.45)" }}
              aria-current={active ? "page" : undefined}
            >
              {/* Shared layout animated background indicator */}
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(59,130,246,0.13)",
                    boxShadow:  "inset 0 0 0 1px rgba(59,130,246,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  aria-hidden="true"
                />
              )}
              <Icon size={14} className="shrink-0 relative z-10" aria-hidden="true" />
              <span className="hidden sm:inline relative z-10">{label}</span>
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}