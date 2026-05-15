"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "CTF Points", value: "4500+", icon: "🏴" },
  { label: "TryHackMe Rank", value: "#66 BD", icon: "🔒" },
  { label: "CF Streak", value: "130D+", icon: "🔥" },
  { label: "CodeChef", value: "1446★", icon: "⚡" },
  { label: "CTF Teams Led", value: "3+", icon: "🎯" },
  { label: "YouTube", value: "Byte Froster", icon: "📺" },
  { label: "Certifications", value: "5+", icon: "📜" },
  { label: "National CTFs", value: "4+", icon: "🏆" },
];

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="metrics" className="relative py-16 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF41]/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="font-mono text-[#00FF41] text-sm tracking-widest">04. </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Live Metrics</h2>
          <div className="gradient-line mt-4 w-32" />
        </motion.div>
      </div>

      {/* Scrolling Ticker */}
      <div className="relative border-y border-[#2a2a2a] py-4 overflow-hidden">
        <div className="flex ticker-scroll whitespace-nowrap">
          {[...metrics, ...metrics].map((m, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 shrink-0">
              <span className="text-lg">{m.icon}</span>
              <span className="font-mono text-sm text-[#666]">{m.label}:</span>
              <span className="font-mono text-sm text-[#00FF41] font-semibold">{m.value}</span>
              <span className="text-[#2a2a2a] mx-4">│</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid stats below ticker */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.slice(0, 4).map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              className="bg-[#111] border border-[#2a2a2a] rounded-lg p-5 text-center card-hover glow-green-hover"
            >
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className="font-mono text-2xl font-bold text-[#00FF41] glow-text-green">{m.value}</div>
              <div className="font-mono text-xs text-[#666] mt-1">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
