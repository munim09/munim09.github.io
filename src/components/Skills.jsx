import { skills } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-10 sm:py-10 border-t border-line bg-panel-alt/40"
        >
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="02 / stack" title="Skills" />
                <div className="mt-10 divide-y divide-line">
                    {skills.map((group) => (
                        <div
                            key={group.category}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-6 py-5"
                        >
                            <span className="font-mono text-sm text-copper uppercase tracking-widest sm:w-48 shrink-0">
                                {group.category}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-sm px-3.5 py-1 rounded-full border border-line text-muted hover:border-copper/40 hover:text-text transition-colors"
                                    >
                                        {item}
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
