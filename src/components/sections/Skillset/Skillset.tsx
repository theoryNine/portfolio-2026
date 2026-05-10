import styles from './Skillset.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { SkillBar } from '../../ui/SkillBar/SkillBar'
import { skillset } from '../../../data/skillset'

export function Skillset() {
  return (
    <section id="skillset" className={styles.section}>
      <div className="container">
        <SectionLabel
          number={skillset.sectionNumber}
          title={skillset.sectionTitle}
          right={skillset.label}
        />
        <div className={styles.grid}>
          {skillset.categories.map((category) => (
            <div key={category.title} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skills}>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
