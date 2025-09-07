# Final Comprehensive PRD: Smartcraft Marketing Website

---

## 1. Context

Smartcraft is a **next-generation marketing and software engineering studio**, positioning itself as the **anti-agency**. It leverages **AI, automation, and agentic systems** to deliver enterprise-grade websites, software, and marketing services at the price point of WordPress agencies — but without the bloat, insecurity, and inefficiency of legacy systems.

The marketing website will:

* Showcase Smartcraft’s positioning as an **AI-native, agentic, enterprise-ready partner**.
* Differentiate against **WordPress shops** and traditional agencies.
* Present **service packages (Launch, Growth, Dominate)**.
* Demonstrate the **SMART process** framework.
* Enable lead generation and client onboarding.

The system will be built with **Laravel 12 + Statamic (latest)** on the backend, **Inertia.js + Vue 3 (latest) + Vite (latest) + Tailwind (latest)** on the frontend.

Supporting documentation:

* `/docs/analyst/` – market research, positioning, packages, messaging
* `/docs/architect/` – system architecture, page builder, block specs
* `/docs/ux/` – wireframes, design system
* `/docs/po/` – backlog refinements, QA checklists

---

## 2. Goals

* 🚀 Establish Smartcraft as the **AI-native anti-agency**.
* 🏗️ Deliver a flexible, scalable **Page Builder**.
* 🔒 Ensure **enterprise-grade security, performance, and DevOps**.
* 📊 Present **packages, SMART process, analytics** in a compelling way.
* 📈 Drive **leads and conversions** via advanced CTAs, estimators, and forms.
* 🎨 Provide a **UI/UX experience** that feels futuristic, credible, and conversion-focused.

---

## 3. Non-Goals

* No gated portals, memberships, or account logins (MVP).
* No multilingual/multisite support initially.
* No custom search engine (use Statamic native first).
* No deep CRM integrations at MVP (basic form → email/webhook).

---

## 4. Messaging Pillars

1. **AI-Native Autonomy** – multi-agent systems > staff aug. “Run by agents, not interns.”
2. **Enterprise Tech, WordPress Pricing** – Laravel + Vue + Statamic; engineered, secure, performant.
3. **10× Efficiency via AI** – one unicorn developer amplified by agents.
4. **Future of Digital Growth** – big data, agent autonomy, speed, experimentation.

---

## 5. SMART Process (Delivery Framework)

**S.M.A.R.T** — end-to-end delivery methodology:

* **S – Sense & Scope**: discovery, constraints, goals → Discovery Brief.
* **M – Model & Map**: PRD + Architecture (IA, data flows, APIs).
* **A – Articulate & Artify**: Lo-fi wireframes → Hi-fi design.
* **R – Realize & Release**: development, DevOps, CI/CD, observability.
* **T – Test & Tune**: QA, perf/a11y, CRO, SEO hardening, analytics feedback.

Outputs: Discovery Brief → PRD → Architecture → Wireframes → Design → Build → QA → Launch → Post-Launch Optimisation.

---

## 6. Information Architecture (Draft)

* **Home** (hero, packages, proof, anti-WordPress, SMART, CTA)
* **Packages** (Launch/Growth/Dominate, Add-ons, comparison)
* **Services** (Engineering, SEO, PPC, Social, Analytics, DevOps)
* **Process** (SMART)
* **Case Studies** (before/after, metrics, stack)
* **Insights** (blog, playbooks, changelog)
* **About** (anti-agency stance, founder)
* **Contact** (RFP form, scheduler)
* **Status** (uptime/incidents – optional)

---

## 7. Requirements

### Functional

* **Collections**: `pages` (replicator-based Page Builder), `posts` (Bard).
* **Globals**: Header, Footer, SEO defaults.
* **Blocks**: Full library (Hero, Packages, Comparison, Anti-WP, SMART, DevOps, Analytics, SEO, PPC, Competitor, Case Studies, Estimator, Contact, Trust, Thought Leadership, Compliance, Company, etc.).
* **Forms**: Statamic forms, spam protection, CRM/webhook ready.

### Technical

* **Backend**: Laravel 12 + Statamic (latest stable).
* **Frontend**: Inertia.js + Vue 3 (latest) + Vite (latest) + Tailwind (latest).
* **Tooling**: PostCSS/Autoprefixer, TypeScript + Volar (optional).
* **CI/CD**: GitHub Actions, preview builds, zero-downtime deploys.
* **Hosting**: Forge/Vapor or cloud provider; CDN + object storage.
* **Perf targets**: LCP < 2.5s, INP < 200ms, CLS < 0.05.
* **Accessibility**: WCAG 2.2 AA.
* **Analytics**: PostHog-first, GA4 excluded.
* **Dependency policy**: Always latest stable; Dependabot/renovate monthly.

### Content

* **Packages**: Launch / Growth / Dominate + Add-ons.
* **Process**: SMART.
* **Narratives**: AI, anti-agency, anti-WordPress, enterprise-grade.

### UI/UX Feel & Design

* **Visual style**: futuristic, bold, minimal clutter, dark/light modes.
* **Tone**: disruptive but credible, anti-agency personality.
* **Design language**: grid-based layouts, rounded corners, soft shadows, Tailwind utility-first.
* **Animations**: Framer Motion-like transitions, smooth Inertia navigations, accessible reduced-motion fallbacks.
* **Component system**: shared atoms (buttons, sections, cards, metrics) → blocks → pages.
* **Accessibility baked in**: semantic HTML, ARIA roles, focus management between Inertia navigations.
* **Conversion-first UX**: sticky CTAs, ROI calculator, eligibility quiz, package comparison, inline scheduling.
* **Trust signals**: case studies, testimonials, performance charts.
* **Futurism cues**: data motifs, network/agent graphics, subtle motion backgrounds.

---

## 8. Block Library (Highlights)

*(as detailed in prior Page Builder & Blocks doc; includes Hero, Packages, Comparison, Anti-WordPress, SMART, DevOps, Analytics, SEO, PPC, Competitor, Case Studies, Estimator, Contact, Engagement, Trust, Compliance, Company, etc.)*

---

## 9. Technical Quality Bars

* **Performance**: LCP < 2.5s, INP < 200ms, CLS < 0.05.
* **Accessibility**: WCAG 2.2 AA, focus states, reduced motion.
* **SEO**: semantic HTML, XML sitemap, robots, canonical, OpenGraph, JSON-LD.
* **Security**: 2FA, least-privilege, WAF, dependency hygiene, monthly updates.
* **Privacy**: PII minimisation, cookieless analytics option, PostHog data ownership.

---

## 10. Hosting & DevOps

* **Cloud**: AWS/GCP/Azure or managed Laravel hosting.
* **CI/CD**: GitHub Actions (lint, tests, build, audit, preview).
* **Deployments**: Blue-green / rolling, schema-gated.
* **Observability**: uptime checks, logs, metrics, tracing.
* **Security**: TLS ≥1.2, secrets manager, WAF/CDN, SAST/DAST cadence.
* **Resilience**: Multi-AZ, backups, DR rehearsals.

---

## 11. Copy Angles

* **Hero**: “The anti-agency: AI-native, enterprise-grade, WordPress-free.”
* **Packages CTA**: “Start SMART →”
* **Anti-WordPress**: “Stop paying for plugin roulette and security firefights.”
* **Analytics**: “Own your data. See what GA4 won’t. Act faster.”
* **DevOps**: “Ship safely, sleep soundly: zero-downtime as default.”

---

## 12. Success Metrics

* Lighthouse ≥ 95 desktop / ≥ 90 mobile.
* ≥ 20 qualified leads per month.
* Avg. publish time < 10 min/page.
* Zero critical security incidents.
* ≥ 8/10 editor satisfaction.

---

## 13. Risks

* ❓ Content migration unknown.
* ❓ PostHog learning curve for clients.
* ❓ Strong anti-WP stance may alienate some.
* ❓ AI claims must balance hype vs credibility.

---

## 14. Backlog (Todos & Stories)

### Setup & Infra

* [ ] Provision Laravel 12 + Statamic project.
* [ ] Configure Inertia + Vue 3 + Vite + Tailwind (latest).
* [ ] GitHub Actions pipeline (lint/tests/build/deploy).
* [ ] Hosting + CDN + assets + HTTPS + backups.

### Collections & Blueprints

* [ ] Pages (replicator Page Builder).
* [ ] Posts (Bard + callouts).
* [ ] Globals: header, footer, SEO.
* [ ] SEO blueprint fields.

### Blocks (MVP First)

* [ ] Hero, Packages, Comparison, Anti-WP.
* [ ] SMART Process Timeline.
* [ ] DevOps / Engineering.
* [ ] Analytics (PostHog).
* [ ] Case Studies.
* [ ] Contact / RFP.

### Blocks (Expansion)

* [ ] All other blocks in library (SEO, PPC, Competitor, Calculators, Trust, Company, etc.).

### Enhancements (Later)

* [ ] Type safety (TS + Volar).
* [ ] Async components / code splitting.
* [ ] Validation rules per block.
* [ ] Shared atoms (Button, Section, MetricCard).
* [ ] Server-side cache for normalised blocks.

---

## 15. Open Questions

* Legacy content migration needed?
* Preferred hosting: Forge, Vapor, custom cloud?
* Should “Ask an Agent” demo ship with MVP?
* How aggressive should anti-WordPress messaging be?

---

## 16. Editorial Governance

* **Voice**: bold, plain-spoken, credible.
* **Banned words**: industry-leading, cutting-edge (unless evidenced).
* **Structure**: outcomes → mechanisms → CTA.

---

## 17. Next Steps

1. Approve SMART diagrams + copy.
2. Finalise package comparison matrix.
3. Prioritise MVP blocks.
4. Implement Statamic blueprints + Inertia pages.
5. Publish staging, run audits (perf/a11y).
6. Expand advanced AI/analytics blocks.
