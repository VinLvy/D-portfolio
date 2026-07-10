"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MoveLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Subtle glow background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle 350px at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 80%), radial-gradient(circle 250px at 30% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full">
        {/* Floating animated icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
          style={{
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          <HelpCircle size={40} className="text-indigo-400 animate-pulse" />
        </motion.div>

        {/* 404 Code */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-9xl font-black tracking-tighter select-none"
          style={{
            background: "linear-gradient(135deg, #e6edf3 30%, #7d8a99 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold tracking-tight mt-2 text-white"
        >
          Lost in Space
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-[var(--text-muted)] mt-4 leading-relaxed"
        >
          The page you are looking for has been moved, deleted, or never existed. Let&apos;s get you back on track.
        </motion.p>

        {/* Interactive Mock Code Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mt-8 p-4 rounded-xl border border-white/5 bg-[#0a0d14]/80 text-left font-mono text-xs text-indigo-300 shadow-xl"
        >
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] text-white/30 ml-2">lost_route.js</span>
          </div>
          <div>
            <span className="text-gray-500">1</span> <span className="text-pink-400">const</span> <span className="text-blue-300">lostPath</span> = <span className="text-yellow-200">&apos;{pathname}&apos;</span>;
          </div>
          <div>
            <span className="text-gray-500">2</span> <span className="text-pink-400">if</span> (<span className="text-blue-300">isNotValid</span>(<span className="text-blue-300">lostPath</span>)) &#123;
          </div>
          <div>
            <span className="text-gray-500">3</span>   <span className="text-pink-400">throw</span> <span className="text-pink-400">new</span> <span className="text-emerald-300">Error</span>(<span className="text-green-300">&quot;Page vanished into the void&quot;</span>);
          </div>
          <div>
            <span className="text-gray-500">4</span> &#125;
          </div>
        </motion.div>

        {/* Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
              boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              color: "#fff",
            }}
          >
            <MoveLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
