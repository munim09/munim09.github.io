import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#education", label: "Education" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? "bg-ink/90 backdrop-blur-md border-b border-line"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#home"
                    className="flex items-center gap-2 font-display font-semibold text-lg"
                    onClick={() => setOpen(false)}
                >
                    <span className="grid place-items-center w-8 h-8 rounded-md bg-panel border border-line text-copper font-mono text-sm">
                        SZ
                    </span>
                    <span className="hidden sm:inline">Shahiduz Zaman</span>
                </a>

                <ul className="hidden md:flex items-center gap-7 font-mono text-sm text-muted">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="hover:text-copper transition-colors"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden grid place-items-center w-10 h-10 rounded-md border border-line text-text"
                    >
                        <span className="relative w-5 h-3.5 block">
                            <span
                                className={`absolute left-0 top-0 w-5 h-0.5 bg-current transition-transform duration-200 ${
                                    open ? "translate-y-1.5 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-1.5 w-5 h-0.5 bg-current transition-opacity duration-200 ${
                                    open ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-3 w-5 h-0.5 bg-current transition-transform duration-200 ${
                                    open ? "-translate-y-1.5 -rotate-45" : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </nav>

            {open && (
                <ul className="md:hidden bg-ink border-b border-line px-6 pb-6 pt-2 flex flex-col gap-1 font-mono text-sm">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block py-3 border-b border-line/60 text-muted hover:text-copper transition-colors"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
