import { Project } from "@/types/project";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/reusable/icons";

type ProjectDetailsProps = { project: Project } & React.HTMLAttributes<HTMLDivElement>;

export default function ProjectDetails({ project, className, ...props }: ProjectDetailsProps) {
  return (
    <div
      className={`rounded-xl p-4 sm:p-6 bg-gray-900 border border-gray-800 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition ${className}`}
      {...props}
    >
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h2>

      {/* Description */}
      <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-xs sm:text-sm rounded-full bg-gray-800 border border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-all w-full sm:w-auto text-center"
        >
          <GitHubIcon /> GitHub
        </a>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-all w-full sm:w-auto text-center"
          >
            <ExternalLink size={18} /> Live
          </a>
        )}
      </div>
    </div>
  );
}
