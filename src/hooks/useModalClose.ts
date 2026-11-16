import { useCallback, useEffect, useRef, useState } from 'react'

const FADE_MS = 150

/** Plays the fade-out, then calls onClose. Safe against double-clicks and unmounts. */
export function useModalClose(onClose: () => void) {
  const [isClosing, setIsClosing] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const handleClose = useCallback(() => {
    if (timer.current !== undefined) return
    setIsClosing(true)
    timer.current = window.setTimeout(() => onCloseRef.current(), FADE_MS)
  }, [])

  return { isClosing, handleClose }
}
