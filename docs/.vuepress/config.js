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
      { text: "在线音乐播放器", link: "http://music.mtnhao.com/" },
      { text: "Blog", link: "http://www.mtnhao.com/" },
      { text: "Github", link: "https://github.com/maomao1996/mm-notes" }
    ],
    sidebar: [
      {
        title: "Vue",
        collapsable: true,
        path: "/vue/"
      },
      {
        title: "CSS",
        collapsable: true,
        children: ["css/", "css/skill"]
      },
      {
        title: "工具方法",
        collapsable: true,
        children: ["utils/regexp", "utils/function"]
      },
      {
        title: "Node 相关",
        collapsable: true,
        children: ["node/npm", "node/depend"]
      },
      {
        title: "Git",
        collapsable: true,
        path: "/git/"
      }
    ],
    lastUpdated: "更新时间"
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
