"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { href: "#skills",    label: "Stack"     },
  { href: "#work",      label: "Work"      },
  { href: "#workflows", label: "Workflows" },
  { href: "#projects",  label: "Projects"  },
  { href: "#about",     label: "About"     },
  { href: "#contact",   label: "Contact"   },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.145_0_0/0.90)] backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0 group">
          <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-xs font-bold text-background leading-none select-none">
            UK
          </span>
          <span className="hidden sm:block text-sm font-semibold text-foreground/75 group-hover:text-foreground transition-colors duration-200">
            Uday Kiran
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 text-sm font-medium transition-colors duration-200 group"
                style={{ color: isActive ? "oklch(0.82 0.18 198)" : "oklch(0.7 0 0)" }}
              >
                {/* Label */}
                <span className="relative z-10 group-hover:text-foreground transition-colors duration-200"
                  style={{ color: isActive ? "oklch(0.82 0.18 198)" : undefined }}>
                  {l.label}
                </span>

                {/* Active underline */}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "oklch(0.82 0.18 198)" }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />

                {/* Hover underline (non-active) */}
                {!isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1px] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                    style={{ background: "oklch(0.82 0.18 198 / 0.4)" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand text-background text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shrink-0"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.07] bg-[oklch(0.145_0_0/0.97)] backdrop-blur-xl"
          >
            <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                      style={{
                        color: isActive ? "oklch(0.82 0.18 198)" : "oklch(0.65 0 0)",
                        background: isActive ? "oklch(0.82 0.18 198 / 0.08)" : "transparent",
                      }}
                    >
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "oklch(0.82 0.18 198)" }}
                        />
                      )}
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-3 border-t border-white/[0.07] mt-1">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-brand text-background text-sm font-semibold active:scale-95 transition-all duration-200"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
