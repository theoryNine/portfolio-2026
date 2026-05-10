import styles from './Hero.module.css'
import { Button } from '../../ui/Button/Button'
import { StatItem } from '../../ui/StatItem/StatItem'
import { hero } from '../../../data/hero'

export function Hero() {
  return (
    <section id="hero" className={styles.section}>
        <div className={styles.card}>
          <img
            src={hero.backgroundImage}
            alt="Ansel Colvin"
            className={styles.photo}
          />
          <div className={styles.overlay} />

          <div className={styles.content}>
            <div className={styles.topBar}>
              <span className={styles.availabilityDot} aria-hidden="true" />
              <span className={styles.availability}>{hero.availability}</span>
            </div>

            <div className={styles.bottom}>
              <div className={styles.nameArea}>
                <span className={styles.roleLabel}>{hero.roleLabel}</span>
                <h1 className={styles.name}>
                  <span className={styles.nameFirst}>{hero.nameFirst}</span>
                  <span className={styles.nameLast}>{hero.nameLast}</span>
                </h1>
              </div>

              <div className={styles.rightArea}>
                <p className={styles.subtitle}>{hero.subtitle}</p>
                <div className={styles.ctas}>
                  <Button href={hero.primaryCtaHref} variant="primary">
                    {hero.primaryCta}
                  </Button>
                  <Button href={hero.secondaryCtaHref} variant="outline">
                    {hero.secondaryCta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container ${styles.statsRow}`}>
          {hero.stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} accent={i === 0} />
          ))}
        </div>
    </section>
  )
}
