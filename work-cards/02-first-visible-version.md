# Work Card 02 — First Visible Version

## Goal

Create the visible layout with Navbar, Footer, and all four page shells (Home, Guides, Strategies, About).

## Inputs

- `build-blueprint.md`
- `work-cards/01-project-skeleton.md`
- `design.md`

## Files likely touched

- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/GuidesPage.jsx`
- `src/pages/StrategiesPage.jsx`
- `src/pages/AboutPage.jsx`
- `src/App.jsx`
- `src/index.css`

## Instructions for the coding agent

1. Build the `Navbar` component with:
   - Site title/logo text ("Trading Board")
   - Navigation links: Home, Guides, Strategies, About
   - Hamburger menu button (visible on mobile, hidden on desktop)
   - Mobile menu toggle state
2. Build the `Footer` component with simple copyright text.
3. Create page shells for all four pages with:
   - Correct page title (h1)
   - Placeholder content indicating the page purpose
   - Consistent padding and max-width container
4. Wire up React Router in `App.jsx` to render the correct page for each route.
5. Ensure the layout is responsive: hamburger menu on mobile, horizontal links on desktop.

## What not to do

- Do not add real guide or strategy content yet (use placeholders).
- Do not add the SearchBox component yet.
- Do not add card components yet.
- Do not add any backend, API, or data fetching.
- Do not deploy or initialize Git.

## Done when

- All four pages render with correct titles and placeholder content.
- Navbar shows all four navigation links.
- Hamburger menu appears on mobile viewport and toggles the menu.
- Footer is visible on all pages.
- Navigation links work correctly (clicking changes the page).
- No console errors.

## Verification steps

- [ ] Run `npm run dev` and open the app.
- [ ] Confirm all four pages load: Home, Guides, Strategies, About.
- [ ] Confirm Navbar is visible on all pages with correct links.
- [ ] Confirm Footer is visible on all pages.
- [ ] Resize browser to mobile width (< 768px) and confirm hamburger menu appears.
- [ ] Click hamburger menu and confirm navigation links are visible.
- [ ] Click a navigation link and confirm the page changes.
- [ ] Confirm no console errors.

**Design check:** First section follows design.md mood — calm, professional, generous spacing, clean typography. Mobile first-screen shows hamburger menu and stacked content.

## Localhost test before continuing

After this card, the learner should test:

- [ ] All four pages load without errors.
- [ ] Navigation links work correctly.
- [ ] Hamburger menu appears on mobile and toggles correctly.
- [ ] Footer is visible on all pages.
- [ ] No console errors in DevTools.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If navigation or routing does not work after 10 minutes, ask the trainer for Pair Mode or Rescue Mode.

## Status

Not started
