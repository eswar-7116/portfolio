"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface HamburgerToggleProps {
  navLinks: NavLink[];
}

export default function HamburgerToggle({ navLinks }: HamburgerToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 text-foreground/80 hover:text-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-xl border border-accent/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 animate-slide-down z-50">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="w-full py-3 px-4 rounded-xl hover:bg-accent/10 hover:text-accent font-medium transition-all active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t border-accent/10 flex justify-center gap-6">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest opacity-50">
              Available for opportunities
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
