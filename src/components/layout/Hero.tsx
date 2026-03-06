"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterXIcon,
} from "@/components/reusable/icons";
import { Mail, ExternalLink, MessageCircleQuestion } from "lucide-react";

const taglines = [
  "Loves to break & fix interesting software.",
  "Computer Science Student.",
  "Full Stack Developer.",
  "Systems Enthusiast.",
  "Loves automating boring stuff.",
  "Builds things that scale.",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); // 3 seconds matching the typing animation in globals.css

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 sm:px-10 overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="w-full max-w-5xl z-10">
        {/* Availability Badge */}
        <div className="mb-6 animate-slide-down">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Open to SDE internship / full-time roles
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="flex-1">
            {/* Name */}
            <h1 className="text-5xl sm:text-8xl font-bold mb-4 tracking-tight">
              Eswar{" "}
              <span className="text-accent underline decoration-accent/30 decoration-wavy underline-offset-8">
                Dudi
              </span>
            </h1>

            {/* Tagline Animation */}
            <div className="h-12 sm:h-20 mb-6 flex items-center">
              <div className="typing-container text-2xl sm:text-4xl font-mono text-foreground/80">
                <div className="flex flex-col">
                  <span key={currentIndex} className="typing-text block">
                    {taglines[currentIndex]}
                  </span>
                </div>
              </div>
            </div>

            {/* One-liner */}
            <p className="text-lg sm:text-xl text-foreground/60 mb-10 max-w-2xl font-body italic">
              Backend systems · AI integrations · Full-stack development
            </p>
          </div>

          {/* Wiggling Emoji - Desktop only or subtle on mobile */}
          <div className="hidden lg:block animate-wiggle select-none">
            <span className="text-8xl sm:text-9xl filter drop-shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              👋
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 bg-accent text-background px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-95 min-w-[200px] h-12 shiny-button"
          >
            <Mail size={18} /> Request Resume
          </Link>
          <Link
            href="#ama"
            className="flex items-center justify-center gap-2 border border-accent/20 bg-accent/5 text-accent px-8 py-3 rounded-lg font-bold hover:bg-accent/10 transition-all hover:scale-[1.02] active:scale-95 min-w-[200px] h-12"
          >
            <MessageCircleQuestion size={18} /> Ask Me Anything
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 border border-accent/20 bg-accent/5 text-accent px-8 py-3 rounded-lg font-bold hover:bg-accent/10 transition-all hover:scale-[1.02] active:scale-95 min-w-[200px] h-12"
          >
            <ExternalLink size={18} /> View Projects
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 items-center border-t border-foreground/5 pt-8">
          <a
            href="https://github.com/eswar-7116"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/40 hover:text-accent transition-colors group"
            aria-label="GitHub"
          >
            <GitHubIcon className="group-hover:scale-110 transition-transform" />
            <span className="font-mono text-sm">eswar-7116</span>
          </a>
          <a
            href="https://linkedin.com/in/eswar-dudi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/40 hover:text-accent transition-colors group"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="group-hover:scale-110 transition-transform" />
            <span className="font-mono text-sm">eswar-dudi</span>
          </a>
          <a
            href="https://x.com/EswarDudi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/40 hover:text-accent transition-colors group"
            aria-label="X (Twitter)"
          >
            <TwitterXIcon className="group-hover:scale-110 transition-transform" />
            <span className="font-mono text-sm">EswarDudi</span>
          </a>
          <a
            href="mailto:eswardudi06@gmail.com"
            className="flex items-center gap-2 text-foreground/40 hover:text-accent transition-colors group"
            aria-label="Email"
          >
            <Mail
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-mono text-sm">eswardudi06@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Background decoration - technical grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
    </section>
  );
}
