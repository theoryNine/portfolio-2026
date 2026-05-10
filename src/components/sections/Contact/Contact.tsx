import { useState } from 'react'
import styles from './Contact.module.css'
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel'
import { Button } from '../../ui/Button/Button'
import { ResumeModal } from '../../ui/ResumeModal/ResumeModal'
import { contact } from '../../../data/contact'

export function Contact() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <SectionLabel number={contact.sectionNumber} title={contact.sectionTitle} />
        <div className={styles.body}>
          <h2 className={styles.headline}>
            {contact.headline.split('\n').map((line, i) => (
              <span key={i} className={styles.headlineLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.subtext}>{contact.subtext}</p>
          <div className={styles.actions}>
            <Button href={contact.primaryHref} variant="primary">
              {contact.primaryLabel}
            </Button>
            {contact.links.map((link) =>
              link.resumeModal ? (
                <Button key={link.label} variant="outline" onClick={() => setResumeOpen(true)}>
                  {link.label}
                </Button>
              ) : (
                <Button key={link.label} href={link.href} variant="outline">
                  {link.label}
                </Button>
              ),
            )}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <span>{contact.footerCopyright}</span>
            <span>{contact.footerCredit}</span>
            <span>{contact.footerLocation}</span>
          </div>
        </div>
      </footer>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </section>
  )
}
