"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/cn";

const OrbitingIcon = ({
    children,
    radius = 120,
    duration = 24,
    delay = 0,
    className = "",
    size = 44,
}) => {
    return (
        <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2"
            style={{ width: 0, height: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration, ease: "linear", delay }}
            aria-hidden
        >
            <div
                className={cn(
                    "flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-lg",
                    className
                )}
                style={{
                    width: size,
                    height: size,
                    transform: `translate(-50%, -50%) translateY(-${radius}px)`,
                }}
            >
                {children}
            </div>
        </motion.div>
    );
};

export default OrbitingIcon;

