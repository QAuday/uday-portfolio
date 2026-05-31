"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
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
        </motion.div>

        {/* Tier 1 — Primary */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono text-muted-foreground tracking-wider uppercase"
          >
            Primary Stack
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {skills.tier1.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group relative flex flex-col gap-2 p-4 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-brand/40 hover:bg-brand-dim transition-all duration-300 cursor-default"
                style={{
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Color dot */}
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}60` }}
                />
                <p className="text-sm font-semibold text-foreground">{skill.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${skill.color}10 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2 — Supporting */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xs font-mono text-muted-foreground tracking-wider uppercase"
          >
            Supporting Tools
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {skills.tier2.map((skill, i) => (
              <motion.span
                key={skill.name}
                custom={i + 5}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="px-4 py-2 rounded-full border border-border/60 bg-muted/30 text-sm text-foreground/80 hover:border-brand/40 hover:text-brand hover:bg-brand-dim transition-all duration-200 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tier 3 — Foundation */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xs font-mono text-muted-foreground tracking-wider uppercase"
          >
            Foundation (Previous Stack)
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {skills.tier3.map((skill, i) => (
              <motion.span
                key={skill.name}
                custom={i + 12}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="px-3 py-1.5 rounded-full border border-border/30 bg-muted/10 text-xs text-muted-foreground/60 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
