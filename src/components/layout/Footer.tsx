import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Uday Kiran Kota — Built with Next.js &amp; Playwright mindset.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-brand transition-colors"
          >
            <GithubIcon style={{ width: 18, height: 18 }} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-brand transition-colors"
          >
            <LinkedinIcon style={{ width: 18, height: 18 }} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-brand transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
