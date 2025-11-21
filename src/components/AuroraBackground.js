"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/cn";

const AuroraBackground = ({
    children,
    className = "",
    showRadialGradient = true,
}) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 text-white",
                className
            )}
        >
            {showRadialGradient && (
                <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,181,253,0.35),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0,rgba(248,113,113,0.3),transparent_45%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.35),transparent_40%)]" />
                </div>
            )}

            <motion.div
                aria-hidden
                className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/30 blur-[180px]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            />
            <motion.div
                aria-hidden
                className="absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
            />

            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default AuroraBackground;

