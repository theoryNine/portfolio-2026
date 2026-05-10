import styles from './About.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { about } from '../../../data/about'

export function About() {
  const [bioPrimary, bioNote] = about.bio.split('\n\n')

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <SectionLabel
          number={about.sectionNumber}
          title={about.sectionTitle}
          right={about.sectionRight}
        />
        <div className={styles.grid}>
          <div className={styles.photoCol}>
            <img src={about.photo} alt="Ansel Colvin" className={styles.photo} />
            {about.photoCaption && (
              <span className={styles.photoCaption}>{about.photoCaption}</span>
            )}
          </div>

          <div className={styles.contentCol}>
            <h2 className={styles.headline}>
              Half in the <em className={styles.shadow}>shadow,</em>
              <br />
              half in the <em className={styles.light}>light.</em>
            </h2>

            <div className={styles.bio}>
              <p className={styles.bioPrimary}>{bioPrimary}</p>
              {bioNote && <p className={styles.bioNote}>{bioNote}</p>}
            </div>

            <dl className={styles.details}>
              {about.details.map((detail) => (
                <div key={detail.label} className={styles.detailRow}>
                  <dt className={styles.detailLabel}>{detail.label}</dt>
                  <dd className={`${styles.detailValue} ${detail.accent ? styles.detailAccent : ''}`}>
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
