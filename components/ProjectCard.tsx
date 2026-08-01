import type { Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  "In Progress": "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  Shipped: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  Archived: "bg-slate-500/15 text-slate-300 ring-slate-500/30",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col rounded-lg border border-border-subtle bg-surface-2/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-2">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-text group-hover:text-white">
          {project.name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border-subtle bg-background/50 px-2 py-0.5 text-xs text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.link || project.github) && (
        <div className="mt-auto flex items-center gap-4 pt-5 text-sm">
          {project.link && (
            <a
              href={project.link}
              className="font-medium text-accent hover:underline"
            >
              Live →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="font-medium text-text-muted hover:text-text"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
