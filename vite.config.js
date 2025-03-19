import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  // base: '/home-custom-printing-pro/', // 👈 Thêm dòng này
  // plugins: [react()],
  base: '/home-custom-printing-pro/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // 👇 tạo thêm 404.html khi build
        404: resolve(__dirname, 'index.html'),
      },
    },
  },
});
