module.exports = {
  base: '/mm-notes/',
  dest: './dist',
  title: '前端物语',
  description: '前端常用知识、踩坑记录、软件推荐等',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端物语',
      description: '前端常用知识、踩坑记录、软件推荐等'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'maomao1996/mm-notes/',
    nav: [
      { text: '在线音乐播放器', link: 'http://music.mtnhao.com/' },
      { text: 'Blog', link: 'http://www.mtnhao.com/' }
    ],
    sidebar: [
      {
        title: 'Vue',
        path: '/vue/'
      },
      {
        title: 'CSS',
        children: ['css/', 'css/skill', 'css/scss']
      },
      {
        title: '工具方法',
        children: ['utils/regexp', 'utils/function']
      },
      {
        title: '疑难杂症',
        children: ['issue/h5','issue/pc']
      },
      {
        title: 'Node 相关',
        children: ['node/npm', 'node/depend']
      },
      {
        title: 'Git',
        path: '/git/'
      },
      {
        title: '软件相关',
        children: [
          'software/mac',
          'software/windows',
          'software/browser',
          'software/vscode',
          'software/webstorm'
        ]
      }
    ],
    lastUpdated: '上次更新'
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-153242456-1'
      }
    ],
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ]
  ]
}
