# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains Astro routes and content pages (e.g., `src/pages/content/privacy.md`).
- `src/layouts/` holds shared page layouts.
- `src/components/` contains React/Astro UI components.
- `src/config/` stores site content and marketing data (features, FAQs, screenshots, social links).
- `src/types/` contains TypeScript types.
- `public/` hosts static assets (e.g., `public/assets/`).

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local dev server at `http://localhost:4321`.
- `npm run build` generates the production build.
- `npm run preview` serves the built site locally for final checks.

## Coding Style & Naming Conventions
- Use 2-space indentation to match existing TypeScript files.
- Keep components and configs in PascalCase for types and `camelCase` for variables/functions.
- Styling is Tailwind-first; keep utility classes close to the markup and prefer existing patterns.
- Formatting is handled by Prettier (`prettier.config.cjs`). Run it before commits if you add new files.

## Testing Guidelines
- This repository currently has no automated test setup.
- If you introduce tests, document the framework and add a script in `package.json`.

## Commit & Pull Request Guidelines
- Commit messages in history are short, imperative, and descriptive (e.g., "Change screenshots", "Improve screenshots, footer"). Follow that style.
- PRs should include:
  - A brief summary of the change and the affected areas (e.g., `src/components/`, `src/config/`).
  - Screenshots or a short clip for visual changes.
  - Any relevant configuration updates (e.g., `src/config/site.ts`).

## Content & Configuration Tips
- Update app metadata in `src/config/site.ts`.
- Update features, FAQs, reviews, and screenshots via files in `src/config/`.
- Add screenshots under `public/assets/screenshots/iphone/` and `public/assets/screenshots/ipad/`.

## Agent-Specific Instructions
- Always respond in Russian.
- Не делай того, что я не просил. Если есть идея что-то добавить или исправить — сначала спроси меня и дождись решения.
