import { Link } from "react-router-dom";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-lg border border-line bg-panel overflow-hidden flex flex-col hover:border-copper/60 transition-colors">
      <div className="aspect-[16/10] overflow-hidden border-b border-line">
        <ProjectImage image={project.image} alt={`${project.name} illustration`} className="group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg">{project.name}</h3>
        <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.slice(0, 3).map((s) => (
            <span key={s} className="text-xs font-mono px-2 py-1 rounded border border-line text-muted">
              {s}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs font-mono px-2 py-1 text-muted">+{project.stack.length - 3}</span>
          )}
        </div>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-teal transition-colors"
        >
          View Details
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
