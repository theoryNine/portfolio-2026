import type { ExperienceData } from '../types'

export const experience: ExperienceData = {
  sectionNumber: '03',
  sectionTitle: 'Experience',
  label: '2014 – Present',
  entries: [
    {
      company: 'Centerform',
      role: 'Co-Founder & CTO',
      period: '2025 – Present',
      bullets: [
        'Co-founded digital concierge platform (PWA) for hotels, resorts, and cruise ships, leading all technical architecture, infrastructure, and product planning decisions.',
        'Architected multi-tenant system supporting venue-specific theming, role-based access control, and real-time content management across venue types.',
        'Managed product roadmap, sprint planning, and issue tracking in Linear; owned all infrastructure setup, CI/CD pipelines, and environment configuration.',
        'Built guest-facing PWA with offline-capable mobile packaging and admin dashboard for venue operators to self-manage content, events, and dining.',
      ],
    },
    {
      company: 'Starbucks',
      role: 'Front-End Tech Lead',
      period: '2022 – 2025',
      bullets: [
        'Led end-to-end planning and execution of an enterprise CMS re-platforming program for global marketing sites serving 30–40M monthly visits.',
        'Owned program roadmap, sprint planning, and release coordination for a 4-engineer team across multiple platform dependencies.',
        'Drove stakeholder alignment across engineering, product, design, and marketing — on-time launches, zero critical delays.',
        'Established AI-assisted development practices and engineering tooling standards adopted across multiple teams.',
      ],
    },
    {
      company: 'Ansira',
      role: 'Front-End Team Lead',
      period: '2017 – 2021',
      bullets: [
        'Led cross-functional delivery across 3–5 concurrent client platforms, coordinating front-end, back-end, QA, and design.',
        'Owned end-to-end program planning for major CMS migrations across 6–12 month timelines.',
        'Built and scaled an engineering team from 2 to 8 developers, reducing onboarding time by 30%.',
        'Established an accessibility compliance program achieving WCAG AA across enterprise client portfolios.',
      ],
    },
  ],
}
