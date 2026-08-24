# Work Card 05 — Review and Fix

## Goal

Add mobile responsiveness, hamburger menu functionality, and accessibility improvements.

## Inputs

- `build-blueprint.md`
- `work-cards/04-save-or-polish.md`
- `design.md`

## Files likely touched

- `src/components/Navbar.jsx`
- `src/styles/index.css`
- `src/pages/HomePage.jsx`
- `src/pages/GuidesPage.jsx`
- `src/pages/StrategiesPage.jsx`
- `src/pages/AboutPage.jsx`

## Instructions for the coding agent

1. Review the Navbar component and ensure:
   - Hamburger menu is hidden on desktop (md: and larger breakpoints)
   - Hamburger menu is visible on mobile (below md breakpoint)
   - Mobile menu opens/closes with a smooth transition
   - Menu closes when a link is clicked
   - Menu closes when clicking outside (optional but nice)
2. Ensure all pages are responsive:
   - Single column layout on mobile
   - Max-width container on desktop (e.g., max-w-6xl or similar)
   - Cards stack in single column on mobile
   - Cards show 2 columns on tablet, 3 on desktop
3. Check accessibility:
   - All interactive elements have visible focus indicators
   - Hamburger button has an accessible label (aria-label)
   - Proper heading hierarchy (h1 on each page, h2 for sections)
   - Semantic HTML elements used (header, nav, main, section, footer)
4. Verify touch targets are at least 44px height on mobile.
5. Ensure no horizontal scroll on any viewport.

## What not to do

- Do not add new pages or routes.
- Do not add new components beyond fixing existing ones.
- Do not add backend, API, or data fetching.
- Do not add localStorage or persistence.
- Do not deploy or initialize Git.

## Done when

- Hamburger menu works correctly on mobile.
- Layout is responsive on mobile, tablet, and desktop.
- No horizontal scroll on any viewport.
- Focus indicators are visible on all interactive elements.
- Heading hierarchy is correct on all pages.
- No console errors.

## Verification steps

- [ ] Run `npm run dev` and open the app.
- [ ] Resize to mobile width (< 768px) and confirm hamburger menu appears.
- [ ] Click hamburger menu and confirm it opens/closes correctly.
- [ ] Click a navigation link in the mobile menu and confirm the menu closes.
- [ ] Resize to tablet width (768px–1024px) and confirm 2-column card grid.
- [ ] Resize to desktop width (> 1024px) and confirm 3-column card grid.
- [ ] Confirm no horizontal scroll on any viewport.
- [ ] Tab through interactive elements and confirm focus indicators are visible.
- [ ] Confirm heading hierarchy: one h1 per page, h2 for sections.
- [ ] Confirm no console errors.

**Design check:** Mobile first-screen shows hamburger menu and stacked content. No cluttered or busy layouts on any viewport. Color contrast meets WCAG AA standards.

## Localhost test before continuing

After this card, the learner should test:

- [ ] Hamburger menu appears on mobile and toggles correctly.
- [ ] Cards stack in single column on mobile.
- [ ] Cards show 2 columns on tablet, 3 on desktop.
- [ ] No horizontal scroll on any viewport.
- [ ] Focus indicators are visible when tabbing through the page.
- [ ] Heading hierarchy is correct (one h1 per page).
- [ ] No console errors in DevTools.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If responsive layout or hamburger menu does not work after 10 minutes, ask the trainer for Pair Mode or Rescue Mode.

## Status

Not started
