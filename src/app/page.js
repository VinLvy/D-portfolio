"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Github, Instagram, Linkedin, Mail, Zap, ArrowDown, ExternalLink } from "lucide-react";
import OrbitingIcon from "../components/OrbitingIcon";
import SpotlightCard from "../components/SpotlightCard";
import SectionLabel from "../components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS — choreographed at section level
   ───────────────────────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden:  { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

const staggerContainer = (delay = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: delay } },
});

/* ─────────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────────── */
const heroStats = [
  { label: "Projects Delivered", value: "20+" },
  { label: "Tech Stack",         value: "15+"  },
  { label: "Full Stack",         value: "Dev"  },
];

const experienceTimeline = [
  {
    title:    "Full-Stack Developer — Intern",
    company:  "Elecomp Indonesia",
    period:   "2024 – 2025",
    summary:
      "Developed and maintained full-stack web applications for clients, specializing in company profile sites with CodeIgniter 4. Collaborated with cross-functional teams on scalable features.",
    highlights: [
      "Built 8+ production company profile websites with Lighthouse scores above 90.",
      "Implemented Schema.org structured data, achieving +25% organic search visibility.",
      "Conducted technical onboarding for interns with end-to-end cPanel deployment walkthroughs.",
    ],
  },
  {
    title:    "Full-Stack Developer",
    company:  "Freelance & Personal Labs",
    period:   "Ongoing",
    summary:
      "Build bespoke dashboards, company profiles, and experimental Web3 tools with modern stacks like Next.js & Laravel.",
    highlights: [
      "Design end-to-end product experiences from UI concepts to production-ready code.",
      "Integrate third-party APIs, payment gateways, and authentication with best practices.",
      "Ship maintainable codebases with reusable component systems and documentation.",
    ],
  },
  {
    title:    "Web3 & Solidity Explorer",
    company:  "Side Quests",
    period:   "Ongoing",
    summary:
      "Prototype on-chain utilities to understand real decentralized workflows and security implications.",
    highlights: [
      "Write Solidity smart contracts with Foundry/Hardhat testing.",
      "Experiment with wallet interactions, NFT drops, and DAO tooling.",
      "Educate teams about decentralized UX and onboarding flows.",
    ],
  },
];

const contactLinks = [
  {
    name:        "Instagram",
    link:        "https://instagram.com/davin.fbrn",
    icon:        <Instagram size={20} />,
    description: "Behind the scenes & daily snippets.",
    color:       "rgba(236,72,153,0.15)",
    border:      "rgba(236,72,153,0.25)",
  },
  {
    name:        "GitHub",
    link:        "https://github.com/VinLvy",
    icon:        <Github size={20} />,
    description: "Code experiments & OSS work.",
    color:       "rgba(255,255,255,0.05)",
    border:      "rgba(255,255,255,0.15)",
  },
  {
    name:        "LinkedIn",
    link:        "https://www.linkedin.com/in/davinpfbrn/",
    icon:        <Linkedin size={20} />,
    description: "Professional journey & updates.",
    color:       "rgba(59,130,246,0.15)",
    border:      "rgba(59,130,246,0.25)",
  },
  {
    name:        "Email",
    link:        "mailto:davinfibrian@gmail.com",
    icon:        <Mail size={20} />,
    description: "Let's talk about your next idea.",
    color:       "rgba(99,102,241,0.15)",
    border:      "rgba(99,102,241,0.25)",
  },
];

const techStack = [
  {
    name: "Next.js",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="36" height="36">
        <mask id="m0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#m0)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#ng0)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#ng1)" />
        </g>
        <defs>
          <linearGradient id="ng0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ng1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    stars: 5,
  },
  { name: "React",         icon: "/icons/react.png",       stars: 5 },
  { name: "JavaScript",   icon: "/icons/javascript.png",  stars: 5 },
  { name: "PHP",          icon: "/icons/php.svg",         stars: 5 },
  { name: "Laravel",      icon: "/icons/laravel.svg",     stars: 5 },
  { name: "MySQL",        icon: "/icons/mysql.svg",       stars: 5 },
  { name: "Python",       icon: "/icons/Python.svg",      stars: 4 },
  { name: "Golang",       icon: "/icons/golang.svg",      stars: 4 },
  { name: "Solidity",     icon: "/icons/Solidity.svg",    stars: 4 },
  { name: "Supabase",     icon: <Zap className="text-emerald-400" size={32} />, stars: 4 },
];

/* Proficiency mapping: 5 stars → 100%, 4 → 80%, 3 → 60% */
const STAR_TO_PCT = { 5: 100, 4: 80, 3: 60 };

/* ─────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ══════════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════════ */}
      <section
        className="relative flex min-h-screen items-center px-6 pt-28 pb-20 lg:px-16"
        aria-label="Hero"
      >
        {/* Section-specific hero glow (on top of BackgroundCanvas) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center gap-10">

          {/* ── Profile image + orbiting icons ─────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative flex shrink-0 justify-center mb-6"
            aria-hidden="true"
          >
            {/* Glow behind the image */}
            <div
              className="absolute rounded-full"
              style={{
                inset:      "-20px",
                background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
                filter:     "blur(24px)",
              }}
            />

            <Link href="/about" className="relative block" tabIndex={-1} aria-hidden="true">
              {/* Image frame */}
              <div
                className="relative overflow-hidden"
                style={{
                  width:        "220px",
                  height:       "220px",
                  borderRadius: "50%",
                  background:   "linear-gradient(145deg, rgba(99,102,241,0.2), rgba(7,9,15,0.5))",
                  padding:      "3px",
                  boxShadow:    "0 0 60px rgba(99,102,241,0.12), 0 40px 80px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="relative h-full w-full overflow-hidden"
                  style={{ borderRadius: "50%", background: "var(--surface)" }}
                >
                  <Image
                    src="/profile.png"
                    alt="Davin Putra Fibrian"
                    fill
                    sizes="220px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Orbiting tech icons */}
            <OrbitingIcon radius={140} angle={-25}><Code2 size={18} /></OrbitingIcon>
            <OrbitingIcon radius={165} angle={55}><Rocket size={18} /></OrbitingIcon>
            <OrbitingIcon radius={110} angle={245}><Sparkles size={18} /></OrbitingIcon>

            {/* Status floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease }}
              className="glass absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-2xl px-4 py-3 text-xs"
              style={{ minWidth: "220px", boxShadow: "0 20px 48px rgba(0,0,0,0.4)" }}
            >
              <p className="font-semibold text-white">Currently iterating:</p>
              <p className="mt-0.5 text-[10px]" style={{ color: "var(--text-muted)" }}>
                Web3 analytics dashboard with realtime data.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Copy ───────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.4)}
            initial="hidden"
            animate="visible"
            className="flex-grow w-full flex flex-col items-center"
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{
                  background:  "rgba(34,197,94,0.10)",
                  border:      "1px solid rgba(34,197,94,0.25)",
                  color:       "#86efac",
                  fontFamily:  "var(--font-mono, monospace)",
                  letterSpacing: "0.06em",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ background: "#4ade80" }}
                  aria-hidden="true"
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mt-7 flex flex-col items-center">
              <p
                className="text-xl sm:text-2xl font-bold tracking-tight mb-3"
                style={{ color: "rgba(255, 255, 255, 0.95)" }}
              >
                Hi, I'm{" "}
                <span className="text-gradient-blue font-extrabold">
                  Davin P F
                </span>
              </p>
              <h1
                className="font-black leading-[1.05] tracking-tight text-gradient-white text-center"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 4.8rem)" }}
              >
                Crafting <span className="text-gradient-blue">Digital</span> Excellence.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg text-center"
              style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
            >
              <span style={{ color: "#93c5fd", fontWeight: 600 }}>Full-Stack Developer</span>{" "}
              crafting high-impact apps with PHP, JavaScript, and modern Web3 stacks.
              I ship polished UIs, pragmatic APIs, and love blending motion with storytelling.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3 w-full">
              <Link
                href="/DavinPutraFibrian-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
                style={{
                  background:  "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  boxShadow:   "0 0 28px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <Rocket size={15} aria-hidden="true" />
                Download Resume
              </Link>
              <Link
                href="https://github.com/VinLvy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background:  "rgba(255,255,255,0.05)",
                  border:      "1px solid rgba(255,255,255,0.12)",
                  color:       "rgba(255,255,255,0.75)",
                }}
              >
                <Github size={15} aria-hidden="true" />
                View GitHub
                <ExternalLink size={12} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-0 w-full"
              role="list"
              aria-label="Key stats"
            >
              {heroStats.map((stat, i) => (
                <div key={stat.label} className="flex items-center mb-4" role="listitem">
                  {i > 0 && (
                    <div
                      className="mx-6 h-8 w-px shrink-0"
                      style={{ background: "var(--border-hover)" }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-center">
                    <p
                      className="text-3xl font-black leading-none text-white"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-1 text-xs font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "var(--text-subtle)" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} style={{ color: "var(--text-subtle)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TECH STACK
          ══════════════════════════════════════════════════════════ */}
      <section
        className="relative px-6 py-32 lg:px-16"
        aria-label="Tech Stack"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel index={2} label="Tech Stack" className="mb-5" />

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-gradient-white font-black tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              The Toolbox.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-base"
              style={{ color: "var(--text-muted)", lineHeight: "1.75" }}
            >
              Frameworks & tools I trust to bring performant, scalable experiences to life.
            </motion.p>
          </motion.div>

          {/* ── Infinite marquee ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="marquee-track relative mt-14 overflow-hidden"
            aria-hidden="true"
          >
            {/* Fade edges */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
              style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
              style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
            />

            <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="glass flex shrink-0 items-center gap-3 rounded-xl px-4 py-3"
                  style={{ minWidth: "140px" }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "rgba(255,255,255,0.05)" }}>
                    {typeof tech.icon === "string" ? (
                      <Image src={tech.icon} alt={tech.name} width={22} height={22} className="object-contain" />
                    ) : (
                      <span className="flex items-center justify-center" style={{ width: 22, height: 22 }}>
                        {tech.icon}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Tech grid ────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          >
            {techStack.map((tech, index) => (
              <motion.div key={tech.name} variants={fadeUp}>
                <SpotlightCard
                  spotlightColor="rgba(59,130,246,0.25)"
                  className="shimmer-top flex h-44 w-full flex-col items-center justify-center rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "rgba(12,16,24,0.7)",
                    border:     "1px solid var(--border)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {typeof tech.icon === "string" ? (
                      <Image src={tech.icon} alt={tech.name} width={32} height={32} className="object-contain" />
                    ) : (
                      tech.icon
                    )}
                  </div>

                  {/* Name */}
                  <p className="text-sm font-semibold text-center text-white leading-tight">
                    {tech.name}
                  </p>

                  {/* Proficiency bar */}
                  <div
                    className="mt-3 h-0.5 w-10 overflow-hidden rounded-full"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                    role="meter"
                    aria-valuenow={STAR_TO_PCT[tech.stars]}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${tech.name} proficiency`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${STAR_TO_PCT[tech.stars]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.05, ease }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #3b82f6, #6366f1)" }}
                    />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          {/* ── View More Button ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <span>View More Skills</span>
              <span className="text-[10px] opacity-60">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EXPERIENCE
          ══════════════════════════════════════════════════════════ */}
      <section
        className="relative px-6 py-32 lg:px-16"
        aria-label="Experience"
      >
        {/* Section-local subtle glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 10% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionLabel index={3} label="Experience" className="mb-5" />

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-gradient-white font-black tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              Where I&apos;ve Shipped.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-base"
              style={{ color: "var(--text-muted)", lineHeight: "1.75" }}
            >
              A mix of client work, personal labs, and exploration in future-facing tech.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-20 mx-auto max-w-5xl">
            {/* The Central Line (Desktop) */}
            <div
              className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--border-hover)] via-[var(--border-hover)] to-transparent hidden md:block"
              aria-hidden="true"
            />
            {/* Line (Mobile) */}
            <div
              className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--border-hover)] via-[var(--border-hover)] to-transparent md:hidden"
              aria-hidden="true"
            />

            <div className="space-y-12 md:space-y-8">
              {experienceTimeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-stretch w-full ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Left/Right Column: Card Container */}
                    <div className={`w-full md:w-1/2 flex pl-12 md:pl-0 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                      <div
                        className="glass shimmer-top w-full rounded-2xl p-6 transition-all duration-300 hover:border-white/[0.12]"
                      >
                        {/* Period pill */}
                        <span
                          className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium mb-3"
                          style={{
                            background: "rgba(59,130,246,0.10)",
                            border:     "1px solid rgba(59,130,246,0.2)",
                            color:      "#93c5fd",
                            fontFamily: "var(--font-mono, monospace)",
                          }}
                        >
                          {item.period}
                        </span>

                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p
                          className="text-sm mt-0.5"
                          style={{ color: "#818cf8" }}
                        >
                          {item.company}
                        </p>
                        <p
                          className="mt-3 text-sm leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.summary}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {item.highlights.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-sm"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: "#6366f1" }}
                                aria-hidden="true"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Central Circle Marker */}
                    <div
                      className="absolute left-4 md:left-1/2 top-6 md:top-8 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full z-10"
                      style={{
                        background:  "var(--surface)",
                        border:      "1px solid var(--border-hover)",
                        boxShadow:   "0 0 0 4px rgba(99,102,241,0.08)",
                      }}
                      aria-hidden="true"
                    >
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                      />
                    </div>

                    {/* Empty Column for spacing on desktop */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT
          ══════════════════════════════════════════════════════════ */}
      <section
        className="relative px-6 py-32 lg:px-16"
        aria-label="Contact"
      >
        {/* Center glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionLabel index={4} label="Connect" className="mb-5" />

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-gradient-white font-black tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              Let&apos;s Build<br />
              <span className="text-gradient-blue">Something Remarkable.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-base"
              style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
            >
              I&apos;m always open to collaborating on interesting projects or just chatting
              about creative engineering ideas. Reach out through your favourite channel.
            </motion.p>

            {/* Email prominent */}
            {/* <motion.div variants={fadeUp} className="mt-6 flex justify-center">
              <a
                href="mailto:davinfibrian@gmail.com"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.04]"
                style={{
                  background: "rgba(99,102,241,0.10)",
                  border:     "1px solid rgba(99,102,241,0.25)",
                  color:      "#a5b4fc",
                }}
              >
                <Mail size={14} aria-hidden="true" />
                davinfibrian@gmail.com
              </a>
            </motion.div> */}

            {/* Contact cards */}
            <motion.div
              variants={staggerContainer(0.1)}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {contactLinks.map((contact) => (
                <motion.div key={contact.name} variants={fadeUp}>
                  <Link
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover shimmer-top group flex flex-col gap-4 rounded-2xl p-5 text-left
                               transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                    style={{
                      boxShadow: `0 0 0 1px ${contact.border}`,
                    }}
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: contact.color,
                        border:     `1px solid ${contact.border}`,
                        color:      "white",
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{contact.name}</p>
                      <p
                        className="mt-1 text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {contact.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════ */}
      <footer
        className="relative px-6 py-10 lg:px-16"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Davin P F. All rights reserved.
            </p>
          </div>
          <p
            className="text-xs"
            style={{ color: "var(--text-subtle)", fontFamily: "var(--font-mono, monospace)" }}
          >
            Built with Next.js & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}