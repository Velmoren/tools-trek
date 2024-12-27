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
        'migration': resolve(__dirname, 'migration.html'),
        'blog': resolve(__dirname, 'blog.html'),
        'blog-item': resolve(__dirname, 'blog-item.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})