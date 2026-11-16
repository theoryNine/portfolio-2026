import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ResumeModal.module.css'
import { useModalBehavior } from '../../../hooks/useModalBehavior'
import { resumes } from '../../../data/resumes'

interface ResumeModalProps {
  onClose: () => void
}

const FADE_MS = 150

export function ResumeModal({ onClose }: ResumeModalProps) {
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
      aria-label="Select a résumé to download"
    >
      <div ref={panelRef} className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Download Résumé</h2>
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
