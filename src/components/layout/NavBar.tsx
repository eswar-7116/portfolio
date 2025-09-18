"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: pathname === "/" ? "#about" : "/#about" },
    { label: "Contact", href: pathname === "/" ? "#contact" : "/#contact" },
    { label: "Skills", href: pathname === "/" ? "#skills" : "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "AMA Bot", href: pathname === "/" ? "#ama" : "/#ama" },
  ];

  return (
    <div className="sticky top-0 z-10 p-0.5">
      <nav className="rounded-full p-4 px-6 m-4 bg-gray-600/10 backdrop-blur-md border border-white/20 shadow-sm shadow-blue-400 flex justify-between items-center-safe">
        <span className="md:text-xl text-md font-semibold">Eswar Dudi</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 md:text-md text-sm">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
          <a href="/Eswar_Dudi.pdf" rel="noopener noreferrer" target="_blank">
            Resume
          </a>
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
      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden flex flex-col items-center gap-3 p-4 mx-4 mt-2
               bg-gray-600/10 backdrop-blur-md border border-white/20 
               shadow-sm shadow-blue-400 rounded-2xl animate__animated animate__fadeIn animate__slideInDown"
            role="navigation"
            aria-label="Mobile Menu"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white w-full py-2.5 px-4 text-center font-medium rounded-xl
                   bg-gray-700/20 active:scale-95 transition duration-200 ease-in-out"
                onClick={() => setOpen(false)}
                aria-label={label}
              >
                {label}
              </Link>
            ))}
            <a
              href="/Eswar_Dudi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white w-full py-2.5 px-4 text-center font-medium rounded-xl
                 bg-gray-700/20 active:scale-95 transition duration-200 ease-in-out"
              onClick={() => setOpen(false)}
              aria-label="Resume"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
