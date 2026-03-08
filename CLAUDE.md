# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Dev server at http://localhost:3000
npm run build   # Production build to /build
npm test        # Run tests in interactive watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

## Architecture

This is a **Create React App** (React 19, TypeScript) portfolio site with no routing library. Navigation between views is managed through React state in `App.tsx`.

### View switching pattern

`App.tsx` holds `selectedCaseStudy` state. The app renders either:
- `<Portfolio>` — the landing page with all sections
- `<CaseStudy project={...}>` — a project detail view

Transitions between views use Framer Motion's `<AnimatePresence>`. When navigating back from a case study, `resetCaseStudy()` clears state and scrolls to the `#work` section.

### Component hierarchy

```
App.tsx                          # View state + case study selection
└── MainLayout                   # Header, Sidebar, VisitorCounter, theme/dev controls
    ├── Portfolio (view)         # Composes all landing sections
    │   ├── IntroSection
    │   ├── WorkSection          # Renders project cards → triggers case study open
    │   ├── ValuesSection
    │   ├── AboutSection
    │   └── ContactSection
    └── CaseStudy (view)         # Renders full project case study from Project data
```

Component folders are organized as:
- `components/basics/` — atomic UI elements (Button, Hamburger, HeaderLogo)
- `components/chunks/` — section-level components; each has co-located `.scss`
- `components/layouts/` — wrapping layout components
- `components/views/` — full-page view components

### Project data

All case study content is defined in `src/data/projects.ts` as a typed `Project[]` array. **To add or modify a project, edit only this file.** The `Project` interface is the schema — it defines all optional/required fields for research, design iteration, outcomes, and reflection sections.

Project 4 (`data-dashboard`) is a placeholder with empty content — it's intentionally incomplete.

### Styles

- `src/styles/_variables.scss` — design tokens (colors, typography, spacing, breakpoints)
- `src/styles/_mixins.scss` — shared SCSS mixins
- `src/styles/main.scss` — global imports and base styles
- Each chunk component has a co-located `.scss` file using BEM naming

**Theme system:** Light/dark mode is toggled via `MainLayout`. The active theme class (`light` or `dark`) is applied to `document.documentElement` and persisted in `localStorage`. A "Dev Mode" grid overlay (`dev-mode` class) is toggled separately and overrides the theme.

**Breakpoints:** Mobile ≤767px, Tablet ≤1023px, Desktop >1023px. The sidebar is hidden on mobile/tablet (`isCaseStudyOpen` also hides the sidebar).

### Firebase

`src/firebase/config.ts` initializes Firebase with a hardcoded config (the Firebase project is public-facing). `VisitorCounter` uses Firebase Realtime Database to track and display cumulative visitor counts. It uses `sessionStorage` to avoid double-counting within a session, and fades out after 100px of scroll.
