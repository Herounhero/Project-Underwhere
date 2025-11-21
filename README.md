# Project Underwhere

A lightweight React + Vite + TypeScript starter preconfigured with Tailwind CSS. Use it as the canvas for building the "world class open source project" envisioned in the original README.

## Getting started
1. Install dependencies

   ```bash
   npm install
   ```

2. Start the dev server

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   ```

4. Lint the codebase

   ```bash
   npm run lint
   ```

## Tech stack
- **React 19 + Vite 7** for a fast DX with hot reloading.
- **TypeScript** for static typing.
- **Tailwind CSS** for utility-first styling with a custom "ink" color palette.
- **ESLint** for linting and consistent conventions.

## Project layout
- `src/` – React components and styling entrypoints (`index.css`).
- `src/pages/` – Routed pages for the landing view, docs index, markdown reader, the MLAOS Lab, and the gothic-cyberpunk text RPG slice.
- `public/docs/` – Mythotech design docs (roadmap, architecture map, Balcony interface, temporal engine spec) served by Vite.
- `public/` – Static assets served as-is.
- `vite.config.ts` – Vite configuration.
- `tailwind.config.js` – Tailwind theme and scan paths.

## Next steps
- Use the MLAOS Lab (`/lab`) to iterate on Balcony prompts, organs, temporal cycles, and Luxverum behaviors, then branch into the Text RPG slice (`/story`) to narrate outcomes.
- In `/story`, leverage the automation pane to generate new lore pulses, fabricate NPCs, sketch combat beats, and assemble character builds you can drop into future scenes.
- Introduce component/story previews (Storybook, Ladle, or similar).
- Configure testing (Vitest/RTL) when UI logic is added.
- Set up CI to run `npm run lint` and `npm run build` on pull requests.
- Wire UI routes to the new docs (Balcony, Architecture Map, Temporal Engine) and begin modeling Luxverum data.
