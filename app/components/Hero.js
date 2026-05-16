"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const roles = [
  "Offensive Security Researcher",
  "Competitive Programmer",
  "Systems Developer",
  "CTF Player",
];

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF4115";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
    />
  );
}

function TypingEffect({ text, speed = 80 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className={`inline-block w-3 h-8 md:h-12 bg-[#00FF41] ml-1 align-middle ${done ? "cursor-blink" : ""}`} />
    </span>
  );
}

function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <span className="text-[#00FF41]">
      {displayed}
      <span className="inline-block w-2 h-5 bg-[#00FF41] ml-0.5 align-middle cursor-blink" />
    </span>
  );
}

const quickStats = [
  { label: "TryHackMe", value: "Top 1% Globally\n#66 BD", icon: "🛡️" },
  { label: "THM Streak", value: "300 Days", icon: "⏳" },
  { label: "CTF", value: "#35 BD", icon: "🏴" },
  { label: "Projects", value: "9+", icon: "⚡" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <MatrixRain />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a] z-[1]" />

      {/* Subtle radial spotlight */}
      <div className="absolute inset-0 z-[2]" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,255,65,0.04) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-sm text-[#666] tracking-widest uppercase">
            {"// "}system.identify()
          </span>
        </motion.div>

        {/* Name with Typing Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold font-mono tracking-tight text-white mb-4"
        >
          <TypingEffect text="Tijul Kabir Toha" speed={90} />
        </motion.h1>

        {/* Handle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="font-mono text-[#666] text-lg mb-6"
        >
          @froster
        </motion.p>

        {/* Role Rotator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="font-mono text-lg md:text-2xl mb-10 h-10"
        >
          <span className="text-[#999]">{"$ "}</span>
          <RoleRotator />
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-12 flex-wrap"
        >
          {quickStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8 + i * 0.1 }}
              className="flex items-center gap-2 group"
            >
              <span className="text-base">{stat.icon}</span>
              <div className="text-left">
                <div className="font-mono text-[10px] text-[#555] uppercase tracking-wider">{stat.label}</div>
                <div className="font-mono text-sm text-[#00FF41] font-semibold">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative font-mono text-sm tracking-wider px-8 py-3 border border-[#00FF41]/50 text-[#00FF41] bg-[#00FF41]/5 hover:bg-[#00FF41]/15 transition-all duration-300 glow-green-hover rounded-md"
          >
            <span className="relative z-10">{" View Projects "}</span>
          </a>
          <a
            href="https://github.com/tijulkabir"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-mono text-sm tracking-wider px-8 py-3 border border-[#3b82f6]/40 text-[#3b82f6] bg-[#3b82f6]/5 hover:bg-[#3b82f6]/15 transition-all duration-300 rounded-md"
          >
            {" GitHub Profile "}
          </a>
          <a
            href="#contact"
            className="group font-mono text-sm tracking-wider px-8 py-3 border border-[#666]/30 text-[#999] hover:text-white hover:border-[#999]/50 transition-all duration-300 rounded-md"
          >
            {" Contact "}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-[#666]">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#00FF41] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
