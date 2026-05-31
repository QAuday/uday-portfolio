"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, XCircle, Clock, GitBranch, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/lib/data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/* Decorative test-results panel — no images needed */
function TestDashboard() {
  const suites = [
    { name: "UI · E2E Tests",     pass: 28, total: 28, color: "#2dd4bf" },
    { name: "API · Contract",     pass: 15, total: 15, color: "#a855f7" },
    { name: "Performance · k6",   pass: 6,  total: 6,  color: "#4ade80" },
    { name: "Smoke · Regression", pass: 12, total: 12, color: "#2dd4bf" },
  ];

  const circumference = 2 * Math.PI * 40;
  const dashOffset    = circumference * (1 - 0.98);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" as const }}
      className="relative w-full max-w-[380px] rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.18 0.02 220) 0%, oklch(0.14 0.01 260) 100%)",
        border: "1px solid oklch(1 0 0 / 0.1)",
        boxShadow: "0 32px 80px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(0.82 0.18 198 / 0.08)",
      }}
    >
      {/* Top glow */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.18 198 / 0.6), transparent)" }}
      />

      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground/50">playwright-report</span>
        <div className="flex items-center gap-1 text-[11px] font-mono text-green-400/70">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          passing
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Circular pass rate */}
        <div className="flex items-center gap-5">
          <div className="relative shrink-0 w-24 h-24">
            <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90">
              <circle cx="48" cy="48" r="40" fill="none" stroke="oklch(1 0 0 / 0.05)" strokeWidth="7" />
              <motion.circle
                cx="48" cy="48" r="40"
                fill="none"
                stroke="oklch(0.82 0.18 198)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: dashOffset }}
                transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" as const }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-brand">98%</span>
              <span className="text-[10px] text-muted-foreground/50 font-mono">Pass Rate</span>
            </div>
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-green-400/80">
                <CheckCircle2 size={12} /> Passed
              </span>
              <span className="font-mono font-bold text-green-400">61</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-red-400/60">
                <XCircle size={12} /> Failed
              </span>
              <span className="font-mono text-red-400/60">1</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-muted-foreground/50">
                <Clock size={12} /> Duration
              </span>
              <span className="font-mono text-muted-foreground/50">2m 34s</span>
            </div>
          </div>
        </div>

        {/* Suite rows */}
        <div className="space-y-2.5">
          {suites.map((s) => (
            <div key={s.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground/60">{s.name}</span>
                <span className="text-[11px] font-mono" style={{ color: s.color }}>
                  {s.pass}/{s.total}
                </span>
              </div>
              <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: s.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(s.pass / s.total) * 100}%` }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" as const }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground/40">
            <GitBranch size={11} />
            main · PR #47
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-brand/60">
            <Zap size={11} />
            GitHub Actions
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Background layers ──────────────────────────────────── */}
      {/* Grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 0% 50%, oklch(0.145 0 0) 0%, transparent 70%),
            radial-gradient(ellipse 60% 60% at 100% 50%, oklch(0.145 0 0) 0%, transparent 70%),
            radial-gradient(ellipse 100% 40% at 50% 0%, oklch(0.145 0 0) 0%, transparent 100%),
            radial-gradient(ellipse 100% 40% at 50% 100%, oklch(0.145 0 0) 0%, transparent 100%)
          `,
        }}
      />
      {/* Glow blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full blur-[130px]"
        style={{
          width: 520, height: 520, top: "5%", right: "-5%",
          background: "oklch(0.82 0.18 198 / 0.12)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full blur-[100px]"
        style={{
          width: 380, height: 380, bottom: "5%", left: "0%",
          background: "oklch(0.72 0.22 284 / 0.10)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.10, 0.16, 0.10] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="space-y-7">
            {/* Status badge */}
            <motion.div {...fade(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/25 bg-brand/[0.08] text-brand text-xs font-mono tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
                Open to Senior QA &amp; Quality Engineering Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...fade(0.1)} className="space-y-1">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
                {personal.shortName}
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, oklch(0.82 0.18 198) 0%, oklch(0.72 0.22 284) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Kota
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div {...fade(0.2)}>
              <p className="text-lg font-medium text-muted-foreground">
                {personal.title}
                <span className="text-white/20 mx-2">·</span>
                <span className="text-foreground/50 text-base">{personal.subtitle}</span>
              </p>
            </motion.div>

            {/* Summary */}
            <motion.div {...fade(0.3)}>
              <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-md">
                {personal.summary}
              </p>
            </motion.div>

            {/* Stack chips */}
            <motion.div
              {...fade(0.35)}
              className="flex flex-wrap gap-2"
            >
              {["Playwright", "TypeScript", "k6", "MCP Browser", "CI/CD"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-white/[0.09] bg-white/[0.04] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.45)} className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="px-6 py-2.5 rounded-full bg-brand text-background font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-white/[0.15] text-foreground/80 font-medium text-sm hover:border-brand/40 hover:text-brand hover:bg-brand/[0.06] transition-all duration-200 active:scale-95"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fade(0.55)} className="flex items-center gap-5 pt-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground/40 hover:text-brand transition-colors duration-200"
              >
                <GithubIcon style={{ width: 18, height: 18 }} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground/40 hover:text-brand transition-colors duration-200"
              >
                <LinkedinIcon style={{ width: 18, height: 18 }} />
              </a>
              <span className="w-px h-4 bg-white/[0.1]" />
              <a
                href={`mailto:${personal.email}`}
                className="text-xs font-mono text-muted-foreground/40 hover:text-brand transition-colors duration-200"
              >
                {personal.email}
              </a>
            </motion.div>
          </div>

          {/* Right — decorative test dashboard */}
          <div className="hidden lg:flex justify-end items-center">
            <TestDashboard />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#skills"
          className="flex flex-col items-center gap-1.5 text-muted-foreground/25 hover:text-brand/50 transition-colors"
        >
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={12} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
