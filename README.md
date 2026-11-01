# NextGen Scholars

> **Learn today • Lead tomorrow**  
> Modern, industry-led EdTech platform empowering college students and working professionals to engineer production-ready AI applications.

[![Hugo](https://img.shields.io/badge/Hugo-v0.165+-FF4088?style=for-the-badge&logo=hugo&logoColor=white)](https://gohugo.io/)
[![DevHorizon DLS](https://img.shields.io/badge/DevHorizon%20DLS-v1.0.0-E8EAED?style=for-the-badge&logoColor=111315)](../DLS)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://devhorizon-projects.github.io/NextGenScholar/)

---

## 📖 1. Overview & Vision

**NextGen Scholars** is an online EdTech company providing practical, industry-led training. Rather than focusing on passive lectures or abstract academic theory, our programs emphasize deep, hands-on software building, comprehensive skill grooming, and engineering production systems that contribute directly to the global tech ecosystem.

### Core Philosophy
- **"Learn today • Lead tomorrow"**: Acquiring practical, production-level technical mastery today so learners can lead initiatives, architect systems, and build scalable software tomorrow.
- **Industry Practitioner Faculty**: Sessions led exclusively by practitioners with at least 4 years of production software and AI experience.
- **Project-Centric**: 100% of coursework revolves around code reviews, guided labs, and deploying an end-to-end Capstone Project.

---

## 🛠️ 2. Technology Stack & Architecture

This repository is built using the **Hugo Static Site Generator** paired with the **DevHorizon Design Language System (`@devhorizon/dls`)** as its foundational UI and design library.

| Layer | Technology | Purpose |
|---|---|---|
| **Static Site Engine** | **Hugo** (Extended v0.165+) | Sub-100ms static builds, templating, and automated content pipelines |
| **Design System** | **DevHorizon DLS** (`@devhorizon/dls`) | Luxury dark obsidian (`#111315`) & metallic silver (`#E8EAED`) enterprise design language |
| **Data Layer** | Structured JSON (`data/course.json`, `data/home.json`) | Single source of truth for curricula, pricing, mentors, and FAQs |
| **Interactivity** | Vanilla JS (`static/js/main.js`) | Zero-dependency client logic for enrollment modal, validation, tier selection, and curriculum search |
| **Hosting & CI/CD** | GitHub Pages & GitHub Actions | Automated build and deployment on git push to `main` |

---

## 🎨 3. Using DevHorizon DLS as a Library

The platform strictly consumes the **DevHorizon Design Language System (`@devhorizon/dls`)** from `../DLS`:

### Design Tokens & Palette
- **Primary Canvas**: `#111214` (Deep obsidian dark background)
- **Dark Surface / Cards**: `#17191D` / `#24272B` (Container panels, accordions, and dialogs)
- **White Service Zone**: `#FFFFFF` (High-contrast architectural cards for course showcases)
- **Metallic Chrome Silver**: `#E8EAED` / `#C0C5CC` (Aerospace-grade gradient accents)
- **Brand Gold Accent**: `#C5A253` / `#E6CA83` / `#8D6A2C` (Primary CTA and hallmark badges)
- **Text Primary / Muted**: `#D4D8DE` / `#8E95A0` / `#626873` (High-legibility typography)

### Consumed DLS Classes
- **Layout & Structure**: `.container-dls`, `.dls-section`, `.dls-section-white`, `.dls-grid-2`, `.dls-grid-3`
- **Typography**: `.dls-display-title`, `.dls-section-title`, `.dls-text-metallic`
- **Buttons**: `.dls-btn`, `.dls-btn-lg`, `.dls-btn-sm`, `.dls-btn-silver`, `.dls-btn-secondary`, `.dls-btn-gold`
- **Cards**: `.dls-card-dark`, `.dls-card-white`, `.dls-icon-box`, `.pricing-card-featured`
- **Badges**: `.dls-badge`, `.dls-badge-sm`, `.dls-badge-silver`, `.dls-dot`
- **Header & Footer**: `.dls-header`, `.dls-nav-container`, `.dls-nav-links`, `.dls-footer`

---

## 📁 4. Project Directory Structure

```text
NextGenScholar/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD to GitHub Pages via peaceiris/actions-hugo
├── content/
│   ├── _index.md               # Home Page metadata & routing
│   └── courses/
│       ├── _index.md           # Courses listing metadata
│       └── ai-engineering-generative-ai.md # Flagship Course Page content
├── data/
│   ├── course.json             # Single source of truth for the 72-hour AI Engineering course
│   └── home.json               # Mentors, testimonials, FAQs, and brand data
├── layouts/
│   ├── _default/
│   │   ├── baseof.html         # Master base template linking DLS CSS & JS
│   │   ├── list.html           # Default list template
│   │   └── single.html         # Default single content template
│   ├── courses/
│   │   └── single.html         # Dedicated Course Page layout (Hero, Curriculum, Pricing)
│   ├── partials/
│   │   ├── header.html         # Main site navbar with DLS styling
│   │   ├── course-navbar.html  # Course-specific navbar ("← All Programs", "Pricing", "Enroll")
│   │   ├── footer.html         # Rich footer with links and newsletter dispatch
│   │   └── enroll-modal.html   # Course-specific enrollment modal (AI Engineering only)
│   └── index.html              # Home Page template
├── static/
│   ├── css/
│   │   ├── dls.css             # Official DevHorizon DLS stylesheet library
│   │   └── theme.css           # Custom brand enhancements, modal styles & gold accents
│   ├── js/
│   │   └── main.js             # Client-side modal, tier toggle, validation & search
│   └── images/
│       └── nextgen-scholars-logo.jpg # NextGen Scholars brand logo
├── hugo.toml                   # Primary Hugo configuration
├── package.json                # NPM convenience scripts for Hugo
└── README.md                   # Complete architectural documentation
```

---

## 🚀 5. Flagship Course: AI Engineering & Generative AI

### Course Summary
- **Title**: AI Engineering & Generative AI — Build Real-World AI Applications
- **Tagline**: From AI Fundamentals to Production-Ready Applications
- **Duration**: **72 Planned Hours** across **11 Structured Modules**
- **Schedule**: 8 Weeks (100% Online, Live Sessions & Hands-on Labs)
- **Target Audience**: College students and working technology professionals
- **URL**: [`/courses/ai-engineering-generative-ai/`](https://devhorizon-projects.github.io/NextGenScholar/courses/ai-engineering-generative-ai/)

### 11-Module Curriculum (72 Planned Hours)
1. **Module 01: Python for AI Engineering** (6 Hours)
2. **Module 02: AI and Machine Learning Foundations** (6 Hours)
3. **Module 03: Deep Learning and Neural Network Fundamentals** (5 Hours)
4. **Module 04: Prompt Engineering and Structured Outputs** (5 Hours)
5. **Module 05: LLM APIs and Application Development** (6 Hours)
6. **Module 06: Retrieval-Augmented Generation (RAG)** (10 Hours)
7. **Module 07: AI Agents and Tool Calling** (8 Hours)
8. **Module 08: Backend Development and User Interface Integration** (6 Hours)
9. **Module 09: AI Evaluation, Safety, and Security** (6 Hours)
10. **Module 10: Deployment, Monitoring, and Cost Optimization** (6 Hours)
11. **Module 11: Production Capstone Project** (8 Hours)
- **Total: Exactly 72 Planned Hours**

---

## 💰 6. Pricing & Enrollment Workflow

The course page features a clean, simple pricing section and an enrollment modal **specifically locked to this course**:

### Transparent Pricing Tiers
1. **Early-Bird Admission (₹19,999)**:
   - Limited inaugural cohort offer (**33% OFF** regular ₹29,999 tuition).
   - Includes full 72 hours of live instruction, all 11 modules, coding labs, 4 guided projects, 1-on-1 milestone reviews on the Capstone Project, verified certificate, and Discord community access.
2. **Standard Tuition (₹29,999)**:
   - Full access at standard schedule.

### Dedicated Course-Only Enrollment Modal
- Triggered by clicking any **"Enroll Now"** button on the website or course page.
- **Locked to AI Engineering**: No dropdown or references to other courses.
- Lets applicants switch between **Early-Bird (₹19,999)** and **Standard (₹29,999)** plans.
- Captures:
  - Full Name (validated)
  - Email Address (RFC format validated)
  - Phone Number (10+ digits validated)
  - Learner Profile (*College Student* or *Working Professional*)
  - Current Role / College / Background
  - Primary Learning Goal
  - Cohort consent confirmation
- **Instant Client-Side Feedback**: Generates an enrollment ID (`NGS-AI-XXXXXX`), saves data in `localStorage`, and displays a clean confirmation screen detailing next steps.

---

## 💻 7. Local Development

### Prerequisites
- [Hugo](https://gohugo.io/installation/) (v0.120+ or v0.165+ Extended recommended):
  ```bash
  brew install hugo
  ```

### Running the Dev Server
From the `NextGenScholar/` directory:

```bash
# Using Hugo directly
hugo server --port 1313 --bind 127.0.0.1

# Or using npm
npm run dev
```

Visit the local preview:
- Home Page: `http://localhost:1313/NextGenScholar/`
- Flagship Course Page: `http://localhost:1313/NextGenScholar/courses/ai-engineering-generative-ai/`

---

## 📦 8. Production Build & Deployment

### Build Locally
```bash
# Using Hugo directly
hugo --minify

# Or using npm
npm run build
```
This generates the optimized, production-ready static assets in the `public/` directory in under 100ms.

### GitHub Actions Deployment
The repository includes automated CI/CD in `.github/workflows/deploy.yml`:
1. Triggers on push to the `main` branch.
2. Sets up Hugo Extended via `peaceiris/actions-hugo@v3`.
3. Runs `hugo --minify`.
4. Deploys to GitHub Pages at:  
   **`https://devhorizon-projects.github.io/NextGenScholar/`**

---

## 📄 9. License & Integrity

- **Content & Branding**: © 2026 NextGen Scholars. All rights reserved.
- **Design System**: Built on DevHorizon Design Language System (`@devhorizon/dls`).
- **Integrity Notice**: NextGen Scholars does not promise automated placement guarantees or unverified affiliations. All outcomes represent competencies acquired through active hands-on engineering.
