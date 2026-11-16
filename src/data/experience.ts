import type { ExperienceData } from '../types'

export const experience: ExperienceData = {
  sectionNumber: '03',
  sectionTitle: 'Experience',
  label: '2014 – Present',
  entries: [
    {
      company: 'OpenTug',
      role: 'Senior Engineer, Front-End Lead',
      period: '2026 – Present',
      bullets: [
        'Front-end lead at a maritime logistics startup: mentored 3 engineers, ran weekly syncs, refined the backlog, and owned UX and technical design end to end.',
        'Prioritized features for fast delivery to existing customers and to prospects being onboarded.',
        'Architected reusable grid-page infrastructure (shared grid, grouping engine, faceted filters, bookmarkable URLs, saved views) powering the next-generation voyage dashboard and the Tows, Trade Lanes, and Assets pages.',
        'Designed the Voyage Actions system (bulk actions, rejection recovery, permission gating) behind daily dispatch workflows, with coalesced data loads, optimistic caching with rollback, and stale-chunk recovery after deploys.',
      ],
    },
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
      role: 'Senior Engineer, Tech Lead (Team of 8)',
      period: '2022 – 2025',
      bullets: [
        'Managed and mentored a team of 8 front-end engineers, with regular feedback, pairing sessions, and growth plans.',
        'Interviewed, selected, and onboarded 4 contract engineers to scale team capacity while holding quality standards.',
        'Led the team through an enterprise CMS re-platforming for global marketing sites serving 30–40M monthly visits, with on-time launches and zero critical delays.',
        'Defined and rolled out responsible AI guidelines (prompt standards, data sanitizing, manual validation) and trained engineers across multiple teams.',
      ],
    },
    {
      company: 'Ansira',
      role: 'Senior Front-End Engineer, Team Lead',
      period: '2017 – 2021',
      bullets: [
        'Built and scaled the engineering team from 2 to 8 developers through hiring, onboarding, and mentorship, cutting onboarding time by 30%.',
        'Led cross-functional delivery across front-end, back-end, and QA on multiple large client platforms, shipping on schedule through changing requirements.',
        'Owned planning for major CMS migrations into Adobe AEM across 6–12 month timelines, including estimation, phased rollout, and risk mitigation.',
        'Owned accessibility strategy for key accounts, leading WCAG AA compliance updates across enterprise sites.',
      ],
    },
    {
      company: 'Contract work',
      role: 'Front-End Engineer',
      period: '2014 – 2017',
      bullets: [
        'Delivered web components and features for enterprise clients across agency and in-house teams, including Code and Theory, Adobe Systems, Defakto Group, and AT&T.',
        'Built deep expertise in the Adobe AEM platform and accessibility best practices.',
      ],
    },
  ],
}
