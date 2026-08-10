import { education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
    return (
        <section
            id="education"
            className="py-10 sm:py-10 border-t border-line bg-panel-alt/40"
        >
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="04 / education" title="Education" />
                <div className="mt-10 max-w-3xl space-y-5">
                    {education.map((ed) => (
                        <div
                            key={ed.school}
                            className="rounded-lg border border-line bg-panel p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                        >
                            <div>
                                <h3 className="font-display font-semibold text-lg">
                                    {ed.school}
                                </h3>
                                <p className="text-copper text-sm mt-1">
                                    {ed.degree}
                                </p>
                                <p className="text-muted text-sm mt-1">
                                    {ed.detail}
                                </p>
                            </div>
                            <div className="text-right font-mono text-xs text-muted shrink-0">
                                <p>{ed.period}</p>
                                <p>{ed.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
