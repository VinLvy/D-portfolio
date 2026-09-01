"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Terminal, 
  Github,
  Linkedin,
  Instagram,
  Mail
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   DATA SPECIFICATIONS
   ───────────────────────────────────────────────────────────────── */
const HERO_METRICS = [
  { value: "20+", label: "PROJECTS_DELIVERED", note: "Production & MVP" },
  { value: "15+", label: "TECH_STACK_INDEX",  note: "Frameworks & Tools" },
  { value: "03+", label: "YEARS_EXPERIENCE",   note: "Web & Systems" },
  { value: "100%",label: "CODE_INTEGRITY",     note: "Verified Standards" },
];

const TECH_TOOLBOX = [
  { name: "Next.js",     category: "FRONTEND", level: "100%", stars: "★★★★★", desc: "App Router, SSR, Server Actions" },
  { name: "React",       category: "FRONTEND", level: "100%", stars: "★★★★★", desc: "Hooks, Context, State Architecture" },
  { name: "JavaScript",  category: "LANGUAGE", level: "100%", stars: "★★★★★", desc: "ESNext, Async/Await, Web APIs" },
  { name: "PHP",         category: "BACKEND",  level: "100%", stars: "★★★★★", desc: "Modern OOP, MVC Frameworks" },
  { name: "Laravel",     category: "BACKEND",  level: "100%", stars: "★★★★★", desc: "Queues, Eloquent, Auth Systems" },
  { name: "MySQL",       category: "DATABASE", level: "100%", stars: "★★★★★", desc: "Schema Design, Query Optimization" },
  { name: "Python",      category: "BACKEND",  level: "80%",  stars: "★★★★☆", desc: "FastAPI, Automation, Scripting" },
  { name: "Golang",      category: "BACKEND",  level: "80%",  stars: "★★★★☆", desc: "Concurrency, RESTful Microservices" },
  { name: "Solidity",    category: "WEB3",     level: "80%",  stars: "★★★★☆", desc: "Smart Contracts, ERC Standards" },
  { name: "Supabase",    category: "DATABASE", level: "80%",  stars: "★★★★☆", desc: "PostgreSQL, Realtime, Edge Auth" },
];

const EXPERIENCE_LOGS = [
  {
    index: "LOG.01",
    period: "2024 – 2025",
    role: "Full-Stack Developer — Intern",
    entity: "Elecomp Indonesia",
    type: "ENTERPRISE CLIENTS",
    summary:
      "Developed and maintained full-stack production web applications for commercial clients, focusing on high-performance architecture with CodeIgniter 4 and optimized responsive UI.",
    highlights: [
      "Engineered 8+ production company profile websites maintaining Lighthouse performance scores > 90.",
      "Implemented Schema.org structured data hierarchy, yielding +25% measured organic search visibility.",
      "Structured technical documentation and conducted onboarding walkthroughs for junior engineering interns.",
    ],
  },
  {
    index: "LOG.02",
    period: "2024 – ONGOING",
    role: "Full-Stack Developer",
    entity: "Freelance & Personal Labs",
    type: "BESPOKE & INDEPENDENT",
    summary:
      "Architect and ship end-to-end web platforms, automated content engines, and SaaS prototypes leveraging Next.js, Laravel 11, and modern cloud databases.",
    highlights: [
      "Developed decoupled full-stack pipelines integrating LLM intelligence (Google Gemini API) with zero infrastructure cost.",
      "Designed modular UI component libraries adhering to technical editorial standards and atomic design principles.",
      "Integrated third-party APIs, role-based access control (RBAC), and transactional queues with enterprise rigor.",
    ],
  },
  {
    index: "LOG.03",
    period: "2025 – ONGOING",
    role: "Web3 & Solidity Explorer",
    entity: "Side Quests & Hackathons",
    type: "DECENTRALIZED PROTOCOLS",
    summary:
      "Prototyping on-chain verification systems, ERC-721 token provenance architectures, and wallet connectivity pipelines.",
    highlights: [
      "Authored audited Solidity smart contracts adhering to OWASP security standards for BatikChain (National Finalist Infinity Hackathon OJK 2025).",
      "Integrated Ethers.js client states with Next.js frontends for zero-latency cryptographic transaction verification.",
    ],
  },
];

const TRANSMISSION_CHANNELS = [
  {
    name: "GITHUB",
    handle: "VinLvy",
    meta: "REPOSITORY // OSS_WORK",
    link: "https://github.com/VinLvy",
    desc: "Source code, protocol experiments, and production repositories.",
    icon: Github,
  },
  {
    name: "LINKEDIN",
    handle: "davinpfbrn",
    meta: "PROFESSIONAL // NETWORK",
    link: "https://www.linkedin.com/in/davinpfbrn/",
    desc: "Career milestones, credentials, and professional updates.",
    icon: Linkedin,
  },
  {
    name: "INSTAGRAM",
    handle: "@davin.fbrn",
    meta: "BEHIND_SCENES // MEDIA",
    link: "https://instagram.com/davin.fbrn",
    desc: "Daily technical pursuits, design snippets, and developer lifestyle.",
    icon: Instagram,
  },
  {
    name: "ELECTRONIC_MAIL",
    handle: "davinfibrian@gmail.com",
    meta: "DIRECT // ENCRYPTED",
    link: "mailto:davinfibrian@gmail.com",
    desc: "Direct communication for contracting, consulting, or project inquiries.",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════════════════
          HERO // 01 SPECIFICATION DOSSIER
          ══════════════════════════════════════════════════════════ */}
      <section className="relative px-4 sm:px-8 pt-12 pb-24 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto">
          
          {/* Metadata Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#222222] font-mono text-xs text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="text-[#00FF41]">&gt;</span>
              <span className="text-[#e5e2e1]">IDENTIFIER:</span>
              <span>DAVIN_PUTRA_FIBRIAN</span>
            </div>
            <div className="flex items-center gap-6">
              <span>LOC: <span className="text-[#e5e2e1]">EAST_JAVA_ID</span></span>
              <span>SPECIALTY: <span className="text-[#00FF41]">FULL_STACK {"//"} WEB3</span></span>
              <span className="hidden sm:inline">VERSION: <span className="text-[#e5e2e1]">2026.09</span></span>
            </div>
          </div>

          {/* Main Hero Layout: 12-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-start">
            
            {/* Left Column (8 cols): Typography & System Overview */}
            <div className="lg:col-span-8 space-y-8">
              <SectionLabel index={1} label="SYSTEM_IDENTITY" />

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#e5e2e1] leading-[1.05] uppercase">
                Crafting <span className="text-[#00FF41]">Digital</span> Excellence.
              </h1>

              <div className="space-y-4 max-w-2xl text-base sm:text-lg text-[#888888] leading-relaxed">
                <p>
                  I am a <strong className="text-[#e5e2e1] font-semibold">Full-Stack Engineer</strong> building 
                  robust web architectures, high-throughput APIs, and verifiable on-chain systems. 
                  My work is characterized by precision engineering, zero unnecessary decoration, and strict performance metrics.
                </p>
              </div>

              {/* Status Console Box */}
              <div className="p-4 sm:p-5 bg-[#0e0e0e] border border-[#222222] font-mono text-xs text-[#b9ccb2] space-y-2">
                <div className="flex items-center justify-between text-[#888888] border-b border-[#222222] pb-2">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={14} className="text-[#00FF41]" />
                    <span>SYSTEM_PROCESS_MONITOR</span>
                  </span>
                  <span className="text-[#00FF41]">STATUS: ACTIVE</span>
                </div>
                <div className="pt-1 text-[#e5e2e1] leading-relaxed">
                  <span className="text-[#00FF41]">&gt; CURRENT_FOCUS:</span>{" "}
                  &ldquo;Building security tooling for threat detection and real-time incident response.&rdquo;
                  <span className="cursor-blink" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/DavinPutraFibrian-Resume.pdf"
                  download
                  className="btn-terminal"
                >
                  <span>&gt; DOWNLOAD_RESUME</span>
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="https://github.com/VinLvy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-terminal"
                >
                  <Github size={14} />
                  <span>&gt; VIEW_GITHUB_REPOSITORIES</span>
                </Link>
              </div>
            </div>

            {/* Right Column (4 cols): Brutalist Avatar & Visual Spec */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-2 bg-[#1c1b1b] border border-[#222222]">
                <div className="relative aspect-square w-full bg-[#0e0e0e] border border-[#222222] overflow-hidden">
                  {/* Technical Crosshairs */}
                  <div className="absolute top-2 left-2 font-mono text-[10px] text-[#00FF41] z-10 select-none">[ + ]</div>
                  <div className="absolute top-2 right-2 font-mono text-[10px] text-[#00FF41] z-10 select-none">[ + ]</div>
                  <div className="absolute bottom-2 left-2 font-mono text-[10px] text-[#00FF41] z-10 select-none">[ + ]</div>
                  <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#00FF41] z-10 select-none">[ + ]</div>

                  <Image
                    src="/profile.png"
                    alt="Davin Putra Fibrian"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-3 bg-[#0e0e0e] mt-2 border border-[#222222] font-mono text-[11px] flex justify-between text-[#888888]">
                  <span>IMG_SPEC {"//"} 2026</span>
                  <span className="text-[#00FF41]">ID: DAVIN_P_F</span>
                </div>
              </div>
            </div>

          </div>

          {/* Key Metrics Data Grid (Strict Table) */}
          <div className="mt-16 pt-8 border-t border-[#222222] grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-[#222222]">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="p-6 border-r border-b border-[#222222] bg-[#181818]/40">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#e5e2e1]">
                  {metric.value}
                </div>
                <div className="mt-2 font-mono text-xs font-semibold text-[#00FF41]">
                  {metric.label}
                </div>
                <div className="mt-1 font-mono text-[11px] text-[#888888]">
                  {metric.note}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TECH STACK // 02 THE TOOLBOX SPECIFICATION
          ══════════════════════════════════════════════════════════ */}
      <section className="px-4 sm:px-8 py-24 border-b border-[#222222] bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222222]">
            <div>
              <SectionLabel index={2} label="THE_TOOLBOX" className="mb-3" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e5e2e1] uppercase">
                Frameworks, Protocols &amp; Runtimes.
              </h2>
            </div>
            <Link
              href="/about"
              className="font-mono text-xs text-[#00FF41] hover:underline flex items-center gap-1"
            >
              <span>&gt; EXPAND_FULL_SKILL_MATRIX</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Technical Spec Matrix (10-Item Structured Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {TECH_TOOLBOX.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-[#1c1b1b] border border-[#222222] hover:border-[#00FF41]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#888888] pb-2 border-b border-[#222222]">
                    <span>[{item.category}]</span>
                    <span className="text-[#00FF41]">{item.level}</span>
                  </div>
                  <div className="mt-3 text-lg font-bold text-[#e5e2e1]">
                    {item.name}
                  </div>
                  <p className="mt-1 font-mono text-xs text-[#888888]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[#555555]">RATING:</span>
                  <span className="text-[#00FF41]">{item.stars}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EXPERIENCE // 03 DEPLOYMENT LOGS
          ══════════════════════════════════════════════════════════ */}
      <section className="px-4 sm:px-8 py-24 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="pb-6 border-b border-[#222222]">
            <SectionLabel index={3} label="DEPLOYMENT_LOGS" className="mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e5e2e1] uppercase">
              Verified Production History.
            </h2>
            <p className="mt-2 text-[#888888] font-mono text-xs max-w-xl">
              Chronological log of commercial engagements, client deployments, and engineering milestones.
            </p>
          </div>

          {/* Editorial Data Grid Layout */}
          <div className="space-y-6">
            {EXPERIENCE_LOGS.map((log) => (
              <div
                key={log.index}
                className="p-6 sm:p-8 bg-[#1c1b1b] border border-[#222222] hover:border-[#353534] transition-all grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Column 1: Index & Period (3 cols) */}
                <div className="lg:col-span-3 space-y-2 border-b lg:border-b-0 lg:border-r border-[#222222] pb-4 lg:pb-0 lg:pr-4 font-mono">
                  <span className="inline-block px-2 py-1 bg-[#0e0e0e] border border-[#222222] text-[#00FF41] text-xs font-bold">
                    {log.index}
                  </span>
                  <div className="text-xs text-[#888888] pt-1">
                    PERIOD: <span className="text-[#e5e2e1]">{log.period}</span>
                  </div>
                  <div className="text-[11px] text-[#555555]">
                    CLASS: {log.type}
                  </div>
                </div>

                {/* Column 2: Role, Entity & Deliverables (9 cols) */}
                <div className="lg:col-span-9 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#e5e2e1]">
                      {log.role}
                    </h3>
                    <p className="font-mono text-sm text-[#00FF41] mt-0.5">
                      @ {log.entity}
                    </p>
                  </div>

                  <p className="text-sm text-[#888888] leading-relaxed">
                    {log.summary}
                  </p>

                  <div className="pt-2 border-t border-[#222222] space-y-2">
                    <div className="font-mono text-xs text-[#e5e2e1] uppercase">
                      [ KEY_DELIVERABLES_AND_METRICS ]:
                    </div>
                    <ul className="space-y-1.5 font-mono text-xs text-[#888888]">
                      {log.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#00FF41] shrink-0">&gt;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONNECT // 04 TRANSMISSION CHANNELS
          ══════════════════════════════════════════════════════════ */}
      <section className="px-4 sm:px-8 py-24 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="pb-6 border-b border-[#222222]">
            <SectionLabel index={4} label="TRANSMISSION_CHANNELS" className="mb-3" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e5e2e1] uppercase">
              Establish Communication.
            </h2>
            <p className="mt-2 text-[#888888] font-mono text-xs max-w-xl">
              Initiate technical dialogue, discuss contract opportunities, or review repository implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRANSMISSION_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <Link
                  key={channel.name}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-[#1c1b1b] border border-[#222222] hover:border-[#00FF41] hover:bg-[#201f1f] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#888888]">
                      <span>{channel.meta}</span>
                      <Icon size={16} className="text-[#888888] group-hover:text-[#00FF41] transition-colors" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#e5e2e1] group-hover:text-[#00FF41] transition-colors">
                        {channel.name}
                      </div>
                      <div className="font-mono text-xs text-[#00FF41] mt-0.5">
                        {channel.handle}
                      </div>
                    </div>
                    <p className="font-mono text-xs text-[#888888] leading-relaxed">
                      {channel.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#222222] font-mono text-[11px] text-[#888888] group-hover:text-[#e5e2e1] flex items-center justify-between">
                    <span>CONNECT</span>
                    <ArrowUpRight size={13} className="text-[#00FF41]" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER // SYSTEM METADATA
          ══════════════════════════════════════════════════════════ */}
      <footer className="px-4 sm:px-8 py-8 border-t border-[#222222] bg-[#131313] font-mono text-xs text-[#888888]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} DAVIN PUTRA FIBRIAN {"//"} ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>DESIGN: <span className="text-[#e5e2e1]">OBSIDIAN_TERMINAL_v2.6</span></span>
            <span className="text-[#555555]">|</span>
            <span>STACK: <span className="text-[#00FF41]">NEXT.JS 15 {"//"} TAILWIND</span></span>
          </div>
        </div>
      </footer>

    </div>
  );
}