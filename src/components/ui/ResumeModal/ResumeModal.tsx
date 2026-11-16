import { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './ResumeModal.module.css'
import { useModalBehavior } from '../../../hooks/useModalBehavior'
import { useModalClose } from '../../../hooks/useModalClose'
import { resumes } from '../../../data/resumes'

interface ResumeModalProps {
  onClose: () => void
}

export function ResumeModal({ onClose }: ResumeModalProps) {
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
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            Download Résumé
          </h2>
          <button ref={closeRef} className={styles.close} onClick={handleClose} aria-label="Close">
            ×
          </button>
        </div>
        <ul className={styles.list}>
          {resumes.map((r) => (
            <li key={r.label}>
              <a href={r.href} download className={styles.option} onClick={handleClose}>
                <span className={styles.optionLabel}>{r.label}</span>
                <span className={styles.optionDesc}>{r.description}</span>
                <span className={styles.optionArrow} aria-hidden="true">
                  ↓
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  )
}
