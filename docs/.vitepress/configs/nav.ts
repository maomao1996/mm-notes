import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端物语', link: '/fe/es6/', activeMatch: '^/fe' },
  { text: '源码阅读', link: '/analysis/utils/only-allow', activeMatch: '^/analysis' },
  {
    text: '奇淫技巧',
    items: [
      {
        text: '常用工具/方法',
        items: [
          { text: '工具库整理', link: '/tricks/utils/library' },
          { text: '常用正则整理', link: '/tricks/utils/regexp' },
          { text: '常用方法整理', link: '/tricks/utils/function' }
        ]
      },
      {
        text: 'Git 语法与技巧',
        items: [
          { text: 'Git 相关技巧', link: '/tricks/git/' },
          { text: 'Git 命令清单', link: '/tricks/git/command' }
        ]
      },
      {
        text: 'CSS 语法与技巧',
        items: [
          { text: 'CSS 语法', link: '/tricks/css/spec' },
          { text: 'CSS 奇淫技巧', link: '/tricks/css/tricks' },
          { text: 'Sass 常用技巧', link: '/tricks/sass' }
        ]
      },
      {
        text: 'Vue 小技巧',
        link: '/tricks/vue/'
      }
    ],
    activeMatch: '^/tricks'
  },
  {
    text: '提效工具',
    items: [
      {
        text: '软件/工具',
        items: [
          { text: '多平台软件', link: '/efficiency/software/cross-platform' },
          { text: 'Mac 平台', link: '/efficiency/software/mac' },
          { text: 'Windows 平台', link: '/efficiency/software/windows' },
          { text: '浏览器设置与扩展', link: '/efficiency/software/browser' },
          { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
          { text: 'WebStorm 配置', link: '/efficiency/software/webstorm' },
          { text: '在线工具', link: '/efficiency/online-tools' },
          { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
        ]
      },
      {
        text: '终端相关',
        items: [
          { text: 'Zsh 配置', link: '/efficiency/terminal/zsh' },
          { text: 'npm 常用命令', link: '/efficiency/terminal/npm' },
          { text: '命令行工具', link: '/efficiency/terminal/toolkit' },
          { text: 'Shell 命令', link: '/efficiency/terminal/shell' }
        ]
      }
    ],
    activeMatch: '^/efficiency'
  },
  { text: '踩坑记录', link: '/pit/npm', activeMatch: '^/pit' },
  {
    text: '茂茂',
    items: [
      { text: '个人主页', link: 'https://fe-mm.com' },
      {
        text: '日常笔记',
        link: 'https://github.com/maomao1996/daily-notes'
      },
      { text: 'mmPlayer', link: 'https://netease-music.fe-mm.com' },
      {
        text: '油猴脚本',
        link: 'https://github.com/maomao1996/tampermonkey-scripts'
      }
    ]
  }
]
