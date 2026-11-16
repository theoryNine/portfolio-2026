import { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import { Button } from '../../ui/Button/Button'
import { nav } from '../../../data/nav'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccentDot} aria-hidden="true" />
          {nav.logo.split(' ')[0]}
          <span className={styles.logoDot} aria-hidden="true" />
          {nav.logo.split(' ')[1]}
        </a>

        <nav
          id="site-nav"
          aria-label="Primary"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href={nav.ctaHref} variant="outline">
            {nav.cta}
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="site-nav"
            aria-label={isOpen ? nav.menuCloseLabel : nav.menuOpenLabel}
          >
            <span aria-hidden="true">{isOpen ? '✕ CLOSE' : '☰ MENU'}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
