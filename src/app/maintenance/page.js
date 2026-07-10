"use client";

import { motion } from "framer-motion";
import { Wrench, Github, Instagram, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  // {
  //   name:        "Instagram",
  //   link:        "https://instagram.com/davin.fbrn",
  //   icon:        <Instagram size={20} />,
  //   description: "Behind the scenes & daily snippets.",
  //   color:       "rgba(236,72,153,0.15)",
  //   border:      "rgba(236,72,153,0.25)",
  // },
  {
    name:        "GitHub",
    link:        "https://github.com/VinLvy",
    icon:        <Github size={20} />,
    description: "Code experiments & OSS work.",
    color:       "rgba(255,255,255,0.05)",
    border:      "rgba(255,255,255,0.15)",
  },
  // {
  //   name:        "LinkedIn",
  //   link:        "https://www.linkedin.com/in/davinpfbrn/",
  //   icon:        <Linkedin size={20} />,
  //   description: "Professional journey & updates.",
  //   color:       "rgba(59,130,246,0.15)",
  //   border:      "rgba(59,130,246,0.25)",
  // },
  {
    name:        "Email",
    link:        "mailto:davinfibrian@gmail.com",
    icon:        <Mail size={20} />,
    description: "Let's talk about your next idea.",
    color:       "rgba(99,102,241,0.15)",
    border:      "rgba(99,102,241,0.25)",
  },
];

export default function Maintenance() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center py-20">
      {/* Glow effects specific to this page */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle 450px at 50% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 80%), radial-gradient(circle 300px at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        {/* Floating animated icon */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative mb-8 flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
          style={{
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Wrench size={38} className="text-blue-400" />
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-4 border border-blue-500/25 text-blue-300"
          style={{ background: "rgba(59, 130, 246, 0.08)" }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          SYSTEM UPGRADE IN PROGRESS
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
        >
          Under Maintenance
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-[var(--text-muted)] mt-4 max-w-md leading-relaxed"
        >
          We are currently performing scheduled system updates to improve performance and security. We will be back online shortly. Thank you for your patience!
        </motion.p>

        {/* Progress bar mock */}
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-xs bg-white/[0.04] border border-white/5 h-2 rounded-full mt-8 overflow-hidden relative"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full w-1/3 rounded-full"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #6366f1)"
            }}
          />
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-white/5 my-12" />

        {/* Social Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <h3 className="text-xs font-bold tracking-wider text-[var(--text-muted)] uppercase mb-6">
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 group"
                style={{
                  background: "rgba(12, 16, 24, 0.4)",
                  borderColor: "rgba(255, 255, 255, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = link.border;
                  e.currentTarget.style.background = link.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.background = "rgba(12, 16, 24, 0.4)";
                }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg border text-white group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.06)"
                  }}
                >
                  {link.icon}
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-semibold text-white">{link.name}</h4>
                  <p className="text-[10px] text-[var(--text-muted)] truncate max-w-[160px]">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
