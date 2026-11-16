import styles from './SkillBar.module.css'
import type { Skill } from '../../../types'

export function SkillBar({ name }: Skill) {
  return (
    <div className={styles.row}>
      <span className={styles.name}>{name}</span>
    </div>
  )
}
