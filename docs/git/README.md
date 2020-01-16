# Git 

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
| git pull [remote] [branch]              | 取回远程仓库的变化，并与本地分支合并       |
| git push [remote] [branch]              | 上传本地指定分支到远程仓库                 |
| git push [remote] --force               | 强行推送当前分支到远程仓库，即使有冲突     |
| git stash                               | 暂时将未提交的变化移除                     |
| git stash pop                           | 取出未提交的变化                           |

[查看完整版 Git 命令](/git/command)

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
