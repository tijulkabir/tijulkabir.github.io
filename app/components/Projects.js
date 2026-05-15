"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Echo",
    tag: "P2P Communication",
    description: "A decentralized peer-to-peer messaging platform with end-to-end encryption. Built with a custom protocol layer for direct device communication without centralized servers.",
    highlights: ["P2P Architecture — No central server dependency", "Kotlin backend + Flutter cross-platform UI", "Custom encryption protocol for message security", "NAT traversal & hole-punching for direct connections"],
    stack: ["Kotlin", "Flutter", "WebSocket", "Crypto"],
    color: "#00FF41",
    status: "In Development",
    icon: "◉",
  },
  {
    title: "NetForge",
    tag: "Network Security Tool",
    description: "An advanced network reconnaissance and security testing toolkit. Features a unique 'Stealth Calculator' mode that disguises the tool interface as a standard calculator app.",
    highlights: ["Stealth Calculator mode for covert operation", "Network scanning & vulnerability detection", "Built with memory-safe Rust core", "Custom packet crafting & analysis engine"],
    stack: ["Rust", "Python", "Scapy", "TUI"],
    color: "#3b82f6",
    status: "Active",
    icon: "⬡",
  },
  {
    title: "Secure Vault",
    tag: "Encryption System",
    description: "A file encryption system implementing custom XOR-based cipher with multi-layer key derivation. Designed for secure local storage of sensitive files and credentials.",
    highlights: ["Custom XOR encryption implementation", "Multi-layer key derivation function", "Secure file shredding on deletion", "CLI + GUI interface options"],
    stack: ["Python", "Crypto", "Tkinter", "CLI"],
    color: "#a855f7",
    status: "Released",
    icon: "◈",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-mono text-[#00FF41] text-sm tracking-widest">03. </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Project Exploits</h2>
          <div className="gradient-line mt-4 w-32" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onMouseEnter={() => setActive(i)}
              className={`relative bg-[#111] border rounded-lg overflow-hidden card-hover group cursor-pointer transition-all duration-500 ${active === i ? "border-opacity-50" : "border-[#2a2a2a]"}`}
              style={{ borderColor: active === i ? proj.color : undefined, boxShadow: active === i ? `0 0 30px ${proj.color}20, 0 0 60px ${proj.color}10` : "none" }}
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${proj.color}, transparent)` }} />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg" style={{ color: proj.color }}>{proj.icon}</span>
                      <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-[#666]">{proj.tag}</span>
                  </div>
                  <span className="font-mono text-xs px-2 py-1 rounded border" style={{ color: proj.color, borderColor: `${proj.color}30`, background: `${proj.color}10` }}>
                    {proj.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#999] leading-relaxed mb-6">{proj.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span style={{ color: proj.color }} className="mt-0.5 shrink-0">▸</span>
                      <span className="text-[#ccc]">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((s) => (
                    <span key={s} className="font-mono text-xs px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-[#999]">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
