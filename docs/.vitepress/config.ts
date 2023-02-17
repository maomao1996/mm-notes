import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',

  lang: 'zh-CN',
  title: '茂茂物语',
  description: '茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996' }],

    footer: {
      copyright: 'Copyright © 2019-present maomao'
    },

    algolia: {
      appId: 'UVB82VCF2Y',
      apiKey: '4c67197afadb283c77e084bd50618c60',
      indexName: 'fe-mm'
    },

    outline: 'deep'
  },

  markdown: {
    lineNumbers: true
  }
})
