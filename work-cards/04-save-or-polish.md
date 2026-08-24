# Work Card 04 — Save or Polish

## Goal

Add the SearchBox component and client-side filtering for guides and strategies.

## Inputs

- `build-blueprint.md`
- `work-cards/03-core-behaviour.md`
- `design.md`

## Files likely touched

- `src/components/SearchBox.jsx`
- `src/pages/GuidesPage.jsx`
- `src/pages/StrategiesPage.jsx`
- `src/App.jsx` (if routing changes needed)

## Instructions for the coding agent

1. Create `SearchBox` component with:
   - A text input field
   - Clear placeholder text ("Search guides..." or "Search strategies...")
   - Clean styling matching the design direction (subtle border, rounded corners)
2. Add local state to `GuidesPage` for the search filter text.
3. Add local state to `StrategiesPage` for the search filter text.
4. Implement client-side filtering:
   - Filter guides by title or excerpt matching the search text (case-insensitive).
   - Filter strategies by title or excerpt matching the search text (case-insensitive).
5. Display the filtered results in the card grid.
6. Show a message when no results match the search (e.g., "No guides found matching your search.").
7. Ensure the search box is full width on mobile and appropriately sized on desktop.

## What not to do

- Do not add any backend, API, or data fetching for search.
- Do not add URL-based search parameters (keep it simple with local state).
- Do not add localStorage or persistence.
- Do not add any new pages or routes.
- Do not deploy or initialize Git.

## Done when

- SearchBox component is visible on Guides and Strategies pages.
- Typing in the search box filters the cards in real time.
- Case-insensitive matching works (e.g., "stock" matches "Stock Market").
- A "no results" message appears when the filter matches nothing.
- Search box is full width on mobile.
- No console errors.

## Verification steps

- [ ] Run `npm run dev` and open the app.
- [ ] Navigate to Guides page and confirm search box is visible.
- [ ] Type "stock" in the search box and confirm only matching guide cards are shown.
- [ ] Type a string that matches nothing and confirm the "no results" message appears.
- [ ] Clear the search box and confirm all cards reappear.
- [ ] Navigate to Strategies page and confirm search box is visible.
- [ ] Repeat filtering test on Strategies page.
- [ ] Resize to mobile width and confirm search box is full width.
- [ ] Confirm no console errors.

**Design check:** Search box follows design.md style — clean input with subtle border, matches calm professional vibe, full width on mobile.

## Localhost test before continuing

After this card, the learner should test:

- [ ] Search box filters guide cards correctly on Guides page.
- [ ] Search box filters strategy cards correctly on Strategies page.
- [ ] "No results" message appears when filter matches nothing.
- [ ] Clearing the search shows all cards again.
- [ ] Search box is full width on mobile viewport.
- [ ] No console errors in DevTools.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If search filtering does not work after 10 minutes, ask the trainer for Pair Mode or Rescue Mode.

## Status

Not started
