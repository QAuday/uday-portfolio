"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ExternalLink, Building2 } from "lucide-react";
import { caseStudy } from "@/lib/data";

export default function CaseStudySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="font-mono text-xs text-brand tracking-widest uppercase">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Case Study</h2>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl border border-border/50 bg-card/40 overflow-hidden"
          style={{ boxShadow: "0 0 60px oklch(0.82 0.18 198 / 0.05)" }}
        >
          {/* Top accent bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
            {/* Left column */}
            <div className="space-y-8">
              {/* Company badge */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-dim border border-brand/20">
                  <Building2 size={20} className="text-brand" />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">{caseStudy.company}</p>
                  <p className="text-xs text-muted-foreground font-mono">{caseStudy.period}</p>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold leading-snug">
                  {caseStudy.headline}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseStudy.context}
                </p>
              </div>

              {/* Challenge */}
              <div className="p-4 rounded-lg bg-muted/20 border border-border/40">
                <p className="text-xs font-mono text-brand mb-2 tracking-wider uppercase">
                  The Challenge
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Tech stack */}
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                  Stack Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono border border-brand/30 bg-brand-dim text-brand"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex flex-col gap-1 p-5 rounded-xl border border-border/40 bg-muted/20 hover:border-brand/30 hover:bg-brand-dim transition-all duration-300"
                  >
                    <span
                      className="text-2xl font-bold text-brand"
                      style={{ textShadow: "0 0 20px oklch(0.82 0.18 198 / 0.3)" }}
                    >
                      {m.value}
                    </span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {m.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bullet list */}
              <div className="space-y-3">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                  What I Built
                </p>
                <ul className="space-y-2.5">
                  {caseStudy.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-brand shrink-0 mt-0.5"
                      />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Link */}
              <a
                href="https://hiringhood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand/70 hover:text-brand font-mono transition-colors"
              >
                hiringhood.com <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
