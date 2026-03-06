export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-8">
          <h2
            className="text-3xl sm:text-4xl font-mono font-bold flex items-center gap-3"
            id="about-heading"
          >
            <span className="text-accent underline decoration-accent/30 underline-offset-8">
              01.
            </span>{" "}
            About
          </h2>

          <div className="space-y-6 text-foreground/80 leading-relaxed font-body text-lg">
            <p>
              I&apos;m{" "}
              <span className="text-foreground font-semibold">Eswar Dudi</span>,
              a <span className="text-accent">Full Stack Developer</span> and{" "}
              <span className="text-accent">Android Developer</span> focused on
              building robust backend systems and exploring the depths of
              systems programming. My work ranges from crafting high-performance
              container runtimes in{" "}
              <span className="text-accent font-mono text-sm">Go</span> to
              architecting real-time communication platforms.
            </p>
            <p>
              Beyond traditional development, I have a strong interest in modern
              AI landscapes, including{" "}
              <span className="text-foreground font-semibold">Basic ML</span>,
              AI integrations, and{" "}
              <span className="text-foreground font-semibold">
                Prompt Engineering
              </span>
              . Driven by technical curiosity, I strive to understand the
              underlying mechanics of the tools I use, whether it&apos;s Linux
              namespaces or distributed system patterns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
            <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-2 font-bold">
              Education
            </h3>
            <p className="text-xl font-bold">B.Tech Computer Science</p>
            <p className="text-foreground/60">
              CVR College of Engineering, Hyderabad
            </p>
          </div>
        </div>

        <aside className="w-full md:w-72 space-y-6">
          <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/10">
            <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-4 font-bold">
              Beyond Code
            </h3>
            <ul className="space-y-3 text-sm text-foreground/70 font-body">
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span> Movie enthusiast
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span> Plant caretaker
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">→</span> Long walks & conversation
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
