# Portfolio — Agent Guide

Single-page React portfolio. No monorepo, no test suite, no TypeScript.

## Commands

- `npm run dev` — Vite dev server on :5173
- `npm run build` — production build to `dist/`
- `npm run lint` — oxlint (React hooks + component export rules)
- `npm run preview` — serve built output locally

No typecheck or test commands exist. Lint is the only CI-like gate.

## Stack quirks

- **Tailwind CSS v4** via `@tailwindcss/postcss` — config lives in `src/index.css` using `@theme` and `@layer` directives, not a `tailwind.config.js`. Custom colors/fonts (`--color-copper`, `--font-display`, etc.) are defined there.
- **Framer Motion** for animations — components import `motion` from `framer-motion`.
- **react-router-dom v7** — client-side routing. `vercel.json` rewrites all paths to `index.html` for SPA support.
- All source is `.jsx` (not `.tsx`). No TypeScript despite what README mentions.

## File layout

- `src/data/profile.js` — contact info, bio, resume path
- `src/data/projects.js` — project list (title, links, descriptions)
- `src/pages/` — `Home.jsx`, `ProjectDetail.jsx`, `NotFound.jsx`
- `src/components/` — section components (Hero, About, Skills, Experience, etc.)
- `src/assets/projects/` — project illustration SVGs (inlined via `?raw`, theme-aware) 
- `public/resume.pdf` — downloadable resume
