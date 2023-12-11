---
description: '茂茂的 Visual Studio Code 配置，记录扩展插件、使用小技巧和个人配置'
---

# Visual Studio Code 配置

## 下载小技巧

[**mac 可直接使用 brew 下载安装**](https://formulae.brew.sh/cask/visual-studio-code)

```sh
brew install --cask visual-studio-code
```

**官网下载安装**

1. 打开 [Visual Studio Code](https://code.visualstudio.com/Download) 官网进行下载
2. 打开下载管理，复制下载链接
3. 将链接中的域名部分 `az764295.vo.msecnd.net` 替换为 `vscode.cdn.azure.cn`

> 举个 🌰

```sh
https://az764295.vo.msecnd.net/stable/abd2f3db4bdb28f9e95536dfa84d8479f1eb312d/VSCode-darwin-universal.zip
```

> 替换结果如下

```sh
https://vscode.cdn.azure.cn/stable/abd2f3db4bdb28f9e95536dfa84d8479f1eb312d/VSCode-darwin-universal.zip
```

## 扩展插件推荐

> 点击插件 ID 或在扩展商店搜索插件 ID 即可安装

### 主题相关

| 插件名                                                                                               | 插件 ID                       | 插件描述                                       |
| ---------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------- |
| [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) | `PKief.material-icon-theme`   | 图标美化                                       |
| [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)      | `zhuangtongfa.Material-theme` | 暗黑风格主题                                   |
| [Shades of Purple](https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple)  | `ahmadawais.shades-of-purple` | 紫色主题（来自彤姐的推荐：没有什么比骚更重要） |
| [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)  | `dracula-theme.theme-dracula` | 暗黑风格主题                                   |
| [Bluloco Dark](https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark)         | `uloco.theme-bluloco-dark`    | 暗黑风格主题                                   |
| [background](https://marketplace.visualstudio.com/items?itemName=shalldie.background)                | `shalldie.background`         | 自定义背景图                                   |

### HTML 相关

| 插件名                                                                                                        | 插件 ID                           | 插件描述                         |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------------------------- |
| [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)            | `formulahendry.auto-close-tag`    | 自动添加 HTML / XML 关闭标签     |
| [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)          | `formulahendry.auto-rename-tag`   | 自动重命名配对的 HTML / XML 标签 |
| [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) | `vincaslt.highlight-matching-tag` | Tag 高亮匹配标记                 |

### CSS 相关

| 插件名                                                                                                     | 插件 ID                      | 插件描述                             |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------ |
| [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)                | `stylelint.vscode-stylelint` | CSS / LESS / SCSS 代码检查           |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) | `bradlc.vscode-tailwindcss`  | Tailwind CSS 智能提示                |
| [Easy LESS](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)                         | `mrcrowl.easy-less`          | 保存时自动将 `less` 自动编译为 `css` |
| [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)              | `sysoev.language-stylus`     | 增加对 `stylus` 的支持               |
| [px to rem](https://marketplace.visualstudio.com/items?itemName=sainoba.px-to-rem)                         | `sainoba.px-to-rem`          | `px` 和 `rem` 互相转换               |

### Markdown 相关

| 插件名                                                                                                               | 插件 ID                               | 插件描述                                                     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)                   | `DavidAnson.vscode-markdownlint`      | Markdown / CommonMark 标记和样式检查                         |
| [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) | `shd101wyy.markdown-preview-enhanced` | 为 Markdown 增加大纲、导出 PDF PNG JPEG HTML、自定义预览样式 |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)                | `yzhang.markdown-all-in-one`          | Markdown 增强，支持表格、自动预览、自动补全、格式化等        |

### 语法支持与代码格式检查

| 插件名                                                                                                                | 插件 ID                                 | 插件描述                                        |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------- |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                  | `dbaeumer.vscode-eslint`                | 将 ESLint 集成到 VSCode 中                      |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)               | `esbenp.prettier-vscode`                | 代码格式化                                      |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)       | `streetsidesoftware.code-spell-checker` | 代码拼写检查                                    |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)                                | `usernamehw.errorlens`                  | 突出显示代码错误和警告                          |
| [Vue 3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)                         | `hollowtree.vue-snippets`               | 为 `Vue2` 和 `Vue3` 提供代码片段                |
| [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)                        | `Vue.volar`                             | `Vue3` 文件语法高亮、片段整理、错误检查、格式化 |
| [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) | `Vue.vscode-typescript-vue-plugin`      | 用于支持在 `TS` 中 `import *.vue` 文件          |
| [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)                                             | `octref.vetur`                          | `Vue2` 文件语法高亮、片段整理、错误检查、格式化 |
| [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)             | `EditorConfig.EditorConfig`             | 增加对 `.editorconfig` 的支持                   |
| [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)                                        | `IronGeek.vscode-env`                   | .env 文件键值字符串高亮和格式化                 |
| [shell-format](https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format)                         | `foxundermoon.shell-format`             | `shell` 脚本格式化                              |
| [WXML - Language Service](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode)                  | `qiu8310.minapp-vscode`                 | `WXML` 文件语法高亮、片段整理、错误检查、格式化 |
| [Sort package.json](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header)                           | `psioniq.psi-header`                    | 对 `package.json` 文件进行排序                  |

### AI 代码提示和生成

| 插件名                                                                                         | 插件 ID               | 插件描述                                       |
| ---------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------- |
| [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)           | `GitHub.copilot`      | GitHub AI 代码提示和生成                       |
| [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) | `GitHub.copilot-chat` | GitHub Copilot 聊天对话                        |
| [CodeGeeX](https://marketplace.visualstudio.com/items?itemName=aminer.codegeex)                | `aminer.codegeex`     | 免费的 AI 代码提示和生成、代码翻译、智能问答等 |

### 开发体验提升

| 插件名                                                                                                                                                  | 插件 ID                                  | 插件描述                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| [Chinese (Simplified) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) | `MS-CEINTL.vscode-language-pack-zh-hans` | 中文语言包                                     |
| [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                                                       | `eamodio.gitlens`                        | 增强构建在 VSCode 中的 Git 功能                |
| [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)                                                                | `ritwickdey.LiveServer`                  | 启动具有实时重新加载功能的本地开发服务         |
| [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)                                                            | `formulahendry.code-runner`              | 运行代码段或代码文件                           |
| [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)                    | `dsznajder.es7-react-js-snippets`        | 提供 ES7 中的 JavaScript 和 React / Redux 片段 |
| [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)                                                                  | `steoates.autoimport`                    | 自动查找，解析并提供所有可用导入的代码         |
| [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)                                                               | `wix.vscode-import-cost`                 | 在编辑器中显示导入/需要包的大小                |
| [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)                                                | `kisstkondoros.vscode-gutter-preview`    | 在行号边上、悬停时显示图像预览                 |
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)                                             | `christian-kohler.path-intellisense`     | 自动补全文件路径                               |
| [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)                                               | `christian-kohler.npm-intellisense`      | 自动补全导入语句中的 `npm` 模块                |
| [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)                                                        | `Tobermory.es6-string-html`              | ES6 模板字符串高亮                             |
| [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)                                                                  | `Gruntfuggly.todo-tree`                  | 在树视图中显示 TODO FIXME 等注释标记           |
| [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)                                                                  | `wmaurer.change-case`                    | 改变选中的文本的大小写                         |

### 其他

| 插件名                                                                                   | 插件 ID                    | 插件描述                                                           |
| ---------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------ |
| [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime) | `WakaTime.vscode-wakatime` | 统计代码编写时间 ([WakaTime 官网](https://wakatime.com/dashboard)) |
| [韭菜盒子](https://marketplace.visualstudio.com/items?itemName=giscafer.leek-fund)       | giscafer.leek-fund         | 看股票、基金实时数据                                               |

## 使用小技巧

### 删除空行

1. 打开替换 `Alt + ⌘ + F`
2. 输入 `^\s*(?=\r?$)\n`
3. 勾选使用正则表达式 `Alt + ⌘ + R`
4. 全部替换 `⌘ + Enter`

## 安装 `code` 命令

`code` 命令可以直接打开一个文件或者文件目录

1. 使用 `shift + command + p` 打开命令面板
2. 输入 `shell command` 进行搜索
3. 点击 `Shell 命令：在 PATH 中安装 “code” 命令`

```sh
# 在 vscode 中编辑当前目录下的文件
code .

# 在 vscode 中编辑该文件（当文件不存在时会先创建该文件）
code [文件名]
```

## `webpack` 项目识别 `alias`

1. 在项目根目录新建 `jsconfig.json` 或 `tsconfig.json`
2. 添加以下代码，其中 `paths` 字段的值要与你项目配置的 `alias` 一致

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

## 推荐配置

```json
{
  /********** 工作台相关配置 **********/
  "workbench.colorTheme": "Bluloco Dark",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.tree.enableStickyScroll": true,
  // 新开标签页查看文件而不是覆盖当前标签页
  "workbench.editor.enablePreview": false,
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.tree.indent": 14,
  "workbench.list.smoothScrolling": true,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.fontAliasing": "antialiased",

  /********** 编辑器相关配置 **********/
  "editor.fontSize": 13.5,
  "editor.fontFamily": "Input Mono, Fira Code, Cascadia Mono, monospace",
  "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss06', 'zero'",
  "editor.tabSize": 2,
  "editor.minimap.enabled": true,
  "editor.wordWrap": "on",
  "editor.lineNumbers": "on",
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.detectIndentation": false,
  "editor.inlineSuggest.enabled": true,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.renderWhitespace": "boundary",
  "editor.glyphMargin": true,
  "editor.accessibilitySupport": "off",
  "editor.stickyScroll.enabled": true,
  // 保存格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit"
  },
  "editor.unicodeHighlight.allowedLocales": {
    "zh-hans": true
  },

  /** 终端配置 */
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.persistentSessionReviveProcess": "never",
  "terminal.integrated.tabs.enabled": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.env.osx": {
    "FIG_NEW_SESSION": "1"
  },
  "terminal.integrated.inheritEnv": false,
  // p10k 主题字体
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "terminal.integrated.defaultProfile.osx": "zsh",

  /********** 针对指定语言的编辑器配置 **********/
  // 如需要开发微信小程序，需要注释这段代码，不然会和 minapp-vscode 插件冲突
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // 有注释的 json
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[wxml]": {
    "editor.defaultFormatter": "qiu8310.minapp-vscode"
  },
  "[shell]": {
    "editor.defaultFormatter": "foxundermoon.shell-format"
  },

  /** 文件配置 */
  "files.eol": "\n",
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.vue": "vue",
    "*.env.*": "env"
  },
  "files.exclude": {
    "**/.idea": true
  },
  "files.insertFinalNewline": true,
  "files.simpleDialog.enable": true,

  /** 文件搜索配置 */
  "search.exclude": {
    // 配置文件
    "**/.vscode": true,
    "**/.git": true,
    "**/.github": true,
    // 依赖文件
    "**/node_modules": true,
    "**/bower_components": true,
    "**/miniprogram_npm": true,
    // lock 文件
    "**/package-lock.json": true,
    "**/yarn.lock": true,
    "**/pnpm-lock.yaml": true,
    // 打包文件
    "**/dist": true,
    "**/.umi": true
  },
  "scm.defaultViewMode": "tree",

  /** git 相关 */
  "git.ignoreMissingGitWarning": true,
  "git.autofetch": true,
  "git.untrackedChanges": "separate",

  /** 资源管理器配置 */
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,

  /********** 第三方扩展配置 **********/
  "extensions.autoCheckUpdates": false,
  "extensions.autoUpdate": "onlySelectedExtensions",

  /** eslint 配置 */
  "eslint.format.enable": true,
  "eslint.options": {
    "extensions": [".js", ".jsx", ".ts", ".tsx", ".vue"]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown",
    "json",
    "jsonc",
    "json5"
  ],
  /** prettier 配置 */
  // 是否每行末尾添加分号
  "prettier.semi": false,
  // 是否使用单引号
  "prettier.singleQuote": true,
  "prettier.printWidth": 100,
  "prettier.trailingComma": "none",
  /** errorLens 配置 */
  "errorLens.enabledDiagnosticLevels": ["warning", "error"],
  "errorLens.excludeBySource": ["cSpell", "Grammarly", "eslint"],
  /** Code Spell Checker 配置 */
  "cSpell.allowCompoundWords": true,
  "cSpell.language": "en,en-US",
  "cSpell.ignoreWords": [
    /** 个人 */
    "mmplayer",
    "femm",
    /** 库相关 */
    "yalc",
    "vetur",
    "vuex",
    "vuepress",
    "vitepress",
    "antd",
    "ahooks",
    "weui",
    "weapp",
    "craco",
    "execa",
    "shiki",
    "initer",
    "formily",
    /** 文件后缀 */
    "npmrc",
    "wxml",
    "xmind",
    /** 品牌 */
    "weixin",
    "chatgpt",
    "pixiv",
    "jsdelivr",
    /** 常用简写 */
    "btns"
  ],
  /** material icon 配置 */
  "material-icon-theme.folders.associations": {
    // https://github.com/PKief/vscode-material-icon-theme/blob/main/src/icons/folderIcons.ts
    "sites": "public"
  },
  /** emmet 配置 */
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "vue-html": "html",
    "javascript": "javascriptreact",
    "wxml": "html"
  },
  /** vetur 配置 */
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "printWidth": 80, // No line exceeds 100 characters
      "singleQuote": false // Prefer double quotes over single quotes
    },
    "prettier": {
      // 是否添加分号
      "semi": false,
      // 是否使用单引号
      "singleQuote": true,
      "eslintIntegration": true,
      "parser": "babylon"
    }
  },
  /** tailwindCSS 配置 */
  "tailwindCSS.experimental.classRegex": [["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]],
  "gitlens.keymap": "alternate",
  "tabnine.experimentalAutoImports": true,

  // 标签高亮
  "highlight-matching-tag.styles": {
    "opening": {
      "left": {
        "custom": {
          "borderWidth": "0 0 0 4px",
          "borderStyle": "solid",
          "borderColor": "LightSkyBlue",
          "borderRadius": "5px"
        }
      },
      "right": {
        "custom": {
          "borderWidth": "0 4px 0 0",
          "borderStyle": "solid",
          "borderColor": "LightSkyBlue",
          "borderRadius": "5px"
        }
      }
    }
  },
  /** markdown 配置 */
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.quickSuggestions": {
      "comments": "on",
      "strings": "on",
      "other": "on"
    }
  },
  "markdown-preview-enhanced.codeBlockTheme": "one-dark.css",
  "markdown-preview-enhanced.previewTheme": "one-dark.css",
  "markdownlint.config": {
    "MD001": false,
    "MD024": false,
    "MD029": false,
    // 内联 HTML
    "MD033": false,
    // 使用强调而不是标题
    "MD036": false,
    // 第一行应该是顶级标题（默认是 h1）
    "MD041": false
  },
  /** 微信小程序配置 */
  "minapp-vscode.disableAutoConfig": true,
  /** Live Server 配置 */
  "liveServer.settings.donotShowInfoMsg": true,
  /** Todo Tree 配置 */
  "todo-tree.highlights.defaultHighlight": {
    "type": "whole-line",
    "gutterIcon": false,
    "background": "#8c959f40"
  },
  "todo-tree.highlights.customHighlight": {
    "TODO": {
      "iconColour": "#fe9600",
      "foreground": "#fe9600"
    },
    "FIXME": {
      "iconColour": "#c4202b",
      "foreground": "#c4202b"
    }
  }
}
```

## 代码片段

````json
{
  /********** markdown 相关 **********/
  "markdown code block": {
    "scope": "markdown",
    "prefix": "code",
    "body": ["```${1:js}", "$2", "```"],
    "description": "markdown 块级代码"
  },
  "markdown code inline": {
    "scope": "markdown",
    "prefix": "code",
    "body": ["`$1`"],
    "description": "markdown 行内代码"
  }
}
````

## 其他

- [emmet 语法说明](https://docs.emmet.io/abbreviations/syntax/)

### 扩展插件开发

- [VS Code 插件开发文档-中文版](https://github.com/Liiked/VS-Code-Extension-Doc-ZH)
- [VSCode 插件开发全攻略配套 demo](https://github.com/sxei/vscode-plugin-demo)
