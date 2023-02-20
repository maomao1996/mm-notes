---
outline: 2
---

# npm 踩坑记录

> 记录 `npm` `yarn` `pnpm` 相关踩坑

## npm 安装 `node-sass` 经常失败

> 虽说 `node-sass` 已经被淘汰，现在都用 [dart-sass](https://github.com/sass/dart-sass)，但你总会遇到一些老古董项目的

在使用 `npm` 安装依赖时，遇到含有二进制文件的依赖包会经常失败，比如：`node-sass`、`puppeteer` 等

::: details 为什么配置了国内镜像源安装也会失败？

配置的国内镜像源只对 `npm` 包生效，而其中包含的二进制文件使用的是专门的下载地址，需要单独配置

比如 `node-sass` 需要配置 `sass_binary_site`，其[源码](https://github.com/sass/node-sass/blob/ee13eb9c62449d1e535189a063cbdd15583ebf32/lib/extensions.js#L246)如下

```js
function getBinaryUrl() {
  var site =
    getArgument('--sass-binary-site') ||
    process.env.SASS_BINARY_SITE ||
    process.env.npm_config_sass_binary_site ||
    (pkg.nodeSassConfig && pkg.nodeSassConfig.binarySite) ||
    'https://github.com/sass/node-sass/releases/download'

  return [site, 'v' + pkg.version, getBinaryName()].join('/')
}
```

其默认地址是 `github`，而因为一些原因导致咱们安装失败所以也正常

:::

#### 解决方法

::: tip 前置知识：`.npmrc`
`.npmrc` 文件是 `npm` 的配置文件

当在使用 `npm` 时它会从命令行、环境变量和 `.npmrc` 文件中获取其配置

其加载优先级：命令行 > 项目 `.npmrc` > 全局 `.npmrc` > 默认

> `yarn` 的配置文件为 `.yarnrc`
>
> `pnpm` 的配置文件为 `.npmrc`

:::

#### 解决方法

> 临时解决（以 `node-sass` 为例）

```sh
npm install -D node-sass --sass_binary_site=https://npmmirror.com/mirrors/node-sass
# OR
yarn add -D node-sass --sass_binary_site=https://npmmirror.com/mirrors/node-sass
```

> 长期解决

在项目根目录新建 `.npmrc` 文件，然后配置对应的二进制下载地址

```sh
# npm 镜像地址
registry=https://registry.npmmirror.com

# 二进制文件下载地址
sass_binary_site=https://npmmirror.com/mirrors/node-sass
phantomjs_cdnurl=https://npmmirror.com/mirrors/phantomjs
electron_mirror=https://npmmirror.com/mirrors/electron
profiler_binary_host_mirror=https://npmmirror.com/mirrors/node-inspector
chromedriver_cdnurl=https://npmmirror.com/mirrors/chromedriver
```
