# Visual Studio Code 扩展

## 主题相关

- `One Dark Pro`

  - 黑色主题
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

- `VSCode Great Icons`

  - 文件图标美化
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

- `background`
  - 自定义背景
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=shalldie.background)

## React 相关

- `ES7 React/Redux/GraphQL/React-Native snippets`
  - 提供 ES7 中的 JavaScript 和 React / Redux 片段，以及针对 VS Code 的 Babel 插件功能
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Vue 相关

- `Vue 2 Snippets`

  - 基于最新的 Vue 2 的 API 添加了 Code Snippets
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)

- `Vetur`
  - vue 文件语法高亮、片段整理、错误检查、格式化
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## CSS 相关

- `Easy LESS`

  - 保存时自动将 LESS 自动编译为 CSS
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)

- `language-stylus`

  - 增加对 `stylus` 的支持
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)

- `px to rem`
  - px 和 rem 互相转换
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=sainoba.px-to-rem)

## 微信小程序相关

- `minapp`
  - 微信小程序标签、属性的智能补全（同时支持原生小程序、mpvue 和 wepy 框架，并提供 snippets）
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode)

## Markdown 相关

- `Markdown All in One`

  - 为 Markdown 增加键盘快捷键，目录，自动预览等）
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

- `markdownlint`
  - Markdown / CommonMark 标记和样式检查
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## Git 相关

- `GitLens — Git supercharged`
  - 增强构建在 Visual Studio Code 中的 Git 功能
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## 格式化相关

- `ESLint`

  - 将 ESLint JavaScript 集成到 VS Code 中
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- `Prettier - Code formatter`
  - 代码格式化
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 调试相关

- `Debugger for Chrome`
  - 在 Chrome 浏览器或任何其他支持 Chrome Debugger 协议的目标中调试 JavaScript 代码
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

## 其他

- `Auto Close Tag`

  - 自动添加 HTML / XML 关闭标签
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

- `Auto Rename Tag`

  - 自动重命名配对的 HTML / XML 标签
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

- `Auto Import`

  - 自动查找，解析并提供所有可用导入的代码操作和代码完成。
    与 Typescript 和 TSX 一起使用
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

- `Import Cost`

  - 在编辑器中显示导入/需要包的大小
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

- `Image preview`

  - 在行号边上、悬停时显示图像预览
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)

- `Path Intellisense`

  - 自动补全文件名
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

- `npm Intellisense`

  - 可自动完成导入语句中的 npm 模块
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

- `Chinese (Simplified) Language Pack for Visual Studio Code`

  - 适用于 VS Code 的中文（简体）语言包
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

- `Bracket Pair Colorizer`

  - 为匹配的括号着色
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

- `EditorConfig for VS Code`

  - 增加对 `.editorconfig` 的支持
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- `Settings Sync`
  - 使用 GitHub Gist 在多台机器上同步设置，代码片段，主题，文件图标，启动，键绑定，工作区和扩展。
  - [插件地址](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

## 推荐配置

```json
// 将设置放入此文件中以覆盖默认设置
{
  // "files.autoSave": "onFocusChange",
  "files.autoSave": "off",
  "files.autoSaveDelay": 1500,
  "editor.tabSize": 2,
  // 关闭快速预览
  "editor.minimap.enabled": true,
  "editor.wordWrap": "on",
  "editor.lineNumbers": "on",
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  // bug控制缩进不关tabSize修改无用
  "editor.detectIndentation": false,
  // 保存格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    // "source.organizeImports": true,
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  // eslint 配置
  "eslint.options": {
    "extensions": ["js", ".vue"]
  },
  "eslint.format.enable": true,
  "eslint.validate": ["vue", "html", "javascript", "javascriptreact", "jsx", "typescript"],
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.printWidth": 100,
  "prettier.packageManager": "yarn",
  "prettier.spaceBeforeFunctionParen": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 参考线
  "workbench.colorTheme": "Bluloco Dark",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.editor.enablePreview": false,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "vue-html": "html",
    "javascript": "javascriptreact",
    "wxml": "html"
  },
  // 搜索配置
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "gitlens.keymap": "alternate",
  "explorer.confirmDragAndDrop": false,
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "printWidth": 80, // No line exceeds 100 characters
      "singleQuote": false // Prefer double quotes over single quotes
    },
    "prettier": {
      "semi": false,
      "singleQuote": true,
      "eslintIntegration": true,
      "parser": "babylon"
    }
  },
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "minapp-vscode.disableAutoConfig": true,
  "gitlens.advanced.messages": {
    "suppressShowKeyBindingsNotice": true
  },
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
  "less.compile": {
    "outExt": "wxss"
  },
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```
