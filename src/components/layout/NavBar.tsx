"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: pathname === "/" ? "#about" : "/#about" },
    { label: "Contact", href: pathname === "/" ? "#contact" : "/#contact" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/Eswar_Dudi.pdf", target: "_blank" },
    { label: "AMA Bot", href: pathname === "/" ? "#ama" : "/#ama" },
  ];

  return (
    <div className="sticky top-0 z-10 p-0.5">
      <nav className="rounded-full p-4 px-6 m-4 bg-gray-600/10 backdrop-blur-md border border-white/20 shadow-sm shadow-blue-400 flex justify-between items-center-safe">
        <span className="md:text-xl text-md font-semibold">Eswar Dudi</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 md:text-md text-sm">
          {navLinks.map(({ label, href, target }) => (
            <a key={label} href={href} target={target ?? "_self"}>
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden flex items-center-safe"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center-safe gap-4 pb-4 animate-slide-down text-md">
          {navLinks.map(({ label, href, target }) => (
            <a
              key={label}
              href={href}
              target={target ?? "_self"}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
