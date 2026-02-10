"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, BarChart3, Cpu, Layers } from "lucide-react";

const projects = [
  {
    title: "XYVOX Spreads",
    subtitle: "HF Arbitrage Scanner",
    description:
        "A production-grade arbitrage detection engine. It aggregates real-time order book data from 6+ CEXs to identify and execute spread opportunities with sub-millisecond latency.",
    icon: Activity,
    gradient: "from-[#8b5cf6] to-[#6d28d9]",
    tag: "Production",
    image: "/projects/spreads.jpg", // Путь к картинке в папке public
  },
  {
    title: "XYVOX Memes",
    subtitle: "On-Chain Analytics",
    description:
        "An advanced ingestion pipeline designed for the Solana ecosystem. It utilizes high-throughput indexing to track wallet clusters, liquidity flows, and token creation events, providing institutional-grade insights for volatile assets.",
    icon: BarChart3,
    gradient: "from-[#a78bfa] to-[#8b5cf6]",
    tag: "Development",
    image: "/projects/memes.jpg",
  },
  {
    title: "XYVOX Core",
    subtitle: "Legacy Trading Engine",
    description:
        "The foundational prototype that validated the ecosystem's business logic. Features a monolithic architecture for order matching and risk management, which served as the blueprint for the current microservices migration.",
    icon: Layers,
    gradient: "from-[#7c3aed] to-[#4c1d95]",
    tag: "Prototype",
    image: "/projects/core.jpg",
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
          className="group relative flex flex-col h-full"
      >
        {/* Card outer glow on hover */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#8b5cf6]/0 via-[#8b5cf6]/0 to-[#8b5cf6]/0 group-hover:from-[#8b5cf6]/40 group-hover:via-[#8b5cf6]/20 group-hover:to-[#00dcff]/30 transition-all duration-500 blur-sm" />

        {/* Card body */}
        <div className="relative flex flex-col h-full rounded-2xl crystal-border p-px overflow-hidden group-hover:border-[#8b5cf6]/50 transition-colors duration-500">
          <div className="relative flex flex-col h-full rounded-2xl bg-[#050508] p-6 md:p-8 overflow-hidden">

            {/* Background internal glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/0 to-[#8b5cf6]/0 group-hover:from-[#8b5cf6]/[0.06] group-hover:to-transparent transition-all duration-500" />

            {/* Top row */}
            <div className="relative flex items-start justify-between mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg shadow-purple-900/20`}>
                <Icon size={22} className="text-white" />
              </div>
              <span className="px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase text-[#8b5cf6] border border-[#8b5cf6]/30 rounded-full bg-[#8b5cf6]/10 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
              {project.tag}
            </span>
            </div>

            {/* Title */}
            <h3 className="relative font-heading text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#a78bfa] transition-all duration-300">
              {project.title}
            </h3>
            <p className="relative font-heading text-sm text-[#00dcff] tracking-wide mb-4 opacity-80">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="relative text-sm text-[#9ca3af] leading-relaxed font-sans mb-6 flex-grow">
              {project.description}
            </p>

            {/* Image Area (Media) */}
            <div className="relative w-full rounded-xl overflow-hidden border border-[#8b5cf6]/10 bg-[#08080f] group-hover:border-[#8b5cf6]/30 transition-colors duration-500 mt-auto">
              <div className="aspect-video w-full relative">
                {/* Тут логика: если картинка есть - показываем, нет - показываем заглушку */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      // Fallback if image not found (прячем картинку, показываем иконку)
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                />

                {/* Fallback Placeholder (Hidden by default if image loads) */}
                <div className="hidden absolute inset-0 flex flex-col items-center justify-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center mb-2`}>
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <p className="text-xs text-[#5a5a7a]">Preview Unavailable</p>
                </div>

                {/* Scanline overlay effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,23,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-40 mix-blend-overlay"></div>

                {/* Violet tint on hover */}
                <div className="absolute inset-0 bg-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
  );
}

export function Ecosystem() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
      <section id="ecosystem" className="relative py-24 md:py-32 bg-[#000000] overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Section heading */}
          <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16 md:mb-20"
          >
            <p className="font-heading text-xs tracking-[0.3em] uppercase text-[#8b5cf6] mb-4 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
              Product Lineup
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-b from-white to-[#a0a0b8] bg-clip-text text-transparent drop-shadow-sm">
              The XYVOX Ecosystem
            </span>
            </h2>
            <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-50" />
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