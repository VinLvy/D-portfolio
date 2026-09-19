# Davin P F — Developer Portfolio // [OBSIDIAN_TERMINAL_v2.6]

A high-performance personal developer portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Designed using the **Obsidian Terminal Editorial (Technical Brutalism)** design system—prioritizing high-density data presentation, authoritative typography, sharp 0px geometry, and precision engineering over superficial decoration.

---

## ⚡ Design Philosophy: Technical Brutalism

- **Obsidian Tonal Palette:** Base background (`#131313`), deep surface layers (`#0e0e0e`, `#1c1b1b`, `#201f1f`), and 1px structural borders (`#222222`).
- **Terminal Green Accents (`#00FF41`):** Strategically reserved for active navigation, system status beacons, terminal prompts, and critical metrics.
- **Strict 0px Sharp Geometry:** Enforced 0px border-radius across all containers, cards, buttons, frames, and interactive components.
- **Heavyweight Editorial Typography:** `Geist Sans` for bold, authoritative headlines paired with `Geist Mono` for technical specifications, code metadata, and data grids.
- **Flat Elevation & High Contrast:** Depth established through tonal shifts and white space rather than blur effects or heavy drop shadows.

---

## 🗺️ Architecture & Features

### 1. Global Terminal Header
- Fixed-top terminal bar with system identifier (`[ DAVIN_PF // SYS_v2.6 ]`).
- Monospace navigation items (`[ 01 // HOME ]`, `[ 02 // ABOUT ]`, `[ 03 // PROJECTS ]`) with active state tracking.
- Live status indicator: `● STATUS: OPEN_TO_WORK`.
- Custom geometric **"D"** Terminal Favicon SVG.

### 2. Home Page (`/`)
- **System Identity Dossier:** Technical metadata header, bold display headline, profile image in a sharp frame with corner crosshairs (`[ + ]`), and a live terminal status monitor.
- **Key Metrics Data Grid:** Strict 4-column statistical table displaying verified milestones (`20+ Projects`, `15+ Tech Stack`, `03+ Years`, `100% Code Integrity`).
- **The Toolbox:** Categorized technical spec cards with terminal proficiency ratings (`[100%]`, `[80%]`, `★★★★★`).
- **Deployment Logs:** Editorial table layout of verified commercial engagements and milestones.
- **Transmission Channels:** Brutalist contact cards with hover inversion (GitHub, LinkedIn, Instagram, Email).

### 3. About Page (`/about`)
- **Personnel Dossier Header:** Authoritative bio banner with quick resume download and GitHub links.
- **Sticky Monospace Table of Contents:** Left-sidebar scroll-spy navigation tracking active sections (`#about`, `#skills`, `#experience`, `#education`, `#interests`).
- **Skill Matrix:** Categorized technical grid (Frontend, Backend, Database, Tools, Web3) with percentage badges and terminal meter bars (`[██████████]`).
- **Production & Academic History:** Chronological records for Elecomp Indonesia and SMKN 1 Boyolangu.
- **Focus Domains:** Technical tags for UI/UX architecture, Web3, LLM applications, and open source.

### 4. Projects Showcase (`/projects`)
- Comprehensive dossier showcase of 6 verified production builds:
  1. **BatikChain:** Ethereum ERC-721 product provenance platform (National Finalist Infinity Hackathon OJK 2025, OWASP Audited).
  2. **ReLife RPG:** AI-powered gamified life tracker powered by Google Gemini 2.5 Flash and real-time Radar Chart.
  3. **AntiFlow:** Decoupled AI content automation pipeline using Gemini 2.5 Flash + Edge TTS at $0/mo infrastructure cost.
  4. **Point of Sales System:** Full-stack Laravel 11 platform with automated queued PDF/CSV report generation and Spatie RBAC.
  5. **Company Profile Websites:** 8× commercial client deployments in CodeIgniter 4 with 90+ Lighthouse score and +25% SEO visibility.
  6. **Technology Landing Page:** High-performance firm showcase with 98.6 performance index and 100% accessibility.
- Impact metrics grid, architectural highlights, and direct repository execution links.

### 5. Special Pages
- **404 Route (`/_not-found`):** Kernel Panic / Route Error console interface.
- **Maintenance (`/maintenance`):** System migration and kernel upgrade terminal screen.

---

## 💻 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Typography** | `Geist Sans` & `Geist Mono` (via `next/font/google`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Analytics** | `@vercel/analytics` & `@vercel/speed-insights` |

---

## 📂 Project Structure

```text
d-portfolio/
├── public/
│   ├── icons/                  # Tech stack vector assets
│   ├── images/                 # Production project screenshot assets
│   ├── favicon.svg             # Geometric "D" terminal favicon
│   └── DavinPutraFibrian-Resume.pdf
├── src/
│   ├── app/
│   │   ├── about/              # About & skill matrix route
│   │   ├── maintenance/        # Maintenance console route
│   │   ├── projects/           # Projects catalog showcase route
│   │   ├── globals.css         # Obsidian Terminal CSS tokens & resets
│   │   ├── icon.svg            # Next.js App Router dynamic favicon
│   │   ├── layout.js           # Root layout with Geist font loading
│   │   ├── not-found.js        # 404 Kernel Panic route
│   │   └── page.js             # Main landing page
│   ├── components/
│   │   ├── navbar.js           # Terminal header & mobile drawer
│   │   └── SectionLabel.js     # Technical brutalist section tag
│   └── lib/
│       └── cn.js               # Classnames utility
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18.18.0 or higher recommended)
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VinLvy/D-portfolio.git
   cd D-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📡 Transmission & Contacts

- **GitHub:** [VinLvy](https://github.com/VinLvy)
- **LinkedIn:** [Davin Putra Fibrian](https://www.linkedin.com/in/davinpfbrn/)
- **Instagram:** [@davin.fbrn](https://instagram.com/davin.fbrn)
- **Email:** [davinfibrian@gmail.com](mailto:davinfibrian@gmail.com)

---

&copy; 2026 **Davin Putra Fibrian**. Built with Next.js 15 & Framer Motion.