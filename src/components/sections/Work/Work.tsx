import { useState } from 'react'
import styles from './Work.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { ProjectCard } from '../../ui/ProjectCard/ProjectCard'
import { ProjectModal } from '../../ui/ProjectModal/ProjectModal'
import { work } from '../../../data/work'
import type { Project } from '../../../types'

export function Work() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="work" aria-labelledby="work-title" className={styles.section}>
      <div className="container">
        <SectionLabel
          headingId="work-title"
          number={work.sectionNumber}
          title={work.sectionTitle}
          right={work.label}
        />
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
                <ProjectCard {...project} onSelect={() => setSelected(project)} />
              </div>
            )
          })}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
