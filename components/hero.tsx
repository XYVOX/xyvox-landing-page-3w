"use client";

import { motion } from "framer-motion";
import React from "react";

/* ─── SVG Wireframe Crystal ─── */
function WireframeCrystal({
  className,
  delay = 0,
  width = 120,
  height = 200,
  color = "#8b5cf6",
  accentColor = "#00dcff",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  color?: string;
  accentColor?: string;
}) {
  // Crystal geometry: sharp hexagonal prism with pointed top and bottom
  const cx = width / 2;
  const topTip = height * 0.0;
  const botTip = height * 1.0;
  const upperY = height * 0.28;
  const lowerY = height * 0.72;
  const leftX = width * 0.05;
  const rightX = width * 0.95;
  const midLeftX = width * 0.18;
  const midRightX = width * 0.82;

  // Outer silhouette points (sharp crystal outline)
  const outline = `
    M ${cx} ${topTip}
    L ${rightX} ${upperY}
    L ${midRightX} ${lowerY}
    L ${cx} ${botTip}
    L ${midLeftX} ${lowerY}
    L ${leftX} ${upperY}
    Z
  `;

  // Internal facet lines for crystalline refraction look
  const facets = [
    // Top-to-upper edges
    `M ${cx} ${topTip} L ${cx} ${botTip}`,
    // Upper horizontal edge
    `M ${leftX} ${upperY} L ${rightX} ${upperY}`,
    // Lower horizontal edge
    `M ${midLeftX} ${lowerY} L ${midRightX} ${lowerY}`,
    // Left diagonal facets
    `M ${cx} ${topTip} L ${midLeftX} ${lowerY}`,
    `M ${cx} ${topTip} L ${midRightX} ${lowerY}`,
    // Cross facets from upper corners to opposite lower corners
    `M ${leftX} ${upperY} L ${midRightX} ${lowerY}`,
    `M ${rightX} ${upperY} L ${midLeftX} ${lowerY}`,
    // Bottom facets
    `M ${leftX} ${upperY} L ${cx} ${botTip}`,
    `M ${rightX} ${upperY} L ${cx} ${botTip}`,
  ];

  // Vertex dot positions
  const vertices = [
    { x: cx, y: topTip },
    { x: rightX, y: upperY },
    { x: midRightX, y: lowerY },
    { x: cx, y: botTip },
    { x: midLeftX, y: lowerY },
    { x: leftX, y: upperY },
  ];

  const totalLen = 800;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -16, -8, 0],
          rotate: [0, 1.5, -1, 0],
        }}
        transition={{
          duration: 7 + delay * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative"
        style={{ width, height }}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          className="absolute inset-0"
        >
          <defs>
            {/* Radial glow at crystal center */}
            <radialGradient id={`core-glow-${delay}`} cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="60%" stopColor={color} stopOpacity="0.08" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
            {/* Sharper accent glow */}
            <radialGradient id={`accent-glow-${delay}`} cx="50%" cy="30%" r="35%">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.15" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
            </radialGradient>
            <filter id={`edge-glow-${delay}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Inner glow fill */}
          <path d={outline} fill={`url(#core-glow-${delay})`} />
          <path d={outline} fill={`url(#accent-glow-${delay})`} />

          {/* Main outline with draw-on animation */}
          <motion.path
            d={outline}
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="bevel"
            fill="none"
            filter={`url(#edge-glow-${delay})`}
            initial={{ strokeDasharray: totalLen, strokeDashoffset: totalLen }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, delay: delay + 0.3, ease: "easeInOut" }}
          />

          {/* Secondary outline for glow thickness */}
          <motion.path
            d={outline}
            stroke={color}
            strokeWidth="0.5"
            strokeLinejoin="bevel"
            fill="none"
            opacity="0.4"
            initial={{ strokeDasharray: totalLen, strokeDashoffset: totalLen }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.2, delay: delay + 0.5, ease: "easeInOut" }}
          />

          {/* Internal facet lines - draw on staggered */}
          {facets.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke={i % 2 === 0 ? color : accentColor}
              strokeWidth="0.6"
              strokeLinejoin="bevel"
              fill="none"
              opacity={i % 2 === 0 ? 0.35 : 0.2}
              initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 1.5,
                delay: delay + 0.8 + i * 0.12,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Vertex dots */}
          {vertices.map((v, i) => (
            <motion.circle
              key={i}
              cx={v.x}
              cy={v.y}
              r="2"
              fill={i % 2 === 0 ? color : accentColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.6], scale: 1 }}
              transition={{
                duration: 0.6,
                delay: delay + 1.2 + i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Pulsing energy at the core */}
          <motion.circle
            cx={cx}
            cy={height / 2}
            r="4"
            fill="white"
            opacity="0.6"
            animate={{
              r: [3, 6, 3],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              delay: delay + 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx={cx}
            cy={height / 2}
            r="10"
            fill={color}
            opacity="0.15"
            animate={{
              r: [8, 16, 8],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 3,
              delay: delay + 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Ambient blur beneath */}
        <div
          className="absolute rounded-full blur-2xl animate-pulse-glow"
          style={{
            width: width * 0.6,
            height: height * 0.3,
            left: width * 0.2,
            top: height * 0.35,
            background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Energy Connection Lines ─── */
function EnergyLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
}: {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  delay?: number;
}) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0.2, 0.4, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      }}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#00dcff"
        strokeWidth="0.5"
        strokeDasharray="6 8"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-40"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </motion.svg>
  );
}

/* ─── Floating Particle ─── */
function FloatingParticle({
  delay = 0,
  x = 0,
  y = 0,
}: {
  delay?: number;
  x?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        y: [y, y - 90],
        x: [x, x + (Math.random() - 0.5) * 50],
      }}
      transition={{
        duration: 4.5,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
      }}
      className="absolute w-[2px] h-[2px] rounded-full bg-[#c084fc]"
      style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
    />
  );
}

export function Hero() {

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Deep background radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(139,92,246,0.04)_35%,transparent_70%)]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,220,255,0.05)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(192,132,252,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Crystal formation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-3xl h-[500px] md:h-[650px]">
          {/* Central large crystal */}
          <WireframeCrystal
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            width={140}
            height={240}
            delay={0.2}
            color="#8b5cf6"
            accentColor="#00dcff"
          />

          {/* Left crystal */}
          <WireframeCrystal
            className="left-[8%] md:left-[14%] top-[32%] -translate-y-1/2 z-[5]"
            width={90}
            height={155}
            delay={0.5}
            color="#a78bfa"
            accentColor="#8b5cf6"
          />

          {/* Right crystal */}
          <WireframeCrystal
            className="right-[8%] md:right-[14%] top-[38%] -translate-y-1/2 z-[5]"
            width={95}
            height={160}
            delay={0.7}
            color="#7c3aed"
            accentColor="#00dcff"
          />

          {/* Upper-left small crystal */}
          <WireframeCrystal
            className="left-[28%] top-[10%] z-[3]"
            width={50}
            height={85}
            delay={0.9}
            color="#c084fc"
            accentColor="#a78bfa"
          />

          {/* Lower-right small crystal */}
          <WireframeCrystal
            className="right-[22%] bottom-[8%] z-[3]"
            width={55}
            height={90}
            delay={1.1}
            color="#c084fc"
            accentColor="#00dcff"
          />

          {/* Tiny accent crystal */}
          <WireframeCrystal
            className="left-[42%] bottom-[5%] z-[2]"
            width={35}
            height={60}
            delay={1.3}
            color="#a78bfa"
            accentColor="#8b5cf6"
          />

          {/* Energy connection lines between crystals */}
          <EnergyLine x1="38%" y1="28%" x2="50%" y2="42%" delay={1.5} />
          <EnergyLine x1="62%" y1="30%" x2="50%" y2="42%" delay={2.5} />
          <EnergyLine x1="50%" y1="58%" x2="58%" y2="80%" delay={3.5} />

          {/* Floating particles */}
          {mounted && Array.from({ length: 16 }).map((_, i) => (
              <FloatingParticle
                  key={i}
                  delay={i * 0.4}
                  x={(Math.random() - 0.5) * 70}
                  y={(Math.random() - 0.5) * 50}
              />
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-[#00dcff] mb-6 text-glow-cyan">
            High-Frequency Trading Ecosystem
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
        >
          <span className="bg-gradient-to-b from-white via-[#e0d4fc] to-[#8b5cf6] bg-clip-text text-transparent text-glow-violet">
            The Convergence of
          </span>
          <br />
          <span className="bg-gradient-to-b from-[#c084fc] via-[#8b5cf6] to-[#6d28d9] bg-clip-text text-transparent">
            Crypto Intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-base md:text-lg text-[#8888a8] max-w-2xl mx-auto leading-relaxed font-sans"
        >
          High-frequency arbitrage ecosystem and on-chain analytics powered by
          event-driven architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10"
        >
          <a
            href="#ecosystem"
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-heading text-sm font-semibold tracking-wide text-white rounded-xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] group-hover:from-[#8b5cf6] group-hover:via-[#8b5cf6] group-hover:to-[#00dcff] transition-all duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
            <span className="relative z-10">Explore the Ecosystem</span>
            <svg
              className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute -inset-1 bg-[#8b5cf6]/30 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-30" />
    </section>
  );
}
