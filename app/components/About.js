"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "TryHackMe Rank", value: "#66", sub: "Bangladesh" },
  { label: "CTF National Best", value: "35th", sub: "IH CTF 2026" },
  { label: "Day Streak", value: "250+", sub: "Continuous" },
  { label: "CF Target", value: "1600+", sub: "Expert" },
];

const certs = [
  "CCEP — Cybersecurity Educator Professional",
  "CPPS — Phishing Prevention Specialist",
  "Meta Hacker Cup 2025 — Round 1",
  "BDSec CTF 2025 Participant",
  "IH CTF 2026 — 35th Place (1057pts)",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-mono text-[#00FF41] text-sm tracking-widest">01. </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Identity Matrix</h2>
          <div className="gradient-line mt-4 w-32" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main Bio */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="md:col-span-2 bg-[#111] border border-[#2a2a2a] rounded-lg p-8 card-hover glow-green-hover">
            <div className="flex items-start gap-6">
              <div className="relative shrink-0 hidden sm:block">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#00FF41]/20 to-[#3b82f6]/20 border border-[#00FF41]/30 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none">
                    <circle cx="50" cy="35" r="18" fill="#00FF41" opacity="0.2" stroke="#00FF41" strokeWidth="1.5" />
                    <path d="M50 53 C30 53 20 70 20 85 L80 85 C80 70 70 53 50 53Z" fill="#00FF41" opacity="0.15" stroke="#00FF41" strokeWidth="1.5" />
                    <rect x="34" y="28" width="12" height="8" rx="2" stroke="#00FF41" strokeWidth="1.5" fill="none" />
                    <rect x="54" y="28" width="12" height="8" rx="2" stroke="#00FF41" strokeWidth="1.5" fill="none" />
                    <line x1="46" y1="32" x2="54" y2="32" stroke="#00FF41" strokeWidth="1.5" />
                    <text x="37" y="35" fill="#00FF41" fontSize="6" fontFamily="monospace">&gt;_</text>
                    <text x="57" y="35" fill="#00FF41" fontSize="6" fontFamily="monospace">0x</text>
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00FF41] rounded-full pulse-ring" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Tijul Kabir Toha <span className="font-mono text-[#00FF41] text-sm font-normal">aka Froster</span></h3>
                <p className="font-mono text-xs text-[#666] mb-4">CSE @ Pabna University of Science &amp; Technology</p>
                <p className="text-[#999] text-sm leading-relaxed">
                  Offensive security researcher with a passion for breaking things (ethically). CTF player for <span className="text-[#00FF41]">PUST_Intruders</span>, ranked <span className="text-white font-semibold">#66 nationally</span> on TryHackMe with <span className="text-white font-semibold">250+ day streak</span>. Pushing toward <span className="text-[#3b82f6]">Expert (1600+)</span> on Codeforces.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Status Card */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover glow-green-hover">
            <div className="font-mono text-xs text-[#666] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse" />SYSTEM STATUS
            </div>
            <div className="space-y-3">
              {[["mode","ACTIVE","text-[#00FF41]"],["team","PUST_Intruders","text-white"],["country","🇧🇩 Bangladesh","text-white"],["codechef","1446 ★★","text-[#3b82f6]"],["linkedin","422 followers","text-white"]].map(([k,v,c])=>(
                <div key={k} className="flex justify-between items-baseline">
                  <span className="text-xs text-[#666]">{k}</span>
                  <span className={`font-mono text-sm ${c}`}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          {stats.map((s, i) => (
            <motion.div key={s.label} custom={i+2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover glow-green-hover">
              <div className="font-mono text-xs text-[#666] mb-2">{s.label}</div>
              <div className="font-mono text-3xl font-bold text-[#00FF41] glow-text-green mb-1">{s.value}</div>
              <div className="text-xs text-[#999]">{s.sub}</div>
            </motion.div>
          ))}

          {/* Certs */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="md:col-span-3 bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover">
            <div className="font-mono text-xs text-[#666] mb-4 flex items-center gap-2">
              <span className="text-[#00FF41]">⬡</span> CERTIFICATIONS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certs.map((c, i) => (
                <div key={i} className="flex items-start gap-2 px-3 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded text-sm">
                  <span className="text-[#00FF41] mt-0.5 shrink-0">✓</span>
                  <span className="text-[#999]">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
