import { Project } from "@/types/project";
import { ExternalLink, Github } from "lucide-react";

type ProjectDetailsProps = {
  project: Project;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ProjectDetails({
  project,
  className,
  ...props
}: ProjectDetailsProps) {
  return (
    <div
      className={`group relative rounded-2xl p-6 bg-foreground/[0.02] border border-foreground/10 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5 flex flex-col ${className}`}
      {...props}
    >
      {/* Accent Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent/20 group-hover:bg-accent transition-colors rounded-t-2xl" />

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl sm:text-2xl font-bold font-mono group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors"
            aria-label="View Source on GitHub"
          >
            <Github size={20} />
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-accent transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <p className="text-foreground/60 mb-6 font-body text-sm sm:text-base leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.skills.map((skill, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-[10px] font-mono rounded bg-accent/5 border border-accent/10 text-accent/80 uppercase tracking-wider"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
