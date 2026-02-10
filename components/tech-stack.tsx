"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const capabilities = [
  {
    label: "Low-Latency Execution",
    description: "Sub-millisecond order routing with optimized execution paths",
    // Octahedron / diamond shape
    paths: [
      "M60 10 L110 60 L60 110 L10 60 Z",
      "M60 10 L60 110",
      "M10 60 L110 60",
      "M60 10 L10 60 L60 60 Z",
      "M60 10 L110 60 L60 60 Z",
    ],
  },
  {
    label: "Event-Driven Architecture",
    description: "Reactive event streams with backpressure-aware processing",
    // Pentagon prism
    paths: [
      "M60 8 L108 38 L95 98 L25 98 L12 38 Z",
      "M60 8 L60 55",
      "M108 38 L60 55",
      "M95 98 L60 55",
      "M25 98 L60 55",
      "M12 38 L60 55",
    ],
  },
  {
    label: "Solana Interoperability",
    description: "Native RPC adapters with cross-chain state synchronization",
    // Hexagonal crystal
    paths: [
      "M60 5 L105 30 L105 80 L60 105 L15 80 L15 30 Z",
      "M60 5 L60 105",
      "M105 30 L15 80",
      "M15 30 L105 80",
    ],
  },
  {
    label: "gRPC Streaming",
    description: "Bi-directional streams with protocol buffer serialization",
    // Double triangle / Star of David
    paths: [
      "M60 8 L108 90 L12 90 Z",
      "M60 102 L12 30 L108 30 Z",
      "M60 8 L60 102",
    ],
  },
  {
    label: "High-Throughput Data",
    description: "Parallel pipeline processing at 10M+ events per second",
    // Cube wireframe
    paths: [
      "M25 30 L85 30 L85 90 L25 90 Z",
      "M40 15 L100 15 L100 75 L40 75 Z",
      "M25 30 L40 15",
      "M85 30 L100 15",
      "M85 90 L100 75",
      "M25 90 L40 75",
    ],
  },
  {
    label: "Zero-Copy Networking",
    description: "Kernel-bypass I/O with memory-mapped buffer rings",
    // Triangular prism
    paths: [
      "M60 10 L110 95 L10 95 Z",
      "M60 10 L75 25 L110 95",
      "M60 10 L45 25 L10 95",
      "M10 95 L45 25 L75 25 L110 95",
    ],
  },
  {
    label: "Distributed Consensus",
    description: "Byzantine fault-tolerant agreement across validator nodes",
    // Icosahedron-like
    paths: [
      "M60 5 L110 35 L100 85 L20 85 L10 35 Z",
      "M60 5 L20 85",
      "M60 5 L100 85",
      "M10 35 L100 85",
      "M110 35 L20 85",
      "M60 55 L10 35",
      "M60 55 L110 35",
      "M60 55 L20 85",
      "M60 55 L100 85",
      "M60 55 L60 5",
    ],
  },
  {
    label: "Real-Time Aggregation",
    description: "Windowed VWAP computation with incremental state updates",
    // Rhombus lattice
    paths: [
      "M60 5 L115 55 L60 105 L5 55 Z",
      "M35 30 L85 30 L85 80 L35 80 Z",
      "M60 5 L35 30",
      "M60 5 L85 30",
      "M115 55 L85 30",
      "M115 55 L85 80",
      "M60 105 L85 80",
      "M60 105 L35 80",
      "M5 55 L35 80",
      "M5 55 L35 30",
    ],
  },
];

function CrystalNode({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Calculate total stroke length for draw animation
  const strokeDashLength = 400;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Crystal SVG container */}
        <div
          className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px]"
          style={{ perspective: "600px" }}
        >
          {/* Glow backdrop when hovered */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.2 : 0.8,
            }}
            transition={{ duration: 0.5 }}
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)",
              filter: "blur(15px)",
            }}
          />

          {/* Rotating 3D wireframe */}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotateY: isHovered ? 15 : 0,
              rotateX: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <svg
              viewBox="0 0 120 110"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Inner glow core */}
              <defs>
                <radialGradient id={`core-glow-${index}`} cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    stopColor={isHovered ? "#c4b5fd" : "#8b5cf6"}
                    stopOpacity={isHovered ? 0.8 : 0.3}
                  />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity={isHovered ? 0.3 : 0.08} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </radialGradient>
                <filter id={`glow-${index}`}>
                  <feGaussianBlur stdDeviation={isHovered ? "3" : "1.5"} result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Core glow circle */}
              <motion.circle
                cx="60"
                cy="55"
                r={isHovered ? 14 : 8}
                fill={`url(#core-glow-${index})`}
                animate={{
                  opacity: isHovered ? 1 : 0.6,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Bright center dot */}
              <motion.circle
                cx="60"
                cy="55"
                animate={{
                  r: isHovered ? 3 : 1.5,
                  opacity: isHovered ? 1 : 0.5,
                }}
                transition={{ duration: 0.4 }}
                fill={isHovered ? "#e9d5ff" : "#a78bfa"}
              />

              {/* Wireframe paths */}
              {capability.paths.map((d, i) => (
                <motion.path
                  key={`${capability.label}-path-${i}`}
                  d={d}
                  stroke={isHovered ? "#a78bfa" : "#8b5cf6"}
                  strokeWidth={isHovered ? 1.2 : 0.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter={isHovered ? `url(#glow-${index})` : undefined}
                  initial={{
                    strokeDasharray: strokeDashLength,
                    strokeDashoffset: strokeDashLength,
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          strokeDashoffset: 0,
                          opacity: isHovered ? 1 : 0.5,
                        }
                      : {
                          strokeDashoffset: strokeDashLength,
                          opacity: 0,
                        }
                  }
                  transition={{
                    strokeDashoffset: {
                      duration: 1.5,
                      delay: index * 0.1 + i * 0.12,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.4 },
                  }}
                />
              ))}

              {/* Vertex dots */}
              {capability.paths[0]
                .split(/[MLZ]/)
                .filter(Boolean)
                .map((point, vi) => {
                  const coords = point.trim().split(" ");
                  if (coords.length < 2) return null;
                  return (
                    <motion.circle
                      key={`vertex-${capability.label}-${vi}`}
                      cx={coords[0]}
                      cy={coords[1]}
                      r={isHovered ? 2 : 1}
                      fill={isHovered ? "#c4b5fd" : "#7c3aed"}
                      initial={{ opacity: 0 }}
                      animate={
                        isInView
                          ? { opacity: isHovered ? 0.9 : 0.4 }
                          : { opacity: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + vi * 0.1 + 0.8,
                      }}
                    />
                  );
                })}
            </svg>
          </motion.div>
        </div>

        {/* Label */}
        <div className="text-center">
          <motion.p
            className="font-heading text-sm md:text-base font-semibold tracking-wide transition-colors duration-300"
            style={{
              color: isHovered ? "#e9d5ff" : "#8a8aaf",
            }}
          >
            {capability.label}
          </motion.p>

          {/* Description - appears on hover */}
          <motion.p
            className="mt-2 text-xs font-sans max-w-[200px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 5, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 5,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ color: "#6a6a8e" }}
          >
            {capability.description}
          </motion.p>
        </div>
      </div>

      {/* Pulse ring on hover */}
      <motion.div
        className="absolute top-[70px] md:top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        animate={{
          width: isHovered ? 180 : 0,
          height: isHovered ? 180 : 0,
          opacity: isHovered ? [0.4, 0] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          ease: "easeOut",
        }}
        style={{
          border: "1px solid rgba(139, 92, 246, 0.3)",
        }}
      />
    </motion.div>
  );
}

export function TechStack() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="relative py-24 md:py-36 bg-[#000000] overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />

      {/* Subtle grid pattern in background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-[#8b5cf6] mb-4">
            Architecture
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-b from-white to-[#a0a0b8] bg-clip-text text-transparent">
              Crystalline Infrastructure
            </span>
          </h2>
          <p className="mt-4 font-sans text-sm text-[#5a5a7a] max-w-lg mx-auto leading-relaxed">
            Eight core subsystems engineered for deterministic performance at the
            protocol layer
          </p>
          <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
        </motion.div>

        {/* Crystal grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {capabilities.map((cap, index) => (
            <CrystalNode key={cap.label} capability={cap} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
