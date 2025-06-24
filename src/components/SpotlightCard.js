"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import "./SpotlightCard.css";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  ...rest // ini penting agar props tambahan seperti animate, initial masuk
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
      {...rest} // biar bisa kasih initial, animate, transition dll
    >
      {children}
    </motion.div>
  );
};

export default SpotlightCard;
