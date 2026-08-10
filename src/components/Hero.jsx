import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

const logLines = [
    "grid://desco-connection-svc  initializing...",
    "linking  oracle_sql  <->  spring_boot",
    "linking  express_api  <->  postgres+prisma",
    "resolving CONNECT BY ... 4 rows joined",
    "status: 200 OK — connection established",
];

function Terminal() {
    const [visible, setVisible] = useState(1);

    useEffect(() => {
        if (visible >= logLines.length) {
            const reset = setTimeout(() => setVisible(1), 2200);
            return () => clearTimeout(reset);
        }
        const t = setTimeout(() => setVisible((v) => v + 1), 850);
        return () => clearTimeout(t);
    }, [visible]);

    return (
        <div className="rounded-lg border border-line bg-panel-alt/80 font-mono text-xs sm:text-sm overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-panel">
                <span className="w-2.5 h-2.5 rounded-full bg-copper/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-line" />
                <span className="ml-3 text-muted">connection-monitor</span>
            </div>
            <div className="px-4 py-4 space-y-1.5 min-h-[132px]">
                {logLines.slice(0, visible).map((line, i) => (
                    <p
                        key={i}
                        className={
                            i === visible - 1 ? "text-teal" : "text-muted"
                        }
                    >
                        <span className="text-copper">$</span> {line}
                    </p>
                ))}
                <span className="inline-block w-2 h-4 bg-copper align-middle animate-pulse" />
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-22 pb-20 sm:pt-20 sm:pb-18 grid-bg overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/60 to-ink pointer-events-none" />
            <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
                <div>
                    {/* <p className="font-mono text-xs sm:text-sm text-teal tracking-widest uppercase mb-4">
            connection established
          </p> */}
                    <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                        {profile.name}
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-copper font-display font-medium">
                        {profile.designation}
                    </p>
                    <p className="mt-5 text-muted max-w-xl leading-relaxed">
                        {profile.tagline}
                    </p>

                    {/* <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href={profile.resumeFile}
                            download
                            className="inline-flex items-center gap-2 rounded-md bg-copper text-ink font-medium px-5 py-3 hover:bg-copper-dim transition-colors"
                        >
                            Download Resume
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M8 1v9m0 0L4.5 6.5M8 10l3.5-3.5M2 13h12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-text hover:border-copper hover:text-copper transition-colors"
                        >
                            View Projects
                        </a>
                    </div> */}

                    <div className="mt-8">
                        <SocialLinks />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="w-40 sm:w-48 lg:w-56 rounded-2xl overflow-hidden border border-line shadow-lg shadow-black/30">
                        <img
                            src="/avatar-placeholder.jpg"
                            alt={`Portrait placeholder for ${profile.name}`}
                            className="w-full h-auto object-bottom"
                        />
                    </div>
                    {/* <Terminal /> */}
                </div>
            </div>
        </section>
    );
}
