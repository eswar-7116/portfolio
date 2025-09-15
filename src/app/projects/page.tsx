import ProjectDetails from "@/components/reusable/ProjectDetails";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="text-xl max-w-3xl mx-auto mt-12 sm:mt-16 scroll-mt-30 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold w-full text-center text-blue-500">
          Here are all my projects
        </h1>
      </div>
      <div className="flex flex-col items-center-safe justify-center-safe p-4 sm:p-8 gap-4 sm:gap-6">
        {projects.map((proj, i) => (
          <ProjectDetails
            project={proj}
            key={i}
            className="bg-blue-900 w-full sm:max-w-3xl p-4 rounded-md"
          />
        ))}
      </div>
    </>
  );
}
