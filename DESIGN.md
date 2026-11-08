# `design.md` — Davin Putra Fibrian Portfolio Design System

**Version:** 2.4.0  
**Status:** Production-Ready Specification  
**Design Paradigm:** High-Craft Industrial Precision (Linear / Raycast / Vercel Aesthetic)  
**Target Subject:** Davin Putra Fibrian — Full-Stack Developer, Automation Engineer & SRE  

---

## 1. Design Philosophy & Guardrails

### 1.1 "High-Craft Industrial Precision"
The interface is engineered to feel like a mission-critical developer tool or an industrial hardware controller—not a marketing brochure. It treats engineering case studies, cloud architecture diagrams, and national competition proofs as first-class data objects. 

### 1.2 Core Tenets
1. **Structural Honesty:** Borders define boundaries (`1px solid`), not heavy drop shadows or glowing blurs. Every line on the screen serves either to group related data or separate distinct functional zones.
2. **Information Density with Breathing Room:** High data density inside cards (latency metrics, stack tags, architectural topology) paired with generous macro-whitespace around section blocks.
3. **Subtle Tactility:** Micro-interactions mimic physical mechanical switches—instantaneous feedback (`100ms–150ms`), hairline border illumination on hover, and crisp tabular numbers.

### 1.3 Strict Anti-Patterns (Enforced via PR Review)
* **NO Cyberpunk / Sci-Fi LARPing:** Zero neon cyan/magenta gradients, zero fake HUD brackets (`[SYSTEM_ONLINE]`), zero matrix rain or particle WebGL backgrounds.
* **NO Vanity Metrics:** No `95% Python` progress bars, no star ratings for skills, and no arbitrary counter grids (`999+ Cups of Coffee`). Show engineering competency through verified architecture diagrams, RPS/latency benchmarks, and national competition awards.
* **NO Heavy Glassmorphism:** Avoid multi-layered translucent blurred cards floating over colorful blobs. Stick to solid or near-solid (`95%` opacity) Zinc/Obsidian surfaces.

---

## 2. Design Tokens

### 2.1 Color Palette (Dark-Mode Native / Obsidian Scale)
The palette relies on an ultra-low-saturation Zinc/Obsidian monochromatic foundation. Color is used strictly as a semantic signal, never as decoration.

| Token Name | CSS Variable | Hex / Value | Usage Specification |
| :--- | :--- | :--- | :--- |
| **Surface / Canvas** | `--bg-canvas` | `#09090b` | Root `<body>` background. Deepest layer. |
| **Surface / Primary** | `--bg-surface-1` | `#121214` | Default card background, timeline containers, code blocks. |
| **Surface / Elevated** | `--bg-surface-2` | `#18181b` | Hover state for interactive cards, active filter pills, modal surfaces. |
| **Surface / Glass** | `--bg-glass` | `rgba(18, 18, 20, 0.85)` | Sticky top navigation bar only (paired with `backdrop-filter: blur(12px)`). |
| **Border / Subtle** | `--border-subtle` | `#27272a` | Structural grid hairlines, default card borders, section dividers. |
| **Border / Focus** | `--border-focus` | `#3f3f46` | Card hover borders, active input outlines, keyboard focus rings. |
| **Border / Specular** | `--border-specular` | `rgba(255, 255, 255, 0.07)` | `1px` top-edge inner highlight on primary buttons and elevated cards. |
| **Text / Primary** | `--text-primary` | `#f4f4f5` | H1–H3 headings, project titles, metric values, active nav links. |
| **Text / Secondary** | `--text-secondary` | `#a1a1aa` | Body prose, case study descriptions, timeline bullet points. |
| **Text / Muted** | `--text-muted` | `#71717a` | Timestamps, commit hashes, image captions, inactive filter labels. |
| **Accent / Emerald** | `--accent-primary` | `#10b981` | **Precision Emerald:** Live deployment indicators, SRE uptime badges, verified links. |
| **Accent / Emerald Dim**| `--accent-primary-dim`| `rgba(16, 185, 129, 0.12)`| Background fill for status pills and verified credential tags. |
| **Signal / Amber** | `--signal-award` | `#f59e0b` | **Signal Amber:** Reserved strictly for National Finalist/Winner badges (OJK, BMNC). |
| **Signal / Blue** | `--signal-arch` | `#3b82f6` | System architecture callouts, cloud provider tags (GCP / AWS). |

### 2.2 Typography System
We pair a hyper-legible neo-grotesque sans-serif for narrative clarity with a sharp technical monospace font for metadata, metrics, and architectural labels.

```css
:root {
  --font-sans: 'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
}
```

#### Typographic Scale & Rules
| Element / Role | Font Family | Size (`rem`/`px`) | Line Height | Weight | Tracking | OpenType Features |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `--font-sans` | `2.5rem` (40px) | `1.15` | `600` (SemiBold)| `-0.03em` | `'ss01' on, 'cv01' on` |
| **H1 / Page Title** | `--font-sans` | `2.0rem` (32px) | `1.20` | `600` (SemiBold)| `-0.025em`| `'ss01' on` |
| **H2 / Section Header**| `--font-sans` | `1.25rem` (20px) | `1.35` | `500` (Medium) | `-0.015em`| Default |
| **H3 / Card Title** | `--font-sans` | `1.0rem` (16px) | `1.40` | `500` (Medium) | `-0.01em` | Default |
| **Body / Prose** | `--font-sans` | `0.9375rem` (15px)| `1.65` | `400` (Regular) | `0em` | Default |
| **UI Label / Button** | `--font-sans` | `0.8125rem` (13px)| `1.00` | `500` (Medium) | `0.01em` | Default |
| **Mono / Tag & Metric**| `--font-mono` | `0.75rem` (12px) | `1.40` | `400` (Regular) | `0em` | `font-variant-numeric: tabular-nums` |
| **Mono / Micro-Meta** | `--font-mono` | `0.6875rem` (11px)| `1.20` | `500` (Medium) | `0.04em` | `uppercase`, `tabular-nums` |

---

## 3. Layout, Grid & Spatial Architecture

### 3.1 The Structural Blueprint ("Exposed Hairline Grid")
Inspired by Linear and Vercel's architectural documentation, the layout uses a centered container (`max-width: 1080px`) flanked by continuous vertical `1px solid var(--border-subtle)` structural rails on desktop viewports. Horizontal `1px` hairlines span across sections to create a blueprint-like cadenced rhythm.

```
Viewport
  │      ┌─────────────────────── max-width: 1080px ───────────────────────┐
  │      │ 1px Rail                                               1px Rail │
──┼──────┼─────────────────────────────────────────────────────────────────┼──────┼── 1px Horizontal Hairline
  │      │  [SECTION: 01 // SELECTED SYSTEMS]                              │      │
──┼──────┼─────────────────────────────────┬───────────────────────────────┼──────┼── 1px Horizontal Hairline
  │      │                                 │                               │      │
  │      │  Card 01 (6 Cols)               │  Card 02 (6 Cols)             │      │
  │      │  FastAPI / Laravel Microservice │  Cloud-Native SRE Pipeline    │      │
  │      │                                 │                               │      │
──┼──────┴─────────────────────────────────┴───────────────────────────────┴──────┼── 1px Horizontal Hairline
```

### 3.2 Grid & Spacing Specifications
* **Container Width:** `1080px` maximum, `24px` horizontal padding on mobile (`< 768px`), `48px` on tablet/desktop.
* **Columns:** 12-column CSS Grid (`grid-template-columns: repeat(12, minmax(0, 1fr))`).
* **Grid Gap:** `16px` (`1rem`) for high-density credential grids; `24px` (`1.5rem`) for primary project case study cards; `1px` background-bleed gap when using structural hairline bento layouts.
* **Spacing Scale (4px / 8px Base Rhythm):**
  * `space-1`: `4px` (Inline icon-to-text gap)
  * `space-2`: `8px` (Tag group gaps, tight vertical stacks)
  * `space-3`: `12px` (Internal card padding — compact)
  * `space-4`: `16px` (Standard element margin)
  * `space-6`: `24px` (Internal card padding — standard)
  * `space-8`: `32px` (Sub-section separation)
  * `space-12`: `48px` (Major section internal vertical padding)
  * `space-16`: `64px` (Macro section breaks)

### 3.3 Micro-Interaction & Motion Physics
* **Timing Function:** `cubic-bezier(0.16, 1, 0.3, 1)` (Custom snappy ease-out) for layout shifts and modals; `ease-out` for color/border transitions.
* **Duration:** `150ms` for hover states (borders, backgrounds, text brightening); `0ms` for active press states (`transform: translateY(1px)`).
* **No Scroll-Jacking:** Native browser scrolling strictly preserved. No heavy scroll-triggered opacity fade-ins that delay reading.

---

## 4. Page & Component Blueprints

### 4.1 Global Navigation Bar (`<Navbar />`)
A minimal, low-profile command header fixed to the top of the viewport.

```
+-----------------------------------------------------------------------------------+
| [DPF] Davin Putra Fibrian          / (Overview)   /projects   /credentials   [⌘K] |
+-----------------------------------------------------------------------------------+
```

* **Height:** `56px` fixed, bottom border `1px solid var(--border-subtle)`, background `var(--bg-glass)`.
* **Left Node:** Monospace monogram badge `[DPF]` (`24x24px`, `#18181b` fill, `#27272a` border) + Full Name in `--text-primary` (`14px`, weight `500`).
* **Right Node (Navigation Links):**
  * `/` (Overview), `/projects` (Systems), `/credentials` (Proof).
  * **Active State:** Text `--text-primary` with a `1px` bottom indicator bar in `--text-primary` sitting directly on the navbar's bottom hairline.
  * **Inactive State:** Text `--text-muted`, transitions to `--text-secondary` on hover (`150ms`).
* **Action Trigger:** Quick-contact button or `⌘K` Command Palette trigger (`border: 1px solid var(--border-subtle)`, `border-radius: 6px`, `padding: 4px 8px`, font `--font-mono`). Pressing `⌘K` opens a Raycast-style modal to copy email, open GitHub, jump to AWS/GCP credentials, or download the CV PDF directly via keyboard.

---

### 4.2 Unified Home & About (`/`)

#### A. Hero Section (`<HeroSection />`)
Designed for immediate clarity within 3 seconds of landing. Zero fluff.

```
+-----------------------------------------------------------------------------------+
|  [● AVAILABLE FOR SRE / PLATFORM / FULL-STACK ROLES]               LOC: ID / UTC+7|
|                                                                                   |
|  Davin Putra Fibrian                                                              |
|  Full-Stack & Site Reliability Engineer building fault-tolerant                   |
|  microservices, cloud automation, and practical AI systems.                       |
|                                                                                   |
|  Architecting high-throughput backends with FastAPI & Laravel 11 on GCP/AWS.      |
|  National Finalist at OJK Fintech Hackathon 2025 & BMNC 2026.                     |
|                                                                                   |
|  [ ↓ Download CV (PDF) ]  [ GitHub ↗ ]  [ LinkedIn ↗ ]  [ copy: email@domain ]    |
+-----------------------------------------------------------------------------------+
```

* **Status Pill:** `display: inline-flex`, `align-items: center`, `gap: 8px`, `padding: 4px 10px`, `border-radius: 9999px`, `background: var(--accent-primary-dim)`, `border: 1px solid rgba(16, 185, 129, 0.25)`. Contains a `6px` circle in `--accent-primary` with a subtle CSS opacity pulse (`3s infinite ease-in-out`). Text in `--font-mono`, `11px`, `--accent-primary`.
* **Headline:** `--text-primary` for name and core engineering identity; `--text-secondary` for the supporting value proposition sentence (Vercel-style dual-tone typography within a single block).
* **Primary CTA (`Download CV`):** Solid high-contrast button (`background: #f4f4f5`, `color: #09090b`, `font-weight: 500`, `font-size: 13px`, `padding: 8px 14px`, `border-radius: 6px`). Hover dims to `#e4e4e7`.
* **Secondary CTAs (`GitHub`, `LinkedIn`, `Copy Email`):** Ghost/Surface buttons (`background: var(--bg-surface-1)`, `color: var(--text-primary)`, `border: 1px solid var(--border-subtle)`, `padding: 8px 12px`, `border-radius: 6px`). Clicking `Copy Email` swaps the icon to an Emerald checkmark (`#10b981`) and text to `Copied to clipboard` for `2000ms`.

#### B. Technical Architecture & Domain Matrix (`<DomainBar />`)
Replaces juvenile "skill bars" with an industrial capability ledger directly below the Hero.

| Column 1: Backend & Microservices | Column 2: Cloud & SRE Infrastructure | Column 3: Applied AI & Automation | Column 4: Business & Product Execution |
| :--- | :--- | :--- | :--- |
| FastAPI (Async Python), Laravel 11, REST/gRPC, Redis Caching, PostgreSQL | Google Cloud (GKE, Cloud Run), AWS (EC2, S3, IAM), Docker, CI/CD, Prometheus/Grafana | LLM Orchestration, RAG Pipelines, Automated Workflows, Webhook Brokers | System Design, FinTech Compliance (OJK), Technical Case Analysis (BMNC) |

* **Styling:** 4-column hairline grid (`1px solid var(--border-subtle)`). Column headers in `--font-mono` (`11px`, `--text-muted`, uppercase). Items listed as clean comma-separated prose or tight pill tags in `--text-secondary`.

#### C. Selected Case Studies Preview (`<SystemCard />`)
Displays the top 3 flagship engineering systems in a 1-column or 2-column Bento layout before linking out to `/projects`.

```
+-----------------------------------------------------------------------------------+
|  SYS-01 // ENTERPRISE MICROSERVICES                          [● LIVE PRODUCTION]  |
|  Distributed E-Supply Chain & Inventory Automation Engine                         |
|  Decoupled monolithic ERP bottlenecks by engineering an asynchronous event-driven |
|  pipeline bridging Laravel 11 core services with FastAPI worker nodes.            |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | [Client] ──► [Cloudflare] ──► [Laravel 11 API] ──► [Redis Queue] ──► [FastAPI]|  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
|  IMPACT METRICS                                                                   |
|  • 99.95% Uptime SLA on GCP Cloud Run     • -64% P95 API Latency under load       |
|                                                                                   |
|  [FastAPI] [Laravel 11] [Docker] [GCP]             [Read Architecture Spec ➔]     |
+-----------------------------------------------------------------------------------+
```

* **Card Surface:** `background: var(--bg-surface-1)`, `border: 1px solid var(--border-subtle)`, `border-radius: 8px`, `padding: 24px`.
* **Interactive State:** On hover, border transitions to `var(--border-focus)` (`#3f3f46`), top specular edge brightens, and `[Read Architecture Spec ➔]` arrow translates `3px` right (`150ms ease-out`).
* **Inline Architecture Schematic:** Instead of generic laptop mockups, each card embeds a crisp SVG or ASCII/CSS box-and-arrow system topology block (`background: var(--bg-canvas)`, `border: 1px solid var(--border-subtle)`, `padding: 12px`, `border-radius: 6px`, `--font-mono` `11px`).

#### D. Career, Research & Competition Log (`<ChronicleTimeline />`)
A unified chronological ledger merging commercial software engineering internships, academic/industrial research (*Asisten Dosen* / E-SCM Research), and national competition milestones.

```
  2025 — PRESENT   ●  Research Assistant & Systems Developer (E-SCM Lab)
  │                   Industrial Supply Chain Research • Surabaya, ID
  │                   Engineered automated data ingestion and supply chain simulation
  │                   modules. Mentored 40+ undergraduate practitioners in systems design.
  │                   [Laravel 11] [Python] [Supply Chain Modeling]
  │
  NOV 2025         ◆  National Finalist — OJK Fintech Hackathon 2025
  │                   Otoritas Jasa Keuangan (Indonesia Financial Services Authority)
  │                   Architected a high-availability financial inclusion & fraud-detection
  │                   prototype evaluated by national banking regulators.
  │                   [View Award Proof ↗]
```

* **Visual Mechanics:** Left column (`140px` wide on desktop) displays tabular dates in `--font-mono` (`12px`, `--text-muted`). Right column houses the content connected by a continuous `1px solid var(--border-subtle)` vertical rail.
* **Node Markers:**
  * `8px` circle (`#27272a` fill, `#71717a` border) for standard career/research roles.
  * `8px` emerald circle (`--accent-primary`) for current active positions.
  * `8px` amber diamond (`--signal-award`) for National Finalist achievements (BMNC 2026, OJK 2025).

---

### 4.3 Dedicated `/projects` Page (Systems Catalog)

A high-density engineering index built for technical recruiters and Staff/Principal engineers reviewing Davin's work.

#### A. Filter & Search Control Bar
```
+-----------------------------------------------------------------------------------+
|  [All Systems (12)]  [Enterprise & SRE (5)]  [Applied AI (4)]  [Web3 / FinTech (3)]|
+-----------------------------------------------------------------------------------+
```
* **Filter Pills:** Segmented control bar (`background: var(--bg-surface-1)`, `padding: 4px`, `border-radius: 8px`, `border: 1px solid var(--border-subtle)`).
* **Active Tab:** `background: var(--bg-surface-2)`, `color: var(--text-primary)`, `border: 1px solid var(--border-focus)`, `border-radius: 5px`. Count badge rendered in `--font-mono` (`11px`, `--text-muted`).

#### B. System Architecture Callout Drawer / Modal
Clicking any project card on `/projects` either expands an inline accordion or opens a slide-over sheet (`640px` width) containing strict engineering documentation:
1. **Problem & Constraints:** Throughput bottlenecks, legacy failure modes, or regulatory compliance requirements.
2. **System Topology:** Full-width dark-mode Mermaid.js / SVG architecture diagram showing load balancers, FastAPI/Laravel boundaries, databases, and cloud VPCs.
3. **SRE & Reliability Notes:** CI/CD pipeline structure, containerization strategy, observability hooks, and fallback handling.
4. **Verification Links:** Direct links to GitHub repository, live deployment health-check endpoint, or Swagger/OpenAPI docs.

---

### 4.4 Dedicated `/credentials` Page ("The Wall of Proof")

Engineered to showcase physical and digital proof of capability—trophies, competition stage photos, official plaques, and cloud engineering badges—without looking like a cluttered photo album.

#### A. Section Hierarchy
1. **Tier 1: National Honours & Competition Finalists** (2-column large feature cards: OJK Fintech Hackathon 2025, BMNC 2026).
2. **Tier 2: Cloud Infrastructure & SRE Certifications** (3-column medium cards: AWS Certified / Google Cloud Skill Badges).
3. **Tier 3: Academic & Industrial Recognition** (3-column compact ledger: Research grants, Asdos appointments, speaker/mentor certificates).

#### B. `<ProofCard />` Component Specification

```
+-------------------------------------------------------+
|  +-------------------------------------------------+  |
|  |                                                 |  |
|  |       [HIGH-RES PHOTO / TROPHY / PLAQUE]        |  |
|  |       (16:10 Aspect Ratio, Subtle Vignette)     |  |
|  |                                                 |  |
|  |  [★ NATIONAL FINALIST]                 [2026]   |  |
|  +-------------------------------------------------+  |
|  BMNC 2026 — National Business & Tech Case Comp       |
|  Issued by Binus / National Committee                 |
|                                                       |
|  Selected among top national teams; spearheaded       |
|  technical feasibility, cloud cost-modeling, and      |
|  scalable system architecture pitch.                  |
|  ---------------------------------------------------  |
|  ID: BMNC-26-FIN-094          [Verify Credential ↗]   |
+-------------------------------------------------------+
```

* **Media Viewport:**
  * Aspect ratio locked at `16:10` (`overflow: hidden`, `border-radius: 6px`, `background: #09090b`, `border: 1px solid var(--border-subtle)`).
  * **Image Treatment:** Real competition photos often have uneven venue lighting. Apply a subtle CSS filter (`contrast(1.04) saturate(0.95)`) and a bottom-up linear gradient overlay (`linear-gradient(to top, rgba(9,9,11,0.8) 0%, transparent 40%)`) so floating metadata badges remain 100% legible.
  * **Hover Zoom:** Image scales gently (`transform: scale(1.02)`, `transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1)`). Clicking opens a zero-chrome high-res Lightbox view.
* **Cloud Badge Variant (GCP / AWS):**
  * Instead of stretching square PNG badges to `16:10`, render the official SVG/PNG badge (`96x96px`) centered inside a technical dot-matrix background (`background-image: radial-gradient(#27272a 1px, transparent 1px); background-size: 12px 12px;`).
* **Metadata Footer:**
  * Separated by a `1px dashed var(--border-subtle)` divider.
  * Left side: Credential ID or Issuing Date in `--font-mono` (`11px`, `--text-muted`).
  * Right side: Direct verification URL (`Credly`, `Google Cloud Skills Boost`, or official PDF decree) in `--text-primary` with an external arrow icon that turns `--accent-primary` (`#10b981`) on hover.

---

## 5. Production CSS & Component State Reference

Below is the reference CSS architecture implementing the tokens, hairline grid, and interactive card states.

```css
/* ==========================================================================
   1. ROOT TOKENS
   ========================================================================== */
:root {
  --bg-canvas: #09090b;
  --bg-surface-1: #121214;
  --bg-surface-2: #18181b;
  --bg-glass: rgba(18, 18, 20, 0.85);

  --border-subtle: #27272a;
  --border-focus: #3f3f46;
  --border-specular: rgba(255, 255, 255, 0.07);

  --text-primary: #f4f4f5;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;

  --accent-primary: #10b981;
  --accent-primary-dim: rgba(16, 185, 129, 0.12);
  --signal-award: #f59e0b;
  --signal-award-dim: rgba(245, 158, 11, 0.12);
  --signal-arch: #3b82f6;

  --font-sans: 'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;

  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ==========================================================================
   2. BASE & RESET
   ========================================================================== */
body {
  background-color: var(--bg-canvas);
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  selection-background-color: var(--accent-primary-dim);
  selection-color: var(--accent-primary);
}

/* ==========================================================================
   3. STRUCTURAL SHELL & HAIRLINE GRID
   ========================================================================== */
.structural-shell {
  max-width: 1080px;
  margin: 0 auto;
  border-left: 1px solid var(--border-subtle);
  border-right: 1px solid var(--border-subtle);
  min-height: 100vh;
}

.section-block {
  border-bottom: 1px solid var(--border-subtle);
  padding: 48px 32px;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

/* ==========================================================================
   4. PRECISION CARD COMPONENT (PROJECTS & CREDENTIALS)
   ========================================================================== */
.precision-card {
  position: relative;
  background-color: var(--bg-surface-1);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 24px;
  box-shadow: inset 0 1px 0 0 var(--border-specular);
  transition: 
    border-color 150ms ease-out,
    background-color 150ms ease-out,
    transform 150ms var(--ease-snappy);
}

.precision-card:hover {
  border-color: var(--border-focus);
  background-color: #141417;
}

.precision-card:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* ==========================================================================
   5. BADGES & TELEMETRY PILLS
   ========================================================================== */
.badge-mono {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: var(--bg-surface-2);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
}

.badge-status-live {
  background-color: var(--accent-primary-dim);
  border-color: rgba(16, 185, 129, 0.3);
  color: var(--accent-primary);
}

.badge-award {
  background-color: var(--signal-award-dim);
  border-color: rgba(245, 158, 11, 0.3);
  color: var(--signal-award);
}
```

---

## 6. Responsive Breakpoint Behavior

| Breakpoint | Viewport Range | Layout & Component Adaptations |
| :--- | :--- | :--- |
| **Desktop (Default)** | `>= 1024px` | Full `1080px` structural rail container. 12-column grid active. 4-column Domain Matrix, 2-column System Cards, 3-column Cloud Credential Grid. |
| **Tablet** | `768px – 1023px` | Outer structural side-rails merge with viewport edges (`padding: 0 24px`). Domain Matrix collapses to `2x2` grid. `/credentials` collapses to 2 columns. |
| **Mobile** | `< 768px` | Single-column vertical flow (`padding: 0 16px`). Timeline dates move above role titles instead of sitting in a left-hand column. Inline ASCII/SVG architecture diagrams enable horizontal touch-scrolling (`overflow-x: auto`) so node labels never wrap or break. |

---

## 7. Implementation Checklist for Engineering Hand-Off

- [ ] **Font Loading:** Self-host `Geist-Variable.woff2` and `GeistMono-Variable.woff2` with `font-display: swap` to eliminate layout shift (CLS = `0.00`).
- [ ] **Tabular Numerals:** Verify `font-variant-numeric: tabular-nums` is active on all SLA percentages (`99.95%`), latency metrics (`-64%`), years (`2025–2026`), and credential serial numbers.
- [ ] **Asset Optimization:** Convert all competition photos (OJK 2025, BMNC 2026) and plaques to `.webp` / `.avif` at `2x` retina resolution with low-res base64 blur-up placeholders (`background: #121214`).
- [ ] **Keyboard Accessibility:** Ensure full `Tab` / `Shift+Tab` traversal across filter pills, project cards, and credential verification links with crisp `1px` focus rings.