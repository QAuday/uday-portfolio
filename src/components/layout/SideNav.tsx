"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero",      label: "Home"      },
  { id: "skills",    label: "Stack"     },
  { id: "work",      label: "Work"      },
  { id: "workflows", label: "Workflows" },
  { id: "projects",  label: "Projects"  },
  { id: "about",     label: "About"     },
  { id: "contact",   label: "Contact"   },
];

export default function SideNav() {
  const [active,  setActive]  = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5 hidden lg:flex"
      aria-label="Section navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <div
            key={id}
            className="relative flex items-center justify-end gap-3"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-8 px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap border border-white/[0.1] bg-[oklch(0.18_0_0)] text-foreground/70 shadow-xl pointer-events-none"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <motion.a
              href={`#${id}`}
              aria-label={`Go to ${label}`}
              animate={isActive
                ? { scale: 1, opacity: 1 }
                : { scale: 1, opacity: 0.35 }
              }
              whileHover={{ scale: 1.25, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center shrink-0"
              style={{ width: 14, height: 14 }}
            >
              {/* Outer ring */}
              <span
                className="absolute inset-0 rounded-full border transition-all duration-300"
                style={{
                  borderColor: isActive ? "oklch(0.82 0.18 198)" : "oklch(0.6 0 0 / 0.5)",
                  boxShadow: isActive ? "0 0 0 3px oklch(0.82 0.18 198 / 0.15)" : "none",
                }}
              />
              {/* Inner fill */}
              <span
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 8 : 5,
                  height: isActive ? 8 : 5,
                  background: isActive ? "oklch(0.82 0.18 198)" : "oklch(0.6 0 0 / 0.5)",
                  boxShadow: isActive ? "0 0 6px oklch(0.82 0.18 198 / 0.8)" : "none",
                }}
              />
            </motion.a>
          </div>
        );
      })}
    </nav>
  );
}
