import { h, App } from 'vue'
import Theme from 'vitepress/theme'

import Visitor from './components/Visitor.vue'
import Copyright from './components/Copyright.vue'
import AsideSponsors from './components/AsideSponsors.vue'

import './styles/index.scss'

if (typeof window !== 'undefined') {
  /* 注销 PWA 服务 */
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister()
      }
    })
  }

  /* 删除浏览器中的缓存 */
  if ('caches' in window) {
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          return caches.delete(key)
        })
      )
    })
  }
}

export default Object.assign({}, Theme, {
  Layout: () =>
    h(Theme.Layout, null, {
      /**
       * 相关插槽
       * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
       */
      'nav-bar-title-after': () => h(Visitor),
      'doc-after': () => h(Copyright),
      'aside-bottom': () => h(AsideSponsors)
    }),
  enhanceApp({ app }: { app: App }) {
    app.provide('DEV', process.env.NODE_ENV === 'development')
  }
})
