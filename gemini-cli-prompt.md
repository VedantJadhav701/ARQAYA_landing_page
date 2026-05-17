# GEMINI CLI PROMPT — ARQAYAA INTELLIGENCE PVT LTD
# Full Multi-Page Website | Big Four Quality | Fully Functional
# Paste this entire prompt into Gemini CLI

---

You are a senior full-stack engineer and UI/UX designer at a world-class agency.
Build a COMPLETE, MULTI-PAGE, FULLY FUNCTIONAL website for ARQAYAA INTELLIGENCE PVT LTD.

This must look and function like a Big Four consulting firm website (McKinsey, Deloitte,
Accenture, BCG) combined with the editorial quality of Saudi Aramco's website.

Every button, link, form, navigation item, dropdown, and CTA must be 100% functional.
No dead links. No placeholder "#" hrefs. Everything works.

════════════════════════════════════════════════════════════
TECH STACK
════════════════════════════════════════════════════════════

Framework:     React 18 + React Router v6 (all routing client-side SPA)
Styling:       Tailwind CSS + custom CSS variables (no styled-components)
Animations:    Framer Motion for page transitions and scroll animations
Icons:         Lucide React
Fonts:         Google Fonts — Cormorant Garamond, Rajdhani, Plus Jakarta Sans, Bebas Neue
Images:        Fetch from Unsplash API (free, no key needed via source.unsplash.com)
Forms:         React Hook Form + EmailJS or Formspree for contact
State:         React useState / useContext (no Redux needed)

════════════════════════════════════════════════════════════
COMPANY DATA — USE EXACTLY
════════════════════════════════════════════════════════════

MAIN COMPANY: ARQAYAA INTELLIGENCE PVT LTD
Email: info@arqaya.com
Country: India
Booking URL: https://arqaya.vercel.app/book-call
Mission: AI solutions for industries and for society

SUBSIDIARY 1 — TENETX (Oil & Gas AI)
Full name: TENETx Industrial Oil & Gas AI
Product: TENETFlow Model — on-premise AI for drilling optimization
Technology: Physics-Informed Neural Networks (PINNs), Small Language Models (7–8B params), Agentic AI
Key stats: <0.5% error rate | ₹0.08/query | 100% air-gapped | SCADA/IoT integration
vs competitors: Wipro Upstream AI — TENETX is domain-specific, on-premise, physics-native
Investment scope: ₹60,60,000

SUBSIDIARY 2 — TEXFLOW (Research Typesetting Platform)
Full name: TEXFLOW Automated Typesetting Compliance Platform
Product: Word → LaTeX → PDF deterministic converter
Technology: XML style parsing, Jinja2 template mapping, Docker cloud compilation
Key stats: Zero AI | 100% deterministic | 48-hour data purge | IEEE/Springer/Elsevier templates
Pricing: Free (1/month) | ₹299–499/paper | ₹999/6mo | ₹1499/year | B2B institutional
Audience: Researchers, PhD Scholars, Professors (India-first)

BOARD OF DIRECTORS:
- Neel Khairnar — Founder
- Vedant Jadhav — Co-Founder
- Pritam Lalvani — Director, Strategic Lead
- Dr. Bharat Kale — Director, Advisor

════════════════════════════════════════════════════════════
DESIGN SYSTEM — STRICTLY FOLLOW
════════════════════════════════════════════════════════════

COLOR TOKENS (define as CSS variables in :root):
--cream:          #F7F5F0   (page background)
--cream-dark:     #EFEDE6   (alternate sections)
--gray-light:     #F0F0EE   (stats sections)
--white:          #FFFFFF
--text-black:     #141414   (headlines)
--text-dark:      #2C2C2C   (body)
--text-muted:     #888880   (labels, captions)
--gold:           #B8922A   (primary brand accent)
--gold-hover:     #D4A843
--border:         #E0DDD6
--tenetx:         #1B5FA8   (TENETX blue)
--tenetx-light:   #EBF3FC
--texflow:        #1A7A6E   (TEXFLOW teal)
--texflow-light:  #EAF5F4
--dark-footer:    #1A1A1A

TYPOGRAPHY:
- Display/H1/H2:  Cormorant Garamond 300–700
- Labels:         Rajdhani 600, ALL CAPS, letter-spacing: 0.2em
- Body:           Plus Jakarta Sans 400/500
- Stats:          Cormorant Garamond 300, enormous (80–100px)
- TENETX brand:   Bebas Neue
- TEXFLOW brand:  Rajdhani 700

DESIGN RULES (NON-NEGOTIABLE):
- border-radius: max 16px on cards, 8px on buttons — clean not bubbly
- All sections: padding 80px vertical, max-width 1280px horizontal
- Aramco-style section labels: small Rajdhani ALL CAPS + thin 2px gold underline rule
- Circular arrow CTAs everywhere (→ inside 48px circle, outlined)
- Hover: cards lift translateY(-6px), shadow deepens
- Page transitions: Framer Motion opacity + slight Y slide (0.4s)
- Smooth scroll: scroll-behavior: smooth on html element

════════════════════════════════════════════════════════════
FULL PAGE STRUCTURE — BUILD ALL PAGES
════════════════════════════════════════════════════════════

Router structure:
/                     → HomePage
/about                → AboutPage
/what-we-do           → WhatWeDoPage
/subsidiaries         → SubsidiariesPage
/subsidiaries/tenetx  → TenetxPage
/subsidiaries/texflow → TexflowPage
/industries           → IndustriesPage
/careers              → CareersPage
/contact              → ContactPage
/book-call            → BookCallPage (redirects to https://arqaya.vercel.app/book-call)

SHARED COMPONENTS (used on every page):
- <Navbar /> — sticky, with mega-menu dropdowns
- <Footer /> — full 4-col footer
- <PageHero /> — reusable hero with image + heading
- <SectionLabel /> — gold label with underline rule
- <CircleArrowBtn /> — circular arrow CTA button
- <ScrollToTop /> — on route change

════════════════════════════════════════════════════════════
PAGE 1 — HOME PAGE (/)
════════════════════════════════════════════════════════════

SECTION A — HERO SLIDESHOW
- 4 slides, auto-advance every 6s, crossfade transition
- Each slide: full-viewport, dark image background, bottom-left text
- Tab strip at bottom (4 labeled tabs, gold active underline)
- Prev/Next arrow controls on sides (always visible)
- Slide 1: AI Intelligence — image: https://source.unsplash.com/1920x1080/?artificial-intelligence,neural-network,dark
- Slide 2: TENETX — image: https://source.unsplash.com/1920x1080/?oil-refinery,industrial,night
- Slide 3: TEXFLOW — image: https://source.unsplash.com/1920x1080/?library,academic,research
- Slide 4: Society — image: https://source.unsplash.com/1920x1080/?smart-city,aerial,technology

Each slide has:
- Label (Rajdhani, 12px, gold, ALL CAPS)
- H1 headline (Cormorant Garamond 300, white, 72px)
- 1-line subtext (Plus Jakarta Sans, rgba white 0.75)
- Circular arrow CTA → links to relevant page

SECTION B — DISCOVER ARQAYAA
- Label: "DISCOVER ARQAYAA"
- Heading: "We are an AI intelligence company building systems that make industries smarter."
- 4 editorial full-bleed image cards (3:4 aspect), rounded 16px
  Card 1: Our Solutions → /what-we-do
  Card 2: TENETX → /subsidiaries/tenetx
  Card 3: TEXFLOW → /subsidiaries/texflow
  Card 4: Our Impact → /about
- Each card: image from Unsplash, dark gradient, label top-left, title, circular arrow

SECTION C — WHAT WE BELIEVE
- Label: "WHAT WE BELIEVE"
- Heading: "We believe in the power of intelligence to transform industries and advance human progress."
- Horizontal scroll strip of 5 editorial images with caption + "→ Learn more" links

SECTION D — AT A GLANCE (Stats)
- Background: --gray-light
- 3 enormous stat columns:
  60% / Reduced Manual Workload
  3× / Improved Decision Speed
  0.5% / Error Rate with TENETX
- Count-up animation on scroll (IntersectionObserver)

SECTION E — OUR SUBSIDIARIES (featured cards)
- Label: "OUR SUBSIDIARIES"
- 2 large feature cards side by side:
  TENETX card: --tenetx-light bg, Bebas Neue title, steel-blue accent, → /subsidiaries/tenetx
  TEXFLOW card: --texflow-light bg, Rajdhani title, teal accent, → /subsidiaries/texflow

SECTION F — INDUSTRIES STRIP
- Label: "INDUSTRIES WE SERVE"
- 4 full-bleed image cards:
  E-commerce | Healthcare | Real Estate | Legal
  Each → /industries

SECTION G — LATEST NEWS / INSIGHTS (fake but realistic)
- Label: "INSIGHTS"
- 3 article cards, horizontal:
  Article 1: "The Future of AI in Oil & Gas Operations"
  Article 2: "Why Deterministic AI Wins in Academic Publishing"
  Article 3: "ARQAYAA: Building India's AI Infrastructure"
  Each card: category label, headline, date, "Read more →" link (links to /about for now)

SECTION H — CTA BANNER
- Heading: "Ready to Transform Your Business with AI?"
- Subline: "Let's build something powerful together."
- Button: [Book A Free Call] → https://arqaya.vercel.app/book-call (opens in new tab)

════════════════════════════════════════════════════════════
PAGE 2 — ABOUT US (/about)
════════════════════════════════════════════════════════════

HERO: Full-bleed image (team/office), "About ARQAYAA" headline
Image: https://source.unsplash.com/1920x600/?modern-office,boardroom,professional

SECTION: WHO WE ARE
- 2-col: left = large text paragraph, right = key facts
- Text: "ARQAYAA Intelligence Pvt Ltd is an AI systems company headquartered in India, building production-grade artificial intelligence solutions for regulated industries and solving real societal challenges through intelligent automation."
- Key facts right col:
  Founded: 2024 | HQ: India | Subsidiaries: 2 | Sector: AI/ML, Oil & Gas, EdTech

SECTION: OUR MISSION & VISION
- Mission: "Deploy reliable, scalable, and high-impact AI systems that bridge the gap between AI hype and business reality."
- Vision: "A world where every industry operates with the intelligence it needs to make better decisions, faster."
- Split layout: mission left, vision right, thin gold divider between

SECTION: BOARD OF DIRECTORS
- Label: "OUR LEADERSHIP"
- Heading: "The Team Behind ARQAYAA"
- 4 board member cards (2×2 grid on desktop, stacked on mobile):
  Each card: avatar image (from ui-avatars.com), name (Cormorant Garamond 600), role (Rajdhani gold ALL CAPS), placeholder bio

  Neel Khairnar — Founder
  Avatar: https://ui-avatars.com/api/?name=Neel+Khairnar&size=300&background=B8922A&color=fff&bold=true
  Bio: "Visionary founder driving ARQAYAA's strategic AI architecture and product direction."

  Vedant Jadhav — Co-Founder
  Avatar: https://ui-avatars.com/api/?name=Vedant+Jadhav&size=300&background=1B5FA8&color=fff&bold=true
  Bio: "Co-founder leading engineering and technical operations across all subsidiaries."

  Pritam Lalvani — Director, Strategic Lead
  Avatar: https://ui-avatars.com/api/?name=Pritam+Lalvani&size=300&background=1A7A6E&color=fff&bold=true
  Bio: "Drives strategic partnerships and market expansion across industrial sectors."

  Dr. Bharat Kale — Director, Advisor
  Avatar: https://ui-avatars.com/api/?name=Bharat+Kale&size=300&background=2C2C2C&color=fff&bold=true
  Bio: "Academic advisor and research lead, guiding scientific rigor across ARQAYAA's platforms."

SECTION: OUR VALUES
- 4 values in a clean 2×2 grid (white cards):
  1. Production-First — We build for production, not proof-of-concept.
  2. Domain Intelligence — Deep sector expertise, not generic AI.
  3. Data Sovereignty — Your data stays yours, always.
  4. Ethical AI — Zero hallucinations, zero compromise.

SECTION: COMPANY TIMELINE
- Vertical timeline (alternating left/right)
- Milestones (realistic):
  2024: Company Founded — ARQAYAA Intelligence Pvt Ltd incorporated in India
  2024: TENETX Launched — Physics-native AI for oil & gas drilling operations
  2025: TEXFLOW Initiated — Deterministic typesetting platform for researchers
  2025: First Industry Partnerships — Engagements with Indian PSU energy sector
  2026: Scaling Operations — Expanding team and research capabilities

════════════════════════════════════════════════════════════
PAGE 3 — WHAT WE DO (/what-we-do)
════════════════════════════════════════════════════════════

HERO: "We Build AI That Actually Works in Production"
Image: https://source.unsplash.com/1920x600/?technology,ai,data-center,server

SECTION: THE CHALLENGE
- 2-col: left = heading + pull quote, right = 4 problem cards
- Quote: "AI isn't just about models — it's about systems."
- Problem Cards:
  Project Failure | Model Drift | Data Silos | Fragmented Tools

SECTION: OUR SOLUTIONS (4 large cards)
- 01 Agentic AI Systems — Autonomous agents for complex multi-step workflows
- 02 Domain-Specific Models — Fine-tuned LLMs on your industry data
- 03 Intelligent Automation — End-to-end platforms with intelligent logic layers
- 04 Production Monitoring — Real-time AI observability and reliability

SECTION: OUR PROCESS (horizontal timeline)
- Step 01: Discovery & Strategy
- Step 02: Development & Integration
- Step 03: Deployment & Scale
- Animated line draws between steps on scroll

SECTION: WHY ARQAYAA
- Left: 4 differentiators with gold dash bullets
- Right: Large italic pull quote with gold left border
- Stats strip: 60% workload reduction | 3× decision speed | Across teams

SECTION: CTA → Book A Free Call

════════════════════════════════════════════════════════════
PAGE 4 — SUBSIDIARIES OVERVIEW (/subsidiaries)
════════════════════════════════════════════════════════════

HERO: "Our Subsidiaries" — image of industrial + academic split visual

SECTION: Two large feature blocks stacked:

TENETX BLOCK (full-width, --tenetx-light bg):
- Left text: "TENETX" in Bebas Neue 80px (tenetx blue)
- Subtitle: "Industrial Oil & Gas Intelligence"
- Body: Full description from proposal
- 3 key stats: <0.5% error | ₹0.08/query | 100% air-gapped
- CTA: [Explore TENETX →] → /subsidiaries/tenetx
- Right: Image from Unsplash — oil rig / refinery

TEXFLOW BLOCK (full-width, --texflow-light bg):
- Left: Image — researcher with laptop, academic setting
- Right text: "TEXFLOW" in Rajdhani bold 64px (texflow teal)
- Subtitle: "Automated Typesetting Compliance Platform"
- Body: Description from PRD
- 3 key stats: Zero AI | 48hr data purge | From ₹299/paper
- CTA: [Explore TEXFLOW →] → /subsidiaries/texflow

════════════════════════════════════════════════════════════
PAGE 5 — TENETX PAGE (/subsidiaries/tenetx)
════════════════════════════════════════════════════════════

HERO: Full bleed oil rig / refinery image, dark overlay
Image: https://source.unsplash.com/1920x700/?oil-refinery,drilling,industrial,night
Headline: "Physics-Native AI for Drilling Operations"
Label: "TENETX — OIL & GAS INTELLIGENCE"

SECTION: THE PROBLEM
- Context stats:
  ∼30% time lost to unplanned drilling incidents
  ₹4 Crore average cost per drilling operation
  Existing AI: cloud-dependent, 1–5% error rate, data sovereignty risk

SECTION: THE TENETX SOLUTION
- Full description of TENETFlow model
- Architecture diagram (CSS/SVG — drawn in code):
  Input → Preprocessing → [PINN + SLM + Tree-based] → Fusion → Output

SECTION: KEY DIFFERENTIATORS (4 cards, --tenetx-light)
1. 100% Air-Gapped — Zero cloud dependency, full data sovereignty
2. Physics-Native Accuracy — Darcy's Law, PINNs — error below 0.5%
3. Zero Hardware Overhaul — Integrates with existing SCADA/IoT
4. Cost-Effective — ₹0.08/query vs ₹4–8 conventional

SECTION: THE TENETFLOW MODEL (pipeline visual)
Drawn as a horizontal flow diagram using CSS/SVG:
Sensor Input → Preprocessing → Parallel Inference → Fusion → Prediction

SECTION: TECHNOLOGY STACK
Grid of technology pills:
Physics-Informed Neural Networks | Small Language Models (7–8B) | Agentic AI
SCADA Integration | IoT Streams | AES-256 Security | RBAC | SSO | Air-Gap Deploy

SECTION: APPLICATIONS
4 use cases in cards:
- Stuck Pipe Prediction
- Kick/Blowout Detection
- ROP Optimization
- Corrosion Prediction

SECTION: CONTACT FOR TENETX
- Dedicated inquiry form (name, company, role, message)
- Form submits via Formspree: https://formspree.io/f/xwkgjkgj (use placeholder endpoint)
- Submit button: [Send Inquiry]

════════════════════════════════════════════════════════════
PAGE 6 — TEXFLOW PAGE (/subsidiaries/texflow)
════════════════════════════════════════════════════════════

HERO: Clean academic image — library, research, papers
Image: https://source.unsplash.com/1920x700/?library,university,academic,research
Headline: "From Word to Publisher-Ready PDF. Instantly."
Label: "TEXFLOW — RESEARCH PLATFORM"
Background: lighter overlay (--texflow color tint)

SECTION: THE PROBLEM
- Researchers waste 40+ hours manually fixing margins, citations, journal layouts
- AI-based tools risk plagiarism detector flags and journal policy rejections
- Manual agencies are slow and expensive

SECTION: THE TEXFLOW SOLUTION
- 100% deterministic, Zero AI, Zero hallucinations
- Word (.docx) → XML parsing → LaTeX template → PDF output
- Full description

SECTION: HOW IT WORKS (step flow)
Horizontal 5-step process with icons:
1. Upload Word File (.docx)
2. Engine Extracts Structure
3. Select Journal Template
4. Cloud Compilation
5. Download PDF + LaTeX Zip

SECTION: JOURNAL TEMPLATES
- Label: "SUPPORTED PUBLISHERS"
- Logo/pill strip: IEEE | Springer Nature | Elsevier | (more coming)

SECTION: PRICING (fully functional pricing cards)
4 pricing tiers in a 4-col grid:

Free Tier:
- 1 Free Compilation / Month
- Basic templates
- Standard support
- [Get Started Free] → /contact

Pay-Per-Paper Pass (₹299–₹499):
- 30-Day Project Access
- All templates
- Priority compilation
- [Buy Now] → /contact

Scholar Term Pass:
- ₹999 / 6 Months
- ₹1,499 / 1 Year
- Unlimited compilations
- [Subscribe] → /contact

B2B Institutional:
- Flat Annual Rate
- University Department license
- Dedicated support
- [Contact Sales] → /contact

SECTION: DATA PRIVACY
- Files auto-purged within 48 hours
- Zero AI text modification
- Isolated secure servers
- Full GDPR-aligned policy

SECTION: SIGN UP FORM (functional)
- Name, Email, Role (dropdown: Researcher / PhD Scholar / Professor / Institution)
- Submit → Formspree endpoint

════════════════════════════════════════════════════════════
PAGE 7 — INDUSTRIES (/industries)
════════════════════════════════════════════════════════════

HERO: "Industries We Serve"
Image: https://source.unsplash.com/1920x600/?industry,technology,business,enterprise

SECTION: INTRO
- Label: "OUR SECTORS"
- Heading: "Designed for High-Impact Industries Where Accuracy is Mission-Critical"

SECTION: 4 INDUSTRY DEEP-DIVES (each as a full-width feature block)

E-Commerce:
- Image: https://source.unsplash.com/900x500/?ecommerce,logistics,warehouse
- Solutions: Customer support AI agents, personalized recommendation engines
- CTA: [Talk to an Expert] → /contact

Healthcare:
- Image: https://source.unsplash.com/900x500/?healthcare,hospital,medical,technology
- Solutions: Patient data analysis AI, automated medical transcription
- CTA: [Talk to an Expert] → /contact

Real Estate:
- Image: https://source.unsplash.com/900x500/?real-estate,modern,architecture,property
- Solutions: Intelligent lead qualification, property valuation models
- CTA: [Talk to an Expert] → /contact

Legal:
- Image: https://source.unsplash.com/900x500/?law,legal,court,documents
- Solutions: Automated document review, smart legal research assistants
- CTA: [Talk to an Expert] → /contact

════════════════════════════════════════════════════════════
PAGE 8 — CAREERS (/careers)
════════════════════════════════════════════════════════════

HERO: "Build the Future of AI with Us"
Image: https://source.unsplash.com/1920x600/?team,office,collaboration,startup

SECTION: WHY JOIN ARQAYAA
- 3 value props: Mission-Driven Work | Cutting-Edge Tech | Growth Culture

SECTION: OPEN POSITIONS (functional job listings)
Each listing: clickable card that expands or links to /contact with job pre-filled

Listing 1:
Role: ML Engineer — Physics-Informed Neural Networks
Team: TENETX | Location: India (Remote) | Type: Full-time

Listing 2:
Role: LaTeX / Document Engineering Specialist
Team: TEXFLOW | Location: India (Remote) | Type: Full-time

Listing 3:
Role: Agentic AI Systems Developer
Team: ARQAYAA Core | Location: India (Remote) | Type: Full-time

Listing 4:
Role: Business Development Manager
Team: Strategy | Location: India | Type: Full-time

Listing 5:
Role: AI Research Intern
Team: R&D | Location: India | Type: Internship (6 months)

Each listing card has: [Apply Now] button → opens application form modal

APPLICATION MODAL (functional):
Fields: Name, Email, Phone, Role (pre-filled), LinkedIn URL, Upload Resume (file input),
Cover letter textarea, [Submit Application] button → Formspree

SECTION: LIFE AT ARQAYAA
- 3 editorial photos (from Unsplash)
- Short culture descriptions

════════════════════════════════════════════════════════════
PAGE 9 — CONTACT (/contact)
════════════════════════════════════════════════════════════

HERO: "Get in Touch" — clean minimal hero

LAYOUT: 2-column (60/40 split)

Left (60%) — Contact Form:
- Heading: "Let's Start a Conversation"
- Full functional form (React Hook Form):
  First Name* | Last Name*
  Email* | Phone
  Company
  Subject (dropdown): General Inquiry | TENETX — Oil & Gas AI | TEXFLOW — Research Platform | Partnership | Careers | Other
  Message* (textarea)
  [Send Message] button (gold filled)
- Form validation: required fields, email format
- On submit: POST to Formspree (https://formspree.io/f/xyzabcde)
- Success state: "Thank you! We'll be in touch within 24 hours." (animated check)
- Error state: "Something went wrong. Please try info@arqaya.com directly."

Right (40%) — Contact Info:
- Heading: "Contact Information"
- Email: info@arqaya.com (clickable mailto:)
- Country: India
- Response time: Within 24 business hours
- Divider
- Subsidiary Quick Links:
  TENETX Inquiries → /subsidiaries/tenetx
  TEXFLOW Inquiries → /subsidiaries/texflow
- Divider
- Social links (LinkedIn, Twitter — placeholder URLs)
- CTA: [Book a Free Call] → https://arqaya.vercel.app/book-call (external, new tab)

SECTION: OFFICE / PRESENCE MAP (static)
- Simple India outline SVG with a dot on location
- "Headquartered in India | Serving clients globally"

════════════════════════════════════════════════════════════
SHARED COMPONENT — NAVBAR (on every page)
════════════════════════════════════════════════════════════

TOP UTILITY BAR (32px, dark #1A1A1A):
- Left: "India" + globe icon
- Right: "info@arqaya.com" (mailto link)

MAIN NAV (64px, white bg, border-bottom on scroll):
- Left: search icon button (opens search modal)
- Center links (ALL functional React Router Links):
  ABOUT US → /about
  WHAT WE DO → /what-we-do (with dropdown on hover)
  SUBSIDIARIES → /subsidiaries (with mega-menu on hover)
  INDUSTRIES → /industries
  CAREERS → /careers
  CONTACT → /contact
- Right: ARQAYAA wordmark (→ /)

WHAT WE DO DROPDOWN (on hover):
  Our Solutions → /what-we-do
  Our Process → /what-we-do#process
  Why ARQAYAA → /what-we-do#why

SUBSIDIARIES MEGA-MENU (on hover, full-width panel):
  Left: TENETX — description + → /subsidiaries/tenetx
  Right: TEXFLOW — description + → /subsidiaries/texflow
  Bottom: View All Subsidiaries → /subsidiaries

Mobile nav: hamburger → full-screen overlay menu, all links functional

ACTIVE STATE: gold underline on current page nav item

════════════════════════════════════════════════════════════
SHARED COMPONENT — FOOTER (on every page)
════════════════════════════════════════════════════════════

Background: #1A1A1A | Text: #AAAAAA
Top: 1px gold rule

4-column layout:

Col 1 — Brand:
ARQAYAA (Cormorant Garamond, white, large)
Intelligence Pvt Ltd (Rajdhani small)
"Building the future of autonomous enterprise."
Subsidiary badges: [TENETX] [TEXFLOW]

Col 2 — Company:
About Us → /about
What We Do → /what-we-do
Industries → /industries
Careers → /careers

Col 3 — Subsidiaries:
TENETX — Oil & Gas AI → /subsidiaries/tenetx
TEXFLOW — Research Platform → /subsidiaries/texflow
Overview → /subsidiaries

Col 4 — Contact:
info@arqaya.com (mailto link)
India
Book A Free Call → https://arqaya.vercel.app/book-call

Bottom bar:
Left: © 2026 ARQAYA Intelligence Pvt Ltd. All rights reserved.
Right: LinkedIn icon | Twitter/X icon (placeholder URLs)

════════════════════════════════════════════════════════════
UI/UX REQUIREMENTS (ALL MUST BE IMPLEMENTED)
════════════════════════════════════════════════════════════

NAVIGATION:
✓ Active page highlighted in nav (gold underline)
✓ Smooth scroll to anchor sections (#hash links)
✓ Mobile hamburger → full screen menu overlay
✓ Dropdown menus: keyboard accessible (Tab/Escape)
✓ Breadcrumb on inner pages (Home > About Us)

ANIMATIONS:
✓ Page transitions: Framer Motion (opacity + Y, 0.4s)
✓ Scroll reveal: sections fade-up as they enter viewport
✓ Hero slideshow: crossfade with 0.8s transition
✓ Stats: count-up animation on IntersectionObserver
✓ Cards: hover lift + shadow deepens
✓ CTA buttons: gold shimmer sweep on hover
✓ Timeline line: draws on scroll (CSS animation)
✓ Circular arrow: 45° rotation on hover

FORMS:
✓ Real-time validation (red border + error message)
✓ Submit button loading state (spinner)
✓ Success toast notification
✓ Error fallback message
✓ All form fields accessible (label, aria-required)

ACCESSIBILITY:
✓ Skip to main content link
✓ Focus rings on all interactive elements
✓ Alt text on all images
✓ ARIA labels on icon buttons
✓ Color contrast ratio minimum 4.5:1

PERFORMANCE:
✓ Images: loading="lazy" (except hero slide 1)
✓ React.lazy + Suspense for page code-splitting
✓ Fonts: preconnect to fonts.googleapis.com

RESPONSIVE BREAKPOINTS:
✓ Mobile: < 768px — single column, hamburger nav, stacked cards
✓ Tablet: 768–1024px — 2-col grids, condensed nav
✓ Desktop: > 1024px — full layout

════════════════════════════════════════════════════════════
IMAGE FETCHING — ALL SECTIONS
════════════════════════════════════════════════════════════

Use Unsplash source API (no key needed):
Format: https://source.unsplash.com/[W]x[H]/?[keyword1],[keyword2]

Hero slides:
Slide 1: https://source.unsplash.com/1920x1080/?artificial-intelligence,neural-network
Slide 2: https://source.unsplash.com/1920x1080/?oil-refinery,industrial,night
Slide 3: https://source.unsplash.com/1920x1080/?library,academic,research,books
Slide 4: https://source.unsplash.com/1920x1080/?smart-city,aerial,technology

Editorial cards (Discover section):
https://source.unsplash.com/800x1000/?ai,technology,machine-learning
https://source.unsplash.com/800x1000/?oil,gas,drilling,offshore
https://source.unsplash.com/800x1000/?researcher,writing,paper,desk
https://source.unsplash.com/800x1000/?community,india,technology,people

Industry cards:
https://source.unsplash.com/800x600/?ecommerce,warehouse,logistics
https://source.unsplash.com/800x600/?hospital,healthcare,medical,technology
https://source.unsplash.com/800x600/?real-estate,architecture,modern
https://source.unsplash.com/800x600/?law,legal,books,court

About page:
https://source.unsplash.com/1920x600/?office,boardroom,corporate,professional

TENETX page:
https://source.unsplash.com/1920x700/?oil-refinery,drilling,industrial

TEXFLOW page:
https://source.unsplash.com/1920x700/?library,academic,university,books

Careers page:
https://source.unsplash.com/1920x600/?team,collaboration,startup,office

Board avatars (ui-avatars.com):
https://ui-avatars.com/api/?name=[Name]&size=300&background=[color]&color=fff&bold=true

════════════════════════════════════════════════════════════
FINAL CHECKLIST — VERIFY BEFORE DONE
════════════════════════════════════════════════════════════

□ All 9 pages render without errors
□ All nav links navigate to correct pages
□ All dropdown menus open and close correctly
□ Mobile hamburger menu works
□ Hero slideshow auto-advances and tabs work
□ All contact/inquiry forms submit (Formspree)
□ Book A Free Call opens external URL in new tab
□ All Unsplash images load (not broken)
□ Board avatars display (ui-avatars.com)
□ Pricing cards on TEXFLOW page display correctly
□ Job listings on Careers page expand or link
□ Application modal opens and form submits
□ Stats count-up animation triggers on scroll
□ Page transitions are smooth
□ Mobile layout works on all pages
□ Footer links all navigate correctly
□ Active nav item shows gold underline
□ No console errors in browser
□ Site looks like McKinsey / Aramco quality

This is a complete production-grade website. Do not cut corners.
Every section must be built. Every button must work.
```
