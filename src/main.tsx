import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Freeze viewport height at load time so iOS browser chrome show/hide doesn't cause layout shifts
document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
