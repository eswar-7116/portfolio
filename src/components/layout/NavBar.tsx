"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerToggle from "@/components/ui/HamburgerToggle";

export default function NavBar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/#contact" },
  ];
  const pathname = usePathname();
  const [section, setSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["about", "skills", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.find((e) => e.isIntersecting);
        if (vis) setSection(vis.target.id);
        else if (window.scrollY < 200) setSection("");
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    const onScroll = () => window.scrollY < 200 && setSection("");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/" && section === href.slice(2);
    if (href === "/") return pathname === "/" && !section;
    if (href === "/projects" && pathname === "/" && section === "projects") return true;
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
      <nav className="w-full max-w-5xl rounded-2xl bg-background/50 backdrop-blur-xl border border-accent/10 px-6 py-4 flex justify-between items-center shadow-2xl shadow-accent/5 pointer-events-auto">
        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-tighter hover:text-accent transition-colors"
        >
          ED
          <span className="text-accent underline decoration-accent/30 underline-offset-4">
            .
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-7 items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`font-mono text-base transition-colors hover:text-accent ${
                isActive(href) ? "text-accent" : "text-foreground/85"
              }`}
            >
              <span className="text-accent/40 mr-1.5 font-bold">/</span>
              <span
                className={
                  isActive(href)
                    ? "underline decoration-accent/50 underline-offset-8"
                    : ""
                }
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <HamburgerToggle navLinks={navLinks} />
      </nav>
    </header>
  );
}
