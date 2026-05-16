"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "TryHackMe Rank", value: "#66", sub: "Bangladesh", color: "#00FF41" },
  { label: "CTF National", value: "35th", sub: "IH CTF 2026", color: "#3b82f6" },
  { label: "Day Streak", value: "300+", sub: "Continuous", color: "#f59e0b" },
  { label: "CF Rating", value: "914", sub: "Newbie → Pupil", color: "#2dd733ff" },
];

const certs = [
  { name: "CCEP — Cybersecurity Educator Professional", type: "cert" },
  { name: "CPPS — Phishing Prevention Specialist", type: "cert" },
  { name: "Meta Hacker Cup 2025 — Round 1", type: "comp" },
  { name: "BDSec CTF 2025 — Participant", type: "comp" },
  { name: "IH CTF 2026 — 35th Place (1057pts)", type: "comp" },
];

const timeline = [
  { year: "2024", event: "Started CSE at PUST", icon: "📚" },
  { year: "2025", event: "TryHackMe Top 1% globally and #66 in BD, BDSec CTF, Meta Hacker Cup", icon: "🔒" },
  { year: "2026", event: "IH CTF 35th, 300+ Day Streak, Building Echo & NetForge", icon: "⚡" },
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
          {/* Main Bio - Enhanced */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="md:col-span-2 bg-[#111] border border-[#2a2a2a] rounded-lg p-8 card-hover glow-green-hover">
            <div className="flex items-start gap-6">
              <div className="relative shrink-0 hidden sm:block">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#00FF41]/20 to-[#3b82f6]/20 border border-[#00FF41]/30 flex items-center justify-center overflow-hidden">
                  <div className="font-mono text-[#00FF41] text-3xl font-bold">TK</div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00FF41] rounded-full pulse-ring" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Tijul Kabir Toha <span className="font-mono text-[#00FF41] text-sm font-normal">aka Froster</span></h3>
                <p className="font-mono text-xs text-[#666] mb-4">CSE @ Pabna University of Science &amp; Technology &bull; Year 2</p>
                <p className="text-[#999] text-sm leading-relaxed mb-4">
                  Offensive security researcher with a passion for breaking things (ethically). CTF player for <span className="text-[#00FF41]">PUST_Intruders</span>, ranked <span className="text-white font-semibold">#66 nationally</span> on TryHackMe with a <span className="text-white font-semibold">250+ day streak</span>. Building open-source security tools and pushing toward <span className="text-[#3b82f6]">Expert (1600+)</span> on Codeforces.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Pentesting", "CTF", "Reverse Engineering", "Systems Programming", "Competitive Programming"].map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-1 rounded bg-[#00FF41]/5 border border-[#00FF41]/15 text-[#00FF41]/80">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Status Card - Enhanced */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover glow-green-hover">
            <div className="font-mono text-xs text-[#666] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse" />SYSTEM STATUS
            </div>
            <div className="space-y-3">
              {[
                ["mode", "ACTIVE", "text-[#00FF41]"],
                ["focus", "Offensive Sec", "text-[#f59e0b]"],
                ["team", "PUST_Intruders", "text-white"],
                ["country", "🇧🇩 Bangladesh", "text-white"],
                ["codechef", "1446 2★", "text-[#3b82f6]"],
                ["repos", "9 public", "text-white"],

              ].map(([k, v, c]) => (
                <div key={k} className="flex justify-between items-baseline">
                  <span className="text-xs text-[#666] font-mono">{k}</span>
                  <span className={`font-mono text-sm ${c}`}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats with colors */}
          {stats.map((s, i) => (
            <motion.div key={s.label} custom={i + 2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover glow-green-hover group relative overflow-hidden">
              {/* Subtle color accent */}
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />
              <div className="font-mono text-xs text-[#666] mb-2">{s.label}</div>
              <div className="font-mono text-3xl font-bold glow-text-green mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-[#999]">{s.sub}</div>
            </motion.div>
          ))}

          {/* Timeline */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="md:col-span-3 bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover">
            <div className="font-mono text-xs text-[#666] mb-6 flex items-center gap-2">
              <span className="text-[#00FF41]">⬡</span> JOURNEY
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-[#00FF41]/50 via-[#3b82f6]/30 to-transparent hidden sm:block" />
              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="flex items-start gap-4 sm:pl-14 relative"
                  >
                    <div className="absolute left-3.5 w-5 h-5 rounded-full bg-[#111] border-2 border-[#00FF41]/40 flex items-center justify-center hidden sm:flex">
                      <div className="w-2 h-2 rounded-full bg-[#00FF41]" />
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{t.icon}</span>
                      <div>
                        <span className="font-mono text-sm text-[#00FF41] font-semibold">{t.year}</span>
                        <p className="text-sm text-[#999] mt-0.5">{t.event}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications & Competitions */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="md:col-span-3 bg-[#111] border border-[#2a2a2a] rounded-lg p-6 card-hover">
            <div className="font-mono text-xs text-[#666] mb-4 flex items-center gap-2">
              <span className="text-[#00FF41]">⬡</span> CERTIFICATIONS & COMPETITIONS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certs.map((c, i) => (
                <div key={i} className="flex items-start gap-2 px-3 py-2.5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-md text-sm group hover:border-[#00FF41]/20 transition-colors">
                  <span className={`mt-0.5 shrink-0 ${c.type === "cert" ? "text-[#00FF41]" : "text-[#3b82f6]"}`}>
                    {c.type === "cert" ? "✓" : "🏆"}
                  </span>
                  <span className="text-[#999]">{c.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
