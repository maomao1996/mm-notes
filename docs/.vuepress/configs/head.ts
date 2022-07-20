import type { HeadConfig } from '@vuepress/core'

const isProduction = process.env.NODE_ENV === 'production'

export const head: HeadConfig[] = [
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
  ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c' }],
  ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  [
    'script',
    {
      src: isProduction
        ? 'https://hm.baidu.com/hm.js?8092fab2f2adfc7938ba5b8885aef5b4'
        : ''
    }
  ]
]
