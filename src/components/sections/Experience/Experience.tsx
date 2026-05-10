import styles from './Experience.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { experience } from '../../../data/experience'

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <SectionLabel
          number={experience.sectionNumber}
          title={experience.sectionTitle}
          right={experience.label}
        />
        <div className={styles.entries}>
          {experience.entries.map((entry) => (
            <article key={entry.company} className={styles.entry}>
              <div className={styles.entryHeader}>
                <div className={styles.entryMeta}>
                  <span className={styles.period}>{entry.period}</span>
                  <span className={styles.role}>{entry.role}</span>
                </div>
                <h3 className={styles.company}>{entry.company}</h3>
              </div>
              <ul className={styles.bullets}>
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
