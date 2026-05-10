import styles from './PrincipleCard.module.css'
import type { Principle } from '../../../types'

export function PrincipleCard({ number, title, description }: Principle) {
  return (
    <article className={styles.card}>
      <div className={styles.shim} />
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
