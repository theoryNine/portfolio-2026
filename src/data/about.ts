import type { AboutData } from '../types'
import heroImage from '../assets/darker.webp'

export const about: AboutData = {
  sectionNumber: '01',
  sectionTitle: 'About',
  sectionRight: 'Personal · Open File',
  photo: heroImage,
  photoCaption: 'Seattle, WA',
  headline: 'Half in the *shadow,*\nhalf in the *light.*',
  bio: "I'm Ansel, an engineering leader with 12+ years building web platforms, from enterprise programs reaching 40M+ monthly visits to a logistics startup's dispatch tools. I live in the in-between: close enough to the code to know what's genuinely hard, far enough back to see what the team needs. I've led complex migrations, grown engineers who've outgrown me, and brought responsible AI practices into everyday development. The work I'm most proud of tends to be the kind nobody notices until it isn't there.\n\nAway from work: new destinations, good games, and wherever curiosity takes me.",
  details: [
    { label: 'Based', value: 'Seattle, WA' },
    { label: 'Focus', value: 'Engineering leadership · team building' },
    { label: 'Available', value: 'Engineering Manager · Director of Engineering', accent: true },
    { label: 'Email', value: 'anselcolvin@gmail.com' },
  ],
}
