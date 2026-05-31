"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Languages } from "lucide-react";
import { personal, about, experience, certifications } from "@/lib/data";

export default function AboutSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-mono text-brand/70 tracking-widest uppercase">About</p>
          <h2 className="text-3xl font-bold">The engineer behind the automation.</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left — bio + experience */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-3 space-y-8"
          >
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>{about.para1}</p>
              <p>{about.para2}</p>
              <p>{about.para3}</p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: MapPin,       text: personal.location                        },
                { icon: GraduationCap, text: "JNTU Kakinada, B.Tech 2020"           },
                { icon: Languages,   text: about.languages.join(" · ")              },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-mono">
                  <Icon size={12} className="text-brand/60" />
                  {text}
                </span>
              ))}
            </div>

            {/* Experience timeline */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-muted-foreground/50 tracking-widest uppercase">Experience</p>
              <div className="space-y-0">
                {experience.map((e, i) => (
                  <motion.div
                    key={e.company}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex gap-4"
                  >
                    {/* Dot + line */}
                    <div className="flex flex-col items-center shrink-0 w-5">
                      <div
                        className={`mt-1 w-2.5 h-2.5 rounded-full border-2 shrink-0 ${
                          e.current
                            ? "bg-brand border-brand"
                            : "bg-background border-border/50"
                        }`}
                        style={e.current ? { boxShadow: "0 0 8px oklch(0.82 0.18 198 / 0.5)" } : {}}
                      />
                      {i < experience.length - 1 && (
                        <div className="w-px flex-1 bg-border/30 mt-1" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-6 space-y-0.5">
                      <p className="text-sm font-semibold text-foreground/90">{e.role}</p>
                      <p className="text-xs text-brand font-mono">{e.company}</p>
                      <p className="text-xs text-muted-foreground/60 font-mono">{e.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-muted-foreground/50 tracking-widest uppercase">Certifications</p>
              <ul className="space-y-1.5">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground/70">
                    <span className="text-brand mt-0.5 text-xs">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — photo + stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="md:col-span-2 flex flex-col items-center gap-6"
          >
            {/* Photo */}
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/[0.12]">
              <Image
                src={personal.photo}
                alt={personal.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 176px, 208px"
                priority
              />
            </div>

            {/* Name card */}
            <div className="text-center space-y-1">
              <p className="font-bold text-base">{personal.name}</p>
              <p className="text-xs font-mono text-brand">{personal.title}</p>
              <p className="text-xs text-muted-foreground/60">{personal.experience} Experience</p>
            </div>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 gap-2.5">
              {[
                { v: "3+",  l: "Years"      },
                { v: "2",   l: "Companies"  },
                { v: "5+",  l: "Tools"      },
                { v: "MCP", l: "AI Testing" },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  className="flex flex-col items-center gap-0.5 p-3 rounded-xl border border-white/[0.09] bg-white/[0.03]"
                >
                  <span className="text-lg font-bold text-brand">{v}</span>
                  <span className="text-xs text-muted-foreground/60">{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
