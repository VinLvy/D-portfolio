"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CursorBlur — a soft radial glow that trails the cursor using
 * spring physics for a premium, weighted feel.
 */
export default function CursorBlur() {
  const cursorX = useMotionValue(-600);
  const cursorY = useMotionValue(-600);

  const springX = useSpring(cursorX, { stiffness: 70, damping: 22, restDelta: 0.001 });
  const springY = useSpring(cursorY, { stiffness: 70, damping: 22, restDelta: 0.001 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed rounded-full pointer-events-none"
      style={{
        zIndex: 1,
        width:  460,
        height: 460,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
}