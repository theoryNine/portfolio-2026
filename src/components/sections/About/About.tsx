import styles from './About.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { about } from '../../../data/about'

export function About() {
  const [bioPrimary, bioNote] = about.bio.split('\n\n')
  const headlineLines = about.headline.split('\n')

  return (
    <section id="about" aria-labelledby="about-title" className={styles.section}>
      <div className="container">
        <SectionLabel
          headingId="about-title"
          number={about.sectionNumber}
          title={about.sectionTitle}
          right={about.sectionRight}
        />
        <div className={styles.grid}>
          <div className={styles.photoCol}>
            <img
              src={about.photo}
              alt="Ansel Colvin"
              className={styles.photo}
              loading="lazy"
              decoding="async"
            />
            {about.photoCaption && (
              <span className={styles.photoCaption}>{about.photoCaption}</span>
            )}
          </div>

          <div className={styles.contentCol}>
            <p className={styles.headline}>
              {headlineLines.map((line, i) => (
                <span key={i} className={styles.headlineLine}>
                  {line.split(/(\*[^*]+\*)/).map((part, j) => {
                    if (!part.startsWith('*')) return part
                    const accent = i === 0 ? styles.shadow : styles.light
                    return (
                      <em key={j} className={accent}>
                        {part.slice(1, -1)}
                      </em>
                    )
                  })}
                </span>
              ))}
            </p>

            <div className={styles.bio}>
              <p className={styles.bioPrimary}>{bioPrimary}</p>
              {bioNote && <p className={styles.bioNote}>{bioNote}</p>}
            </div>

            <dl className={styles.details}>
              {about.details.map((detail) => (
                <div key={detail.label} className={styles.detailRow}>
                  <dt className={styles.detailLabel}>{detail.label}</dt>
                  <dd
                    className={`${styles.detailValue} ${detail.accent ? styles.detailAccent : ''}`}
                  >
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
