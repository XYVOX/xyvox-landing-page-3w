"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="relative py-12 bg-[#000000]">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] rotate-45 rounded-sm" />
            <span className="font-heading text-sm font-bold tracking-wider text-[#6a6a8a]">
              XYVOX
            </span>
            <span className="text-[#3a3a5a] text-sm font-sans">
              &copy; 2026
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[#1a1a2e] bg-[#08080f] text-[#5a5a7a] hover:text-white hover:border-[#8b5cf6]/40 hover:bg-[#0c0c18] transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[#1a1a2e] bg-[#08080f] text-[#5a5a7a] hover:text-white hover:border-[#8b5cf6]/40 hover:bg-[#0c0c18] transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />
        </div>
      </motion.div>
    </footer>
  );
}
