import ProjectDetails from "@/components/reusable/ProjectDetails";
import projects from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="text-xl max-w-3xl mx-auto mt-12 sm:mt-16 px-4 sm:px-0">
        <h1
          className="text-3xl sm:text-4xl font-bold w-full text-center text-blue-500"
          id="projects-heading"
        >
          Some of my top projects
        </h1>
      </div>
      <div className="flex flex-col items-center-safe justify-center-safe p-4 sm:p-8 gap-4 sm:gap-6">
        {projects.slice(0, 5).map((proj, i) => (
          <ProjectDetails
            project={proj}
            key={i}
            className="bg-blue-900 w-full sm:max-w-3xl p-4 rounded-md"
          />
        ))}
        <Link href="/projects">
          <button className="bg-blue-800 px-4 py-3 rounded-lg mt-3 sm:mt-5 w-full sm:w-auto cursor-pointer transition-transform will-change-transform hover:scale-105">
            Explore more projects
          </button>
        </Link>
      </div>
    </>
  );
}
