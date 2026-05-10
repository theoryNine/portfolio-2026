import styles from './Work.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { ProjectCard } from '../../ui/ProjectCard/ProjectCard'
import { work } from '../../../data/work'

export function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <SectionLabel number={work.sectionNumber} title={work.sectionTitle} right={work.label} />
        <div className={styles.grid}>
          {work.projects.map((project) => {
            const wrapClass =
              project.variant === 'featured'
                ? styles.featured
                : project.variant === 'small'
                  ? styles.small
                  : styles.standard
            return (
              <div key={project.number} className={wrapClass}>
                <ProjectCard {...project} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
