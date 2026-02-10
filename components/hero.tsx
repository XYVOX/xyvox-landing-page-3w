"use client";

import { motion } from "framer-motion";

function CrystalShard({
  className,
  delay = 0,
  size = "large",
}: {
  className?: string;
  delay?: number;
  size?: "large" | "medium" | "small";
}) {
  const sizes = {
    large: "w-32 h-48 md:w-44 md:h-64",
    medium: "w-20 h-32 md:w-28 md:h-44",
    small: "w-12 h-20 md:w-16 md:h-28",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -14, -6, 0],
          rotate: [0, 1.5, -1, 0],
        }}
        transition={{
          duration: 6 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Crystal body */}
        <div
          className={`${sizes[size]} relative`}
          style={{
            clipPath: "polygon(50% 0%, 85% 25%, 100% 75%, 50% 100%, 0% 75%, 15% 25%)",
          }}
        >
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#c084fc] via-[#8b5cf6] to-[#4c1d95]" />
          {/* Inner refraction facets */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#8b5cf6]/40" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#00dcff]/15 via-transparent to-transparent" />
          {/* Edge highlight */}
          <div
            className="absolute inset-[2px] border border-white/10"
            style={{
              clipPath: "polygon(50% 0%, 85% 25%, 100% 75%, 50% 100%, 0% 75%, 15% 25%)",
            }}
          />
        </div>
        {/* Glow underneath */}
        <div className="absolute -inset-4 bg-[#8b5cf6]/20 blur-2xl rounded-full animate-pulse-glow" />
        <div className="absolute -inset-8 bg-[#8b5cf6]/10 blur-3xl rounded-full" />
      </motion.div>
    </motion.div>
  );
}

function EnergyBolt({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0.3, 0.7, 0] }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
      }}
      className={`absolute ${className}`}
    >
      <div className="w-px h-24 md:h-40 bg-gradient-to-b from-transparent via-[#00dcff] to-transparent opacity-60" />
    </motion.div>
  );
}

function FloatingParticle({ delay = 0, x = 0, y = 0 }: { delay?: number; x?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        y: [y, y - 80],
        x: [x, x + (Math.random() - 0.5) * 40],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute w-1 h-1 rounded-full bg-[#c084fc]"
      style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Deep background radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0.05)_35%,transparent_70%)]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,220,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(192,132,252,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Crystal arrangement */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-2xl h-[500px] md:h-[600px]">
          {/* Main center crystal */}
          <CrystalShard
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            size="large"
            delay={0.2}
          />
          {/* Left crystal */}
          <CrystalShard
            className="left-[10%] md:left-[15%] top-[35%] -translate-y-1/2 z-[5]"
            size="medium"
            delay={0.5}
          />
          {/* Right crystal */}
          <CrystalShard
            className="right-[10%] md:right-[15%] top-[40%] -translate-y-1/2 z-[5]"
            size="medium"
            delay={0.7}
          />
          {/* Small orbiting crystals */}
          <CrystalShard
            className="left-[30%] top-[15%] z-[3]"
            size="small"
            delay={0.9}
          />
          <CrystalShard
            className="right-[25%] bottom-[15%] z-[3]"
            size="small"
            delay={1.1}
          />

          {/* Energy bolts connecting crystals */}
          <EnergyBolt className="left-[35%] top-[30%] rotate-[-30deg]" delay={1} />
          <EnergyBolt className="right-[35%] top-[25%] rotate-[25deg]" delay={2} />
          <EnergyBolt className="left-1/2 top-[20%] -translate-x-1/2" delay={1.5} />

          {/* Floating particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.5}
              x={(Math.random() - 0.5) * 60}
              y={(Math.random() - 0.5) * 40}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Button glow */}
            <div className="absolute -inset-1 bg-[#8b5cf6]/30 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-30" />
    </section>
  );
}
