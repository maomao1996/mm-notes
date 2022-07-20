import { defineUserConfig } from '@vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { shikiPlugin } from '@vuepress/plugin-shiki'

import { head, navbar, sidebar } from './configs'

const isProduction = process.env.NODE_ENV === 'production'

// 兼容 GitHub Pages 和 vercel 部署
const base = process.env.BUILD_ENV
  ? (process.env.BUILD_ENV as `/${string}/`)
  : '/'

export default defineUserConfig({
  base,
  dest: './dist',
  bundler: isProduction ? webpackBundler() : viteBundler(),
  lang: 'zh-CN',
  title: '茂茂物语',
  description: '前端常用知识、踩坑记录、软件推荐等',
  head,
  theme: defaultTheme({
    logo: '/logo.png',
    navbar,
    sidebar,
    lastUpdatedText: '上次更新',
    contributors: false,
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页'
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索'
        }
      }
    }),
    pwaPlugin(),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    }),
    isProduction ? googleAnalyticsPlugin({ id: 'UA-153242456-1' }) : [],
    // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    isProduction ? shikiPlugin({ theme: 'dark-plus' }) : []
  ]
})
