import type { NavData } from '../../.vitepress/theme/types'

export const DATA: NavData[] = [
  {
    title: '工具库',
    items: [
      {
        title: 'lodash',
        desc: '一个一致性、模块化、高性能的 JavaScript 实用工具库',
        link: 'https://github.com/lodash/lodash'
      },
      {
        title: 'ramda',
        desc: '专为函数式编程而设计的工具库',
        link: 'https://github.com/ramda/ramda'
      },
      {
        title: 'qs',
        desc: '带有一些附加安全性的请求参数 parse 和 stringify 库',
        link: 'https://github.com/ljharb/qs'
      }
    ]
  },
  {
    title: '时间处理',
    items: [
      {
        title: 'dayjs',
        desc: '轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样',
        link: 'https://github.com/iamkun/dayjs'
      },
      {
        title: 'moment',
        desc: 'JavaScript 日期处理类库',
        link: 'https://github.com/moment/moment'
      },
      {
        title: 'date-fns',
        desc: '轻量级的 JavaScript 日期库，纯函数实现支持模块化',
        link: 'https://github.com/date-fns/date-fns'
      },
      {
        title: 'lunar-javascript',
        desc: '支持阳历、阴历、佛历和道历的日历工具库',
        link: 'https://github.com/6tail/lunar-javascript'
      },
      {
        title: 'calendar.js',
        desc: '中国农历（阴阳历）和西元阳历即公历互转',
        link: 'https://github.com/jjonline/calendar.js'
      }
    ]
  },
  {
    title: '请求处理',
    items: [
      {
        title: 'axios',
        desc: '基于 promise 的 HTTP 库，可以用在浏览器和 Node.js 中',
        link: 'https://github.com/axios/axios'
      },
      {
        badge: 'node',
        title: 'got',
        desc: '一个人性化且功能强大的 Node.js HTTP 请求库',
        link: 'https://github.com/sindresorhus/got'
      }
    ]
  },
  {
    title: '精度处理',
    items: [
      {
        title: 'big.js',
        desc: '用于任意精度的十进制算术运算',
        link: 'https://github.com/MikeMcl/big.js'
      },
      {
        title: 'number-precision',
        desc: '超小型精确四则运算',
        link: 'https://github.com/nefe/number-precision'
      }
    ]
  },
  {
    title: '字符串文本处理',
    items: [
      {
        title: 'camelcase',
        desc: '将使用破折号/点号/下划线/空格分隔的字符串转换为驼峰形式（camelCase）',
        link: 'https://github.com/sindresorhus/camelcase'
      },
      {
        title: 'change-case',
        desc: '快速转换字符串格式，支持 camelCase, PascalCase, Capital Case, snake_case, param-case, CONSTANT_CASE 等',
        link: 'https://github.com/blakeembrey/change-case'
      },
      {
        title: 'emoji-regex',
        desc: '匹配 emoji 的正则表达式',
        link: 'https://github.com/mathiasbynens/emoji-regex'
      }
    ]
  },
  {
    title: '动画',
    items: [
      {
        title: 'typed.js',
        desc: '动态打字效果',
        link: 'https://github.com/mattboldt/typed.js'
      },
      {
        title: 'countup.js',
        desc: '数字滚动动画',
        link: 'https://github.com/inorganik/countUp.js'
      },
      {
        badge: 'react',
        title: 'react-countup',
        desc: '基于 countup.js 封装的 React 组件',
        link: 'https://github.com/glennreyes/react-countup'
      },
      {
        title: 'tween.js',
        desc: '补间动画引擎',
        link: 'https://github.com/tweenjs/tween.js'
      },
      {
        title: 'lottie',
        desc: '基于跨平台动画渲染库，用于解析使用 Bodymovin 导出为 json 的 Adobe After Effects 动画',
        link: 'https://github.com/airbnb/lottie-web'
      },
      {
        title: 'gsap',
        desc: 'GreenSock 动画平台（GSAP）可以对 JavaScript 可以操作的所有内容进行动画处理',
        link: 'https://github.com/greensock/GSAP'
      },
      {
        badge: 'react',
        title: 'react-transition-group',
        desc: '基于 DOM 的过渡动画',
        link: 'https://github.com/reactjs/react-transition-group'
      },
      {
        badge: 'react',
        title: 'framer-motion',
        desc: '一个生产级的 React 动画库',
        link: 'https://www.framer.com/motion'
      },
      {
        badge: 'react',
        title: 'react-spring',
        desc: '一个基于弹性力学的现代动画库',
        link: 'https://github.com/react-spring/react-spring'
      }
    ]
  },
  {
    title: '特效',
    tag: 'h3',
    items: [
      {
        title: 'canvas-confetti',
        desc: '五彩纸屑特效',
        link: 'https://github.com/catdad/canvas-confetti'
      }
    ]
  },
  {
    title: '本地存储',
    items: [
      {
        title: 'localForage',
        desc: '一个快速、简单的 JavaScript 存储库',
        link: 'https://github.com/localForage/localForage'
      }
    ]
  },
  {
    title: '滚动处理',
    items: [
      {
        title: 'body-scroll-lock',
        desc: '一种通用的 body 滚动锁定解决方案',
        link: 'https://github.com/willmcpo/body-scroll-lock'
      },
      {
        title: 'better-scroll',
        desc: '重点解决移动端（已支持 PC）各种滚动场景需求的插件',
        link: 'https://github.com/ustbhuangyi/better-scroll'
      },
      {
        badge: 'react',
        title: 'better-scroll',
        desc: 'React 滚动组件',
        link: 'https://github.com/fisshy/react-scroll'
      },
      {
        badge: 'react',
        title: 'smooth-scrollbar',
        desc: '可定制、可扩展和高性能的自定义滚动条解决方案',
        link: 'https://github.com/idiotWu/smooth-scrollbar'
      }
    ]
  },
  {
    title: '事件处理',
    items: [
      {
        title: 'hotkeys-js',
        desc: '用于捕获键盘输入和输入的组合键',
        link: 'https://github.com/jaywcjlove/hotkeys'
      }
    ]
  },
  {
    title: '图片处理',
    items: [
      {
        title: 'html2canvas',
        desc: '页面截图（将 DOM 节点绘制为 canvas 再生成图片）',
        link: 'https://github.com/niklasvh/html2canvas'
      },
      {
        title: 'html-to-image',
        desc: '页面截图（将 DOM 节点绘制为 canvas 或 SVG 再生成图片）',
        link: 'https://github.com/bubkoo/html-to-image'
      },
      {
        title: 'satori',
        desc: '页面截图（将 HTML 和 CSS 转换为 SVG）',
        link: 'https://github.com/vercel/satori'
      },
      {
        title: 'medium-zoom',
        desc: '为图片提供可缩放的功能',
        link: 'https://github.com/francoischalifour/medium-zoom'
      },
      {
        title: 'qrcode',
        desc: 'QR 码和 2d 条码生成器（支持浏览器和 Node）',
        link: 'https://github.com/soldair/node-qrcode'
      },
      {
        badge: 'react',
        title: 'qrcode.react',
        desc: 'React 的二维码组件',
        link: 'https://github.com/zpao/qrcode.react'
      },
      {
        badge: 'node',
        title: 'qrcode-terminal',
        desc: '在终端中生成二维码',
        link: 'https://github.com/gtanner/qrcode-terminal'
      }
    ]
  },
  {
    title: '文件处理',
    items: [
      {
        title: 'FileSaver.js',
        desc: '保存/下载文件（受 blob 的大小和内存限制）',
        link: 'https://github.com/eligrey/FileSaver.js'
      },
      {
        title: 'StreamSaver.js',
        desc: '保存/下载文件（不受 blob 的大小和内存限制）',
        link: 'https://github.com/jimmywarting/StreamSaver.js'
      },
      {
        title: 'sheetjs',
        desc: '用于 Excel 的读取和导出',
        link: 'https://github.com/SheetJS/sheetjs'
      },
      {
        badge: 'node',
        title: 'node-fs-extra',
        desc: 'Node fs 模块的增强（如 promise 的支持）',
        link: 'https://github.com/jprichardson/node-fs-extra'
      },
      {
        badge: 'node',
        title: 'rimraf',
        desc: '用于删除文件和文件夹，类似 rm -rf',
        link: 'https://github.com/isaacs/rimraf'
      },
      {
        badge: 'node',
        title: 'glob',
        desc: '文件查找',
        link: 'https://github.com/isaacs/node-glob'
      },
      {
        badge: 'node',
        title: 'globby',
        desc: '使用更友好的文件查找（支持 promise、否定模式、ignore 文件配置等）',
        link: 'https://github.com/sindresorhus/globby'
      },
      {
        badge: 'node',
        title: 'cpy',
        desc: '使用更友好的文件复制（支持 glob 模式）',
        link: 'https://github.com/sindresorhus/cpy'
      }
    ]
  },
  {
    title: '版本号处理',
    items: [
      {
        title: 'semver',
        desc: '语义化版本解析器',
        link: 'https://github.com/npm/node-semver'
      }
    ]
  },
  {
    title: '数据校验',
    items: [
      {
        title: 'validator.js',
        desc: '字符串验证',
        link: 'https://github.com/validatorjs/validator.js'
      },
      {
        title: 'async-validator',
        desc: '异步表单验证',
        link: 'https://github.com/yiminghe/async-validator'
      }
    ]
  },
  {
    title: '富文本',
    items: [
      {
        title: 'braft-editor',
        desc: 'React 富文本编辑器',
        link: 'https://github.com/margox/braft-editor'
      }
    ]
  },
  {
    title: '代码编辑器',
    items: [
      {
        title: 'monaco-editor',
        desc: '微软开源的基于 VSCode 的代码编辑器。支持智能提示、代码高亮、代码格式化等',
        link: 'https://github.com/microsoft/monaco-editor'
      }
    ]
  },
  {
    title: '轮播',
    items: [
      {
        title: 'swiper',
        desc: '高性能的触摸滑动插件，支持 Javascript Vue 3 React AngularJS Solid Svelte',
        link: 'https://github.com/nolimits4web/swiper'
      },
      {
        badge: 'vue',
        title: 'vue-awesome-swiper',
        desc: '基于 swiper 封装的 Vue 组件，支持 Vue 2 和 Vue 3',
        link: 'https://github.com/surmon-china/vue-awesome-swiper'
      }
    ]
  },
  {
    title: '表单处理',
    items: [
      {
        badge: 'react',
        title: 'formik',
        desc: '提供组件和 Hooks 来管理表单状态和验证',
        link: 'https://github.com/jaredpalmer/formik'
      },
      {
        badge: 'react',
        title: 'react-hook-form',
        desc: '用于表单状态管理和验证的 React Hook',
        link: 'https://github.com/react-hook-form/react-hook-form'
      },
      {
        title: 'formily',
        desc: '阿里巴巴统一前端表单解决方案，支持 React, React Native, Vue 2/3',
        link: 'https://github.com/alibaba/formily'
      }
    ]
  },
  {
    title: '表格',
    items: [
      {
        title: 'ag-grid',
        desc: '功能齐全的高性能表格，支持 Javascript Vue React AngularJS Web Components',
        link: 'https://github.com/ag-grid/ag-grid'
      }
    ]
  },
  {
    title: '拖放',
    items: [
      {
        title: 'Sortable.js',
        desc: '适用于现代浏览器和触摸设备的可重新排序的拖放列表',
        link: 'https://github.com/SortableJS/Sortable'
      },
      {
        badge: 'react',
        title: 'dnd-kit',
        desc: 'React 的现代、轻量级、高性能、可访问和可扩展的拖放工具包',
        link: 'https://github.com/clauderic/dnd-kit'
      }
    ]
  },
  {
    title: '用户体验',
    items: [
      {
        title: 'shepherd',
        desc: '用户引导动画（基于 SVG 和 floating-ui）',
        link: 'https://github.com/shipshapecode/shepherd'
      },
      {
        title: 'intro.js',
        desc: '用户引导动画（使用 box-shadow 实现遮罩）',
        link: 'https://github.com/usablica/intro.js'
      },
      {
        title: 'driver.js',
        desc: '用户引导动画（使用 outline 实现遮罩）',
        link: 'https://github.com/kamranahmedse/driver.js'
      },
      {
        title: 'clipboard.js',
        desc: '复制到剪贴板',
        link: 'https://github.com/zenorocha/clipboard.js'
      },
      {
        title: 'copy-to-clipboard',
        desc: '复制到剪贴板',
        link: 'https://github.com/sudodoki/copy-to-clipboard'
      },
      {
        badge: 'node',
        title: 'clipboardy',
        desc: '在 Node.js 中访问系统剪贴板',
        link: 'https://github.com/sindresorhus/clipboardy'
      },
      {
        title: 'screenfull.js',
        desc: '将页面或任何元素全屏显示',
        link: 'https://github.com/sindresorhus/screenfull.js'
      },
      {
        title: 'nprogress',
        desc: '轻量级的加载进度条',
        link: 'https://github.com/rstacruz/nprogress'
      },
      {
        title: 'floating-ui',
        desc: '创建浮动元素的轻量库（气泡提示、用户引导、下拉框等）',
        link: 'https://github.com/floating-ui/floating-ui'
      }
    ]
  },
  {
    title: '开发调试',
    items: [
      {
        badge: 'node',
        title: 'serve',
        desc: '在本地快速启动一个静态文件服务器（支持各种配置功能强大）',
        link: 'https://github.com/vercel/serve'
      },
      {
        badge: 'node',
        title: 'http-server',
        desc: '在本地快速启动一个静态文件服务器（轻量）',
        link: 'https://github.com/http-party/http-server'
      },
      {
        title: 'eruda',
        desc: '在移动浏览器上展示开发者调试面板',
        link: 'https://github.com/liriliri/eruda'
      },
      {
        title: 'vconsole',
        desc: '一个轻量、可拓展、针对手机网页的前端开发者调试面板',
        link: 'https://github.com/Tencent/vConsole'
      }
    ]
  },
  {
    title: 'Webpack',
    items: [
      {
        title: 'webpack-chain',
        desc: '使用链式 API 来生成和简化 webpack 的配置的修改',
        link: 'https://github.com/neutrinojs/webpack-chain'
      },
      {
        title: 'speed-measure-webpack-plugin',
        desc: '统计 webpack 在各阶段的构建速度',
        link: 'https://github.com/stephencookdev/speed-measure-webpack-plugin'
      },
      {
        title: 'webpack-bundle-analyzer',
        desc: '通过可视化分析 webpack 打包文件的大小',
        link: 'https://github.com/webpack-contrib/webpack-bundle-analyzer'
      }
    ]
  },
  {
    title: '解析相关',
    items: [
      {
        badge: 'node',
        title: 'cheerio',
        desc: '为服务器特别定制的，快速、灵活、实施的 jQuery 核心实现，可以解析任何 HTML 或 XML 文档',
        link: 'https://github.com/cheeriojs/cheerio'
      }
    ]
  },
  {
    title: '自动化工具',
    items: [
      {
        title: 'puppeteer',
        desc: '控制 Chromium 的自动化工具',
        link: 'https://github.com/puppeteer/puppeteer'
      },
      {
        title: 'playwright',
        desc: '支持 Firefox / Chrome / WebKit(Safari) 三大浏览器的自动化工具',
        link: 'https://github.com/microsoft/playwright'
      },
      {
        title: 'puppeteer-extra',
        desc: 'puppeteer 的插件扩展',
        link: 'https://github.com/berstend/puppeteer-extra'
      }
    ]
  },
  {
    title: 'lint / 格式化相关',
    items: [
      {
        title: 'prettier',
        desc: '代码格式化工具',
        link: 'https://github.com/prettier/prettier'
      },
      {
        title: 'eslint',
        desc: 'ECMAScript/JavaScript 代码检查工具',
        link: 'https://github.com/eslint/eslint'
      },
      {
        title: 'stylelint',
        desc: 'CSS 代码检查工具',
        link: 'https://github.com/stylelint/stylelint'
      },
      {
        title: 'markdownlint',
        desc: 'Markdown 格式检查工具',
        link: 'https://github.com/DavidAnson/markdownlint'
      },
      {
        title: 'commitlint',
        desc: 'Git Commit Messages 格式检查工具',
        link: 'https://github.com/conventional-changelog/commitlint'
      }
    ]
  },
  {
    title: '相关辅助工具',
    tag: 'h3',
    items: [
      {
        title: 'husky',
        desc: 'Git Hooks 工具，让你操作 Git Hooks 变得更容易',
        link: 'https://github.com/typicode/husky'
      },
      {
        title: 'lint-staged',
        desc: '只对 Git 暂存文件运行 lint 从而提高速度',
        link: 'https://github.com/okonet/lint-staged'
      },
      {
        title: 'commitizen',
        desc: 'commit 辅助工具，获得有关提交消息格式的即时反馈',
        link: 'https://github.com/commitizen/cz-cli'
      }
    ]
  },
  {
    title: 'CLI 相关',
    items: [
      {
        title: 'zx',
        desc: '用 JavaScript 或 TypeScript 编写简单的命令行脚本',
        link: 'https://github.com/google/zx'
      },
      {
        title: 'inquirer',
        desc: '交互式命令行工具',
        link: 'https://github.com/SBoudrias/Inquirer.js'
      },
      {
        title: 'enquirer',
        desc: '交互式命令行工具（更好看）',
        link: 'https://github.com/enquirer/enquirer'
      },
      {
        title: 'prompts',
        desc: '轻量级交互式命令行工具',
        link: 'https://github.com/terkelg/prompts'
      },
      {
        title: 'execa',
        desc: 'Node child_process 模块的增强（如 promise 的支持、移除输出中最后的换行符等）',
        link: 'https://github.com/sindresorhus/execa'
      },
      {
        title: 'npm-run-all',
        desc: '用于并行或串行执行多个 npm 脚本',
        link: 'https://github.com/mysticatea/npm-run-all'
      },
      {
        title: 'commander.js',
        desc: '编写指令和处理命令行',
        link: 'https://github.com/tj/commander.js'
      },
      {
        title: 'yargs',
        desc: '命令行参数解析',
        link: 'https://github.com/yargs/yargs'
      },
      {
        title: 'plop',
        desc: '轻量级的项目搭建生成工具',
        link: 'https://github.com/plopjs/plop'
      },
      {
        title: 'dotenv',
        desc: '从 .env 文件加载环境变量到 process.env',
        link: 'https://github.com/motdotla/dotenv'
      },
      {
        title: 'dotenv-expand',
        desc: 'dotenv 的变量扩展，使 .env 文件支持变量语法',
        link: 'https://github.com/motdotla/dotenv-expand'
      },
      {
        title: 'simple-git',
        desc: '在 node 中执行 git 命令',
        link: 'https://github.com/steveukx/git-js'
      },
      {
        title: 'cosmiconfig',
        desc: '搜索并加载配置文件',
        link: 'https://github.com/davidtheclark/cosmiconfig'
      }
    ]
  },
  {
    title: '命令行输出美化',
    tag: 'h3',
    items: [
      {
        title: 'chalk',
        desc: '美化终端输出的文本样式',
        link: 'https://github.com/chalk/chalk'
      },
      {
        title: 'picocolors',
        desc: '美化终端输出的文本样式（更轻量）',
        link: 'https://github.com/alexeyraspopov/picocolors'
      },
      {
        title: 'ora',
        desc: '命令行 loading 效果',
        link: 'https://github.com/sindresorhus/ora'
      }
    ]
  },
  {
    title: '站点生成器',
    noIcon: false,
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org'
      },
      {
        icon: '/icons/docusaurus.svg',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN'
      }
    ]
  }
]
