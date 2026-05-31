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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 hidden md:flex"
          aria-label="Section navigation"
        >
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <div
                key={id}
                className="relative flex items-center justify-end"
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Tooltip label */}
                <AnimatePresence>
                  {hovered === id && (
                    <motion.span
                      initial={{ opacity: 0, x: 8, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 8, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-7 px-2.5 py-1 rounded-md text-xs font-mono whitespace-nowrap border border-border/40 bg-background/90 backdrop-blur-sm text-foreground/80 shadow-lg pointer-events-none"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <motion.a
                  href={`#${id}`}
                  aria-label={`Go to ${label}`}
                  animate={{
                    scale:  isActive ? 1.4 : 1,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  whileHover={{ scale: 1.6, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-2 h-2 rounded-full transition-colors"
                  style={{
                    background: isActive
                      ? "oklch(0.82 0.18 198)"
                      : "oklch(0.6 0 0)",
                    boxShadow: isActive
                      ? "0 0 8px oklch(0.82 0.18 198 / 0.7)"
                      : "none",
                  }}
                />
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
