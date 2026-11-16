import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Content Security Policy, injected into production builds only (the dev server needs inline
// styles and a websocket for HMR). frame-ancestors can't be set from a <meta> tag; set it as an
// HTTP header at the host if you want clickjacking protection.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ')

const cspPlugin = (): Plugin => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: { 'http-equiv': 'Content-Security-Policy', content: csp },
      injectTo: 'head-prepend',
    },
  ],
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cspPlugin()],
})
