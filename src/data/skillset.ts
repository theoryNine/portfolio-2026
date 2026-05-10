import type { SkillsetData } from '../types'

export const skillset: SkillsetData = {
  sectionNumber: '04',
  sectionTitle: 'Skillset',
  label: '12 skills',
  categories: [
    {
      title: 'Program & Leadership',
      skills: [
        { name: 'Multi-year roadmap planning', level: 5 },
        { name: 'Cross-functional coordination', level: 5 },
        { name: 'Stakeholder alignment', level: 5 },
        { name: 'Risk & dependency management', level: 4 },
        { name: 'Agile / sprint planning', level: 5 },
        { name: 'Team building & mentoring', level: 5 },
      ],
    },
    {
      title: 'Technical',
      skills: [
        { name: 'Web platform architecture', level: 4 },
        { name: 'Enterprise CMS (Adobe AEM)', level: 5 },
        { name: 'Front-end (React, TypeScript, Next.js)', level: 5 },
        { name: 'Performance & accessibility (WCAG AA)', level: 4 },
        { name: 'AI-assisted development', level: 4 },
        { name: 'CI/CD & DevOps (Azure)', level: 3 },
      ],
    },
  ],
}
