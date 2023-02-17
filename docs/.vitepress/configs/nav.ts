import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端知识', link: '/fe/es6/', activeMatch: '^/fe' },
  { text: '源码阅读', link: '/analysis/utils/only-allow', activeMatch: '^/analysis' },
  { text: '奇淫技巧', link: '/tricks/utils/library', activeMatch: '^/tricks' },
  { text: '提效工具', link: '/efficiency/online-tools', activeMatch: '^/efficiency' },
  { text: '踩坑记录', link: '/pit/h5', activeMatch: '^/pit' },
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
