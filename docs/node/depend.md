# 常用的 npm 包

> 只介绍安装方法和常用命令，具体可点击 github 查看详情

## nodemon

用于监视 node.js 中当前应用程序的任何更改并自动重启服务器

```sh
# 安装
npm install -g nodemon
# npm install --save-dev nodemon

# 启动项目
nodemon [入口文件]
```

[Gihub](https://github.com/remy/nodemon)

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
