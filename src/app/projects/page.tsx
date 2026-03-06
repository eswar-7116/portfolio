import ProjectDetails from "@/components/reusable/ProjectDetails";
import projects from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Eswar Dudi",
  description:
    "A showcase of technical projects built by Eswar Dudi, including container runtimes, serverless platforms, and real-time systems.",
};

export default function ProjectsPage() {
  return (
    <main
      className="min-h-screen py-24 px-4 sm:px-10"
      aria-label="Projects of Eswar Dudi"
      role="main"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-mono font-bold tracking-tight">
            My{" "}
            <span className="text-accent underline decoration-accent/30 underline-offset-8">
              Projects
            </span>
          </h1>
          <p className="text-foreground/60 max-w-2xl font-body text-lg">
            A comprehensive list of my work, ranging from systems-level tools to
            AI-powered applications.
          </p>
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
