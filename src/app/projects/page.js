"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  Trophy, 
  Zap, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   PROJECT CATALOG DATA
   ───────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "PROJ.01",
    title: "BatikChain",
    subtitle: "Blockchain Product Authentication Platform",
    period: "Oct 2025 – Dec 2025",
    status: "PRODUCTION_AUDITED",
    description:
      "A decentralized product provenance and authentication platform on the Ethereum blockchain targeting Indonesia's artisan batik heritage industry. Artisans register genuine items with immutable on-chain metadata, while consumers verify provenance in real-time via cryptographic QR scans.",
    impact: [
      { label: "OJK HACKATHON 2025", value: "National Finalist", icon: Trophy },
      { label: "SMART CONTRACT AUDIT", value: "OWASP Compliant", icon: ShieldCheck },
      { label: "ENGINEERING ROLE",     value: "Blockchain Lead",  icon: Users },
    ],
    highlights: [
      "Architected & deployed ERC-721 Solidity smart contracts with immutable on-chain metadata and provenance tracking.",
      "Engineered React / Next.js frontend integrated with Ethers.js for zero-latency wallet connectivity and contract execution.",
      "Enforced Ownable access control & audited against reentrancy and integer overflow vectors per OWASP guidelines.",
    ],
    tech: ["Solidity", "ERC-721", "Ethereum", "Next.js", "React", "Ethers.js", "OpenZeppelin"],
    link: "https://github.com/VinLvy/BatikChain",
    images: ["/images/project6.png", "/images/project6b.png"],
  },
  {
    id: "PROJ.02",
    title: "ReLife RPG",
    subtitle: "AI-Powered Gamified Life Tracker",
    period: "Jan 2026 – Mar 2026",
    status: "RELEASED_BETA",
    description:
      "A full-stack gamified productivity and life-tracking system where natural language journal entries are parsed in real-time by Google Gemini 2.5 Flash. The LLM translates unstructured text into typed stat-delta objects to drive a dynamic RPG leveling engine across 6 core player attributes.",
    impact: [
      { label: "AI ENGINE INTEGRATION", value: "Gemini 2.5 Flash", icon: Zap },
      { label: "LIVE ATTRIBUTES",       value: "6 Radar Stats",    icon: TrendingUp },
      { label: "SYSTEM ARCHITECTURE",   value: "Zero-Latency LLM", icon: Star },
    ],
    highlights: [
      "Engineered a structured prompt pipeline parsing free-form user reflections into strictly typed schema objects.",
      "Implemented Supabase JWT auth with automated session lifecycle management and Recharts live Radar Chart UI.",
      "Developed real-time leveling math, title unlocking system, and high-density technical dashboard.",
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Google Gemini API", "Framer Motion", "Recharts"],
    link: "https://github.com/VinLvy/Prototype-7",
    images: ["/images/project5.png", "/images/project5b.png"],
  },
  {
    id: "PROJ.03",
    title: "AntiFlow",
    subtitle: "AI Content Automation Pipeline Engine",
    period: "Jul 2025 – Sep 2025",
    status: "ACTIVE_PIPELINE",
    description:
      "A zero-cost automated multimedia production engine that produces complete YouTube video asset kits—including segmented scripts, visual image prompts, and neural voiceover narration—from a single topic prompt using decoupled Next.js + FastAPI architectures.",
    impact: [
      { label: "INFRASTRUCTURE COST", value: "$0.00 / Month",       icon: Zap },
      { label: "ASSET GENERATION",    value: "Script + Audio + Prompts", icon: TrendingUp },
      { label: "AI MODEL MATRIX",     value: "Gemini + Edge TTS",    icon: Star },
    ],
    highlights: [
      "Architected decoupled backend isolating LLM scripting logic and file asset management for independent scaling.",
      "Integrated Google Gemini 2.5 Flash for structured script generation and Microsoft Edge TTS for high-fidelity audio synthesis.",
      "Eliminated 100% of production infrastructure cost by strictly optimizing around free-tier API quotas and asynchronous pipelines.",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "Google Gemini API", "Edge TTS", "REST API"],
    link: "https://github.com/VinLvy/AntiFlow",
    images: ["/images/project4.png", "/images/project4b.png"],
  },
  {
    id: "PROJ.04",
    title: "Point of Sales System",
    subtitle: "Enterprise Business Operations Platform",
    period: "Jan 2025 – Feb 2025",
    status: "COMMERCIAL_DEPLOYED",
    description:
      "A production-grade POS platform built with Laravel 11 and MySQL featuring real-time multi-category inventory tracking, asynchronous report generation via Laravel Queues, and role-based access control integrated with POS hardware terminals.",
    impact: [
      { label: "STAFF RECONCILIATION", value: "↓ 40% Workload",     icon: TrendingUp },
      { label: "EXPORT ENGINE",        value: "Automated PDF/CSV",   icon: Zap },
      { label: "AUTHORIZATION",        value: "Spatie RBAC System",  icon: Star },
    ],
    highlights: [
      "Engineered automated PDF/CSV reconciliation reports executed in background jobs via Laravel Queues.",
      "Designed relational schema with multi-tier indexing for zero-latency inventory queries and transaction logging.",
      "Implemented Spatie Permissions RBAC and RESTful API endpoints for POS hardware integration.",
    ],
    tech: ["Laravel 11", "PHP", "MySQL", "REST API", "Spatie Permissions", "Laravel Queues"],
    link: "https://github.com/VinLvy/Point-of-Saless",
    images: ["/images/project2.png", "/images/project2b.png"],
  },
  {
    id: "PROJ.05",
    title: "Company Profile Websites",
    subtitle: "8× Production Commercial Deployments",
    period: "Jul 2024 – Dec 2024",
    status: "CLIENT_DELIVERED",
    description:
      "Delivered 8 production company profile websites using CodeIgniter 4 and MySQL, each featuring bespoke responsive layouts, optimized asset delivery pipelines, and Schema.org structured metadata hierarchy.",
    impact: [
      { label: "ORGANIC VISIBILITY",  value: "+25% Search Traffic", icon: TrendingUp },
      { label: "LIGHTHOUSE AUDIT",    value: "90+ Score All Sites", icon: Star },
      { label: "DEPLOYED VOLUME",     value: "8 Client Systems",    icon: Users },
    ],
    highlights: [
      "Consistently achieved Lighthouse performance scores above 90 through image optimization and server-side caching.",
      "Implemented Schema.org JSON-LD structured data driving measured 25% growth in organic search impressions.",
      "Created structured documentation for team handoff and streamlined cPanel server deployment procedures.",
    ],
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Schema.org", "SEO", "Responsive Design"],
    link: "https://github.com/VinLvy/Web-Competent",
    images: ["/images/project3.png", "/images/project3b.png"],
  },
  {
    id: "PROJ.06",
    title: "Technology Landing Page",
    subtitle: "High-Performance Tech Firm Showcase",
    period: "March 2025 – May 2025",
    status: "OPTIMIZED_SHIPPED",
    description:
      "A high-velocity marketing interface engineered for a technology enterprise, featuring modular component architecture, smooth scroll transitions, micro-interactions, and 100% accessible responsive markup.",
    impact: [
      { label: "PERFORMANCE SCORE",   value: "98.6 / 100",          icon: Zap },
      { label: "ACCESSIBILITY RATING",value: "100 / 100",           icon: Star },
      { label: "SEARCH ENGINE SEO",   value: "100 / 100",           icon: TrendingUp },
    ],
    highlights: [
      "Achieved 98.6 performance index and 100% accessibility score through optimized asset payloads and semantic ARIA tree.",
      "Implemented modular, component-based layout translating Figma technical specifications into production Next.js code.",
    ],
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Lottie", "Figma", "Responsive Design"],
    link: "https://github.com/VinLvy/landing-page",
    images: ["/images/project1.png", "/images/project1b.png"],
  },
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen">

      {/* ── Projects Header ──────────────────────────────────── */}
      <section className="px-4 sm:px-8 pt-12 pb-16 border-b border-[#222222] bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto space-y-4">
          <SectionLabel index={1} label="PROJECT_CATALOG" />
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#e5e2e1] uppercase tracking-tight">
            Things I&apos;ve Built &amp; <span className="text-[#00FF41]">Shipped.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#888888] font-mono max-w-2xl leading-relaxed">
            Verified production systems spanning decentralized Web3 protocols, AI automation pipelines, 
            and enterprise full-stack web platforms.
          </p>
        </div>
      </section>

      {/* ── Featured Projects Stream ─────────────────────────── */}
      <section className="px-4 sm:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="bg-[#1c1b1b] border border-[#222222] hover:border-[#353534] transition-all"
            >
              {/* Top Dossier Header Bar */}
              <div className="px-6 py-3 bg-[#0e0e0e] border-b border-[#222222] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#888888]">
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF41]">{project.id}</span>
                  <span className="text-[#555555]">{"//"}</span>
                  <span className="text-[#e5e2e1] font-bold">{project.title.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span>TIMELINE: <span className="text-[#e5e2e1]">{project.period}</span></span>
                  <span className="text-[#555555]">|</span>
                  <span>STATUS: <span className="text-[#00FF41]">{project.status}</span></span>
                </div>
              </div>

              {/* Main Content Grid: 12 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left / Images Column (5 Cols) */}
                <div className="lg:col-span-5 p-6 bg-[#181818]/50 border-b lg:border-b-0 lg:border-r border-[#222222] flex flex-col gap-4 justify-center">
                  {project.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative w-full bg-[#0e0e0e] border border-[#222222] overflow-hidden"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} preview ${imgIdx + 1}`}
                        width={800}
                        height={500}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Right / Specs Column (7 Cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e5e2e1]">
                        {project.title}
                      </h2>
                      <p className="font-mono text-xs text-[#00FF41] mt-0.5">
                        &gt; {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[#888888] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact Metrics Data Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                      {project.impact.map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={metric.label}
                            className="p-3 bg-[#0e0e0e] border border-[#222222] space-y-1 font-mono"
                          >
                            <div className="text-[10px] text-[#888888] flex items-center gap-1.5">
                              <Icon size={12} className="text-[#00FF41]" />
                              <span>{metric.label}</span>
                            </div>
                            <div className="text-xs font-bold text-[#e5e2e1]">
                              {metric.value}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="pt-2 space-y-2">
                      <div className="font-mono text-xs text-[#e5e2e1] uppercase">
                        [ ARCHITECTURAL_HIGHLIGHTS ]:
                      </div>
                      <ul className="space-y-1.5 font-mono text-xs text-[#888888]">
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-[#00FF41] shrink-0">&gt;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-[#0e0e0e] border border-[#222222] text-[#888888]"
                        >
                          [{t}]
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-terminal"
                    >
                      <Github size={14} />
                      <span>&gt; EXECUTE_GITHUB_REPOSITORY</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>

                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* ── System Queue / Future Builds ─────────────────────── */}
      <section className="px-4 sm:px-8 py-20 border-t border-[#222222] bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 bg-[#1c1b1b] border border-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#00FF41]">
                [ SYSTEM_QUEUE // PIPELINE_ACTIVE ]
              </div>
              <h2 className="text-2xl font-bold text-[#e5e2e1] uppercase">
                More Systems in Development.
              </h2>
              <p className="font-mono text-xs text-[#888888] max-w-xl">
                Currently iterating on decentralized identity proofs, threat intelligence feeds, 
                and automated LLM deployment pipelines.
              </p>
            </div>
            <Link
              href="https://github.com/VinLvy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal shrink-0"
            >
              <Github size={14} />
              <span>&gt; FOLLOW_ON_GITHUB</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-8 py-8 border-t border-[#222222] bg-[#131313] font-mono text-xs text-[#888888]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} DAVIN PUTRA FIBRIAN {"//"} SYSTEM SPEC: OBSIDIAN_TERMINAL
          </div>
          <div>
            CATALOG_TOTAL: <span className="text-[#00FF41]">06_PRODUCTION_PROJECTS</span>
          </div>
        </div>
      </footer>

    </div>
  );
}