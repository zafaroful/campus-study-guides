# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`

## Project Identity

**Project Name:** Trading Board

**One-Sentence Concept:** A personal multi-page content site that shares trading guides and information for learning and reference.

**Target User:** Myself — a personal learning and reference resource.

## Build Shape

Content-led site

## Version-One Promise

A working multi-page site with navigation that displays trading guides and information, is responsive on mobile, and has no live data dependencies.

## Scope Lock

### Now

- Multi-page site with navigation (Home, Guides, Strategies, About)
- Factual trading guides and information
- Responsive layout and mobile check
- Working links and honest navigation
- Search box to filter guides and strategies
- Hamburger menu on mobile

### Later

- Additional trading topics or sections
- Search or filtering features
- More polished styling

### Never

- Live data / APIs
- Login or accounts
- Payments or e-commerce
- Database or backend
- Multi-user features

## Architecture Summary

- **Framework:** Vite + React
- **Styling:** Tailwind CSS
- **Routing:** React Router (for multi-page navigation)
- **State:** No external state management needed; static content
- **Data:** Hardcoded content in components; no backend, no API
- **Storage:** None required (no localStorage needed for content-led site)

## Data / State / Storage Rules

- All content is static and hardcoded in component files
- **Guides:** Array of guide objects (title, excerpt, date, slug)
- **Strategies:** Array of strategy objects (title, excerpt, difficulty, slug)
- **Search state:** Local component state for filter text
- No external data fetching, no API calls, no backend
- No browser storage required

## Design Direction Summary

**Inspiration:** Calm productivity app (fallback — designmd.ai not used)

**What We Borrow:**
- Overall calm, focused vibe
- Generous spacing between sections and elements
- Clear, simple button styling with good padding

**What We Do Not Copy:**
- No cluttered or busy layouts
- No brand logos, exact UI clones, or proprietary identity
- No fake testimonials, fake stats, or lorem ipsum

**Visual Mood:** Professional and official — trustworthy, clear, and calm. Feels like a well-organized reference resource.

**Layout Rules:**
- Single-column flow on mobile, max-width container on desktop
- Generous whitespace between sections (minimum 2rem vertical rhythm)
- Cards arranged in a clean grid (2 columns on tablet, 3 on desktop)
- No overlapping elements or dense information blocks
- Clear visual hierarchy: page title → section heading → card content

**Color / Contrast Rules:**
- Primary: Deep navy or slate blue (#1e293b or similar)
- Accent: Muted teal or calm blue (#0ea5e9 or similar) for links and CTAs
- Background: Light gray (#f8fafc) for page, white (#ffffff) for cards
- Text: Dark gray (#334155) for body, near-black (#0f172a) for headings
- Ensure WCAG AA contrast (minimum 4.5:1 for body text)

**Typography Feel:**
- Clean sans-serif font (system font stack or Inter)
- Headings: Bold weight, clear size hierarchy
- Body: Regular weight, comfortable line height (1.6–1.7)
- No decorative or script fonts

**Component Style:**
- Cards: White background, subtle border or shadow, rounded corners (8px)
- Buttons: Solid accent color, rounded (6px), clear hover state
- Search box: Clean input with subtle border, icon optional
- Navigation: Simple text links, active state indicator

**Mobile Rules:**
- Hamburger menu on mobile (hidden on desktop)
- Cards stack in single column
- Search box full width on mobile
- Touch targets minimum 44px height
- No horizontal scroll

**Accessibility Basics:**
- Semantic HTML (header, nav, main, section, footer)
- All interactive elements keyboard accessible
- Focus indicators visible
- Alt text for any images
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels if any inputs are added

**Anti-Slop Rules:**
- No fake logos or brand marks
- No fake testimonials or user quotes
- No fake statistics or metrics unless clearly marked "Sample data"
- No lorem ipsum in final proof
- One clear primary action per page (e.g., "Read latest guide")
- Readable on phone width (320px minimum)

## Implementation Rules

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing
- Implement only the current work card
- Do not jump ahead
- Stop after verification
- Update `build-status.md` after each work card
- Do not add backend/auth/database/API unless the blueprint explicitly allows it
- Do not add secrets or keys to code
- Do not invent claims, testimonials, logos, or real numbers
- Apply the guardrails for the confirmed build shape (content-led site)
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping

## File and Folder Expectations

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    GuideCard.jsx
    StrategyCard.jsx
    SearchBox.jsx
  pages/
    HomePage.jsx
    GuidesPage.jsx
    StrategiesPage.jsx
    AboutPage.jsx
  data/
    guides.js
    strategies.js
  styles/
    index.css (Tailwind directives + custom styles)
  App.jsx
  main.jsx
index.html
package.json
vite.config.js
tailwind.config.js
postcss.config.js
```

## Work Card Plan

1. **Work Card 01:** Scaffold Vite + React + Tailwind project
2. **Work Card 02:** Set up React Router and basic layout (Navbar, Footer, routing)
3. **Work Card 03:** Create Home page with hero and latest guide preview
4. **Work Card 04:** Create Guides page with guide cards grid
5. **Work Card 05:** Create Strategies page with strategy cards grid
6. **Work Card 06:** Create About page with static content
7. **Work Card 07:** Add SearchBox component and client-side filtering
8. **Work Card 08:** Add sample trading content (guides and strategies data)
9. **Work Card 09:** Mobile responsiveness and hamburger menu
10. **Work Card 10:** Final verification, accessibility check, and polish

## Review Mirror

After each work card, verify:
- The feature works as specified
- No console errors
- Responsive on mobile, tablet, and desktop
- No broken links or navigation issues
- Design matches the design direction (colors, spacing, typography)
- Accessibility basics are met (semantic HTML, keyboard access, focus indicators)

## Proof Ladder

1. **Localhost proof:** Site runs on localhost with all pages accessible
2. **Navigation proof:** All nav links work, hamburger menu works on mobile
3. **Content proof:** Guides and strategies display correctly with sample data
4. **Search proof:** Search box filters cards correctly
5. **Responsive proof:** Layout works on mobile (320px), tablet, and desktop
6. **Accessibility proof:** Keyboard navigation works, focus indicators visible
7. **No-slop proof:** No fake logos, testimonials, stats, or lorem ipsum

## 60-Second Explanation Template

"I built Trading Board, a personal multi-page content site for learning trading guides and strategies. It uses Vite, React, and Tailwind CSS with React Router for navigation. The site has four pages — Home, Guides, Strategies, and About — with a clean, professional design inspired by calm productivity apps. It includes a search box, responsive layout with a hamburger menu on mobile, and sample trading content. No live data, login, or backend is used."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing
- Implement only the current work card
- Do not jump ahead
- Stop after verification
- Update `build-status.md` after each work card
- Do not add backend/auth/database/API unless the blueprint explicitly allows it
- Do not add secrets or keys to code
- Do not invent claims, testimonials, logos, or real numbers
- Apply the guardrails for the confirmed build shape (content-led site)
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping
