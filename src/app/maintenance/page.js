"use client";

import { motion } from "framer-motion";
import { Terminal, Github, Mail, ArrowUpRight } from "lucide-react";

const CONTACT_LINKS = [
  {
    name: "GITHUB",
    handle: "VinLvy",
    link: "https://github.com/VinLvy",
    icon: Github,
  },
  {
    name: "DIRECT_EMAIL",
    handle: "davinfibrian@gmail.com",
    link: "mailto:davinfibrian@gmail.com",
    icon: Mail,
  },
];

export default function Maintenance() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-8 py-20 text-center font-mono">
      <div className="max-w-lg w-full bg-[#1c1b1b] border border-[#222222] p-8 space-y-6 text-left">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#222222] text-xs text-[#888888]">
          <div className="flex items-center gap-1.5 text-[#00FF41]">
            <Terminal size={14} />
            <span>SYSTEM_UPGRADE // IN_PROGRESS</span>
          </div>
          <span>MAINT_MODE</span>
        </div>

        {/* Heading */}
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#e5e2e1]">
            UNDER MAINTENANCE.
          </div>
          <div className="text-xs text-[#00FF41]">
            [ SCHEDULED SYSTEM KERNEL &amp; PIPELINE UPGRADE ]
          </div>
        </div>

        {/* Progress Display */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-[#888888]">
            <span>SYSTEM_MIGRATION</span>
            <span className="text-[#00FF41]">95% COMPLETE</span>
          </div>
          <div className="w-full bg-[#0e0e0e] border border-[#222222] h-2 relative overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "95%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full bg-[#00FF41]"
            />
          </div>
        </div>

        <p className="text-xs text-[#888888] leading-relaxed">
          The node is currently undergoing scheduled infrastructure updates to optimize response times 
          and verification pipelines. Systems will resume normal operation shortly.
        </p>

        {/* Contact Links */}
        <div className="pt-4 border-t border-[#222222] space-y-3">
          <div className="text-[10px] text-[#555555] uppercase tracking-wider">
            [ EMERGENCY_TRANSMISSION_CHANNELS ]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.link}
                  target={link.name !== "DIRECT_EMAIL" ? "_blank" : undefined}
                  rel={link.name !== "DIRECT_EMAIL" ? "noopener noreferrer" : undefined}
                  className="p-3 bg-[#0e0e0e] border border-[#222222] hover:border-[#00FF41] hover:text-[#00FF41] transition-all flex items-center justify-between text-xs text-[#888888]"
                >
                  <div className="flex items-center gap-2">
                    <Icon size={14} className="text-[#00FF41]" />
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight size={13} />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
