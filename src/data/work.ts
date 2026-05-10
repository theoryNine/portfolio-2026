import type { WorkData } from '../types'

import starbucks from '../assets/sitegrabs/starbucks_full.png'
import mazda from '../assets/sitegrabs/Mazda_Desk_SS.png'
import bny from '../assets/sitegrabs/BNY_Desk.png'
import spectrum from '../assets/sitegrabs/spectrum_mobile_full.jpg'
import nyl from '../assets/sitegrabs/nyl_full.jpg'
import att from '../assets/sitegrabs/att_full.jpg'
import canon from '../assets/sitegrabs/canon_full.jpg'
import acu from '../assets/sitegrabs/acu_full.jpg'
import fresh from '../assets/sitegrabs/fresh_full.jpg'

export const work: WorkData = {
  sectionNumber: '05',
  sectionTitle: 'Selected work',
  label: 'Programs / Next',
  projects: [
    {
      number: '001',
      company: 'Starbucks',
      title: 'Enterprise CMS re-platforming for global marketing sites.',
      tags: ['Next.js', 'Adobe AEM', 'TypeScript', 'Azure'],
      image: starbucks,
      href: '#',
      variant: 'featured',
      role: 'Tech Lead',
      year: '2024',
      scale: '30–40M / mo',
    },
    {
      number: '002',
      company: 'Mazda Brand Academy',
      title: 'Internal learning portal & sales system on AEM with multiple API integrations.',
      tags: ['Front-end', 'AEM', 'Next.js'],
      image: mazda,
      href: '#',
      variant: 'standard',
      role: 'Front-End Lead',
      year: '2021',
    },
    {
      number: '003',
      company: 'BNY Mellon',
      title: 'Marketing platform consolidation across investor & client surfaces.',
      tags: ['CMS', 'AEM', 'Accessibility'],
      image: bny,
      href: '#',
      variant: 'standard',
      role: 'Senior Engineer',
      year: '2020',
    },
    {
      number: '004',
      company: 'Spectrum Mobile',
      title: 'Consumer mobile acquisition flow & component library.',
      tags: [],
      image: spectrum,
      href: '#',
      variant: 'small',
      role: 'Senior Engineer',
      year: '2019',
    },
    {
      number: '005',
      company: 'New York Life',
      title: 'Agent portal rebuild on modern React stack.',
      tags: [],
      image: nyl,
      href: '#',
      variant: 'small',
      role: 'Engineer',
      year: '2019',
    },
    {
      number: '006',
      company: 'AT&T',
      title: 'Retail kiosk & in-store digital experience platform.',
      tags: [],
      image: att,
      href: '#',
      variant: 'small',
      role: 'Engineer',
      year: '2018',
    },
    {
      number: '007',
      company: 'Canon USA',
      title: 'E-commerce product configurator & print-on-demand tooling.',
      tags: [],
      image: canon,
      href: '#',
      variant: 'small',
      role: 'Engineer',
      year: '2018',
    },
    {
      number: '008',
      company: 'ACU',
      title: 'University web platform migration & CMS implementation.',
      tags: [],
      image: acu,
      href: '#',
      variant: 'small',
      role: 'Engineer',
      year: '2017',
    },
    {
      number: '009',
      company: 'Fresh Image Center',
      title: 'Brand identity system & marketing site build.',
      tags: [],
      image: fresh,
      href: '#',
      variant: 'small',
      role: 'Engineer',
      year: '2017',
    },
  ],
}
