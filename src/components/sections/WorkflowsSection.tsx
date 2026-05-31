"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { workflows } from "@/lib/data";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const accentColors: Record<string, string> = {
  playwright: "#2dd4bf",
  mcp:        "#a855f7",
  cicd:       "#4ade80",
  reports:    "#fbbf24",
};

const fileNames: Record<string, string> = {
  playwright: "playwright.spec.ts",
  mcp:        "mcp-debug.ts",
  cicd:       ".github/workflows/playwright.yml",
  reports:    "playwright.config.ts",
};

const langs: Record<string, string> = {
  playwright: "typescript",
  mcp:        "typescript",
  cicd:       "yaml",
  reports:    "typescript",
};

export default function WorkflowsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workflows" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-mono text-brand/70 tracking-widest uppercase">How I Work</p>
          <h2 className="text-3xl font-bold">
            Systems thinking, <span className="text-brand">not just test writing.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Tabs defaultValue="playwright" className="w-full">
            <TabsList className="flex w-full mb-8 bg-white/[0.03] border border-white/[0.08] p-1 rounded-xl h-auto gap-1">
              {workflows.map((w) => (
                <TabsTrigger
                  key={w.id}
                  value={w.id}
                  className="flex-1 rounded-lg text-xs font-mono py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-foreground text-muted-foreground transition-all duration-200"
                >
                  {w.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {workflows.map((w) => {
              const accent = accentColors[w.id] ?? "#2dd4bf";
              const lang   = langs[w.id]        ?? "typescript";
              const fname  = fileNames[w.id]    ?? "code.ts";

              return (
                <TabsContent key={w.id} value={w.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* Code block */}
                    <div className="rounded-xl border overflow-hidden" style={{ borderColor: `${accent}20` }}>
                      {/* Window chrome */}
                      <div
                        className="flex items-center gap-2 px-4 py-2.5 border-b"
                        style={{ borderColor: `${accent}15`, background: "#13131f" }}
                      >
                        <span className="w-3 h-3 rounded-full bg-red-500/60" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <span className="w-3 h-3 rounded-full bg-green-500/60" />
                        <span className="ml-3 font-mono text-xs" style={{ color: `${accent}80` }}>{fname}</span>
                      </div>
                      <div className="overflow-x-auto text-xs">
                        <SyntaxHighlighter
                          language={lang}
                          style={atomOneDark}
                          customStyle={{
                            margin: 0,
                            padding: "1.25rem",
                            background: "#0d0d1a",
                            fontSize: "0.72rem",
                            lineHeight: "1.65",
                          }}
                          showLineNumbers
                          lineNumberStyle={{ color: "#3a3a5a", minWidth: "2em", paddingRight: "1em", userSelect: "none" }}
                          wrapLines
                        >
                          {w.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col justify-center space-y-5">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold" style={{ color: accent }}>{w.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
                      </div>

                      <ul className="space-y-2.5">
                        {w.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: accent }} />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div
                        className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-mono border"
                        style={{ borderColor: `${accent}25`, background: `${accent}08`, color: accent }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                        {w.label} workflow
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>

      </div>
    </section>
  );
}
