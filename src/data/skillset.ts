import type { SkillsetData } from '../types'

export const skillset: SkillsetData = {
  sectionNumber: '04',
  sectionTitle: 'Skillset',
  label: '13 skills',
  categories: [
    {
      title: 'Program & Leadership',
      skills: [
        { name: 'Multi-year roadmap planning' },
        { name: 'Cross-functional coordination' },
        { name: 'Stakeholder alignment' },
        { name: 'Risk & dependency management' },
        { name: 'Agile / sprint planning' },
        { name: 'Hiring & onboarding' },
        { name: 'Coaching & mentoring' },
      ],
    },
    {
      title: 'Technical',
      skills: [
        { name: 'Web platform architecture' },
        { name: 'Enterprise CMS (Adobe AEM)' },
        { name: 'Front-end (React, TypeScript, Next.js)' },
        { name: 'Performance & accessibility (WCAG AA)' },
        { name: 'Responsible AI practices' },
        { name: 'CI/CD & DevOps (Azure)' },
      ],
    },
  ],
}
