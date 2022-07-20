# 常用工具包

> 只介绍安装方法和常用命令，具体可点击其 github 查看详情

## nvm

`node` 版本管理工具

安装前，需要将已安装的 `nodejs` 进行卸载

#### 安装和设置 - Windows

[Windows 下载地址](https://github.com/coreybutler/nvm-windows/releases)

```sh
# 设置 node 镜像
nvm node_mirror https://npmmirror.com/mirrors/node/

# 设置 npm 镜像
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

#### 安装和设置 - Mac

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
# OR
curl -o- https://gitee.com/mirrors/nvm/raw/v0.37.2/install.sh | bash

# 在 ~/.zshrc 中配置
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# 使配置生效
source ~/.zshrc
```

#### 常用命令

```sh
# 查看 nvm 版本
nvm version

# 安装最新版的 node
nvm install latest

# 安装指定版本的 node
nvm install [版本号]

# 卸载指定版本的 node
nvm uninstall [版本号]

# 查看已安装的 node 版本
nvm ls

# 切换到指定的 node 版本
nvm use [版本号]

# 设置默认 node 版本
nvm alias default [版本号]
```

[Github - Mac](https://github.com/nvm-sh/nvm)

[Github - Windows](https://github.com/coreybutler/nvm-windows)

[node 版本目录](https://npmmirror.com/mirrors/node/)

## nrm

`npm registry` 管理工具，能够查看和切换当前使用的 `registry`

```sh
# 安装
npm install -g nrm

# 查看所有 registry
nrm ls

# 切换 registry
nrm use yarn

# 添加自定义 registry
 nrm add [别名] [registry 地址]
```

[Github](https://github.com/Pana/nrm)

## nodemon

用于监视 `node.js` 中当前应用程序的任何更改并自动重启服务器

```sh
# 安装
npm install -g nodemon
#OR
npm install --save-dev nodemon

# 启动项目
nodemon [入口文件]
```

[Github](https://github.com/remy/nodemon)

## npm-check-updates

更新 package.json 中的依赖包

```sh
# 安装
npm install -g npm-check-updates

# 检查所有依赖包版本
ncu
# 检查指定包版本
ncu axios

# 直接升级所有依赖包版本
ncu -u
# 升级指定包版本
ncu -u axios

# 询问升级依赖包版本
ncu -i
# 升级指定包版本
ncu -i axios

# 指定版本范围
ncu --target minor
# OR
ncu --target patch
```

[Github](https://github.com/tjunnone/npm-check-updates)

## yalc

`npm` 包调试工具，可配合 `nodemon` 做自动化

> 在本地将 npm 包模拟发布，将发布后的资源存放在全局，再通过 `yalc` 命令将包添加至对应项目中

```sh
# 安装
npm i yalc -g
#OR
yarn global add yalc

# 发布
yalc publish
# OR 快速更新所有依赖
yalc push

# 添加依赖
yalc add [my-package]

# 链接
yalc link

# 更新依赖
yalc update

# 移除依赖
yalc remove [my-package]
# 移除所有依赖并还原
yalc remove --all
```

[Github](https://github.com/wclr/yalc)

## pm2

`node` 进程管理工具，提供了进程监控、负载均衡、内存监控、日志管理、服务管理等功能

```sh
# 安装
npm install pm2 -g
#OR
yarn global add pm2

# 启动应用
pm2 start [入口文件]

# 查看 pm2 管理的所有应用列表
pm2 list
# 查看指定应用的所有信息
pm2 show [id]
pm2 show [name]

# 停止应用
pm2 stop [id]
pm2 stop [name]
# 停止所有应用
pm2 stop all

# 重启应用
pm2 restart [id]
pm2 restart [name]

# 查看日志
pm2 logs
pm2 logs [id]
pm2 logs [name]
```

[Github](https://github.com/Unitech/pm2)
