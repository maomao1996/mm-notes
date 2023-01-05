"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[481],{2618:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-74473916","path":"/git/","title":"Git","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"相关学习文章和配置指南","slug":"相关学习文章和配置指南","children":[]},{"level":2,"title":"commit 常用 type","slug":"commit-常用-type","children":[]},{"level":2,"title":"常用 Git 命令","slug":"常用-git-命令","children":[{"level":3,"title":"git clone","slug":"git-clone","children":[]},{"level":3,"title":"git 配置","slug":"git-配置","children":[]},{"level":3,"title":"git 文件操作","slug":"git-文件操作","children":[]},{"level":3,"title":"git 分支操作","slug":"git-分支操作","children":[]},{"level":3,"title":"git 日志","slug":"git-日志","children":[]},{"level":3,"title":"git 统计","slug":"git-统计","children":[]},{"level":3,"title":"git reset","slug":"git-reset","children":[]}]},{"level":2,"title":"删除 Git 中的所有提交历史记录","slug":"删除-git-中的所有提交历史记录","children":[]},{"level":2,"title":"同步 github fork 项目上游更新","slug":"同步-github-fork-项目上游更新","children":[]},{"level":2,"title":"将代码提交到 github 的 gh-pages 分支","slug":"将代码提交到-github-的-gh-pages-分支","children":[]},{"level":2,"title":"使用 GitHub Actions 自动部署","slug":"使用-github-actions-自动部署","children":[{"level":3,"title":"配置 Secrets","slug":"配置-secrets","children":[]},{"level":3,"title":"编写 workflow 文件","slug":"编写-workflow-文件","children":[]}]},{"level":2,"title":"git log 格式化","slug":"git-log-格式化","children":[{"level":3,"title":"修改默认时间格式","slug":"修改默认时间格式","children":[]},{"level":3,"title":"自定义输出格式","slug":"自定义输出格式","children":[]}]}],"git":{"updatedTime":1672904385000},"filePathRelative":"git/README.md"}')},302:(s,n,a)=>{a.r(n),a.d(n,{default:()=>P});var e=a(6252);const l=(0,e._)("h1",{id:"git",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),(0,e.Uk)(" Git")],-1),i=(0,e._)("h2",{id:"相关学习文章和配置指南",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#相关学习文章和配置指南","aria-hidden":"true"},"#"),(0,e.Uk)(" 相关学习文章和配置指南")],-1),t={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("官网"),r={href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("Git 学习教程"),o={href:"https://docs.github.com/cn/get-started/getting-started-with-git",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("Git 入门指南"),u={href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("Git 的奇技淫巧"),D={href:"https://github.com/tj/git-extras",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("Git Extras"),h=(0,e.Uk)(" git 命令行扩展工具"),b={href:"https://docs.github.com/cn/get-started/getting-started-with-git/configuring-git-to-handle-line-endings",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("配置 Git 处理行结束符"),y={href:"https://gitee.com/help/articles/4229",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("Git 配置多个 SSH-Key"),E=(0,e.Uk)("下载相关 "),k={href:"https://npmmirror.com/mirrors/git-for-windows/",target:"_blank",rel:"noopener noreferrer"},A=(0,e.Uk)("Windows 版下载镜像"),C={href:"https://github.com/maomao1996/daily-notes/issues/7",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Uk)("使用 jsdelivr 加速 Github 仓库资源"),_=(0,e.uE)('<h2 id="commit-常用-type" tabindex="-1"><a class="header-anchor" href="#commit-常用-type" aria-hidden="true">#</a> commit 常用 type</h2><table><thead><tr><th style="text-align:left;">type</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">feat</td><td style="text-align:left;">新功能</td></tr><tr><td style="text-align:left;">fix</td><td style="text-align:left;">修复 bug</td></tr><tr><td style="text-align:left;">docs</td><td style="text-align:left;">修改文档</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">代码格式修改</td></tr><tr><td style="text-align:left;">refactor</td><td style="text-align:left;">重构（即不是新增功能，也不是修复 bug）</td></tr><tr><td style="text-align:left;">perf</td><td style="text-align:left;">更改代码以提高性能</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">增加测试</td></tr><tr><td style="text-align:left;">build</td><td style="text-align:left;">构建过程或辅助工具的变动</td></tr><tr><td style="text-align:left;">ci</td><td style="text-align:left;">修改项目持续集成流程</td></tr><tr><td style="text-align:left;">chore</td><td style="text-align:left;">其他类型的提交</td></tr><tr><td style="text-align:left;">revert</td><td style="text-align:left;">恢复上一次提交</td></tr></tbody></table><h2 id="常用-git-命令" tabindex="-1"><a class="header-anchor" href="#常用-git-命令" aria-hidden="true">#</a> 常用 Git 命令</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>[xxx] 均为可选参数</p></div><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 拷贝一个 Git 仓库到本地</span></span>\n<span class="line"><span style="color:#D4D4D4;">git clone 仓库地址</span></span>\n<span class="line"><span style="color:#D4D4D4;">git clone 仓库地址 --depth 1 </span><span style="color:#6A9955;"># 只克隆最近一次的 commit</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置" aria-hidden="true">#</a> git 配置</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 查看当前的 Git 配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">git config --list</span></span>\n<span class="line"><span style="color:#6A9955;"># 设置使用 Git 时的用户名称</span></span>\n<span class="line"><span style="color:#D4D4D4;">git config [--global] user.name </span><span style="color:#CE9178;">&quot;名称&quot;</span></span>\n<span class="line"><span style="color:#6A9955;"># 设置使用 Git 时的邮箱地址</span></span>\n<span class="line"><span style="color:#D4D4D4;">git config [--global] user.email </span><span style="color:#CE9178;">&quot;邮箱&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-文件操作" tabindex="-1"><a class="header-anchor" href="#git-文件操作" aria-hidden="true">#</a> git 文件操作</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 添加所有文件到暂存区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git add </span><span style="color:#DCDCAA;">.</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 提交暂存区到仓库区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git commit -m </span><span style="color:#CE9178;">&quot;提交信息&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">git commit --amend </span><span style="color:#6A9955;"># 增补提交，使用上次的 commit 信息，不添加新的 commit 记录</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 显示变更的文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">git status</span></span>\n<span class="line"><span style="color:#D4D4D4;">        -s </span><span style="color:#6A9955;"># 精简输出</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 只暂存被追踪的文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash</span></span>\n<span class="line"><span style="color:#D4D4D4;">        save </span><span style="color:#CE9178;">&#39;说明信息&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 添加说明信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">        -u </span><span style="color:#6A9955;"># 暂存所有文件</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看 stash 列表</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash list</span></span>\n<span class="line"><span style="color:#6A9955;"># 取出最近一次的 stash</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash apply</span></span>\n<span class="line"><span style="color:#6A9955;"># 取出并删除最近一次的 stash</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash pop</span></span>\n<span class="line"><span style="color:#6A9955;"># 清空所有 stash</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash clear</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-分支操作" tabindex="-1"><a class="header-anchor" href="#git-分支操作" aria-hidden="true">#</a> git 分支操作</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 列出所有本地分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch</span></span>\n<span class="line"><span style="color:#D4D4D4;">        [分支名] </span><span style="color:#6A9955;"># 新建一个分支(停留在当前分支)</span></span>\n<span class="line"><span style="color:#D4D4D4;">        -r </span><span style="color:#6A9955;"># 列出所有远程分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">        -a </span><span style="color:#6A9955;"># 列出所有本地分支和远程分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">        -d [分支名] </span><span style="color:#6A9955;"># 删除分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">        -D [分支名] </span><span style="color:#6A9955;"># 强制删除分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">        -r </span><span style="color:#6A9955;"># 列出所有远程分支</span></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个空白分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git checkout --orphan [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 删除本地所有分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch | xargs git branch -d</span></span>\n<span class="line"><span style="color:#6A9955;"># 批量删除包含指定字符的本地分支【以 dev 为例】</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch | grep </span><span style="color:#CE9178;">&#39;dev&#39;</span><span style="color:#D4D4D4;"> | xargs git branch -d</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 获取当前的分支名</span></span>\n<span class="line"><span style="color:#D4D4D4;">git symbolic-ref --short -q HEAD</span></span>\n<span class="line"><span style="color:#D4D4D4;">git rev-parse --abbrev-ref HEAD</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 合并指定分支到当前分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git merge [分支名]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 显示所有远程仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote -v</span></span>\n<span class="line"><span style="color:#6A9955;"># 添加远程仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote add [name] [url]</span></span>\n<span class="line"><span style="color:#6A9955;"># 删除远程仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote remove [name]</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看远程仓库地址</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote get-url [name]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 取回远程仓库的变化，并与本地分支合并</span></span>\n<span class="line"><span style="color:#D4D4D4;">git pull [remote][branch]</span></span>\n<span class="line"><span style="color:#6A9955;"># 上传本地指定分支到远程仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push [remote][branch]</span></span>\n<span class="line"><span style="color:#6A9955;"># 强行推送当前分支到远程仓库，忽略冲突</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push [remote] --force</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-日志" tabindex="-1"><a class="header-anchor" href="#git-日志" aria-hidden="true">#</a> git 日志</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 查看提交过的完整日志</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log</span></span>\n<span class="line"><span style="color:#D4D4D4;">        --oneline </span><span style="color:#6A9955;"># 查看精简日志（精简版本号和提交信息）</span></span>\n<span class="line"><span style="color:#D4D4D4;">        --pretty=oneline </span><span style="color:#6A9955;"># 查看精简日志（完整版本号和提交信息）</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reflog</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-统计" tabindex="-1"><a class="header-anchor" href="#git-统计" aria-hidden="true">#</a> git 统计</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 统计作者提交的次数</span></span>\n<span class="line"><span style="color:#D4D4D4;">git shortlog -s -n</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 计算存储库中的提交总数</span></span>\n<span class="line"><span style="color:#D4D4D4;">git rev-list --all --count</span></span>\n<span class="line"><span style="color:#6A9955;"># 计算存储库中分支指定的提交总数</span></span>\n<span class="line"><span style="color:#D4D4D4;">git rev-list --count [分支名]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 撤销 commit 操作</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset --soft HEAD~1 </span><span style="color:#6A9955;"># git reset --soft commit_id</span></span>\n<span class="line"><span style="color:#6A9955;"># 撤销 commit 和 add 操作</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset --mixed HEAD~1 </span><span style="color:#6A9955;"># git reset --mixed commit_id</span></span>\n<span class="line"><span style="color:#6A9955;"># 撤销 commit 和 add 操作同时撤销本地已追踪内容的修改</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset --hard HEAD~1 </span><span style="color:#6A9955;"># git reset --hard commit_id</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',24),w=(0,e.Uk)("查看完整版 Git 命令"),G={href:"https://juejin.cn/post/6844904191203213326",target:"_blank",rel:"noopener noreferrer"},U=(0,e.Uk)("三年 Git 使用心得 & 常见问题整理"),q={href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"},H=(0,e.Uk)("git 命令大全 github"),W=(0,e.uE)('<h2 id="删除-git-中的所有提交历史记录" tabindex="-1"><a class="header-anchor" href="#删除-git-中的所有提交历史记录" aria-hidden="true">#</a> 删除 Git 中的所有提交历史记录</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>以 <code>master</code> 分支为例</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 创建 orphan 分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git checkout --orphan [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 添加需要上传文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">git add </span><span style="color:#DCDCAA;">.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 提交更改</span></span>\n<span class="line"><span style="color:#D4D4D4;">git commit -m </span><span style="color:#CE9178;">&quot;Initial&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 删除需要清空提交记录的分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch -D master</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 将当前分支重命名为需要清空提交记录的分支名</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch -m master</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 强制更新存储库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push -f origin master</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步-github-fork-项目上游更新" tabindex="-1"><a class="header-anchor" href="#同步-github-fork-项目上游更新" aria-hidden="true">#</a> 同步 github fork 项目上游更新</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 1. 添加上游仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote add upstream https://github.com/项目地址</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 2. 拉取上游变动</span></span>\n<span class="line"><span style="color:#D4D4D4;">git fetch upstream</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 3. 合并(以 master 位置为例)</span></span>\n<span class="line"><span style="color:#D4D4D4;">git rebase upstream/master</span></span>\n<span class="line"><span style="color:#6A9955;"># OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">git merge upstream/master</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 4. 更新远程 fork 仓库分支(以 master 位置为例)</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push origin master</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将代码提交到-github-的-gh-pages-分支" tabindex="-1"><a class="header-anchor" href="#将代码提交到-github-的-gh-pages-分支" aria-hidden="true">#</a> 将代码提交到 github 的 gh-pages 分支</h2><ol><li>安装 <code>gh-pages</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn add -D gh-pages</span></span>\n<span class="line"><span style="color:#6A9955;"># OR npm install -D gh-pages</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 <code>package.json</code> 中添加如下脚本</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;deploy&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;gh-pages -d dist -m deploy&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#CE9178;">&quot;deploy:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;npm run build &amp;&amp; npm run deploy&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行 <code>deploy</code> 脚本</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn deploy</span></span>\n<span class="line"><span style="color:#6A9955;"># OR npm run deploy</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-github-actions-自动部署" tabindex="-1"><a class="header-anchor" href="#使用-github-actions-自动部署" aria-hidden="true">#</a> 使用 GitHub Actions 自动部署</h2>',13),S={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},O=(0,e.Uk)("GitHub Actions"),R=(0,e.Uk)(" 是 GitHub 的持续集成服务"),j=(0,e._)("h3",{id:"配置-secrets",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#配置-secrets","aria-hidden":"true"},"#"),(0,e.Uk)(" 配置 Secrets")],-1),N=(0,e._)("blockquote",null,[(0,e._)("p",null,"Action 需要有操作仓库的权限")],-1),T=(0,e.Uk)("GitHub 官方的帮助文档："),I={href:"https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"},K=(0,e.Uk)("创建用于命令行的个人访问令牌"),Y=(0,e.uE)('<p>打开需要配置 Actions 的仓库，进入 <code>Settings/Secrets</code> 页面，配置 <code>ACCESS_TOKEN</code> 变量，储存内容为刚刚创建的个人访问令牌</p><h3 id="编写-workflow-文件" tabindex="-1"><a class="header-anchor" href="#编写-workflow-文件" aria-hidden="true">#</a> 编写 <code>workflow</code> 文件</h3><ol><li>点击仓库的 <code>Actions</code> 按钮</li><li>点击 <code>Set up a workflow yourself</code> 按钮</li><li>复制如下内容</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">GitHub Actions Build and Deploy</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 触发条件: push 到 master 分支后</span></span>\n<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">master</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 设置上海时区</span></span>\n<span class="line"><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">TZ</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Asia/Shanghai</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 任务</span></span>\n<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">build-and-deploy</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;"># 服务器环境：最新版 ubuntu</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 拉取代码</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Checkout</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">persist-credentials</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 打包静态文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">npm install &amp;&amp; npm run build</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 部署</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">JamesIves/github-pages-deploy-action@releases/v3</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># GitHub 密钥</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">ACCESS_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ secrets.ACCESS_TOKEN }}</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># GitHub Pages 读取的分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">BRANCH</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 静态文件所在目录</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">FOLDER</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">dist</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),B=(0,e.Uk)("详细教程可以参考阮一峰老师的"),L={href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},M=(0,e.Uk)("GitHub Actions 入门教程"),Z={href:"https://docs.github.com/cn/actions/reference",target:"_blank",rel:"noopener noreferrer"},z=(0,e.Uk)("GitHub Actions 中文文档"),F=(0,e.uE)('<h2 id="git-log-格式化" tabindex="-1"><a class="header-anchor" href="#git-log-格式化" aria-hidden="true">#</a> git log 格式化</h2><h3 id="修改默认时间格式" tabindex="-1"><a class="header-anchor" href="#修改默认时间格式" aria-hidden="true">#</a> 修改默认时间格式</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git config --global log.date iso8601</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>relative</code>: 相对时间格式</li><li><code>local</code>: 本地格式</li><li><code>iso</code> OR <code>iso8601</code>: <code>ISO8601</code> 格式</li><li><code>rfc</code>: <code>RFC2822</code> 格式</li><li><code>short</code>: <code>YYYY-MM-DD</code> 格式</li><li><code>raw</code>: 时间戳格式</li><li><code>default</code>: 默认格式</li></ul><h3 id="自定义输出格式" tabindex="-1"><a class="header-anchor" href="#自定义输出格式" aria-hidden="true">#</a> 自定义输出格式</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 格式为: [commit hash] [提交时间] [提交信息] [branch tag 信息] [作者名称]</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log --pretty=</span><span style="color:#CE9178;">&#39;%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 配置别名</span></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> glogp=</span><span style="color:#CE9178;">&quot;git log --pretty=&#39;%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)&#39;&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>%C(颜色值)</code>: 修改输出颜色</li><li><code>%H</code>: 完整的 <code>commit hash</code></li><li><code>%h</code>: 缩写的 <code>commit hash</code></li><li><code>%ad</code>: 提交时间(绝对时间 可以使用 <code>-date=</code> 定制格式)</li><li><code>%ar</code>: 提交时间(相对时间 按多久之前显示)</li><li><code>%s</code>: <code>commit message</code></li><li><code>%d</code>: <code>branch tag</code> 信息</li><li><code>%an</code>: 作者名称</li><li><code>%ae</code>: 作者的邮箱地址</li></ul>',7),J={},P=(0,a(3744).Z)(J,[["render",function(s,n){const a=(0,e.up)("ExternalLinkIcon"),J=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)("div",null,[l,i,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",t,[p,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",r,[c,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",o,[d,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",u,[v,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",D,[m,(0,e.Wm)(a)]),h]),(0,e._)("li",null,[(0,e._)("a",b,[g,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",y,[f,(0,e.Wm)(a)])]),(0,e._)("li",null,[E,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",k,[A,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",C,[x,(0,e.Wm)(a)])])])])]),_,(0,e._)("p",null,[(0,e.Wm)(J,{to:"/git/command.html"},{default:(0,e.w5)((()=>[w])),_:1})]),(0,e._)("p",null,[(0,e._)("a",G,[U,(0,e.Wm)(a)])]),(0,e._)("p",null,[(0,e._)("a",q,[H,(0,e.Wm)(a)])]),W,(0,e._)("p",null,[(0,e._)("a",S,[O,(0,e.Wm)(a)]),R]),j,N,(0,e._)("p",null,[T,(0,e._)("a",I,[K,(0,e.Wm)(a)])]),Y,(0,e._)("p",null,[B,(0,e._)("a",L,[M,(0,e.Wm)(a)])]),(0,e._)("p",null,[(0,e._)("a",Z,[z,(0,e.Wm)(a)])]),F])}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);