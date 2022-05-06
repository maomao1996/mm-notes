import type { DefaultThemeOptions } from 'vuepress'
import { defineUserConfig } from 'vuepress'
const { path } = require('@vuepress/utils')

const isProduction = process.env.NODE_ENV === 'production'

// 兼容 GitHub Pages 和 vercel 部署
const base = process.env.BUILD_ENV ? process.env.BUILD_ENV : '/'

export default defineUserConfig<DefaultThemeOptions>({
  base,
  dest: './dist',
  bundler: isProduction ? '@vuepress/webpack' : '@vuepress/vite',
  lang: 'zh-CN',
  title: '茂茂物语',
  description: '前端常用知识、踩坑记录、软件推荐等',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
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
  ],
  theme: path.resolve(__dirname, 'theme'),
  themeConfig: {
    logo: '/logo.png',
    navbar: [
      {
        text: '前端内卷不归路',
        activeMatch: '^/interview',
        link: '/interview/base/types.md'
      },
      {
        text: '在线工具',
        children: [
          {
            text: '网页工具',
            link: '/online-tools/',
            activeMatch: '/online-tools/$'
          },
          '/online-tools/bookmark-scripts.md'
        ]
      },
      {
        text: '工具方法',
        children: [
          '/utils/regexp.md',
          '/utils/function.md',
          '/utils/library.md'
        ]
      },
      {
        text: 'Vue / CSS / Node',
        children: [
          {
            text: 'Node 相关',
            children: ['/node/npm.md', '/node/toolkit.md']
          },
          {
            text: 'CSS',
            children: [
              {
                text: 'CSS 语法相关',
                link: '/css/',
                activeMatch: '/css/$'
              },
              '/css/skill.md',
              '/css/scss.md'
            ]
          },
          {
            text: 'Vue',
            children: ['/vue/']
          },
          {
            text: '疑难杂症',
            children: ['/issue/h5.md', '/issue/pc.md']
          }
        ]
      },
      {
        text: 'Git',
        activeMatch: '^/git',
        link: '/git/README.md'
      },
      {
        text: '软件推荐',
        children: [
          '/software/cross-platform.md',
          '/software/mac.md',
          '/software/windows.md',
          '/software/browser.md',
          '/software/vscode.md',
          '/software/webstorm.md',
          '/software/zsh.md'
        ]
      },
      {
        text: '主页和作品',
        children: [
          { text: 'Blog', link: 'https://www.fe-mm.com' },
          { text: 'Github', link: 'https://github.com/maomao1996' },
          { text: '在线音乐', link: 'https://netease-music.fe-mm.com' }
        ]
      }
    ],
    sidebar: {
      '/interview/': [
        {
          text: 'JavaScript 基础知识',
          children: [
            '/interview/base/types.md',
            '/interview/base/conversions.md'
          ]
        },
        '/interview/es6/',
        '/interview/coding/'
      ],
      '/online-tools/': [
        {
          text: '在线工具',
          children: ['/online-tools/', '/online-tools/bookmark-scripts.md']
        }
      ],
      '/utils/': [
        {
          text: '工具方法',
          children: [
            '/utils/regexp.md',
            '/utils/function.md',
            '/utils/library.md'
          ]
        }
      ],
      '/vue/': [
        {
          text: 'Vue',
          link: '/vue/'
        }
      ],
      '/css/': [
        {
          text: 'CSS',
          children: ['/css/', '/css/skill.md', '/css/scss.md']
        }
      ],
      '/node/': [
        {
          text: 'Node 相关',
          children: ['/node/npm.md', '/node/toolkit.md']
        }
      ],
      '/git/': ['/git/', '/git/command.md'],
      '/software/': [
        {
          text: '软件推荐',
          children: [
            '/software/cross-platform.md',
            '/software/mac.md',
            '/software/windows.md',
            '/software/browser.md',
            '/software/vscode.md',
            '/software/webstorm.md',
            '/software/zsh.md'
          ]
        }
      ],
      '/issue/': [
        {
          text: '疑难杂症',
          children: ['/issue/h5.md', '/issue/pc.md']
        }
      ]
    },
    lastUpdatedText: '上次更新',
    contributors: false
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索'
          }
        }
      }
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'UA-153242456-1'
      }
    ],
    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      '@vuepress/plugin-shiki',
      {
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        theme: 'dark-plus'
      }
    ]
  ]
})
