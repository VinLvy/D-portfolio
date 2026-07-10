"use client";

/**
 * BackgroundCanvas — persistent, multi-layer atmospheric background.
 *
 * Layers (bottom → top):
 *  1. Dot grid (CSS, fixed to viewport)
 *  2. Three radial "orb" gradients that drift slowly via CSS keyframes
 *  3. Noise texture (SVG feTurbulence, ~3% opacity)
 *  4. Edge vignette (radial gradient darkening the periphery)
 *
 * All layers are pointer-events:none and z-index:0.
 * Respects prefers-reduced-motion via globals.css.
 */
export default function BackgroundCanvas() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* ── Layer 1: Dot grid ─────────────────────────────────── */}
      <div
        className="absolute inset-0 dot-grid"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)",
        }}
      />

      {/* ── Layer 2a: Blue orb — upper right ─────────────────── */}
      <div
        className="absolute rounded-full"
        style={{
          top:        "-18%",
          right:      "-8%",
          width:      "700px",
          height:     "700px",
          background: "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 65%)",
          filter:     "blur(48px)",
          animation:  "orbFloat1 24s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Layer 2b: Indigo orb — lower left ────────────────── */}
      <div
        className="absolute rounded-full"
        style={{
          bottom:     "-18%",
          left:       "-8%",
          width:      "600px",
          height:     "600px",
          background: "radial-gradient(circle, rgba(99,102,241,0.11) 0%, transparent 65%)",
          filter:     "blur(64px)",
          animation:  "orbFloat2 30s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Layer 2c: Cyan orb — center-right (very subtle) ──── */}
      <div
        className="absolute rounded-full"
        style={{
          top:        "40%",
          right:      "20%",
          width:      "360px",
          height:     "360px",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
          filter:     "blur(80px)",
          animation:  "orbFloat3 38s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Layer 3: Noise texture (SVG feTurbulence) ────────── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.028 }}
      >
        <filter id="bg-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bg-noise)" />
      </svg>

      {/* ── Layer 4: Edge vignette ────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 45%, rgba(7,9,15,0.80) 100%)",
        }}
      />
    </div>
  );
}
