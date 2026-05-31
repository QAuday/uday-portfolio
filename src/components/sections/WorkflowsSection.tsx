"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { workflows } from "@/lib/data";

const accentColors: Record<string, string> = {
  playwright: "var(--color-brand)",
  mcp:        "var(--color-mcp)",
  cicd:       "var(--color-success)",
  reports:    "var(--color-warn)",
};

export default function WorkflowsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workflows" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
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
                  className="rounded-lg text-xs font-mono font-medium data-[state=active]:bg-background data-[state=active]:text-brand data-[state=active]:shadow-sm py-2.5"
                >
                  {w.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {workflows.map((w) => {
              const accent = accentColors[w.id] ?? "var(--color-brand)";
              return (
                <TabsContent key={w.id} value={w.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* Code block */}
                    <div
                      className="rounded-xl border overflow-hidden"
                      style={{ borderColor: `${accent}30` }}
                    >
                      {/* Code window chrome */}
                      <div
                        className="flex items-center gap-2 px-4 py-3 border-b"
                        style={{
                          borderColor: `${accent}20`,
                          background: `oklch(from ${accent} l c h / 0.06)`,
                        }}
                      >
                        <span className="w-3 h-3 rounded-full bg-red-500/60" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <span className="w-3 h-3 rounded-full bg-green-500/60" />
                        <span className="ml-3 font-mono text-xs text-muted-foreground">
                          {w.id === "playwright" && "playwright.spec.ts"}
                          {w.id === "mcp"        && "mcp-debug.session"}
                          {w.id === "cicd"       && "playwright.yml"}
                          {w.id === "reports"    && "playwright.config.ts"}
                        </span>
                      </div>
                      <pre
                        className="overflow-x-auto p-5 text-xs leading-relaxed font-mono"
                        style={{ background: "oklch(0.12 0 0)" }}
                      >
                        <code
                          className="text-muted-foreground"
                          style={{ "--accent": accent } as React.CSSProperties}
                          dangerouslySetInnerHTML={{
                            __html: highlightCode(w.code, w.id),
                          }}
                        />
                      </pre>
                    </div>

                    {/* Description + bullets */}
                    <div className="space-y-6 flex flex-col justify-center">
                      <div className="space-y-3">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: accent }}
                        >
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

function highlightCode(code: string, id: string): string {
  const keywords  = ["import", "from", "export", "default", "const", "let", "return",
                     "async", "await", "new", "type", "interface", "extends", "class",
                     "if", "else", "undefined", "null", "true", "false", "always"];
  const types     = ["Page", "Locator", "Metadata", "defineConfig", "devices", "test", "expect"];
  const strings   = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`/g;
  const comments  = /\/\/.+/g;
  const numbers   = /\b\d+\b/g;
  const decorators = /@\w+/g;

  const color: Record<string, string> = {
    playwright: "oklch(0.82 0.18 198)",
    mcp:        "oklch(0.72 0.22 284)",
    cicd:       "oklch(0.72 0.18 145)",
    reports:    "oklch(0.78 0.17 80)",
  };
  const accent = color[id] ?? color.playwright;

  let out = escapeHtml(code);

  out = out.replace(comments, (m) => `<span style="color:oklch(0.55 0 0);font-style:italic">${m}</span>`);
  out = out.replace(strings,  (m) => `<span style="color:oklch(0.72 0.18 145)">${m}</span>`);
  out = out.replace(numbers,  (m) => `<span style="color:oklch(0.78 0.17 80)">${m}</span>`);
  out = out.replace(decorators, (m) => `<span style="color:${accent}">${m}</span>`);

  keywords.forEach((kw) => {
    out = out.replace(
      new RegExp(`\\b${kw}\\b`, "g"),
      `<span style="color:oklch(0.72 0.22 284)">${kw}</span>`
    );
  });
  types.forEach((t) => {
    out = out.replace(
      new RegExp(`\\b${t}\\b`, "g"),
      `<span style="color:${accent}">${t}</span>`
    );
  });

  return out;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
