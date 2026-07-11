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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide navbar during maintenance mode
  const maintenanceActive = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  if (maintenanceActive || pathname === "/maintenance") {
    return null;
  }

  return (
    <motion.header
      layoutRoot
      initial={{ y: isMobile ? 80 : -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed bottom-0 sm:bottom-auto sm:top-0 left-0 right-0 z-50 flex items-end sm:items-start justify-center pb-8 sm:pb-0 sm:pt-5 px-4"
      aria-label="Primary navigation"
    >
      <nav
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-full"
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
              className="relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full
                         text-sm font-medium transition-colors duration-200"
              style={{ color: active ? "#ffffff" : "rgba(255,255,255,0.45)" }}
              aria-current={active ? "page" : undefined}
            >
              {/* Shared layout animated background indicator */}
              {active && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(59,130,246,0.13)",
                    boxShadow:  "inset 0 0 0 1px rgba(59,130,246,0.25)",
                  }}
                  aria-hidden="true"
                />
              )}
              <Icon size={16} className="shrink-0 relative z-10" aria-hidden="true" />
              <span className="hidden sm:inline relative z-10">{label}</span>
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}