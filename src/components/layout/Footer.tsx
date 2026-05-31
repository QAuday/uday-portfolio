"use client";

import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "#skills",    label: "Stack"     },
  { href: "#work",      label: "Work"      },
  { href: "#workflows", label: "Workflows" },
  { href: "#projects",  label: "Projects"  },
  { href: "#about",     label: "About"     },
  { href: "#contact",   label: "Contact"   },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[oklch(0.12_0_0)]">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">

          {/* Brand block */}
          <div className="space-y-3 max-w-xs">
            <a href="#hero" className="flex items-center gap-2 group w-fit">
              <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-xs font-bold text-background select-none">
                UK
              </span>
              <span className="text-sm font-semibold text-foreground/75 group-hover:text-foreground transition-colors duration-200">
                Uday Kiran Kota
              </span>
            </a>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Quality Engineer building automation systems that give teams confidence to ship fast without compromising reliability.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground/40 hover:text-brand transition-colors duration-200"
              >
                <GithubIcon style={{ width: 16, height: 16 }} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground/40 hover:text-brand transition-colors duration-200"
              >
                <LinkedinIcon style={{ width: 16, height: 16 }} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-xs font-mono text-muted-foreground/40 hover:text-brand transition-colors duration-200"
              >
                {personal.email}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[10px] font-mono text-muted-foreground/35 tracking-widest uppercase mb-2">
              Navigation
            </p>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors duration-200 w-fit"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Status block */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-mono text-muted-foreground/35 tracking-widest uppercase">
              Availability
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/20 bg-brand/[0.06] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-mono text-brand">Open to opportunities</span>
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand text-background text-xs font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 w-fit"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/30 font-mono">
            © {new Date().getFullYear()} Uday Kiran Kota. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/25 font-mono">
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}
