import{_ as s,o as n,g as a,Q as l}from"./chunks/framework.4c5231b1.js";const b=JSON.parse('{"title":"使用 Shell 脚本检查并配置 git user 信息","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-35.md","filePath":"daily-notes/issue-35.md","lastUpdated":null}'),p={name:"daily-notes/issue-35.md"},e=l(`<h1 id="使用-shell-脚本检查并配置-git-user-信息" tabindex="-1">使用 Shell 脚本检查并配置 git user 信息 <a class="header-anchor" href="#使用-shell-脚本检查并配置-git-user-信息" aria-label="Permalink to &quot;使用 Shell 脚本检查并配置 git user 信息&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/35" target="_blank" rel="noreferrer">使用 shell 脚本检查并配置 git user 信息 | GitHub</a></p></div><p>最近在使用 <code>fnm</code> 时，发现项目配置了 <code>.node-version</code> 或 <code>.nvmrc</code> 文件时，可以自动切换 <code>node</code> 版本，于是我就想到可以利用 <code>shell</code> 脚本来帮我检查和修改 <code>git user</code> 信息，防止造成用公司信息提交到 <code>github</code> 的尴尬（毕竟主要用公司电脑写代码）</p><p><a href="https://github.com/Schniz/fnm/blob/master/src/shell/zsh.rs#L34" target="_blank" rel="noreferrer">fnm 检测 .node-version 和 .nvmrc 源码地址</a></p><h2 id="常用的-shell-检测运算符" tabindex="-1">常用的 Shell 检测运算符 <a class="header-anchor" href="#常用的-shell-检测运算符" aria-label="Permalink to &quot;常用的 Shell 检测运算符&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 检测 filename 是否为目录</span></span>
<span class="line"><span style="color:#B392F0;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filename</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测 filename 是否为普通文件</span></span>
<span class="line"><span style="color:#B392F0;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件或目录是否存在</span></span>
<span class="line"><span style="color:#B392F0;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否可读</span></span>
<span class="line"><span style="color:#B392F0;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否可写</span></span>
<span class="line"><span style="color:#B392F0;">-w</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否可执行</span></span>
<span class="line"><span style="color:#B392F0;">-x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否为空</span></span>
<span class="line"><span style="color:#B392F0;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 检测 filename 是否为目录</span></span>
<span class="line"><span style="color:#6F42C1;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filename</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测 filename 是否为普通文件</span></span>
<span class="line"><span style="color:#6F42C1;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件或目录是否存在</span></span>
<span class="line"><span style="color:#6F42C1;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否可读</span></span>
<span class="line"><span style="color:#6F42C1;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否可写</span></span>
<span class="line"><span style="color:#6F42C1;">-w</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否可执行</span></span>
<span class="line"><span style="color:#6F42C1;">-x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检测文件是否为空</span></span>
<span class="line"><span style="color:#6F42C1;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><a href="https://www.runoob.com/linux/linux-shell-basic-operators.html" target="_blank" rel="noreferrer">Shell 基本运算符 | 菜鸟教程</a></p><h2 id="编写-shell-脚本代码" tabindex="-1">编写 Shell 脚本代码 <a class="header-anchor" href="#编写-shell-脚本代码" aria-label="Permalink to &quot;编写 Shell 脚本代码&quot;">​</a></h2><div class="language-zsh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 检测 .git 目录是否存在</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [[ </span><span style="color:#F97583;">-d</span><span style="color:#E1E4E8;"> .git ]]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># github 用户名</span></span>
<span class="line"><span style="color:#E1E4E8;">  githubName</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># github 邮箱地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  githubEmail</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 获取项目的 git 仓库地址</span></span>
<span class="line"><span style="color:#E1E4E8;">  repositoryUrl</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> remote get-url origin)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 获取当前项目的 user.name</span></span>
<span class="line"><span style="color:#E1E4E8;">  localName</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> config user.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 获取当前项目的 user.email</span></span>
<span class="line"><span style="color:#E1E4E8;">  localEmail</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> config user.email)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 只判断 github 仓库，根据需要修改（判断字符建议写长点）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [[ $repositoryUrl </span><span style="color:#F97583;">=~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;github.com/maomao1996&quot;</span><span style="color:#E1E4E8;"> ]]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 提示当前为 github 项目（不需要就注释）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\\033[34m当前为 github 项目\\033[0m&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 当 githubName 存在并与当前项目的 user.name 不一致时</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [[ $githubName </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> $githubName </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> $localName ]]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 修改当前项目的 user.name 信息</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$githubName</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;已将当前仓库的 name 从\\033[33m </span><span style="color:#E1E4E8;">$localName</span><span style="color:#9ECBFF;"> \\033[0m修改为\\033[32m </span><span style="color:#E1E4E8;">$githubName</span><span style="color:#9ECBFF;"> \\033[0m&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 当 githubEmail 存在并与当前项目的 user.email 不一致时</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [[ $githubEmail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> $githubEmail </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> $localEmail ]]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 修改当前项目的 user.email 信息</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$githubEmail</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;已将当前仓库的 email 从\\033[33m </span><span style="color:#E1E4E8;">$localEmail</span><span style="color:#9ECBFF;"> \\033[0m修改为\\033[32m </span><span style="color:#E1E4E8;">$githubEmail</span><span style="color:#9ECBFF;"> \\033[0m&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">fi</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">fi</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 检测 .git 目录是否存在</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [[ </span><span style="color:#D73A49;">-d</span><span style="color:#24292E;"> .git ]]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># github 用户名</span></span>
<span class="line"><span style="color:#24292E;">  githubName</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># github 邮箱地址</span></span>
<span class="line"><span style="color:#24292E;">  githubEmail</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 获取项目的 git 仓库地址</span></span>
<span class="line"><span style="color:#24292E;">  repositoryUrl</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> remote get-url origin)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 获取当前项目的 user.name</span></span>
<span class="line"><span style="color:#24292E;">  localName</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> config user.name)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 获取当前项目的 user.email</span></span>
<span class="line"><span style="color:#24292E;">  localEmail</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> config user.email)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 只判断 github 仓库，根据需要修改（判断字符建议写长点）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [[ $repositoryUrl </span><span style="color:#D73A49;">=~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;github.com/maomao1996&quot;</span><span style="color:#24292E;"> ]]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 提示当前为 github 项目（不需要就注释）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\\033[34m当前为 github 项目\\033[0m&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 当 githubName 存在并与当前项目的 user.name 不一致时</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [[ $githubName </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> $githubName </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> $localName ]]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 修改当前项目的 user.name 信息</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$githubName</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;已将当前仓库的 name 从\\033[33m </span><span style="color:#24292E;">$localName</span><span style="color:#032F62;"> \\033[0m修改为\\033[32m </span><span style="color:#24292E;">$githubName</span><span style="color:#032F62;"> \\033[0m&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 当 githubEmail 存在并与当前项目的 user.email 不一致时</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [[ $githubEmail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> $githubEmail </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> $localEmail ]]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 修改当前项目的 user.email 信息</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$githubEmail</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;已将当前仓库的 email 从\\033[33m </span><span style="color:#24292E;">$localEmail</span><span style="color:#032F62;"> \\033[0m修改为\\033[32m </span><span style="color:#24292E;">$githubEmail</span><span style="color:#032F62;"> \\033[0m&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">fi</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">fi</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>其实配置 <code>SSH Key</code> 就没这么多事，但如果项目使用的是 <code>https</code> 源，则需要修改为 <code>SSH</code> 源，而且个人觉得 <code>https</code> 源方便，在浏览器上复制 <code>url</code> 就行</p>`,11),o=[e];function c(r,t,i,y,E,u){return n(),a("div",null,o)}const F=s(p,[["render",c]]);export{b as __pageData,F as default};
