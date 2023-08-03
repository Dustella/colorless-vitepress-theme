
import { resolve } from 'node:path'
import { createWriteStream } from 'node:fs'
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { SitemapStream } from 'sitemap'
const links = []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Colorless',
  description: 'A Vitepress Blog Template',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Links', link: '/links' },
    ],
    footer: {
      message: 'By Dustella, Under CC BY-NC-SA 4.0 License',
      copyright: '',
    },

  },
  vite: {
    plugins: [Unocss()],
  },
  head: [
    ['link', { rel: 'icon', href: 'https://img-cdn.dustella.net/wizard.ico' }],
    // meta
    ['meta', { name: 'author', content: 'Dustella' }],
    ['meta', { name: 'keywords', content: 'Dustella, Dustella\'s Blog, Dustella\'s Website, Dustella\'s Home' }],
    // meta for seo
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-kpKmYXHSMC' }],

  ],
  transformHtml: (_, id, { pageData: { relativePath, frontmatter: { date: lastmod } } }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      const iUrl = relativePath.replace(/((^|\/)index)?\.md$/, '$2')
      const url = (iUrl === '' || iUrl.endsWith('/')) ? iUrl : `${iUrl}.html`
      links.push({ url, lastmod })
    }
  },
  buildEnd: ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://www.dustella.net/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach(link => sitemap.write(link))
    sitemap.end()
  },
})