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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {skills.map((group) => (
                        <div
                            key={group.category}
                            className="rounded-lg border border-line bg-panel p-6"
                        >
                            <h3 className="font-mono text-sm text-copper mb-4 uppercase tracking-wide">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-sm px-3 py-1.5 rounded-md border border-line text-muted hover:border-teal hover:text-teal transition-colors"
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
