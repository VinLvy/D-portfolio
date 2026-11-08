"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Check,
  Copy,
  Layers,
  ShieldCheck,
  Trophy,
  ExternalLink,
  Cpu,
  Server,
  Database,
  Cloud,
  Terminal,
  Zap,
  TrendingUp,
  Workflow,
  Box,
  LineChart,
  Bot
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   TECH STACK LOGO ICONS (CLEAN VECTOR HELPERS)
   ───────────────────────────────────────────────────────────────── */
function TechLogo({ name, iconSrc, type }) {
  if (iconSrc) {
    return (
      <div className="w-3.5 h-3.5 relative shrink-0">
        <Image src={iconSrc} alt={name} fill sizes="14px" className="object-contain" />
      </div>
    );
  }

  switch (type) {
    case "fastapi":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#059669] shrink-0 fill-current">
          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-.8 18.2V13h-2l4.8-7.2v5.2h2z" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 fill-current">
          <path d="M13.98 11.08h1.86v1.85h-1.86zm-2.48 0h1.86v1.85H11.5zm-2.48 0h1.86v1.85H9.02zm-2.48 0h1.86v1.85H6.54zm7.44-2.48h1.86v1.86h-1.86zm-2.48 0h1.86v1.86H11.5zm-2.48 0h1.86v1.86H9.02zm-2.48 0h1.86v1.86H6.54zm7.44-2.48h1.86v1.86h-1.86zm-2.48 0h1.86v1.86H11.5zm-2.48 0h1.86v1.86H9.02zm-2.48 0h1.86v1.86H6.54zM22.5 11.5c-.38-.28-1.22-.44-2.19-.04-.15-.72-.6-1.39-1.35-1.78l-.66-.35-.42.61c-.56.81-.66 1.83-.26 2.72-.42.23-1.05.34-1.72.34H1.5c-.28 0-.5.22-.5.5 0 2.5 1.05 4.9 2.87 6.64 1.87 1.78 4.38 2.76 7.03 2.76 6.84 0 12.39-5.18 12.6-11.39v-.05z" />
        </svg>
      );
    case "gcp":
      return <Cloud size={14} className="text-[#60a5fa] shrink-0" />;
    case "aws":
      return <Server size={14} className="text-[#f59e0b] shrink-0" />;
    case "postgres":
      return <Database size={14} className="text-[#38bdf8] shrink-0" />;
    case "redis":
      return <Database size={14} className="text-[#f43f5e] shrink-0" />;
    case "terraform":
      return <Box size={14} className="text-[#a855f7] shrink-0" />;
    case "ai":
      return <Zap size={14} className="text-[var(--accent-primary)] shrink-0" />;
    case "chart":
      return <LineChart size={14} className="text-[var(--signal-award)] shrink-0" />;
    case "shield":
      return <ShieldCheck size={14} className="text-[var(--accent-primary)] shrink-0" />;
    case "trophy":
      return <Trophy size={14} className="text-[var(--signal-award)] shrink-0" />;
    default:
      return <Workflow size={14} className="text-[var(--text-muted)] shrink-0" />;
  }
}

/* ─────────────────────────────────────────────────────────────────
   DATA SPECIFICATIONS
   ───────────────────────────────────────────────────────────────── */
const MARQUEE_STACK = [
  { name: "FastAPI", role: "Async Python Microservices" },
  { name: "Laravel 11", role: "Enterprise MVC & Queues" },
  { name: "Google Cloud", role: "GKE & Terraform" },
  { name: "Docker", role: "Container Pipelines" },
  { name: "PostgreSQL", role: "ACID Relational Storage" },
  { name: "Next.js 15", role: "App Router & SSR" },
  { name: "React", role: "Component Architectures" },
  { name: "Scikit-Learn", role: "Demand Forecasting" },
  { name: "Midtrans", role: "Multi-SME Payment Gateway" },
  { name: "Solidity", role: "ERC-721 Smart Contracts" },
  { name: "Supabase", role: "Postgres & Edge Auth" },
  { name: "TypeScript", role: "Strict Type Safety" },
  { name: "Redis", role: "In-Memory Caching" },
];
const DOMAIN_MATRIX = [
  {
    id: "backend",
    title: "Backend & Microservices",
    description: "FastAPI (Async Python), Laravel 11, RESTful APIs, Redis Caching, PostgreSQL, MySQL relational schema optimization.",
    icon: Server,
    techStack: [
      { name: "FastAPI", type: "fastapi" },
      { name: "Laravel 11", iconSrc: "/icons/laravel.svg" },
      { name: "Python", iconSrc: "/icons/Python.svg" },
      { name: "PHP", iconSrc: "/icons/php.svg" },
      { name: "PostgreSQL", type: "postgres" },
      { name: "MySQL", iconSrc: "/icons/mysql.svg" },
      { name: "Redis", type: "redis" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & SRE Infrastructure",
    description: "Google Cloud (GKE, Cloud Run), AWS (EC2, S3, IAM), Docker containerization, CI/CD pipelines, Terraform IaC.",
    icon: Cloud,
    techStack: [
      { name: "Google Cloud", type: "gcp" },
      { name: "AWS", type: "aws" },
      { name: "Docker", type: "docker" },
      { name: "Terraform", type: "terraform" },
      { name: "Git / CI/CD", iconSrc: "/icons/Git-logo.svg" },
    ],
  },
  {
    id: "ai",
    title: "Applied AI & Automation",
    description: "LLM prompt pipelines, structured output validation schemas, Edge TTS voice synthesis, automated queue workflows.",
    icon: Cpu,
    techStack: [
      { name: "Gemini API", type: "ai" },
      { name: "Structured LLM", type: "ai" },
      { name: "Next.js", iconSrc: "/icons/next.png" },
      { name: "React", iconSrc: "/icons/react.png" },
      { name: "Queue Workers", type: "ai" },
    ],
  },
  {
    id: "business",
    title: "Business & Quantitative Analysis",
    description: "System design, FinTech regulatory compliance (OJK), financial feasibility modeling (DCF, NPV/IRR, BMNC 2026).",
    icon: LineChart,
    techStack: [
      { name: "DCF Feasibility", type: "chart" },
      { name: "NPV / IRR", type: "chart" },
      { name: "FinTech Compliance", type: "shield" },
      { name: "BMNC 2026", type: "trophy" },
    ],
  },
];

const FEATURED_HIGHLIGHTS = [
  {
    id: "SYS-01",
    badge: "Live Production / Pilot",
    badgeType: "live",
    title: "E-SCM: Marble & Onyx Supply Chain",
    subtitle: "Applied Industrial Research & Forecasting Microservice",
    image: "/images/project2.png",
    description:
      "A production-grade E-Supply Chain Management system built for the marble and onyx SME cluster in Tulungagung (UD Cahaya Onix & UD Putra Abadi). Decoupled transactional workflows by engineering an asynchronous FastAPI forecasting microservice for raw material estimation, paired with digital work orders (SPK) with 2-stage QC and multi-SME Midtrans checkout.",
    impact: [
      "FastAPI asynchronous demand forecasting microservice",
      "Digital work orders (SPK) with 2-stage quality control",
      "Multi-SME checkout with Midtrans (QRIS, VA, e-wallets)",
    ],
    tech: ["Laravel 11", "FastAPI", "Python", "Scikit-Learn", "Midtrans", "MySQL"],
    link: "/projects#escm",
    linkText: "View System Specification",
  },
  {
    id: "HONOR-01",
    badge: "4th Place & National Finalist",
    badgeType: "award",
    title: "BMNC 2026 Business Case Competition",
    subtitle: "National Franchise Scaling & Global Market Entry Strategy",
    image: "/images/project1.png",
    description:
      "Advanced to the national final as one of five finalist teams, presenting a national franchise expansion and global market-entry strategy for a 75-year-old automotive service brand. Built comprehensive financial feasibility models (DCF, NPV/IRR, multi-variable sensitivity analysis) and defended operations strategy before an executive jury panel.",
    impact: [
      "Top 5 National Finalist (BMN Institute & FMI)",
      "Built comprehensive DCF, NPV/IRR & sensitivity model",
      "Defended operations & corporate finance before jury",
    ],
    tech: ["DCF Financial Modeling", "NPV / IRR Analysis", "Franchise Scaling", "National Finalist"],
    link: "/credentials",
    linkText: "View Competition Details & Record",
  },
  {
    id: "SYS-02",
    badge: "National Finalist — OJK 2025",
    badgeType: "award",
    title: "BatikChain",
    subtitle: "Blockchain Product Provenance & Authentication",
    image: "/images/project6.png",
    description:
      "A decentralized provenance and anti-counterfeiting platform on Ethereum for artisan batik heritage. Built for Infinity Hackathon OJK 2025. Features ERC-721 smart contracts audited against OWASP Smart Contract Top 10 vulnerabilities with instant cryptographic QR consumer verification.",
    impact: [
      "National Finalist — Infinity Hackathon OJK 2025 (Team ZYNTRA)",
      "Strict OWASP Smart Contract Top 10 security audit",
      "Zero-latency cryptographic QR verification via Ethers.js",
    ],
    tech: ["Solidity", "ERC-721", "Ethereum", "Next.js", "React", "Ethers.js"],
    link: "/projects#batikchain",
    linkText: "View System Specification",
  }
];

const CHRONICLE_LOGS = [
  {
    date: "Aug 2026 – Sep 2026",
    role: "Student Assistant (Asdos), E-SCM Research Project",
    organization: "Universitas Bhinneka PGRI",
    location: "East Java, Indonesia",
    marker: "emerald",
    summary:
      "Led the engineering of a web-based E-Supply Chain Management system (Laravel 11, MySQL) for the Tulungagung marble and onyx cluster, working directly with UD Cahaya Onix and UD Putra Abadi.",
    points: [
      "Delivered modules for inventory tracking, digital work orders (SPK) with 2-stage QC, and role-based access for 4 user tiers.",
      "Engineered an asynchronous FastAPI forecasting microservice (Statsmodels, Scikit-Learn) for raw material demand estimation.",
      "Integrated Midtrans payment gateway into a multi-SME checkout experience.",
    ],
    tags: ["Laravel 11", "FastAPI", "Python", "Midtrans", "Microservices"],
  },
  {
    date: "Oct 2026",
    role: "4th Place & National Finalist",
    organization: "BMNC 2026 Business Case Competition",
    location: "BMN Institute & Forum Manajemen Indonesia",
    marker: "amber",
    summary:
      "Advanced to the national final as one of five finalist teams, presenting a national franchise expansion and global market-entry strategy for a 75-year-old automotive service brand.",
    points: [
      "Built the comprehensive financial feasibility model (DCF, NPV/IRR, and multi-variable sensitivity analysis).",
      "Defended corporate finance, logistics, and operational scaling strategies before an executive jury panel.",
    ],
    tags: ["DCF Modeling", "NPV / IRR", "Financial Feasibility", "National Finalist"],
  },
  {
    date: "Oct 2025 – Dec 2025",
    role: "National Finalist — Infinity Hackathon OJK 2025",
    organization: "Financial Services Authority (OJK Indonesia)",
    location: "Jakarta, Indonesia",
    marker: "amber",
    summary:
      "Led blockchain engineering in a 2-person team (ZYNTRA) developing BatikChain, an on-chain anti-counterfeiting protocol for artisan batik heritage.",
    points: [
      "Architected ERC-721 smart contracts on Ethereum with OpenZeppelin access controls.",
      "Audited contract architecture against OWASP Smart Contract Top 10 vulnerabilities.",
      "Engineered real-time QR-code consumer verification using Ethers.js.",
    ],
    tags: ["Ethereum", "Solidity", "ERC-721", "OJK Hackathon", "OWASP"],
  },
  {
    date: "Jun 2024 – Dec 2024",
    role: "Fullstack Web Developer Intern",
    organization: "Elecomp Indonesia",
    location: "Commercial Engineering Engagement",
    marker: "default",
    summary:
      "Engineered full-stack features in PHP/Laravel and modern web runtimes within a 6-person agile engineering team, optimizing client web applications for rapid execution and organic search visibility.",
    points: [
      "Delivered 8 production company profile websites maintaining verified Lighthouse performance scores above 90.",
      "Implemented Schema.org structured metadata hierarchy, yielding +25% measured growth in organic search visibility.",
      "Accelerated sprint velocity by 20% through reusable UI components and documented cPanel deployment workflows.",
    ],
    tags: ["PHP", "Laravel", "CodeIgniter 4", "SEO", "Lighthouse 90+"],
  },
  {
    date: "Jul 2025 – Present",
    role: "Bachelor of Informatics (S1 Informatika)",
    organization: "Universitas Bhinneka PGRI",
    location: "Academic Foundation",
    marker: "default",
    summary:
      "Coursework in Data Structures & Algorithms, Object-Oriented Design, Relational Database Systems, and Software Engineering.",
    points: [
      "Focusing on distributed systems, site reliability engineering, and applied machine learning.",
    ],
    tags: ["DSA", "OOP", "Database Systems", "Software Engineering"],
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " WIB"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("davinfibrian@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION // PROFILE PHOTO + VALUE PROPOSITION
          ══════════════════════════════════════════════════════════ */}
      <section className="section-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (8 cols): Typography, Status & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--accent-primary-dim)] border border-[rgba(16,185,129,0.25)] text-[var(--accent-primary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                <span>Available for SRE, Platform &amp; Full-Stack Roles</span>
              </div>
              <div className="text-[var(--text-muted)] flex items-center gap-2">
                <span>East Java, ID</span>
                <span>•</span>
                <span className="text-[var(--text-primary)]">{time || "UTC+7"}</span>
              </div>
            </div>

            {/* Dual-Tone Typography Headline */}
            <div className="space-y-3 pt-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
                Davin Putra Fibrian
              </h1>
              <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
                Full-Stack &amp; Site Reliability Engineer building fault-tolerant microservices, 
                cloud automation pipelines, and practical AI systems.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
              Architecting high-throughput backends with FastAPI &amp; Laravel 11 on Google Cloud and AWS. 
              National Finalist at OJK Fintech Hackathon 2025 and 4th Place at BMNC 2026 Business Case Competition.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/DavinPutraFibrian_CV.pdf"
                download="DavinPutraFibrian_CV.pdf"
                className="btn-primary"
              >
                <span>Download CV (PDF)</span>
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="https://github.com/VinLvy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/davinpfbrn/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
              </Link>

              <button
                onClick={copyEmail}
                className="btn-secondary font-mono"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[var(--accent-primary)]" />
                    <span className="text-[var(--accent-primary)]">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-[var(--text-muted)]" />
                    <span>davinfibrian@gmail.com</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column (4 cols): Profile Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="precision-card p-2.5 w-full max-w-[280px] sm:max-w-[300px] lg:max-w-none space-y-3"
            >
              <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                <Image
                  src="/profile.png"
                  alt="Davin Putra Fibrian"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover contrast-[1.03] saturate-[0.98]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,11,0.75)] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="badge-mono badge-status-live text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                    Verified
                  </span>
                  <span className="text-[var(--text-muted)] bg-[var(--bg-surface-1)]/90 px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[10px]">
                    Tulungagung, ID
                  </span>
                </div>
              </div>
              <div className="px-1 flex items-center justify-between font-mono text-xs">
                <div className="text-[var(--text-primary)] font-medium">Davin Putra Fibrian</div>
                <div className="text-[var(--accent-primary)] text-[11px]">S1 Informatics</div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ANIMATED CORE ENGINEERING MATRIX // INTERACTIVE LOGOS
          ══════════════════════════════════════════════════════════ */}
      <section className="section-block">
        <SectionLabel index={1} label="Core Engineering Matrix" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOMAIN_MATRIX.map((domain, dIdx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: dIdx * 0.08 }}
                whileHover={{ y: -3 }}
                className="precision-card flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-[var(--bg-surface-2)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] group-hover:border-[var(--accent-primary)] transition-colors">
                        <Icon size={14} />
                      </div>
                      <h3 className="font-semibold text-sm text-[var(--text-primary)]">
                        {domain.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      0{dIdx + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                {/* Interactive Animated Logo Badge Cloud */}
                <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
                  <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                    Core Technologies &amp; Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.techStack.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.15 }}
                        className="badge-mono py-1 px-2 text-[11px] bg-[var(--bg-canvas)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)] transition-colors cursor-default"
                      >
                        <TechLogo name={tech.name} iconSrc={tech.iconSrc} type={tech.type} />
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Continuous Tech Stream (Infinite Marquee) ── */}
      <div className="py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-1)]/40 overflow-hidden relative mask-marquee">
        <div className="animate-marquee items-center gap-8 text-xs font-mono text-[var(--text-muted)] select-none">
          {MARQUEE_STACK.concat(MARQUEE_STACK).map((item, mIdx) => (
            <div key={mIdx} className="flex items-center gap-2.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]/70" />
              <span className="text-[var(--text-primary)] font-medium">{item.name}</span>
              <span className="text-[var(--text-muted)] text-[10px]">({item.role})</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          FEATURED CASE STUDIES & HONORS // HIGH-IMPACT WORKS
          ══════════════════════════════════════════════════════════ */}
      <section className="section-block">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
          <div>
            <SectionLabel index={2} label="Featured Case Studies &amp; Honors" className="mb-2" />
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
              Flagship Projects &amp; Competitive Milestones
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1 shrink-0"
          >
            <span>View All Systems &amp; Catalog</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="space-y-6">
          {FEATURED_HIGHLIGHTS.map((item) => (
            <article
              key={item.id}
              className="precision-card space-y-5"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                    {item.id}
                  </span>
                  <span className="text-[var(--text-muted)]">/</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </span>
                </div>
                <div>
                  {item.badgeType === "award" ? (
                    <span className="badge-mono badge-award">
                      <Trophy size={11} />
                      <span>{item.badge}</span>
                    </span>
                  ) : (
                    <span className="badge-mono badge-status-live">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                      <span>{item.badge}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Responsive 12-Column Layout with Real Images */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: Project Image Viewport (5 Cols) */}
                <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-md overflow-hidden bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover contrast-[1.02] saturate-[0.98]"
                  />
                </div>

                {/* Right: Technical Specs & Metrics (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[var(--signal-arch)]">
                      {item.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Impact Deliverables */}
                  <div className="space-y-1.5">
                    <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                      Key Deliverables &amp; Metrics:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {item.impact.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2 rounded bg-[var(--bg-surface-2)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-mono flex items-start gap-1.5"
                        >
                          <span className="text-[var(--accent-primary)] shrink-0">•</span>
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer: Tags & Action */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span key={t} className="badge-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CHRONICLE TIMELINE // CAREER, RESEARCH & HONORS
          ══════════════════════════════════════════════════════════ */}
      <section className="section-block">
        <SectionLabel index={3} label="Career, Research &amp; Competition Chronicle" className="mb-2" />
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight mb-8">
          Verified Experience &amp; Milestones
        </h2>

        <div className="space-y-0">
          {CHRONICLE_LOGS.map((item, idx) => {
            const isAmber = item.marker === "amber";
            const isEmerald = item.marker === "emerald";
            const isLast = idx === CHRONICLE_LOGS.length - 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex gap-3 sm:gap-6 items-start"
              >
                {/* Desktop Date Column */}
                <div className="hidden sm:block w-32 shrink-0 font-mono text-xs text-[var(--text-muted)] text-right pt-1 group-hover:text-[var(--text-secondary)] transition-colors">
                  {item.date}
                </div>

                {/* Vertical Rail + Marker (100% Center-Aligned Track) */}
                <div className="relative flex flex-col items-center shrink-0 w-5 self-stretch">
                  {/* Continuous Vertical Line */}
                  {!isLast && (
                    <div className="absolute top-3.5 bottom-0 w-[1px] bg-[var(--border-subtle)] group-hover:bg-[var(--border-focus)] transition-colors" />
                  )}

                  {/* Node Marker (Always exactly centered on the line) */}
                  <div className="relative z-10 mt-1.5 flex items-center justify-center">
                    {isAmber ? (
                      <motion.div 
                        whileHover={{ scale: 1.3, rotate: 90 }}
                        className="w-3 h-3 rotate-45 bg-[var(--signal-award)] border border-[var(--signal-award)] shadow-[0_0_8px_rgba(245,158,11,0.4)] transition-transform cursor-pointer" 
                      />
                    ) : isEmerald ? (
                      <motion.div 
                        whileHover={{ scale: 1.3 }}
                        className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] border border-[var(--accent-primary)] shadow-[0_0_8px_rgba(16,185,129,0.4)] transition-transform cursor-pointer" 
                      />
                    ) : (
                      <motion.div 
                        whileHover={{ scale: 1.3 }}
                        className="w-2.5 h-2.5 rounded-full bg-[var(--bg-surface-2)] border border-[var(--border-focus)] group-hover:border-[var(--text-secondary)] transition-colors cursor-pointer" 
                      />
                    )}
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex-1 min-w-0 pb-10 space-y-3">
                  {/* Mobile Date indicator */}
                  <div className="sm:hidden font-mono text-[11px] text-[var(--text-muted)]">
                    {item.date}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-white transition-colors">
                        {item.role}
                      </h3>
                      {isAmber && (
                        <span className="badge-mono badge-award text-[10px]">
                          National Honor
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-[var(--text-secondary)] mt-0.5">
                      {item.organization} • <span className="text-[var(--text-muted)]">{item.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-[var(--text-muted)] font-mono">
                    {item.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] shrink-0">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className="badge-mono text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT // DIRECT COMMUNICATION & INQUIRY
          ══════════════════════════════════════════════════════════ */}
      <section className="section-block">
        <div className="space-y-6">
          <div>
            <SectionLabel index={4} label="Direct Communication" className="mb-2" />
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
              Initiate Contact &amp; Collaboration
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-xl leading-relaxed">
              Open to Site Reliability Engineering (SRE), Platform Engineering, and Full-Stack roles, 
              as well as high-impact technical consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            
            {/* Email Card */}
            <div className="precision-card flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Electronic Mail</span>
                  <Mail size={14} className="text-[var(--accent-primary)]" />
                </div>
                <div className="text-base font-semibold text-[var(--text-primary)] break-all">
                  davinfibrian@gmail.com
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Direct communication for contract inquiries, hiring, or technical dialogues.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                <Link
                  href="mailto:davinfibrian@gmail.com"
                  className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Send Email</span>
                  <ArrowUpRight size={13} />
                </Link>
                <button
                  onClick={copyEmail}
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 text-[11px]"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-[var(--accent-primary)]" />
                      <span className="text-[var(--accent-primary)]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="precision-card flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Professional Network</span>
                  <Linkedin size={14} className="text-[#60a5fa]" />
                </div>
                <div className="text-base font-semibold text-[var(--text-primary)]">
                  davinpfbrn
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Career milestones, competition updates, and verified professional network.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] font-mono text-xs">
                <Link
                  href="https://www.linkedin.com/in/davinpfbrn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="precision-card flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Code Repositories</span>
                  <Github size={14} className="text-[var(--text-primary)]" />
                </div>
                <div className="text-base font-semibold text-[var(--text-primary)]">
                  VinLvy
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Source code, protocol experiments, microservices, and production repositories.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] font-mono text-xs">
                <Link
                  href="https://github.com/VinLvy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>View GitHub Profile</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER // CONTACT & STATUS
          ══════════════════════════════════════════════════════════ */}
      <footer className="p-8 font-mono text-xs text-[var(--text-muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {new Date().getFullYear()} Davin Putra Fibrian. Engineered with Next.js &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-3">
          <Link href="/projects" className="hover:text-[var(--text-primary)] transition-colors">
            Systems
          </Link>
          <span>/</span>
          <Link href="/credentials" className="hover:text-[var(--text-primary)] transition-colors">
            Credentials
          </Link>
          <span>/</span>
          <Link href="mailto:davinfibrian@gmail.com" className="hover:text-[var(--text-primary)] transition-colors">
            Contact
          </Link>
        </div>
      </footer>

    </div>
  );
}
