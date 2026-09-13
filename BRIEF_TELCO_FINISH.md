# BRIEF: Finish Telco Case Study

## Context
The Telco case study in `src/data/projects.ts` (id: `'Telco'`) has all the content written but everything from Research onwards is hidden behind a WIP blur in the CaseStudy component. The text in the Research/Define/Insights/Design Iteration sections needs to be tightened, images need to be wired in, and the WIP blur needs to be removed for Telco specifically.

**DO NOT touch anything above the Solution section** — Problem, Solution, hero, context bar, role, results are all final.

## Task 1: Remove WIP blur for Telco only

In `src/components/chunks/CaseStudy/CaseStudy.tsx`:

Add a `wip` check — if the project id is `'Telco'`, render the Research/Define/Insights/Design Iteration/Reflection sections **without** the WIP blur wrapper. For all other projects, keep the existing WIP blur behavior.

The simplest approach: add a prop or check `project.id` inside the component. If `project.id === 'Telco'`, render the sections after the CTA buttons directly (no `.case-study-wip` wrapper, no `.wip-blur-wrapper`, no `.wip-badge`, no blur/opacity). For all other projects, keep the existing WIP blur wrapper as-is.

Keep the CTA buttons (Back to Portfolio + View Live Project) in their current position above the research sections.

## Task 2: Update Telco case study text content

In `src/data/projects.ts`, find the Telco project entry (id: `'Telco'`). Replace ONLY the sections listed below. Do not touch the problem, solution, hero, context, role, or tools sections.

### Research section — replace with:
```typescript
research: {
  headingTitle: 'Competitors offered features, not usability',
  content: 'Competitive analysis of Optus, Aussie Broadband, and Vodafone revealed platforms overloaded with features but plagued by slow loading, confusing navigation, and 10–15 minutes of manual setup friction. Users didn\'t want more tools — they wanted smarter tools.',
  keyFindings: [
    'All competitors relied on manual dashboard customisation',
    'Service desk consultants spent 40% of their workday chasing status updates',
    'IT managers prioritised proactive alerts over real-time visualisations by a 3:1 margin'
  ],
  researchMethods: [],
  images: []
},
```

### Research work images — replace with:
```typescript
researchWork: {
  image1: User1,
  image2: User2,
  image3: CompAnalysis,
  image4: CompSwot,
  caption1: 'IT Manager persona — Ryan Quinn: 3+ hours daily switching between 8 disconnected apps',
  caption2: 'Service Desk persona — Toby Matthews: delayed incident response from chasing Telstra for updates',
  caption3: 'Competitive analysis — Optus, Aussie Broadband, Vodafone mapped against customisation and usability',
  caption4: 'SWOT analysis of Optus — feature-rich but slow loading, confusing navigation, limited customisation'
},
```

### Define section — replace with:
```typescript
define: {
  heading: 'Three requirements emerged from research',
  content: [
    'The dashboard needed to eliminate manual configuration entirely — users wanted intelligence, not customisation screens. Status visibility had to be immediate without navigating through menus. Service desk consultants needed speed over completeness during critical incidents.',
  ]
},
```

### Define work images — replace with:
```typescript
defineWork: {
  image1: Challange,
  image2: TenXTen,
  image3: Senario1,
  image4: Senario2,
  caption1: 'Challenge statement — tool-switching time (3hrs/day) causing support delays and customer churn',
  caption2: '10×10 brainstorm — 100 concept thumbnails exploring dashboard layouts and information hierarchy',
  caption3: 'User scenario — Ryan\'s morning: 8 apps, missed alert, delayed response causing escalation',
  caption4: 'User scenario — Toby during outage: switching tools frantically, unable to give accurate ETAs'
},
```

### Insights section — replace with:
```typescript
insights: {
  headingTitle: 'Personalisation without manual effort was the highest-value feature',
  content: 'Kano Model testing with 4 participants identified smart defaults over configuration screens as the key need. Three concepts were sketched — widget-based, card-based, and list-based layouts. All 3 users in early testing preferred the widget approach. As one participant put it: "simple is best."',
  userNeeds: [
    'Single source of truth for all service data',
    'Proactive notifications for critical incidents',
    'Instant access to frequently-used features'
  ],
  designPrinciples: [
    'Speed over completeness during outages',
    'Zero manual setup — automatic personalisation',
    'Visual status indicators — awareness without clicking'
  ],
  images: []
},
```

### Design Iteration section — replace entirely with:
```typescript
designIteration: {
  concept: {
    heading: 'Three concepts tested — users chose simplicity',
    content: 'Three layout concepts were sketched and tested informally with users. Concept 1 (personalised widget suggestions), Concept 2 (real-time performance cards), and Concept 3 (scrollable feature list). All 3 participants preferred the widget approach for its condensed, clean interface.',
    image: ImageFiller,
    caption: 'Low-fidelity concept sketch — Concept 1: personalised widget suggestions with machine learning optimisation toggle'
  },
  prototype: {
    heading: 'First prototype succeeded but missed critical notifications',
    content: 'The interactive prototype was built with a standard dashboard and an optimised dashboard toggled by a machine learning switch. User testing with 5 participants showed 4 out of 5 completed all tasks successfully. But every participant asked about notifications — the system had no way to surface what needed attention.',
    beforeImage: ImageFiller,
    afterImage: ImageFiller,
    beforeCaption: 'Standard dashboard — all users see this view with core Telco features and the optimise toggle',
    afterCaption: 'Optimised dashboard — ML-driven personalised widgets displaying each user\'s most-used features'
  },
  testingWork: {
    image1: ImageFiller,
    image2: ImageFiller,
    image3: ImageFiller,
    image4: ImageFiller,
    caption1: 'Prototype iterations — sticky menu updated with task button, notification badges, and active inbox',
    caption2: 'User testing with 5 participants — 4/5 completed all tasks, positive feedback on dashboard UI',
    caption3: 'A/B test groups — 9 participants across two groups testing Prototype A vs Prototype B',
    caption4: 'Prototype A results — all three hypotheses validated: engagement, navigation, and satisfaction'
  },
  abTesting: {
    heading: 'A/B testing proved personalisation was essential',
    content: 'Prototype A (personalised ML dashboard) was tested against Prototype B (comprehensive overview with navigation). Prototype A completed tasks 60% faster and scored 4.6/5 satisfaction versus 3.2/5 for Prototype B. The data validated the core design decision — personalisation beats manual configuration every time.',
    image: ImageFiller,
    caption: 'Prototype B — alternative information architecture showing all features on one screen with drill-down navigation'
  },
  finalSolution: {
    heading: 'Self-learning dashboard with zero setup time',
    content: 'The finalised prototype uses machine learning to observe user behaviour and auto-optimise the dashboard layout. One toggle switches between the standard view and a personalised workspace — no configuration screens, no training required. Proactive notifications were added based on user testing feedback.',
    screens: [ImageFiller, ImageFiller],
    captions: [
      'Finalised dashboard — personalised widget layout with status indicators and ML optimisation toggle',
      'Finalised prototype iterations — notification system, task management, and refined navigation'
    ]
  }
},
```

### Outcomes — replace with:
```typescript
outcomes: {
  metrics: [
    '64% faster task completion with personalised dashboard',
    '4.6/5 user satisfaction score (vs 3.2/5 for standard)',
    '5/5 test users completed core workflows successfully',
  ],
  qualitative: [
    'Users preferred zero-setup personalisation over manual customisation',
    'Notification system identified as critical missing feature during testing',
    'Widget-based layout won unanimously over card and list alternatives'
  ]
},
```

### Reflection — replace with:
```typescript
reflection: {
  heading: 'Early testing saved weeks — data validated decisions',
  content: [
    'Testing concept sketches before building high-fidelity designs prevented wasted effort. Users immediately said "simple is best" — a signal that couldn\'t have come from assumptions alone. A/B testing gave measurable proof: "Prototype A completed tasks 60% faster" beats opinions every time.',
  ]
},
```

### Also update these fields:
- Set `url` to `undefined` or remove it (don't link to example.com)
- Set `nextSteps` to `''`

## Task 3: Remove final solution wrong images

The `finalSolution.screens` array currently references `FinalBrand, FinalSocial, FinalLogo, FinalIsoScreens` — these are images from a completely different project (Cluera). Replace them with `ImageFiller` placeholders as shown above. Kyle will swap these for real Telco screenshots later.

## Task 4: Verify

Run `npm run build` and confirm zero errors. The Telco case study should now display fully (no blur) with all written content visible.
