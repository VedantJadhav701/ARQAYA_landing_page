# ANTIGRAVITY IDE PROMPT — ARQAYAA INTELLIGENCE PVT LTD
# Multi-Page | Big Four Quality | Fully Functional | Real Images
# Paste this entire prompt into Antigravity IDE

---

Build a COMPLETE multi-page professional website for ARQAYAA INTELLIGENCE PVT LTD.
Quality target: McKinsey.com meets Saudi Aramco.com — editorial, cinematic, authoritative.

This is a white/cream professional theme. NOT dark. NOT purple gradients.
Think: Big Four consulting firm. Clean. Editorial. Powerful.

Every single button, link, and form must be 100% functional.
Fetch real images from Unsplash for every section.
No placeholder gray boxes. No "#" href links. No dead buttons.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1 — TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use: React + React Router v6 + Tailwind CSS + Framer Motion
Icons: Lucide React
Fonts (Google Fonts):
  - Cormorant Garamond: 300, 400, 600, 700 (headlines, display)
  - Rajdhani: 500, 600, 700 (labels, TENETX)
  - Plus Jakarta Sans: 400, 500, 600 (body, UI)
  - Bebas Neue: 400 (TENETX brand only)

File structure:
src/
  components/
    Navbar.jsx
    Footer.jsx
    PageHero.jsx
    SectionLabel.jsx
    CircleArrow.jsx
    SlideShow.jsx
    EditorialCard.jsx
    StatsStrip.jsx
    BoardCard.jsx
    InquiryForm.jsx
    JobCard.jsx
    PricingCard.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    WhatWeDoPage.jsx
    SubsidiariesPage.jsx
    TenetxPage.jsx
    TexflowPage.jsx
    IndustriesPage.jsx
    CareersPage.jsx
    ContactPage.jsx
  styles/
    globals.css (CSS variables + base styles)
  App.jsx (router setup)
  main.jsx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2 — DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In globals.css, define these CSS variables:

:root {
  --cream:         #F7F5F0;
  --cream-dark:    #EFEDE6;
  --gray-light:    #F0F0EE;
  --white:         #FFFFFF;
  --black:         #141414;
  --dark:          #2C2C2C;
  --muted:         #888880;
  --border:        #E0DDD6;
  --gold:          #B8922A;
  --gold-hover:    #D4A843;
  --tenetx:        #1B5FA8;
  --tenetx-light:  #EBF3FC;
  --texflow:       #1A7A6E;
  --texflow-light: #EAF5F4;
  --footer-bg:     #1A1A1A;
}

Typography rules (apply globally):
- h1, h2, h3: font-family 'Cormorant Garamond', serif
- .label: font-family 'Rajdhani'; font-size 11px; letter-spacing 0.22em; text-transform uppercase; color var(--gold)
- p, button, input, nav: font-family 'Plus Jakarta Sans', sans-serif
- .tenetx-brand: font-family 'Bebas Neue', cursive
- .texflow-brand: font-family 'Rajdhani', sans-serif; font-weight 700

Section label component — use on EVERY section:
<div class="label">SECTION NAME <span class="gold-rule"></span></div>
.gold-rule: display inline-block; width 40px; height 2px; background var(--gold); margin-left 12px; vertical-align middle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 3 — ROUTES (ALL PAGES)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In App.jsx set up React Router with these routes:

/                     → <HomePage />
/about                → <AboutPage />
/what-we-do           → <WhatWeDoPage />
/subsidiaries         → <SubsidiariesPage />
/subsidiaries/tenetx  → <TenetxPage />
/subsidiaries/texflow → <TexflowPage />
/industries           → <IndustriesPage />
/careers              → <CareersPage />
/contact              → <ContactPage />

Also: <ScrollToTop /> component that runs window.scrollTo(0,0) on every route change.
Wrap all routes in <AnimatePresence> from Framer Motion for page transitions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 4 — NAVBAR COMPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build <Navbar /> with:

TOP BAR (32px height, bg #1A1A1A):
- Left: Globe icon + "India"
- Right: "info@arqaya.com" as <a href="mailto:info@arqaya.com">

MAIN NAV (64px height, bg white):
- Left: Search icon button — onClick opens a search modal overlay
- Center: Nav links using React Router <NavLink> (gold underline when active):
  ABOUT US → /about
  WHAT WE DO → /what-we-do
  SUBSIDIARIES → /subsidiaries
  INDUSTRIES → /industries
  CAREERS → /careers
  CONTACT → /contact

- WHAT WE DO — on mouseEnter, show dropdown:
  Our Solutions | Our Process | Why ARQAYAA
  All link to /what-we-do (with scroll to section via state)

- SUBSIDIARIES — on mouseEnter, show MEGA-MENU (full-width panel):
  Left block: TENETX logo/name + 1-line desc → /subsidiaries/tenetx
  Right block: TEXFLOW logo/name + 1-line desc → /subsidiaries/texflow
  Bottom: View All → /subsidiaries

- Right: "ARQAYAA" wordmark (Cormorant Garamond bold) as <Link to="/">

MOBILE (< 768px):
- Hide center links, show hamburger icon
- onClick: full-screen overlay slides in from right
- All nav links + subsidiaries accordion inside overlay
- X button to close

Scroll behavior:
- On scroll > 80px: add box-shadow and slight bg opacity change
- Still white — no dark transition

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 5 — HOME PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[A] HERO SLIDESHOW COMPONENT
Full viewport height. Auto-advance every 6 seconds. Crossfade (0.8s).
4 slides. Bottom tab strip. Left/Right arrow controls.

Build as <SlideShow /> with slides array:

const slides = [
  {
    label: "ARQAYAA INTELLIGENCE",
    headline: "Unlock the Power of AI for Your Business.",
    sub: "Automating, analyzing, and accelerating workflows across industries.",
    cta: { text: "What We Do", link: "/what-we-do" },
    image: "https://source.unsplash.com/1920x1080/?artificial-intelligence,technology,dark"
  },
  {
    label: "TENETX — OIL & GAS",
    headline: "Physics-Native AI for Drilling Operations.",
    sub: "100% air-gapped. Error rate below 0.5%. Zero cloud dependency.",
    cta: { text: "Explore TENETX", link: "/subsidiaries/tenetx" },
    image: "https://source.unsplash.com/1920x1080/?oil-refinery,industrial,pipes,night"
  },
  {
    label: "TEXFLOW — RESEARCH",
    headline: "From Word to Publisher-Ready PDF. Instantly.",
    sub: "Zero AI. 100% deterministic. IEEE, Springer, Elsevier templates.",
    cta: { text: "Explore TEXFLOW", link: "/subsidiaries/texflow" },
    image: "https://source.unsplash.com/1920x1080/?library,books,academic,university"
  },
  {
    label: "OUR MISSION",
    headline: "AI Solutions for Industry. And for Society.",
    sub: "Building intelligent systems that solve real problems for real people.",
    cta: { text: "About Us", link: "/about" },
    image: "https://source.unsplash.com/1920x1080/?smart-city,india,aerial,technology"
  }
]

Overlay: rgba(0,0,0,0.50) on each image.
Content: bottom-left, 10vw left padding, white text.
Tab strip: bg rgba(0,0,0,0.65), 4 tabs, active = 3px gold top border.
Circular CTA arrow button: 48px, white outline circle, → icon inside.

[B] DISCOVER ARQAYAA
Background: --white
Label: "DISCOVER ARQAYAA"
Heading (36px Cormorant): "We are an AI intelligence company building systems that make industries smarter."

4 tall image cards (3:4 ratio, rounded 16px) in a horizontal 4-col grid:
Each card = full bleed image + dark gradient overlay + label top-left + title + circle arrow

Card data:
{ label: "OUR SOLUTIONS", title: "Agentic AI systems for complex enterprise workflows", link: "/what-we-do", img: "https://source.unsplash.com/600x800/?technology,ai,server,blue" }
{ label: "TENETX", title: "Physics-native AI for oil and gas drilling operations", link: "/subsidiaries/tenetx", img: "https://source.unsplash.com/600x800/?oil,gas,drilling,offshore,industrial" }
{ label: "TEXFLOW", title: "Deterministic typesetting for the research community", link: "/subsidiaries/texflow", img: "https://source.unsplash.com/600x800/?library,researcher,writing,academic" }
{ label: "OUR IMPACT", title: "Building intelligent solutions for industries and society", link: "/about", img: "https://source.unsplash.com/600x800/?india,community,technology,people" }

On hover: image zooms subtly (scale 1.04), circular arrow animates.

[C] AT A GLANCE STATS
Background: --gray-light
3 columns, vertical dividers:

{ number: 60, suffix: "%", label: "Reduced Manual Workload" }
{ number: 3, suffix: "×", label: "Improved Decision Speed" }
{ number: 0.5, suffix: "%", label: "Error Rate with TENETX" }

Numbers: Cormorant Garamond 300, 96px, --black
Count-up: use IntersectionObserver — animate from 0 to value when enters viewport
Below each: thin 1px gray horizontal rule (like Aramco)

[D] OUR SUBSIDIARIES
Background: --cream-dark
Label: "OUR SUBSIDIARIES"
2 large side-by-side feature cards:

TENETX card (--tenetx-light bg, 3px --tenetx top border):
- "TENETX" in Bebas Neue 56px (--tenetx color)
- "Industrial Oil & Gas Intelligence" subtitle (Rajdhani)
- 2-sentence description
- 3 stat chips: <0.5% Error | ₹0.08/Query | 100% Air-Gapped
- [Explore TENETX →] → /subsidiaries/tenetx

TEXFLOW card (--texflow-light bg, 3px --texflow top border):
- "TEXFLOW" in Rajdhani 700 56px (--texflow color)
- "Research Typesetting Platform" subtitle
- 2-sentence description
- 3 stat chips: Zero AI | 48hr Data Purge | From ₹299
- [Explore TEXFLOW →] → /subsidiaries/texflow

[E] INDUSTRIES STRIP
Background: --white
Label: "INDUSTRIES WE SERVE"
4 image cards (2:1 ratio, rounded 12px), 2×2 grid:
E-commerce | Healthcare | Real Estate | Legal
Each → /industries
Images from Unsplash per industry keyword

[F] INSIGHTS (Fake articles, real links)
Background: --cream
Label: "INSIGHTS"
3 article cards (horizontal):
{ category: "AI SYSTEMS", title: "The Future of AI in Oil & Gas Operations", date: "May 2026", link: "/about" }
{ category: "RESEARCH", title: "Why Deterministic AI Wins in Academic Publishing", date: "April 2026", link: "/about" }
{ category: "COMPANY", title: "ARQAYAA: Building India's AI Infrastructure", date: "March 2026", link: "/about" }
Each card: border-top 2px gold, category label, title, date, "Read more →" link

[G] CTA BANNER
Background: --cream-dark, thin gold top rule
Center layout:
"Ready to Transform Your Business with AI?" (Cormorant 52px)
"Let's build something powerful together."
[Book A Free Call] → opens https://arqaya.vercel.app/book-call in new tab (_blank, rel noopener)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 6 — ABOUT PAGE (/about)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PageHero: "About ARQAYAA" | img: https://source.unsplash.com/1920x600/?corporate,office,professional,modern

WHO WE ARE: 2-col text section with key facts sidebar
MISSION & VISION: 2-col split with gold divider line
BOARD OF DIRECTORS: 2×2 grid of BoardCard components
  Each BoardCard: avatar img + name (Cormorant 600 22px) + role (Rajdhani gold ALL CAPS 11px) + bio

  Neel Khairnar | Founder | img: https://ui-avatars.com/api/?name=Neel+Khairnar&size=300&background=B8922A&color=fff&bold=true&rounded=true
  Vedant Jadhav | Co-Founder | img: https://ui-avatars.com/api/?name=Vedant+Jadhav&size=300&background=1B5FA8&color=fff&bold=true&rounded=true
  Pritam Lalvani | Director, Strategic Lead | img: https://ui-avatars.com/api/?name=Pritam+Lalvani&size=300&background=1A7A6E&color=fff&bold=true&rounded=true
  Dr. Bharat Kale | Director, Advisor | img: https://ui-avatars.com/api/?name=Bharat+Kale&size=300&background=2C2C2C&color=fff&bold=true&rounded=true

OUR VALUES: 4 cards (2×2)
  Production-First | Domain Intelligence | Data Sovereignty | Ethical AI

COMPANY TIMELINE: vertical alternating timeline
  2024: Company Founded
  2024: TENETX Launched
  2025: TEXFLOW Initiated
  2025: First Industry Partnerships
  2026: Scaling Operations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 7 — WHAT WE DO PAGE (/what-we-do)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PageHero: "We Build AI That Actually Works in Production"
img: https://source.unsplash.com/1920x600/?data-center,servers,technology,blue

THE CHALLENGE: 2-col (left = heading + italic quote, right = 4 problem cards)
OUR SOLUTIONS: 4 large cards with faded bg numbers (01–04)
OUR PROCESS: horizontal 3-step timeline with animated connecting line
WHY ARQAYAA: 2-col (differentiators left, large quote right)
STATS STRIP: 60% | 3× | Across Teams
CTA: Book A Free Call

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 8 — TENETX PAGE (/subsidiaries/tenetx)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PageHero: "Physics-Native AI for Drilling Operations"
img: https://source.unsplash.com/1920x700/?oil-refinery,drilling,industrial,night
Label: "TENETX — OIL & GAS INTELLIGENCE"

THE PROBLEM: 3 shocking stats in large type
  30% time lost | ₹4 Crore avg cost | 1–5% AI error rate

THE SOLUTION: Full description + architecture diagram (CSS/SVG flowchart)
TENETFlow Pipeline: Sensor Input → Preprocessing → [PINN + SLM + Tree] → Fusion → Prediction

4 DIFFERENTIATOR CARDS (--tenetx-light bg):
  Air-Gapped | Physics-Native | Zero Hardware | Cost-Effective

TECHNOLOGY STRIP: horizontal pill list of technologies
APPLICATIONS: 4 use-case cards (Stuck Pipe | Kick Detection | ROP | Corrosion)

INQUIRY FORM (fully functional):
  Name, Company, Role, Email, Message
  Submit → Formspree POST
  Success/Error states

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 9 — TEXFLOW PAGE (/subsidiaries/texflow)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PageHero: "From Word to Publisher-Ready PDF. Instantly."
img: https://source.unsplash.com/1920x700/?library,academic,books,university

THE PROBLEM: 3 pain points (40+ hours wasted | AI risk | Manual agencies slow)

HOW IT WORKS: 5-step horizontal process (icons + step titles)
  Upload Word → Extract Structure → Select Template → Compile → Download PDF

SUPPORTED PUBLISHERS: IEEE | Springer Nature | Elsevier (pill chips, --texflow color)

PRICING SECTION (4 cards, fully styled):
  Free: [Get Started Free] → /contact
  Pay-Per-Paper ₹299–499: [Buy Now] → /contact
  Scholar Term ₹999–1499: [Subscribe] → /contact
  Institutional: [Contact Sales] → /contact

PRIVACY SECTION: 48hr purge | Zero AI | Isolated servers

SIGN UP FORM:
  Name, Email, Role (dropdown), Submit → Formspree

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 10 — INDUSTRIES PAGE (/industries)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PageHero: "Designed for High-Impact Industries"
img: https://source.unsplash.com/1920x600/?business,enterprise,technology,industry

4 full-width industry blocks (alternating image left/right):

E-Commerce:
img: https://source.unsplash.com/900x500/?ecommerce,warehouse,delivery,logistics
Solutions: Customer support agents | Recommendation engines
[Talk to an Expert] → /contact?subject=ecommerce

Healthcare:
img: https://source.unsplash.com/900x500/?hospital,medical,healthcare,doctor
Solutions: Patient data analysis | Medical transcription AI
[Talk to an Expert] → /contact?subject=healthcare

Real Estate:
img: https://source.unsplash.com/900x500/?real-estate,property,modern-building,architecture
Solutions: Lead qualification AI | Property valuation models
[Talk to an Expert] → /contact?subject=realestate

Legal:
img: https://source.unsplash.com/900x500/?law,legal,court,documents,books
Solutions: Document review automation | Legal research AI
[Talk to an Expert] → /contact?subject=legal

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 11 — CAREERS PAGE (/careers)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PageHero: "Build the Future of AI with Us"
img: https://source.unsplash.com/1920x600/?team,office,collaboration,startup,diverse

WHY JOIN: 3 value prop cards (Mission | Tech | Growth)

OPEN POSITIONS — 5 job cards, each with:
  Role title | Team badge (TENETX/TEXFLOW/ARQAYAA) | Location | Type
  Expandable description (accordion open/close)
  [Apply Now] button → opens <ApplicationModal />

Jobs:
1. ML Engineer — Physics-Informed Neural Networks | TENETX | India Remote | Full-time
2. LaTeX / Document Engineering Specialist | TEXFLOW | India Remote | Full-time
3. Agentic AI Systems Developer | ARQAYAA Core | India Remote | Full-time
4. Business Development Manager | Strategy | India | Full-time
5. AI Research Intern | R&D | India | Internship (6 months)

APPLICATION MODAL (full functional form):
  Full Name* | Email* | Phone | Role (pre-filled from card) | LinkedIn URL
  Resume Upload (file input, accept .pdf .doc .docx)
  Cover Letter (textarea)
  [Submit Application] → Formspree POST
  Success: "Application submitted! We'll review and be in touch."

LIFE AT ARQAYAA: 3 photos from Unsplash + culture text

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 12 — CONTACT PAGE (/contact)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2-column layout (60/40):

LEFT — Contact Form (React Hook Form):
  First Name* | Last Name*
  Email* (validated) | Phone
  Company
  Subject* (select):
    General Inquiry | TENETX — Oil & Gas | TEXFLOW — Research | Partnership | Careers | Other
  Message* (textarea min 50 chars)
  [Send Message] (gold, full width)

Form behavior:
  - Real-time validation, red border + message on error
  - Submit button: loading spinner state
  - POST to Formspree (https://formspree.io/f/placeholder)
  - On success: animated checkmark + "Thank you! We'll respond within 24 hours."
  - On error: "Something went wrong. Email us directly at info@arqaya.com"

RIGHT — Info Panel:
  Email: info@arqaya.com (mailto link, gold)
  Country: India
  Response: Within 24 business hours
  ——————
  TENETX Inquiries → /subsidiaries/tenetx (Link)
  TEXFLOW Inquiries → /subsidiaries/texflow (Link)
  ——————
  [Book A Free Call] → https://arqaya.vercel.app/book-call (external, new tab)
  LinkedIn | Twitter (placeholder URLs, open new tab)

PRESENCE: "Headquartered in India | Serving clients globally" — centered text strip

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 13 — FOOTER COMPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

bg: #1A1A1A | text: #AAAAAA
Top: 1px solid var(--gold)

4 columns:

Col 1 — ARQAYAA (Cormorant Garamond, white, 32px)
  Intelligence Pvt Ltd (Rajdhani 13px #888880)
  "Building the future of autonomous enterprise."
  [TENETX] badge (bg --tenetx, white pill, → /subsidiaries/tenetx)
  [TEXFLOW] badge (bg --texflow, white pill, → /subsidiaries/texflow)

Col 2 — Company:
  About Us → /about
  What We Do → /what-we-do
  Industries → /industries
  Careers → /careers

Col 3 — Subsidiaries:
  TENETX Oil & Gas AI → /subsidiaries/tenetx
  TEXFLOW Research Platform → /subsidiaries/texflow
  All Subsidiaries → /subsidiaries

Col 4 — Contact:
  info@arqaya.com (mailto:)
  India
  Book A Free Call (→ external)

Bottom bar (border-top 1px rgba white 0.1):
  Left: © 2026 ARQAYA Intelligence Pvt Ltd. All rights reserved.
  Right: LinkedIn | Twitter (icon links)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 14 — UI/UX INTERACTIONS (ALL REQUIRED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAGE TRANSITIONS:
Wrap each page in:
<motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.4 }}>

SCROLL ANIMATIONS (Framer Motion whileInView):
- Sections: fade up, 0.5s, once: true
- Cards: staggered (0.1s delay per card)
- Section labels: slide in from left

HERO SLIDESHOW:
- useState for activeSlide
- useEffect setInterval 6000ms auto-advance
- Crossfade: opacity transition 0.8s
- Tab click: setActiveSlide(index)
- Arrow click: prev/next with wrapping

STATS COUNT-UP:
- useRef + IntersectionObserver
- When in view: animate from 0 to target using requestAnimationFrame
- Duration: 1800ms easing

CARD HOVER:
- CSS: transition: transform 0.25s ease, box-shadow 0.25s ease
- Hover: translateY(-6px) + deeper shadow

CIRCULAR ARROW BUTTON:
- 48px circle, outlined (1.5px solid currentColor)
- Hover: background fills (gold or accent), arrow rotates 0→45deg
- Transition: 0.2s ease

DROPDOWN MENUS:
- onMouseEnter/Leave on nav items
- Framer Motion: y: -10 → 0, opacity: 0 → 1, 0.2s

MOBILE NAV OVERLAY:
- Fixed fullscreen overlay
- Slides in from right: x: '100%' → 0
- All links + accordion for subsidiaries
- ESC key closes

FORMS:
- React Hook Form register + handleSubmit
- Zod or manual validation
- Loading state: button text → spinner
- Success/Error: inline toast or section swap

JOB ACCORDION:
- useState for which job is open
- Framer Motion AnimatePresence for smooth expand/collapse

APPLICATION MODAL:
- Fixed overlay, centered modal
- ESC to close, click outside to close
- Focus trap inside modal

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 15 — IMAGE MANIFEST (FETCH ALL FROM UNSPLASH)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All images use: https://source.unsplash.com/[W]x[H]/?[keywords]
No API key needed. Always loads a relevant image.

Hero Slides:
  AI:       https://source.unsplash.com/1920x1080/?artificial-intelligence,neural,technology
  TENETX:   https://source.unsplash.com/1920x1080/?oil-refinery,industrial,night,pipes
  TEXFLOW:  https://source.unsplash.com/1920x1080/?library,books,academic,research
  Society:  https://source.unsplash.com/1920x1080/?smart-city,india,aerial,dawn

Editorial Cards:
  https://source.unsplash.com/600x800/?ai,machine-learning,data,blue
  https://source.unsplash.com/600x800/?oil,gas,offshore,drilling
  https://source.unsplash.com/600x800/?academic,researcher,writing,desk
  https://source.unsplash.com/600x800/?community,technology,india,people

Page Heroes:
  About:      https://source.unsplash.com/1920x600/?office,boardroom,corporate
  WhatWeDo:   https://source.unsplash.com/1920x600/?data-center,servers,technology
  TENETX:     https://source.unsplash.com/1920x700/?oil-refinery,drilling,industrial
  TEXFLOW:    https://source.unsplash.com/1920x700/?library,university,academic
  Industries: https://source.unsplash.com/1920x600/?business,enterprise,technology
  Careers:    https://source.unsplash.com/1920x600/?team,collaboration,startup,office

Industry Images:
  https://source.unsplash.com/900x500/?ecommerce,warehouse,logistics
  https://source.unsplash.com/900x500/?hospital,healthcare,medical
  https://source.unsplash.com/900x500/?real-estate,property,architecture
  https://source.unsplash.com/900x500/?law,legal,court,documents

Board Avatars (ui-avatars.com):
  Neel Khairnar:  https://ui-avatars.com/api/?name=Neel+Khairnar&size=300&background=B8922A&color=fff&bold=true&rounded=true
  Vedant Jadhav:  https://ui-avatars.com/api/?name=Vedant+Jadhav&size=300&background=1B5FA8&color=fff&bold=true&rounded=true
  Pritam Lalvani: https://ui-avatars.com/api/?name=Pritam+Lalvani&size=300&background=1A7A6E&color=fff&bold=true&rounded=true
  Dr. Bharat Kale:https://ui-avatars.com/api/?name=Bharat+Kale&size=300&background=2C2C2C&color=fff&bold=true&rounded=true

Image rules:
  object-fit: cover | object-position: center | loading="lazy" (except hero slide 1)
  Card images on hover: transform: scale(1.04), transition 0.5s ease (inside overflow:hidden container)
  Background images overlay: ::after { background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.20) 100%) }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 16 — ACCESSIBILITY & PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACCESSIBILITY:
- <a href="..."> for external links, <Link to="..."> for internal
- All images: meaningful alt="" attributes
- All icon-only buttons: aria-label=""
- Form fields: htmlFor + id pairs, aria-required="true"
- Color contrast: all text on cream bg must pass 4.5:1
- Keyboard navigation: Tab order logical, focus rings visible
- ESC closes modals and mobile menu
- Skip-to-main-content link at very top (visually hidden until focused)

PERFORMANCE:
- React.lazy + Suspense for all page components
- Images: loading="lazy" except hero slide 1
- Google Fonts: <link rel="preconnect"> in index.html
- Smooth scroll: html { scroll-behavior: smooth }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VERIFICATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before declaring done, verify every item:

PAGES:
□ / — Home with slideshow, all 8 sections
□ /about — Board members, timeline, values
□ /what-we-do — Challenge, solutions, process
□ /subsidiaries — Both subsidiary features
□ /subsidiaries/tenetx — Full TENETX page + inquiry form
□ /subsidiaries/texflow — Full TEXFLOW page + pricing + signup form
□ /industries — 4 industry deep-dives
□ /careers — Job listings + application modal
□ /contact — Full form + info panel

NAVIGATION:
□ All nav links navigate correctly
□ Mega-menu opens on Subsidiaries hover
□ Dropdown opens on What We Do hover
□ Active page underlined in gold
□ Mobile hamburger menu works
□ All footer links work

FUNCTIONALITY:
□ Hero slideshow auto-advances AND tabs work AND arrows work
□ Contact form validates and submits (Formspree)
□ TENETX inquiry form works
□ TEXFLOW signup form works
□ Job application modal opens, form submits
□ Book A Free Call opens external URL in new tab
□ mailto: links open email client
□ Stats count up on scroll
□ Accordion on careers page works

IMAGES:
□ All Unsplash images load
□ Board avatar images load
□ Hero slides all have images
□ No broken img tags or gray boxes

DESIGN:
□ Cream/white background throughout (NOT dark)
□ Gold accents on labels, buttons, rules
□ TENETX sections use steel-blue
□ TEXFLOW sections use teal
□ Cormorant Garamond on all headings
□ Plus Jakarta Sans on all body text
□ Circular arrow CTAs on editorial cards

RESPONSIVE:
□ Mobile < 768px: single column, hamburger nav
□ Tablet 768–1024px: 2-col where appropriate
□ Desktop > 1024px: full layout

This website must be indistinguishable from a real Big Four company website.
Every pixel, every interaction, every word must be intentional and professional.
```
