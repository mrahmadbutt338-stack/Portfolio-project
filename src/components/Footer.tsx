"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useLenis } from "lenis/react";

export function Footer() {
  const lenis = useLenis();

  return (
    <footer className="py-8 bg-surface border-t border-surface/50 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-mono">
          © {new Date().getFullYear()} Ahmad Asad. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/mrahmadbutt338-stack" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-asad-b14606341/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mrahmadbutt338@gmail.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <button
          onClick={() => lenis?.scrollTo(0)}
          className="w-10 h-10 rounded-full bg-background border border-surface flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
