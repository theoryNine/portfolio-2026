import styles from './ProjectCard.module.css'
import type { Project } from '../../../types'

interface ProjectCardProps extends Project {
  onSelect: () => void
}

export function ProjectCard({
  number,
  company,
  title,
  tags,
  image,
  variant,
  role,
  year,
  scale,
  onSelect,
}: ProjectCardProps) {
  if (variant === 'featured') {
    return (
      <button onClick={onSelect} className={`${styles.card} ${styles.cardFeatured}`}>
        <div className={styles.shim} />
        <img src={image} alt={company} className={styles.featuredImg} loading="lazy" />
        <div className={styles.cardBar}>
          <div className={styles.barTop}>
            <span className={styles.featuredLabel}>Featured · Nº {number}</span>
            {year && <span className={styles.featuredYear}>{year}</span>}
          </div>
          <div className={styles.featuredBarBottom}>
            <div className={styles.featuredBottomLeft}>
              <p className={styles.featuredCompany}>{company}</p>
              <p className={styles.featuredTitle}>{title}</p>
            </div>
            <div className={styles.featuredMeta}>
              {role && (
                <span className={styles.metaRow}>
                  <span className={styles.metaKey}>Role</span>
                  <span className={styles.metaDot}>·</span>
                  {role}
                </span>
              )}
              {tags.length > 0 && (
                <span className={styles.metaRow}>
                  <span className={styles.metaKey}>Stack</span>
                  <span className={styles.metaDot}>·</span>
                  {tags.join(' · ')}
                </span>
              )}
              {scale && (
                <span className={styles.metaRow}>
                  <span className={styles.metaKey}>Scale</span>
                  <span className={styles.metaDot}>·</span>
                  {scale}
                </span>
              )}
            </div>
          </div>
        </div>
      </button>
    )
  }

  if (variant === 'standard') {
    return (
      <button onClick={onSelect} className={`${styles.card} ${styles.cardStandard}`}>
        <div className={styles.shim} />
        <img src={image} alt={company} className={styles.cardImg} loading="lazy" />
        <div className={styles.cardBar}>
          <div className={styles.barTop}>
            <span className={styles.numberLabel}>Nº {number}</span>
            {role && year && (
              <span className={styles.roleYear}>
                {role.toUpperCase()} · {year}
              </span>
            )}
          </div>
          <p className={styles.standardCompany}>{company}</p>
          <p className={styles.standardTitle}>{title}</p>
        </div>
      </button>
    )
  }

  return (
    <button onClick={onSelect} className={`${styles.card} ${styles.cardSmall}`}>
      <div className={styles.shim} />
      <img src={image} alt={company} className={styles.cardImg} />
      <div className={styles.cardBar}>
        <span className={styles.numberLabel}>Nº {number}</span>
        <p className={styles.smallCompany}>{company}</p>
        {role && year && (
          <span className={styles.roleYear}>
            {role.toUpperCase()} · {year}
          </span>
        )}
      </div>
    </button>
  )
}
