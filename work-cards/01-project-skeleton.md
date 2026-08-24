# Work Card 01 — Project Skeleton

## Goal

Scaffold the Vite + React + Tailwind CSS + React Router project structure.

## Inputs

- `build-blueprint.md`
- `architecture.md`

## Files likely touched

- `package.json` (created)
- `vite.config.js` (created)
- `tailwind.config.js` (created)
- `postcss.config.js` (created)
- `src/index.css` (created)
- `src/App.jsx` (created)
- `src/main.jsx` (created)
- `index.html` (created)

## Instructions for the coding agent

1. Scaffold a new Vite + React project in the current folder.
2. Install dependencies: `react-router-dom` and Tailwind CSS (follow Tailwind's Vite setup guide).
3. Configure Tailwind CSS with `index.css` containing the Tailwind directives.
4. Set up React Router in `App.jsx` with routes for `/`, `/guides`, `/strategies`, and `/about`.
5. Create a basic `Navbar` and `Footer` component skeleton.
6. Ensure `npm run dev` starts without errors.

## What not to do

- Do not add any page content yet (no guides, strategies, or about text).
- Do not add the SearchBox component yet.
- Do not add sample data yet.
- Do not add styling beyond the Tailwind setup and basic layout.
- Do not deploy or initialize Git.

## Done when

- `npm run dev` starts successfully.
- The app shell loads with a header (Navbar) and footer.
- React Router is configured with the four routes.
- Tailwind CSS is working (utility classes can be used).
- No console errors on initial load.

## Verification steps

- [ ] Run `npm run dev` and confirm the dev server starts.
- [ ] Open localhost in a browser and confirm the app shell loads (header + footer visible).
- [ ] Confirm no console errors in the browser DevTools.
- [ ] Confirm Tailwind is working by adding a test class (e.g., `bg-blue-500`) to a element and verifying the style applies.
- [ ] Confirm React Router is set up by navigating to `/`, `/guides`, `/strategies`, and `/about` (even if pages are empty for now).

**Design check:** Layout follows design.md mood — clean, calm, professional. Spacing is generous, no clutter.

## Localhost test before continuing

After this card, the learner should test:

- [ ] `npm run dev` starts without errors.
- [ ] The app shell loads with a visible header and footer.
- [ ] Navigating to `/`, `/guides`, `/strategies`, and `/about` does not show a 404 error.
- [ ] Tailwind styles are applied (e.g., a test element has the expected background color).

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If the project cannot be scaffolded or `npm run dev` fails to start within 10 minutes, ask the trainer for Pair Mode or Rescue Mode.

## Status

Not started
