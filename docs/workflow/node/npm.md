# npm 常用命令

## 镜像相关

设置淘宝镜像

```sh
npm config set registry https://registry.npmmirror.com
# yarn
yarn config set registry https://registry.npmmirror.com
```

查看镜像源地址

```sh
npm config get registry
# yarn
yarn config get registry
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
