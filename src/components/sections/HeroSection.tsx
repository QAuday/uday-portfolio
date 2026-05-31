"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/lib/data";

const CYCLE_MS = 3400;

export default function HeroSection() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [fade,       setFade]       = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTaglineIdx((i) => (i + 1) % personal.taglines.length);
        setFade(true);
      }, 350);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* ── Animated gradient orbs ─────────────────────────── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full blur-[120px] opacity-20"
        style={{ width: 600, height: 600, top: "-10%", left: "-10%",
          background: "radial-gradient(circle, oklch(0.82 0.18 198) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full blur-[140px] opacity-15"
        style={{ width: 500, height: 500, bottom: "0%", right: "-10%",
          background: "radial-gradient(circle, oklch(0.72 0.22 284) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full blur-[100px] opacity-10"
        style={{ width: 300, height: 300, top: "50%", left: "50%",
          background: "radial-gradient(circle, oklch(0.78 0.17 80) 0%, transparent 70%)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 4 }}
      />

      {/* ── Dot grid overlay ───────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.82 0.18 198 / 0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand/25 bg-brand-dim backdrop-blur-sm text-brand text-xs font-mono tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          Open to Senior QA &amp; Quality Engineering Roles
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
            <span className="block text-foreground/90">Uday Kiran</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, oklch(0.82 0.18 198) 0%, oklch(0.72 0.22 284) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px oklch(0.82 0.18 198 / 0.3))",
              }}
            >
              Kota
            </span>
          </h1>
        </motion.div>

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {["Playwright", "TypeScript", "k6", "MCP Browser", "CI/CD"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="px-3 py-1 rounded-full border border-border/40 bg-muted/20 backdrop-blur-sm text-xs font-mono text-muted-foreground"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground"
        >
          Quality Engineer —{" "}
          <span className="text-foreground/70">Automation · Performance · AI-Assisted Testing</span>
        </motion.p>

        {/* Animated tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="h-7 flex items-center justify-center"
        >
          <p
            className="font-mono text-sm text-brand/60 tracking-wide transition-all duration-300"
            style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(6px)" }}
          >
            {personal.taglines[taglineIdx]}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#work"
            className="group relative px-8 py-3.5 rounded-full font-semibold text-sm text-background overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, oklch(0.82 0.18 198), oklch(0.72 0.22 284))",
              boxShadow: "0 0 24px oklch(0.82 0.18 198 / 0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-border/60 text-foreground font-semibold text-sm backdrop-blur-sm hover:border-brand/50 hover:bg-brand-dim hover:text-brand transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex items-center justify-center gap-6 pt-2"
        >
          {[
            { href: personal.github,   Icon: GithubIcon,   label: "GitHub"   },
            { href: personal.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${personal.email}`, Icon: FileText, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-muted-foreground/50 hover:text-brand transition-colors"
            >
              <Icon style={{ width: 20, height: 20 }} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="pt-6"
        >
          <a
            href="#skills"
            className="inline-flex flex-col items-center gap-1.5 text-muted-foreground/30 hover:text-brand/60 transition-colors"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
