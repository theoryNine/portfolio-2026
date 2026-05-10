import styles from './SkillBar.module.css'
import type { Skill } from '../../../types'

export function SkillBar({ name, level }: Skill) {
  return (
    <div className={styles.row}>
      <span className={styles.name}>{name}</span>
      <span className={styles.dots} aria-label={`Level ${level} of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < level ? styles.dotFilled : styles.dotEmpty} />
        ))}
      </span>
    </div>
  )
}
