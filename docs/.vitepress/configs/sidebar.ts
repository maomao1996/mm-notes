import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/': [
    {
      text: 'JavaScript 基础知识',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/fe/javascript/types' },
        { text: '类型转换', link: '/fe/javascript/conversions' },
        { text: '继承', link: '/fe/javascript/inherit' }
      ]
    },
    {
      text: 'ES6 常用知识点',
      link: '/fe/es6/'
    },
    {
      text: 'HTML / CSS',
      collapsed: false,
      items: [
        { text: 'HTML 理论知识点', link: '/fe/html/' },
        { text: 'CSS 理论知识点', link: '/fe/css/' }
      ]
    },
    {
      text: '浏览器与网络',
      collapsed: false,
      items: [
        { text: '浏览器相关知识点', link: '/fe/browser/' },
        { text: 'TCP', link: '/fe/network/tcp' },
        { text: 'HTTP', link: '/fe/network/http' }
      ]
    },
    {
      text: '概念知识点',
      collapsed: false,
      items: [
        { text: '模块化', link: '/fe/concept/module' },
        { text: '前端页面渲染方式', link: '/fe/concept/page-rendering' }
      ]
    },
    {
      text: '编程题',
      link: '/fe/coding/'
    }
  ],
  '/analysis/': [
    {
      text: '工具库',
      // collapsed: false,
      items: [
        { text: 'only-allow', link: '/analysis/utils/only-allow' },
        { text: 'clsx', link: '/analysis/utils/clsx' }
      ]
    }
  ],
  '/tricks/': [
    {
      text: '常用工具/方法',
      collapsed: false,
      items: [
        { text: '工具库整理', link: '/tricks/utils/library' },
        { text: '常用正则整理', link: '/tricks/utils/regexp' },
        { text: '常用方法整理', link: '/tricks/utils/function' }
      ]
    },
    {
      text: 'Git 语法与技巧',
      collapsed: false,
      items: [
        { text: 'Git 相关技巧', link: '/tricks/git/' },
        { text: 'Git 命令清单', link: '/tricks/git/command' }
      ]
    },
    {
      text: 'CSS 语法与技巧',
      collapsed: false,
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
  '/efficiency/': [
    {
      text: '软件/工具',
      collapsed: false,
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
      collapsed: false,
      items: [
        { text: 'Zsh 配置', link: '/efficiency/terminal/zsh' },
        { text: 'npm 常用命令', link: '/efficiency/terminal/npm' },
        { text: '命令行工具', link: '/efficiency/terminal/toolkit' },
        { text: 'Shell 命令', link: '/efficiency/terminal/shell' }
      ]
    }
  ],
  '/pit/': [
    {
      text: '踩坑记录',
      // collapsed: false,
      items: [
        { text: 'npm 踩坑记录', link: '/pit/npm' },
        { text: 'PC 踩坑记录', link: '/pit/pc' },
        { text: 'H5 踩坑记录', link: '/pit/h5' }
      ]
    }
  ]
}
