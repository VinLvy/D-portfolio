'use client';

import { Rocket, ExternalLink, Github, Trophy, Zap, TrendingUp, Users, Star } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BatikChain",
    subtitle: "Blockchain Product Authentication Platform",
    period: "Oct 2025 – Dec 2025",
    description:
      "A decentralized product authentication platform on the Ethereum blockchain targeting Indonesia's artisan batik industry. Artisans can register products with immutable on-chain provenance, while consumers verify authenticity via QR code in real-time.",
    impact: [
      { icon: Trophy, label: "Infinity Hackathon OJK 2025", value: "National Finalist", color: "text-yellow-400" },
      { icon: Star, label: "Smart Contracts Audited", value: "OWASP Compliant", color: "text-emerald-400" },
      { icon: Users, label: "Team Role", value: "Blockchain Lead", color: "text-purple-400" },
    ],
    highlights: [
      "Architected & deployed ERC-721 Solidity smart contracts with immutable on-chain metadata & provenance tracking",
      "Built React / Next.js frontend integrated with Ethers.js for real-time contract interaction",
      "Enforced Ownable access control & validated against reentrancy and integer overflow vectors per OWASP",
    ],
    tech: ["Solidity", "ERC-721", "Ethereum", "Next.js", "React", "Ethers.js", "OpenZeppelin"],
    link: "https://github.com/VinLvy/BatikChain",
    images: ["/images/project6.png", "/images/project6b.png"],
    accent: "from-yellow-500/20 to-orange-500/10",
    borderAccent: "hover:border-yellow-500/50",
    badgeColor: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
    featured: true,
  },
  {
    title: "ReLife RPG",
    subtitle: "AI-Powered Gamified Life Tracker",
    period: "Jan 2026 – Mar 2026",
    description:
      "A full-stack gamified life-tracking app where users log daily journal entries analyzed in real-time by Google Gemini 2.5 Flash AI. The LLM parses natural language into typed stat-delta objects that power a real-time leveling engine with 6 RPG attributes.",
    impact: [
      { icon: Zap, label: "AI Engine", value: "Gemini 2.5 Flash", color: "text-blue-400" },
      { icon: TrendingUp, label: "RPG Attributes", value: "6 Live Stats", color: "text-purple-400" },
      { icon: Star, label: "Architecture", value: "Zero-latency LLM", color: "text-pink-400" },
    ],
    highlights: [
      "Engineered a structured LLM prompt pipeline (gemini.ts) parsing unstructured text into typed stat-delta objects",
      "Implemented Supabase JWT auth with auto-session-timeout and a Framer Motion + Recharts live Radar Chart UI",
      "Glassmorphism theming with real-time leveling engine, class & title unlock logic across 6 RPG attributes",
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Google Gemini API", "Framer Motion", "Recharts"],
    link: "https://github.com/VinLvy",
    images: ["/images/project5.png", "/images/project5b.png"],
    accent: "from-blue-500/20 to-purple-500/10",
    borderAccent: "hover:border-blue-500/50",
    badgeColor: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    featured: false,
  },
  {
    title: "AntiFlow",
    subtitle: "AI Content Automation Engine",
    period: "Jul 2025 – Sep 2025",
    description:
      "A zero-cost AI content automation engine that produces complete YouTube video asset kits — scripts, visual prompts, and voiceovers — from a single topic input, using a decoupled Next.js + FastAPI architecture for independent pipeline scaling.",
    impact: [
      { icon: Zap, label: "Infrastructure Cost", value: "$0 / month", color: "text-emerald-400" },
      { icon: TrendingUp, label: "Assets per Topic", value: "Scripts + Voiceovers", color: "text-cyan-400" },
      { icon: Star, label: "AI Models", value: "Gemini + Edge TTS", color: "text-purple-400" },
    ],
    highlights: [
      "Architected decoupled backend with isolated AI logic and file management for independent pipeline scaling",
      "Integrated Google Gemini 2.5 Flash for structured LLM scriptwriting and Microsoft Edge TTS for narration",
      "Eliminated all production infrastructure costs by engineering the full pipeline exclusively on free-tier APIs",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "Google Gemini API", "Edge TTS", "REST API"],
    link: "https://github.com/VinLvy",
    images: ["/images/project4.png", "/images/project4b.png"],
    accent: "from-emerald-500/20 to-cyan-500/10",
    borderAccent: "hover:border-emerald-500/50",
    badgeColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    featured: false,
  },
  {
    title: "Point of Sales System",
    subtitle: "Full-Stack Business Operations Platform",
    period: "Jan 2025 – Feb 2025",
    description:
      "A production-grade full-stack POS system in Laravel 11 with real-time inventory tracking, automated PDF/CSV report generation via Laravel Queues, and role-based authentication integrated with third-party POS hardware.",
    impact: [
      { icon: TrendingUp, label: "Staff Workload Reduced", value: "↓ 40%", color: "text-emerald-400" },
      { icon: Zap, label: "Report Generation", value: "Automated PDF/CSV", color: "text-blue-400" },
      { icon: Star, label: "Auth System", value: "Role-Based (Spatie)", color: "text-purple-400" },
    ],
    highlights: [
      "Engineered automated PDF/CSV report generation via Laravel Queues, cutting accounting reconciliation by 40%",
      "Designed real-time inventory tracking across multiple product categories with audit trails",
      "Implemented Spatie Permissions RBAC and a RESTful API layer for third-party POS hardware integration",
    ],
    tech: ["Laravel 11", "PHP", "MySQL", "REST API", "Spatie Permissions", "Laravel Queues"],
    link: "https://github.com/VinLvy/Point-of-Saless",
    images: ["/images/project2.png", "/images/project2b.png"],
    accent: "from-purple-500/20 to-pink-500/10",
    borderAccent: "hover:border-purple-500/50",
    badgeColor: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    featured: false,
  },
  {
    title: "Company Profile Websites",
    subtitle: "8× Production Client Deployments",
    period: "Jul 2024 – Dec 2024",
    description:
      "Delivered 8 production company profile websites using CodeIgniter 4 and MySQL, each with custom responsive layouts, lazy-loaded media, and Schema.org structured data. Consistently maintained Lighthouse scores above 90 and achieved measurable SEO gains.",
    impact: [
      { icon: TrendingUp, label: "Organic Search Visibility", value: "+25%", color: "text-emerald-400" },
      { icon: Star, label: "Lighthouse Score", value: "90+ All Sites", color: "text-yellow-400" },
      { icon: Users, label: "Sites Delivered", value: "8 Clients", color: "text-blue-400" },
    ],
    highlights: [
      "Maintained Lighthouse scores above 90 through image optimization, minified assets & server-side caching",
      "Implemented Schema.org structured data driving a 25% increase in organic search visibility",
      "Conducted technical onboarding for interns with codebase walkthroughs and end-to-end cPanel deployment",
    ],
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Schema.org", "SEO", "Responsive Design"],
    link: "https://github.com/VinLvy/Web-Competent",
    images: ["/images/project3.png", "/images/project3b.png"],
    accent: "from-pink-500/20 to-rose-500/10",
    borderAccent: "hover:border-pink-500/50",
    badgeColor: "bg-pink-500/10 border-pink-500/30 text-pink-300",
    featured: false,
  },
  {
    title: "Landing Page",
    subtitle: "Landing Page For A Technology Company",
    period: "March 2025 - May 2025",
    description:
      "A modern, high-performance landing page for a technology company, featuring a sleek, glassmorphic design with smooth scrolling, micro-interactions, and a full-responsive layout for seamless desktop and mobile experiences.",
    impact: [
      { icon: TrendingUp, label: "Performance", value: "98.6", color: "text-emerald-400" },
      { icon: Star, label: "Accessibility", value: "100", color: "text-yellow-400" },
      { icon: Users, label: "SEO", value: "100", color: "text-blue-400" },
    ],
    highlights: [
      "Achieved a performance score of 98.6 and 100% on accessibility through optimized assets and ARIA-compliant markup",
      "Implemented a custom, high-performance animation system with Lottie micro-interactions and smooth scrolling effects",
      "Engineered a modular, component-based layout using Figma specifications for seamless desktop and mobile experiences",
    ],
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Lottie", "Figma", "Responsive Design"],
    link: "https://github.com/VinLvy/Web-Competent",
    images: ["/images/project1.png", "/images/project1b.png"],
    accent: "from-pink-500/20 to-rose-500/10",
    borderAccent: "hover:border-pink-500/50",
    badgeColor: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
    featured: false,
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-5 py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mt-8 md:mt-20 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-5"
          >
            <Trophy size={14} />
            Featured Projects — From Resume
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Built & Shipped
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-grade projects spanning blockchain, AI automation, and full-stack web apps —
            each built to solve real problems and measured by real impact.
          </p>
        </div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 mb-10"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className={`group relative rounded-3xl border border-white/10 ${project.borderAccent} bg-slate-900/70 backdrop-blur-md overflow-hidden shadow-xl transition-all duration-500 hover:shadow-purple-900/20`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 pointer-events-none`} />

              {/* Featured badge */}
              

              <div className={`relative flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0`}>
                {/* Images */}
                <div className="relative w-full lg:w-5/12 flex-shrink-0 flex flex-col items-center justify-center p-6 lg:p-8 gap-6">
                  {/* Subtle glow behind the images */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 blur-3xl rounded-full scale-90 pointer-events-none`} />
                  
                  {project.images?.map((imgSrc, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={imgSrc}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      width={800}
                      height={500}
                      className="relative z-10 w-full h-auto rounded-xl object-contain shadow-[0_0_30px_rgba(0,0,0,0.4)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative flex flex-col justify-between p-7 lg:p-9 lg:w-7/12">
                  {/* Period */}
                  <p className="text-xs font-mono text-gray-500 mb-2">{project.period}</p>

                  {/* Title */}
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{project.title}</h2>
                    <p className="text-sm text-purple-300 mt-1 font-medium">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Impact metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    {project.impact.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-center"
                      >
                        <item.icon size={14} className={`mx-auto mb-1 ${item.color}`} />
                        <p className={`text-base font-bold ${item.color}`}>{item.value}</p>
                        <p className="text-xs text-gray-500 leading-tight mt-0.5">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border px-2.5 py-1 text-xs font-medium ${project.badgeColor}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
                    >
                      <Github size={15} />
                      View on GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl shadow-purple-500/40 mb-6 animate-bounce">
            <Rocket className="text-white w-7 h-7" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">More Projects Coming Soon</h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
            I&apos;m constantly learning, building, and exploring new technologies. Stay tuned for exciting projects
            pushing the boundaries of modern web development — and beyond.
          </p>
          <Link
            href="https://github.com/VinLvy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            <Github size={16} />
            Follow on GitHub
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}