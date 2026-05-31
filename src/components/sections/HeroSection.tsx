"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/lib/data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.82 0.18 198 / 0.07) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        {/* Status badge */}
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/[0.07] text-brand text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Open to Senior QA &amp; Quality Engineering Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fade(0.1)}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            {personal.name}
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div {...fade(0.2)}>
          <p className="text-lg text-muted-foreground font-medium">
            {personal.title}{" "}
            <span className="text-foreground/40 mx-1">·</span>
            {personal.subtitle}
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div {...fade(0.3)}>
          <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
            {personal.summary}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fade(0.4)}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="#work"
            className="px-7 py-2.5 rounded-full bg-brand text-background font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-2.5 rounded-full border border-border/60 text-foreground font-medium text-sm hover:border-brand/50 hover:text-brand hover:bg-brand/[0.07] transition-all duration-200 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fade(0.5)}
          className="flex items-center justify-center gap-5 pt-1"
        >
          {[
            { href: personal.github,   Icon: GithubIcon,   label: "GitHub"   },
            { href: personal.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground/40 hover:text-brand transition-colors duration-200"
            >
              <Icon style={{ width: 20, height: 20 }} />
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="text-xs font-mono text-muted-foreground/40 hover:text-brand transition-colors duration-200"
          >
            {personal.email}
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#skills"
          className="flex flex-col items-center gap-1.5 text-muted-foreground/30 hover:text-brand/50 transition-colors"
        >
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={13} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
