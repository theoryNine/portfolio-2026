import styles from './Principles.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { PrincipleCard } from '../../ui/PrincipleCard/PrincipleCard'
import { principles } from '../../../data/principles'

export function Principles() {
  return (
    <section id="principles" aria-labelledby="principles-title" className={styles.section}>
      <div className="container">
        <SectionLabel
          headingId="principles-title"
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
