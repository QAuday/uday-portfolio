"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Languages } from "lucide-react";
import { personal, about, experience, certifications } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-6"
        >
          <span
            className="hidden md:block text-8xl font-black leading-none select-none shrink-0"
            style={{ color: "oklch(0.82 0.18 198 / 0.08)" }}
          >
            05
          </span>
          <div className="space-y-2 pt-1">
            <p className="font-mono text-xs text-brand tracking-widest uppercase">About</p>
            <h2 className="text-3xl md:text-4xl font-bold">The engineer behind the automation.</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">{about.para1}</p>
            <p className="text-muted-foreground leading-relaxed">{about.para2}</p>
            <p className="text-muted-foreground leading-relaxed">{about.para3}</p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <MapPin size={13} className="text-brand" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <GraduationCap size={13} className="text-brand" />
                JNTU Kakinada, B.Tech 2020
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <Languages size={13} className="text-brand" />
                {about.languages.join(" · ")}
              </span>
            </div>

            {/* Experience timeline */}
            <div className="space-y-4 pt-4">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                Experience
              </p>
              <div className="space-y-0">
                {experience.map((e, i) => (
                  <motion.div
                    key={e.company}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex gap-4"
                  >
                    {/* Dot + line column */}
                    <div className="flex flex-col items-center shrink-0 w-6">
                      <div
                        className={`mt-1 w-3 h-3 rounded-full border-2 shrink-0 ${
                          e.current
                            ? "bg-brand border-brand shadow-[0_0_8px_oklch(0.82_0.18_198/0.5)]"
                            : "bg-background border-border/60"
                        }`}
                      />
                      {i < experience.length - 1 && (
                        <div className="w-px flex-1 bg-border/40 mt-1 mb-0" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="space-y-0.5 pb-6">
                      <p className="font-semibold text-sm text-foreground">{e.role}</p>
                      <p className="text-xs text-brand font-mono">{e.company}</p>
                      <p className="text-xs text-muted-foreground font-mono">{e.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certs */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                Certifications
              </p>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-brand mt-0.5">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Photo — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col items-center gap-6"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute -inset-1 rounded-full blur-xl opacity-30"
                style={{ background: "radial-gradient(circle, oklch(0.82 0.18 198) 0%, transparent 70%)" }}
              />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-brand/30 shadow-2xl">
                <Image
                  src={personal.photo}
                  alt={personal.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </div>

            {/* Name card */}
            <div className="text-center space-y-1">
              <p className="font-bold text-lg">{personal.name}</p>
              <p className="text-xs font-mono text-brand">{personal.title}</p>
              <p className="text-xs text-muted-foreground">{personal.experience} Experience</p>
            </div>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 gap-3">
              {[
                { v: "3+",  l: "Years"      },
                { v: "2",   l: "Companies"  },
                { v: "5+",  l: "Tools"      },
                { v: "MCP", l: "AI Testing" },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  className="flex flex-col items-center gap-1 p-3 rounded-lg border border-border/40 bg-muted/20"
                >
                  <span className="text-xl font-bold text-brand">{v}</span>
                  <span className="text-xs text-muted-foreground">{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
