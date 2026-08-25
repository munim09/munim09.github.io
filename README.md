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

## Deployment

This portfolio is deployed to GitHub Pages at [https://munim09.github.io](https://munim09.github.io).

### Steps to deploy

1. **Create the repository**
   Create a new public GitHub repository named exactly `munim09.github.io`. This special naming tells GitHub to serve it as a user site at the root domain.

2. **Push the code**
```bash
   git remote add origin https://github.com/munim09/munim09.github.io.git
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
```

3. **Install gh-pages**
```bash
   npm install --save-dev gh-pages
```

4. **Add deploy scripts**
   In `package.json`, add:
```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
```
   > Note: No need to set a `base` in `vite.config.js` — this is a user page, so it's served from the root by default.

5. **Deploy**
```bash
   npm run deploy
```
   This builds the app and pushes the `dist/` folder to the `gh-pages` branch automatically.

6. **Set the Pages source**
   Go to **Repo Settings → Pages** → set **Source** to `Deploy from a branch` → select the `gh-pages` branch, `/ (root)` folder → **Save**.

7. **Visit the live site**
   Wait 1–2 minutes, then check [https://munim09.github.io](https://munim09.github.io).

## Git & Re-deploy

```
git add .
git commit -m "Commit message"
git push -u origin main

npm run deploy
```

## Things to personalize before shipping

- `public/avatar-placeholder.svg` — replace with your real photo (`public/photo.jpg`) and update the `src` in `src/components/Hero.tsx`.
- `public/resume.pdf` — replace with your latest resume export (same filename, or update `resumeFile` in `src/data/profile.ts`).
- `src/data/profile.ts` — update contact info, socials, bio copy as needed.
- `src/data/projects.ts` — each project has a `live` and `github` link set to placeholders (`"#"` or `https://github.com/munim09`) where a public link isn't available yet. Update these with real URLs.
- `src/assets/projects/*.svg` — custom illustrations per project (inlined and theme-aware via CSS variables); swap for real screenshots if you'd like.
