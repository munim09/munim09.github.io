import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-10 sm:py-10 border-t border-line"
        >
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="03 / experience" title="Experience" />
                <div className="mt-10 relative border-l border-line pl-8 space-y-12 max-w-3xl">
                    {experience.map((job) => (
                        <div key={job.company} className="relative">
                            <span className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-copper border-2 border-ink" />
                            <p className="font-mono text-xs text-teal">
                                {job.period}
                            </p>
                            <h3 className="font-display font-semibold text-xl mt-1">
                                {job.role}
                            </h3>
                            <p className="text-copper font-medium">
                                {job.company}{" "}
                                <span className="text-muted font-normal">
                                    — {job.location}
                                </span>
                            </p>
                            <ul className="mt-3 space-y-2 text-muted text-sm leading-relaxed list-disc list-outside ml-4">
                                {job.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {job.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="text-xs font-mono px-2.5 py-1 rounded border border-line text-muted"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
