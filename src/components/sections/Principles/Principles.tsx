import styles from './Principles.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { PrincipleCard } from '../../ui/PrincipleCard/PrincipleCard'
import { principles } from '../../../data/principles'

export function Principles() {
  return (
    <section id="principles" className={styles.section}>
      <div className="container">
        <SectionLabel
          number={principles.sectionNumber}
          title={principles.sectionTitle}
          right={principles.label}
        />
        <div className={styles.grid}>
          {principles.items.map((item) => (
            <PrincipleCard key={item.number} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
