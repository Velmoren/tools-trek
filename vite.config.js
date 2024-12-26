import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/tools-trek/',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'monday': resolve(__dirname, 'monday.html'),
        'atlassian': resolve(__dirname, 'atlassian.html'),
        'contacts': resolve(__dirname, 'contacts.html'),
        'about-us': resolve(__dirname, 'about-us.html'),
        'solutions': resolve(__dirname, 'solutions.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})