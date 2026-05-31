"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, personal } from "@/lib/data";

export default function ProjectsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="space-y-2">
            <p className="text-xs font-mono text-brand/70 tracking-widest uppercase">Open Source</p>
            <h2 className="text-3xl font-bold">GitHub Projects</h2>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground/50 hover:text-brand transition-colors"
          >
            <GithubIcon style={{ width: 14, height: 14 }} />
            github.com/QAuday
            <ExternalLink size={11} />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
              className="group flex flex-col gap-4 p-6 rounded-xl border border-white/[0.09] bg-white/[0.03] hover:border-brand/30 hover:bg-brand/[0.05] transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <GithubIcon
                    style={{ width: 15, height: 15 }}
                    className="text-muted-foreground/50 group-hover:text-brand transition-colors"
                  />
                  <span className="font-mono text-sm font-semibold group-hover:text-brand transition-colors">
                    {p.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground/40 text-xs font-mono shrink-0">
                  <Star size={11} />
                  {p.stars}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs font-mono border border-border/30 bg-muted/10 text-muted-foreground/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}

          {/* Coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-dashed border-border/25 bg-muted/5 text-center min-h-[160px]"
          >
            <GithubIcon style={{ width: 18, height: 18 }} className="text-muted-foreground/30" />
            <div>
              <p className="text-sm font-medium text-foreground/50">Playwright + TypeScript Suite</p>
              <p className="text-xs text-muted-foreground/40 mt-1">Coming soon — pushing from Hiringhood work</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-border/20 text-muted-foreground/30">
              In progress
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
