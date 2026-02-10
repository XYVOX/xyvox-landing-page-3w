"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "Java", color: "#ED8B00" },
  { name: "Spring Boot", color: "#6DB33F" },
  { name: "Redis", color: "#DC382D" },
  { name: "Docker", color: "#2496ED" },
  { name: "React", color: "#61DAFB" },
  { name: "Solana", color: "#9945FF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "PostgreSQL", color: "#4169E1" },
];

function TechIcon({ tech, index }: { tech: (typeof technologies)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col items-center gap-3"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-[#1a1a2e] bg-[#08080f] flex items-center justify-center transition-all duration-500 group-hover:border-[#8b5cf6]/40 group-hover:bg-[#0c0c18] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
        {/* Tech letter as icon */}
        <span
          className="font-heading text-2xl font-bold text-[#4a4a6a] transition-all duration-500 group-hover:text-white"
          style={{
            textShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = tech.color;
            e.currentTarget.style.textShadow = `0 0 15px ${tech.color}60, 0 0 30px ${tech.color}30`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          {tech.name.charAt(0)}
        </span>
        {/* Glow ring on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 15px ${tech.color}10`,
          }}
        />
      </div>
      <span className="text-xs font-sans text-[#5a5a7a] group-hover:text-[#a0a0b8] transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
}

export function TechStack() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="relative py-24 md:py-32 bg-[#000000]">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-[#8b5cf6] mb-4">
            Infrastructure
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-b from-white to-[#a0a0b8] bg-clip-text text-transparent">
              Powered by Deep Tech
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <TechIcon key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Marquee - continuous scrolling strip */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000000] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000000] to-transparent z-10" />
          <div className="animate-marquee flex gap-8 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="inline-block px-4 py-2 text-xs font-heading tracking-wider uppercase text-[#3a3a5a] border border-[#1a1a2e] rounded-full bg-[#05050a]"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
