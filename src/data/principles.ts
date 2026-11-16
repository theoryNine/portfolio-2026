import type { PrinciplesData } from '../types'

export const principles: PrinciplesData = {
  sectionNumber: '02',
  sectionTitle: 'What drives me',
  label: 'Four principles',
  items: [
    {
      number: '01',
      title: 'Stakeholder Alignment',
      description:
        'Translating business goals into engineering plans the team can actually execute.',
      example:
        'At Starbucks: engineering, product, design, and marketing aligned on a 2+ year program, with zero critical launch delays.',
    },
    {
      number: '02',
      title: 'Mentorship',
      description:
        'Empowering engineers to reach their full potential, and to teach the next ones.',
      example:
        'Growth plans and pairing for a team of 5; at Ansira, a team grown from 2 to 8 with onboarding time down 30%.',
    },
    {
      number: '03',
      title: 'Continuous Improvement',
      description: 'Fostering a culture of learning, retros, and small honest improvements.',
      example:
        'Responsible AI guidelines defined and rolled out across multiple teams to lift sprint velocity and output quality.',
    },
    {
      number: '04',
      title: 'Scale & Impact',
      description: 'Leading migrations that serve millions, not just shipping code into the void.',
      example:
        'A re-platforming for sites serving 30–40M monthly visits, with performance and WCAG AA work built in.',
    },
  ],
}
