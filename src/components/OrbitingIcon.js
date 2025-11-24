"use client";

import { cn } from "../lib/cn";

const OrbitingIcon = ({
    children,
    radius = 120,
    angle = 0,
    className = "",
    size = 44,
}) => {
    return (
        <div
            className="pointer-events-none absolute left-1/2 top-1/2"
            style={{ width: 0, height: 0 }}
            aria-hidden
        >
            <div
                style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
            >
                <div
                    className={cn(
                        "flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-lg",
                        className
                    )}
                    style={{
                        width: size,
                        height: size,
                        transform: `translateY(-${radius}px) rotate(${-angle}deg)`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OrbitingIcon;

