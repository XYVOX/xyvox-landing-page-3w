"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, BarChart3, Cpu } from "lucide-react";

const projects = [
  {
    title: "XYVOX Spreads",
    subtitle: "HF Arbitrage Scanner",
    description:
      "Ultra-low-latency spread detection engine built on Java and Redis. Identifies cross-exchange arbitrage opportunities in microseconds with real-time order book analysis and predictive modeling.",
    icon: Activity,
    gradient: "from-[#8b5cf6] to-[#6d28d9]",
    tag: "Live",
  },
  {
    title: "XYVOX Memes",
    subtitle: "On-chain Tracker",
    description:
      "Deep analytics for Solana and Base meme token ecosystems. Tracks wallet clusters, token creation patterns, and liquidity flows with sub-second on-chain data indexing.",
    icon: BarChart3,
    gradient: "from-[#a78bfa] to-[#8b5cf6]",
    tag: "Beta",
  },
  {
    title: "XYVOX Core",
    subtitle: "Trading Engine Prototype",
    description:
      "Foundational event-driven architecture powering the entire XYVOX ecosystem. Built for horizontal scaling with Spring Boot microservices, Docker orchestration, and Redis pub/sub messaging.",
    icon: Cpu,
    gradient: "from-[#7c3aed] to-[#4c1d95]",
    tag: "Alpha",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.95 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      {/* Card outer glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#8b5cf6]/0 via-[#8b5cf6]/0 to-[#8b5cf6]/0 group-hover:from-[#8b5cf6]/40 group-hover:via-[#8b5cf6]/20 group-hover:to-[#00dcff]/30 transition-all duration-500 blur-sm" />

      {/* Card body */}
      <div className="relative rounded-2xl crystal-border p-px overflow-hidden group-hover:border-[#8b5cf6]/50 transition-colors duration-500">
        <div className="relative rounded-2xl bg-[#050508] p-6 md:p-8 h-full overflow-hidden">
          {/* Background internal glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/0 to-[#8b5cf6]/0 group-hover:from-[#8b5cf6]/[0.06] group-hover:to-transparent transition-all duration-500" />

          {/* Top row */}
          <div className="relative flex items-start justify-between mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
              <Icon size={22} className="text-white" />
            </div>
            <span className="px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase text-[#8b5cf6] border border-[#8b5cf6]/30 rounded-full bg-[#8b5cf6]/10">
              {project.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="relative font-heading text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-glow-violet transition-all duration-300">
            {project.title}
          </h3>
          <p className="relative font-heading text-sm text-[#00dcff] tracking-wide mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="relative text-sm md:text-base text-[#7878a0] leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Placeholder media area */}
          <div className="relative mt-6 rounded-xl overflow-hidden border border-[#8b5cf6]/10 bg-[#08080f] group-hover:border-[#8b5cf6]/25 transition-colors duration-500">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${project.gradient} opacity-30 flex items-center justify-center mb-3`}>
                  <Icon size={20} className="text-white/60" />
                </div>
                <p className="text-xs text-[#5a5a7a] font-sans">Interface Preview</p>
              </div>
            </div>
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/0 to-transparent group-hover:via-[#8b5cf6]/40 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}

export function Ecosystem() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="ecosystem" className="relative py-24 md:py-32 bg-[#000000]">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-[#8b5cf6] mb-4">
            The Ecosystem
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-b from-white to-[#a0a0b8] bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
