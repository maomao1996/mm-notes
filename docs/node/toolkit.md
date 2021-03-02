# 常用工具包

> 只介绍安装方法和常用命令，具体可点击 github 查看详情

## nvm

node 版本管理工具

安装前，需要将已安装的 `nodejs` 进行卸载

#### 安装和设置 - Windows

[Windows 下载地址](https://github.com/coreybutler/nvm-windows/releases)

```sh
# 设置 node 镜像
nvm node_mirror https://npm.taobao.org/mirrors/node/

# 设置 npm 镜像
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

#### 安装和设置 - Mac

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
# OR
curl -o- https://gitee.com/mirrors/nvm/raw/v0.37.2/install.sh | bash
```

#### 常用命令

```sh
# 查看 nvm 版本
nvm version

# 安装最新版的 node
nvm install latest

# 安装指定版本的 node
nvm install 版本号

# 卸载指定版本的 node
nvm uninstall 版本号

# 查看已安装的 node 版本
nvm list

# 切换到指定的 node 版本
nvm use 版本号
```

[Github - Mac](https://github.com/nvm-sh/nvm)

[Github - Windows](https://github.com/coreybutler/nvm-windows)

[node 版本目录](https://npm.taobao.org/mirrors/node/)

## nrm

npm registry 管理工具，能够查看和切换当前使用的 registry

```sh
# 安装
npm install -g nrm

# 查看所有 registry
nrm ls

# 切换 registry
nrm use cnp
```

[Gihub](https://github.com/Pana/nrm)

## nodemon

用于监视 node.js 中当前应用程序的任何更改并自动重启服务器

```sh
# 安装
npm install -g nodemon
#OR
npm install --save-dev nodemon

# 启动项目
nodemon [入口文件]
```

[Gihub](https://github.com/remy/nodemon)

## npm-check-updates

更新 package.json 中的依赖包

```sh
# 安装
npm install -g npm-check-updates

# 检查依赖包版本
ncu

# 升级依赖包版本
ncu -u
```

[Gihub](https://github.com/tjunnone/npm-check-updates)
