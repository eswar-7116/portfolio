import ProjectDetails from "@/components/reusable/ProjectDetails";
import projects from "@/data/projects";
import { Metadata } from "next";
import ProjectVoxels from "@/components/models/ProjectVoxels";

export const metadata: Metadata = {
  title: "Projects | Eswar Dudi",
  description:
    "A showcase of technical projects built by Eswar Dudi, including container runtimes, serverless platforms, and real-time systems.",
};

export default function ProjectsPage() {
  return (
    <main
      className="min-h-screen py-24 px-4 sm:px-10 overflow-hidden"
      aria-label="Projects of Eswar Dudi"
      role="main"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-6 flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-7xl font-mono font-bold tracking-tight">
              My{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                Projects
              </span>
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto lg:mx-0 font-body text-xl leading-relaxed">
              A comprehensive list of my work, ranging from systems-level tools
              to AI-powered applications. Each project is built with a focus on
              performance, reliability, and modern architecture.
            </p>
          </div>

          <div className="w-full lg:w-[450px] aspect-square relative hidden min-[850px]:flex items-center justify-center group shrink-0">
            <ProjectVoxels />
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
          </div>
        </header>

        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="content"
        >
          {projects.map((proj, i) => (
            <ProjectDetails project={proj} key={i} className="h-full" />
          ))}
        </section>
      </div>
    </main>
  );
}
