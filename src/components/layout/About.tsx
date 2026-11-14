import { MatrixSphere } from "@/components/models/lazy";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:flex-1 space-y-8">
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
              a <span className="text-accent font-semibold">Software Engineer</span> focused on backend and&nbsp;
              <span className="text-accent font-semibold">systems engineering</span>: <span className="text-accent font-semibold">distributed systems</span>,
              microservices, cloud-native infrastructure and high-performance
              services. I work in <span className="text-accent font-mono">Go</span>, <span className="text-accent font-mono">Java</span>,&nbsp;
              <span className="text-accent font-mono">Python</span> and <span className="text-accent font-mono">TypeScript/JavaScript</span>, and
              I&apos;ve built a serverless platform with gRPC, Redis and
              Docker, a container runtime on Linux namespaces, and a lock-free
              monitoring library for Spring Boot published on Maven Central.
            </p>
            <p>
              I&apos;m also a&nbsp;
              <span className="text-accent font-semibold">backend-focused Full Stack Developer</span>, building
              scalable web apps with React, Next.js, Node.js and REST APIs, and
              shipping <span className="text-accent font-semibold">AI integrations</span> and agentic AI tools
              like a terminal coding agent with MCP support. I care about how
              things work underneath, and I benchmark performance and
              scalability instead of guessing at them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
              <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-2 font-bold">
                Education
              </h3>
              <p className="text-xl font-bold">B.Tech Computer Science</p>
              <p className="text-foreground/60">
                CVR College of Engineering, Hyderabad
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-foreground/3 border border-foreground/10">
              <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-2 font-bold">
                Beyond Code
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-foreground/70 font-body">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Movie enthusiast
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Plant caretaker
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Long walks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span>
                    Making games for fun (
                    <a
                      href="https://esward.itch.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-4"
                    >
                      itch.io
                    </a>
                    )
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="w-full lg:w-[400px] hidden min-[850px]:flex flex-col items-center justify-center">
          <div className="w-full aspect-square relative group">
            <MatrixSphere />
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors"></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
