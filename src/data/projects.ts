// src/data/projects.ts
import Mock1 from '../assets/images/mock-1-1400.webp';
import Mock2 from '../assets/images/mock-2-1400.webp';
import Mock5 from '../assets/images/mock-5.webp';

import ImageFiller from '../assets/images/Landing/image-filler-1.webp';

//Project 1 - THEMEFORGE
import ThemeForgeThumbnail from '../assets/images/Themeforge/themeforge-thumbnail.webp';
import ThemeForgeHero from '../assets/images/Themeforge/themeforge-hero.webp';
import ThemeForgeLand from '../assets/images/Themeforge/theme-landing.webp';
import ThemeForgeProblem from '../assets/images/Themeforge/theme-problem.webp';
import ThemeForgeSolution from '../assets/images/Themeforge/theme-solution.webp';



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

// Project 3 - CLUERA
import ClueraThumbnail from '../assets/images/Cluera/cluera-thumbnail-mock.webp';

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

// Project - ZRO
import ZroThumbnail from '../assets/images/ZRO/zro-thumbnail.webp';




export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  comingSoon?: boolean;
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
  // PROJECT 1: CLUERA
  // ============================================

  {
    id: 'cluera',
    title: 'Cluera',
    subtitle: 'Etsy Review Intelligence • Micro-SaaS',
    description: 'First-to-market AI review intelligence platform for Etsy sellers, delivering weekly insights that no existing tool provides.',
    imageUrl: ClueraThumbnail,
    comingSoon: false,
    caseStudy: {
      impact: 'Designed and launched a full micro-SaaS product from zero — brand, architecture, AI pipeline, and three-tier email report system — in a single intensive build sprint.',

      heroImages: [ClueraThumbnail],
      images: [ClueraThumbnail],

      duration: '7 days',
      date: 'April 2026',
      role: [
        'Product Strategy',
        'Product Research',
        'UX/UI Design',
        'Brand Design',
        'Full-Stack Development',
      ],
      team: 'Solo (AI-assisted development via Ryker agent)',
      tools: ['Next.js', 'Supabase', 'Claude API', 'Stripe', 'Resend', 'Vercel', 'Figma'],

      problemTitle: 'Etsy sellers have no way to understand what their reviews are actually telling them',
      problem: 'Etsy sellers receive reviews every week but have no tool to analyse them at scale. Existing platforms like Alura, eRank, and EverBee focus on SEO and keyword research — reviews are a side feature at best. The official Etsy weekly email is openly mocked by sellers for being useless. Nobody was building a product where reviews are the entire point.',
      problemImage: P3Problem,
      solutionImage: P3Solution,

      solution: {
        solutionTitle: 'Weekly AI-generated review intelligence delivered to your inbox — no dashboard, no login',
        content: 'Cluera connects to an Etsy shop via the official API, analyses every review the shop has ever received, and delivers a personalised intelligence report every Monday morning. The report surfaces what buyers love, what is quietly costing sales, specific listing recommendations, and what competitor shops\' buyers are saying. The key design decision was email-first delivery — no dashboard to log into, no data to interpret. The seller opens their inbox and the insight is already there.',
        keyFeatures: [
          'Full review history analysis — not just recent reviews',
          'AI-extracted themes with week-over-week trend tracking',
          'Specific listing attribution — which exact product has the problem',
          'Competitor review intelligence from public Etsy data',
          'Low-rating alerts sent within hours of a bad review',
          'Product ideas extracted from buyer language in reviews'
        ],
        images: [P3Solution]
      },

      research: {
        headingTitle: 'No direct competitors existed despite massive unmet demand',
        content: 'Systematic analysis of every major Etsy tool confirmed the gap. Alura (800k+ sellers), eRank (1M+ sellers), EverBee, Sale Samurai, and EHunt all treat reviews as a secondary feature within broader SEO platforms. The closest competitors — Esale\'s Chrome extension and InsightAgent — require sellers to manually trigger analysis on demand. Nobody was delivering passive, ongoing review intelligence automatically to sellers\' inboxes.',
        keyFindings: [
          'Zero tools offered automated ongoing review monitoring with email delivery',
          'All major Etsy tools are SEO-first — reviews are a side feature at best',
          'Closest competitors are on-demand only — sellers must actively run analysis themselves',
          'Etsy\'s native weekly email is widely criticised for being generic and actionless',
          'Cluera complements Alura and eRank — no switching cost, additive value'
        ],
        researchMethods: [
          'Competitive analysis of 8 major Etsy seller tools',
          'Etsy API v3 documentation review for data access scope and constraints',
          'Reddit community research across r/EtsySellers',
          'Cost modelling against Claude API pricing to validate unit economics',
          'Market positioning analysis to identify complementary vs competing tools'
        ],
        images: []
      },

      researchWork: {
        image1: P3Initial,
        image2: P3Problem,
        image3: Mock2,
        image4: P3UserFlow,
        caption1: '[Competitive Analysis] Eight-tool matrix — Alura, eRank, EverBee, Esale, InsightAgent mapped against automated delivery, email reports, trend tracking, and competitor intel. Cluera is the only tool to tick all four.',
        caption2: '[The Gap] Etsy\'s official weekly seller email vs the Cluera Pro report — the problem and opportunity visualised side by side',
        caption3: '[Unit Economics] Cost model showing Haiku 4.5 AI cost at $0.10/user/month against $9/month revenue — 98.9% gross margin validated before a line of code was written',
        caption4: '[Market Positioning] 2x2 matrix with axes "SEO-focused / Review-focused" and "On-demand / Automated delivery" — Cluera is the sole occupant of the automated review quadrant'
      },

      define: {
        heading: 'Email-first delivery was the defining product decision',
        content: [
          'The biggest decision was the delivery mechanism. Dashboard-based products like Alura and eRank require sellers to log in, find their data, and interpret it themselves. That creates friction and habit dependency. The insight was that the seller\'s inbox is where they already live — an email that arrives Monday morning with clear, actionable intelligence requires zero behaviour change. The seller opens it with their coffee and knows what to do.',
          'Three tiers were designed to create a clear value ladder: Free (last 10 reviews, basic summary, monthly email), Pro ($9/month, full history, weekly report, competitor intel for 5 shops), and Growth ($19/month, everything in Pro plus daily reports, unlimited competitor tracking, and 30-day sentiment trend analysis). The price point of $9 was a deliberate decision — at that price the value-to-cost ratio is undeniable for any seller receiving more than a handful of reviews per week.'
        ]
      },

      defineWork: {
        image1: P3DraftMarket,
        image2: P3DraftBrand,
        caption1: '[Pricing Architecture] Three-tier value ladder — Free, Pro ($9/mo), Growth ($19/mo) — each tier designed so the upgrade is an obvious decision for a growing Etsy shop',
        caption2: '[Delivery Model Decision] Email-first vs dashboard-first — diagram showing how inbox delivery removes all friction from the core user experience vs the login → navigate → interpret model of competitors'
      },

      insights: {
        headingTitle: 'Every data point had to be grounded in real API data — no estimates, no assumptions',
        content: 'A critical design constraint emerged during the report design phase: the Etsy API provides reviews, ratings, listing data, and shop statistics — but no sales figures, return rates, or revenue data. Every insight in the report had to be traceable back to actual review text or listing metadata. Mention counts always include the denominator ("4 of 27 reviews" not "4 mentions"). The section title "Listing improvements" was renamed "Recommended listing updates — based on review patterns" to frame insights as suggestions, not instructions. Competitor intelligence is explicitly labelled "from public reviews" throughout.',
        userNeeds: [
          'Actionable insights — not just data, but what to do about it',
          'Trust in the numbers — every claim backed by real review data with no estimates',
          'Passive delivery — value arrives without requiring a login or manual action',
          'Clear upgrade path — free tier shows enough value to justify the jump to Pro'
        ],
        designPrinciples: [
          'Every data point traceable to the Etsy API or AI analysis of that data',
          'Denominators always shown — X of Y reviews, never just X mentions',
          'Recommendations framed as suggestions based on patterns, not instructions',
          'Competitor data explicitly labelled as sourced from public reviews'
        ],
        images: []
      },

      designIteration: {
        concept: {
          heading: 'Brand built around the product name: clues hiding in plain sight',
          content: 'The naming process was one of the most intense parts of the project. The first choice — murmur.io — was sniped by domain squatter bots within 60 seconds of the initial search. After extensive iteration, cluera.io was registered: "clue" combined with the "-era" suffix pattern used by established tools like Alura. The brand story follows directly: "Your reviews are full of clues. Cluera finds them." Visual identity: a pinwheel geometric icon representing fragments converging into insight, Playfair Display paired with DM Sans, and a coral accent (#C87C5A) against a dark warm background.',
          image: P3AxisBranding,
          caption: '[Brand Identity] Cluera logo, coral accent palette (#C87C5A), Playfair Display + DM Sans type pairing, and pinwheel icon — all built around the "clues" brand narrative'
        },

        prototype: {
          heading: 'Three report tiers designed to show value and drive upgrade conversion',
          content: 'The Free report was designed to show just enough value to be genuinely useful while making the gap to Pro feel real. The locked sections use blurred skeleton content with upgrade overlays. The conversion hook at the bottom reads "You\'re seeing 10 reviews. You have 847." — pulled live from the Etsy API. The Pro report introduces the priority action card, week-over-week theme comparison, best listing callout, product ideas from review language, and competitor intelligence. The Growth report adds daily format, individual review cards with AI-generated colour-coded tags, a 30-day sentiment trend chart, and an unlimited competitor overview table.',
          beforeImage: P3Wire1,
          afterImage: P3Wire2,
          beforeCaption: '[Free Report] Locked sections with blurred skeleton previews and the dynamic upgrade hook — "You\'re seeing 10 reviews. You have 847." — the number pulls live from the Etsy API',
          afterCaption: '[Pro Report] Full intelligence report — priority action card, stats row, AI insight, week-over-week theme table, buyers love grid, attention items with denominators, listing recommendations, best listing, product ideas, competitor intel'
        },

        testingWork: {
          image1: P3DraftMarket,
          image2: P3DraftBrand,
          image3: FinalSocial,
          image4: FinalBrand,
          caption1: '[Week-over-Week Theme Comparison] Trend table showing "Fast shipping: 3 → 11 (↑267%)" and "Sizing confusion: 1 → 4 (↑300%)" — sellers see exactly if their fixes are working',
          caption2: '[Today\'s Reviews — Growth Tier] Individual daily review cards with AI-generated colour-coded tags: green for positive themes, red for negative, blue for product ideas extracted from buyer language',
          caption3: '[30-Day Sentiment Chart — Growth Tier] Positive vs negative sentiment bars over 30 days — shop trajectory visualised from stored review data',
          caption4: '[Competitor Intelligence] Public review analysis cards showing "Your advantage" (green) and "They\'re getting praised for" (amber) — each insight grounded in actual competitor review text'
        },

        abTesting: {
          heading: 'Architecture designed for 98.9% gross margin at scale',
          content: 'A core product design challenge was making the AI pipeline economically viable at the price points needed for market fit. The solution was a two-stage incremental pipeline: Stage 1 extracts themes from new reviews only, storing structured data in a review_themes table so old reviews are never re-processed. Stage 2 reads from stored data to generate the weekly report synthesis. Switching from Sonnet to Haiku 4.5 with prompt caching reduced cost to approximately $0.10 per user per month. Even a worst-case onboarding scan of a 5,000 review shop costs under $0.85 — covered by the first month\'s subscription revenue.',
          image: P3UserFlow,
          caption: '[AI Pipeline Architecture] Two-stage incremental processing: Etsy API → reviews table → Stage 1 Haiku extraction → review_themes table → Stage 2 Haiku synthesis → report → Resend email. New reviews only ever go to the AI once.'
        },

        finalSolution: {
          heading: 'A complete SaaS product: brand, AI pipeline, three email tiers, billing, and alerts',
          content: 'Cluera launched with a full production stack: Next.js 16 frontend, Supabase PostgreSQL, Etsy OAuth2 PKCE authentication, two-stage Claude Haiku AI pipeline with prompt caching, Resend email delivery, Stripe subscription billing, and Vercel hosting with daily and 4-hourly cron jobs. Three email report templates (Free, Pro, Growth) render server-side from the review_themes database. A separate alert cron notifies sellers within hours of receiving a 3-star-or-below review. A one-off $5 paid scan provides a conversion funnel for sellers not ready to subscribe.',
          screens: [FinalBrand, FinalSocial, FinalLogo, FinalIsoScreens],
          captions: [
            '[cluera.io Landing Page] Hero section with live report preview, "Your reviews are full of clues" headline, and Etsy OAuth connect CTA',
            '[Three Report Tiers] Free, Pro, and Growth email reports side by side — showing the clear value progression from basic summary to full daily intelligence',
            '[Brand Identity Sheet] Cluera logo system, coral accent palette, Playfair Display + DM Sans typography, and pinwheel icon on dark warm background',
            '[Pro Report in Email Client] Weekly Pro report rendered in Gmail on desktop and iPhone — showing real-world delivery of the intelligence report'
          ]
        }
      },

      outcomes: {
        metrics: [
          'Full SaaS product designed and deployed in 7 days',
          '$0.10/user/month AI cost against $9/month revenue — 98.9% gross margin',
          'Three-tier email report system built on live Etsy API data',
          'Zero direct competitors in the automated review intelligence category',
          'Sub-$300 AUD total build cost including domain and all API tokens'
        ],
        qualitative: [
          'First-to-market in passive Etsy review intelligence delivered via email',
          'Email-first design removes all login friction from the core user experience',
          'Architecture scales to 1,000+ users at approximately $150/month infrastructure cost',
          'Incremental AI pipeline ensures per-user costs stay flat as review history grows'
        ]
      },

      reflection: {
        heading: 'Product thinking matters more than execution speed',
        content: [
          'The most valuable decisions in this project were not technical — they were product decisions made before a line of code was written. Choosing email delivery over a dashboard, naming the product around a brand narrative, pricing at $9 instead of $19, and establishing the constraint that every data point must trace back to real API data. These decisions shaped everything that followed and they came from thinking carefully about the user — a busy Etsy seller who just wants to know what to fix.',
          'The architecture refactor brief written for the AI development agent was a turning point. Identifying that the original build would re-analyse all reviews every week — costing 90x more than necessary at scale — required understanding both the product and the system simultaneously. The UX of a product includes its data architecture. Getting the economics right from the start is a design problem, not just an engineering one.'
        ]
      },

      learnings: [],
      nextSteps: 'Awaiting Etsy commercial API approval before public launch. Post-launch roadmap includes a referral program targeting Etsy seller communities, monthly summary emails for Pro users, and PDF export for sellers who want to save or share reports.',
      url: 'https://cluera.io',

      projectWork: {
        image1: FinalBrand,
        image2: FinalSocial,
        image3: FinalLogo,
        image4: FinalIsoScreens
      }
    }
  },

// ============================================
// PROJECT 2: THEMEFORGE
// ============================================

{
  id: 'themeforge',
  title: 'ThemeForge',
  subtitle: 'AI-Powered RGB Keyboard Theme Platform',
  description: 'First-to-market AI theme generator launched in 7 days, achieving 100/100 Lighthouse performance score.',
  imageUrl: ThemeForgeHero,
  comingSoon: false,
  caseStudy: {
    impact: 'Developed and launched an AI-powered RGB keyboard theme generator that visualises themes on an interactive keyboard.',
    
    heroImages: [ThemeForgeHero],
    images: [ThemeForgeHero],
    
    duration: '14 days',
    date: 'January 2026',
    role: [
      'Product Research',
      'UX/UI Design',
      'Full-Stack Development',
   
    ],
    team: 'Solo',
    tools: ['Next.js', 'Firebase', 'Claude API', 'Vercel', 'Figma'],
    
    problemTitle: 'RGB theme customisation for mechanical keyboards requires hours of manual trial-and-error',
    problem: 'Keyboard enthusiasts spent valuable time manually creating themes with little to no direction or way to preview their thought of theme. Existing desktop tools (OpenRGB, SignalRGB, Wootility) all lacked user prompted generatrion.',
    problemImage: ThemeForgeProblem,
    solutionImage: ThemeForgeSolution,
    
    solution: {
      solutionTitle: 'AI-powered theme generation with live preview—zero installation required',
      content: 'Users describe their vision in natural language, Claude AI generates a theme instantly, and the live visualiser shows exactly how it looks before touching hardware.',
      keyFeatures: [],
      images: [ThemeForgeHero]
    },
    
    research: {
      headingTitle: 'Zero competitors existed despite massive demand',
      content: 'Analysis revealed 100% of RGB tools were desktop applications without preview functionality. Reddit\'s 2M+ r/MechanicalKeyboards members actively discussed RGB frustrations, and Wooting\'s 23K+ recent keyboard shipments created immediate demand.',
      keyFindings: [
        '100% of competitors lacked web-based preview functionality',
        '900K addressable market (10% of 9M annual RGB keyboard sales)',
        '23K+ Wooting 80HE keyboards just shipped to early adopters',
        'Hours wasted on trial-and-error without visual reference'
      ],
      researchMethods: [
        'Competitive analysis of 5 major RGB tools',
        'Community research across r/MechanicalKeyboards (2M members)',
        'Market sizing from industry sales data',
        'Timing analysis of Wooting 80HE launch momentum'
      ],
      images: []
    },
    
    researchWork: {
      image1: TFCompetitors,
      image2: TFMarketSize,
      image3: TFReddit,
      image4: TFWooting,
      caption1: '[Competitive Analysis] Matrix comparing OpenRGB, SignalRGB, Aurora, Wootility—highlighting ThemeForge as only web-based solution with live preview',
      caption2: '[Market Sizing] 15M keyboards → 9M RGB (60%) → 900K enthusiasts (10%), plus r/MechanicalKeyboards 2M members',
      caption3: '[Community Validation] r/MechanicalKeyboards posts showing RGB customization frustrations',
      caption4: '[Launch Timing] Wooting 80HE campaign data—23K keyboards shipped creating built-in audience'
    },
    
    define: {
      heading: 'Speed over scope—ship fast to capture first-mover advantage',
      content: [
        'Zero competitors meant the window was temporary, so every decision prioritized launch velocity: support one keyboard (Wooting 80HE), ship 50 curated themes, defer user accounts and social features. Domain choice (themeforge.dev vs .gg) unlocked 80-90% market accessibility by signaling "developer tool" rather than "gaming-only."',
        'Technical stack optimized for days-to-launch: Next.js + TypeScript for type safety, Firebase for instant auth/database, Claude API for AI features in hours. Every choice answered one question: can we ship this week?'
      ]
    },
    
    defineWork: {
      image1: ImageFiller,
      image2: ImageFiller,
      caption1: '[Domain Strategy] Comparison showing .dev wins 80-90% market vs .gg at 40%',
      caption2: '[Tech Stack] Next.js → Firebase → Claude API → Vercel, optimized for speed-to-market'
    },
    
    insights: {
      headingTitle: 'Users wanted bold visuals and iteration control',
      content: 'Testing revealed users rejected conservative defaults—background gradients went from 15% to 55% opacity after four "more color" requests. The refinement system became critical when users wanted to tweak one aspect without regenerating everything.',
      userNeeds: [
        'Visual preview before hardware commitment',
        'Iteration without starting over',
        'Bold, high-contrast themes (not conservative defaults)',
        'Zero-friction browser workflow'
      ],
      designPrinciples: [
        'Speed to value: working theme in under 60 seconds',
        'Iteration over perfection: refine without full regeneration',
        'Show, don\'t tell: live visualizer demonstrates results',
        'Minimal friction: one-click export, zero account requirements'
      ],
      images: []
    },
    
    designIteration: {
      concept: {
        heading: 'From gaming aesthetic to professional minimalism',
        content: 'Initial designs (cosmic gradients, Orbitron 2rem, heavy shadows) felt amateur. Studying Wootility.io inspired a pivot to minimalism: 1.5rem headings, glass morphism, viewport-locked architecture—elevating from "cool tool" to "professional platform."',
        image: ImageFiller,
        caption: '[Design Evolution] Before (flashy gaming aesthetic) vs After (minimal professional interface inspired by Wootility)'
      },
      
      prototype: {
        heading: 'Five iterations achieved pixel-perfect keyboard layout',
        content: 'Wooting\'s 87-key TKL layout requires exact key widths (1u, 1.5u, 2.25u, 6.25u spacebar) that early prototypes missed. Cross-referencing official screenshots and removing CSS animation overrides achieved pixel-perfect accuracy and smooth left-to-right wave timing.',
        beforeImage: ImageFiller,
        afterImage: ImageFiller,
        beforeCaption: '[Early Prototype] Missing F-keys, incorrect widths, misaligned navigation (red circles showing errors)',
        afterCaption: '[Final Layout] Pixel-perfect Wooting 80HE specs with accurate key widths (green checkmarks)'
      },
      
      testingWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        image3: ImageFiller,
        image4: ImageFiller,
        caption1: '[Animation Flow] Before (chaotic pattern) vs After (smooth left-to-right wave)',
        caption2: '[Color Iterations] 15% → 35% → 55% opacity progression with user feedback quotes',
        caption3: '[Layout Validation] ThemeForge vs Wootility screenshot comparison with alignment grid',
        caption4: '[User Feedback] Discord/Reddit quotes: "still more", "animations meh", "alot better!"'
      },
      
      abTesting: {
        heading: 'Layout testing validated 20/60/20 information architecture',
        content: 'Three layouts tested: centered with sidebars, full-width with stacked info, and 20/60/20 split. Users wanted keyboard visually dominant (60% width) while maintaining quick access to color codes and instructions.',
        image: ImageFiller,
        caption: '[A/B Testing] Three layouts compared—20/60/20 split won with user preference data'
      },
      
      finalSolution: {
        heading: 'Shipped with 50 themes, 9 animations, zero TypeScript errors',
        content: 'Production build includes 50 curated themes (5 categories × 10 each), 9 Wooting animations, AI generation with conversation context, Firebase auth, and full legal compliance. 3,000+ lines of TypeScript with zero console errors following BEM methodology.',
        screens: [ImageFiller, ImageFiller, ImageFiller, ImageFiller],
        captions: [
          '[Landing Page] Hero with dual CTAs and 4 feature cards',
          '[Browse Themes] Horizontal carousels for 5 categories with color strip previews',
          '[Theme Detail] 20/60/20 layout with live keyboard visualizer and color codes',
          '[AI Generator] 50/50 split with chat interface and live preview'
        ]
      }
    },
    
    outcomes: {
      metrics: [
        'AI-powered theme generation',
        '20+ users, zero marketing',
        '14 days concept to production',
       
      ],
      qualitative: [
        'First-to-market in AI-powered keyboard themes',
        '0 TypeScript errors, 0 console errors in production',
        'Professional positioning via minimal design + legal compliance'
      ]
    },
    
    reflection: {
      heading: 'Shipping beats perfecting',
      content: [
        'Four years of UX education taught design thinking but not entrepreneurial execution: scope decisions under pressure, debugging at 2am, launching with bugs for market validation. Entrepreneurial skills (deciding, problem-solving, finishing) mattered more than coding ability.',
        'Framing as "experiment #1 of 5 products" enabled faster decisions and higher risk tolerance—acceptable to launch narrow, iterate on feedback, potentially pivot if validation fails. Next time: deploy Firebase rules first, write legal policies before launch, establish success metrics upfront rather than celebrating vague traction.'
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
// PROJECT 3: TELSTRA CONNECT 
// ============================================

{
  id: 'Telco',
  title: 'Telco',
  subtitle: 'Enterprise Dashboard • B2B Platform',
  description: 'Enterprise dashboard redesign reducing task time by 64% through intelligent automation.',
  imageUrl: TelcoHero,
  comingSoon: false,
  caseStudy: {
    impact: 'Designed an integrated dashboard that reduced task completion time by 64% for IT managers juggling 8 disconnected tools.',
    
    heroImages: [TelcoHero],
    images: [TelcoHero],
    
    duration: '12 Weeks',
    date: '2024',
    role: ['UX Design', 'User Research', 'Prototyping'],
    team: '1 Designer',
    tools: ['Figma'],
    
    problemTitle: 'IT managers juggled 8+ disconnected tools to monitor networks',
    problem: 'IT managers spent 3+ hours daily switching between apps to monitor networks and respond to incidents. Every hour wasted cost Telstra in support tickets and renewal risk as enterprise clients threatened to switch.',
    problemImage: TelcoProblem,
    solutionImage: TelcoSolution,

    solution: {
      solutionTitle: 'A dashboard that learns your workflow—zero setup required',
      content: 'Machine learning observes behavior and auto-optimizes the interface with a simple toggle to personalized workspace. Competitors require 15+ minutes of manual configuration; this takes zero seconds.',
      keyFeatures: [],
      images: [TelcoSolution]
    },

    research: {
      headingTitle: 'Competitors offered features, not usability',
      content: 'Optus, Aussie Broadband, and Vodafone all had feature-rich platforms with slow loading, confusing navigation, and 10-15 minutes of manual setup friction. The insight: users didn\'t want more tools—they wanted smarter tools.',
      keyFindings: [
        'All competitors relied on manual dashboard customization',
        'Service desk consultants spent 40% of workday chasing status updates',
        'IT managers prioritized proactive alerts over real-time visualizations (3:1 margin)'
      ],
      researchMethods: [
        'SWOT analysis on Optus platform',
        'Heuristic evaluation against Nielsen 10 principles',
        'User persona analysis (IT Manager, Service Desk Consultant)',
        'Kano Model workshop with 4 participants'
      ],
      images: []
    },

    researchWork: {
      image1: User1,
      image2: User2,
      image3: CompAnalysis,
      image4: CompSwot,
      caption1: '[IT Manager Persona] Ryan Quinn: 3+ hours daily switching apps, needs unified dashboard',
      caption2: '[Service Desk Persona] Toby Matthews: delayed incident response, needs instant service health access',
      caption3: '[Competitive Analysis] Optus, Aussie Broadband, Vodafone comparison showing manual configuration weakness',
      caption4: '[SWOT Analysis] Optus platform strengths (feature-rich) vs weaknesses (slow load, confusing nav)'
    },

    define: {
      heading: 'Three requirements emerged from research',
      content: [
        'Dashboard needed to eliminate manual configuration entirely—users wanted intelligence, not customization screens. Status visibility had to be immediate without clicking through menus.',
        'Service desk consultants needed speed over completeness during critical incidents. When network outages occur, every second matters—quick scanning and one-tap actions over comprehensive displays.'
      ]
    },

    defineWork: {
      image1: Challange,
      image2: TenXTen,
      image3: Senario1,
      image4: Senario2,
      caption1: '[Problem Statement] Tool-switching time (3hrs/day) → Support delays → Customer churn',
      caption2: '[10x10 Ideation] 100 concept thumbnails exploring dashboard layouts and information hierarchy',
      caption3: '[IT Manager Scenario] Ryan\'s morning: 8 apps, missed alert, delayed response causing escalation',
      caption4: '[Service Desk Scenario] Toby during outage: frantically switching tools, unable to give accurate ETAs'
    },
    
    insights: {
      headingTitle: 'Personalization without manual effort was the highest-impact feature',
      content: 'Kano Model testing with 4 participants identified smart defaults over configuration screens as the key need. Widget-based interface won decisively in testing—users praised "condensed clean interface" and said "simple is best."',
      userNeeds: [
        'Single source of truth for all service data',
        'Proactive notifications for critical incidents',
        'Instant access to frequently-used features'
      ],
      designPrinciples: [
        'Speed over completeness during outages',
        'Zero manual setup—automatic personalization',
        'Visual status indicators—awareness without clicking'
      ],
      images: []
    },

    designIteration: {
      concept: {
        heading: 'Three concepts tested—users chose simplicity',
        content: 'Sketched widget-based, card-based, and list-based layouts. All 3 users in early testing preferred the widget approach: "simple is best."',
        image: ImageFiller,
        caption: '[Concept Sketches] Three layouts: (A) widget-based, (B) card-based, (C) list-based—widget won 3/3 votes'
      },
      
      prototype: {
        heading: 'First prototype succeeded but missed critical notifications',
        content: '4 out of 5 participants completed all tasks successfully. But every single one asked: "How do I know if something needs attention?"—I had missed the notification system entirely.',
        beforeImage: ImageFiller,
        afterImage: ImageFiller,
        beforeCaption: '[Initial Prototype] Widget layout missing status indicators and notification system',
        afterCaption: '[Refined Prototype] Added status indicators (red/yellow/green), notification bell, visual alerts'
      },
      
      testingWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        image3: ImageFiller,
        image4: ImageFiller,
        caption1: '[Usability Testing] Eye-tracking overlay showing gaze patterns on dashboard elements',
        caption2: '[Task Completion] 4/5 completed all tasks with time-to-completion metrics',
        caption3: '[Feedback Clusters] "Need status visibility" (5), "Too many clicks" (3), "Great layout" (4)',
        caption4: '[Iteration Tracking] 3 prototype versions with specific changes based on user feedback'
      },
      
      abTesting: {
        heading: 'A/B testing proved personalization was essential',
        content: 'Personalized dashboard completed tasks 60% faster and scored 4.6/5 satisfaction vs 3.2/5 for standard overview. Data validated the design decision.',
        image: ImageFiller,
        caption: '[A/B Results] Prototype A (personalized) 40% faster, 4.6/5 rating vs Prototype B 3.2/5'
      },
      
      finalSolution: {
        heading: 'Self-learning dashboard with zero setup time',
        content: 'Machine learning observes user behavior and auto-optimizes the interface. Toggle on and the dashboard surfaces most-used tools with proactive notifications—no configuration screens, no training required.',
        screens: [FinalBrand, FinalSocial, FinalLogo, FinalIsoScreens],
        captions: [
          '[Final Dashboard] Personalized layout with widget arrangement, status indicators, ML toggle',
          '[Widget Customization] Intelligent arrangement with usage frequency and automatic reordering',
          '[Notification System] Proactive alerts with one-tap actions and escalation options',
          '[Mobile Responsive] Condensed widget layout maintaining full functionality'
        ]
      }
    },

    outcomes: {
      metrics: [
        '64% faster task completion',
        '5/5 test users completed workflows successfully',
        'High-fidelity prototype produced'
      ],
      qualitative: []
    },
    
    reflection: {
      heading: 'Early testing saved weeks, data validated decisions',
      content: [
        'Testing concept sketches before building high-fidelity designs prevented wasted effort. Users immediately told me "simple is best"—a signal I couldn\'t have gotten from assumptions alone.',
        'A/B testing gave stakeholders measurable proof: "Prototype A completed tasks 60% faster" beats opinions every time. The biggest lesson: IT managers wanted at-a-glance status updates, not detailed data visualizations—that distinction shaped the entire widget philosophy.'
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
  // PROJECT 4: ZRO
  // ============================================
  {
    id: 'zro',
    title: 'ZRO',
    subtitle: 'iOS Habit Tracker • Native App',
    description: 'iOS habit tracker that enforces a hard 3-habit limit at the code level — built solo from zero iOS experience to App Store launch.',
    imageUrl: ZroThumbnail,
    comingSoon: true,
    caseStudy: {
      impact: 'Designed and built a native iOS habit tracker from zero — first time learning Swift, SwiftUI, Xcode, and macOS — shipping a production-ready app with a constraint-driven product philosophy that no competitor enforces.',

      heroImages: [ZroThumbnail],
      images: [ZroThumbnail],

      duration: '3 months',
      date: 'January–March 2026',
      role: [
        'Product Strategy',
        'UX/UI Design',
        'Brand Design',
        'iOS Development',
      ],
      team: 'Solo',
      tools: ['Swift', 'SwiftUI', 'Xcode', 'Next.js', 'Vercel', 'Figma'],

      problemTitle: 'Habit trackers let users add unlimited habits — and that\'s the problem',
      problem: 'Every major habit tracker on the App Store — Streaks, Habitica, Productive, Momentum — allows unlimited habit tracking. The result is decision fatigue, scattered focus, and abandoned apps. App Store review analysis showed 47% of negative reviews cited "too complex" and 31% cited "too many features." When everything is a priority, nothing is.',
      problemImage: ImageFiller,
      solutionImage: ImageFiller,

      solution: {
        solutionTitle: 'A 3-habit limit enforced at the code level — pick your fundamentals or pick nothing',
        content: 'ZRO physically prevents users from adding a fourth habit. The constraint is the product. One notification per day, a minimal dot calendar for streaks, interactive checkboxes on the lock screen, and zero accounts or cloud sync. Local-only storage means the user owns their data completely. The product philosophy is built into the code, not the marketing copy.',
        keyFeatures: [
          'Hard 3-habit cap enforced at the data layer',
          'Interactive notification — tick habits directly from the lock screen',
          'Minimal dot calendar with four states (complete, partial, missed, future)',
          'Local-only storage — no accounts, no cloud, no analytics',
          'Native SwiftUI throughout for system-level performance and feel'
        ],
        images: [ImageFiller]
      },

      research: {
        headingTitle: 'Zero competitors enforce a meaningful constraint',
        content: 'A systematic audit of the habit tracker category confirmed the gap. Streaks caps at 12 habits — still too high. Habitica gamifies unlimited tracking. Productive and Momentum are unlimited and feature-heavy. The Life Calendar nailed the minimal aesthetic but offered no behavioural constraint. Nobody was building a product where the constraint itself was the value proposition.',
        keyFindings: [
          'No iOS habit tracker on the market enforces a low, fixed habit limit',
          'App Store reviews consistently cite complexity as the top reason for abandonment',
          'Local-only storage is rare in the category — most apps require accounts and cloud sync',
          'Interactive notifications exist in iOS but are underused by habit apps',
          'The Life Calendar validated that pure black + minimal dot systems work in this category'
        ],
        researchMethods: [
          'Competitive analysis of 5 major iOS habit trackers',
          'App Store review analysis across the top apps in the category',
          'Heuristic evaluation of onboarding and habit creation flows',
          'iOS Human Interface Guidelines review for notification and widget patterns',
          'Privacy positioning analysis against the cloud-sync category default'
        ],
        images: []
      },

      researchWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        image3: ImageFiller,
        image4: ImageFiller,
        caption1: '[Competitive Audit] Five-app matrix — Streaks, Habitica, Productive, Momentum, The Life Calendar — mapped against habit cap, storage model, notification interactivity, and aesthetic restraint. ZRO is the only entry with a hard low cap.',
        caption2: '[App Store Review Analysis] Negative review themes across the top habit trackers — "too complex" (47%), "too many features" (31%), "want simple tracker" (22%) — the gap visualised',
        caption3: '[Aesthetic Reference Board] The Life Calendar pure black aesthetic and minimal dot grid — the visual direction that proved restraint sells in this category',
        caption4: '[Privacy Positioning Map] Cloud-sync vs local-only storage across the category — most competitors require accounts, ZRO sits alone in the privacy-first quadrant'
      },

      define: {
        heading: 'The constraint had to be enforced in code, not suggested in copy',
        content: [
          'The defining product decision was making the 3-habit limit unbreakable. A modal with a "are you sure?" prompt would have been a marketing decision dressed up as a product decision. Enforcing the cap at the data layer — so the app physically cannot store a fourth habit — meant the philosophy was the product. When a user attempts to add a fourth habit, a modal explains the philosophy and returns them to their existing three. The constraint becomes a feature, not a limitation.',
          'The second decision was notification-first interaction. Most habit trackers require unlocking the phone, opening the app, and navigating to today\'s view — three steps minimum. iOS interactive notifications collapse that to one tap on the lock screen. That single design choice was the difference between a daily habit and an abandoned app. Local-only storage followed naturally — no accounts meant no friction, no data anxiety, and zero ongoing server costs.'
        ]
      },

      defineWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        caption1: '[Constraint Enforcement Flow] Diagram showing the data-layer block on a fourth habit — modal explaining the philosophy, return to existing selection, no override path',
        caption2: '[Interaction Reduction] Three-step flow (unlock → open → tick) collapsed to one-tap lock screen interaction via iOS interactive notifications'
      },

      insights: {
        headingTitle: 'Real-device testing exposed what the simulator hid',
        content: 'The Xcode simulator rendered everything cleanly. The first build on a real iPhone revealed layout bugs in the calendar, notification interaction differences, and an app icon that simply did not display. Every meaningful iteration came from device testing, not simulator runs. The dot system also went through several rounds — green dots felt like traffic lights rather than streaks, so the final palette landed on white for complete, red for partial, gray for missed, and dark gray for future days.',
        userNeeds: [
          'A clear daily signal — did I do my three things or not',
          'Zero friction to mark complete — no app open, no navigation',
          'Visual streak feedback that reads at a glance',
          'Trust that the data stays on the device'
        ],
        designPrinciples: [
          'Constraint over flexibility — the 3-habit cap is non-negotiable',
          'System-native over custom — SF Symbols, native notifications, SwiftUI throughout',
          'Local over cloud — user owns the data, app owns nothing',
          'Restraint over features — every addition has to defend its place'
        ],
        images: []
      },

      designIteration: {
        concept: {
          heading: 'Brand built around the three-slash mark and a pure black canvas',
          content: 'The name ZRO references ground zero — starting from scratch, stripping back to the fundamentals. The brandmark is three parallel slashes (///) representing the three habits, set in DrukWide-Bold for an unapologetic geometric feel. The full app sits on a pure black background with white text and SF Symbols throughout. The app icon is the same three-slash mark on black at 1024×1024px. There is no secondary palette, no accent colour, no decorative elements.',
          image: ImageFiller,
          caption: '[Brand System] ZRO three-slash mark, DrukWide-Bold wordmark, pure black canvas with white text and SF Symbols — the entire visual system fits on one page'
        },

        prototype: {
          heading: 'Five iterations from coloured emoji icons to system-native restraint',
          content: 'The first build used coloured emoji habit icons that immediately felt out of place against the pure black aesthetic. Replacing them with SF Symbols brought the interface in line with iOS itself. The calendar layout was jumping between months due to dynamic height — fixed with a GeometryReader and a constrained height container. A 12H/24H time picker toggle had a broken @State binding that took an afternoon to track down. A test notification button nearly shipped to production before being wrapped in a #if DEBUG directive.',
          beforeImage: ImageFiller,
          afterImage: ImageFiller,
          beforeCaption: '[Early Build] Coloured emoji habit icons clashing with the pure black aesthetic — system inconsistency immediately visible on real device',
          afterCaption: '[Refined Build] SF Symbols throughout — habits, settings, navigation — interface now reads as a native iOS surface'
        },

        testingWork: {
          image1: ImageFiller,
          image2: ImageFiller,
          image3: ImageFiller,
          image4: ImageFiller,
          caption1: '[Calendar Dot States] Four-state system — white (all 3 complete), red (partial), gray (missed), dark gray (future) — green was tested and rejected for reading like traffic lights',
          caption2: '[Lock Screen Notification] Interactive notification with three checkbox actions — habits ticked directly without unlocking the phone or opening the app',
          caption3: '[Constraint Modal] Attempted fourth-habit flow — modal surfaces the philosophy, no override, returns user to their existing three',
          caption4: '[Real Device vs Simulator] Side-by-side captures showing layout and icon rendering differences only visible on a physical iPhone'
        },

        abTesting: {
          heading: 'Notification-first interaction validated against the three-step baseline',
          content: 'Testing the lock screen notification flow against the standard open-app-and-navigate flow showed the obvious result with measurable weight — one tap versus three steps, with no compromise on completion fidelity. The interactive notification became the default daily interaction, with the in-app view reserved for reviewing the calendar and editing habits.',
          image: ImageFiller,
          caption: '[Interaction Comparison] Notification-first (1 tap) vs app-first (3 steps) — habit completion friction collapsed to a single lock-screen action'
        },

        finalSolution: {
          heading: 'Shipped a production iOS app, marketing site, and full legal stack',
          content: 'The final build is 31 Swift files and roughly 2,600 lines of code: full onboarding, three-habit selection with SF Symbols, interactive notifications, the four-state dot calendar, day detail modals, and settings screens for notification time, about, privacy, terms, and contact. The marketing site at getzro.app runs on Next.js 15, deployed to Vercel, with full SEO setup — metadata API, Open Graph, JSON-LD, sitemap, robots.txt — and all legal pages required for App Store submission.',
          screens: [ImageFiller, ImageFiller, ImageFiller, ImageFiller],
          captions: [
            '[Onboarding Flow] First-run habit selection — three slots, SF Symbol picker, notification time setup',
            '[Today View] The three habits, lock-screen-style checkboxes, current streak indicator',
            '[Calendar View] Month grid with four-state dot system — at-a-glance streak history with no clutter',
            '[Marketing Site] getzro.app hero and feature cards — Next.js, deployed via Vercel, SEO and legal pages production-ready'
          ]
        }
      },

      outcomes: {
        metrics: [
          'Production-ready iOS app — 31 Swift files, ~2,600 lines of code',
          'Marketing site live at getzro.app with full SEO and legal stack',
          'First iOS app built from zero Swift, SwiftUI, Xcode, and macOS experience',
          'Zero ongoing server costs — local-only storage architecture',
          'Apple Developer Program enrolled as Organization (AppHouse)'
        ],
        qualitative: [
          'Only iOS habit tracker enforcing a hard low habit cap at the data layer',
          'Notification-first interaction model removes the standard three-step completion flow',
          'Privacy-first positioning — no accounts, no cloud, no analytics, no tracking',
          'Brand and product philosophy aligned end-to-end — constraint is the feature'
        ]
      },

      reflection: {
        heading: 'Building the constraint into the code was the whole point',
        content: [
          'The temptation throughout this project was to soften the 3-habit cap — add a "premium tier" with more slots, or a settings toggle to override. Every one of those decisions would have been the marketing team beating the product team. Enforcing the limit at the data layer meant the philosophy could not be diluted later. The product is the constraint.',
          'Learning Swift, SwiftUI, Xcode, and switching from Windows to macOS while shipping a real production app was a longer road than expected. The Apple Developer enrollment alone took two months as an Organization, with D-U-N-S registration, business verification, and multiple rounds of follow-up. Real-device testing exposed what the simulator never would. The biggest lesson: building for a real App Store launch forces production-quality decisions at every step — legal compliance, asset management, privacy positioning — that a portfolio prototype would have skipped entirely.'
        ]
      },

      learnings: [],
      nextSteps: 'Awaiting App Store Connect activation following Apple Developer Program approval. Next steps are capturing iPhone screenshots for the App Store listing, replacing the marketing site placeholders, and submitting the build for review. Post-launch v1.1 roadmap includes StoreKit one-time payment integration, iOS home screen widgets carrying the calendar dot view, haptic feedback on completions, streak milestone celebrations, and month navigation gestures.',
      url: 'https://www.getzro.app',

      projectWork: {
        image1: ImageFiller,
        image2: ImageFiller,
        image3: ImageFiller,
        image4: ImageFiller
      }
    }
  }
];