// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
<<<<<<< HEAD
import ArticleList from './components/ArticleList.vue'
import Comments from './components/Comments.vue'
import NewNotFound from './components/NewNotFound.vue'
import BackLast from './components/BackLast.vue'
import FriendList from './components/FriendList.vue'
=======
import NotFound from './components/NotFound.vue'
>>>>>>> a4110799cfae1f6646b93ef93586756d34512a2c
import './style.css'
import 'uno.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'not-found': () => h(NewNotFound),
      'doc-after': () => h(Comments),
      'doc-before': () => h(BackLast),

      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // eslint-disable-next-line unused-imports/no-unused-vars
<<<<<<< HEAD
  async enhanceApp({ app, router, siteData }) {
    // @ts-expect-error import for vite
    if (!import.meta.env.SSR) {
      const { default: NProgress } = await import('nprogress')
      const { inject } = await import('@vercel/analytics')
      router.onBeforeRouteChange = () => {
        NProgress.start()
      }
      router.onAfterRouteChanged = () => {
        NProgress.done()
      }
      inject()
    }
    app.component('ArticleList', ArticleList)
    app.component('FriendList', FriendList)

=======
  enhanceApp({ app, router, siteData }) {
>>>>>>> a4110799cfae1f6646b93ef93586756d34512a2c
    // ...
  },

}
