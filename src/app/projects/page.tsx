import ProjectDetails from "@/components/reusable/ProjectDetails";
import projects from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eswar Dudi's Projects",
  description: "A showcase of projects built by Eswar Dudi.",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="text-xl max-w-3xl mx-auto mt-12 sm:mt-16 scroll-mt-30 px-4 sm:px-0" aria-label="Projects of Eswar Dudi" role="main">
        <h1 className="text-3xl sm:text-4xl font-bold w-full text-center text-blue-500">
          Here are all my projects
        </h1>
      </main>
      <section className="flex flex-col items-center-safe justify-center-safe p-4 sm:p-8 gap-4 sm:gap-6" id="content">
        {projects.map((proj, i) => (
          <ProjectDetails
            project={proj}
            key={i}
            className="bg-blue-900 w-full sm:max-w-3xl p-4 rounded-md"
          />
        ))}
      </section>
    </>
  );
}
