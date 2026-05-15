"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const techs = [
  { name: "Kotlin", level: 85, project: "Echo", color: "#A97BFF", icon: "K", desc: "Primary language for Echo P2P" },
  { name: "C++", level: 90, project: "Competitive Programming", color: "#00599C", icon: "C+", desc: "CF rated 1446, 300+ problems" },
  { name: "Python", level: 88, project: "CTF & Automation", color: "#3776AB", icon: "Py", desc: "Exploit dev, scripting, recon" },
  { name: "Rust", level: 50, project: "NetForge", color: "#DEA584", icon: "Rs", desc: "Memory-safe network tools" },
  { name: "Flutter", level: 75, project: "Echo Mobile", color: "#02569B", icon: "Fl", desc: "Cross-platform UI for Echo" },
  { name: "JavaScript", level: 70, project: "Web Exploits", color: "#F7DF1E", icon: "JS", desc: "XSS research, web pentesting" },
  { name: "C", level: 80, project: "Systems & OS", color: "#A8B9CC", icon: "C", desc: "Low-level systems programming" },
  { name: "SQL", level: 65, project: "DB Security", color: "#4479A1", icon: "SQ", desc: "Injection research & hardening" },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="stack" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-mono text-[#00FF41] text-sm tracking-widest">02. </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Tech Arsenal</h2>
          <div className="gradient-line mt-4 w-32" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative group bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover cursor-pointer overflow-hidden"
              style={{ "--glow-color": tech.color }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${tech.color}10, transparent 70%)` }} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-4 font-mono text-lg font-bold transition-all duration-300 group-hover:scale-110" style={{ borderColor: `${tech.color}40`, color: tech.color, background: `${tech.color}10` }}>
                  {tech.icon}
                </div>

                <h3 className="font-mono text-white text-sm font-semibold mb-1">{tech.name}</h3>

                {/* Proficiency bar */}
                <div className="w-full h-1 bg-[#1a1a1a] rounded-full mt-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.level}%` } : {}}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: tech.color }}
                  />
                </div>

                {/* Hover details */}
                <motion.div
                  initial={false}
                  animate={hovered === i ? { height: "auto", opacity: 1, marginTop: 12 } : { height: 0, opacity: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-[#999] mb-1">{tech.desc}</p>
                  <span className="font-mono text-xs" style={{ color: tech.color }}>→ {tech.project}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
