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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workflows" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="font-mono text-xs text-brand tracking-widest uppercase">How I Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Systems thinking,{" "}
            <span className="text-brand">not just test writing.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Tabs defaultValue="playwright" className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full mb-8 bg-muted/30 border border-border/40 p-1 rounded-xl h-auto">
              {workflows.map((w) => (
                <TabsTrigger
                  key={w.id}
                  value={w.id}
                  className="rounded-lg text-xs font-mono font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm py-2.5"
                  style={
                    {
                      "--tw-text-opacity": 1,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className="data-[state=active]:text-inherit"
                    style={{ color: "inherit" }}
                  >
                    {w.label}
                  </span>
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
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* Code block */}
                    <div
                      className="rounded-xl border overflow-hidden"
                      style={{ borderColor: `${accent}30` }}
                    >
                      {/* Window chrome */}
                      <div
                        className="flex items-center gap-2 px-4 py-2.5 border-b"
                        style={{
                          borderColor: `${accent}20`,
                          background: "#1a1a2e",
                        }}
                      >
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-green-500/70" />
                        <span
                          className="ml-3 font-mono text-xs"
                          style={{ color: `${accent}90` }}
                        >
                          {fname}
                        </span>
                      </div>

                      {/* Highlighted code */}
                      <div className="overflow-x-auto text-xs leading-relaxed">
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
                          lineNumberStyle={{
                            color: "#3a3a5a",
                            minWidth: "2em",
                            paddingRight: "1em",
                            userSelect: "none",
                          }}
                          wrapLines
                        >
                          {w.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>

                    {/* Description + bullets */}
                    <div className="space-y-6 flex flex-col justify-center">
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold" style={{ color: accent }}>
                          {w.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {w.description}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {w.bullets.map((b, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07, duration: 0.3 }}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <CheckCircle2
                              size={15}
                              className="shrink-0 mt-0.5"
                              style={{ color: accent }}
                            />
                            {b}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Accent pill */}
                      <div
                        className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-mono border"
                        style={{
                          borderColor: `${accent}30`,
                          background: `${accent}10`,
                          color: accent,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: accent }}
                        />
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
