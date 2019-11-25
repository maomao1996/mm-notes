module.exports = {
  base: "/mm-notes/",
  dest: "./dist",
  title: "茂茂的开发笔记",
  description: "茂茂的开发笔记",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "茂茂的开发笔记",
      description: "茂茂的开发笔记"
    }
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "Github", link: "https://github.com/maomao1996/mm-notes" },
      { text: "Blog", link: "http://www.mtnhao.com/" },
      { text: "在线音乐播放器", link: "http://music.mtnhao.com/" }
    ],
    sidebarDepth: 3,
    sidebar: [
      {
        title: "工具方法",
        collapsable: true,
        children: ["utils/regexp"]
      },
      {
        title: "CSS",
        collapsable: true,
        children: ["css/", "css/skill"]
      }
    ],
    lastUpdated: "上次更新"
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-153242456-1"
      }
    ]
  ]
};
