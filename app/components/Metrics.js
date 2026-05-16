"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { label: "CTF Points", value: 4500, suffix: "+", icon: "🏴", color: "#00FF41" },
  { label: "TryHackMe Rank", value: 66, prefix: "#", suffix: " BD", icon: "🔒", color: "#00FF41" },
  { label: "CF Streak", value: 250, suffix: "D+", icon: "🔥", color: "#f59e0b" },
  { label: "CodeChef", value: 1446, suffix: "★", icon: "⚡", color: "#3b82f6" },
  { label: "GitHub Repos", value: 9, suffix: "+", icon: "📦", color: "#a855f7" },
  { label: "YouTube", value: 0, displayText: "Byte Froster", icon: "📺", color: "#ef4444" },
  { label: "Certifications", value: 5, suffix: "+", icon: "📜", color: "#f59e0b" },
  { label: "National CTFs", value: 4, suffix: "+", icon: "🏆", color: "#00FF41" },
];

function AnimatedCounter({ target, prefix = "", suffix = "", displayText, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || displayText) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, displayText]);

  if (displayText) return displayText;
  return `${prefix}${count}${suffix}`;
}

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
              <span className="font-mono text-sm font-semibold" style={{ color: m.color }}>
                {m.displayText || `${m.prefix || ""}${m.value}${m.suffix || ""}`}
              </span>
              <span className="text-[#2a2a2a] mx-4">│</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid stats below ticker with animated counters */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.slice(0, 4).map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              className="bg-[#111] border border-[#2a2a2a] rounded-lg p-5 text-center card-hover glow-green-hover relative overflow-hidden group"
            >
              {/* Color accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${m.color}, transparent)` }} />
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className="font-mono text-2xl font-bold" style={{ color: m.color }}>
                <AnimatedCounter target={m.value} prefix={m.prefix} suffix={m.suffix} displayText={m.displayText} isInView={isInView} />
              </div>
              <div className="font-mono text-xs text-[#666] mt-1">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
