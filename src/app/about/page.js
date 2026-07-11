"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Database, Server, Zap, Bot, MapPin, Calendar, Activity, Download, ExternalLink } from "lucide-react";
import GlareHover from "../../components/GlareHover";
import SectionLabel from "../../components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const stagger = (delay = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: delay } },
});

/* ─────────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────────── */
const STAR_TO_PCT = { 5: 100, 4: 80, 3: 60 };

const skillCategories = [
  {
    id:    "frontend",
    label: "Frontend",
    color: "#f59e0b",
    skills: [
      { name: "React",       icon: "/icons/react.png",       stars: 5 },
      { name: "Next.js",     icon: "nextjs-svg",             stars: 5 },
      { name: "TypeScript",  icon: "typescript-svg",         stars: 5 },
      { name: "Vite",        icon: "/icons/vite.svg",        stars: 4 },
      { name: "Tailwind",    icon: "/icons/tailwind.svg",    stars: 5 },
      { name: "HTML",        icon: "/icons/html.svg",        stars: 5 },
      { name: "CSS",         icon: "/icons/css.svg",         stars: 5 },
      { name: "JavaScript",  icon: "/icons/javascript.png",  stars: 5 },
    ],
  },
  {
    id:    "backend",
    label: "Backend",
    color: "#ef4444",
    skills: [
      { name: "PHP",          icon: "/icons/php.svg",              stars: 5 },
      { name: "Node.js",      icon: "/icons/Node.js.svg",          stars: 4 },
      { name: "Express",      icon: "/icons/express-js.svg",       stars: 4 },
      { name: "Golang",       icon: "/icons/golang.svg",           stars: 4 },
      { name: "CodeIgniter",  icon: "/icons/codeigniter.svg",      stars: 5 },
      { name: "Laravel",      icon: "/icons/laravel.svg",          stars: 5 },
      { name: "Python",       icon: "/icons/Python.svg",           stars: 4 },
      { name: "FastAPI",      icon: <Server className="text-teal-400" size={36} />, stars: 4 },
    ],
  },
  {
    id:    "database",
    label: "Database",
    color: "#06b6d4",
    skills: [
      { name: "MySQL",       icon: "/icons/mysql.svg",              stars: 5 },
      { name: "PostgreSQL",  icon: <Database className="text-blue-400" size={36} />, stars: 4 },
      { name: "MongoDB",     icon: "/icons/mongo-db.png",           stars: 4 },
      { name: "Supabase",    icon: <Zap className="text-emerald-400" size={36} />,  stars: 4 },
    ],
  },
  {
    id:    "tools",
    label: "Tools",
    color: "#8b5cf6",
    skills: [
      { name: "GitHub",     icon: "/icons/github.png",      stars: 5 },
      { name: "Git",        icon: "/icons/icons8-git.svg",  stars: 4 },
      { name: "VS Code",    icon: "/icons/vscode.svg",      stars: 5 },
      { name: "Figma",      icon: "/icons/figma.png",       stars: 4 },
      { name: "Gemini AI",  icon: <Bot className="text-purple-400" size={36} />, stars: 5 },
    ],
  },
  {
    id:    "web3",
    label: "Web3",
    color: "#3b82f6",
    skills: [
      { name: "Solidity", icon: "/icons/Solidity.svg", stars: 4 },
    ],
  },
];

const experience = [
  {
    title:   "Full-Stack Developer — Intern",
    company: "Elecomp Indonesia",
    period:  "2024 – 2025",
    desc:    "Developed and maintained full-stack web applications using modern development practices. Specialized in building responsive company profile websites utilizing CodeIgniter 4 with a focus on intuitive user interfaces and optimized user experience.",
  },
];

const education = [
  {
    school:  "SMKN 1 Boyolangu",
    major:   "Software Engineering (Rekayasa Perangkat Lunak)",
    period:  "2022 – 2025",
    desc:    "Comprehensive curriculum focused on software engineering principles, including web development, database design, and programming fundamentals. Participated in hands-on projects and built dynamic web applications.",
  },
];

const interests = [
  { label: "UI/UX Design",       icon: "🎨" },
  { label: "Open Source",         icon: "🔧" },
  { label: "Blockchain & Web3",  icon: "⛓️" },
  { label: "AI Applications",    icon: "🤖" },
  { label: "Cryptocurrency",     icon: "₿"  },
  { label: "Game Design",        icon: "🎮" },
  { label: "Travel & Culture",   icon: "✈️" },
];

const TOC_ITEMS = [
  { href: "#about",      label: "About Me"    },
  { href: "#skills",     label: "Skills"      },
  { href: "#experience", label: "Experience"  },
  { href: "#education",  label: "Education"   },
  { href: "#interests",  label: "Interests"   },
];

/* ─────────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────────── */
function NextJsSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="36" height="36">
      <mask id="am0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#am0)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#ang0)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#ang1)" />
      </g>
      <defs>
        <linearGradient id="ang0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ang1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TypeScriptSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="36" height="36">
      <rect width="128" height="128" fill="#3178C6" rx="12" />
      <text x="64" y="92" fill="white" fontFamily="Arial,sans-serif" fontSize="64" fontWeight="bold" textAnchor="middle">TS</text>
    </svg>
  );
}

function SkillIcon({ icon, name }) {
  if (icon === "nextjs-svg")     return <NextJsSvg />;
  if (icon === "typescript-svg") return <TypeScriptSvg />;
  if (typeof icon !== "string")  return <span className="flex items-center justify-center w-9 h-9">{icon}</span>;
  return <Image src={icon} alt={name} width={36} height={36} className="object-contain" />;
}

/* ─────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────────── */
export default function About() {
  const [activeSection, setActiveSection] = useState("about");

  /* Smooth scroll + active TOC tracking */
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("[data-scroll]");
      if (!target) return;
      e.preventDefault();
      const id      = target.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      if (section) {
        const offset = 96;
        window.scrollTo({ top: section.offsetTop - offset, behavior: "smooth" });
        setActiveSection(id);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-120px 0px -60% 0px" }
    );
    TOC_ITEMS.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* ── Profile Banner ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 pt-28 pb-16 lg:px-16"
        aria-label="Profile"
      >
        {/* Banner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(99,102,241,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "var(--border)" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"
          >
            {/* Avatar */}
            <motion.div variants={fadeUp} className="shrink-0">
              <div
                className="relative overflow-hidden"
                style={{
                  width:        "120px",
                  height:       "120px",
                  borderRadius: "28px",
                  background:   "linear-gradient(145deg, rgba(99,102,241,0.3), rgba(7,9,15,0.5))",
                  padding:      "3px",
                  boxShadow:    "0 0 40px rgba(99,102,241,0.15), 0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="relative h-full w-full overflow-hidden"
                  style={{ borderRadius: "26px", background: "var(--surface)" }}
                >
                  <Image
                    src="/profile.png"
                    alt="Davin Putra Fibrian"
                    fill
                    sizes="120px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <motion.h1
                variants={fadeUp}
                className="font-black tracking-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Davin Putra Fibrian
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-1.5 text-base font-medium"
                style={{ color: "#818cf8" }}
              >
                Full-Stack Developer
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-4 flex flex-wrap gap-x-6 gap-y-2"
              >
                {[
                  { icon: <Calendar size={13} />, text: "Born 31 May 2006" },
                  { icon: <MapPin    size={13} />, text: "East Java, Indonesia" },
                  { icon: <Activity  size={13} />, text: "Open to Opportunities", color: "#4ade80" },
                ].map(({ icon, text, color }) => (
                  <span
                    key={text}
                    className="flex items-center gap-1.5 text-sm"
                    style={{ color: color ?? "var(--text-muted)" }}
                  >
                    {icon}{text}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-5 flex gap-3">
                <Link
                  href="/DavinPutraFibrian-Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:scale-[1.04] hover:brightness-110"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
                >
                  <Download size={12} />Resume
                </Link>
                <Link
                  href="https://github.com/VinLvy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 hover:scale-[1.04]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
                >
                  <ExternalLink size={12} />GitHub
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content + Sidebar ──────────────────────────── */}
      <div className="mx-auto flex max-w-7xl gap-0 px-6 lg:px-16 lg:gap-16">

        {/* Sticky Sidebar TOC */}
        <aside
          className="hidden lg:flex flex-col gap-1 pt-16 shrink-0"
          style={{ width: "180px", position: "sticky", top: "100px", height: "fit-content" }}
          aria-label="Page sections"
        >
          {/* Vertical rule */}
          <div
            className="absolute right-0 top-16 h-full w-px"
            style={{ background: "var(--border)" }}
            aria-hidden="true"
          />
          {TOC_ITEMS.map(({ href, label }) => {
            const id     = href.slice(1);
            const active = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                data-scroll
                className="group relative flex items-center gap-2 py-2 pr-6 text-sm transition-all duration-200"
                style={{ color: active ? "#fff" : "var(--text-muted)" }}
                aria-current={active ? "location" : undefined}
              >
                {/* Active indicator line */}
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 block h-5 w-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: active ? "#6366f1" : "transparent",
                    transform:  active ? "translateY(-50%) scaleY(1)" : "translateY(-50%) scaleY(0)",
                  }}
                  aria-hidden="true"
                />
                {/* Hover dot */}
                <span
                  className="block h-1.5 w-1.5 rounded-full transition-all duration-200 shrink-0"
                  style={{ background: active ? "#6366f1" : "rgba(255,255,255,0.15)" }}
                  aria-hidden="true"
                />
                <span
                  className="transition-transform duration-200"
                  style={{ transform: active ? "translateX(2px)" : "none" }}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0 py-16 space-y-24">

          {/* ── About ───────────────────────────────────────── */}
          <section id="about" aria-labelledby="about-heading">
            <SectionLabel index={1} label="About Me" className="mb-6" />
            <motion.div
              variants={stagger()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2
                id="about-heading"
                variants={fadeUp}
                className="font-bold text-white"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                Building at the intersection of<br />
                <span className="text-gradient-blue">performance & design.</span>
              </motion.h2>
              <motion.div variants={stagger(0.1)} className="mt-6 space-y-4 max-w-2xl">
                {[
                  `I am a Full-Stack Developer with a strong foundation in modern web development technologies. My expertise encompasses both frontend and backend development, with particular proficiency in PHP frameworks and contemporary JavaScript ecosystems including React and Next.js.`,
                  `Currently, I am expanding my knowledge in emerging technologies, particularly in the Web3 space, blockchain development, and decentralized applications. I maintain a commitment to continuous learning and staying current with industry best practices to deliver high-quality, scalable solutions.`,
                  `I approach each project with a focus on clean code architecture, user experience optimization, and performance-driven development. My collaborative nature and problem-solving mindset enable me to work effectively in team environments while contributing innovative solutions to complex technical challenges.`,
                ].map((para, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-muted)", lineHeight: "1.85" }}
                  >
                    {para}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* ── Skills ──────────────────────────────────────── */}
          <section id="skills" aria-labelledby="skills-heading">
            <SectionLabel index={2} label="Skills" className="mb-6" />
            <motion.h2
              id="skills-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="font-bold text-white mb-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Technologies I work with.
            </motion.h2>

            <div className="space-y-12">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="block h-2.5 w-2.5 rounded-full shrink-0"
                      style={{ background: category.color }}
                      aria-hidden="true"
                    />
                    <h3
                      className="text-sm font-semibold uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono,monospace)", color: "var(--text-muted)" }}
                    >
                      {category.label}
                    </h3>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "var(--border)" }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center glass rounded-2xl p-5 h-full"
                        style={{ minHeight: "140px" }}
                      >
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-xl mb-3"
                          style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                          <SkillIcon icon={skill.icon} name={skill.name} />
                        </div>
                        <p className="text-sm font-semibold text-center text-white leading-tight">
                          {skill.name}
                        </p>
                        {/* Proficiency bar */}
                        <div
                          className="mt-3 h-0.5 w-10 overflow-hidden rounded-full"
                          style={{ background: "rgba(255,255,255,0.08)" }}
                          role="meter"
                          aria-valuenow={STAR_TO_PCT[skill.stars]}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${STAR_TO_PCT[skill.stars]}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}88)` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Experience ──────────────────────────────────── */}
          <section id="experience" aria-labelledby="experience-heading">
            <SectionLabel index={3} label="Professional Experience" className="mb-6" />
            <motion.h2
              id="experience-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="font-bold text-white mb-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Where I&apos;ve worked.
            </motion.h2>
            <div className="space-y-0 max-w-2xl">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease, delay: idx * 0.1 }}
                  className="flex gap-5"
                >
                  {/* Marker */}
                  <div
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--surface)", border: "1px solid var(--border-hover)" }}
                    aria-hidden="true"
                  >
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                    />
                  </div>
                  <div className="glass shimmer-top rounded-2xl p-6 flex-1">
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium mb-2"
                      style={{ background: "rgba(59,130,246,0.10)", border: "1px solid rgba(59,130,246,0.2)", color: "#93c5fd", fontFamily: "var(--font-mono,monospace)" }}
                    >
                      {item.period}
                    </span>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm mt-0.5" style={{ color: "#818cf8" }}>{item.company}</p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Education ───────────────────────────────────── */}
          <section id="education" aria-labelledby="education-heading">
            <SectionLabel index={4} label="Education" className="mb-6" />
            <motion.h2
              id="education-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="font-bold text-white mb-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Academic background.
            </motion.h2>
            <div className="max-w-2xl space-y-0">
              {education.map((item, idx) => (
                <motion.div
                  key={item.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease, delay: idx * 0.1 }}
                  className="flex gap-5"
                >
                  <div
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--surface)", border: "1px solid var(--border-hover)" }}
                    aria-hidden="true"
                  >
                    <div className="h-2 w-2 rounded-full" style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)" }} />
                  </div>
                  <div className="glass shimmer-top rounded-2xl p-6 flex-1">
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium mb-2"
                      style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.2)", color: "#fcd34d", fontFamily: "var(--font-mono,monospace)" }}
                    >
                      {item.period}
                    </span>
                    <h3 className="text-base font-semibold text-white">{item.school}</h3>
                    <p className="text-sm mt-0.5" style={{ color: "#f59e0b" }}>{item.major}</p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Interests ───────────────────────────────────── */}
          <section id="interests" aria-labelledby="interests-heading">
            <SectionLabel index={5} label="Interests" className="mb-6" />
            <motion.h2
              id="interests-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Outside the code.
            </motion.h2>
            <motion.div
              variants={stagger()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-base leading-relaxed mb-8"
                style={{ color: "var(--text-muted)", lineHeight: "1.85" }}
              >
                I maintain a keen interest in the rapidly evolving technology landscape, with
                particular focus on UI/UX design principles, blockchain infrastructure, AI
                applications, and open-source development communities. Beyond software,
                I find inspiration in game design and cultural experiences through travel.
              </motion.p>

              {/* Interest pills */}
              <motion.div variants={stagger(0.05)} className="flex flex-wrap gap-3">
                {interests.map(({ label, icon }) => (
                  <motion.span
                    key={label}
                    variants={fadeUp}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium glass transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span role="img" aria-label={label}>{icon}</span>
                    {label}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer
        className="mt-24 px-6 py-10 lg:px-16"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Davin Putra Fibrian. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-subtle)", fontFamily: "var(--font-mono,monospace)" }}>
            Built with Next.js & Framer Motion
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
