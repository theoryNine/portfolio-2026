import type { WorkData } from '../types'

import starbucks from '../assets/sitegrabs/starbucks_full.webp'
import mazda from '../assets/sitegrabs/Mazda_Desk_SS.webp'
import bny from '../assets/sitegrabs/BNY_Desk.webp'
import spectrum from '../assets/sitegrabs/spectrum_mobile_full.webp'
import nyl from '../assets/sitegrabs/nyl_full.webp'
import att from '../assets/sitegrabs/att_full.webp'
import canon from '../assets/sitegrabs/canon_full.webp'
import acu from '../assets/sitegrabs/acu_full.webp'
import fresh from '../assets/sitegrabs/fresh_full.webp'

export const work: WorkData = {
  sectionNumber: '05',
  sectionTitle: 'Selected work',
  label: 'Programs / Next',
  projects: [
    {
      number: '001',
      company: 'Starbucks',
      title: 'Enterprise CMS re-platforming for global marketing sites.',
      tags: ['React', 'Adobe Experience Manager', 'TypeScript', 'Azure'],
      image: starbucks,
      href: '#',
      variant: 'featured',
      role: 'Front-End Tech Lead',
      year: '2024',
      scale: '30–40M / mo',
      description:
        "Led front-end architecture for Starbucks' global marketing platform migration from a legacy CMS to Adobe AEM, serving markets across North America, EMEA, and APAC. Established engineering standards, mentored a distributed team of 8 engineers, and delivered a component system that significantly reduced time-to-publish for regional marketing teams.",
    },
    {
      number: '002',
      company: 'Mazda Brand Academy',
      title: 'Internal learning portal & sales system on AEM with multiple API integrations.',
      tags: ['Adobe Experience Manager', 'React'],
      image: mazda,
      href: '#',
      variant: 'standard',
      role: 'Front-End Team Lead',
      year: '2021',
      description:
        'Built an internal learning and sales enablement portal for Mazda dealership staff, integrating with third-party LMS and inventory APIs to surface real-time training content. Delivered multi-language support and a responsive component library adopted across the North American dealer network.',
    },
    {
      number: '003',
      company: 'BNY Mellon',
      title: 'Marketing platform consolidation across investor & client surfaces.',
      tags: ['React', 'Adobe Experience Manager', 'Accessibility'],
      image: bny,
      href: '#',
      variant: 'standard',
      role: 'Senior Engineer',
      year: '2020',
      description:
        "Consolidated BNY Mellon's fragmented marketing web presence into a unified AEM platform, bringing investor and client-facing surfaces under a single design system. Led accessibility remediation to WCAG 2.1 AA compliance across 40+ page templates.",
    },
    {
      number: '004',
      company: 'Spectrum Mobile',
      title: 'Consumer mobile acquisition flow & component library.',
      tags: ['React', 'Adobe Experience Manager'],
      image: spectrum,
      href: '#',
      variant: 'small',
      role: 'Senior Engineer',
      year: '2019',
      description:
        'Designed and built the consumer acquisition funnel for Spectrum Mobile at launch, including device selection, plan comparison, and checkout flows. Contributed to the internal design system powering mobile product pages across the broader Spectrum brand.',
    },
    {
      number: '005',
      company: 'New York Life',
      title: 'Agent portal rebuild on modern React stack.',
      tags: ['React', 'Adobe Experience Manager'],
      image: nyl,
      href: '#',
      variant: 'small',
      role: 'Front-End Engineer',
      year: '2019',
      description:
        'Rebuilt the New York Life agent portal on a modern React stack, replacing a legacy jQuery codebase with a component-driven architecture. Improved agent task completion rates through a redesigned dashboard and streamlined workflow UX.',
    },
    {
      number: '006',
      company: 'AT&T',
      title: 'Retail kiosk & in-store digital experience platform.',
      tags: ['Adobe Experience Manager'],
      image: att,
      href: '#',
      variant: 'small',
      role: 'Front-End Engineer',
      year: '2018',
      description:
        'Developed the in-store digital experience platform for AT&T retail locations, including interactive kiosks and guided product discovery flows. The platform deployed across 2,000+ retail stores nationwide.',
    },
    {
      number: '007',
      company: 'Canon USA',
      title: 'E-commerce product configurator & print-on-demand tooling.',
      tags: ['Adobe Experience Manager'],
      image: canon,
      href: '#',
      variant: 'small',
      role: 'Front-End Engineer',
      year: '2018',
      description:
        "Built an e-commerce product configurator allowing customers to customize and order professional camera equipment, integrated with Canon's print-on-demand fulfillment pipeline. Delivered a multi-step ordering workflow with real-time pricing and availability.",
    },
    {
      number: '008',
      company: 'ACU',
      title: 'University web platform migration & CMS implementation.',
      tags: ['Adobe Experience Manager'],
      image: acu,
      href: '#',
      variant: 'small',
      role: 'Front-End Engineer',
      year: '2017',
      description:
        'Led the web platform migration for Abilene Christian University, transitioning a sprawling institutional site to a modern CMS with a content governance model. Delivered a responsive redesign and component library used by 30+ content editors across campus departments.',
    },
    {
      number: '009',
      company: 'Fresh Image Center',
      title: 'Brand identity system & marketing site build.',
      tags: ['WordPress', 'Custom Design'],
      image: fresh,
      href: '#',
      variant: 'small',
      role: 'Front-End Engineer',
      year: '2017',
      description:
        'Designed and built the brand identity system and marketing site for Fresh Image Center, a beauty studio in Austin, Texas. Delivered a fully custom design with integrated online booking and a mobile-first layout.',
    },
  ],
}
