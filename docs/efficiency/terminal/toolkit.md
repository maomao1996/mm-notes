# 命令行工具

> 只介绍安装方法和常用命令，具体可点击其 github 查看详情

## bat

`cat` 命令的增强版，用于阅读文件

- 带行号
- 语法高亮
- `Git` 集成

```sh
# 查看主题列表
bat --list-themes

# 配置别名
alias cat="bat"
```

[Homebrew 安装](https://formulae.brew.sh/formula/bat)

```sh
brew install bat
```

[Github](https://github.com/sharkdp/bat)

## fzf

命令行模糊查找器

- 快捷键绑定（支持 `bash`、`zsh` 和 `fish`）
  - `CTRL-T` 在当前目录查找
  - `CTRL-R` 查找历史命令
- 预览 `fzf --preview 'cat {}'` 可结合 `bat` 使用

[Homebrew 安装](https://formulae.brew.sh/formula/fzf)

```sh
brew install fzf
```

在 `zsh` 中使用时，快捷键绑定可能不生效，需要配置 `plugins`

```sh
# 在 ~/.zshrc 中配置
plugins=(其他插件 fzf)

# 使配置生效
source ~/.zshrc
```

修改默认配置

```sh
# 在 ~/.zshrc 中配置
export FZF_DEFAULT_OPTS="--layout=reverse --preview 'bat -n --color=always {}'"
```

[Github](https://github.com/junegunn/fzf)

## fnm

跨平台的 `node` 版本管理工具（Fast Node Manager）

> 安装前，需要将已安装的 `node` 卸载

```sh
# 一键安装
curl -fsSL https://fnm.vercel.app/install | bash

# brew 安装
brew install fnm
# 在 ~/.zshrc 中配置
eval "$(fnm env --use-on-cd)"
```

### 常用命令

```sh
# 查看 fnm 版本
fnm --version

# 安装最新的 LTS 版本
fnm install --lts

# 安装指定版本的 node
fnm install <版本号>

# 使用国内源安装
fnm install 16 --node-dist-mirror=https://npmmirror.com/mirrors/node

# 卸载指定版本的 node
fnm uninstall <版本号>

# 查看已安装的 node 版本
fnm ls

# 查看官方已发布的所有版本
fnm ls-remote

# 在当前 shell 使用指定的 node 版本
fnm use <版本号>

# 设置默认 node 版本
fnm default <版本号>

# 使用指定版本来执行某个全局命令
fnm exec --using=18 node -v
```

### 在特定目录自动切换版本

在应用目录写入文件并指定特定版本

```sh
echo '14' > .node-version
# OR
echo '14' > .nvmrc
```

::: warning .node-version 或 .nvmrc 不生效

检查 `~/.zshrc` 文件是否配置了 `--use-on-cd` 参数

```sh
eval "$(fnm env --use-on-cd)"
```

:::

### 共享 npm 全局模块

`fnm` 会把不同版本的 `Node.js` 安装到特定目录，然后通过 `PATH` 环境变量方式切换，从而会导致切换版本后，全局的命令模块需要重新安装，非常不方便

#### 方案一：配置统一的全局模块安装路径

```sh
# 创建全局包目录
mkdir -p ~/.npm_global

# 配置 prefix
npm config set prefix ~/.npm_global

# 配置 shell 环境变量
echo "export PATH=~/.npm_global/bin:$PATH" >> ~/.zshrc

source ~/.zshrc
```

#### 方案二：使用 `yarn` 或 `pnpm` 安装全局包

> 个人平常使用 `yarn` 安装全局包，后续会切换到 `pnpm`

使用 `yarn` 或 `pnpm` 包管理器安装的全局包都有单独的全局目录，不依赖于 `node` 的安装目录

[Github](https://github.com/Schniz/fnm)
[科普文：用锈化的 fnm 管理 Node.js 版本](https://zhuanlan.zhihu.com/p/587008009)

## nvm

`node` 版本管理工具

安装前，需要将已安装的 `nodejs` 进行卸载

#### 安装和设置 - Mac

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
# OR
curl -o- https://gitee.com/mirrors/nvm/raw/v0.39.2/install.sh | bash
```

[Github - Mac](https://github.com/nvm-sh/nvm)

#### 安装和设置 - Windows

[nvm Windows 版下载地址](https://github.com/coreybutler/nvm-windows/releases)

```sh
# 设置 node 镜像
nvm node_mirror https://npmmirror.com/mirrors/node/

# 设置 npm 镜像
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

[Github - Windows](https://github.com/coreybutler/nvm-windows)

#### 常用命令

```sh
# 查看 nvm 版本
nvm version

# 安装最新版的 node
nvm install latest

# 安装指定版本的 node
nvm install <版本号>

# 卸载指定版本的 node
nvm uninstall <版本号>

# 查看已安装的 node 版本
nvm ls

# 切换到指定的 node 版本
nvm use <版本号>

# 设置默认 node 版本
nvm alias default <版本号>
```

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

## npm-check-updates

更新 `package.json` 中的依赖包

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
