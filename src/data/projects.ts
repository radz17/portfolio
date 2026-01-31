// src/data/projects.ts
import Mock1 from '../assets/images/mock-1-1400.webp';
import Mock2 from '../assets/images/mock-2-1400.webp';
import Mock5 from '../assets/images/mock-5.webp';

import ImageFiller from '../assets/images/Landing/image-filler-1.webp';

//Project 1 - THEMEFORGE
import ThemeForgeHero from '../assets/images/Themeforge/themeforge-hero.webp';
import TFCompetitors from '../assets/images/mock-5.webp';
import TFMarketSize from '../assets/images/mock-5.webp';
import TFReddit from '../assets/images/mock-5.webp';
import TFWooting from '../assets/images/mock-5.webp';

//Project 2 - TELSTRA (formerly Project 1)
import TelcoHero from '../assets/images/P1/p1-hero-telco-v2.jpg';
import TelcoSolution from '../assets/images/telco-solution-1.png';
import TelcoProblem from '../assets/images/P1/p1-hero-problem.webp';

import User1 from '../assets/images/P1/p1-white-paper-user1.webp';
import User2 from '../assets/images/P1/p1-white-paper-user2.webp';
import CompAnalysis from '../assets/images/P1/p1-white-paper-comp-analysis.webp';
import CompSwot from '../assets/images/P1/p1-white-paper-comp-swot.webp';

import Challange from '../assets/images/P1/p1-define-problem-statment.webp';
import TenXTen from '../assets/images/P1/p1-define-10x10.webp';
import Senario1 from '../assets/images/P1/p1-define-user1.webp';
import Senario2 from '../assets/images/P1/p1-define-user2.webp';

import FinalBrand from '../assets/images/P3/p3-finial-branding.webp';
import FinalSocial from '../assets/images/P3/p3-finial-social.webp';
import FinalLogo from '../assets/images/P3/p3-finial-logo.webp';
import FinalIsoScreens from '../assets/images/P3/p3-finial-iso-screens.webp';

// Project 3 - AXIS
import AxisHero from '../assets/images/P3/p3-hero-axis.webp';
import P3Problem from '../assets/images/p3-problem.webp';
import P3Solution from '../assets/images/P3/p3-hero-axis.webp';
import P3AxisBranding from '../assets/images/p3-axis-branding.webp';
import P3Initial from '../assets/images/P3/p3-proto-initial.webp';
import P3UserFlow from '../assets/images/P3/p3-proto-flow.webp';
import P3Wire1 from '../assets/images/P3/p3-proto-wire-frame-1.webp';
import P3Wire2 from '../assets/images/P3/p3-proto-wire-frame-2.webp';
import P3DraftMarket from '../assets/images/P3/p3-proto-market.webp';
import P3DraftBrand from '../assets/images/P3/p3-proto-branding.webp';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  caseStudy: {
    impact: string;
    heroImages: string[];
    duration: string;
    date: string;
    role: string[];
    team: string;
    tools: string[];
    problemTitle: string;
    problem: string;
    problemImage?: string;
    solutionImage?: string;
    solution: {
      solutionTitle: string;
      content: string;
      solutionImage?: string;
      keyFeatures?: string[];
      images?: string[];
    };
    research: {
      headingTitle: string;
      content: string;
      keyFindings?: string[];
      researchMethods?: string[];
      images?: string[];
    };
    researchWork?: {
      image1?: string;
      image2?: string;
      image3?: string;
      image4?: string;
      caption1?: string;
      caption2?: string;
      caption3?: string;
      caption4?: string;
    };
    define?: {
      heading: string;
      content: string[];
    };
    defineWork?: {
      image1?: string;
      image2?: string;
      image3?: string;
      image4?: string;
      caption1?: string;
      caption2?: string;
      caption3?: string;
      caption4?: string;
    };
    insights: {
      headingTitle: string;
      content: string;
      userNeeds?: string[];
      designPrinciples?: string[];
      images?: string[];
    };
    designIteration?: {
      concept: {
        heading: string;
        content: string;
        image?: string;
        caption?: string;
      };
      prototype: {
        heading: string;
        content: string;
        beforeImage?: string;
        afterImage?: string;
        beforeCaption?: string;
        afterCaption?: string;
      };
      testingWork?: {
        image1?: string;
        image2?: string;
        image3?: string;
        image4?: string;
        caption1?: string;
        caption2?: string;
        caption3?: string;
        caption4?: string;
      };
      abTesting: {
        heading: string;
        content: string;
        image?: string;
        caption?: string;
      };
      finalSolution: {
        heading: string;
        content: string;
        screens?: string[];
        captions?: string[];
      };
    };
    outcomes: {
      metrics: string[];
      qualitative?: string[];
    };
    reflection: {
      heading: string;
      content: string[];
    };
    learnings: string[];
    nextSteps?: string;
    images: string[];
    url?: string;
    projectWork?: {
      image1?: string;
      image2?: string;
      image3?: string;
      image4?: string;
    };
  };
}

export const projects: Project[] = [
  // ============================================
  // PROJECT 1: THEMEFORGE
  // ============================================
  {
    id: 'themeforge',
    title: 'ThemeForge',
    subtitle: 'AI-Powered RGB Keyboard Theme Platform',
    description: 'First-to-market AI theme generator for mechanical keyboards, launched in 7 days from concept to production with 20+ concurrent users within 24 hours.',
    imageUrl: ThemeForgeHero,
    caseStudy: {
      impact: 'Captured a zero-competitor market gap serving 900,000+ RGB keyboard enthusiasts by launching the first AI-powered theme visualization platform in 7 days—achieving 20+ concurrent users within 24 hours of launch.',
      
      heroImages: [ThemeForgeHero],
      images: [ThemeForgeHero],
      
      duration: '7 days (concept to launch)',
      date: 'January 2026',
      role: [
        'Product Strategy & Market Research',
        'UX/UI Design & Design Systems',
        'Full-Stack Development',
        'Business Operations & Legal Compliance'
      ],
      team: 'Solo founder (Apphouse Pty Ltd)',
      tools: [
        'Next.js 14',
        'TypeScript',
        'Firebase',
        'Anthropic Claude API',
        'SCSS',
        'Vercel',
        'Figma'
      ],
      
      problemTitle: 'RGB keyboard customization requires hours of trial-and-error with zero visual preview',
      problem: 'The mechanical keyboard community—900,000+ enthusiasts spending $200-400 on premium RGB keyboards—faced a frustrating reality: creating custom RGB themes meant manually inputting hex values, applying them to expensive hardware, realizing they looked wrong, and repeating this process for hours. Existing tools like OpenRGB, SignalRGB, and even Wooting\'s official Wootility software all shared the same critical flaw: no visual preview before committing changes to physical hardware. With 23,000+ Wooting 80HE keyboards just shipped through their Founders campaign, there was immediate demand but zero web-based solutions. Users were left guessing colors in the dark.',
      problemImage: ThemeForgeHero,
      solutionImage: ThemeForgeHero,
      
      solution: {
        solutionTitle: 'AI-powered theme generation with live keyboard visualization—zero installation, instant results',
        content: 'ThemeForge eliminates the guesswork entirely. Users describe their vision in natural language—"cyberpunk neon with purple accents"—and watch as Claude AI generates a complete 6-color theme with matching animations in real-time. The live keyboard visualizer displays exactly how it will look before touching any hardware. A refinement system allows iteration ("make it darker," "add more blue") without starting over. One-click PNG export enables immediate import to Wootility. The entire experience happens in-browser with zero friction: no downloads, no desktop apps, no manual hex entry. From concept to customized keyboard in under 60 seconds.',
        keyFeatures: [],
        images: [ThemeForgeHero]
      },
      
      research: {
        headingTitle: 'Market validation revealed a genuine first-mover opportunity with built-in distribution',
        content: 'Systematic competitive analysis confirmed what seemed too good to be true: zero web-based RGB theme visualization tools existed despite a massive addressable market. With 15 million mechanical keyboards sold annually and 60% featuring RGB (9 million units), even capturing 10% of enthusiast customizers meant 900,000 potential users. Reddit\'s r/MechanicalKeyboards community alone had 2 million members actively discussing RGB frustrations. The timing was perfect—Wooting\'s 80HE Founders campaign had just shipped 23,000+ keyboards, creating immediate demand for customization tools.',
        keyFindings: [
          '100% of competitors (OpenRGB, SignalRGB, Aurora, Wootility) were desktop applications with no preview functionality',
          '900,000+ addressable market identified (10% of 9M annual RGB keyboard sales are enthusiast customizers)',
          '23,000+ Wooting 80HE keyboards just shipped, creating built-in early adopter audience',
          'User pain point validated: hours wasted on trial-and-error RGB setup with no visual reference before hardware application'
        ],
        researchMethods: [
          'Competitive analysis: Systematically evaluated 5 major RGB tools, revealing 100% lacked web-based preview',
          'Community research: Analyzed r/MechanicalKeyboards (2M+ members) and r/Wooting discussions to validate pain points',
          'Market sizing: Calculated 900K addressable users from 15M annual keyboard sales × 60% RGB × 10% enthusiasts',
          'Timing analysis: Identified Wooting 80HE launch momentum as distribution catalyst'
        ],
        images: []
      },
      
      researchWork: {
        image1: TFCompetitors,
        image2: TFMarketSize,
        image3: TFReddit,
        image4: TFWooting,
        caption1: '[Competitive Analysis Table] Comparison matrix showing OpenRGB, SignalRGB, Aurora, Wootility, and Wootabase with columns for Platform (Desktop/Web), Preview Capability (Yes/No), and Key Features—highlighting that ThemeForge is the only web-based solution with live preview',
        caption2: '[Market Sizing Funnel] Visual funnel diagram: 15M mechanical keyboards sold annually → 9M RGB-enabled (60%) → 900K enthusiast customizers (10%), with callouts showing r/MechanicalKeyboards 2M+ members and Wooting 80HE 23K+ backers',
        caption3: '[Reddit Community Screenshot] Screenshot of r/MechanicalKeyboards showing 2M+ members with sample posts discussing RGB customization frustrations and manual setup pain points',
        caption4: '[Wooting 80HE Launch Data] Screenshot or graphic showing Wooting 80HE Founders campaign success—23,000+ keyboards shipped, creating immediate built-in audience for theme tools'
      },
      
      define: {
        heading: 'Strategic constraints turned speed into competitive advantage',
        content: [
          'With zero competitors identified, the window for first-mover advantage was temporary and closing fast. This reality drove every scope decision: launch with Wooting 80HE support only (87-key TKL layout) rather than attempting universal keyboard compatibility. Ship with 50 curated themes across Space, Cozy, Daily, Anime, and Gaming categories instead of building an infinite generation library. Enable core AI functionality but defer user accounts, community features, and social sharing to post-MVP validation.',
          'Domain selection became a strategic positioning decision. While themeforge.gg appealed to gaming culture, analysis revealed it would alienate 60% of the keyboard market—developers, designers, and productivity enthusiasts who represent the majority of RGB customizers. Choosing themeforge.dev signaled "built by developers, for the maker community" while remaining category-neutral for future expansion. This wasn\'t just branding; it was audience segmentation that unlocked 80-90% market accessibility versus 40% with .gg.',
          'The technical architecture prioritized velocity over perfection. Next.js 14 with TypeScript provided type safety without slowing iteration. Firebase handled authentication and database needs faster than building custom backend infrastructure. Integrating Anthropic\'s Claude API for theme generation meant shipping AI features in hours, not months of ML model training. Every decision optimized for one metric: days to launch, not features shipped.'
        ]
      },
      
      defineWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        caption1: '[Domain Strategy Comparison] Infographic comparing domain extensions (.com, .io, .gg, .dev, .app) with pros/cons and audience appeal percentages—showing .dev wins 80-90% market accessibility vs .gg at 40%',
        caption2: '[Tech Stack Architecture] Diagram showing technology choices: Next.js 14 + TypeScript (frontend) → Firebase (auth/database) → Claude API (AI generation) → Vercel (deployment), with decision rationale for each layer emphasizing speed-to-market'
      },
      
      insights: {
        headingTitle: 'Users wanted bold design and iterative control—not conservative defaults',
        content: 'Testing revealed a consistent pattern: users pushed back against every conservative design decision. Initial background gradients at 15% opacity were "too subtle"—users requested "more color" through four iterations until reaching 55% opacity with multi-layer radial gradients. Keyboard animations initially felt "meh, not much going on" until finding the balance between dramatic (rejected as "shithouse") and moderate effects. The refinement system became critical when users wanted to tweak animations without regenerating entire color palettes. The insight: users knew exactly what they wanted and needed tools for iteration, not designer assumptions about "good taste."',
        userNeeds: [
          'Visual preview before hardware commitment—eliminate trial-and-error entirely',
          'Iteration without starting over—refine one aspect (animation, brightness) while preserving the rest',
          'Bold, high-contrast gradients—users consistently wanted more vibrant colors than designer defaults',
          'Zero-friction workflow—browser-based, no installation, shareable links'
        ],
        designPrinciples: [
          'Speed to value: Generate working theme in under 60 seconds from landing page',
          'Iteration over perfection: Refinement buttons enable quick adjustments without full regeneration',
          'Show, don\'t tell: Live keyboard visualizer demonstrates exactly what users will get',
          'Minimal friction: Single-click PNG export, zero account requirements for core features'
        ],
        images: []
      },
      
      designIteration: {
        concept: {
          heading: 'From flashy cosmic gradients to professional minimalism inspired by Wootility',
          content: 'Initial designs leaned heavily into "gaming aesthetic"—dramatic cosmic gradients, bold typography (Orbitron at 2rem), heavy shadows and glows. User feedback was immediate: this felt amateur. The pivot came from studying Wootility.io\'s professional, clean interface. The redesign embraced minimalism: reduced heading sizes (2rem → 1.5rem), implemented glass morphism (backdrop-filter: blur(20px)) over heavy gradients, adopted viewport-locked architecture (100vh with internal scroll containers) to feel like a product rather than a website. The transformation elevated ThemeForge from "cool tool" to "professional platform."',
          image: ImageFiller,
          caption: '[Design Evolution Comparison] Side-by-side showing "Before" (flashy cosmic gradients, Orbitron 2rem headings, heavy shadows) vs "After" (minimal clean interface, 1.5rem headings, glass morphism effects, professional aesthetic inspired by Wootility)'
        },
        
        prototype: {
          heading: 'Five major iterations refined the keyboard visualizer from prototype to pixel-perfect',
          content: 'The keyboard layout required surgical precision—Wooting\'s 87-key TKL layout has specific key widths (1u, 1.5u, 1.75u, 2u, 2.25u, 2.75u, 6.25u spacebar) and spacing that initial prototypes missed entirely. Iteration 1 had missing F-keys and incorrect widths. By iteration 3, cross-referencing official Wootility screenshots achieved pixel-perfect accuracy. Animation timing evolved through user testing: wave patterns initially flowed chaotically (left → bottom-right → rest) due to CSS overriding JavaScript-calculated delays. The fix required removing CSS animation-delay overrides entirely, letting inline styles control precise timing for smooth left-to-right flow. Color intensity underwent four rounds of "still more" feedback before reaching the 55% opacity sweet spot that balanced vibrancy with text readability.',
          beforeImage: ImageFiller,
          afterImage: ImageFiller,
          beforeCaption: '[Early Keyboard Prototype] Screenshot showing initial keyboard visualizer with missing F-keys, incorrect key widths, misaligned navigation cluster—annotated with red circles highlighting layout errors and spacing issues',
          afterCaption: '[Final Pixel-Perfect Layout] Screenshot of refined keyboard visualizer matching exact Wooting 80HE specifications—accurate key widths (1u, 1.5u, 2.25u, etc.), proper F-key spacing, correct navigation cluster placement, annotated with green checkmarks confirming accuracy'
        },
        
        testingWork: {
          image1: ImageFiller,
          image2: ImageFiller,
          image3: ImageFiller,
          image4: ImageFiller,
          caption1: '[Animation Wave Flow] GIF or sequential frames showing keyboard animation wave pattern—demonstrating "Before" (chaotic left→bottom-right→rest flow) vs "After" (smooth left-to-right wave progression)',
          caption2: '[Color Intensity Iterations] 4-panel progression showing background gradient opacity evolution: 15% (too subtle) → 35% (still muted) → 55% (perfect balance) → user feedback quotes overlaid on each',
          caption3: '[Layout Accuracy Validation] Side-by-side comparison: ThemeForge keyboard visualizer next to official Wootility screenshot with alignment grid overlay showing pixel-perfect matching',
          caption4: '[User Feedback Compilation] Screenshot compilation of Discord/Reddit comments showing real quotes: "still more" (color requests), "animations very meh" (animation feedback), "alot better!" (final approval)'
        },
        
        abTesting: {
          heading: 'Layout experiments validated the 20/60/20 information architecture',
          content: 'Theme detail pages tested three layouts: centered keyboard with floating sidebars, full-width keyboard with stacked info below, and the final 20/60/20 split (title/stats | keyboard visualizer | colors/instructions). The winning layout emerged from user behavior—users wanted the keyboard visually dominant at 60% width while maintaining quick access to color codes and setup instructions. The compact header evolution was equally data-driven: initial designs consumed one-third of viewport height with back button, title, and filters stacked vertically. Consolidating to a single row ([← Back] [Title/Count] ... [Search] [Filters]) with reduced padding ($spacing-lg → $spacing-sm) reclaimed critical screen real estate for the keyboard itself.',
          image: ImageFiller,
          caption: '[Layout A/B Testing] Three wireframe mockups side-by-side: (A) centered keyboard with floating sidebars, (B) full-width keyboard with stacked info below, (C) winning 20/60/20 split layout—with winner highlighted and user preference data annotations'
        },
        
        finalSolution: {
          heading: 'Shipped with 50 themes, 9 animations, AI generation, and zero TypeScript errors',
          content: 'The production build achieved feature completeness across the entire experience: 50 hand-curated themes distributed across 5 categories (10 each for Space, Cozy, Daily, Anime, Gaming), 9 authentic Wooting animation types (Static, Jelly, Scan, Breath, Ripple, Touch, AOE, Mixing, Trail), AI-powered theme generation with conversation context for refinements, real-time Firestore database for view counts, downloads, and favorites tracking, Firebase authentication with Google Sign-In, responsive design optimized for desktop (mobile displays warning overlay), and comprehensive legal compliance (Privacy Policy, Terms of Service, AI Content Disclaimer). The codebase maintained strict TypeScript typing throughout 3,000+ lines, zero console errors in production, and SCSS following BEM methodology for long-term maintainability. Currently beginning marketing efforts and user testing cycles to gather feedback for ongoing improvements in preparation for scaling the product to broader keyboard communities.',
          screens: [ImageFiller, ImageFiller, ImageFiller, ImageFiller],
          captions: [
            '[Landing Page Final] Full-viewport screenshot of ThemeForge landing page showing hero section with "AI-Powered RGB Keyboard Theme Platform" headline, dual CTAs (Browse Themes, AI Generator), and 4 feature cards in grid layout',
            '[Browse Themes Interface] Screenshot of theme browse page with compact header (search/filters in single row), horizontal scrolling carousels for all 5 categories (Space, Cozy, Daily, Anime, Gaming), theme cards showing color strip previews',
            '[Theme Detail View] Screenshot showing 20/60/20 layout: left sidebar (title/stats), center (keyboard visualizer with live animation), right sidebar (color palette with hex codes + Wootility setup instructions)',
            '[AI Generator Interface] Screenshot of AI Generator showing 50/50 split: left side (chat history with starter prompt cards and conversation), right side (live keyboard preview updating in real-time with generated theme)'
          ]
        }
      },
      
      outcomes: {
        metrics: [
          'Launched in 7 days from initial concept to live production (themeforge.dev)',
          '20+ concurrent users within 24 hours of launch with zero paid marketing',
          'Zero direct competitors identified in 900,000+ addressable market',
          '50 themes shipped with 100% pattern function coverage and verified gradient distribution',
          'Established Apphouse Pty Ltd (ACN 694651011) as portfolio company structure',
          '$75 total investment (domain + business registration) to validated product-market fit',
          'Currently conducting user testing and iterative improvements for market scaling'
        ],
        qualitative: [
          'First-to-market advantage captured in AI-powered keyboard theme generation',
          'Clean technical implementation: 0 TypeScript errors, 0 console errors in production',
          'Professional brand positioning established through minimal design and legal compliance',
          'Portfolio approach validated: positioned as "startup #1 of 5" reducing individual product pressure'
        ]
      },
      
      reflection: {
        heading: 'Shipping beats perfecting—and speed becomes a sustainable competitive advantage',
        content: [
          'The most valuable lesson was confronting the gap between academic preparation and entrepreneurial execution. Four years of UX education taught design thinking, user research methodologies, and prototyping—but not how to make strategic scope decisions under time pressure, debug Firebase authentication at 2am, or launch with known bugs because perfection delays market validation. This project proved that entrepreneurial skills (decision-making, problem-solving, finishing) matter more than coding ability. Building real products requires different muscles than passing exams.',
          'The portfolio approach fundamentally changed risk perception. Framing ThemeForge as "experiment #1 of 5 micro-SaaS products" rather than an all-in bet enabled faster decision-making and higher risk tolerance. When a single project doesn\'t need to generate $10K/month—because five products averaging $2K each achieves the same goal—it becomes acceptable to launch narrow (Wooting-only), iterate based on real feedback, and potentially pivot or sunset if market validation fails. This mindset shift from "perfectionism paralysis" to "portfolio velocity" is the unlock for sustainable product development.',
          'If I could restart, I\'d change the order of operations: deploy Firebase security rules before building frontend features (not after), write comprehensive legal policies before announcing launch (not scrambling last-minute), and establish clearer success metrics upfront (target user count, revenue goals, engagement benchmarks) rather than celebrating "20+ concurrent users" without context for what constitutes traction. The biggest takeaway: first-time founders optimize for shipping; experienced founders optimize for sustainable systems. Next time, I\'ll bring both. Now in the post-launch phase, I\'m beginning targeted marketing through r/Wooting and r/MechanicalKeyboards while conducting user testing sessions to gather actionable feedback for ongoing improvements—building the foundation for scaling from early adopters to mainstream keyboard enthusiasts.'
        ]
      },
      
      learnings: [],
      nextSteps: '',
      url: 'https://themeforge.dev',
      
      projectWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        image3: ImageFiller,
        image4: ImageFiller
      }
    }
  },

  // ============================================
  // PROJECT 2: TELSTRA CONNECT (FORMERLY #1)
  // ============================================
  {
    id: 'telstra-connect',
    title: 'Redesigning Telstra Connect 2.0 for ISO',
    subtitle: 'Enterprise Dashboard • B2B Platform',
    description: '/* A UX design case study */',
    imageUrl: TelcoHero,
    caseStudy: {
      impact: 'Designed an integrated dashboard that slashed task time by 64% for IT managers drowning in 8 disconnected tools—proven via A/B testing.',
      heroImages: [TelcoHero],
      images: [TelcoHero],
      
      duration: '12 Weeks',
      date: '2024',
      role: [
        'End-to-end UX design',
        'User research and testing',
        'Prototyping and validation',
        ''
      ],
      team: '1 Designer',
      tools: ['Figma'],
      
      problemTitle: 'IT managers were juggling 8+ disconnected tools just to do their job.',
      problem: 'Ryan Quinn spent 3+ hours daily switching between apps to monitor networks and respond to incidents. Toby Matthews struggled to provide timely support during outages. Every hour wasted cost Telstra in support tickets and renewal risk enterprise clients were threatening to switch.',
      problemImage: TelcoProblem,
      solutionImage: TelcoSolution,

      solution: {
        solutionTitle: 'A dashboard that learns your workflow no setup required.',
        content: 'Machine learning observes user behavior and auto-optimizes the interface. A simple toggle switches to a personalized workspace, surfacing the tools you need when you need them. Competitors require 15+ minutes of manual configuration. This takes zero seconds.',
        keyFeatures: [],
        images: [TelcoSolution]
      },

      research: {
        headingTitle: 'I analyzed three competitors to understand why enterprise portals fail.',
        content: 'Optus, Aussie Broadband, and Vodafone all offered feature-rich platforms. But user research revealed the same pattern: slow loading times, confusing navigation, and manual configuration requirements that created 10-15 minutes of setup friction. The insight that changed my approach: high features does not equal high usability. Users did not want more tools they wanted smarter tools.',
        keyFindings: [
          'All three competitors relied on manual dashboard customization creating setup friction before users could work efficiently',
          'Service desk consultants spent 40% of their workday chasing status updates across disconnected tools',
          'IT managers prioritized proactive alerts over real-time data visualizations by a 3:1 margin'
        ],
        researchMethods: [
          'SWOT analysis on Optus mapping features against user experience quality',
          'Heuristic evaluation of competitor interfaces against Nielsen 10 usability principles',
          'User persona analysis with 2 primary personas: IT Manager and Service Desk Consultant',
          'Kano Model workshop with 4 participants to prioritize feature impact on user satisfaction'
        ],
        images: []
      },

      researchWork: {
        image1: User1,
        image2: User2,
        image3: CompAnalysis,
        image4: CompSwot,
        caption1: '[IT Manager Persona] User persona card for Ryan Quinn showing demographics, pain points (3+ hours daily switching apps, network monitoring frustration), goals (unified dashboard, proactive alerts), and behavioral patterns',
        caption2: '[Service Desk Consultant Persona] User persona card for Toby Matthews showing role context, pain points (delayed incident response, manual status checking), goals (instant access to service health), and workflow needs',
        caption3: '[Competitive Feature Analysis] Comparison table showing Optus, Aussie Broadband, and Vodafone platforms with columns for Load Time, Navigation Complexity, Setup Requirements, and Key Features—highlighting manual configuration as universal weakness',
        caption4: '[SWOT Analysis Matrix] Detailed SWOT breakdown of Optus platform showing Strengths (feature-rich), Weaknesses (slow load times, confusing nav), Opportunities (automation potential), Threats (user churn to simpler solutions)'
      },

      define: {
        heading: 'Translating research findings into specific design requirements and constraints.',
        content: [
          'After analyzing competitor platforms and conducting user interviews, I synthesized the research into three core design requirements. First, the dashboard needed to eliminate manual configuration entirely users wanted intelligence, not customization screens. Second, status visibility had to be immediate users needed to know at a glance if something required attention without clicking through multiple menus.',
          'The third requirement emerged from interviewing service desk consultants: the interface needed to prioritize speed over completeness during critical incidents. When network outages occur, every second matters. This meant designing for quick scanning and one-tap actions rather than comprehensive data displays.',
          ''
        ]
      },

      defineWork: {
        image1: Challange,
        image2: TenXTen,
        image3: Senario1,
        image4: Senario2,
        caption1: '[Problem Statement Definition] Visual problem statement showing user pain points mapped to business impact: Tool-switching time (3hrs/day) → Support ticket delays → Customer churn risk',
        caption2: '[10x10 Ideation Grid] Sketch showing 10x10 rapid ideation session results—100 concept thumbnails exploring different dashboard layouts, widget arrangements, and information hierarchy approaches',
        caption3: '[IT Manager User Scenario] Storyboard illustrating Ryan Quinn\'s current workflow: Morning routine checking 8 different apps, missing critical alert buried in email, delayed response causing escalation',
        caption4: '[Service Desk Scenario] Storyboard showing Toby Matthews during network outage: Frantically switching between tools to find service status, unable to give customers accurate ETAs, frustration mounting'
      },
      
      insights: {
        headingTitle: 'Personalization without manual effort emerged as the highest-impact feature.',
        content: 'Through Kano Model testing with 4 participants, I identified that users wanted smart defaults, not configuration screens. I sketched three competing concepts and tested them with 3 users. The widget-based interface won decisively users praised the condensed clean interface and said simple is best.',
        userNeeds: [
          'Single source of truth for all service data',
          'Proactive notifications for critical incidents',
          'Instant access to frequently-used features'
        ],
        designPrinciples: [
          'Speed over completeness during outages, seconds matter',
          'Zero manual setup personalization should be automatic',
          'Visual status indicators awareness without clicking'
        ],
        images: []
      },

      designIteration: {
        concept: {
          heading: 'I tested three concepts. Users chose simplicity over complexity.',
          content: 'Sketched widget-based, card-based, and list-based layouts. All 3 users in early testing preferred the widget approach simple is best.',
          image: ImageFiller,
          caption: '[Concept Sketches] Three hand-drawn wireframe concepts side-by-side: (A) widget-based modular layout, (B) card-based grid system, (C) list-based vertical stack—with user preference votes marked showing widget-based winning 3/3'
        },
        prototype: {
          heading: 'The first prototype worked but users wanted more.',
          content: '4 out of 5 participants completed all tasks successfully. But every single one asked: How do I know if something needs attention? I had missed the notification system entirely.',
          beforeImage: ImageFiller,
          afterImage: ImageFiller,
          beforeCaption: '[Initial Prototype] Screenshot of first iteration dashboard showing widget layout but missing visual status indicators and notification system—annotated with user feedback: "How do I know if something needs attention?"',
          afterCaption: '[Refined Prototype] Screenshot of updated dashboard with prominent status indicators (red/yellow/green), notification bell with badge count, and visual alerts for critical incidents—addressing user feedback directly'
        },
        
        testingWork: {
          image1: ImageFiller,
          image2: ImageFiller,
          image3: ImageFiller,
          image4: ImageFiller,
          caption1: '[Usability Testing Session] Photo or screenshot of participant using prototype with eye-tracking overlay showing gaze patterns and attention hotspots on dashboard elements',
          caption2: '[Task Completion Analysis] Chart showing 5 participants\' task completion rates: 4/5 completed all tasks, with time-to-completion metrics and friction points annotated',
          caption3: '[Feedback Compilation] Post-it note wall or digital board showing clustered user feedback themes: "Need status visibility" (5 mentions), "Too many clicks" (3 mentions), "Great layout" (4 mentions)',
          caption4: '[Iteration Tracking] Side-by-side comparison grid showing prototype evolution across 3 iterations with specific changes highlighted based on user feedback'
        },
        
        abTesting: {
          heading: 'A/B testing proved personalization was not just nice-to-have.',
          content: 'Built two competing prototypes. The personalized dashboard completed tasks 60% faster and scored 4.6/5 satisfaction vs 3.2/5 for the standard overview approach.',
          image: ImageFiller,
          caption: '[A/B Test Results] Split-screen comparison showing Prototype A (personalized) vs Prototype B (standard) with metrics overlay: Task completion time (40% faster), Satisfaction score (4.6/5 vs 3.2/5), Success rate (100% vs 80%)'
        },
        
        finalSolution: {
          heading: 'The final solution: A self-learning dashboard with zero setup time.',
          content: 'Machine learning observes user behavior and auto-optimizes the interface. Toggle on, and the dashboard surfaces your most-used tools with proactive notifications. No configuration screens. No training required.',
          screens: [FinalBrand, FinalSocial, FinalLogo, FinalIsoScreens],
          captions: [
            '[Final Dashboard Overview] Full-screen mockup showing complete personalized dashboard with widget layout, status indicators, notification system, and machine learning toggle highlighted',
            '[Widget Customization] Close-up showing intelligent widget arrangement with usage frequency indicators and automatic reordering based on user behavior patterns',
            '[Notification System] Detail view of proactive alert system showing critical incident notification with one-tap action buttons and escalation options',
            '[Mobile Responsive View] Mockup showing dashboard adapted for tablet/mobile with condensed widget layout maintaining full functionality in smaller viewport'
          ]
        }
      },

      outcomes: {
        metrics: [
          '64% faster task completion',
          '5/5 test users completed workflows successfully',
          'High fidelity prototype produced',
          ''
        ],
        qualitative: []
      },
      
      reflection: {
        heading: 'Early testing saved weeks. User feedback revealed blind spots. Data validated decisions.',
        content: [
          'Testing concept sketches before building high-fidelity designs prevented wasted effort on Concept 2 and 3. Users immediately told me simple is best a signal I could not have gotten from assumptions alone. When users requested notification indicators, my instinct was to resist cluttering the clean interface. They were right. Status awareness mattered as much as navigation speed.',
          'A/B testing did not just validate my design it gave stakeholders measurable proof. When I could say Prototype A completed tasks 60% faster than Prototype B, there was no debate. Data beats opinions every time. The biggest lesson: I initially believed IT managers wanted detailed data visualizations. Testing revealed they actually wanted at-a-glance status updates. That distinction shaped the entire widget design philosophy.'
        ]
      },
      
      learnings: [],
      nextSteps: '',
      url: 'https://example.com',
      
      projectWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        image3: ImageFiller,
        image4: ImageFiller
      }
    }
  },

  // ============================================
  // PROJECT 3: AXIS (UNCHANGED)
  // ============================================
  {
    id: 'axis-ecommerce',
    title: 'AXIS - Building an E-Commerce Brand from Zero',
    subtitle: 'Brand Design & E-Commerce',
    description: '/* A self-initiated brand design and product launch */',
    imageUrl: AxisHero,
    caseStudy: {
      impact: 'I designed and launched a complete e-commerce brand in 6 weeks—from competitive research to live Shopify store. This self-initiated project taught me the full lifecycle of bringing a product to market, bridging the gap between design theory and real-world execution.',
      
      heroImages: [AxisHero],
      images: [Mock1],
      
      duration: '6 Weeks',
      date: '2024',
      role: [
        'End-to-end brand design and strategy',
        'E-commerce UX/UI design',
        'Product photography and visual content',
        'Marketing campaign design'
      ],
      team: 'Solo project',
      tools: ['Figma', 'Shopify', 'Mailchimp', 'Adobe Stock'],
      
      problemTitle: 'Design portfolios showcase skills, but miss the business reality.',
      problem: 'After three years of university projects following supplied briefs, I had strong UX work but no experience launching real products. I needed to bridge the gap between design theory and entrepreneurial execution—learning what it actually takes to bring a product from concept to market.',
      problemImage: P3Problem,
      solutionImage: P3Solution,
      
      solution: {
        solutionTitle: 'A live e-commerce store with complete brand identity and marketing system.',
        content: 'I designed and launched AXIS, a minimalist brand selling 3-in-1 wireless charging stations. The project encompassed competitive research, brand identity design, Shopify store development, product photography, and integrated marketing campaigns across email and social media.',
      },
      
      research: {
        headingTitle: 'E-commerce electronics is a $4,454 billion opportunity.',
        content: 'Market analysis revealed the e-commerce sector is forecasted to reach $4,454 billion by 2024, with electronics dominating revenue streams. I analyzed three direct competitors (Journey, 3sixT, and Trendgo) to identify positioning opportunities. Key insight: established brands had strong product offerings but inconsistent brand experiences and weak social media presence despite charging premium prices.',
        keyFindings: [
          'Electronics represents the largest revenue sector in e-commerce',
          'Competitors offered similar products but lacked cohesive brand identity',
          'Drop shipping enables rapid market entry with minimal upfront investment',
          'Target demographic (18-65+) responds to clean, modern branding over feature lists'
        ],
        researchMethods: [
          'Market trend analysis using Statista e-commerce data',
          'Competitive SWOT analysis of Journey, 3sixT, and Trendgo',
          'Product exploration testing with Shopify and Zendrop integration',
          'Target audience identification using Google Analytics frameworks'
        ]
      },
      
      researchWork: {
        image1: Mock1, 
        image2: Mock2,
        image3: Mock1,
        image4: Mock2,
        caption1: '[Market Research Data] Screenshot or chart showing e-commerce electronics market forecast reaching $4,454 billion by 2024, with electronics highlighted as dominant revenue sector',
        caption2: '[Competitive Brand Analysis] Comparison grid showing Journey, 3sixT, and Trendgo product offerings, pricing, visual identity consistency, and social media engagement scores',
        caption3: '[Competitor Product Screenshots] Side-by-side screenshots of competitor e-commerce stores showing product presentation, photography style, and brand consistency (or lack thereof)',
        caption4: '[Target Audience Demographics] Visual breakdown showing AXIS target demographic (18-65+) with psychographic profiles: tech-savvy professionals, minimalist aesthetic preference, value convenience'
      },

      define: {
        heading: 'Defining brand positioning: Premium quality at accessible price points.',
        content: [
          'The Define phase clarified AXIS brand positioning within the competitive landscape. Analysis showed competitors fell into two camps: budget brands with inconsistent visual identity, and premium brands with prices that excluded younger demographics. AXIS would occupy the middle ground premium presentation and quality at accessible pricing.',
          'I defined three non-negotiable brand attributes that would guide every design decision: minimal complexity in both visual design and user experience, consistency across all customer touchpoints from Instagram to packaging, and technical sophistication that appealed to the target demographic of tech-savvy professionals aged 25-45.',
          'Technical constraints from the Shopify platform and drop shipping model influenced design decisions significantly. Product photography had to be created from stock imagery since I did not have physical inventory. The Shopify Dawn theme provided the technical foundation, but required extensive customization to match AXIS brand identity. Budget limitations ($1000 total) meant every design decision had to balance impact against cost.'
        ]
      },

      defineWork: {
        image1: Mock1,
        image2: Mock1,
        caption1: '[Brand Positioning Map] 2x2 matrix showing competitor positioning: Budget/Premium (Y-axis) vs Inconsistent/Consistent Brand (X-axis), with AXIS positioned in "Premium + Consistent" quadrant',
        caption2: '[Brand Attributes Framework] Visual showing 3 core brand pillars: Minimal Complexity, Consistency Across Touchpoints, Technical Sophistication—each with supporting design principles and examples'
      },
      
      insights: {
        headingTitle: 'Minimalism and consistency win in crowded markets.',
        content: 'Through competitive analysis, I discovered that premium pricing requires premium presentation. Competitors with 4.9-star ratings still struggled with brand recognition due to inconsistent visual identity. The insight: in drop shipping, where products are commoditized, brand design becomes the primary differentiator.',
        userNeeds: [
          'Clear product information without marketing fluff',
          'Professional visual presentation that justifies pricing',
          'Seamless checkout experience on mobile devices',
          'Responsive customer support and transparent policies'
        ],
        designPrinciples: [
          'Minimal complexity, maximum clarity',
          'Consistency across all touchpoints',
          'Mobile-first responsive design',
          'Brand identity that scales from Instagram to packaging'
        ]
      },
      
      designIteration: {
        concept: {
          heading: 'The brand name AXIS represents connection and alignment.',
          content: 'AXIS evokes technical precision and the central point where multiple elements converge—perfect for a charging hub product. The monochromatic color palette with Roboto Mono typography conveys technical sophistication while remaining accessible. Early sketches explored three naming directions before AXIS emerged as the strongest candidate.',
          image: P3AxisBranding,
          caption: '[Brand Identity System] Brand guidelines showing AXIS logo variations, monochromatic color palette (blacks, grays, whites), Roboto Mono typography specimens, and usage examples across digital and print'
        },
        prototype: {
          heading: 'Wireframing transformed Shopify Dawn theme into custom brand experience.',
          content: 'I started with Shopify Dawn theme as the foundation, then wireframed custom layouts for homepage, product page, catalog, and contact page. The challenge was maintaining Shopify UX conventions while establishing unique brand identity. Initial sketches focused on reducing visual clutter and emphasizing product photography.',
          beforeImage: P3Initial,
          afterImage: P3UserFlow,
          beforeCaption: '[Initial Shopify Dawn Theme] Screenshot of default Shopify Dawn theme showing generic layout, standard typography, placeholder content—before AXIS customization',
          afterCaption: '[Customized AXIS Homepage] Screenshot of transformed homepage with custom hero section, product grid, minimalist navigation, and AXIS brand identity fully integrated'
        },
        
        testingWork: {
          image1: P3Wire1,
          image2: P3Wire2,
          image3: P3DraftMarket,
          image4: P3DraftBrand,
          caption1: '[Homepage Wireframe] Low-fidelity wireframe showing homepage layout structure: hero section, featured products grid, USP callouts, footer navigation',
          caption2: '[Product Page Wireframe] Wireframe showing product detail page layout: product image gallery, specifications, add-to-cart CTA, customer reviews section',
          caption3: '[Marketing Campaign Mockup] Draft showing email newsletter design with product announcement, promotional copy, CTA button, and AXIS branding elements',
          caption4: '[Social Media Templates] Draft showing Instagram post templates with product photography, brand-consistent graphics, and caption formatting guidelines'
        },
        
        abTesting: {
          heading: '',
          content: '',
          caption: ''
        },
        
        finalSolution: {
          heading: 'Complete brand system with integrated marketing components.',
          content: 'The final deliverable includes a live Shopify store with custom product photography, brand identity guidelines (logo, color palette, typography), social media templates for Instagram and Facebook, newsletter designs for Mailchimp, and ad campaign templates. Every touchpoint maintains consistent visual language.',
          screens: [FinalBrand, FinalSocial, FinalLogo, FinalIsoScreens],
          captions: [
            '[Final Brand Guidelines] Complete brand book showing logo system, color palette, typography hierarchy, iconography style, photography guidelines, and usage rules',
            '[Social Media System] Instagram grid showing 9-post layout demonstrating visual consistency across product posts, lifestyle content, and promotional graphics',
            '[Logo Variations] Logo presentation showing primary lockup, secondary marks, monochrome versions, minimum size specifications, and clear space requirements',
            '[E-commerce Store Screens] Multi-screen mockup showing homepage, product page, cart, and checkout—demonstrating consistent AXIS branding throughout customer journey'
          ]
        }
      },
      
      outcomes: {
        metrics: [
          'Live Shopify store launched within 6-week timeline',
          'Complete brand identity system with 20+ design components',
          'Marketing campaign templates for Instagram, Facebook, and email',
          'Product photography suite created from stock imagery',
          ''
        ]
      },
      
      reflection: {
        heading: 'Real products have real constraints—and that makes you a better designer.',
        content: [
          'This project forced me to design within business constraints I never encountered in university briefs. Budget limitations ($1000 total), supplier restrictions, platform limitations, and timeline pressure created design challenges that felt authentic. The biggest lesson: design decisions have financial consequences when you are spending your own money.',
          'I learned that brand consistency matters more than I expected. When designing the social media templates, newsletter layouts, and store pages simultaneously, inconsistencies became immediately obvious. This taught me to establish design systems early and reference them constantly. The second major insight: shipping real products to real customers creates accountability that university projects cannot replicate.',
          'If I were to iterate, I would test the brand identity with target customers before finalizing. I made assumptions about what resonated based on competitive analysis, but user testing would have validated those decisions. The experience taught me that launching is better than perfecting—you learn more from one real customer than from ten usability tests.'
        ]
      },
      
      learnings: [],
      url: 'https://93eece-ab.myshopify.com/'
    }
  },

  // ============================================
  // PROJECT 4: DATA DASHBOARD (UNCHANGED)
  // ============================================
  {
    id: 'data-dashboard',
    title: 'Designing an Intuitive Data Dashboard',
    subtitle: 'Analytics Platform',
    description: '/* Designed an intuitive data visualisation tool */',
    imageUrl: Mock5,
    caseStudy: {
      impact: 'Reduced time-to-insight by 67% through intuitive data visualization and natural language queries.',
      heroImages: [Mock5],
      images: [Mock5],
      
      duration: '',
      date: '',
      role: [''],
      team: '',
      tools: [''],
      
      problemTitle: '',
      problem: '',
      
      solution: {
        solutionTitle: '',
        content: '',
      },
      
      research: {
        headingTitle: 'Users think in questions, not features',
        content: 'We conducted contextual inquiry with 12 data analysts, analyzed 200+ support tickets, and performed task analysis on common workflows. The insight: users approached the tool with questions they wanted to answer, not features they wanted to use.',
      },

      researchWork: {
        image1: Mock5,
        image2: Mock5,
        image3: Mock5,
        image4: Mock5,
        caption1: '[Contextual Inquiry Session] Photo of researcher observing data analyst during typical workflow, with task annotations and pain point notes visible on observation sheet',
        caption2: '[Support Ticket Analysis] Chart showing 200+ support tickets categorized by issue type: Navigation confusion (35%), Feature discovery (28%), Query syntax errors (22%), Visualization setup (15%)',
        caption3: '[User Task Flow] Diagram showing typical analyst workflow attempting to answer business question: Formulate question → Navigate multiple menus → Configure filters → Generate visualization → Realize wrong data → Start over',
        caption4: '[Pain Point Heatmap] Interface screenshot with red overlay showing areas of highest user frustration based on click tracking and time-on-task data'
      },

      define: {
        heading: '',
        content: [
          '',
          '',
          ''
        ]
      },

      defineWork: {
        image1: Mock5,
        image2: Mock5,
        caption1: '[Placeholder for Define Work Image 1] Description of what should be shown here',
        caption2: '[Placeholder for Define Work Image 2] Description of what should be shown here'
      },
      
      insights: {
        headingTitle: '',
        content: '',
      },

      designIteration: {
        concept: {
          heading: '',
          content: '',
          image: Mock1,
          caption: '[Placeholder for Concept Image] Description of what should be shown here'
        },
        prototype: {
          heading: 'First brand system lacked consistency.',
          content: 'Initial application showed the logo worked well but color usage was inconsistent across touchpoints. Typography hierarchy needed stronger definition for different contexts.',
          beforeImage: Mock1,
          afterImage: Mock1,
          beforeCaption: '[Placeholder for Before Prototype] Description of what should be shown here',
          afterCaption: '[Placeholder for After Prototype] Description of what should be shown here'
        },
        testingWork: {
          image1: Mock1,
          image2: Mock1,
          image3: Mock1,
          image4: Mock1,
          caption1: '[Placeholder for Testing Image 1] Description of what should be shown here',
          caption2: '[Placeholder for Testing Image 2] Description of what should be shown here',
          caption3: '[Placeholder for Testing Image 3] Description of what should be shown here',
          caption4: '[Placeholder for Testing Image 4] Description of what should be shown here'
        },
        abTesting: {
          heading: 'Testing validated the geometric approach.',
          content: 'Brand recognition testing with 30 participants showed 78% could identify the new brand after single exposure vs 23% for old brand. Modern and trustworthy were most common descriptors.',
          image: Mock1,
          caption: '[Placeholder for A/B Testing Results] Description of what should be shown here'
        },
        finalSolution: {
          heading: 'The final system: Comprehensive guidelines with 200+ components.',
          content: 'Complete brand book with logo usage, color system, typography hierarchy, iconography, photography style, and motion principles. Includes component library for digital applications.',
          screens: [Mock1, Mock1, Mock1, Mock1],
          captions: [
            '[Placeholder for Final Screen 1] Description of what should be shown here',
            '[Placeholder for Final Screen 2] Description of what should be shown here',
            '[Placeholder for Final Screen 3] Description of what should be shown here',
            '[Placeholder for Final Screen 4] Description of what should be shown here'
          ]
        }
      },

      outcomes: {
        metrics: [
          '',
          '',
          ''
        ]
      },
      
      reflection: {
        heading: 'Simple solutions for complex problems',
        content: [
          'This project taught me that the best interfaces feel invisible. By matching the tool to how users naturally think, we created an experience that felt effortless despite the complexity underneath.'
        ]
      },
      
      learnings: [],
      url: 'https://example.com',
      projectWork: {
        image1: Mock5,
        image2: Mock5,
        image3: Mock5,
        image4: Mock5
      }
    }
  }
];
