// src/data/projects.ts
import Mock1 from '../assets/images/mock-1-1400.webp';
import Mock2 from '../assets/images/mock-2-1400.webp';
import Mock5 from '../assets/images/mock-5.webp';

import ImageFiller from '../assets/images/Landing/image-filler-1.webp';

//Project 1 - THEMEFORGE
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
// PROJECT 1: THEMEFORGE
// ============================================

{
  id: 'themeforge',
  title: 'ThemeForge',
  subtitle: 'AI-Powered RGB Keyboard Theme Platform',
  description: 'First-to-market AI theme generator launched in 7 days, achieving 100/100 Lighthouse performance score.',
  imageUrl: ThemeForgeHero,
  caseStudy: {
    impact: 'Developed and launched an AI-powered RGB keyboard theme generator that visualises themes on an interactive keyboard.',
    
    heroImages: [ThemeForgeLand],
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
// PROJECT 2: TELSTRA CONNECT 
// ============================================

{
  id: 'telstra-connect',
  title: 'Redesigning Telstra Connect 2.0 for ISO',
  subtitle: 'Enterprise Dashboard • B2B Platform',
  description: 'Enterprise dashboard redesign reducing task time by 64% through intelligent automation.',
  imageUrl: TelcoHero,
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
  // PROJECT 3: AXIS 
  // ============================================

  {
  id: 'axis-ecommerce',
  title: 'AXIS - Building an E-Commerce Brand from Zero',
  subtitle: 'Brand Design & E-Commerce',
  description: 'Complete e-commerce brand launched in 6 weeks from competitive research to live Shopify store.',
  imageUrl: AxisHero,
  comingSoon: true,
  caseStudy: {
    impact: 'Designed and launched a complete e-commerce brand in 6 weeks, bridging the gap between design theory and real-world product launch.',
    
    heroImages: [AxisHero],
    images: [Mock1],
    
    duration: '6 Weeks',
    date: '2024',
    role: ['Brand Design', 'E-commerce UX/UI', 'Product Photography', 'Marketing Design'],
    team: 'Solo project',
    tools: ['Figma', 'Shopify', 'Mailchimp', 'Adobe Stock'],
    
    problemTitle: 'Design portfolios showcase skills but miss business reality',
    problem: 'After three years of university projects following supplied briefs, I had strong UX work but no experience launching real products. I needed to bridge the gap between design theory and entrepreneurial execution.',
    problemImage: P3Problem,
    solutionImage: P3Solution,
    
    solution: {
      solutionTitle: 'Live e-commerce store with complete brand identity and marketing system',
      content: 'I designed and launched AXIS, a minimalist brand selling 3-in-1 wireless charging stations. The project encompassed competitive research, brand identity, Shopify development, product photography, and integrated marketing campaigns.',
    },
    
    research: {
      headingTitle: 'E-commerce electronics is a $4,454 billion opportunity',
      content: 'Electronics dominates e-commerce revenue, forecasted to reach $4,454B by 2024. Analysis of Journey, 3sixT, and Trendgo revealed strong products but inconsistent brand experiences and weak social presence despite premium prices.',
      keyFindings: [
        'Electronics represents largest e-commerce revenue sector',
        'Competitors had similar products but lacked cohesive brand identity',
        'Drop shipping enables rapid market entry with minimal investment',
        'Target demographic (18-65+) responds to clean modern branding over feature lists'
      ],
      researchMethods: [
        'Market trend analysis using Statista data',
        'Competitive SWOT analysis of Journey, 3sixT, Trendgo',
        'Product exploration with Shopify and Zendrop integration',
        'Target audience identification using Google Analytics frameworks'
      ]
    },
    
    researchWork: {
      image1: Mock1, 
      image2: Mock2,
      image3: Mock1,
      image4: Mock2,
      caption1: '[Market Research] E-commerce forecast: $4,454B by 2024, electronics as dominant sector',
      caption2: '[Competitive Analysis] Journey, 3sixT, Trendgo comparison: pricing, visual consistency, social engagement',
      caption3: '[Competitor Screenshots] Side-by-side store comparisons showing brand inconsistencies',
      caption4: '[Target Audience] Demographics 18-65+: tech-savvy professionals, minimalist aesthetic, value convenience'
    },

    define: {
      heading: 'Premium quality at accessible price points',
      content: [
        'Analysis showed competitors fell into two camps: budget brands with inconsistent identity, and premium brands with prices excluding younger demographics. AXIS would occupy the middle ground: premium presentation at accessible pricing.',
        'Three non-negotiable attributes: minimal complexity in visual design and UX, consistency across all touchpoints (Instagram to packaging), and technical sophistication appealing to tech-savvy professionals aged 25-45. Budget limitations ($1000 total) meant every design decision balanced impact against cost.'
      ]
    },

    defineWork: {
      image1: Mock1,
      image2: Mock1,
      caption1: '[Brand Positioning] 2x2 matrix: Budget/Premium vs Inconsistent/Consistent—AXIS in "Premium + Consistent"',
      caption2: '[Brand Attributes] 3 core pillars: Minimal Complexity, Consistency, Technical Sophistication'
    },
    
    insights: {
      headingTitle: 'Minimalism and consistency win in crowded markets',
      content: 'Analysis revealed premium pricing requires premium presentation. Competitors with 4.9-star ratings struggled with brand recognition due to inconsistent visual identity—in drop shipping, brand design becomes the primary differentiator.',
      userNeeds: [
        'Clear product information without marketing fluff',
        'Professional presentation justifying pricing',
        'Seamless mobile checkout experience',
        'Responsive support and transparent policies'
      ],
      designPrinciples: [
        'Minimal complexity, maximum clarity',
        'Consistency across all touchpoints',
        'Mobile-first responsive design',
        'Scalable identity from Instagram to packaging'
      ]
    },
    
    designIteration: {
      concept: {
        heading: 'AXIS represents connection and alignment',
        content: 'AXIS evokes technical precision and convergence—perfect for a charging hub product. Monochromatic palette with Roboto Mono typography conveys technical sophistication while remaining accessible.',
        image: P3AxisBranding,
        caption: '[Brand System] AXIS logo variations, monochromatic palette, Roboto Mono typography, usage examples'
      },
      
      prototype: {
        heading: 'Wireframing transformed Shopify Dawn into custom brand experience',
        content: 'Started with Shopify Dawn theme as foundation, then wireframed custom layouts for homepage, product, catalog, and contact pages. Challenge: maintain Shopify UX conventions while establishing unique brand identity.',
        beforeImage: P3Initial,
        afterImage: P3UserFlow,
        beforeCaption: '[Shopify Dawn Default] Generic layout, standard typography, placeholder content before customization',
        afterCaption: '[Customized Homepage] Custom hero, product grid, minimalist navigation with AXIS branding'
      },
      
      testingWork: {
        image1: P3Wire1,
        image2: P3Wire2,
        image3: P3DraftMarket,
        image4: P3DraftBrand,
        caption1: '[Homepage Wireframe] Layout: hero section, product grid, USP callouts, footer navigation',
        caption2: '[Product Page Wireframe] Image gallery, specifications, add-to-cart CTA, reviews section',
        caption3: '[Email Campaign] Newsletter with product announcement, promotional copy, CTA, AXIS branding',
        caption4: '[Social Templates] Instagram post templates with photography, graphics, caption guidelines'
      },
      
      abTesting: {
        heading: '',
        content: '',
        caption: ''
      },
      
      finalSolution: {
        heading: 'Complete brand system with integrated marketing',
        content: 'Live Shopify store with custom photography, brand guidelines (logo, color, typography), social media templates for Instagram/Facebook, newsletter designs for Mailchimp, and ad campaign templates. Every touchpoint maintains consistent visual language.',
        screens: [FinalBrand, FinalSocial, FinalLogo, FinalIsoScreens],
        captions: [
          '[Brand Guidelines] Complete brand book: logo system, colors, typography, iconography, photography',
          '[Social Media System] Instagram 9-post grid demonstrating visual consistency across content types',
          '[Logo Variations] Primary lockup, secondary marks, monochrome versions, size specs, clear space',
          '[E-commerce Screens] Homepage, product page, cart, checkout with consistent AXIS branding'
        ]
      }
    },
    
    outcomes: {
      metrics: [
        'Live Shopify store launched within 6-week timeline',
        'Complete brand identity with 20+ design components',
        'Marketing templates for Instagram, Facebook, email',
        'Product photography suite from stock imagery'
      ]
    },
    
    reflection: {
      heading: 'Real products have real constraints',
      content: [
        'This project forced design within business constraints never encountered in university: budget limitations, supplier restrictions, platform limitations, timeline pressure. Design decisions had financial consequences when spending your own money.',
        'Brand consistency mattered more than expected—designing social templates, newsletters, and store pages simultaneously made inconsistencies immediately obvious. Biggest lesson: shipping real products to real customers creates accountability that university projects cannot replicate.'
      ]
    },
    
    learnings: [],
    url: 'https://93eece-ab.myshopify.com/'
  }
},

  // ============================================
  // PROJECT 4: DATA 
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
