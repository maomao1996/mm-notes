---
description: '茂茂的 WebStorm 配置，记录扩展插件、使用小技巧'
---

# WebStorm 配置

## 获取许可证

[使用开源项目免费申请 JetBrains 全家桶开源许可证](https://www.jetbrains.com/shop/eform/opensource)

## 常用插件

1. 进入「`设置 - Plugins/插件 - Marketplace`」
2. 复制插件名后进行搜索安装

- **`Chinese ​(Simplified)​ Language Pack / 中文语言包`** 编辑器汉化
- **`GitHub Copilot`** 代码智能提示
- **`GitToolBox`** 增强内置的 Git 功能（猪哥推荐）
- **`.env files support`** `.env` 文件键值字符串高亮
- **`.ignore`** `.env` 提示哪些文件可以被 `ignore`
- **`CodeGlance Pro`** 在侧边栏显示代码缩略图（猪哥推荐）
- **`WakaTime`** 统计代码编写时间 ([WakaTime 官网](https://wakatime.com/dashboard))

### 插件市场

- [Plugins | JetBrains](https://plugins.jetbrains.com/)

## 主题美化

> 主题插件

- **`Atom Material Icons`** 图标美化
- **`Atom OneDark Theme`** Atom OneDark 主题
- **`Material Theme UI`** Material Design 主题
- **`One Dark theme`** 暗黑风格主题

> 配色方案

- [bluloco 方案](https://github.com/uloco/webstorm-bluloco-scheme)
  - [Dark 下载](https://cdn.jsdelivr.net/gh/uloco/webstorm-bluloco-scheme/Bluloco%20Dark.icls)
  - [Light 下载](https://cdn.jsdelivr.net/gh/uloco/webstorm-bluloco-scheme/Bluloco%20Light.icls)

> 自定义背景图

1. 进入 `设置 - 外观和行为 - Appearance`
2. 点击 `BACKGROUND IMAGE`

## 汉化

> 老版本

- 方案一
  - 进入 `文件 - 设置 - Plugins - Marketplace`
  - 搜索 `Chinese ​(Simplified)​ Language Pack EAP` 下载安装
- 方案二
  - 打开 [Chinese ​(Simplified)​ Language Pack EAP](https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap)
  - 点击 `Install to IDE` 按钮再选择对应编辑器
- 方案三
  - 查看本地 `WebStorm` 版本
    - 进入 `帮助 - 关于`
    - 找到 `Build #WS-` 后面的数字
  - 打开 [Chinese ​(Simplified)​ Language Pack EAP](https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack-eap)
  - 点击 `Versions` 选择对应编辑器再搜索对应版本下载（当找不到一样的版本时，可以看列表的第二栏版本范围，找包含你编辑器的版本下载就行）
  - 通过磁盘安装刚下载的文件

![磁盘安装](./images/instasll.jpg)

## 配置 Prettier 保存格式化

**新版本**：

1. 进入 `WebStorm - Settings - 框架和语言 - JavaScript - Prettier`
2. 勾选 `执行“重新格式化代码”操作时(R)` 和 `保存时(S)`
3. 进入 `WebStorm - Settings - 工具 - 保存时的操作`
4. 勾选 `重新格式化代码` 和 `运行 Prettier`

**老版本可使用 File Watchers 方案**：

1. 进入 `文件 - 设置 - 工具 - File Watchers`
2. 点击 `+` 选择 `Prettier`
3. 将 `File type` 修改为你需要的文件类型，通用可选 `Any`

## `webpack` 项目识别 `alias`

1. 进入 `文件 - 设置 - 框架和语言 - JavaScript - Webpack`
2. 将 `webpack` 配置文件地址修改为对应地址
   1. `vue-cli2.x`: 项目地址 + `\build\webpack.base.conf.js`
   2. `vue-cli3.x 及以上`: 项目地址 + `\node_modules\@vue\cli-service\webpack.config.js`
