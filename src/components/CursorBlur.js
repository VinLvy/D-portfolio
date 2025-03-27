"use client";

import { useEffect, useState } from "react";

export default function CursorBlur() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <div
        className="absolute w-60 h-60 bg-blue-500/30 blur-3xl rounded-full transition-transform duration-10"
        style={{
          transform: `translate(${position.x - 120}px, ${position.y - 120}px)`,
        }}
      />
    </div>
  );
}
