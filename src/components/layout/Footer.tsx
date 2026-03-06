export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-4 border-t border-accent/10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/eswar-7116"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/eswar-dudi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/EswarDudi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors"
          >
            X
          </a>
          <a
            href="mailto:eswardudi06@gmail.com"
            className="text-foreground/40 hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-foreground/30 text-sm font-mono tracking-wider">
          © {currentYear} Eswar Dudi · Built with Next.js
        </div>
      </div>
    </footer>
  );
}
