"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[857],{2303:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-5f5e8084",path:"/git/command.html",title:"Git 命令清单",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 新建 git 仓库",slug:"_1-新建-git-仓库",children:[]},{level:2,title:"2. 配置",slug:"_2-配置",children:[]},{level:2,title:"3. 向暂存区添加 / 删除文件",slug:"_3-向暂存区添加-删除文件",children:[]},{level:2,title:"4. 代码提交",slug:"_4-代码提交",children:[]},{level:2,title:"5. 分支",slug:"_5-分支",children:[]},{level:2,title:"6. 标签",slug:"_6-标签",children:[]},{level:2,title:"7. 查看信息",slug:"_7-查看信息",children:[]},{level:2,title:"8. 提交",slug:"_8-提交",children:[]},{level:2,title:"9. 撤销",slug:"_9-撤销",children:[]},{level:2,title:"10. 日志",slug:"_10-日志",children:[]}],filePathRelative:"git/command.md",git:{updatedTime:165824519e4}}},8104:(s,n,a)=>{a.r(n),a.d(n,{default:()=>i});var l=a(6252);const p=(0,l.uE)('<h1 id="git-命令清单" tabindex="-1"><a class="header-anchor" href="#git-命令清单" aria-hidden="true">#</a> Git 命令清单</h1><h2 id="_1-新建-git-仓库" tabindex="-1"><a class="header-anchor" href="#_1-新建-git-仓库" aria-hidden="true">#</a> 1. 新建 git 仓库</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 在当前目录新建一个 Git 仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git init</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个目录，将其初始化为 Git 仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git init [project-name]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 下载一个项目和它的整个代码历史</span></span>\n<span class="line"><span style="color:#D4D4D4;">git clone [url]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 显示当前的Git配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">git config --list</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 设置提交代码时的用户信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">git config [--global] user.name </span><span style="color:#CE9178;">&quot;名称&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">git config [--global] user.email </span><span style="color:#CE9178;">&quot;邮箱地址&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-向暂存区添加-删除文件" tabindex="-1"><a class="header-anchor" href="#_3-向暂存区添加-删除文件" aria-hidden="true">#</a> 3. 向暂存区添加 / 删除文件</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 添加指定文件或指定目录到暂存区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git add [文件路径 / 目录路径]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 添加所有文件到暂存区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git add </span><span style="color:#DCDCAA;">.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 停止追踪指定文件并保留在工作区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git rm --cached [文件路径]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 删除工作区文件并且提交到暂存区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git rm [文件路径]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-代码提交" tabindex="-1"><a class="header-anchor" href="#_4-代码提交" aria-hidden="true">#</a> 4. 代码提交</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 提交暂存区到仓库区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git commit -m [提交信息]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）</span></span>\n<span class="line"><span style="color:#D4D4D4;">git commit --amend -m [提交信息]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_5-分支" tabindex="-1"><a class="header-anchor" href="#_5-分支" aria-hidden="true">#</a> 5. 分支</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 列出所有本地分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 列出所有远程分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch -r</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 列出所有本地分支和远程分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch -a</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个分支，但依然停留在当前分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个分支，并切换到该分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git checkout -b [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个分支，指向指定commit</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch [分支名] [commit id]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch --track [分支名] [远程分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个空白分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git checkout --orphan [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换到指定分支，并更新工作区</span></span>\n<span class="line"><span style="color:#D4D4D4;">git checkout [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换到上一个分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git checkout -</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 合并指定分支到当前分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git merge [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 删除分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch -d [分支名]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 删除远程分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push origin --delete [分支名]</span></span>\n<span class="line"><span style="color:#D4D4D4;">git branch -dr [remote/分支名]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_6-标签" tabindex="-1"><a class="header-anchor" href="#_6-标签" aria-hidden="true">#</a> 6. 标签</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 列出所有 tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git tag</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 根据当前 commit 创建一个 tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git tag [tag]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 根据指定 commit 创建一个 tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git tag [tag] [commit id]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 删除本地 tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git tag -d [tag]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 删除远程 tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push origin :refs/tags/[tagName]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看 tag 信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">git show [tag]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 提交指定tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push [remote] [tag]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 提交所有tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push [remote] --tags</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个分支，指向某个tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">git checkout -b [分支名] [tag]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_7-查看信息" tabindex="-1"><a class="header-anchor" href="#_7-查看信息" aria-hidden="true">#</a> 7. 查看信息</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 显示变更的文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">git status</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示当前分支的版本历史</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示commit历史，以及每次commit发生变更的文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log --stat</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 搜索提交历史，根据关键词</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log -S [keyword]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示某个文件的版本历史，包括文件改名</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log --follow [文件路径]</span></span>\n<span class="line"><span style="color:#D4D4D4;">git whatchanged [文件路径]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示指定文件相关的每一次diff</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log -p [文件路径]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示过去5次提交</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log -5 --pretty --oneline</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示所有提交过的用户，按提交次数排序</span></span>\n<span class="line"><span style="color:#D4D4D4;">git shortlog -sn</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示指定文件是什么人在什么时间修改过</span></span>\n<span class="line"><span style="color:#D4D4D4;">git blame [file]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示暂存区和工作区的差异</span></span>\n<span class="line"><span style="color:#D4D4D4;">git diff</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示工作区与当前分支最新 commit 之间的差异</span></span>\n<span class="line"><span style="color:#D4D4D4;">git diff HEAD</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示今天你写了多少行代码</span></span>\n<span class="line"><span style="color:#D4D4D4;">git diff --shortstat </span><span style="color:#CE9178;">&quot;@{0 day ago}&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示当前分支的最近几次提交</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reflog</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_8-提交" tabindex="-1"><a class="header-anchor" href="#_8-提交" aria-hidden="true">#</a> 8. 提交</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 下载远程仓库的所有变动</span></span>\n<span class="line"><span style="color:#D4D4D4;">git fetch [remote]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示所有远程仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote -v</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 显示某个远程仓库的信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote show [remote]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 增加一个新的远程仓库，并命名</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote add [shortname] [url]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 取回远程仓库的变化，并与本地分支合并</span></span>\n<span class="line"><span style="color:#D4D4D4;">git pull [remote] [branch]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 上传本地指定分支到远程仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push [remote] [branch]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push [remote] --force</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 推送所有分支到远程仓库</span></span>\n<span class="line"><span style="color:#D4D4D4;">git push [remote] --all</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_9-撤销" tabindex="-1"><a class="header-anchor" href="#_9-撤销" aria-hidden="true">#</a> 9. 撤销</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset [文件路径]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 重置暂存区与工作区，与上一次 commit 保持一致</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset --hard</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset [commit id]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset --hard [commit id]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reset --keep [commit id]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">git revert [commit id]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 暂存操作</span></span>\n<span class="line"><span style="color:#6A9955;"># 只暂存被追踪的文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash</span></span>\n<span class="line"><span style="color:#6A9955;"># 暂存所有文件并添加说明</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash [save </span><span style="color:#CE9178;">&#39;说明信息&#39;</span><span style="color:#D4D4D4;">] [-u]</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看 stash 列表</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash list</span></span>\n<span class="line"><span style="color:#6A9955;"># 取出最近一次的 stash</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash apply</span></span>\n<span class="line"><span style="color:#6A9955;"># 取出 stash 列表里对应数字的暂存</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash apply 数字</span></span>\n<span class="line"><span style="color:#6A9955;"># 取出并删除最近一次的 stash</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash pop</span></span>\n<span class="line"><span style="color:#6A9955;"># 清空所有 stash</span></span>\n<span class="line"><span style="color:#D4D4D4;">git stash clear</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_10-日志" tabindex="-1"><a class="header-anchor" href="#_10-日志" aria-hidden="true">#</a> 10. 日志</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 查看提交过的完整日志</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看精简日志（精简版本号和提交信息）</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log --oneline</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看精简日志（完整版本号和提交信息）</span></span>\n<span class="line"><span style="color:#D4D4D4;">git log --pretty=oneline</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）</span></span>\n<span class="line"><span style="color:#D4D4D4;">git reflog</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',21),e={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},r=(0,l.Uk)("参考地址：阮一峰 -- 常用 Git 命令清单"),c={},i=(0,a(3744).Z)(c,[["render",function(s,n){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[p,(0,l._)("p",null,[(0,l._)("a",e,[r,(0,l.Wm)(a)])])],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,l]of n)a[s]=l;return a}}}]);