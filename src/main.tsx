import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/latin-300.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-400-italic.css'
import '@fontsource/cormorant-garamond/latin-600.css'
import '@fontsource/cormorant-garamond/latin-600-italic.css'
import './index.css'
import App from './App.tsx'

// Freeze viewport height so iOS browser chrome show/hide doesn't cause layout shifts.
// Re-measure only when the width changes (rotation / window resize), not on vertical chrome changes.
let lastWidth = window.innerWidth
const setVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
setVh()
window.addEventListener('resize', () => {
  if (window.innerWidth === lastWidth) return
  lastWidth = window.innerWidth
  setVh()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
