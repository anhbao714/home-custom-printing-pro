import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/home-custom-printing-pro/', // 👈 Thêm dòng này
  plugins: [react()],
})
