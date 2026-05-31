"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-mono text-brand/70 tracking-widest uppercase">Tech Stack</p>
          <h2 className="text-3xl font-bold">
            Tools chosen for <span className="text-brand">precision</span>, not familiarity.
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg pt-0.5">
            Every tool in this stack was a deliberate choice — picked for speed, reliability,
            and what it communicates about engineering maturity.
          </p>
        </motion.div>

        {/* Primary stack */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase"
          >
            Primary Stack
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {skills.tier1.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                className="group flex flex-col gap-3 p-4 rounded-xl border border-white/[0.09] bg-white/[0.03] hover:border-brand/30 hover:bg-brand/[0.06] transition-all duration-200 cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-mono shrink-0"
                  style={{
                    background: `${skill.color}15`,
                    border: `1px solid ${skill.color}30`,
                    color: skill.color,
                  }}
                >
                  {skill.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/90">{skill.name}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5 leading-snug">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting tools */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase"
          >
            Supporting Tools
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {skills.tier2.map((s) => (
              <span
                key={s.name}
                className="px-3.5 py-1.5 rounded-full border border-white/[0.09] bg-white/[0.03] text-sm text-foreground/70 hover:border-brand/30 hover:text-brand hover:bg-brand/[0.06] transition-all duration-200 cursor-default"
              >
                {s.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Foundation */}
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xs font-mono text-muted-foreground/40 tracking-widest uppercase"
          >
            Foundation — Previous Stack
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-2"
          >
            {skills.tier3.map((s) => (
              <span
                key={s.name}
                className="px-3 py-1 rounded-full border border-border/20 text-xs text-muted-foreground/35 cursor-default"
              >
                {s.name}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
