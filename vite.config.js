import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: 'fylo-landing-page-with-two-column-layout-master/',
  plugins: [react()],
})
