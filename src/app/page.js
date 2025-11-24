
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, useInView } from "framer-motion";
import BlurText from '../components/BlurText';
import SpotlightCard from "../components/SpotlightCard";
import GlareHover from "../components/GlareHover";
import AuroraBackground from "../components/AuroraBackground";
import RetroGrid from "../components/RetroGrid";
import OrbitingIcon from "../components/OrbitingIcon";
import {
  Code2,
  Rocket,
  Sparkles,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Home() {
  const techStackRef = useRef(null);
  const isInView = useInView(techStackRef, { once: true });

  const heroStats = [
    { label: "Projects Delivered", value: "20+" },
    { label: "Tech Stack", value: "12 tools" },
    // { label: "Clients", value: "8 happy" },
  ];

  const experienceTimeline = [
    {
      title: "Full-Stack Developer",
      company: "Freelance & Personal Labs",
      period: "",
      summary:
        "Build bespoke dashboards, company profiles, and experimental Web3 tools with modern stacks like Next.js & Laravel.",
      highlights: [
        "Design end-to-end product experiences from UI concepts to production-ready code.",
        "Integrate third-party APIs, payment gateways, and authentication with best practices.",
        "Ship maintainable codebases with reusable component systems and documentation.",
      ],
    },
    {
      title: "Web3 & Solidity Explorer",
      company: "Side quests",
      period: "",
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
      name: "Instagram",
      link: "https://instagram.com/davin.fbrn",
      icon: <Instagram size={22} />,
      description: "Behind the scenes & daily snippets.",
    },
    {
      name: "GitHub",
      link: "https://github.com/VinLvy",
      icon: <Github size={22} />,
      description: "Code experiments & OSS work.",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/davin-p-f-0b00a12b7/",
      icon: <Linkedin size={22} />,
      description: "Professional journey & updates.",
    },
    {
      name: "Email",
      link: "mailto:davinfibrian@gmail.com",
      icon: <Mail size={22} />,
      description: "Let’s talk about your next idea.",
    },
  ];

  const techStack = [
    { name: "HTML", icon: "/icons/html.svg", stars: 5 },
    { name: "CSS", icon: "/icons/css.svg", stars: 5 },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg", stars: 4 },
    { name: "JavaScript", icon: "/icons/javascript.png", stars: 4 },
    { name: "PHP", icon: "/icons/php.svg", stars: 5 },
    { name: "Python", icon: "/icons/Python.svg", stars: 3 },
    { name: "MySQL", icon: "/icons/mysql.svg", stars: 5 },
    { name: "CodeIgniter 4", icon: "/icons/codeigniter.svg", stars: 5 },
    { name: "Laravel", icon: "/icons/laravel.svg", stars: 4 },
    {
      name: "Next.js",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="50" height="50">
          <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0)">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ), stars: 4
    },
    { name: "React", icon: "/icons/react.png", stars: 3 },
    { name: "Node.js", icon: "/icons/Node.js.svg", stars: 3 },
    { name: "Express.js", icon: "/icons/express-js.svg", stars: 4 },
    { name: "MongoDB", icon: "/icons/mongo-db.png", stars: 4 },
    { name: "Solidity", icon: "/icons/Solidity.svg", stars: 3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-5 py-16 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="relative">
          <AuroraBackground className="p-8 sm:p-12 lg:p-16">
            {/* <RetroGrid className="opacity-80" /> */}
            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
                  <Sparkles size={16} />
                  Building delightful full-stack experiences
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-4xl font-semibold sm:text-5xl">
                  <BlurText text="Hi, I'm" delay={100} animateBy="words" direction="top" />
                  <BlurText text="Davin" delay={250} animateBy="letters" direction="top" className="text-purple-300" />
                </div>

                <p className="mt-6 text-lg text-white/80">
                  <span className="font-semibold text-purple-200">Full-Stack Developer</span> crafting high-impact apps
                  with PHP, JavaScript, and modern Web3 stacks. I ship polished UIs, pragmatic APIs, and love blending
                  motion with storytelling.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/RESUME Davin.pdf"
                    download
                    className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white shadow-lg shadow-purple-500/40 transition hover:scale-105"
                  >
                    <Rocket className="transition group-hover:-translate-y-0.5" size={18} />
                    My Resume
                  </Link>
                  <Link
                    href="https://github.com/VinLvy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    
                    My GitHub
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 text-left sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur-xl"
                    >
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                <Link href="/about" className="relative">
                  <div className="relative h-64 w-64 rounded-[32px] border border-white/20 bg-gradient-to-b from-purple-400/20 to-slate-900/60 p-3 shadow-2xl sm:h-72 sm:w-72">
                    <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-slate-900/80">
                      <Image
                        src="/profile.png"
                        alt="Profile"
                        fill
                        sizes="(max-width: 768px) 256px, 288px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </Link>

                <OrbitingIcon radius={120} angle={-30}>
                  <Code2 size={20} />
                </OrbitingIcon>
                <OrbitingIcon radius={150} angle={50}>
                  <Rocket size={20} />
                </OrbitingIcon>
                <OrbitingIcon radius={95} angle={250}>
                  <Sparkles size={20} />
                </OrbitingIcon>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-10 left-1/2 w-60 -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/80 backdrop-blur-xl"
                >
                  <p className="font-semibold text-white">Currently iterating:</p>
                  <p>Web3 analytics dashboard with immersive interactions & realtime data.</p>
                </motion.div>
              </div>
            </div>
          </AuroraBackground>
        </section>

        {/* Tech Stack */}
        <section ref={techStackRef} className="space-y-5 text-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Toolbox & Tech Stack</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Frameworks & tools I trust to bring performant experiences to life.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200/70 bg-white/70 p-6 shadow-xl shadow-purple-200/60 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:shadow-purple-900/20">
            <div className="grid grid-cols-2 gap-6 text-gray-200 sm:grid-cols-3 lg:grid-cols-5">
              {techStack.map((tech, index) => (
                <GlareHover
                  key={tech.name}
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                  <SpotlightCard
                    spotlightColor="rgba(136, 0, 255, 0.35)"
                    className="flex h-48 w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-white/5">
                      {typeof tech.icon === "string" ? (
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} className="object-contain" />
                      ) : (
                        tech.icon
                      )}
                    </div>
                    <p className="text-base font-semibold text-center text-white">{tech.name}</p>
                    <p className="text-xl text-yellow-300">{"★".repeat(tech.stars)}</p>
                  </SpotlightCard>
                </GlareHover>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Experience & Focus</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A mix of client work, personal labs, and exploration in future-facing tech.
            </p>
          </div>
          <div className="space-y-6">
            {experienceTimeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 text-white shadow-lg">
                      <Rocket size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-300">{item.company}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-300">{item.period}</p>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-200">{item.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Let’s build something</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
            I&apos;m always open to collaborating or just chatting about creative engineering ideas. Reach out through
            your favorite channel.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((contact) => (
              <Link
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-5 text-left shadow-md transition hover:-translate-y-1 hover:border-purple-400 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 transition group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-900/40 dark:text-purple-200">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{contact.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-300">{contact.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}