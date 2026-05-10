import { useState } from 'react'
import styles from './NavBar.module.css'
import { Button } from '../../ui/Button/Button'
import { nav } from '../../../data/nav'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoAccentDot} />
          {nav.logo.split(' ')[0]}
          <span className={styles.logoDot} />
          {nav.logo.split(' ')[1]}
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
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
          <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕ CLOSE' : '☰ MENU'}
          </Button>
        </div>
      </div>
    </header>
  )
}
