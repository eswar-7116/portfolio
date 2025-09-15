import ProjectDetails from "@/components/reusable/ProjectDetails";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="text-xl max-w-3xl mx-auto mt-16 scroll-mt-30" id="about">
        <h1 className="text-4xl font-bold w-full text-center text-blue-500">
          Here are all my projects
        </h1>
      </div>
      <div className="flex flex-col items-center-safe justify-center-safe p-8 gap-6">
        {projects.map((proj, i) => (
          <ProjectDetails
            project={proj}
            key={i}
            className="bg-blue-900 max-w-3xl p-4 rounded-md"
          />
        ))}
      </div>
    </>
  );
}
