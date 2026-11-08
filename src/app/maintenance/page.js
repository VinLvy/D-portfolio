"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Server, 
  Github, 
  Mail, 
  ArrowUpRight, 
  RotateCw, 
  ShieldCheck, 
  Activity, 
  Terminal,
  Cpu,
  Clock
} from "lucide-react";
import { useState } from "react";

export default function Maintenance() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full precision-card p-6 sm:p-8 space-y-6"
      >
        {/* Telemetry Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] text-xs font-mono">
          <div className="flex items-center gap-2 text-[var(--accent-primary)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]" />
            </span>
            <span className="font-medium">Scheduled Platform Maintenance</span>
          </div>
          <span className="text-[var(--text-muted)] text-[11px] bg-[var(--bg-canvas)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
            Node: ID-APSE1
          </span>
        </div>

        {/* Headline & Value Proposition */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            System Upgrades in Progress
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            The infrastructure is currently receiving scheduled container updates and site reliability 
            enhancements. Live services, microservices, and verification portals will resume momentarily.
          </p>
        </div>

        {/* Live Telemetry Data Box */}
        <div className="p-4 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-subtle)] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2 text-[11px]">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <Activity size={12} className="text-[var(--accent-primary)]" />
              <span>Deployment Pipeline Status</span>
            </span>
            <span className="text-[var(--accent-primary)] font-semibold">94% Synthesized</span>
          </div>

          {/* Animated Progress Bar */}
          <div className="w-full bg-[var(--bg-surface-2)] h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "94%" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[var(--accent-primary)]"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-[var(--text-muted)]">
            <div>
              Traffic Drain: <span className="text-[var(--text-primary)]">Graceful (0 Drop)</span>
            </div>
            <div>
              Target Engine: <span className="text-[var(--signal-arch)]">Next.js 15 + FastAPI</span>
            </div>
          </div>
        </div>

        {/* Contact & Status Actions */}
        <div className="pt-2 border-t border-[var(--border-subtle)] space-y-3">
          <div className="text-[11px] font-mono text-[var(--text-muted)]">
            Direct channels while maintenance is active:
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Link
              href="mailto:davinfibrian@gmail.com"
              className="btn-secondary text-xs"
            >
              <Mail size={13} className="text-[var(--accent-primary)]" />
              <span>davinfibrian@gmail.com</span>
            </Link>

            <Link
              href="https://github.com/VinLvy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <Github size={13} />
              <span>GitHub</span>
              <ArrowUpRight size={12} className="text-[var(--text-muted)]" />
            </Link>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="btn-primary text-xs ml-auto"
            >
              <RotateCw size={12} className={isRefreshing ? "animate-spin" : ""} />
              <span>{isRefreshing ? "Checking..." : "Check Status"}</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
