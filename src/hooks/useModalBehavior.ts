import { useEffect, useRef, type RefObject } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useModalBehavior(
  panelRef: RefObject<HTMLElement | null>,
  initialFocusRef: RefObject<HTMLElement | null>,
  onRequestClose: () => void
) {
  const closeRef = useRef(onRequestClose)

  useEffect(() => {
    closeRef.current = onRequestClose
  })

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    initialFocusRef.current?.focus()
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    // Keep assistive tech and Tab inside the dialog; modals are portaled outside #root
    const appRoot = document.getElementById('root')
    appRoot?.setAttribute('inert', '')

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return closeRef.current()
      if (e.key !== 'Tab') return
      const items = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (!items || items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (!panelRef.current?.contains(active)) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
      appRoot?.removeAttribute('inert')
      opener?.focus()
    }
  }, [panelRef, initialFocusRef])
}
