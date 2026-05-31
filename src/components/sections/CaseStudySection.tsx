"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { caseStudy } from "@/lib/data";

export default function CaseStudySection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-mono text-brand/70 tracking-widest uppercase">Work</p>
          <h2 className="text-3xl font-bold">Case Study</h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.1] bg-white/[0.03] overflow-hidden"
        >
          {/* Card header */}
          <div className="px-8 py-6 border-b border-white/[0.07] bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-bold text-xl">{caseStudy.company}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{caseStudy.role}</p>
            </div>
            <span className="text-xs font-mono text-muted-foreground/60 bg-muted/10 px-3 py-1 rounded-full border border-border/30">
              {caseStudy.period}
            </span>
          </div>

          <div className="p-8 grid md:grid-cols-5 gap-10">
            {/* Left — 3 cols */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-lg font-semibold leading-snug">{caseStudy.headline}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.context}</p>

              <div className="p-4 rounded-xl border border-brand/15 bg-brand/[0.04]">
                <p className="text-[10px] font-mono text-brand tracking-widest uppercase mb-2">The Challenge</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-mono text-muted-foreground/50 tracking-widest uppercase">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-border/40 bg-muted/10 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://hiringhood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground/40 hover:text-brand transition-colors"
              >
                hiringhood.com <ExternalLink size={11} />
              </a>
            </div>

            {/* Right — 2 cols */}
            <div className="md:col-span-2 space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex flex-col gap-1 p-4 rounded-xl border border-white/[0.09] bg-white/[0.03]"
                  >
                    <span className="text-xl font-bold text-brand">{m.value}</span>
                    <span className="text-[11px] text-muted-foreground leading-snug">{m.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* What I built */}
              <div className="space-y-3">
                <p className="text-[10px] font-mono text-muted-foreground/50 tracking-widest uppercase">What I Built</p>
                <ul className="space-y-2.5">
                  {caseStudy.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.35 + i * 0.06 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-brand/70" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
