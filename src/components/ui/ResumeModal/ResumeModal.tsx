import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './ResumeModal.module.css'
import { resumes } from '../../../data/resumes'

interface ResumeModalProps {
  onClose: () => void
}

export function ResumeModal({ onClose }: ResumeModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Select a résumé to download"
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Download Résumé</h2>
          <button ref={closeRef} className={styles.close} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <p className={styles.subtitle}>Select the version that fits your needs.</p>
        <ul className={styles.list}>
          {resumes.map((r) => (
            <li key={r.label}>
              <a href={r.href} download className={styles.option} onClick={onClose}>
                <span className={styles.optionLabel}>{r.label}</span>
                <span className={styles.optionDesc}>{r.description}</span>
                <span className={styles.optionArrow} aria-hidden="true">↓</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  )
}
