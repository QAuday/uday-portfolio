"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, personal } from "@/lib/data";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="flex items-start gap-5">
            <span
              className="hidden md:block text-8xl font-black leading-none select-none shrink-0"
              style={{ color: "oklch(0.82 0.18 198 / 0.08)" }}
            >
              04
            </span>
            <div className="space-y-2 pt-1">
              <p className="font-mono text-xs text-brand tracking-widest uppercase">Open Source</p>
              <h2 className="text-3xl md:text-4xl font-bold">GitHub Projects</h2>
            </div>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand font-mono transition-colors"
          >
            <GithubIcon style={{ width: 16, height: 16 }} />
            github.com/QAuday
            <ExternalLink size={12} />
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className="group relative flex flex-col gap-4 p-6 rounded-xl border border-border/50 bg-card/30 hover:border-brand/40 hover:bg-brand-dim transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <GithubIcon style={{ width: 16, height: 16 }} className="text-muted-foreground group-hover:text-brand transition-colors" />
                  <span className="font-mono text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                    {p.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground/60 text-xs font-mono shrink-0">
                  <Star size={12} />
                  {p.stars}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border border-border/40 bg-muted/20 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ExternalLink
                size={14}
                className="absolute top-5 right-5 text-muted-foreground/0 group-hover:text-brand/50 transition-all duration-200"
              />
            </motion.a>
          ))}

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-dashed border-border/30 bg-muted/10 text-center min-h-[160px]"
          >
            <div className="w-8 h-8 rounded-full bg-brand-dim border border-brand/20 flex items-center justify-center">
              <GithubIcon style={{ width: 16, height: 16 }} className="text-brand" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground/60">Playwright + TypeScript Suite</p>
              <p className="text-xs text-muted-foreground mt-1">Coming soon — pushing from Hiringhood work</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-brand/20 bg-brand-dim text-brand/70">
              In progress
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
