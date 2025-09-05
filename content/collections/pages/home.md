---
id: home
blueprint: pages
title: Home
blocks:
  -
    id: PyK9r9Nw
    type: hero
    enabled: true
    headline: 'Welcome to smartcraft.'
    highlight_text: 'The AI-Native Anti-Agency'
    subheadline: 'Enterprise-grade digital systems at a fraction of the cost. Built on proven technology, powered by AI, and designed to grow with you—without the compromises of agencies.'
    cta_text: 'Get Started'
    cta_url: /contact
    secondary_cta_text: 'View Demo'
    secondary_cta_url: /demo
    badge: 'Now in Development'
    badge_icon: rocket-launch
    background_style: solid
    style_variant: bold
    trust_indicators:
      -
        name: 'Laravel 12'
        icon: cpu-chip
      -
        name: 'Vue 3'
        icon: cog-6-tooth
      -
        name: TypeScript
        icon: shield-check
  -
    id: intro_block_1
    type: intro
    enabled: true
    title: 'The Anti-Agency'
    subtitle: 'The end of bloated agencies. One AI-powered studio delivering enterprise-grade websites, marketing, and analytics—leaner, faster, and smarter than the old way.'
    content:
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: "Smartcraft isn't just another digital agency. In fact, it's not an agency at all. It's the "
          -
            type: text
            text: anti-agency
            marks:
              -
                type: bold
          -
            type: text
            text: ": a lean, AI-native studio that blends engineering excellence, enterprise-grade infrastructure, and multi-agent autonomy to deliver results that traditional agencies can't match."
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: 'At its core, Smartcraft is powered by a single unicorn developer amplified by AI. Where a typical agency needs ten people, Smartcraft leverages automation, orchestration, and agentic workflows to achieve the same outcomes faster, more efficiently, and with fewer overheads.'
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: "One of Smartcraft's defining features is its "
          -
            type: text
            text: 'enterprise technology stack'
            marks:
              -
                type: bold
          -
            type: text
            text: '. Most "affordable" digital shops still rely on WordPress: a 20-year-old blogging platform riddled with plugin bloat, fragile updates, and security risks. Smartcraft rejects that path completely. Every site is built on '
          -
            type: text
            text: 'Statamic (Laravel CMS) with Inertia.js and Vue 3'
            marks:
              -
                type: bold
          -
            type: text
            text: '—the same engineering standards trusted by SaaS companies and enterprises worldwide.'
    features:
      -
        id: f1_ai_native
        type: feature
        icon: cpu-chip
        title: 'AI-Native Architecture'
        description: 'Single developer amplified by AI agents, delivering 10x the efficiency of traditional agencies'
        color: primary
        enabled: true
      -
        id: f2_enterprise_tech
        type: feature
        icon: shield-check
        title: 'Enterprise Technology Stack'
        description: 'Laravel + Vue 3 + Statamic. No WordPress bloat, no plugin roulette, no fragile codebases'
        color: blue
        enabled: true
      -
        id: f3_smart_process
        type: feature
        icon: cog-6-tooth
        title: 'SMART Process'
        description: 'Disciplined delivery methodology combining engineering excellence with Kaizen principles'
        color: green
        enabled: true
      -
        id: f4_data_driven
        type: feature
        icon: chart-bar
        title: 'Data-Driven Intelligence'
        description: 'Custom analytics, predictive campaign tuning, and AI-orchestrated growth systems'
        color: orange
        enabled: true
      -
        id: f5_future_ready
        type: feature
        icon: rocket-launch
        title: 'Future-Ready Solutions'
        description: 'Agentic autonomy, advanced analytics, and scalable architecture that grows with your business'
        color: accent
        enabled: true
    stats:
      -
        id: s1_efficiency
        type: stat
        number: '10'
        suffix: x
        label: 'More Efficient'
        enabled: true
      -
        id: s2_cost
        type: stat
        number: '60'
        suffix: '%'
        label: 'Cost Savings'
        enabled: true
      -
        id: s3_speed
        type: stat
        number: '3'
        suffix: x
        label: 'Faster Delivery'
        enabled: true
      -
        id: s4_uptime
        type: stat
        number: '99.9'
        suffix: '%'
        label: 'Uptime SLA'
        enabled: true
    image_position: right
    show_cta: true
    cta_text: 'Experience the Future'
    cta_url: /about
    image: page-images/ai-humanoid.png
  -
    id: FH4Gauqn
    type: packages
    enabled: true
    section_title: 'Our Service Packages'
    section_subtitle: 'Choose the perfect package for your business needs'
    featured_package: growth
    packages:
      -
        id: pE8hSc9Q
        type: package
        name: Launch
        slug: launch
        price: '£2,500'
        price_suffix: one-time
        description: 'Perfect for startups and small businesses'
        icon: rocket-launch
        icon_color: blue
        features:
          - 'Custom Laravel application'
          - 'Responsive Vue.js frontend'
          - 'Basic Statamic CMS'
          - '5 page templates'
          - 'Contact form integration'
          - 'Basic SEO setup'
          - '30 days support'
        enabled: true
      -
        id: N62wjmQo
        type: package
        name: Growth
        slug: growth
        price: '£5,000'
        price_suffix: one-time
        description: 'For growing businesses ready to scale'
        icon: chart-bar
        icon_color: primary
        features:
          - 'Everything in Launch'
          - 'Advanced page builder'
          - 'E-commerce integration'
          - '15 page templates'
          - 'Blog system'
          - 'Analytics integration'
          - 'Email marketing setup'
          - 'Performance optimization'
          - '90 days support'
        enabled: true
      -
        id: 5f0pe6KP
        type: package
        name: Dominate
        slug: dominate
        price: '£10,000'
        price_suffix: one-time
        description: 'Enterprise solution for market leaders'
        icon: trophy
        icon_color: accent
        features:
          - 'Everything in Growth'
          - 'Multi-site management'
          - 'Advanced integrations'
          - 'Custom API development'
          - 'Unlimited page templates'
          - 'Advanced automation'
          - 'White-label solutions'
          - 'Dedicated support manager'
          - '12 months support'
        enabled: true
    show_comparison: true
    comparison_features:
      -
        id: wu9OPoQ8
        type: feature
        name: 'Custom Laravel App'
        launch: 'true'
        growth: 'true'
        dominate: 'true'
        enabled: true
      -
        id: DnXRP7XJ
        type: feature
        name: 'Vue.js Frontend'
        launch: 'true'
        growth: 'true'
        dominate: 'true'
        enabled: true
      -
        id: Y0gF7zQP
        type: feature
        name: 'Statamic CMS'
        launch: Basic
        growth: Advanced
        dominate: Enterprise
        enabled: true
      -
        id: CfmKx9tw
        type: feature
        name: 'Page Templates'
        launch: '5'
        growth: '15'
        dominate: Unlimited
        enabled: true
      -
        id: 3gjWnNLc
        type: feature
        name: E-commerce
        launch: 'false'
        growth: 'true'
        dominate: 'true'
        enabled: true
      -
        id: 25cmYTc3
        type: feature
        name: 'Blog System'
        launch: 'false'
        growth: 'true'
        dominate: 'true'
        enabled: true
      -
        id: pZgk8wIi
        type: feature
        name: Analytics
        launch: 'false'
        growth: 'true'
        dominate: 'true'
        enabled: true
      -
        id: OBjwhhNi
        type: feature
        name: Multi-site
        launch: 'false'
        growth: 'false'
        dominate: 'true'
        enabled: true
      -
        id: ynb1weZM
        type: feature
        name: 'API Development'
        launch: 'false'
        growth: 'false'
        dominate: 'true'
        enabled: true
      -
        id: 6WobIQq9
        type: feature
        name: 'Support Duration'
        launch: '30 days'
        growth: '90 days'
        dominate: '12 months'
        enabled: true
    cta_text: 'Choose Your Package'
  -
    id: OR78g4gv
    type: smart_process
    enabled: true
    title: 'The SMART Process'
    subtitle: "Smartcraft's delivery methodology, blending modern engineering discipline with Japanese Kaizen philosophy for continuous improvement and relentless focus on quality."
    default_steps:
      -
        id: s1_scope
        type: step
        letter: S
        title: Scope
        description: 'Define project scope through discovery workshops. Capture goals, constraints, and user needs in a Discovery Brief.'
        duration: '1-2 weeks'
        color: primary
        enabled: true
      -
        id: m2_model
        type: step
        letter: M
        title: Model
        description: 'Transform the Discovery Brief into PRD + Architecture Documents: information architecture, data flows, integrations, and dependencies.'
        duration: '1-2 weeks'
        color: blue
        enabled: true
      -
        id: a3_architect
        type: step
        letter: A
        title: 'Architect & Apply'
        description: 'Turn requirements into design systems: lo-fi wireframes → hi-fi designs. Apply brand tone, content structure, and component systems.'
        duration: '2-3 weeks'
        color: green
        enabled: true
      -
        id: r4_realize
        type: step
        letter: R
        title: Realize
        description: 'Build the system: Development, Engineering, DevOps, and Infrastructure. Implement CI/CD pipelines, observability, and zero-downtime deployments.'
        duration: '3-6 weeks'
        color: orange
        enabled: true
      -
        id: t5_test
        type: step
        letter: T
        title: 'Test & Tune'
        description: 'Rigorous QA, performance, accessibility, CRO, SEO hardening, and analytics-driven iteration for compounding quality.'
        duration: '1-2 weeks + Ongoing'
        color: accent
        enabled: true
    detailed_steps:
      -
        id: s1_detailed
        type: step
        letter: S
        title: 'Scope - Discovery & Strategic Foundation'
        description: 'We begin with deep observation and clarity. Through structured discovery workshops, we capture your business goals, technical constraints, user needs, and success metrics. This phase produces a comprehensive Discovery Brief that becomes our north star. Kaizen principle: start with thorough understanding before moving to avoid costly pivots later.'
        duration: '1-2 weeks'
        enabled: true
      -
        id: m2_detailed
        type: step
        letter: M
        title: 'Model - Architecture & Planning'
        description: 'Transform insights into actionable blueprints. We create detailed PRD (Product Requirements Document) and Architecture Documents covering information architecture, data flows, third-party integrations, technical risks, and dependencies. Thoughtful planning eliminates waste downstream. Kaizen principle: comprehensive modeling prevents technical debt and scope creep.'
        duration: '1-2 weeks'
        enabled: true
      -
        id: a3_detailed
        type: step
        letter: A
        title: 'Architect & Apply - Design Systems'
        description: 'Convert requirements into beautiful, functional design systems. We progress from lo-fi wireframes to hi-fi designs, applying your brand tone, content structure, and reusable component systems. Every design decision is validated through small feedback loops with stakeholders. Kaizen principle: iterate early and often to achieve design-development harmony.'
        duration: '2-3 weeks'
        enabled: true
      -
        id: r4_detailed
        type: step
        letter: R
        title: 'Realize - Engineering & Infrastructure'
        description: 'Build robust, scalable systems using modern engineering practices. We implement Laravel + Vue applications with CI/CD pipelines, comprehensive observability, and zero-downtime deployments. Development happens in small increments with continuous refinement and stakeholder feedback. Kaizen principle: deliver working software frequently, ensuring stability at every step.'
        duration: '3-6 weeks'
        enabled: true
      -
        id: t5_detailed
        type: step
        letter: T
        title: 'Test & Tune - Continuous Optimization'
        description: 'Rigorous quality assurance across all dimensions: functionality, performance, accessibility, security, SEO, and conversion optimization. Post-launch, we implement analytics-driven iteration cycles for continuous improvement. Kaizen principle: small, data-driven improvements compound into exceptional user experiences and business results.'
        duration: '1-2 weeks + Ongoing'
        enabled: true
    show_cta: true
    cta_title: 'Ready to Experience the SMART Advantage?'
    cta_subtitle: "Join innovative businesses who chose Smartcraft's disciplined approach to digital transformation. Let's discuss how our SMART process can deliver exceptional results for your project."
    cta_button_text: 'Start Your SMART Project'
    cta_button_url: /contact
robots: 'index, follow'
updated_by: 9b4214e7-c09d-4de5-a908-64e55d2b24d8
updated_at: 1757102878
---
