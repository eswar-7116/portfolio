import Link from "next/link";
import HamburgerToggle from "@/components/ui/HamburgerToggle";

export default function NavBar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
      <nav className="w-full max-w-5xl rounded-2xl bg-background/50 backdrop-blur-xl border border-accent/10 px-6 py-4 flex justify-between items-center shadow-2xl shadow-accent/5 pointer-events-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-mono text-xl font-bold tracking-tighter hover:text-accent transition-colors"
          >
            ED
            <span className="text-accent underline decoration-accent/30 underline-offset-4">
              .
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-[10px] font-mono text-accent uppercase tracking-tighter">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Available
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-sm text-foreground/60 hover:text-accent transition-colors"
            >
              <span className="text-accent/40 mr-1.5 font-bold">/</span>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <HamburgerToggle navLinks={navLinks} />
      </nav>
    </header>
  );
}
