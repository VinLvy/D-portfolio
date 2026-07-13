"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy, Zap, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import SectionLabel from "../../components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden:  { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

const stagger = (delay = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: delay } },
});

/* ─────────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────────── */
const projects = [
  {
    title:       "BatikChain",
    subtitle:    "Blockchain Product Authentication Platform",
    period:      "Oct 2025 – Dec 2025",
    description:
      "A decentralized product authentication platform on the Ethereum blockchain targeting Indonesia's artisan batik industry. Artisans can register products with immutable on-chain provenance, while consumers verify authenticity via QR code in real-time.",
    impact: [
      { icon: Trophy,      label: "Infinity Hackathon OJK 2025",  value: "National Finalist",  color: "#fbbf24" },
      { icon: Star,        label: "Smart Contracts Audited",       value: "OWASP Compliant",    color: "#34d399" },
      { icon: Users,       label: "Team Role",                     value: "Blockchain Lead",    color: "#a78bfa" },
    ],
    highlights: [
      "Architected & deployed ERC-721 Solidity smart contracts with immutable on-chain metadata & provenance tracking",
      "Built React / Next.js frontend integrated with Ethers.js for real-time contract interaction",
      "Enforced Ownable access control & validated against reentrancy and integer overflow vectors per OWASP",
    ],
    tech:        ["Solidity", "ERC-721", "Ethereum", "Next.js", "React", "Ethers.js", "OpenZeppelin"],
    link:        "https://github.com/VinLvy/BatikChain",
    images:      ["/images/project6.png", "/images/project6b.png"],
    accent:      "rgba(251,191,36,0.08)",
    glow:        "rgba(251,191,36,0.12)",
    badgeColor:  "rgba(251,191,36,0.10)",
    badgeBorder: "rgba(251,191,36,0.25)",
    badgeText:   "#fcd34d",
    topLine:     "linear-gradient(90deg, transparent, rgba(251,191,36,0.5), transparent)",
  },
  {
    title:       "ReLife RPG",
    subtitle:    "AI-Powered Gamified Life Tracker",
    period:      "Jan 2026 – Mar 2026",
    description:
      "A full-stack gamified life-tracking app where users log daily journal entries analyzed in real-time by Google Gemini 2.5 Flash AI. The LLM parses natural language into typed stat-delta objects that power a real-time leveling engine with 6 RPG attributes.",
    impact: [
      { icon: Zap,         label: "AI Engine",        value: "Gemini 2.5 Flash",  color: "#60a5fa" },
      { icon: TrendingUp,  label: "RPG Attributes",   value: "6 Live Stats",      color: "#a78bfa" },
      { icon: Star,        label: "Architecture",     value: "Zero-latency LLM",  color: "#f472b6" },
    ],
    highlights: [
      "Engineered a structured LLM prompt pipeline (gemini.ts) parsing unstructured text into typed stat-delta objects",
      "Implemented Supabase JWT auth with auto-session-timeout and a Framer Motion + Recharts live Radar Chart UI",
      "Glassmorphism theming with real-time leveling engine, class & title unlock logic across 6 RPG attributes",
    ],
    tech:        ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Google Gemini API", "Framer Motion", "Recharts"],
    link:        "https://github.com/VinLvy/Prototype-7",
    images:      ["/images/project5.png", "/images/project5b.png"],
    accent:      "rgba(99,102,241,0.08)",
    glow:        "rgba(99,102,241,0.12)",
    badgeColor:  "rgba(99,102,241,0.10)",
    badgeBorder: "rgba(99,102,241,0.25)",
    badgeText:   "#a5b4fc",
    topLine:     "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
  },
  {
    title:       "AntiFlow",
    subtitle:    "AI Content Automation Engine",
    period:      "Jul 2025 – Sep 2025",
    description:
      "A zero-cost AI content automation engine that produces complete YouTube video asset kits scripts, visual prompts, and voiceovers from a single topic input, using a decoupled Next.js + FastAPI architecture for independent pipeline scaling.",
    impact: [
      { icon: Zap,        label: "Infrastructure Cost",  value: "$0 / month",        color: "#34d399" },
      { icon: TrendingUp, label: "Assets per Topic",     value: "Scripts + Voiceover",color: "#22d3ee" },
      { icon: Star,       label: "AI Models",            value: "Gemini + Edge TTS", color: "#a78bfa" },
    ],
    highlights: [
      "Architected decoupled backend with isolated AI logic and file management for independent pipeline scaling",
      "Integrated Google Gemini 2.5 Flash for structured LLM scriptwriting and Microsoft Edge TTS for narration",
      "Eliminated all production infrastructure costs by engineering the full pipeline exclusively on free-tier APIs",
    ],
    tech:        ["Next.js", "TypeScript", "FastAPI", "Python", "Google Gemini API", "Edge TTS", "REST API"],
    link:        "https://github.com/VinLvy/AntiFlow",
    images:      ["/images/project4.png", "/images/project4b.png"],
    accent:      "rgba(34,211,238,0.07)",
    glow:        "rgba(34,211,238,0.10)",
    badgeColor:  "rgba(34,211,238,0.08)",
    badgeBorder: "rgba(34,211,238,0.22)",
    badgeText:   "#67e8f9",
    topLine:     "linear-gradient(90deg, transparent, rgba(34,211,238,0.45), transparent)",
  },
  {
    title:       "Point of Sales System",
    subtitle:    "Full-Stack Business Operations Platform",
    period:      "Jan 2025 – Feb 2025",
    description:
      "A production-grade full-stack POS system in Laravel 11 with real-time inventory tracking, automated PDF/CSV report generation via Laravel Queues, and role-based authentication integrated with third-party POS hardware.",
    impact: [
      { icon: TrendingUp, label: "Staff Workload Reduced",  value: "↓ 40%",           color: "#34d399" },
      { icon: Zap,        label: "Report Generation",       value: "Automated PDF/CSV",color: "#60a5fa" },
      { icon: Star,       label: "Auth System",             value: "Role-Based (Spatie)",color: "#a78bfa" },
    ],
    highlights: [
      "Engineered automated PDF/CSV report generation via Laravel Queues, cutting accounting reconciliation by 40%",
      "Designed real-time inventory tracking across multiple product categories with audit trails",
      "Implemented Spatie Permissions RBAC and a RESTful API layer for third-party POS hardware integration",
    ],
    tech:        ["Laravel 11", "PHP", "MySQL", "REST API", "Spatie Permissions", "Laravel Queues"],
    link:        "https://github.com/VinLvy/Point-of-Saless",
    images:      ["/images/project2.png", "/images/project2b.png"],
    accent:      "rgba(168,85,247,0.08)",
    glow:        "rgba(168,85,247,0.12)",
    badgeColor:  "rgba(168,85,247,0.10)",
    badgeBorder: "rgba(168,85,247,0.25)",
    badgeText:   "#d8b4fe",
    topLine:     "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
  },
  {
    title:       "Company Profile Websites",
    subtitle:    "8× Production Client Deployments",
    period:      "Jul 2024 – Dec 2024",
    description:
      "Delivered 8 production company profile websites using CodeIgniter 4 and MySQL, each with custom responsive layouts, lazy-loaded media, and Schema.org structured data. Consistently maintained Lighthouse scores above 90 and achieved measurable SEO gains.",
    impact: [
      { icon: TrendingUp, label: "Organic Search Visibility", value: "+25%",        color: "#34d399" },
      { icon: Star,       label: "Lighthouse Score",          value: "90+ All Sites",color: "#fbbf24" },
      { icon: Users,      label: "Sites Delivered",           value: "8 Clients",   color: "#60a5fa" },
    ],
    highlights: [
      "Maintained Lighthouse scores above 90 through image optimization, minified assets & server-side caching",
      "Implemented Schema.org structured data driving a 25% increase in organic search visibility",
      "Conducted technical onboarding for interns with codebase walkthroughs and end-to-end cPanel deployment",
    ],
    tech:        ["CodeIgniter 4", "PHP", "MySQL", "Schema.org", "SEO", "Responsive Design"],
    link:        "https://github.com/VinLvy/Web-Competent",
    images:      ["/images/project3.png", "/images/project3b.png"],
    accent:      "rgba(236,72,153,0.07)",
    glow:        "rgba(236,72,153,0.10)",
    badgeColor:  "rgba(236,72,153,0.08)",
    badgeBorder: "rgba(236,72,153,0.22)",
    badgeText:   "#f9a8d4",
    topLine:     "linear-gradient(90deg, transparent, rgba(236,72,153,0.45), transparent)",
  },
  {
    title:       "Landing Page",
    subtitle:    "Landing Page For A Technology Company",
    period:      "March 2025 – May 2025",
    description:
      "A modern, high-performance landing page for a technology company, featuring a sleek, glassmorphic design with smooth scrolling, micro-interactions, and a full-responsive layout for seamless desktop and mobile experiences.",
    impact: [
      { icon: TrendingUp, label: "Performance",   value: "98.6",  color: "#34d399" },
      { icon: Star,       label: "Accessibility", value: "100",   color: "#fbbf24" },
      { icon: Users,      label: "SEO",           value: "100",   color: "#60a5fa" },
    ],
    highlights: [
      "Achieved a performance score of 98.6 and 100% on accessibility through optimized assets and ARIA-compliant markup",
      "Implemented a custom, high-performance animation system with Lottie micro-interactions and smooth scrolling effects",
      "Engineered a modular, component-based layout using Figma specifications for seamless desktop and mobile experiences",
    ],
    tech:        ["Next.js", "JavaScript", "Tailwind CSS", "Lottie", "Figma", "Responsive Design"],
    link:        "https://github.com/VinLvy/landing-page",
    images:      ["/images/project1.png", "/images/project1b.png"],
    accent:      "rgba(99,102,241,0.07)",
    glow:        "rgba(59,130,246,0.10)",
    badgeColor:  "rgba(59,130,246,0.08)",
    badgeBorder: "rgba(59,130,246,0.22)",
    badgeText:   "#93c5fd",
    topLine:     "linear-gradient(90deg, transparent, rgba(59,130,246,0.45), transparent)",
  },
];

/* ─────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <div className="min-h-screen">

      {/* ── Page Header ────────────────────────────────────── */}
      <section
        className="relative px-6 pt-28 pb-20 text-center lg:px-16"
        aria-label="Projects header"
      >
        {/* Header glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(99,102,241,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <SectionLabel index={1} label="Featured Projects" className="mb-6 justify-center" />

          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="font-black tracking-tight text-gradient-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.0 }}
            >
              Things I&apos;ve<br />
              <span className="text-gradient-blue">Built & Shipped.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base"
              style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
            >
              Production-grade projects spanning blockchain, AI automation, and full-stack web apps
              each built to solve real problems and measured by real impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Project Cards ───────────────────────────────────── */}
      <section
        className="px-6 py-8 lg:px-16"
        aria-label="Project list"
      >
        <div className="mx-auto max-w-7xl flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease, delay: 0 }}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500"
              style={{
                background:  `linear-gradient(135deg, ${project.accent}, rgba(12,16,24,0.9))`,
                border:      "1px solid rgba(255,255,255,0.07)",
                boxShadow:   "0 4px 32px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 48px rgba(0,0,0,0.5), 0 0 60px ${project.glow}`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 32px rgba(0,0,0,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top shimmer line (on hover via CSS, already defined in globals) */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{ background: project.topLine }}
              />

              {/* Inner layout: alternating image/content */}
              <div
                className={`relative flex flex-col gap-0 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Images column */}
                <div className="relative w-full flex-shrink-0 flex flex-col items-center justify-center gap-5 p-7 lg:w-[45%] lg:p-10">
                  {/* Glow behind images */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-l-3xl"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.glow} 0%, transparent 70%)` }}
                  />
                  {project.images?.map((imgSrc, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={imgSrc}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      width={800}
                      height={500}
                      className="relative z-10 w-full h-auto object-contain transition-all duration-500 group-hover:scale-[1.03]"
                      style={{
                        borderRadius: "12px",
                        boxShadow:    "0 0 40px rgba(0,0,0,0.5)",
                        border:       "1px solid rgba(255,255,255,0.08)",
                      }}
                      sizes="(max-width: 1024px) 90vw, 44vw"
                    />
                  ))}
                </div>

                {/* Content column */}
                <div className="relative flex flex-col justify-between p-7 lg:w-[55%] lg:p-10">
                  {/* Period */}
                  <div>
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium mb-4"
                      style={{
                        background:  "rgba(255,255,255,0.05)",
                        border:      "1px solid rgba(255,255,255,0.10)",
                        color:       "var(--text-muted)",
                        fontFamily:  "var(--font-mono, monospace)",
                      }}
                    >
                      {project.period}
                    </span>

                    {/* Title */}
                    <h2
                      className="font-black tracking-tight text-white leading-tight"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                    >
                      {project.title}
                    </h2>
                    <p
                      className="mt-1.5 text-sm font-medium"
                      style={{ color: project.badgeText }}
                    >
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p
                      className="mt-4 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
                    >
                      {project.description}
                    </p>

                    {/* Impact metrics */}
                    <div className="mt-6 grid grid-cols-3 gap-3" role="list" aria-label="Project metrics">
                      {project.impact.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl p-3 text-center"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border:     "1px solid rgba(255,255,255,0.08)",
                          }}
                          role="listitem"
                        >
                          <item.icon size={13} className="mx-auto mb-1.5" style={{ color: item.color }} aria-hidden="true" />
                          <p className="text-sm font-bold leading-tight" style={{ color: item.color }}>
                            {item.value}
                          </p>
                          <p className="text-[10px] mt-0.5 leading-tight" style={{ color: "var(--text-subtle)" }}>
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-2" aria-label="Project highlights">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-xs leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ background: project.badgeText }}
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="mt-5 flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full px-2.5 py-1 text-xs font-medium"
                          style={{
                            background: project.badgeColor,
                            border:     `1px solid ${project.badgeBorder}`,
                            color:      project.badgeText,
                          }}
                          role="listitem"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-7 flex items-center gap-3">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:brightness-110"
                      style={{
                        background:  `linear-gradient(135deg, ${project.badgeBorder}, rgba(99,102,241,0.3))`,
                        border:      `1px solid ${project.badgeBorder}`,
                        boxShadow:   `0 0 20px ${project.glow}`,
                      }}
                    >
                      <Github size={14} aria-hidden="true" />
                      View on GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Footer CTA ──────────────────────────────────────── */}
      <section
        className="relative px-6 py-32 lg:px-16 text-center"
        aria-label="More projects"
      >
        {/* Center glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-block text-[11px] font-semibold uppercase tracking-widest mb-6"
                style={{ fontFamily: "var(--font-mono,monospace)", color: "var(--text-subtle)" }}
              >
                And more to come
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-black tracking-tight text-gradient-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              More Projects<br />
              <span className="text-gradient-blue">Coming Soon.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-md text-base"
              style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
            >
              I&apos;m constantly learning, building, and exploring new technologies.
              Stay tuned for exciting projects pushing the boundaries of modern web development and beyond.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4">
              <Link
                href="https://github.com/VinLvy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.04]"
                style={{
                  background:  "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(99,102,241,0.13))",
                  border:      "1px solid rgba(99,102,241,0.3)",
                  color:       "#a5b4fc",
                  boxShadow:   "0 0 24px rgba(99,102,241,0.12)",
                }}
              >
                <Github size={15} aria-hidden="true" />
                Follow on GitHub
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-10 lg:px-16"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Davin P F. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--text-subtle)", fontFamily: "var(--font-mono,monospace)" }}
          >
            Built with Next.js & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}