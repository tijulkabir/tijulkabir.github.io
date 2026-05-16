"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "NetForge",
    tag: "Offensive Security Toolkit",
    description:
      "Industry-grade data processing tool with a stealth calculator disguise. Features a comprehensive cryptographic toolset including Base64, Hex, ROT13, XOR, MD5/SHA hashing, and a recipe system for chaining operations.",
    highlights: [
      "Stealth Calculator mode — disguises as a standard calculator",
      "Recipe system for automated multi-step data processing",
      "Comprehensive crypto: Base64, Hex, ROT13, XOR, MD5, SHA256",
      "IP Defang/Refang, JSON/XML beautify, URL encode/decode",
    ],
    stack: ["React", "Vite", "JavaScript", "Crypto-JS"],
    color: "#00FF41",
    status: "Active",
    icon: "⬡",
    github: "https://github.com/tijulkabir/netforge",
    live: "https://tijulkabir.github.io/netforge/",
    stars: 0,
    lang: "JavaScript",
  },
  {
    title: "FSociety Lab v2",
    tag: "Cybersecurity Training Target",
    description:
      "A vulnerable-by-design local-first cybersecurity training target that simulates a real-world web app. Built to be scanned, probed, and attacked — your personal punching bag for Kali Linux tools.",
    highlights: [
      "Verified support for 19 standard Kali tools",
      "Built-in Field Manual explaining attack techniques",
      "Real-time logs showing attacks from defender's perspective",
      "SQLite DB with authentication & logging endpoints",
    ],
    stack: ["Node.js", "Express", "SQLite", "Docker"],
    color: "#ef4444",
    status: "Released",
    icon: "◉",
    github: "https://github.com/tijulkabir/fsociety-lab-v2",
    stars: 0,
    lang: "JavaScript",
  },
  {
    title: "Vault 7",
    tag: "Secure Password Manager",
    description:
      "A cross-platform encrypted vault application built with OpenGL/GLFW and C. Features a custom-rendered GUI for securely storing passwords, backup codes, and notes with master-key encryption.",
    highlights: [
      "Custom OpenGL/GLFW rendered GUI — no web dependencies",
      "Master password + encryption key dual authentication",
      "Organized storage: Passwords, Backup Codes, Notes",
      "Cross-platform: Windows, macOS, Linux (CMake build)",
    ],
    stack: ["C", "OpenGL", "GLFW", "CMake"],
    color: "#a855f7",
    status: "Released",
    icon: "◈",
    github: "https://github.com/tijulkabir/vault_7",
    stars: 0,
    lang: "C",
  },
  {
    title: "PDF Locker",
    tag: "Document Encryption Tool",
    description:
      "A cross-platform application to password-protect PDF documents with AES encryption. Features a modern drag-and-drop interface with a Windows 11-inspired design and dark mode support.",
    highlights: [
      "AES encryption for industry-standard document security",
      "Drag & Drop interface for seamless file handling",
      "Cross-platform: Windows, Android, Linux, macOS",
      "Portable Windows build — no installation required",
    ],
    stack: ["Flutter", "Dart", "C++", "AES"],
    color: "#3b82f6",
    status: "Released",
    icon: "▣",
    github: "https://github.com/tijulkabir/pdf-locker",
    stars: 0,
    lang: "C++/Dart",
  },
  {
    title: "Echo",
    tag: "P2P Encrypted Messaging",
    description:
      "A decentralized peer-to-peer messaging platform with end-to-end encryption. Built with a custom protocol layer for direct device communication without centralized servers.",
    highlights: [
      "P2P Architecture — zero central server dependency",
      "Custom encryption protocol for message security",
      "NAT traversal & hole-punching for direct connections",
      "Cross-platform with Flutter mobile client",
    ],
    stack: ["Kotlin", "Flutter", "WebSocket", "Crypto"],
    color: "#f59e0b",
    status: "In Development",
    icon: "◇",
    github: "#",
    stars: 0,
    lang: "Kotlin",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[#00FF41] text-sm tracking-widest">
            03.{" "}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Project Arsenal
          </h2>
          <p className="text-[#666] text-sm mt-3 font-mono max-w-lg">
            {"// "}Open-source tools built for offensive security, encryption,
            and systems programming
          </p>
          <div className="gradient-line mt-4 w-32" />
        </motion.div>

        {/* Featured Project (first one) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mb-8"
        >
          <div
            className="relative bg-[#111] border rounded-lg overflow-hidden card-hover group"
            style={{
              borderColor: `${projects[0].color}30`,
              boxShadow: `0 0 40px ${projects[0].color}08`,
            }}
          >
            {/* Animated top bar */}
            <div className="relative h-1 w-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, ${projects[0].color}, transparent)`,
                }}
              />
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 w-1/3"
                style={{
                  background: `linear-gradient(90deg, transparent, ${projects[0].color}80, transparent)`,
                }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Info */}
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-2xl"
                        style={{ color: projects[0].color }}
                      >
                        {projects[0].icon}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {projects[0].title}
                      </h3>
                      <span
                        className="font-mono text-xs px-2 py-1 rounded border"
                        style={{
                          color: projects[0].color,
                          borderColor: `${projects[0].color}30`,
                          background: `${projects[0].color}10`,
                        }}
                      >
                        {projects[0].status}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#666]">
                      {projects[0].tag}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#999] leading-relaxed mb-6">
                  {projects[0].description}
                </p>

                <div className="space-y-2 mb-6">
                  {projects[0].highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span
                        style={{ color: projects[0].color }}
                        className="mt-0.5 shrink-0"
                      >
                        ▸
                      </span>
                      <span className="text-[#ccc]">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#999]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn font-mono text-xs tracking-wider px-5 py-2.5 border border-[#00FF41]/40 text-[#00FF41] bg-[#00FF41]/5 hover:bg-[#00FF41]/15 transition-all duration-300 rounded-md flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                  {projects[0].live && projects[0].live !== "#" && (
                    <a
                      href={projects[0].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs tracking-wider px-5 py-2.5 border border-[#3b82f6]/40 text-[#3b82f6] bg-[#3b82f6]/5 hover:bg-[#3b82f6]/15 transition-all duration-300 rounded-md flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right side - Terminal Preview */}
              <div className="hidden lg:flex items-center justify-center p-8 border-l border-[#1a1a1a]">
                <div className="w-full max-w-sm">
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1a1a1a]">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <span className="font-mono text-[10px] text-[#666] ml-2">
                        netforge — stealth_mode
                      </span>
                    </div>
                    <div className="p-4 font-mono text-xs space-y-1.5">
                      <div className="text-[#666]">
                        $ netforge --mode=stealth
                      </div>
                      <div className="text-[#00FF41]">
                        [✓] Calculator mode active
                      </div>
                      <div className="text-[#999]">
                        [i] Enter code: 1971-2024
                      </div>
                      <div className="text-[#00FF41]">
                        [✓] Authentication bypassed
                      </div>
                      <div className="text-[#00FF41]">
                        [✓] NetForge toolkit loaded
                      </div>
                      <div className="text-[#666]">
                        {"    "}├── Base64 Encoder/Decoder
                      </div>
                      <div className="text-[#666]">
                        {"    "}├── SHA256/MD5 Hasher
                      </div>
                      <div className="text-[#666]">
                        {"    "}├── XOR Cipher Engine
                      </div>
                      <div className="text-[#666]">
                        {"    "}├── IP Defang/Refang
                      </div>
                      <div className="text-[#666]">
                        {"    "}└── Recipe Pipeline
                      </div>
                      <div className="text-[#3b82f6] mt-2">
                        [→] Ready for operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
              onMouseEnter={() => setActive(i + 1)}
              onClick={() =>
                setExpanded(expanded === i + 1 ? null : i + 1)
              }
              className={`relative bg-[#111] border rounded-lg overflow-hidden card-hover group cursor-pointer transition-all duration-500 ${
                active === i + 1 ? "border-opacity-50" : "border-[#2a2a2a]"
              }`}
              style={{
                borderColor:
                  active === i + 1 ? `${proj.color}50` : undefined,
                boxShadow:
                  active === i + 1
                    ? `0 0 30px ${proj.color}15, 0 0 60px ${proj.color}08`
                    : "none",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${proj.color}, transparent)`,
                }}
              />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg" style={{ color: proj.color }}>
                        {proj.icon}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {proj.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#666]">
                      {proj.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[10px] px-2 py-1 rounded border"
                      style={{
                        color: proj.color,
                        borderColor: `${proj.color}30`,
                        background: `${proj.color}10`,
                      }}
                    >
                      {proj.status}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-1 rounded border border-[#2a2a2a] text-[#666]">
                      {proj.lang}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#999] leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {proj.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span
                        style={{ color: proj.color }}
                        className="mt-0.5 shrink-0 text-xs"
                      >
                        ▸
                      </span>
                      <span className="text-[#bbb]">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack + Links */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] px-2 py-1 bg-[#1a1a1a] border border-[#222] rounded text-[#888]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {proj.github && proj.github !== "#" && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#666] hover:text-[#00FF41] transition-colors duration-300"
                      title="View on GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/tijulkabir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-sm text-[#666] hover:text-[#00FF41] transition-all duration-300 group"
          >
            <span className="border-b border-dashed border-[#333] group-hover:border-[#00FF41]/50 pb-0.5">
              View all repositories on GitHub
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
