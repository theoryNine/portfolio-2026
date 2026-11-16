import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  number: string
  title?: string
  right?: string
  /** id for the <h2>, so the parent <section> can reference it with aria-labelledby */
  headingId?: string
}

export function SectionLabel({ number, title, right, headingId }: SectionLabelProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div className={styles.left}>
          <span className={styles.number} aria-hidden="true">
            {number}
          </span>
          {title && (
            <h2 id={headingId} className={styles.title}>
              {title}
            </h2>
          )}
        </div>
        {right && <span className={styles.right}>{right}</span>}
      </div>
    </div>
  )
}
