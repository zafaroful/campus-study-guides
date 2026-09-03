# Architecture

## Build Shape

Content-led site

## Stack Decision

- **Framework:** Vite + React
- **Styling:** Tailwind CSS
- **Routing:** React Router (for multi-page navigation)
- **State:** No external state management needed; static content
- **Data:** Hardcoded content in components; no backend, no API
- **Storage:** None required (no localStorage needed for content-led site)

## Structure Overview

A multi-page React app with client-side routing:

- Home page — latest guide highlight and overview of featured study methods
- Guides page — list of study-guide cards organised by topic
- Study Methods page — list of study-method cards with difficulty level
- About page — site information

## Component Map

- `App` — main layout with navigation and routing
- `Navbar` — top navigation with hamburger menu on mobile
- `HomePage` — hero section + latest guide preview
- `GuidesPage` — grid of study-guide cards
- `StrategiesPage` — grid of study-method cards
- `AboutPage` — static about content
- `GuideCard` — reusable card component for guides
- `StudyMethodCard` — reusable card component for study methods
- `SearchBox` — client-side search/filter component
- `Footer` — simple footer with links

## Data / State Model

All content is static and hardcoded in component files:

- **Guides:** Array of guide objects (title, excerpt, topic, slug)
- **Study methods:** Array of study-method objects (title, excerpt, level, slug)
- **Search state:** Local component state for filter text

No external data fetching, no API calls, no backend.

## Storage Logic

No browser storage required. All content is embedded in the app.

## User Flow

1. Visitor lands on Home page
2. Reads the latest guide preview or browses the featured study methods
3. Uses top navigation or search to find content
4. Clicks a guide or study-method card to read details
5. Visits About page for site information

## File Expectations

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    GuideCard.jsx
    StudyMethodCard.jsx
    SearchBox.jsx
  pages/
    HomePage.jsx
    GuidesPage.jsx
    StrategiesPage.jsx
    AboutPage.jsx
  data/
    guides.js
    studyMethods.js
  styles/
    index.css (Tailwind directives + custom styles)
  App.jsx
  main.jsx
index.html
package.json
vite.config.js
```

## Constraints

- No live data or APIs
- No login, payments, database, or backend
- No multi-user features
- Content is static and hardcoded
- Mobile-first responsive design
- Hamburger menu on mobile

## Technical Non-Goals

- No authentication or user accounts
- No payment processing
- No database or backend
- No live API integrations
- No server-side rendering
- No content management system
- No user-generated content or comments

## Verification Notes

- All pages render correctly
- Navigation works between all pages
- Search box filters guide and study-method cards
- Hamburger menu works on mobile viewport
- Layout is responsive on mobile, tablet, and desktop
- No console errors or broken links
