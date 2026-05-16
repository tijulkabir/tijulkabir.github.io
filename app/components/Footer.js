"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const socials = [
  {
    name: "GitHub",
    handle: "@tijulkabir",
    url: "https://github.com/tijulkabir",
    desc: "9 public repos",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "@tijulkabir1",
    url: "https://linkedin.com/in/tijulkabir1",
    desc: "422+ connections",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@bytefroster",
    url: "https://youtube.com/@bytefroster",
    desc: "Byte Froster",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
    ),
  },
  {
    name: "TryHackMe",
    handle: "@tijulkabir",
    url: "https://tryhackme.com/p/tijulkabir",
    desc: "Rank #66 BD",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="monospace">THM</text></svg>
    ),
  },
  {
    name: "Codeforces",
    handle: "@tijulkabir1",
    url: "https://codeforces.com/profile/tijulkabir1",
    desc: "Rating 914",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="14" width="5" height="8" rx="1" fill="currentColor" opacity="0.5" /><rect x="9.5" y="8" width="5" height="14" rx="1" fill="currentColor" opacity="0.7" /><rect x="17" y="2" width="5" height="20" rx="1" fill="currentColor" /></svg>
    ),
  },
  {
    name: "Codechef",
    handle: "@tijulkabir",
    url: "https://www.codechef.com/users/tijulkabir",
    desc: "Rating 1446 2 star",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="14" width="5" height="8" rx="1" fill="currentColor" opacity="0.5" /><rect x="9.5" y="8" width="5" height="14" rx="1" fill="currentColor" opacity="0.7" /><rect x="17" y="2" width="5" height="20" rx="1" fill="currentColor" /></svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer id="contact" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <span className="font-mono text-[#00FF41] text-sm tracking-widest">05. </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Ping Me</h2>
          <div className="gradient-line mt-4 w-32" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#111] border border-[#2a2a2a] rounded-lg p-8 md:p-10"
          >
            <div className="font-mono text-[#00FF41] text-sm mb-6">$ ping froster --protocol=social</div>

            <p className="text-[#999] text-sm leading-relaxed mb-8">
              Open to CTF collaborations, research opportunities, security consulting, and competitive programming partnerships. If you want to build something that breaks boundaries — let&apos;s connect.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:toha.240113@s.pust.ac.bd"
                className="flex items-center gap-3 p-3 rounded-md bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00FF41]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-md bg-[#00FF41]/10 border border-[#00FF41]/20 flex items-center justify-center text-[#00FF41] group-hover:bg-[#00FF41]/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-[#666]">Email</div>
                  <div className="font-mono text-sm text-[#ccc] group-hover:text-[#00FF41] transition-colors">toha.240113@s.pust.ac.bd</div>
                </div>
              </a>

              <a
                href="https://github.com/tijulkabir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00FF41]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-md bg-[#00FF41]/10 border border-[#00FF41]/20 flex items-center justify-center text-[#00FF41] group-hover:bg-[#00FF41]/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-[#666]">GitHub</div>
                  <div className="font-mono text-sm text-[#ccc] group-hover:text-[#00FF41] transition-colors">github.com/tijulkabir</div>
                </div>
              </a>
            </div>

            <a
              href="mailto:toha.240113@s.pust.ac.bd"
              className="inline-block w-full text-center font-mono text-sm text-[#00FF41] border border-[#00FF41]/30 px-6 py-3 hover:bg-[#00FF41]/10 transition-all duration-300 glow-green-hover rounded-md"
            >
              {"[ Send Encrypted Mail ]"}
            </a>
          </motion.div>

          {/* Right - Social Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                onMouseEnter={() => setHoveredSocial(i)}
                onMouseLeave={() => setHoveredSocial(null)}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 group ${hoveredSocial === i
                    ? "bg-[#111] border-[#00FF41]/30 shadow-[0_0_20px_rgba(0,255,65,0.05)]"
                    : "bg-[#0a0a0a] border-[#1a1a1a]"
                  }`}
              >
                <div className={`w-12 h-12 rounded-lg border flex items-center justify-center transition-all duration-300 ${hoveredSocial === i
                    ? "bg-[#00FF41]/10 border-[#00FF41]/30 text-[#00FF41]"
                    : "bg-[#111] border-[#2a2a2a] text-[#666]"
                  }`}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-white font-medium">{s.name}</span>
                    <span className="font-mono text-[10px] text-[#555]">{s.handle}</span>
                  </div>
                  <span className="font-mono text-xs text-[#666]">{s.desc}</span>
                </div>
                <svg className={`w-4 h-4 transition-all duration-300 ${hoveredSocial === i ? "text-[#00FF41] translate-x-0" : "text-[#333] -translate-x-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#666]">
            <span className="text-[#00FF41]">©</span> 2026 Tijul Kabir Toha. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="font-mono text-xs text-[#444]">
              Built with Next.js + Framer Motion
            </div>
            <div className="w-px h-4 bg-[#222]" />
            <div className="font-mono text-xs text-[#444]">
              Designed with <span className="text-[#00FF41]">{"</>"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
