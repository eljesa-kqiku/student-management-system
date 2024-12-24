import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: "dev/student_management_system/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
