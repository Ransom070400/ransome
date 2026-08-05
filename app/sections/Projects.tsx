import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

// Bento placement + colour per project (keyed by id).
const layout: Record<
  string,
  { span: string; tone: string; dark: boolean; featured?: boolean }
> = {
  askzero: {
    span: "col-span-2 min-h-[320px] md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2 md:min-h-0",
    tone: "bg-bg-dark text-white",
    dark: true,
    featured: true,
  },
  knitnode: {
    span: "col-span-2 min-h-[200px] md:col-start-3 md:col-span-2 md:row-start-1 md:min-h-0",
    tone: "bg-mint text-ink",
    dark: false,
  },
  pingou: {
    span: "col-span-2 min-h-[200px] md:col-start-3 md:col-span-2 md:row-start-2 md:min-h-0",
    tone: "bg-purple text-white",
    dark: true,
  },
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <SectionHeading
        index="03"
        kicker="Projects"
        title="The work."
        description="From decentralized AI apps to low-level HID drivers — things I've shipped, and things I'm shipping right now."
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[210px]">
        {projects.map((project, i) => {
          const l = layout[project.id] ?? {
            span: "col-span-2 min-h-[200px]",
            tone: "bg-bg-card text-ink",
            dark: false,
          };
          return (
            <Reveal
              key={project.id}
              className={`h-full ${l.span}`}
              delay={(i % 3) * 0.05}
              mode="scale"
            >
              <ProjectCard
                project={project}
                className={l.tone}
                dark={l.dark}
                featured={l.featured}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
