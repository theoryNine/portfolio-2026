import styles from './StatItem.module.css'

interface StatItemProps {
  value: string
  label: string
  accent?: boolean
}

export function StatItem({ value, label, accent }: StatItemProps) {
  return (
    <div className={styles.item}>
      <span className={`${styles.value} ${accent ? styles.valueAccent : ''}`}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
