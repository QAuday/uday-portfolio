"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ExternalLink, Building2 } from "lucide-react";
import { caseStudy } from "@/lib/data";

export default function CaseStudySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Background orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "oklch(0.82 0.18 198)" }}
      />

      <div className="relative max-w-6xl mx-auto space-y-12">
        {/* Heading with number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-6"
        >
          <span
            className="hidden md:block text-8xl font-black leading-none select-none"
            style={{ color: "oklch(0.82 0.18 198 / 0.08)" }}
          >
            02
          </span>
          <div className="space-y-2 pt-1">
            <p className="font-mono text-xs text-brand tracking-widest uppercase">Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Case Study</h2>
          </div>
        </motion.div>

        {/* Main card — gradient border trick */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl p-px overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.82 0.18 198 / 0.3) 0%, transparent 40%, oklch(0.72 0.22 284 / 0.2) 100%)",
          }}
        >
          <div className="relative rounded-2xl bg-[oklch(0.12_0_0)] overflow-hidden">
            {/* Top shimmer */}
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.18 198 / 0.5), transparent)" }}
            />

            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
              {/* Left */}
              <div className="space-y-8">
                {/* Company badge */}
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: "oklch(0.82 0.18 198 / 0.12)", border: "1px solid oklch(0.82 0.18 198 / 0.2)" }}
                  >
                    <Building2 size={20} style={{ color: "oklch(0.82 0.18 198)" }} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{caseStudy.company}</p>
                    <p className="text-xs text-muted-foreground font-mono">{caseStudy.period} · {caseStudy.role}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold leading-snug">{caseStudy.headline}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.context}</p>
                </div>

                {/* Challenge */}
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: "oklch(0.82 0.18 198 / 0.05)",
                    border: "1px solid oklch(0.82 0.18 198 / 0.15)",
                  }}
                >
                  <p className="text-[10px] font-mono text-brand mb-2 tracking-widest uppercase">The Challenge</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </div>

                {/* Stack */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Stack Used</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.stack.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          border: "1px solid oklch(0.82 0.18 198 / 0.25)",
                          background: "oklch(0.82 0.18 198 / 0.08)",
                          color: "oklch(0.82 0.18 198)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-8">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {caseStudy.metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex flex-col gap-1.5 p-5 rounded-xl transition-all duration-300 cursor-default group"
                      style={{
                        background: "oklch(0.15 0 0)",
                        border: "1px solid oklch(1 0 0 / 0.06)",
                      }}
                    >
                      <span
                        className="text-2xl font-black"
                        style={{
                          background: "linear-gradient(135deg, oklch(0.82 0.18 198), oklch(0.72 0.22 284))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {m.value}
                      </span>
                      <span className="text-xs text-muted-foreground leading-relaxed">{m.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bullets */}
                <div className="space-y-3">
                  <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">What I Built</p>
                  <ul className="space-y-3">
                    {caseStudy.bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.07 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-brand" />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://hiringhood.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand/50 hover:text-brand transition-colors"
                >
                  hiringhood.com <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
