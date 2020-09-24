# Git

- [官网](https://git-scm.com/)
- [Git 学习教程](https://learngitbranching.js.org/?locale=zh_CN)
- [Github](https://github.com/git/git)
- [Windows 版 Github](https://github.com/git-for-windows/git)
- [Windows 版下载镜像站](https://npm.taobao.org/mirrors/git-for-windows/)
- [下载技巧 - 使用 jsdelivr 加速 Github 仓库资源](https://github.com/maomao1996/daily-notes/issues/7)

## 常用 Git 命令

::: tip 提示
[xxx] 均为可选参数
:::

| 命令                                    | 作用                                       |
| :-------------------------------------- | :----------------------------------------- |
| git clone 仓库地址                      | 下载一个 Git 项目                          |
| git config --list                       | 显示当前的 Git 配置                        |
| git config [--global] user.name "名称"  | 设置提交代码时的用户名称                   |
| git config [--global] user.email "邮箱" | 设置提交代码时的邮箱地址                   |
| git add .                               | 添加所有文件到暂存区                       |
| git commit -m "提交信息"                | 提交暂存区到仓库区                         |
| git commit --amend -m "提交信息"        | 替换（无代码改动就重写）上一次 commit 信息 |
| git branch                              | 列出所有本地分支                           |
| git branch -r                           | 列出所有远程分支                           |
| git branch -a                           | 列出所有本地分支和远程分支                 |
| git branch -d 分支名                    | 删除分支                                   |
| git branch 分支名                       | 新建一个分支，但依然停留在当前分支         |
| git checkout --orphan 分支名            | 新建一个空白分支                           |
| git status                              | 显示变更的文件                             |
| git log                                 | 显示当前分支的版本历史                     |
| git merge 分支名                        | 合并指定分支到当前分支                     |
| git remote -v                           | 显示所有远程仓库                           |
| git pull [remote][branch]               | 取回远程仓库的变化，并与本地分支合并       |
| git push [remote][branch]               | 上传本地指定分支到远程仓库                 |
| git push [remote] --force               | 强行推送当前分支到远程仓库，即使有冲突     |
| git stash                               | 暂时将未提交的变化移除                     |
| git stash pop                           | 取出未提交的变化                           |

[查看完整版 Git 命令](command)

[git 命令大全 github](https://github.com/521xueweihan/git-tips)

## commit 常用 type

| type     | 含义                                   |
| :------- | :------------------------------------- |
| feat     | 新功能                                 |
| fix      | 修复 bug                               |
| docs     | 修改文档                               |
| style    | 代码格式修改                           |
| refactor | 重构（即不是新增功能，也不是修复 bug） |
| perf     | 更改代码以提高性能                     |
| test     | 增加测试                               |
| build    | 构建过程或辅助工具的变动               |
| ci       | 修改项目持续集成流程                   |
| chore    | 其他类型的提交                         |
| revert   | 恢复上一次提交                         |

## 将代码提交到 github 的 gh-pages 分支

1. 安装 `gh-pages`

```sh
yarn add -D gh-pages
# OR npm install -D gh-pages
```

2. 在 `package.json` 中添加如下脚本

```json
"deploy": "gh-pages -d dist -m deploy",
"deploy:build": "npm run build && npm run deploy"
```

3. 运行 `deploy` 脚本

```sh
yarn deploy
# OR npm run deploy
```

## 删除 Git 中的所有提交历史记录

::: tip 提示
以 `master` 分支为例
:::

```sh
# 创建 orphan 分支
git checkout --orphan [分支名]

# 添加需要上传文件
git add .

# 提交更改
git commit -m "Initial"

# 删除需要清空提交记录的分支
git branch -D master

# 将当前分支重命名为需要清空提交记录的分支名
git branch -m master

# 强制更新存储库
git push -f origin master
```

## 使用 GitHub Actions 自动部署

[GitHub Actions](https://github.com/features/actions) 是 GitHub 的持续集成服务

### 配置 Secrets

> Action 需要有操作仓库的权限

GitHub 官方的帮助文档：[创建用于命令行的个人访问令牌](https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

打开需要配置 Actions 的仓库，进入 `Settings/Secrets` 页面，配置 `ACCESS_TOKEN` 变量，储存内容为刚刚创建的个人访问令牌

### 编写 `workflow` 文件

1. 点击仓库的 `Actions` 按钮
2. 点击 `Set up a workflow yourself` 按钮
3. 复制如下内容

```yml
name: GitHub Actions Build and Deploy

# 触发条件: push 到 master 分支后
on:
  push:
    branches:
      - master

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 打包静态文件
      - name: Build
        run: npm install && npm run build

      # 部署
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          # GitHub 密钥
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # GitHub Pages 读取的分支
          BRANCH: gh-pages
          # 静态文件所在目录
          FOLDER: dist
```

详细教程可以参考阮一峰老师的[GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
