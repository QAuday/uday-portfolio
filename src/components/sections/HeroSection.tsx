"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/lib/data";

const CYCLE_MS = 3200;

export default function HeroSection() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [visible,    setVisible]    = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTaglineIdx((i) => (i + 1) % personal.taglines.length);
        setVisible(true);
      }, 400);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Radial glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.82 0.18 198 / 0.08) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand-dim text-brand text-xs font-mono tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          Open to Senior QA &amp; Quality Engineering Roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          Uday Kiran{" "}
          <span
            className="text-brand"
            style={{ textShadow: "0 0 40px oklch(0.82 0.18 198 / 0.35)" }}
          >
            Kota
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground"
        >
          {personal.title}
        </motion.p>

        {/* Animated tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="h-8 flex items-center justify-center"
        >
          <p
            className="font-mono text-sm text-brand/70 tracking-wide transition-opacity duration-400"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {personal.taglines[taglineIdx]}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-brand text-background font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-brand/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:border-brand/50 hover:text-brand hover:bg-brand-dim active:scale-95 transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-5 pt-2"
        >
          {[
            { href: personal.github,   icon: GithubIcon,   label: "GitHub"   },
            { href: personal.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${personal.email}`, icon: FileText, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-brand transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-8"
        >
          <a
            href="#skills"
            className="inline-flex flex-col items-center gap-1 text-muted-foreground/50 hover:text-brand transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono tracking-widest">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Floating tech chips */}
      {[
        { text: "Playwright",  x: "8%",  y: "30%", delay: 0.8 },
        { text: "TypeScript",  x: "85%", y: "25%", delay: 1.0 },
        { text: "k6",          x: "12%", y: "68%", delay: 1.2 },
        { text: "MCP Browser", x: "80%", y: "65%", delay: 1.4 },
      ].map(({ text, x, y, delay }) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
          className="hidden lg:flex absolute px-3 py-1 rounded-full border border-border/40 bg-muted/30 backdrop-blur-sm text-xs font-mono text-muted-foreground"
          style={{ left: x, top: y }}
        >
          {text}
        </motion.div>
      ))}
    </section>
  );
}
