"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  /** grid span + background utility classes */
  className?: string;
  /** true when the card sits on a dark background */
  dark?: boolean;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  className = "",
  dark = false,
  featured = false,
}: ProjectCardProps) {
  const href = project.link ?? project.github ?? "#";
  const chip = dark
    ? "bg-white/10 text-white/80"
    : "bg-ink/[0.06] text-ink-soft";
  const sub = dark ? "text-white/70" : "text-ink-soft";
  const arrow = dark
    ? "bg-white/15 text-white group-hover:bg-white group-hover:text-ink"
    : "bg-ink/[0.06] text-ink group-hover:bg-ink group-hover:text-white";

  return (
    <a
      href={href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] p-7 transition-all duration-300 hover:-translate-y-1.5 ${className}`}
    >
      <span
        className={`absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${arrow}`}
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </span>

      <div className="mb-3 flex items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${chip}`}
        >
          {project.status}
        </span>
      </div>

      <h3
        className={`font-display font-bold leading-tight ${
          featured ? "text-4xl sm:text-5xl" : "text-2xl"
        }`}
      >
        {project.name}
      </h3>

      <p
        className={`mt-3 leading-relaxed ${sub} ${
          featured ? "max-w-xl text-lg" : "line-clamp-3 max-w-[92%] text-sm"
        }`}
      >
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.tech.map((t) => (
          <span key={t} className={`rounded-md px-2 py-0.5 text-xs ${chip}`}>
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
