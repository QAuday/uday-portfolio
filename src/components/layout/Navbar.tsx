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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm font-bold tracking-wider text-foreground hover:text-brand transition-colors shrink-0"
        >
          UK<span className="text-brand">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  active === l.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-white/[0.06]"
                    transition={{ type: "spring", duration: 0.3 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full border border-brand/30 text-brand text-xs font-mono font-medium hover:bg-brand/[0.07] transition-all duration-200 shrink-0"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl"
          >
            <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-0.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
