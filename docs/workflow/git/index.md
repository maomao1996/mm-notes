# Git

::: info 相关资料

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
- [commit 常用的 type](/workflow/style-guide#commit-常用的-type)

:::

## 常用 Git 命令

> `[xxx]` 均为可选参数

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

::: tip
以 `master` 分支为例
:::

```sh
# 创建 orphan 分支（以 main 为例）
git checkout --orphan main

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
pnpm add -D gh-pages
# OR
npm install -D gh-pages
```

2. 在 `package.json` 中添加如下脚本

```json
"deploy": "gh-pages -d dist -m deploy",
"deploy:build": "npm run build && npm run deploy"
```

3. 运行 `deploy` 脚本

```sh
pnpm deploy
# OR
npm run deploy
```

## 使用 GitHub Actions 自动部署

[GitHub Actions](https://github.com/features/actions) 是 GitHub 的持续集成服务

### 配置 Secrets

2023.09.05：最新的 GitHub Actions 中 GitHub 会自动创建唯一的 GITHUB_TOKEN 机密以在工作流中使用（当需要操作其他仓库时，还是需要配置个人的 Secrets）

> Action 需要有操作仓库的权限（偷懒直接使用 Personal access tokens，官方更推荐 Fine-grained personal access tokens）

1. GitHub 官方的帮助文档：[创建 Personal access tokens](https://docs.github.com/zh/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#%E5%88%9B%E5%BB%BA-personal-access-token)（**确保选中了 `workflows` 权限**）
2. 将生成的 GitHub 个人访问令牌添加到源仓库的 Secrets 中：
   1. 进入仓库页面
   2. 点击 **Settings**
   3. 在左侧菜单中点击 **Secrets and variables** > **Actions**
   4. 点击 **New repository secret**
   5. 将密钥名称设为 **ACCESS_TOKEN**，值设为生成的访问令牌，然后点击 **Add secret**

### 编写 `workflow` 文件

1. 点击仓库的 `Actions` 按钮
2. 点击 `Set up a workflow yourself` 按钮
3. 复制如下内容

```yml
name: GitHub Actions Build and Deploy

# 触发条件
on:
  # 手动触发
  workflow_dispatch:
  # push 到指定分支
  push:
    branches:
      - master

# 设置权限
permissions:
  contents: write

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
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 安装 pnpm
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      # 设置 node 版本
      - name: Set node version to 18
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'

      # 打包静态文件
      - name: Build
        run: pnpm install && pnpm run build

      # 部署
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 当需要操作其他仓库时，需要配置个人的 token（根据需要设置）
          token: ${{ secrets.ACCESS_TOKEN }}
          # 指定仓库（根据需要设置）
          repository-name: maomao1996/mm-notes
          # GitHub Pages 读取的分支
          branch: gh-pages
          # 静态文件所在目录
          folder: dist
```

---

::: info 相关资料

- [GitHub Actions 入门教程 | 阮一峰](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [GitHub Actions 中文文档](https://docs.github.com/cn/actions/reference)

:::

## `git log` 格式化

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
- `%ad`: 作者提交时间(绝对时间 可以使用 `-date=` 定制格式)
- `%ar`: 作者提交时间(相对时间 按多久之前显示)
- `%s`: `commit message`
- `%d`: `branch tag` 信息
- `%an`: 作者名称
- `%ae`: 作者的邮箱地址

### 获取文件的提交时间

```sh
# 获取文件最后一次修改的时间
git log -1 --pretty="%ci" "./docs/index.md"

# 获取文件第一次添加到仓库的时间
git log -1 --diff-filter=A --follow --pretty="%ci" "./docs/index.md"
```

- `-1`: 只显示一条记录
- `--diff-filter=A`: 只显示添加的记录
- `--follow`: 显示文件的历史记录（包括移动和重命名）
- `--pretty="%ci"`: 只显示提交时间

::: tip `"%ad"` 和 `"%ci"` 的区别

- **`%ad`**: 表示作者日期（Author Date）
  - 指作者实际执行提交操作的日期和时间
  - 可能会因为提交者的时区设置而有所不同
- **`%ci`**: 表示提交日期和时间（Commit Date）
  - 指提交被记录在版本库的日期和时间
  - 不受提交者时区设置的影响，更具一致性

:::

## 本地不同分支关联不同的远程仓库

::: tip
以茂茂的 [mm-notes](https://github.com/maomao1996/mm-notes) 和 [daily-notes](http://github.com/maomao1996/daily-notes) 仓库为例
:::

1. `clone` 仓库 `mm-notes`（默认的 `remote` 为 `origin`）

```sh
git clone https://github.com/maomao1996/mm-notes
```

2. 添加远程仓库 `daily-notes`（`remote` 取名为 `daily-notes`）

```sh
git remote add daily-notes http://github.com/maomao1996/daily-notes
```

3. 拉取 `daily-notes` 的 `master` 分支到本地（本地分支名为 `notes`）

```sh
git fetch daily-notes master:notes

# 推送本地分支 notes 到远程仓库 daily-notes 的 master 分支
git push daily-notes notes:master
```

4. 关联分支（本地分支 `notes` 关联远程仓库 `daily-notes` 的 `master` 分支）

> 本地分支关联远程分支后，可直接使用 `git push` 和 `git pull` 命令

```sh
git branch --set-upstream-to=daily-notes/master notes
```

5. 提取 `master` 分支的指定提交到 `notes` 分支

```sh
# 切换到 notes 分支
git checkout notes

# 查看 master 分支的 commit 信息
git log --oneline master

# 提取 master 分支的指定提交到 notes 分支
git cherry-pick <commit hash>

# 推送到远程仓库
git push
```

## 使用 `git-filter-repo` 重写 Git 历史

[git-filter-repo](https://github.com/newren/git-filter-repo) 是一个用于重写 Git 历史的工具，相较于 `git filter-branch` 其执行速度更快且功能更为全面

安装

```sh
# macOS
brew install git-filter-repo
```

### 修正提交时间为作者提交时间

在使用 `git rebase` 并将其推送到远程仓库后，GitHub 上显示的是提交时间而非作者提交时间，导致提交记录无法准确查看

**在使用前，建议先备份仓库到本地，以防出现意外情况**

1. 检查远程仓库关联

> 确保在运行 `git filter-branch` 之后重新关联远程仓库。运行以下命令检查：

```sh
git remote -v
```

2. 执行修改

```sh
git filter-branch --env-filter 'export GIT_COMMITTER_DATE="$GIT_AUTHOR_DATE"'
```

- `--env-filter`: 用于修改环境变量
- `GIT_COMMITTER_DATE`: 提交时间
- `GIT_AUTHOR_DATE`: 作者提交时间

3. 重新关联远程仓库

```sh
git remote add origin <之前的远程仓库地址>
```

4. 推送到远程仓库

> 以 `master` 分支为例，使用以下命令推送修改：

```sh
git push -u origin master --force
```
