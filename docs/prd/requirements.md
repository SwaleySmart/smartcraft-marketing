# Requirements

## Functional

* **Collections**: `pages` (replicator-based Page Builder), `posts` (Bard).
* **Globals**: Header, Footer, SEO defaults.
* **Blocks**: Full library (Hero, Packages, Comparison, Anti-WP, SMART, DevOps, Analytics, SEO, PPC, Competitor, Case Studies, Estimator, Contact, Trust, Thought Leadership, Compliance, Company, etc.).
* **Forms**: Statamic forms, spam protection, CRM/webhook ready.

## Technical

* **Backend**: Laravel 12 + Statamic (latest stable).
* **Frontend**: Inertia.js + Vue 3 (latest) + Vite (latest) + Tailwind (latest).
* **Tooling**: PostCSS/Autoprefixer, TypeScript + Volar (optional).
* **CI/CD**: GitHub Actions, preview builds, zero-downtime deploys.
* **Hosting**: Forge/Vapor or cloud provider; CDN + object storage.
* **Perf targets**: LCP < 2.5s, INP < 200ms, CLS < 0.05.
* **Accessibility**: WCAG 2.2 AA.
* **Analytics**: PostHog-first, GA4 excluded.
* **Dependency policy**: Always latest stable; Dependabot/renovate monthly.

## Content

* **Packages**: Launch / Growth / Dominate + Add-ons.
* **Process**: SMART.
* **Narratives**: AI, anti-agency, anti-WordPress, enterprise-grade.

## UI/UX Feel & Design

* **Visual style**: futuristic, bold, minimal clutter, dark/light modes.
* **Tone**: disruptive but credible, anti-agency personality.
* **Design language**: grid-based layouts, rounded corners, soft shadows, Tailwind utility-first.
* **Animations**: Framer Motion-like transitions, smooth Inertia navigations, accessible reduced-motion fallbacks.
* **Component system**: shared atoms (buttons, sections, cards, metrics) → blocks → pages.
* **Accessibility baked in**: semantic HTML, ARIA roles, focus management between Inertia navigations.
* **Conversion-first UX**: sticky CTAs, ROI calculator, eligibility quiz, package comparison, inline scheduling.
* **Trust signals**: case studies, testimonials, performance charts.
* **Futurism cues**: data motifs, network/agent graphics, subtle motion backgrounds.