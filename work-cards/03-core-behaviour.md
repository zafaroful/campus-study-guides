# Work Card 03 — Core Behaviour

## Goal

Add the Home page hero section, latest guide preview, and page-specific content for Guides, Strategies, and About.

## Inputs

- `build-blueprint.md`
- `work-cards/02-first-visible-version.md`
- `design.md`

## Files likely touched

- `src/pages/HomePage.jsx`
- `src/pages/GuidesPage.jsx`
- `src/pages/StrategiesPage.jsx`
- `src/pages/AboutPage.jsx`
- `src/components/GuideCard.jsx`
- `src/components/StrategyCard.jsx`
- `src/data/guides.js`
- `src/data/strategies.js`

## Instructions for the coding agent

1. Create `src/data/guides.js` with an array of 3–5 sample guide objects (title, excerpt, date, slug).
2. Create `src/data/strategies.js` with an array of 3–5 sample strategy objects (title, excerpt, difficulty, slug).
3. Build `GuideCard` component that displays a guide's title, excerpt, and date.
4. Build `StrategyCard` component that displays a strategy's title, excerpt, and difficulty.
5. Update `HomePage` to show:
   - A hero section with a clear headline and subheadline
   - A "Latest Guide" preview card linking to the Guides page
   - A "Featured Strategies" preview section with 2–3 strategy cards
6. Update `GuidesPage` to render a grid of `GuideCard` components using the sample data.
7. Update `StrategiesPage` to render a grid of `StrategyCard` components using the sample data.
8. Update `AboutPage` with static content explaining the purpose of Trading Board.

## What not to do

- Do not add the SearchBox component yet.
- Do not add filtering or search logic yet.
- Do not add any backend, API, or data fetching.
- Do not add localStorage or persistence.
- Do not deploy or initialize Git.

## Done when

- Home page shows hero section, latest guide preview, and featured strategies.
- Guides page shows a grid of guide cards with sample data.
- Strategies page shows a grid of strategy cards with sample data.
- About page has meaningful static content.
- All cards display title, excerpt, and metadata correctly.
- No console errors.

## Verification steps

- [ ] Run `npm run dev` and open the app.
- [ ] Confirm Home page shows hero section with headline and subheadline.
- [ ] Confirm Home page shows a "Latest Guide" preview card.
- [ ] Confirm Home page shows 2–3 featured strategy cards.
- [ ] Navigate to Guides page and confirm a grid of guide cards is visible.
- [ ] Navigate to Strategies page and confirm a grid of strategy cards is visible.
- [ ] Navigate to About page and confirm static content is visible.
- [ ] Confirm all cards show title, excerpt, and metadata (date/difficulty).
- [ ] Confirm no console errors.

**Design check:** Cards follow design.md style — white background, subtle border/shadow, rounded corners (8px), clean typography, generous spacing. Grid is 2 columns on tablet, 3 on desktop, single column on mobile.

## Localhost test before continuing

After this card, the learner should test:

- [ ] Home page hero section is visible and readable.
- [ ] Guide cards and strategy cards display correctly on all pages.
- [ ] Sample data is factual and relevant to trading (no lorem ipsum).
- [ ] Layout is responsive: cards stack on mobile, grid on desktop.
- [ ] No console errors in DevTools.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If pages do not render or cards do not display after 10 minutes, ask the trainer for Pair Mode or Rescue Mode.

## Status

Not started
