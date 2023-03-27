import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Colorless',
  description: 'A Vitepress Blog Template',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/' },
      { text: 'links', link: '/links' },
      { text: 'About', link: '/about' },
    ],
    footer: {
      message: 'By Dustella, Under CC BY-NC-SA 4.0 License',
      copyright: '',
    },

  },
  vite: {
    plugins: [Unocss()],
  },

})
