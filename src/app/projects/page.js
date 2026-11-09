"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Github, 
  Trophy, 
  Zap, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowUpRight,
  ShieldCheck,
  Server,
  Layers,
  Cpu,
  Database
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   PROJECT CATALOG DATA (DESIGN.MD INDUSTRIAL SPEC)
   ───────────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: "ALL", label: "All Systems", count: 6 },
  { id: "ENTERPRISE", label: "Enterprise & SRE", count: 3 },
  { id: "AI", label: "Applied AI & Pipelines", count: 2 },
  { id: "WEB3", label: "Web3 & Protocols", count: 1 },
];

const PROJECTS = [
  {
    anchorId: "escm",
    id: "SYS-01",
    category: "ENTERPRISE",
    categoryLabel: "Enterprise & SRE",
    title: "E-SCM: Marble & Onyx Supply Chain",
    subtitle: "Applied Industrial Research & Forecasting Microservice",
    period: "Aug 2026 – Sep 2026",
    status: "Pilot Research Deployed",
    statusType: "live",
    description:
      "A comprehensive E-Supply Chain Management system built for the marble and onyx SME cluster in Tulungagung, partnering with field case studies UD Cahaya Onix and UD Putra Abadi. Features real-time raw material tracking, digital work orders (SPK) with 2-stage quality control checkpoints, an asynchronous FastAPI forecasting microservice for demand estimation, and integrated Midtrans payment checkout.",
    impact: [
      { label: "AI Microservice",    value: "FastAPI + Scikit-Learn", icon: Zap },
      { label: "Quality Control",    value: "2-Stage Production QC", icon: ShieldCheck },
      { label: "Payment Gateway",    value: "Midtrans Multi-SME",   icon: TrendingUp },
    ],
    highlights: [
      "Architected web-based E-SCM platform on Laravel 11 and MySQL with role-based access for four distinct user tiers.",
      "Engineered an asynchronous FastAPI microservice with Scikit-Learn for accurate raw material demand forecasting.",
      "Integrated Midtrans payment gateway (QRIS, Virtual Accounts, e-wallets) into a multi-SME checkout experience.",
    ],
    tech: ["Laravel 11", "FastAPI", "Python", "Scikit-Learn", "Midtrans", "MySQL", "REST API"],
    link: "https://github.com/VinLvy",
    images: ["/images/project2.png", "/images/project2b.png"],
  },
  {
    anchorId: "batikchain",
    id: "SYS-02",
    category: "WEB3",
    categoryLabel: "Web3 & Protocols",
    title: "BatikChain",
    subtitle: "Blockchain Product Authentication Platform",
    period: "Oct 2025 – Dec 2025",
    status: "National Finalist — OJK 2025",
    statusType: "award",
    description:
      "A decentralized product provenance and anti-counterfeiting platform on Ethereum for Indonesia's artisan batik industry. Artisans register genuine items with immutable on-chain metadata, while consumers verify authenticity instantly via cryptographic QR scans directly against smart contracts.",
    impact: [
      { label: "OJK Hackathon 2025", value: "National Finalist", icon: Trophy },
      { label: "Smart Contract Audit", value: "OWASP Compliant", icon: ShieldCheck },
      { label: "Engineering Role",     value: "Blockchain Lead",  icon: Users },
    ],
    highlights: [
      "Architected & deployed ERC-721 Solidity smart contracts with immutable on-chain metadata and lineage tracking.",
      "Engineered React / Next.js frontend integrated with Ethers.js for zero-latency wallet connectivity and contract execution.",
      "Enforced Ownable access control & audited against reentrancy vectors per OWASP Smart Contract Top 10 standards.",
    ],
    tech: ["Solidity", "ERC-721", "Ethereum", "Next.js", "React", "Ethers.js", "OpenZeppelin"],
    link: "https://github.com/VinLvy/BatikChain",
    images: ["/images/project6.png", "/images/project6b.png"],
  },
  {
    anchorId: "reliferpg",
    id: "SYS-03",
    category: "AI",
    categoryLabel: "Applied AI & Pipelines",
    title: "ReLife RPG",
    subtitle: "AI-Powered Gamified Life Analytics Engine",
    period: "Jan 2026 – Mar 2026",
    status: "Beta Release",
    statusType: "live",
    description:
      "A full-stack gamified productivity system where natural language daily reflections are converted in real-time into typed stat-delta objects using Google Gemini 2.5 Flash structured outputs, powering dynamic leveling math across 6 core player attributes and a live Recharts radar UI.",
    impact: [
      { label: "AI Pipeline",        value: "Structured Gemini 2.5", icon: Zap },
      { label: "Analytics UI",       value: "6-Stat Radar Chart",    icon: TrendingUp },
      { label: "Auth & Data",        value: "Supabase JWT & RLS",    icon: Star },
    ],
    highlights: [
      "Engineered a structured prompt pipeline parsing free-form user reflections into strictly typed schema objects.",
      "Implemented Supabase JWT auth with automated session lifecycle management and Recharts live Radar Chart UI.",
      "Developed real-time leveling math, title unlocking system, and high-density technical dashboard.",
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Recharts", "Framer Motion"],
    link: "https://github.com/VinLvy/Prototype-7",
    images: ["/images/project5.png", "/images/project5b.png"],
  },
  {
    anchorId: "antiflow",
    id: "SYS-04",
    category: "AI",
    categoryLabel: "Applied AI & Pipelines",
    title: "AntiFlow",
    subtitle: "Decoupled AI Multimedia Pipeline Engine",
    period: "Jul 2025 – Sep 2025",
    status: "Active Pipeline",
    statusType: "live",
    description:
      "A zero-cost automated multimedia production engine that produces complete YouTube video asset kits—including segmented scripts, visual image prompts, and neural voiceover narration—from a single topic prompt using decoupled Next.js + FastAPI architectures.",
    impact: [
      { label: "Infrastructure Cost", value: "$0.00 / Zero Cost",   icon: Zap },
      { label: "Asset Generation",    value: "Script + Audio + Prompts", icon: TrendingUp },
      { label: "Architecture",        value: "Decoupled FastAPI",    icon: Star },
    ],
    highlights: [
      "Architected decoupled backend isolating LLM scripting logic and audio file asset management for independent scaling.",
      "Integrated Google Gemini 2.5 Flash for structured script generation and Microsoft Edge TTS for high-fidelity audio synthesis.",
      "Eliminated 100% of production infrastructure cost by strictly optimizing around free-tier asynchronous API quotas.",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "REST API"],
    link: "https://github.com/VinLvy/AntiFlow",
    images: ["/images/project4.png", "/images/project4b.png"],
  },
  {
    anchorId: "pos",
    id: "SYS-05",
    category: "ENTERPRISE",
    categoryLabel: "Enterprise & SRE",
    title: "Point of Sales (POS) System",
    subtitle: "Commercial Business Operations & Queue Platform",
    period: "Jan 2025 – Feb 2025",
    status: "Commercial Deployed",
    statusType: "live",
    description:
      "A production-grade POS platform built with Laravel 11 and MySQL featuring real-time multi-category inventory tracking, asynchronous report generation via Laravel Queues, and role-based access control integrated with POS hardware terminals.",
    impact: [
      { label: "Staff Reconciliation", value: "↓ 40% Workload",     icon: TrendingUp },
      { label: "Export Engine",        value: "Automated PDF/CSV",   icon: Zap },
      { label: "Authorization",        value: "Spatie RBAC System",  icon: Star },
    ],
    highlights: [
      "Engineered automated PDF/CSV reconciliation reports executed in background worker jobs via Laravel Queues.",
      "Designed relational schema with multi-tier indexing for zero-latency inventory queries and transaction logging.",
      "Implemented Spatie Permissions RBAC and RESTful API endpoints for POS hardware integration.",
    ],
    tech: ["Laravel 11", "PHP", "MySQL", "REST API", "Spatie Permissions", "Laravel Queues"],
    link: "https://github.com/VinLvy/Point-of-Saless",
    images: ["/images/project2.png", "/images/project2b.png"],
  },
  {
    anchorId: "companyprofile",
    id: "SYS-06",
    category: "ENTERPRISE",
    categoryLabel: "Enterprise & SRE",
    title: "Company Profile Websites",
    subtitle: "8× Commercial High-Performance Deployments",
    period: "Jun 2024 – Dec 2024",
    status: "Client Delivered",
    statusType: "live",
    description:
      "Delivered 8 production company profile websites using CodeIgniter 4 and MySQL, each featuring bespoke responsive layouts, optimized asset delivery pipelines, and Schema.org structured metadata hierarchy.",
    impact: [
      { label: "Organic Visibility",  value: "+25% Search Traffic", icon: TrendingUp },
      { label: "Lighthouse Audit",    value: "90+ Score All Sites", icon: Star },
      { label: "Deployed Volume",     value: "8 Commercial Systems", icon: Users },
    ],
    highlights: [
      "Consistently achieved Lighthouse performance scores above 90 through media optimization and server-side caching.",
      "Implemented Schema.org JSON-LD structured data driving measured 25% growth in organic search impressions.",
      "Created structured documentation for team handoff and streamlined cPanel server deployment procedures.",
    ],
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Schema.org", "SEO", "Responsive UI"],
    link: "https://github.com/VinLvy/Web-Competent",
    images: ["/images/project3.png", "/images/project3b.png"],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL" 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full min-h-screen">

      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="section-block">
        <div className="space-y-4">
          <SectionLabel index={1} label="Systems Index &amp; Proof of Work" />
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            Systems &amp; Architecture Catalog
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Architectures spanning industrial supply-chain microservices, decentralized Web3 protocols, 
            and automated AI content pipelines.
          </p>

          {/* Segmented Filter Control Bar */}
          <div className="pt-4 flex flex-wrap gap-1.5 p-1 bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] rounded-lg w-fit">
            {CATEGORIES.map((cat) => {
              const active = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                    active
                      ? "bg-[var(--bg-surface-2)] text-[var(--text-primary)] border border-[var(--border-focus)] shadow-sm"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Systems Stream ──────────────────────────────────── */}
      <section className="section-block space-y-10">
        {filteredProjects.map((project) => (
          <article
            id={project.anchorId}
            key={project.id}
            className="precision-card scroll-mt-24 space-y-6"
          >
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="font-semibold text-[var(--text-primary)]">{project.id}</span>
                <span className="text-[var(--text-muted)]">/</span>
                <span className="text-[var(--text-primary)] font-medium text-sm">{project.title}</span>
                <span className="text-[var(--text-muted)] hidden sm:inline">/</span>
                <span className="text-[var(--text-muted)] hidden sm:inline">{project.categoryLabel}</span>
              </div>
              <div>
                {project.statusType === "award" ? (
                  <span className="badge-mono badge-award text-[11px]">
                    <Trophy size={11} />
                    <span>{project.status}</span>
                  </span>
                ) : (
                  <span className="badge-mono badge-status-live text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                    <span>{project.status}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left / Images Viewport (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {project.images.map((imgSrc, imgIdx) => (
                  <div 
                    key={imgIdx} 
                    className="relative w-full aspect-video bg-[var(--bg-canvas)] border border-[var(--border-subtle)] rounded overflow-hidden"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${project.title} screenshot ${imgIdx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Right / Specs (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-[var(--signal-arch)] mt-0.5">
                    {project.subtitle} • <span className="text-[var(--text-muted)]">{project.period}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-xs">
                  {project.impact.map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div 
                        key={metric.label}
                        className="p-2.5 rounded bg-[var(--bg-surface-2)] border border-[var(--border-subtle)]"
                      >
                        <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-[10px] uppercase">
                          <Icon size={12} className="text-[var(--accent-primary)]" />
                          <span>{metric.label}</span>
                        </div>
                        <div className="text-xs font-semibold text-[var(--text-primary)] mt-1 truncate">
                          {metric.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-1">
                  <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                    Architecture &amp; System Highlights:
                  </div>
                  <ul className="space-y-1 text-xs text-[var(--text-muted)] font-mono">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="badge-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                <Github size={13} />
                <span>View Repository</span>
                <ArrowUpRight size={12} className="text-[var(--text-muted)]" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="p-8 font-mono text-xs text-[var(--text-muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {new Date().getFullYear()} Davin Putra Fibrian • Systems &amp; Architecture
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
            Overview
          </Link>
          <span>/</span>
          <Link href="/credentials" className="hover:text-[var(--text-primary)] transition-colors">
            Credentials
          </Link>
        </div>
      </footer>

    </div>
  );
}
