# Shahiduz Zaman — Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, react-router-dom, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist` (defaults are already correct).
4. Deploy. `vercel.json` is already included so client-side routes (e.g. `/projects/erp-business-platform`) work correctly on refresh.

## Things to personalize before shipping

- `public/avatar-placeholder.svg` — replace with your real photo (`public/photo.jpg`) and update the `src` in `src/components/Hero.tsx`.
- `public/resume.pdf` — replace with your latest resume export (same filename, or update `resumeFile` in `src/data/profile.ts`).
- `src/data/profile.ts` — update contact info, socials, bio copy as needed.
- `src/data/projects.ts` — each project has a `live` and `github` link set to placeholders (`"#"` or `https://github.com/munim09`) where a public link isn't available yet. Update these with real URLs.
- `public/projects/*.svg` — custom illustrations per project; swap for real screenshots if you'd like.
