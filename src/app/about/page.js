"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { 
  Download, 
  ExternalLink
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   DATA SPECIFICATIONS
   ───────────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { href: "#about",      index: "01", label: "DOSSIER"      },
  { href: "#skills",     index: "02", label: "SKILL_MATRIX" },
  { href: "#experience", index: "03", label: "CAREER_LOGS"  },
  { href: "#education",  index: "04", label: "ACADEMICS"    },
  { href: "#interests",  index: "05", label: "FOCUS_AREAS"  },
];

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "FRONTEND_SYSTEMS",
    skills: [
      { name: "React",       pct: 100, bar: "██████████", note: "Component Architecture" },
      { name: "Next.js",     pct: 100, bar: "██████████", note: "App Router & SSR" },
      { name: "TypeScript",  pct: 100, bar: "██████████", note: "Strict Type Safety" },
      { name: "JavaScript",  pct: 100, bar: "██████████", note: "ESNext / Web APIs" },
      { name: "Tailwind CSS",pct: 100, bar: "██████████", note: "Design Tokens & Grid" },
      { name: "Vite",        pct: 80,  bar: "████████░░", note: "Build Optimization" },
      { name: "HTML5 / CSS3",pct: 100, bar: "██████████", note: "Semantic Structure" },
    ],
  },
  {
    id: "backend",
    label: "BACKEND_SERVICES",
    skills: [
      { name: "PHP",          pct: 100, bar: "██████████", note: "Modern OOP Core" },
      { name: "Laravel",      pct: 100, bar: "██████████", note: "Queues & Eloquent" },
      { name: "CodeIgniter",  pct: 100, bar: "██████████", note: "CI4 MVC Architecture" },
      { name: "Node.js",      pct: 80,  bar: "████████░░", note: "Runtime Async I/O" },
      { name: "Express",      pct: 80,  bar: "████████░░", note: "RESTful Endpoints" },
      { name: "Golang",       pct: 80,  bar: "████████░░", note: "Concurrent Services" },
      { name: "Python",       pct: 80,  bar: "████████░░", note: "Automation & LLMs" },
      { name: "FastAPI",      pct: 80,  bar: "████████░░", note: "Async Python APIs" },
    ],
  },
  {
    id: "database",
    label: "DATABASE_AND_STORAGE",
    skills: [
      { name: "MySQL",       pct: 100, bar: "██████████", note: "Relational Indexing" },
      { name: "PostgreSQL",  pct: 80,  bar: "████████░░", note: "Relational Schemas" },
      { name: "Supabase",    pct: 80,  bar: "████████░░", note: "Postgres / Auth / Edge" },
      { name: "MongoDB",     pct: 80,  bar: "████████░░", note: "Document Store" },
    ],
  },
  {
    id: "tools",
    label: "ENGINEERING_TOOLING",
    skills: [
      { name: "GitHub / Git",pct: 100, bar: "██████████", note: "Version Control & CI" },
      { name: "VS Code",     pct: 100, bar: "██████████", note: "Dev Environment" },
      { name: "Figma",       pct: 80,  bar: "████████░░", note: "UI / Spec Hand-off" },
      { name: "Gemini AI API",pct: 100,bar: "██████████", note: "LLM Pipeline Integration" },
    ],
  },
  {
    id: "web3",
    label: "DECENTRALIZED_PROTOCOLS",
    skills: [
      { name: "Solidity",    pct: 80,  bar: "████████░░", note: "ERC-721 / Smart Contracts" },
    ],
  },
];

const EXPERIENCE_RECORDS = [
  {
    title: "Full-Stack Developer — Intern",
    company: "Elecomp Indonesia",
    period: "2024 – 2025",
    type: "COMMERCIAL ENGAGEMENT",
    desc: "Developed and maintained full-stack web applications using modern development practices. Specialized in building responsive company profile websites utilizing CodeIgniter 4 with a focus on intuitive user interfaces, fast server-side execution, and Schema.org SEO compliance.",
    metrics: ["8+ Client Sites Deployed", "Lighthouse 90+ Score Across All Sites", "+25% Organic Search Visibility"],
  },
];

const EDUCATION_RECORDS = [
  {
    school: "Universitas Bhinneka PGRI",
    major: "Informatics Engineering",
    period: "2025 – Present",
    desc: "Pursuing a Bachelor's degree in Informatics Engineering, focusing on advanced software development, algorithm optimization, and systems architecture.",
  },
  {
    school: "SMKN 1 Boyolangu",
    major: "Software Engineering (Rekayasa Perangkat Lunak)",
    period: "2022 – 2025",
    desc: "Comprehensive engineering curriculum covering software architecture, relational database management, algorithm complexity, dynamic web development, and team-based application lifecycle management.",
  },
];

const FOCUS_INTERESTS = [
  "UI/UX Design Architecture",
  "Open-Source Software",
  "Blockchain & Web3 Protocols",
  "LLM & AI Applications",
  "Cryptographic Verification",
  "Game Mechanics & Systems",
  "Cross-Culture Travel",
];

export default function About() {
  const [activeSection, setActiveSection] = useState("about");
  const isProgrammaticScroll = useRef(false);
  const timeoutId = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("[data-scroll]");
      if (!target) return;
      e.preventDefault();
      const id = target.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      if (section) {
        isProgrammaticScroll.current = true;
        if (timeoutId.current) clearTimeout(timeoutId.current);
        setActiveSection(id);
        window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
        timeoutId.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 800);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.1, rootMargin: "-80px 0px -50% 0px" }
    );
    TOC_ITEMS.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen">
      
      {/* ── Dossier Header ───────────────────────────────────── */}
      <section className="px-4 sm:px-8 pt-12 pb-16 border-b border-[#222222] bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            
            {/* Avatar with crosshairs */}
            <div className="flex items-center gap-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-[#1c1b1b] border border-[#222222] p-1.5 shrink-0">
                <div className="relative w-full h-full bg-[#000000] border border-[#222222] overflow-hidden">
                  <div className="absolute top-1 left-1 font-mono text-[8px] text-[#00FF41] z-10">[+]</div>
                  <div className="absolute top-1 right-1 font-mono text-[8px] text-[#00FF41] z-10">[+]</div>
                  <div className="absolute bottom-1 left-1 font-mono text-[8px] text-[#00FF41] z-10">[+]</div>
                  <div className="absolute bottom-1 right-1 font-mono text-[8px] text-[#00FF41] z-10">[+]</div>
                  <Image
                    src="/profile.png"
                    alt="Davin Putra Fibrian"
                    fill
                    sizes="144px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs text-[#00FF41]">
                  [ PERSONNEL_DOSSIER {"//"} 02 ]
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#e5e2e1] uppercase tracking-tight">
                  Davin Putra Fibrian
                </h1>
                <p className="font-mono text-xs sm:text-sm text-[#888888]">
                  FULL-STACK ENGINEER &amp; SYSTEMS BUILDER
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[#888888] pt-1">
                  <span>LOC: <strong className="text-[#e5e2e1]">East Java, Indonesia</strong></span>
                  <span>|</span>
                  <span>BORN: <strong className="text-[#e5e2e1]">31 May 2006</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <Link
                href="/DavinPutraFibrian-Resume.pdf"
                download
                className="btn-terminal"
              >
                <span>&gt; DOWNLOAD_RESUME</span>
                <Download size={14} />
              </Link>
              <Link
                href="https://github.com/VinLvy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-terminal"
              >
                <ExternalLink size={14} />
                <span>&gt; GITHUB_PROFILE</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ── Main Two-Column Layout with Sticky Monospace TOC ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:block w-60 shrink-0 sticky top-24 border border-[#222222] bg-[#1c1b1b] p-4 font-mono text-xs">
          <div className="text-[10px] text-[#555555] pb-2 mb-3 border-b border-[#222222] uppercase tracking-wider">
            [ NAVIGATION_INDEX ]
          </div>
          <nav className="space-y-1">
            {TOC_ITEMS.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-scroll
                  className={`block px-3 py-2 border transition-all ${
                    active
                      ? "bg-[#0e0e0e] text-[#00FF41] border-[#00FF41]/50 font-bold"
                      : "text-[#888888] border-transparent hover:text-[#e5e2e1] hover:bg-[#0e0e0e]/50"
                  }`}
                >
                  <span className="text-[#555555] mr-1.5">{item.index} {"//"}</span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-3 border-t border-[#222222] text-[10px] text-[#888888]">
            <div>SYS_STATE: <span className="text-[#00FF41]">NOMINAL</span></div>
            <div>VER: <span className="text-[#e5e2e1]">OBSIDIAN_2.6</span></div>
          </div>
        </aside>

        {/* Content Stream */}
        <div className="flex-1 min-w-0 space-y-24">
          
          {/* ── 01. DOSSIER // ABOUT ME ──────────────────────── */}
          <section id="about" className="space-y-6">
            <SectionLabel index={1} label="ENGINEERING_PHILOSOPHY" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#e5e2e1] tracking-tight uppercase">
              Building at the intersection of performance &amp; discipline.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#888888] leading-relaxed max-w-3xl">
              <p>
                I am a <strong className="text-[#e5e2e1]">Full-Stack Developer</strong> with an uncompromising 
                focus on clean code architecture, pragmatic API design, and performance-driven software delivery. 
                My technical foundation encompasses both enterprise backend frameworks (PHP, Laravel, CodeIgniter) 
                and modern reactive frontend ecosystems (React, Next.js, TypeScript).
              </p>
              <p>
                I actively investigate decentralized infrastructure and emerging Web3 protocols, focusing on 
                cryptographic integrity, smart contract verification in Solidity, and zero-latency UI state synchronization. 
                I treat software as a precision discipline where reliability, execution speed, and structural clarity always take precedence over superficial trends.
              </p>
              <p>
                Whether building customer-facing web applications or orchestrating automated multi-tier backends, 
                I deliver maintainable codebases accompanied by comprehensive schemas and measurable real-world metrics.
              </p>
            </div>
          </section>

          {/* ── 02. SKILL MATRIX ─────────────────────────────── */}
          <section id="skills" className="space-y-8">
            <div className="pb-4 border-b border-[#222222]">
              <SectionLabel index={2} label="TECHNICAL_COMPETENCIES" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#e5e2e1] uppercase">
                Skill Matrix &amp; Technology Standards.
              </h2>
            </div>

            <div className="space-y-8">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00FF41]">
                    <span>&gt;</span>
                    <span>{category.label}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 bg-[#1c1b1b] border border-[#222222] hover:border-[#353534] transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-[#e5e2e1] font-bold">
                          <span>{skill.name}</span>
                          <span className="text-[#00FF41]">{skill.pct}%</span>
                        </div>
                        <div className="text-[10px] text-[#00FF41] tracking-widest">
                          {skill.bar}
                        </div>
                        <div className="text-[11px] text-[#888888]">
                          {skill.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 03. CAREER LOGS ──────────────────────────────── */}
          <section id="experience" className="space-y-6">
            <div className="pb-4 border-b border-[#222222]">
              <SectionLabel index={3} label="PRODUCTION_EXPERIENCE" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#e5e2e1] uppercase">
                Career History.
              </h2>
            </div>

            <div className="space-y-4">
              {EXPERIENCE_RECORDS.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-[#1c1b1b] border border-[#222222] space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222222] pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#e5e2e1]">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-[#00FF41]">
                        @ {item.company}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-[#888888]">
                      PERIOD: <span className="text-[#e5e2e1]">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#888888] leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 border-t border-[#222222] flex flex-wrap gap-2 font-mono text-xs">
                    {item.metrics.map((m) => (
                      <span key={m} className="px-2.5 py-1 bg-[#0e0e0e] border border-[#222222] text-[#00FF41]">
                        [ {m} ]
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 04. ACADEMICS ────────────────────────────────── */}
          <section id="education" className="space-y-6">
            <div className="pb-4 border-b border-[#222222]">
              <SectionLabel index={4} label="ACADEMIC_FOUNDATION" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#e5e2e1] uppercase">
                Formal Education.
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION_RECORDS.map((item) => (
                <div
                  key={item.school}
                  className="p-6 bg-[#1c1b1b] border border-[#222222] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222222] pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#e5e2e1]">
                        {item.school}
                      </h3>
                      <p className="font-mono text-xs text-[#00FF41]">
                        MAJOR: {item.major}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-[#888888]">
                      TIMELINE: <span className="text-[#e5e2e1]">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#888888] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 05. FOCUS AREAS & INTERESTS ──────────────────── */}
          <section id="interests" className="space-y-6">
            <div className="pb-4 border-b border-[#222222]">
              <SectionLabel index={5} label="FOCUS_DOMAINS" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#e5e2e1] uppercase">
                Technical Focus &amp; Interests.
              </h2>
            </div>

            <p className="text-sm text-[#888888] leading-relaxed max-w-2xl">
              Beyond commercial engineering, I maintain active research and experimentation in next-generation web platforms, 
              cryptography, autonomous pipelines, and interactive digital interfaces.
            </p>

            <div className="flex flex-wrap gap-2.5 font-mono text-xs">
              {FOCUS_INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 bg-[#1c1b1b] border border-[#222222] text-[#e5e2e1] hover:border-[#00FF41] hover:text-[#00FF41] transition-colors"
                >
                  # {interest}
                </span>
              ))}
            </div>
          </section>

        </div>

      </div>

      {/* Footer */}
      <footer className="px-4 sm:px-8 py-8 border-t border-[#222222] bg-[#131313] font-mono text-xs text-[#888888]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} DAVIN PUTRA FIBRIAN {"//"} SYSTEM SPEC: OBSIDIAN_TERMINAL
          </div>
          <div>
            STATUS: <span className="text-[#00FF41]">OPEN_TO_OPPORTUNITIES</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
