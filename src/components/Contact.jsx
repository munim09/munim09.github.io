import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-10 sm:py-10 border-t border-line bg-panel-alt/40"
        >
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="06 / get-in-touch" title="Contact" />
                <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <p className="text-muted leading-relaxed max-w-md">
                            Have a project in mind, an opening on your team, or
                            just want to talk shop about Oracle queries and
                            Prisma migrations? My inbox is open.
                        </p>
                        <div className="mt-6">
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="rounded-lg border border-line bg-panel p-6 space-y-4 font-mono text-sm">
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center gap-3 hover:text-copper transition-colors"
                        >
                            <span className="grid place-items-center w-9 h-9 rounded-md border border-line shrink-0">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M2 5h16v10H2V5Zm0 0 8 6 8-6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            {profile.email}
                        </a>
                        <a
                            href={`tel:${profile.phone}`}
                            className="flex items-center gap-3 hover:text-copper transition-colors"
                        >
                            <span className="grid place-items-center w-9 h-9 rounded-md border border-line shrink-0">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M4 3h3l1.5 4L7 8.5a10 10 0 0 0 4.5 4.5L13 11.5l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A14 14 0 0 1 2.5 4.6 1.5 1.5 0 0 1 4 3Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            {profile.phone}
                        </a>
                        <a
                            href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-3 hover:text-teal transition-colors"
                        >
                            <span className="grid place-items-center w-9 h-9 rounded-md border border-line shrink-0">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Z" />
                                </svg>
                            </span>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
