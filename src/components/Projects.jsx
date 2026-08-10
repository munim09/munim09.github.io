import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
    return (
        <section id="projects" className="py-10 sm:py-10 border-t border-line">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="05 / selected-work" title="Projects" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {projects.map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
