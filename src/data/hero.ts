import type { HeroData } from '../types'
import heroImage from '../assets/ansel-light.webp'

export const hero: HeroData = {
  availability: 'Available for Hire',
  roleLabel: 'Engineering Leader',
  nameFirst: 'Ansel',
  nameLast: 'Colvin.',
  subtitle:
    'Leading engineering teams and complex technical programs to deliver at scale.',
  primaryCta: 'See selected work →',
  primaryCtaHref: '#work',
  secondaryCta: 'Download Résumé',
  secondaryCtaHref: '/resume.pdf',
  backgroundImage: heroImage,
  stats: [
    { value: '11+', label: 'Years experience' },
    { value: '30M+', label: 'Monthly visits served' },
    { value: '9', label: 'Enterprise programs' },
    { value: '2', label: 'Teams scaled' },
  ],
}
