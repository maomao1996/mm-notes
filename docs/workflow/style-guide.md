# 编程规范

> 记录自己所总结和遵守的编程规范（即个人风格指南）

## 项目文件结构

> 约定优于配置

```sh
.
├── .vscode                           # VSCode 配置文件
├── public                            # 网站资源文件（favicon.ico index.html 等）
├── scripts                           # 脚本相关
├── src
│   ├── apis                          # api 接口
│   ├── assets                        # 静态资源
│   ├── components                    # 全局组件
│   ├── config                        # 项目配置文件
│   ├── constants                     # 常量
│   ├── hooks                         # 通用 hooks
│   ├── layout                        # 页面整体布局
│   ├── lib                           # 第三方或无业务依赖代码
│   ├── locales                       # i18n
│   ├── pages                         # 页面相关文件
│   │   ├── Home                      # 大驼峰规范 => 组件即是一个构造函数
│   │   │   ├── components            # 页面相关的子组件
│   │   │   ├── index.module.scss     # 根据应用的 CSS Scope 方案命名
│   │   │   └── index.tsx             # index 作为默认路径，视为根节点
│   │   └── App.tsx                   # 页面入口
│   ├── router                        # 页面路由
│   ├── store                         # 状态管理
│   ├── styles                        # 全局/基础样式
│   ├── types                         # TypeScript 类型声明
│   ├── utils                         # 工具函数
│   └── main.tsx                      # 应用启动入口
├── README.md                         # 当前项目的文档
├── package.json                      # 项目信息
└── tsconfig.json                     # TypeScript 配置文件
```

## `Git` 提交规范

> `git commit message` 的格式

```sh
<type>(<scope>): <subject>

<body>

<footer>
```

- `type`（必填）：`commit` 的类型
- `scope`（选填）：`commit` 的影响范围
- `subject`（必填）：`commit` 信息的简短描述（50 字以内）
- `body`（选填）：`commit` 信息的具体描述
- `footer`（选填）：重大变化（`Breaking Change`）和需要关闭的`Issue`

**正则校验规则**：

```js
/**
 * 基于 vue 项目中的 verify-commit-msg.js 修改
 * https://github.com/vuejs/vue/blob/main/scripts/verify-commit-msg.js
 */
const commitRE =
  /^((revert|wip|draft): )?(feat|fix|docs|style|refactor|perf|types|test|build|ci|chore)(\(.+\))?: .{1,50}/
```

#### `commit` 常用的 `type`

|       type       | 含义                                   |
| :--------------: | :------------------------------------- |
|      _feat_      | 新功能                                 |
|      _fix_       | 修复 bug                               |
|      _docs_      | 文档类改动                             |
|     _style_      | 代码格式改动，同理适用于业务样式调整   |
|    _refactor_    | 重构（即不是新增功能，也不是修复 bug） |
|      _perf_      | 性能优化相关                           |
|     _types_      | `TypeScript` 类型相关的改动            |
|      _test_      | 单元测试、e2e 测试                     |
|     _build_      | 构建工具或者依赖项的改动               |
|       _ci_       | 修改项目持续集成流程                   |
|     _chore_      | 其他类型的提交                         |
|     _revert_     | 恢复或还原相关提交                     |
| _wip_ \| _draft_ | 托管平台对应的草稿标识                 |

- [Conventional Commits | GitHub](https://github.com/conventional-commits/conventionalcommits.org)
- [Angular convention | Github](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

## `Prettier`

> 使用 [Prettier](https://prettier.io) 对代码进行格式化，从而实现一致的编码风格

```js
module.exports = {
  // 每行代码的最佳长度，超出该长度则格式化
  printWidth: 100,
  // 一个缩进使用 2 个空格
  tabWidth: 2,
  // 缩进使用空格
  useTabs: false,
  // 语句末尾不添加分号
  semi: false,
  // 仅在必需时为对象的 key 添加引号
  quoteProps: 'as-needed',
  // 使用单引号
  singleQuote: true,
  // 在 jsx 中使用双引号
  jsxSingleQuote: false,
  // 不添加尾随逗号
  trailingComma: 'none',
  // 在对象花括号内的两旁添加空格 => { foo: bar }
  bracketSpacing: true,
  // HTML元素（包括 JSX 等）具有多个属性时，将结束标签右尖括号 ＞ 另起一行
  bracketSameLine: false,
  // 箭头函数仅有一个参数时，参数也添加括号 (x) => x
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 对所有文件进行格式化，而不是只对在开头含有特定注释（@prettier 或 @format）的文件进行格式化
  requirePragma: false,
  // 格式化的同时自动插入 @format 的特殊注释（表示该文件已被格式化）
  insertPragma: false,
  // 对 Markdown 文本换行不进行任何操作，保持原样
  proseWrap: 'preserve',
  // 对 HTML 全局空白不敏感
  htmlWhitespaceSensitivity: 'ignore',
  // 不对 vue 中的 script 及 style 标签进行缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: 'lf',
  // 自动格式化嵌入的代码内容
  embeddedLanguageFormatting: 'auto',
  // 不强制 html vue jsx 中的属性（具有多个时）单独占一行
  singleAttributePerLine: false
}
```

::: tip

为了方便使用，已发布到 [npm](https://www.npmjs.com/package/@femm/prettier)

```sh
# 安装
pnpm add -D @femm/prettier

# 引入配置
npm pkg set prettier='@femm/prettier'
# OR
echo "module.exports = require('@femm/prettier')" > .prettierrc.cjs
```

:::

- [VSCode 配置 Prettier 插件](/efficiency/software/vscode#推荐配置)
- [@femm/prettier | GitHub](https://github.com/maomao1996/femm/tree/main/packages/prettier)
- [Options | Prettier](https://prettier.io/docs/en/options.html)
