import type { AboutData } from '../types'
import heroImage from '../assets/darker.jpeg'

export const about: AboutData = {
  sectionNumber: '01',
  sectionTitle: 'About',
  sectionRight: 'Personal · Open File',
  photo: heroImage,
  photoCaption: 'Kirkland, WA',
  headline: 'Half in the shadow, half in the light.',
  bio: "I'm Ansel, an engineering leader with 11+ years building enterprise web at scale. I live in the in-between: close enough to the code to know what's genuinely hard, far enough back to see what the team needs. I've led complex migrations, grown engineers who've outgrown me, and shipped products reaching 30M+ people monthly. The work I'm most proud of tends to be the kind nobody notices until it isn't there.\n\nAway from work: new destinations, good games, and wherever curiosity takes me.",
  details: [
    { label: 'Based', value: 'Kirkland, WA' },
    { label: 'Focus', value: 'Engineering leadership · program management' },
    { label: 'Available', value: 'Senior Engineer · Engineering Manager', accent: true },
    { label: 'Email', value: 'anselcolvin@gmail.com' },
  ],
}
