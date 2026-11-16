import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ProjectModal.module.css'
import { useModalBehavior } from '../../../hooks/useModalBehavior'
import type { Project } from '../../../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const FADE_MS = 150

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(onClose, FADE_MS)
  }

  useModalBehavior(panelRef, closeRef, handleClose)

  return createPortal(
    <div
      className={`${styles.backdrop} ${isClosing ? styles.closing : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.company} project details`}
    >
      <div ref={panelRef} className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageWrap}>
          <img
            src={project.image}
            alt={`${project.company} website screenshot`}
            className={styles.image}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.number}>Nº {project.number}</span>
            <button
              ref={closeRef}
              className={styles.close}
              onClick={handleClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <p className={styles.company}>{project.company}</p>
          <p className={styles.title}>{project.title}</p>
          <div className={styles.meta}>
            {project.role && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Role</span>
                <span className={styles.metaDot}>·</span>
                {project.role}
              </span>
            )}
            {project.team && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Team</span>
                <span className={styles.metaDot}>·</span>
                {project.team}
              </span>
            )}
            {project.year && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Year</span>
                <span className={styles.metaDot}>·</span>
                {project.year}
              </span>
            )}
            {project.scale && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Scale</span>
                <span className={styles.metaDot}>·</span>
                {project.scale}
              </span>
            )}
            {project.tags.length > 0 && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Stack</span>
                <span className={styles.metaDot}>·</span>
                {project.tags.join(' · ')}
              </span>
            )}
          </div>
          {project.description && <p className={styles.description}>{project.description}</p>}
        </div>
      </div>
    </div>,
    document.body
  )
}
