import type { HeroData } from '../types'
import heroImage from '../assets/ansel-light.webp'

export const hero: HeroData = {
  roleLabel: 'Engineering Leader',
  nameFirst: 'Ansel',
  nameLast: 'Colvin.',
  subtitle:
    'Engineering manager for web platform teams, leading engineers and complex programs to deliver at scale.',
  primaryCta: 'See selected work →',
  primaryCtaHref: '#work',
  secondaryCta: 'Download Résumé',
  secondaryCtaHref: '/resume.pdf',
  backgroundImage: heroImage,
  stats: [
    { value: '12+', label: 'Years experience' },
    { value: '40M+', label: 'Monthly visits served' },
    { value: '9', label: 'Enterprise programs' },
    { value: '2→8', label: 'Ansira team growth' },
  ],
}
