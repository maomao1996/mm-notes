# Git

## 相关学习文章和配置指南

- [官网](https://git-scm.com/)
- [Git 学习教程](https://learngitbranching.js.org/?locale=zh_CN)
- [Git 入门指南](https://docs.github.com/cn/get-started/getting-started-with-git)
- [Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)
- [Git Extras](https://github.com/tj/git-extras) git 命令行扩展工具
- [配置 Git 处理行结束符](https://docs.github.com/cn/get-started/getting-started-with-git/configuring-git-to-handle-line-endings)
- [Git 配置多个 SSH-Key](https://gitee.com/help/articles/4229)
- 下载相关
  - [Windows 版下载镜像](https://npmmirror.com/mirrors/git-for-windows/)
  - [使用 jsdelivr 加速 Github 仓库资源](https://github.com/maomao1996/daily-notes/issues/7)

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

## 常用 Git 命令

::: tip 提示
[xxx] 均为可选参数
:::

### git clone

```sh
# 拷贝一个 Git 仓库到本地
git clone 仓库地址
git clone 仓库地址 --depth 1 # 只克隆最近一次的 commit
```

### git 配置

```sh
# 查看当前的 Git 配置
git config --list
# 设置使用 Git 时的用户名称
git config [--global] user.name "名称"
# 设置使用 Git 时的邮箱地址
git config [--global] user.email "邮箱"
```

### git 文件操作

```sh
# 添加所有文件到暂存区
git add .
```

```sh
# 提交暂存区到仓库区
git commit -m "提交信息"
git commit --amend # 增补提交，使用上次的 commit 信息，不添加新的 commit 记录
```

```sh
# 显示变更的文件
git status
        -s # 精简输出
```

```sh
# 只暂存被追踪的文件
git stash
        save '说明信息' # 添加说明信息
        -u # 暂存所有文件
# 查看 stash 列表
git stash list
# 取出最近一次的 stash
git stash apply
# 取出并删除最近一次的 stash
git stash pop
# 清空所有 stash
git stash clear
```

### git 分支操作

```sh
# 列出所有本地分支
git branch
        [分支名] # 新建一个分支(停留在当前分支)
        -r # 列出所有远程分支
        -a # 列出所有本地分支和远程分支
        -d [分支名] # 删除分支
        -D [分支名] # 强制删除分支
        -r # 列出所有远程分支
# 新建一个空白分支
git checkout --orphan [分支名]

# 删除本地所有分支
git branch | xargs git branch -d
# 批量删除包含指定字符的本地分支【以 dev 为例】
git branch | grep 'dev' | xargs git branch -d

# 获取当前的分支名
git symbolic-ref --short -q HEAD
git rev-parse --abbrev-ref HEAD
```

```sh
# 合并指定分支到当前分支
git merge [分支名]
```

```sh
# 显示所有远程仓库
git remote -v
# 添加远程仓库
git remote add [name] [url]
# 删除远程仓库
git remote remove [name]
# 查看远程仓库地址
git remote get-url [name]
```

```sh
# 取回远程仓库的变化，并与本地分支合并
git pull [remote][branch]
# 上传本地指定分支到远程仓库
git push [remote][branch]
# 强行推送当前分支到远程仓库，忽略冲突
git push [remote] --force
```

### git 日志

```sh
# 查看提交过的完整日志
git log
        --oneline # 查看精简日志（精简版本号和提交信息）
        --pretty=oneline # 查看精简日志（完整版本号和提交信息）
# 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）
git reflog
```

### git 统计

```sh
# 统计作者提交的次数
git shortlog -s -n

# 计算存储库中的提交总数
git rev-list --all --count
# 计算存储库中分支指定的提交总数
git rev-list --count [分支名]
```

### git reset

```sh
# 撤销 commit 操作
git reset --soft HEAD~1 # git reset --soft commit_id
# 撤销 commit 和 add 操作
git reset --mixed HEAD~1 # git reset --mixed commit_id
# 撤销 commit 和 add 操作同时撤销本地已追踪内容的修改
git reset --hard HEAD~1 # git reset --hard commit_id
```

[查看完整版 Git 命令](./command)

[三年 Git 使用心得 & 常见问题整理](https://juejin.cn/post/6844904191203213326)

[git 命令大全 github](https://github.com/521xueweihan/git-tips)

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

## 同步 github fork 项目上游更新

```sh
# 1. 添加上游仓库
git remote add upstream https://github.com/项目地址

# 2. 拉取上游变动
git fetch upstream

# 3. 合并(以 master 位置为例)
git rebase upstream/master
# OR
git merge upstream/master

# 4. 更新远程 fork 仓库分支(以 master 位置为例)
git push origin master
```

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

# 设置上海时区
env:
  TZ: Asia/Shanghai

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

[GitHub Actions 中文文档](https://docs.github.com/cn/actions/reference)

## git log 格式化

### 修改默认时间格式

```sh
git config --global log.date iso8601
```

- `relative`: 相对时间格式
- `local`: 本地格式
- `iso` OR `iso8601`: `ISO8601` 格式
- `rfc`: `RFC2822` 格式
- `short`: `YYYY-MM-DD` 格式
- `raw`: 时间戳格式
- `default`: 默认格式

### 自定义输出格式

```sh
# 格式为: [commit hash] [提交时间] [提交信息] [branch tag 信息] [作者名称]
git log --pretty='%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)'

# 配置别名
alias glogp="git log --pretty='%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)'"
```

- `%C(颜色值)`: 修改输出颜色
- `%H`: 完整的 `commit hash`
- `%h`: 缩写的 `commit hash`
- `%ad`: 提交时间(绝对时间 可以使用 `-date=` 定制格式)
- `%ar`: 提交时间(相对时间 按多久之前显示)
- `%s`: `commit message`
- `%d`: `branch tag` 信息
- `%an`: 作者名称
- `%ae`: 作者的邮箱地址
