import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/interview/': [
    {
      text: 'JavaScript 基础知识',
      collapsible: true,
      children: ['/interview/base/types.md', '/interview/base/conversions.md']
    },
    '/interview/es6/',
    {
      text: '概念知识',
      collapsible: true,
      children: ['/interview/concept/module.md']
    },
    {
      text: '网络知识',
      collapsible: true,
      children: ['/interview/network/http.md']
    },
    '/interview/browser/',
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
      children: ['/utils/regexp.md', '/utils/function.md', '/utils/library.md']
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
}
