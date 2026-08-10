import { about } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <section id="about" className="py-10 sm:py-10 border-t border-line">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="01 / who-i-am" title="About Me" />
                <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 mt-10">
                    <div className="space-y-5 text-muted leading-relaxed">
                        {about.journey.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                        <p>
                            <span className="text-text font-medium">
                                What I enjoy:{" "}
                            </span>
                            {about.enjoy}
                        </p>
                        <p>
                            <span className="text-text font-medium">
                                Outside of code:{" "}
                            </span>
                            {about.outside}
                        </p>
                    </div>

                    <div className="rounded-lg border border-line bg-panel p-6 font-mono text-sm h-fit">
                        <p className="text-teal mb-3">// quick facts</p>
                        <ul className="space-y-3 text-muted">
                            <li>
                                <span className="text-copper">role</span> =
                                "Assistant Engineer, DESCO"
                            </li>
                            <li>
                                <span className="text-copper">since</span> =
                                2020
                            </li>
                            <li>
                                <span className="text-copper">focus</span> =
                                ["backend", "databases", "APIs"]
                            </li>
                            <li>
                                <span className="text-copper">based_in</span> =
                                "Dhaka, Bangladesh"
                            </li>
                            <li>
                                <span className="text-copper">
                                    currently_exploring
                                </span>{" "}
                                = "Typescript, Nodejs, Express, Prisma, Next.js,
                                PostgreSQL"
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
