import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tailwindvite/',   // 👈 VERY IMPORTANT
  plugins: [vue(), tailwindcss()],
})
