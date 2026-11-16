import { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './ProjectModal.module.css'
import { useModalBehavior } from '../../../hooks/useModalBehavior'
import { useModalClose } from '../../../hooks/useModalClose'
import type { Project } from '../../../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const { isClosing, handleClose } = useModalClose(onClose)

  useModalBehavior(panelRef, closeRef, handleClose)

  return createPortal(
    <div
      className={`${styles.backdrop} ${isClosing ? styles.closing : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
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
          <p id={titleId} className={styles.company}>
            {project.company}
          </p>
          <p className={styles.title}>{project.title}</p>
          <div className={styles.meta}>
            {project.role && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Role</span>
                <span className={styles.metaDot} aria-hidden="true">
                  ·
                </span>
                {project.role}
              </span>
            )}
            {project.team && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Team</span>
                <span className={styles.metaDot} aria-hidden="true">
                  ·
                </span>
                {project.team}
              </span>
            )}
            {project.year && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Year</span>
                <span className={styles.metaDot} aria-hidden="true">
                  ·
                </span>
                {project.year}
              </span>
            )}
            {project.scale && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Scale</span>
                <span className={styles.metaDot} aria-hidden="true">
                  ·
                </span>
                {project.scale}
              </span>
            )}
            {project.tags.length > 0 && (
              <span className={styles.metaRow}>
                <span className={styles.metaKey}>Stack</span>
                <span className={styles.metaDot} aria-hidden="true">
                  ·
                </span>
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
