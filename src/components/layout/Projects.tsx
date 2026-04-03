import ProjectDetails from "@/components/reusable/ProjectDetails";
import projects from "@/data/projects";
import Link from "next/link";
import CyberCube from "@/components/models/CyberCube";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
          <div className="space-y-6 flex-1">
            <h2
                className="text-3xl sm:text-4xl font-mono font-bold flex items-center gap-3"
                id="projects-heading"
            >
                <span className="text-accent underline decoration-accent/30 underline-offset-8">
                03.
                </span>{" "}
                Projects
            </h2>
            <p className="text-foreground/60 max-w-xl font-body">
                A selection of systems-oriented projects, distributed patterns, and 
                full-stack applications focused on performance and scale.
            </p>
            <Link
                href="/projects"
                className="inline-block text-accent text-sm font-mono hover:underline underline-offset-4"
            >
                view_all_projects()
            </Link>
          </div>
          
          <div className="w-full lg:w-64 aspect-square relative hidden lg:block group">
              <CyberCube />
              <div className="absolute inset-0 bg-accent/5 blur-3xl -z-10 group-hover:bg-accent/10 transition-colors"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((proj, i) => (
            <ProjectDetails project={proj} key={i} className="h-full" />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg border border-accent/20 bg-accent/5 text-accent font-mono text-sm hover:bg-accent/10 transition-colors"
          >
            explore_more_work()
          </Link>
        </div>
      </div>
    </div>
  );
}
