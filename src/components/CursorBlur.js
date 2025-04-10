"use client";

import { useEffect, useState } from "react";

export default function CursorBlur() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <div
        className="absolute w-100 h-100 bg-blue-500/30 blur-3xl rounded-full transition-transform duration-10"
        style={{
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        }}
      />
    </div>
  );
}

// INVISIBLE CURSOR BLUR

// "use client";

// import { useEffect, useState, useRef } from "react";

// export default function CursorBlur() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const timeoutRef = useRef(null); // Gunakan useRef untuk menyimpan timeout ID

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setIsVisible(true);

//       // Bersihkan timeout sebelumnya
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);

//       // Set timeout baru untuk menyembunyikan efek blur setelah 1.5 detik
//       timeoutRef.current = setTimeout(() => setIsVisible(false), 1500);
//     };

//     const handleMouseLeave = () => setIsVisible(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   return (
//     <div
//       className="fixed top-0 left-0 w-full h-full pointer-events-none"
//       style={{ zIndex: -1 }}
//     >
//       <div
//         className={`absolute w-100 h-100 bg-blue-500/30 blur-3xl rounded-full transition-opacity duration-300 ${
//           isVisible ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
//         }}
//       />
//     </div>
//   );
// }