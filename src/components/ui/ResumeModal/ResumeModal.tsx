import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ResumeModal.module.css'
import { resumes } from '../../../data/resumes'

interface ResumeModalProps {
  onClose: () => void
}

const FADE_MS = 150

export function ResumeModal({ onClose }: ResumeModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(onClose, FADE_MS)
  }

  useEffect(() => {
    closeRef.current?.focus()
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
    }
  }, [])

  return createPortal(
    <div
      className={`${styles.backdrop} ${isClosing ? styles.closing : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Select a résumé to download"
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Download Résumé</h2>
          <button ref={closeRef} className={styles.close} onClick={handleClose} aria-label="Close">
            ×
          </button>
        </div>
        <p className={styles.subtitle}>Select the version that fits your needs.</p>
        <ul className={styles.list}>
          {resumes.map((r) => (
            <li key={r.label}>
              <a href={r.href} download className={styles.option} onClick={handleClose}>
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
