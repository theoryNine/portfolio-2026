import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  number: string
  title?: string
  right?: string
}

export function SectionLabel({ number, title, right }: SectionLabelProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div className={styles.left}>
          <span className={styles.number}>{number}</span>
          {title && <span className={styles.title}>{title}</span>}
        </div>
        {right && <span className={styles.right}>{right}</span>}
      </div>
    </div>
  )
}
