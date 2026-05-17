# ARQAYAA INTELLIGENCE PVT LTD — Gemini Design Document
### Theme: Professional White & Cream | Aramco-Style Cinematic Enterprise
### Builder Target: Lovable / Gemini / Bolt

---

## 1. Design Philosophy

**"Clarity at Scale. Intelligence by Design."**

This version takes the Aramco.com layout language and applies it in its **light/white mode**
— the professional cream-and-white aesthetic used on Aramco's inner pages, "Discover Aramco"
sections, and editorial articles. Clean, editorial, authoritative. NOT a dark tech site.

**Visual Reference — Aramco white sections:**
- Light gray section labels, small caps, with a thin colored rule below
- Enormous serif headlines on off-white / `#F7F5F0` backgrounds
- Full-bleed image cards with rounded corners (12–16px)
- Thin horizontal dividers between sections (1px, light gray)
- Circular arrow CTAs (like Aramco's → inside a circle)
- Very generous white space — sections breathe

**Applied to ARQAYAA:**
- Primary company: white/cream authority with gold accent
- TENETX subsidiary: industrial steel-blue accent, darker cards
- TEXFLOW subsidiary: clean academic teal/green accent, paper-white aesthetic

---

## 2. Color Palette

```css
/* Base Surfaces */
--white:            #FFFFFF
--cream:            #F7F5F0    /* page background — warm off-white */
--cream-dark:       #EFEDE6    /* alternate section background */
--gray-light:       #F0F0EE    /* stats section bg, like Aramco */
--gray-mid:         #E2E0DA    /* dividers, borders */

/* Text */
--text-black:       #141414    /* primary headlines */
--text-dark:        #2C2C2C    /* body copy */
--text-mid:         #555550    /* secondary body */
--text-muted:       #888880    /* labels, captions */

/* ARQAYAA Brand Gold */
--gold:             #B8922A    /* refined corporate gold */
--gold-light:       #D4A843    /* hover states, links */
--gold-rule:        #C9A84C    /* thin accent lines */

/* TENETX — Industrial Steel Blue */
--tenetx-primary:   #1B5FA8
--tenetx-dark:      #0E3D6E
--tenetx-light:     #EBF3FC    /* TENETX card bg tint */

/* TEXFLOW — Academic Teal */
--texflow-primary:  #1A7A6E
--texflow-dark:     #0F5249
--texflow-light:    #EAF5F4    /* TEXFLOW card bg tint */

/* UI */
--border:           #E0DDD6
--shadow:           rgba(0, 0, 0, 0.06)
--shadow-hover:     rgba(0, 0, 0, 0.14)
```

---

## 3. Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Hero Display | `Cormorant Garamond` | 300–700 | 64–96px |
| Section Headings | `Cormorant Garamond` | 400–600 | 36–56px |
| Section Labels | `Rajdhani` | 600 | 11–12px, ALL CAPS, letter-spacing: 0.2em |
| Body / UI | `Plus Jakarta Sans` | 400, 500 | 15–17px |
| Stats Numbers | `Cormorant Garamond` | 300 | 72–100px |
| TENETX Brand | `Bebas Neue` | 400 | 48–64px |
| TEXFLOW Brand | `Rajdhani` | 700 | 40–56px |
| Nav | `Plus Jakarta Sans` | 500 | 14px |
| Card Labels | `Rajdhani` | 600 | 11px, ALL CAPS |
| Board Names | `Cormorant Garamond` | 600 | 22–26px |

**Google Fonts:**
```
Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400
Rajdhani:wght@500;600;700
Plus+Jakarta+Sans:wght@400;500;600
Bebas+Neue
```

---

## 4. Navigation

**Exact Aramco navigation structure:**

**Top utility bar (thin, 36px):**
- Left: `India` region label
- Right: Language toggle + Accessibility icon
- Background: `#1A1A1A`, text: `#AAAAAA`, 12px Plus Jakarta Sans

**Main nav bar (64px):**
- Background: `#FFFFFF` (solid, always — no transparency trick)
- Left: Search icon (circular)
- Center nav links (Plus Jakarta Sans 500, 14px, dark gray):
  `ABOUT US` | `WHAT WE DO` | `SUBSIDIARIES` | `CAREERS` | `CONTACT`
- Right: `ARQAYAA` wordmark in Cormorant Garamond bold + flame/circuit icon
- Active nav item: underline rule in gold
- On hover: dropdown slides down with sub-links (Aramco mega-menu style)
- Bottom: 1px `--border` separator

**Subsidiaries mega-dropdown (on hover):**
```
┌─────────────────────────────────────────────────────┐
│  SUBSIDIARIES                                        │
│                                                      │
│  [TENETX]                    [TEXFLOW]               │
│  Industrial Oil & Gas AI     Automated Typesetting   │
│  → Learn more                → Learn more            │
└─────────────────────────────────────────────────────┘
```

---

## 5. HERO — Aramco-Style Slideshow

**This is the centerpiece. Exact Aramco hero pattern.**

**Structure:**
- Full-viewport height (100vh), full-width
- Sliding background: 3–4 slides, auto-advancing every 6 seconds
- Each slide: full-bleed cinematic image/gradient with dark overlay (rgba 0,0,0,0.42)
- Bottom tab strip (like Aramco): 4 topic pills that also act as slide indicators

**Slide Content (each slide — BOTTOM-LEFT aligned, Aramco style):**
```
[SMALL LABEL in gold, ALL CAPS, Rajdhani]

[Large headline, Cormorant Garamond 300, white, 72px, 2 lines max]

[1-line body, Plus Jakarta Sans, rgba(255,255,255,0.78), 16px]

[CTA: circular arrow button → white outlined]
```

**4 Slides:**

**Slide 1 — Main ARQAYAA**
- Label: `AI INTELLIGENCE`
- Headline: `Unlock the Power of AI for Your Business.`
- Body: `Automating, analyzing, and accelerating workflows across industries.`
- Background: Dark atmospheric dawn gradient (indigo → amber at horizon)

**Slide 2 — TENETX**
- Label: `TENETX — OIL & GAS`
- Headline: `Physics-Native AI for Drilling Operations.`
- Body: `100% data sovereignty. Error rate below 0.5%. Zero cloud dependency.`
- Background: Dark industrial image (refinery / rig silhouette)

**Slide 3 — TEXFLOW**
- Label: `TEXFLOW — RESEARCH`
- Headline: `From Word to Publisher-Ready PDF. Instantly.`
- Body: `Zero-AI deterministic typesetting for researchers, scholars, and professors.`
- Background: Clean academic/library gradient — white light, paper texture

**Slide 4 — Society Impact**
- Label: `OUR MISSION`
- Headline: `AI Solutions for Industry. And for Society.`
- Body: `Building intelligent systems that solve real problems for real people.`
- Background: Aerial city at dawn

**Bottom tab strip (exactly like Aramco):**
```
[ARQAYAA INTELLIGENCE] | [TENETX OIL & GAS] | [TEXFLOW RESEARCH] | [OUR IMPACT]
         ▔▔▔▔▔▔ (active gold underline rule)
```
Each tab: ALL CAPS, small, Rajdhani, white on dark overlay.
Clicking a tab jumps to that slide.

**Slide transition:** Crossfade (0.8s opacity), not slide/push.

---

## 6. "DISCOVER ARQAYAA" — Editorial Section

**Direct copy of Aramco's "Discover Aramco" section.**

- Background: `--white`
- Top: Small label `DISCOVER ARQAYAA` (Rajdhani, 11px, gold, ALL CAPS, with thin gold underline rule)
- Below: Large body statement in Cormorant Garamond 400, 36px, dark:
  ```
  "We are an AI intelligence company building
  the systems that make industries smarter,
  workflows faster, and societies better."
  ```
- Below: 4 large image cards in a horizontal row (exactly like Aramco's 4-card section):
  - Each card: Full-height image (400px) with rounded corners (16px)
  - Top-left label: category name (Rajdhani, white, ALL CAPS, 11px)
  - Body: 2-line description (Cormorant Garamond, white, 20px)
  - Bottom-right: circular `→` button (white outlined)

**4 Cards:**
1. `OUR SOLUTIONS` — "From agentic AI to domain-specific models, intelligence is our core."
2. `TENETX` — "AI-native drilling intelligence for the oil and gas sector."
3. `TEXFLOW` — "Deterministic typesetting for the global research community."
4. `IMPACT` — "Solving real problems for industries and society across India."

---

## 7. "WHAT WE BELIEVE" — Mission Section

**Matches Aramco's "What We Believe" layout:**

- Background: `--white`
- Label: `WHAT WE BELIEVE` (Rajdhani, ALL CAPS, gold, with thin rule)
- Heading (Cormorant Garamond, 42px, dark, 3 lines):
  ```
  "We believe in the power of intelligence
  to transform industries, solve problems,
  and advance human progress."
  ```
- Below: Horizontal scrolling editorial image strip (5 images, left-aligned):
  - Each: Rounded image (16px) + title below + `→ Learn more` link (gold)
  - Topics: AI Systems | Oil & Gas | Research | Society Impact | Innovation

---

## 8. "AT A GLANCE" — Stats Section

**Aramco's "At a glance" section — exactly replicated:**

- Background: `--gray-light` (`#F0F0EE`)
- Label: `AT A GLANCE`
- 3 enormous stat columns with thin gray horizontal rule below each:

```
        60%                    3×                   100%
  ─────────────────    ─────────────────    ─────────────────
  Reduced Manual        Improved Decision     Data Sovereignty
  Workload              Speed Across Teams    with TENETX
```

- Numbers: Cormorant Garamond 300, 96px, `--text-black`
- Labels: Plus Jakarta Sans 400, 15px, `--text-muted`
- Dividers: 1px gray horizontal rule below each number (like Aramco)

---

## 9. TENETX SUBSIDIARY SECTION

**Full editorial feature section — like Aramco's business area deep-dives.**

- Background: `--white`, with a `--tenetx-light` (`#EBF3FC`) card area
- Label: `TENETX` in Bebas Neue (48px, `--tenetx-primary`) + `SUBSIDIARY · OIL & GAS INTELLIGENCE`
- Thin steel-blue top rule (3px)

**Two-column layout:**
- Left (50%): Text content
  - Heading: "Physics-Native AI for Drilling Operations" (Cormorant Garamond 42px)
  - Body: Drawn from TENETX proposal — description of the system
  - 3 key bullets with checkmark icons:
    - ✓ 100% Air-Gapped — Data never leaves the rig
    - ✓ Error rate below 0.5% (vs 1–5% industry standard)
    - ✓ Cost: ₹0.08/query vs ₹4–8 conventional systems
  - CTA: `Explore TENETX →` (steel blue outlined, circle arrow)

- Right (50%): Feature card with tenetx-light background:
  - Title: "The TENETFlow Model"
  - 5 pipeline steps as numbered rows:
    1. Sensor Data Ingestion
    2. Preprocessing & Normalization
    3. Parallel Model Inference (PINN + SLM + Tree-based)
    4. Weighted Ensemble Fusion
    5. Final Prediction + Uncertainty Bounds
  - Small stat: "₹60,60,000 Project Investment" + "Sub-second Latency"

**Key facts strip (4 columns, tenetx-light bg):**
```
7–8B Parameters | Offline Deployment | SCADA + IoT Integration | AES-256 Security
```

---

## 10. TEXFLOW SUBSIDIARY SECTION

**Same editorial layout — alternating side.**

- Background: `--cream` + `--texflow-light` (`#EAF5F4`) card area
- Label: `TEXFLOW` in Rajdhani bold (48px, `--texflow-primary`) + `SUBSIDIARY · RESEARCH PLATFORM`
- Thin teal top rule (3px)

**Two-column layout (image/card LEFT, text RIGHT — alternated from TENETX):**

- Left (45%): Product screenshot mockup card (paper-white, shadows, like a PDF editor)
  - Shows: Split-view editor with Word on left, LaTeX output on right
  - Small tag: "LIVE PREVIEW"

- Right (55%): Text content
  - Heading: "Word to Publisher-Ready PDF. In Seconds." (Cormorant Garamond 42px)
  - Body: "A 100% deterministic, zero-AI platform that instantly converts Microsoft Word files into perfectly formatted, publisher-compliant LaTeX and PDFs."
  - 3 key bullets:
    - ✓ Zero AI — 100% deterministic, no hallucinations
    - ✓ IEEE, Springer, Elsevier templates built-in
    - ✓ Files auto-purged in 48 hours — full data privacy
  - Pricing preview pill: `From ₹299 / paper`
  - CTA: `Explore TEXFLOW →` (teal outlined)

**Target audience strip:**
```
Researchers  |  PhD Scholars  |  Professors  |  University Departments
```

---

## 11. "OUR SOLUTIONS" — What We Build

**Matches Aramco's "What We Do" editorial card section:**

- Background: `--cream-dark`
- Label: `OUR SOLUTIONS` + heading: "We Build AI That Actually Works in Production"
- 4 large cards, 2×2 grid:
  - Card surface: `--white`, rounded corners 12px, shadow
  - Top: thin gold or accent color rule (3px)
  - Large faded number (01–04) behind the card title (Cormorant Garamond, 10% opacity)
  - Title + 2-line description + `→ Learn more` link

**Cards:**
1. `Agentic AI Systems` — Autonomous agents for complex multi-step workflows
2. `Domain-Specific Models` — Fine-tuned LLMs on your industry data
3. `Intelligent Automation` — End-to-end platforms with intelligent logic layers
4. `Production Monitoring` — Real-time AI observability and reliability

---

## 12. "INDUSTRIES WE SERVE"

- Background: `--white`
- Label + heading: "Designed for High-Impact Industries"
- 4 full-height image cards in a horizontal row (same pattern as Section 6 cards)
- Rounded corners 16px, image with dark gradient overlay
- Card label top-left + title bottom-left + circular `→`

**Industries:** E-commerce | Healthcare | Real Estate | Legal

---

## 13. OUR PROCESS

- Background: `--gray-light`
- Label: `THE PROCESS` + heading: "A Systematic Approach to Production AI"
- Horizontal timeline, 3 nodes connected by a thin gold dashed line
- Each node:
  - Gold outlined circle with number (01, 02, 03) — Cormorant Garamond
  - Title (Cormorant Garamond 24px)
  - 2-sentence description (Plus Jakarta Sans)
- Steps: Discovery & Strategy → Development & Integration → Deployment & Scale

---

## 14. BOARD OF DIRECTORS

**Exactly like Aramco's "Our Corporate Management Team" section:**

- Background: `--gray-light`
- Label: `OUR LEADERSHIP`
- Heading: "The Team Behind ARQAYAA" (Cormorant Garamond 42px)
- Body: "Our founding team brings expertise across AI systems, petroleum engineering, academic research, and strategic leadership."

**4 board member cards (horizontal row):**

Each card (white, rounded 12px, shadow):
- Top: Square portrait photo (placeholder — user will provide)
  - Photo area: 100% width, aspect-ratio 1:1, object-fit cover, rounded top
- Below (card body, padded):
  - Name: Cormorant Garamond 600, 22px, dark
  - Title/Role: Rajdhani 600, 11px, gold, ALL CAPS
  - 1-line bio (Plus Jakarta Sans 14px, muted)
  - `→ Read more` link (gold)

**Board Members:**
```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   [PHOTO]       │  │   [PHOTO]       │  │   [PHOTO]       │  │   [PHOTO]       │
│                 │  │                 │  │                 │  │                 │
│ Neel Khairnar   │  │ Vedant Jadhav   │  │ Pritam Lalvani  │  │ Dr. Bharat Kale │
│ FOUNDER         │  │ CO-FOUNDER      │  │ DIRECTOR,       │  │ DIRECTOR,       │
│                 │  │                 │  │ STRATEGIC LEAD  │  │ ADVISOR         │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘
```

*Note: Board member photos and bios to be added when provided.*

---

## 15. "WHY ARQAYAA" — Differentiators

- Background: `--white`
- Two-column:
  - Left: Label + heading "Why ARQAYAA?" + 4 differentiator rows
    Each: small gold `—` dash + bold title + description
    1. Production-First Mindset
    2. Domain Intelligence
    3. Seamless Integration
    4. Agentic Logic

  - Right: Large pull quote in Cormorant Garamond italic, 28px:
    *"We bridge the gap between AI hype and business reality with systems that are reliable, secure, and deeply integrated."*
    — thin gold left border (4px)

---

## 16. FINAL CTA BANNER

- Background: `--cream-dark`
- Centered layout
- Thin gold rule above
- Heading: "Ready to Transform Your Business with AI?" (Cormorant Garamond 52px)
- Subline: "Let's build something powerful together." (Plus Jakarta Sans 18px, muted)
- CTA button: `Book A Free Call` — gold filled, Rajdhani 600 ALL CAPS
  Link: `https://arqaya.vercel.app/book-call`

---

## 17. FOOTER

**Exactly Aramco's footer structure — clean, structured, no clutter:**

- Background: `#1A1A1A` (near-black)
- Text: `#AAAAAA`
- Top: thin gold 1px rule

**4-column layout:**

Col 1: Brand
- `ARQAYAA` wordmark (white, Cormorant Garamond)
- `Intelligence Pvt Ltd` (Rajdhani, small)
- Tagline: "Building the future of autonomous enterprise."
- Subsidiary badges (pill chips):
  - [TENETX] steel-blue pill
  - [TEXFLOW] teal pill

Col 2: Company
- About Us
- What We Do
- Our Process
- Careers

Col 3: Subsidiaries
- TENETX — Oil & Gas AI
- TEXFLOW — Research Platform

Col 4: Contact
- info@arqaya.com
- India
- Book A Free Call →

**Bottom bar:**
- Left: `© 2026 ARQAYA Intelligence Pvt Ltd. All rights reserved.`
- Right: Social icons — LinkedIn · Twitter/X
- Separated by thin `rgba(255,255,255,0.1)` top border

---

## 18. Interaction & Motion Spec

| Element | Behavior | Duration | Easing |
|---------|----------|----------|--------|
| Hero slideshow | Crossfade between slides | 0.8s | ease-in-out |
| Hero tab strip | Active gold underline slides | 0.3s | ease |
| Slide auto-advance | Every 6 seconds | — | — |
| Section labels | Fade + slide up on scroll | 0.4s | ease-out |
| Editorial cards | Shadow deepens + lift on hover | 0.25s | ease |
| Stats numbers | Count-up when in viewport | 1.8s | ease-out |
| Circular arrow CTA | Rotates 45° + border fills on hover | 0.2s | ease |
| Board cards | Lift + shadow on hover | 0.2s | ease |
| Subsidiary sections | Slide in from side on scroll | 0.5s | ease-out |
| Navigation dropdown | Slides down, fade in | 0.2s | ease |

---

## 19. Component Specs

### Circular Arrow CTA (Aramco style)
```css
.cta-circle {
  width: 48px;
  height: 48px;
  border: 1.5px solid currentColor;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* On hover: background fills with gold, arrow rotates */
```

### Section Label
```css
.section-label {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 12px;
}
.section-label::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: var(--gold-rule);
}
```

### Editorial Image Card
```css
.editorial-card {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 3/4;
  cursor: pointer;
}
.editorial-card-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%);
}
/* Hover: overlay darkens slightly, arrow animates */
```

### Primary Button
```css
.btn-primary {
  background: var(--gold);
  color: #FFFFFF;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 14px 32px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--gold-light); }
```

### Subsidiary Card
```css
.subsidiary-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-top: 3px solid var(--tenetx-primary); /* or texflow */
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 12px var(--shadow);
  transition: box-shadow 0.25s, transform 0.25s;
}
.subsidiary-card:hover {
  box-shadow: 0 8px 32px var(--shadow-hover);
  transform: translateY(-4px);
}
```

---

## 20. Responsive Behavior

| Breakpoint | Key Changes |
|------------|-------------|
| `> 1280px` | Full layout, 4-col board, horizontal timeline |
| `1024–1280px` | Slight padding reduction, still multi-col |
| `768–1024px` | 2-col grids, board wraps to 2×2 |
| `< 768px` | Single column, hero tabs collapse to dots, board stacks vertically, hero text 40px |

---

## 21. What Makes This "Aramco-Level White"

1. **Cream base, not pure white** — `#F7F5F0` background is warmer, more premium than `#FFFFFF`
2. **Section labels with gold rules** — Every section opens with a small label + thin gold rule
3. **Cormorant Garamond** — Gives editorial gravitas normally reserved for luxury print
4. **Circular arrow CTAs** — The signature Aramco interaction pattern
5. **Tab-controlled hero slideshow** — Not a generic carousel — tabs are labeled content anchors
6. **Generous negative space** — Sections don't fight each other; every element has room
7. **3-column stats in gray** — The "At a glance" pattern is immediately recognizable
8. **Board section like Aramco leadership** — Photo + role + name, professional grid
9. **Two distinct subsidiary sections** — Each has its own color identity within the system
10. **Footer utility bar + main footer** — Two-tier footer exactly like Aramco

---

## 22. Company Information Reference

**ARQAYAA INTELLIGENCE PVT LTD**
- Email: info@arqaya.com
- Country: India
- Booking: https://arqaya.vercel.app/book-call
- Mission: AI solutions for industries and society

**TENETX — Subsidiary 1 (Oil & Gas)**
- Full name: TENETx Industrial Oil & Gas AI
- Core product: TENETFlow Model — on-premise AI for drilling optimization
- Key tech: Physics-Informed Neural Networks (PINNs), Small Language Models (7–8B params), Agentic AI
- Key value: 100% air-gapped, <0.5% error rate, ₹0.08/query, SCADA/IoT integration
- Investment: ₹60,60,000 project scope

**TEXFLOW — Subsidiary 2 (Research Platform)**
- Full name: TEXFLOW Automated Typesetting Compliance Platform
- Core product: Word → LaTeX → PDF conversion engine
- Key tech: Deterministic XML parsing, Jinja2 template mapping, Docker cloud compilation
- Key value: Zero AI, zero hallucinations, IEEE/Springer/Elsevier templates, 48-hour data purge
- Pricing: Freemium | ₹299–499/paper | ₹999–1499/year | B2B institutional
- Audience: Researchers, PhD Scholars, Professors (India-first)

**Board of Directors:**
- **Neel Khairnar** — Founder
- **Vedant Jadhav** — Co-Founder
- **Pritam Lalvani** — Director, Strategic Lead
- **Dr. Bharat Kale** — Director, Advisor

*(Photos and detailed bios to be provided by client for insertion into board section)*

---

*ARQAYAA Intelligence Pvt Ltd — Gemini Design Document v1 — © 2026*
*Professional White & Cream Edition | Aramco-Inspired Editorial Enterprise*
