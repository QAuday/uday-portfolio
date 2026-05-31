"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
});

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-28 px-6 relative">
      {/* subtle section bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.82 0.18 198) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="font-mono text-xs text-brand tracking-widest uppercase">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tools chosen for{" "}
            <span className="text-brand">precision</span>, not familiarity.
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl pt-1">
            Every tool in this stack was a deliberate choice — picked for speed, reliability, and what it communicates about engineering maturity.
          </p>
        </motion.div>

        {/* Tier 1 — Primary stack */}
        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-1 h-4 rounded-full bg-brand" />
            <p className="text-xs font-mono text-brand tracking-widest uppercase">Primary Stack</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.tier1.map((skill, i) => (
              <motion.div
                key={skill.name}
                {...stagger(i)}
                animate={inView ? stagger(i).animate : stagger(i).initial}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-border/40 bg-card/50 hover:bg-card/80 transition-all duration-300 cursor-default overflow-hidden"
                style={{
                  boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.04)",
                }}
              >
                {/* Gradient corner */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${skill.color}18 0%, transparent 70%)`,
                  }}
                />

                {/* Color badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold font-mono"
                    style={{
                      background: `${skill.color}18`,
                      border: `1px solid ${skill.color}35`,
                      color: skill.color,
                    }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                  <div
                    className="w-2 h-2 rounded-full opacity-70"
                    style={{
                      background: skill.color,
                      boxShadow: `0 0 8px ${skill.color}`,
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground group-hover:text-white transition-colors">
                    {skill.name}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${skill.color}60, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2 — Supporting */}
        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-3"
          >
            <span className="w-1 h-4 rounded-full bg-muted-foreground/40" />
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Supporting Tools</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap gap-2.5"
          >
            {skills.tier2.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 rounded-full border border-border/50 bg-muted/20 text-sm text-foreground/80 hover:border-brand/40 hover:text-brand hover:bg-brand-dim transition-all duration-200 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Tier 3 — Foundation */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="flex items-center gap-3"
          >
            <span className="w-1 h-4 rounded-full bg-muted-foreground/20" />
            <p className="text-xs font-mono text-muted-foreground/50 tracking-widest uppercase">
              Foundation — Previous Stack
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {skills.tier3.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-full border border-border/20 bg-muted/5 text-xs text-muted-foreground/40 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
