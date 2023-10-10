---
description: '记录一些 npm 的常用命令'
---

# npm 常用命令

## 镜像相关

查看镜像源地址

```sh
npm config get registry
# yarn
yarn config get registry
```

设置镜像源地址

```sh
# 以设置淘宝镜像源为例
npm config set registry https://registry.npmmirror.com
# yarn
yarn config set registry https://registry.npmmirror.com
```

## `npm init` 初始化项目

`npm init` 命令可以初始化一个新的 `npm` 项目。从 [npm@6](https://github.com/npm/cli/blob/release/v6/CHANGELOG.md#new-feature-git-deps-and-npm-init-pkg) 开始，`npm init` 支持使用社区编写的生成器来初始化项目

> 用法

```sh
# 生成 package.json 文件
npm init [--force|-f|--yes|-y|--scope]

# 使用指定的生成器生成文件
npm init <@scope> (same as `npx <@scope>/create`)
npm init [<@scope>/]<name> (same as `npx [<@scope>/]create-<name>`)

# 🌰 使用 create-react-app 初始化项目
npm init react-app my-app
# OR
npm create react-app my-app
```

::: warning
`npx` 在 npm v7 中被重写，单独的 `npx` 包已被弃用。当执行 `npx` 时会被转换为 `npm exec` 命令
:::

在使用指定的生成器时 `init` 命令会转换为相应的 `npx` 或 `npm exec` 操作

- **npm v6 (`npx`)**
  - `npm init foo -> npx create-foo`
  - `npm init @usr/foo -> npx @usr/create-foo`
  - `npm init @usr -> npx @usr/create`
- **npm v7+ (`npm exec`)**
  - `npm init foo -> npm exec create-foo`
  - `npm init @usr/foo -> npm exec @usr/create-foo`
  - `npm init @usr -> npm exec @usr/create`
  - `npm init @usr@2.0.0 -> npm exec @usr/create@2.0.0`

**别名**: `npm create`

::: tip `npm init` 的别名
除了使用 `npm init` 外，我们还可以使用 `npm create` 或 `npm innit` 进行初始化
:::

## 管理 `package.json`

获取 `package.json` 字段信息

```sh
# 获取 package.json 所有字段
npm pkg get

# 获取 package.json 中指定字段的信息
npm pkg get <field>
# 🌰
npm pkg get name
npm pkg get name version
npm pkg get scripts.test
```

设置 `package.json` 字段

```sh
npm pkg set <field> <value>
# 🌰
npm pkg set name='maomao' engines.node='>=18'
```

删除 `package.json` 中指定字段

```sh
npm pkg delete <key>
# 🌰
npm pkg delete scripts.build
```

## 查看已安装的依赖包

```sh
# 当前项目
npm list --depth 0

# 全局
npm list -g --depth 0
# yarn
yarn global list --depth=0
```

## 查看依赖包的安装路径

```sh
# 当前项目
npm root

# 全局
npm root -g
# yarn
yarn global dir
```

## 清除缓存

```sh
npm cache clean -f
# OR
yarn cache clean
```

## 导航到 npm 的相关页面

### 打开文档

```sh
# 在浏览器中打开当前项目的文档
npm docs

# 在浏览器中打开指定 npm 包的文档
npm docs [package-name]
```

### 打开 GitHub repo

```sh
# 在浏览器中打开当前项目的 GitHub repo
npm repo

# 在浏览器中打开指定 npm 包的 GitHub repo
npm repo [package-name]
```

### 打开 GitHub issues

```sh
# 在浏览器中打开当前项目的 GitHub issues
npm bugs

# 在浏览器中打开指定 npm 包的 GitHub issues
npm bugs [package-name]
```

## 脚本命令相关

执行顺序：并行执行 `&`，继发执行 `&&`

例 1：`npm run script1.js & npm run script2.js`

例 2：`npm run script1.js && npm run script2.js`

获取当前正在运行的脚本名称 `process.env.npm_lifecycle_event`
