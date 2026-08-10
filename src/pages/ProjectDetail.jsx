import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-40 pb-28 text-center px-6">
          <p className="font-mono text-teal text-sm mb-2">404</p>
          <h1 className="font-display text-3xl font-semibold">Project not found</h1>
          <Link to="/#projects" className="inline-block mt-6 text-copper hover:text-teal">
            ← Back to projects
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/#projects" className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-copper transition-colors">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3m0 0 4-4M3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to all projects
          </Link>

          <div className="mt-6 rounded-lg overflow-hidden border border-line">
            <img src={project.image} alt={`${project.name} illustration`} className="w-full h-auto" />
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-4xl mt-8">{project.name}</h1>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map((s) => (
              <span key={s} className="text-xs font-mono px-2.5 py-1 rounded border border-line text-teal">
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-copper text-ink font-medium px-5 py-2.5 hover:bg-copper-dim transition-colors"
            >
              Live Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 hover:border-copper hover:text-copper transition-colors"
            >
              GitHub Repository
            </a>
          </div>

          <section className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-teal mb-3">Overview</h2>
            <p className="text-muted leading-relaxed">{project.description}</p>
          </section>

          <section className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-teal mb-3">Challenges</h2>
              <ul className="space-y-2 text-muted text-sm leading-relaxed list-disc list-outside ml-4">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-teal mb-3">Future Improvements</h2>
              <ul className="space-y-2 text-muted text-sm leading-relaxed list-disc list-outside ml-4">
                {project.improvements.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
