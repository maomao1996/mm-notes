import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
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
    children: ['/utils/regexp.md', '/utils/function.md', '/utils/library.md']
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
    text: '终端',
    children: [
      '/terminal/zsh.md',
      {
        text: 'Git',
        activeMatch: '^/git',
        link: '/git/README.md'
      }
    ]
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
]
