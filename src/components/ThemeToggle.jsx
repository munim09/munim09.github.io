import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative grid place-items-center w-10 h-10 rounded-md border border-line text-text hover:border-copper hover:bg-copper/10 hover:text-copper active:bg-copper/20 transition-colors"
    >
      <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 1v2m0 14v2M1 10h2m14 0h2M3.3 3.3l1.4 1.4m10.6 10.6 1.4 1.4m0-13.4-1.4 1.4M4.7 15.3l-1.4 1.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M14.5 12.5A6.5 6.5 0 1 1 7.5 5.5a5.5 5.5 0 0 0 7 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      </span>
      <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded-md border border-line bg-panel px-2.5 py-1 font-mono text-[11px] text-text opacity-0 translate-y-1 shadow-lg shadow-black/10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}
