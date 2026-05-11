export interface NavLink {
  label: string
  href: string
}

export interface NavData {
  logo: string
  links: NavLink[]
  cta: string
  ctaHref: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface HeroData {
  availability: string
  roleLabel: string
  nameFirst: string
  nameLast: string
  subtitle: string
  primaryCta: string
  primaryCtaHref: string
  secondaryCta: string
  secondaryCtaHref: string
  backgroundImage: string
  stats: HeroStat[]
}

export interface AboutDetail {
  label: string
  value: string
  accent?: boolean
}

export interface AboutData {
  sectionNumber: string
  sectionTitle: string
  sectionRight: string
  photo: string
  photoCaption?: string
  headline: string
  bio: string
  details: AboutDetail[]
}

export interface Principle {
  number: string
  title: string
  description: string
}

export interface PrinciplesData {
  sectionNumber: string
  sectionTitle: string
  label: string
  items: Principle[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface ExperienceData {
  sectionNumber: string
  sectionTitle: string
  label: string
  entries: ExperienceEntry[]
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface SkillsetData {
  sectionNumber: string
  sectionTitle: string
  label: string
  categories: SkillCategory[]
}

export type ProjectVariant = 'featured' | 'standard' | 'small'

export interface Project {
  number: string
  company: string
  title: string
  tags: string[]
  image: string
  href: string
  variant: ProjectVariant
  role?: string
  year?: string
  scale?: string
  description?: string
}

export interface WorkData {
  sectionNumber: string
  sectionTitle: string
  label: string
  projects: Project[]
}

export interface ResumeOption {
  label: string
  description: string
  href: string
}

export interface ContactLink {
  label: string
  href: string
  resumeModal?: boolean
}

export interface ContactData {
  sectionNumber: string
  sectionTitle: string
  headline: string
  subtext: string
  primaryLabel: string
  primaryHref: string
  links: ContactLink[]
  footerCopyright: string
  footerCredit: string
  footerLocation: string
}
