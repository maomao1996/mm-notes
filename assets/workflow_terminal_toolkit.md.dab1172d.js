import{_ as s,o as n,g as a,Q as l}from"./chunks/framework.308e1374.js";const u=JSON.parse('{"title":"命令行工具","description":"收录一些实用的命令行工具，提升开发和使用体验","frontmatter":{"description":"收录一些实用的命令行工具，提升开发和使用体验"},"headers":[],"relativePath":"workflow/terminal/toolkit.md","filePath":"workflow/terminal/toolkit.md","lastUpdated":1696940288000}'),p={name:"workflow/terminal/toolkit.md"},e=l(`<h1 id="命令行工具" tabindex="-1">命令行工具 <a class="header-anchor" href="#命令行工具" aria-label="Permalink to &quot;命令行工具&quot;">​</a></h1><blockquote><p>只介绍安装方法和常用命令，具体可点击其 github 查看详情</p></blockquote><h2 id="bat-显示文件内容" tabindex="-1">bat 显示文件内容 <a class="header-anchor" href="#bat-显示文件内容" aria-label="Permalink to &quot;bat 显示文件内容&quot;">​</a></h2><p><code>cat</code> 命令的增强版，用于阅读文件</p><ul><li>带行号</li><li>语法高亮</li><li><code>Git</code> 集成</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看主题列表</span></span>
<span class="line"><span style="color:#B392F0;">bat</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list-themes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置别名</span></span>
<span class="line"><span style="color:#F97583;">alias</span><span style="color:#E1E4E8;"> cat</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;bat&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看主题列表</span></span>
<span class="line"><span style="color:#6F42C1;">bat</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list-themes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置别名</span></span>
<span class="line"><span style="color:#D73A49;">alias</span><span style="color:#24292E;"> cat</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;bat&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://formulae.brew.sh/formula/bat" target="_blank" rel="noreferrer">Homebrew 安装</a></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bat</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://github.com/sharkdp/bat" target="_blank" rel="noreferrer">bat | Github</a></p><h2 id="fzf-命令行模糊查找" tabindex="-1">fzf 命令行模糊查找 <a class="header-anchor" href="#fzf-命令行模糊查找" aria-label="Permalink to &quot;fzf 命令行模糊查找&quot;">​</a></h2><p>命令行模糊查找器</p><ul><li>快捷键绑定（支持 <code>bash</code>、<code>zsh</code> 和 <code>fish</code>） <ul><li><code>CTRL-T</code> 在当前目录查找</li><li><code>CTRL-R</code> 查找历史命令</li></ul></li><li>预览 <code>fzf --preview &#39;cat {}&#39;</code> 可结合 <code>bat</code> 使用</li></ul><p><a href="https://formulae.brew.sh/formula/fzf" target="_blank" rel="noreferrer">Homebrew 安装</a></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fzf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fzf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 <code>zsh</code> 中使用时，快捷键绑定可能不生效，需要配置 <code>plugins</code></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#E1E4E8;">plugins</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">其他插件</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fzf</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使配置生效</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.zshrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#24292E;">plugins</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#032F62;">其他插件</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fzf</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使配置生效</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>修改默认配置</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> FZF_DEFAULT_OPTS</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;--layout=reverse --preview &#39;bat -n --color=always {}&#39;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> FZF_DEFAULT_OPTS</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;--layout=reverse --preview &#39;bat -n --color=always {}&#39;&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a href="https://github.com/junegunn/fzf" target="_blank" rel="noreferrer">fzf | Github</a></p><h2 id="fnm-node-版本管理工具" tabindex="-1">fnm Node 版本管理工具 <a class="header-anchor" href="#fnm-node-版本管理工具" aria-label="Permalink to &quot;fnm Node 版本管理工具&quot;">​</a></h2><p>跨平台的 <code>node</code> 版本管理工具（Fast Node Manager）</p><blockquote><p>安装前，需要将已安装的 <code>node</code> 卸载</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 一键安装</span></span>
<span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-fsSL</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://fnm.vercel.app/install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># brew 安装</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fnm</span></span>
<span class="line"><span style="color:#6A737D;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#79B8FF;">eval</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">fnm</span><span style="color:#9ECBFF;"> env </span><span style="color:#79B8FF;">--use-on-cd</span><span style="color:#9ECBFF;">)&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 一键安装</span></span>
<span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-fsSL</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://fnm.vercel.app/install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># brew 安装</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fnm</span></span>
<span class="line"><span style="color:#6A737D;"># 在 ~/.zshrc 中配置</span></span>
<span class="line"><span style="color:#005CC5;">eval</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">fnm</span><span style="color:#032F62;"> env </span><span style="color:#005CC5;">--use-on-cd</span><span style="color:#032F62;">)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看 fnm 版本</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装最新的 LTS 版本</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--lts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定版本的 node</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用国内源安装</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node-dist-mirror=https://npmmirror.com/mirrors/node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 卸载指定版本的 node</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已安装的 node 版本</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看官方已发布的所有版本</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls-remote</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在当前 shell 使用指定的 node 版本</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置默认 node 版本</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用指定版本来执行某个全局命令</span></span>
<span class="line"><span style="color:#B392F0;">fnm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--using=18</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看 fnm 版本</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装最新的 LTS 版本</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--lts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定版本的 node</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用国内源安装</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node-dist-mirror=https://npmmirror.com/mirrors/node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 卸载指定版本的 node</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已安装的 node 版本</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看官方已发布的所有版本</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls-remote</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在当前 shell 使用指定的 node 版本</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置默认 node 版本</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用指定版本来执行某个全局命令</span></span>
<span class="line"><span style="color:#6F42C1;">fnm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--using=18</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="在特定目录自动切换版本" tabindex="-1">在特定目录自动切换版本 <a class="header-anchor" href="#在特定目录自动切换版本" aria-label="Permalink to &quot;在特定目录自动切换版本&quot;">​</a></h3><p>在应用目录写入文件并指定特定版本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;14&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.node-version</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;14&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.nvmrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;14&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.node-version</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;14&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.nvmrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">.node-version 或 .nvmrc 不生效</p><p>检查 <code>~/.zshrc</code> 文件是否配置了 <code>--use-on-cd</code> 参数</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">eval</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">fnm</span><span style="color:#9ECBFF;"> env </span><span style="color:#79B8FF;">--use-on-cd</span><span style="color:#9ECBFF;">)&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">eval</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">fnm</span><span style="color:#032F62;"> env </span><span style="color:#005CC5;">--use-on-cd</span><span style="color:#032F62;">)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="共享-npm-全局模块" tabindex="-1">共享 npm 全局模块 <a class="header-anchor" href="#共享-npm-全局模块" aria-label="Permalink to &quot;共享 npm 全局模块&quot;">​</a></h3><p><code>fnm</code> 会把不同版本的 <code>Node.js</code> 安装到特定目录，然后通过 <code>PATH</code> 环境变量方式切换，从而会导致切换版本后，全局的命令模块需要重新安装，非常不方便</p><h4 id="方案一-配置统一的全局模块安装路径" tabindex="-1">方案一：配置统一的全局模块安装路径 <a class="header-anchor" href="#方案一-配置统一的全局模块安装路径" aria-label="Permalink to &quot;方案一：配置统一的全局模块安装路径&quot;">​</a></h4><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建全局包目录</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.npm_global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置 prefix</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.npm_global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置 shell 环境变量</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export PATH=~/.npm_global/bin:</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.zshrc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建全局包目录</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.npm_global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置 prefix</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.npm_global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置 shell 环境变量</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export PATH=~/.npm_global/bin:</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="方案二-使用-yarn-或-pnpm-安装全局包" tabindex="-1">方案二：使用 <code>yarn</code> 或 <code>pnpm</code> 安装全局包 <a class="header-anchor" href="#方案二-使用-yarn-或-pnpm-安装全局包" aria-label="Permalink to &quot;方案二：使用 \`yarn\` 或 \`pnpm\` 安装全局包&quot;">​</a></h4><blockquote><p>个人平常使用 <code>yarn</code> 安装全局包，后续会切换到 <code>pnpm</code></p></blockquote><p>使用 <code>yarn</code> 或 <code>pnpm</code> 包管理器安装的全局包都有单独的全局目录，不依赖于 <code>node</code> 的安装目录</p><ul><li><a href="https://github.com/Schniz/fnm" target="_blank" rel="noreferrer">fnm | Github</a></li><li><a href="https://zhuanlan.zhihu.com/p/587008009" target="_blank" rel="noreferrer">科普文：用锈化的 fnm 管理 Node.js 版本</a></li></ul><h2 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h2><p><code>node</code> 版本管理工具</p><p>安装前，需要将已安装的 <code>nodejs</code> 进行卸载</p><h4 id="安装和设置-mac" tabindex="-1">安装和设置 - Mac <a class="header-anchor" href="#安装和设置-mac" aria-label="Permalink to &quot;安装和设置 - Mac&quot;">​</a></h4><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://gitee.com/mirrors/nvm/raw/v0.39.2/install.sh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://gitee.com/mirrors/nvm/raw/v0.39.2/install.sh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm | Github</a></p><h4 id="安装和设置-windows" tabindex="-1">安装和设置 - Windows <a class="header-anchor" href="#安装和设置-windows" aria-label="Permalink to &quot;安装和设置 - Windows&quot;">​</a></h4><p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm Windows 版下载地址</a></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 设置 node 镜像</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node_mirror</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://npmmirror.com/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置 npm 镜像</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm_mirror</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://npmmirror.com/mirrors/npm/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 设置 node 镜像</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node_mirror</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://npmmirror.com/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置 npm 镜像</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm_mirror</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://npmmirror.com/mirrors/npm/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">nvm-windows | Github</a></p><h4 id="常用命令-1" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令-1" aria-label="Permalink to &quot;常用命令&quot;">​</a></h4><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看 nvm 版本</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装最新版的 node</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定版本的 node</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 卸载指定版本的 node</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已安装的 node 版本</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到指定的 node 版本</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置默认 node 版本</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alias</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">版本</span><span style="color:#E1E4E8;">号</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看 nvm 版本</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装最新版的 node</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定版本的 node</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 卸载指定版本的 node</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已安装的 node 版本</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到指定的 node 版本</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置默认 node 版本</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alias</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">版本</span><span style="color:#24292E;">号</span><span style="color:#D73A49;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="nrm-npm-镜像管理工具" tabindex="-1">nrm npm 镜像管理工具 <a class="header-anchor" href="#nrm-npm-镜像管理工具" aria-label="Permalink to &quot;nrm npm 镜像管理工具&quot;">​</a></h2><p><code>npm registry</code> 管理工具，能够查看和切换当前使用的 <code>registry</code></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nrm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有 registry</span></span>
<span class="line"><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换 registry</span></span>
<span class="line"><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加自定义 registry</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> [别名] [registry 地址]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有 registry</span></span>
<span class="line"><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换 registry</span></span>
<span class="line"><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加自定义 registry</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> [别名] [registry 地址]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm | Github</a></p><h2 id="ni-包管理器工具" tabindex="-1">ni 包管理器工具 <a class="header-anchor" href="#ni-包管理器工具" aria-label="Permalink to &quot;ni 包管理器工具&quot;">​</a></h2><p>使用正确的软件包管理器运行项目，支持 <a href="https://docs.npmjs.com/cli/commands/npm" target="_blank" rel="noreferrer">npm</a>、<a href="https://yarnpkg.com" target="_blank" rel="noreferrer">yarn</a>、<a href="https://pnpm.io" target="_blank" rel="noreferrer">pnpm</a>、<a href="https://bun.sh" target="_blank" rel="noreferrer">bun</a></p><blockquote><p>安装</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@antfu/ni</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@antfu/ni</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@antfu/ni</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@antfu/ni</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@antfu/ni</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@antfu/ni</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="ni-install-安装依赖" tabindex="-1"><code>ni</code> - install 安装依赖 <a class="header-anchor" href="#ni-install-安装依赖" aria-label="Permalink to &quot;\`ni\` - install 安装依赖&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">ni</span></span>
<span class="line"><span style="color:#6A737D;"># npm install</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm install</span></span>
<span class="line"><span style="color:#6A737D;"># bun install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定包</span></span>
<span class="line"><span style="color:#B392F0;">ni</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span></span>
<span class="line"><span style="color:#6A737D;"># npm i vite</span></span>
<span class="line"><span style="color:#6A737D;"># yarn add vite</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm add vite</span></span>
<span class="line"><span style="color:#6A737D;"># bun add vite</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定包到开发依赖</span></span>
<span class="line"><span style="color:#B392F0;">ni</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@types/node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"><span style="color:#6A737D;"># npm i @types/node -D</span></span>
<span class="line"><span style="color:#6A737D;"># yarn add @types/node -D</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm add -D @types/node</span></span>
<span class="line"><span style="color:#6A737D;"># bun add -d @types/node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用锁定文件安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">ni</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--frozen</span></span>
<span class="line"><span style="color:#6A737D;"># npm ci</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install --frozen-lockfile (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install --immutable (Yarn Berry)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="color:#6A737D;"># bun install --no-save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖到全局环境</span></span>
<span class="line"><span style="color:#B392F0;">ni</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eslint</span></span>
<span class="line"><span style="color:#6A737D;"># npm i -g eslint</span></span>
<span class="line"><span style="color:#6A737D;"># yarn global add eslint (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm add -g eslint</span></span>
<span class="line"><span style="color:#6A737D;"># bun add -g eslint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">ni</span></span>
<span class="line"><span style="color:#6A737D;"># npm install</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm install</span></span>
<span class="line"><span style="color:#6A737D;"># bun install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定包</span></span>
<span class="line"><span style="color:#6F42C1;">ni</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span></span>
<span class="line"><span style="color:#6A737D;"># npm i vite</span></span>
<span class="line"><span style="color:#6A737D;"># yarn add vite</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm add vite</span></span>
<span class="line"><span style="color:#6A737D;"># bun add vite</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装指定包到开发依赖</span></span>
<span class="line"><span style="color:#6F42C1;">ni</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@types/node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"><span style="color:#6A737D;"># npm i @types/node -D</span></span>
<span class="line"><span style="color:#6A737D;"># yarn add @types/node -D</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm add -D @types/node</span></span>
<span class="line"><span style="color:#6A737D;"># bun add -d @types/node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用锁定文件安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">ni</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--frozen</span></span>
<span class="line"><span style="color:#6A737D;"># npm ci</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install --frozen-lockfile (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install --immutable (Yarn Berry)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="color:#6A737D;"># bun install --no-save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖到全局环境</span></span>
<span class="line"><span style="color:#6F42C1;">ni</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eslint</span></span>
<span class="line"><span style="color:#6A737D;"># npm i -g eslint</span></span>
<span class="line"><span style="color:#6A737D;"># yarn global add eslint (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm add -g eslint</span></span>
<span class="line"><span style="color:#6A737D;"># bun add -g eslint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>全局安装时使用默认的包管理器</p></div><h3 id="nr-run-运行脚本" tabindex="-1"><code>nr</code> - run 运行脚本 <a class="header-anchor" href="#nr-run-运行脚本" aria-label="Permalink to &quot;\`nr\` - run 运行脚本&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># npm run dev -- --port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># yarn run dev --port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm run dev --port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># bun run dev --port=3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用交互模式运行脚本</span></span>
<span class="line"><span style="color:#B392F0;">nr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重新运行上一条命令</span></span>
<span class="line"><span style="color:#B392F0;">nr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># npm run dev -- --port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># yarn run dev --port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm run dev --port=3000</span></span>
<span class="line"><span style="color:#6A737D;"># bun run dev --port=3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用交互模式运行脚本</span></span>
<span class="line"><span style="color:#6F42C1;">nr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重新运行上一条命令</span></span>
<span class="line"><span style="color:#6F42C1;">nr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="nlx-下载并执行" tabindex="-1"><code>nlx</code> - 下载并执行 <a class="header-anchor" href="#nlx-下载并执行" aria-label="Permalink to &quot;\`nlx\` - 下载并执行&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npx vitest</span></span>
<span class="line"><span style="color:#6A737D;"># yarn dlx vitest</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm dlx vitest</span></span>
<span class="line"><span style="color:#6A737D;"># bunx vitest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npx vitest</span></span>
<span class="line"><span style="color:#6A737D;"># yarn dlx vitest</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm dlx vitest</span></span>
<span class="line"><span style="color:#6A737D;"># bunx vitest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="nu-upgrade-升级依赖" tabindex="-1"><code>nu</code> - upgrade 升级依赖 <a class="header-anchor" href="#nu-upgrade-升级依赖" aria-label="Permalink to &quot;\`nu\` - upgrade 升级依赖&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nu</span></span>
<span class="line"><span style="color:#6A737D;"># (not available for bun)</span></span>
<span class="line"><span style="color:#6A737D;"># npm upgrade</span></span>
<span class="line"><span style="color:#6A737D;"># yarn upgrade (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn up (Yarn Berry)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用交互模式升级依赖</span></span>
<span class="line"><span style="color:#B392F0;">nu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span></span>
<span class="line"><span style="color:#6A737D;"># (not available for npm &amp; bun)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn upgrade-interactive (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn up -i (Yarn Berry)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm update -i</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nu</span></span>
<span class="line"><span style="color:#6A737D;"># (not available for bun)</span></span>
<span class="line"><span style="color:#6A737D;"># npm upgrade</span></span>
<span class="line"><span style="color:#6A737D;"># yarn upgrade (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn up (Yarn Berry)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用交互模式升级依赖</span></span>
<span class="line"><span style="color:#6F42C1;">nu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span></span>
<span class="line"><span style="color:#6A737D;"># (not available for npm &amp; bun)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn upgrade-interactive (Yarn 1)</span></span>
<span class="line"><span style="color:#6A737D;"># yarn up -i (Yarn Berry)</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm update -i</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="nun-uninstall-卸载依赖" tabindex="-1"><code>nun</code> - uninstall 卸载依赖 <a class="header-anchor" href="#nun-uninstall-卸载依赖" aria-label="Permalink to &quot;\`nun\` - uninstall 卸载依赖&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">webpack</span></span>
<span class="line"><span style="color:#6A737D;"># npm uninstall webpack</span></span>
<span class="line"><span style="color:#6A737D;"># yarn remove webpack</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm remove webpack</span></span>
<span class="line"><span style="color:#6A737D;"># bun remove webpack</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 卸载全局依赖</span></span>
<span class="line"><span style="color:#B392F0;">nun</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">silent</span></span>
<span class="line"><span style="color:#6A737D;"># npm uninstall -g silent</span></span>
<span class="line"><span style="color:#6A737D;"># yarn global remove silent</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm remove -g silent</span></span>
<span class="line"><span style="color:#6A737D;"># bun remove -g silent</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span></span>
<span class="line"><span style="color:#6A737D;"># npm uninstall webpack</span></span>
<span class="line"><span style="color:#6A737D;"># yarn remove webpack</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm remove webpack</span></span>
<span class="line"><span style="color:#6A737D;"># bun remove webpack</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 卸载全局依赖</span></span>
<span class="line"><span style="color:#6F42C1;">nun</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">silent</span></span>
<span class="line"><span style="color:#6A737D;"># npm uninstall -g silent</span></span>
<span class="line"><span style="color:#6A737D;"># yarn global remove silent</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm remove -g silent</span></span>
<span class="line"><span style="color:#6A737D;"># bun remove -g silent</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="nci-clean-install-清理安装" tabindex="-1"><code>nci</code> - clean install 清理安装 <a class="header-anchor" href="#nci-clean-install-清理安装" aria-label="Permalink to &quot;\`nci\` - clean install 清理安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nci</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm ci</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install --frozen-lockfile</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="color:#6A737D;"># bun install --no-save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nci</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm ci</span></span>
<span class="line"><span style="color:#6A737D;"># yarn install --frozen-lockfile</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="color:#6A737D;"># bun install --no-save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="na-agent-alias-代理别名" tabindex="-1"><code>na</code> - agent alias 代理别名 <a class="header-anchor" href="#na-agent-alias-代理别名" aria-label="Permalink to &quot;\`na\` - agent alias 代理别名&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">na</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#6A737D;"># bun</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">na</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#6A737D;"># bun</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><p><code>~/.nirc</code></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 默认使用的包管理器（默认为 prompt）</span></span>
<span class="line"><span style="color:#E1E4E8;">defaultAgent</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">npm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装时使用的包管理器</span></span>
<span class="line"><span style="color:#E1E4E8;">globalAgent</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">npm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 默认使用的包管理器（默认为 prompt）</span></span>
<span class="line"><span style="color:#24292E;">defaultAgent</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">npm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装时使用的包管理器</span></span>
<span class="line"><span style="color:#24292E;">globalAgent</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">npm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://github.com/antfu/ni" target="_blank" rel="noreferrer">@antfu/ni | Github</a></p><h2 id="npm-check-updates" tabindex="-1">npm-check-updates <a class="header-anchor" href="#npm-check-updates" aria-label="Permalink to &quot;npm-check-updates&quot;">​</a></h2><p>更新 <code>package.json</code> 中的依赖包</p><blockquote><p>安装</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm-check-updates</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm-check-updates</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm-check-updates</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm-check-updates</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm-check-updates</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm-check-updates</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>常用命令</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 检查所有依赖包版本</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span></span>
<span class="line"><span style="color:#6A737D;"># 检查指定包版本</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 直接升级所有依赖包版本</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span></span>
<span class="line"><span style="color:#6A737D;"># 升级指定包版本</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 询问升级依赖包版本</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span></span>
<span class="line"><span style="color:#6A737D;"># 升级指定包版本</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定版本范围</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--target</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">minor</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">ncu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--target</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">patch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 检查所有依赖包版本</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span></span>
<span class="line"><span style="color:#6A737D;"># 检查指定包版本</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 直接升级所有依赖包版本</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span></span>
<span class="line"><span style="color:#6A737D;"># 升级指定包版本</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 询问升级依赖包版本</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span></span>
<span class="line"><span style="color:#6A737D;"># 升级指定包版本</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定版本范围</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--target</span><span style="color:#24292E;"> </span><span style="color:#032F62;">minor</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">ncu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--target</span><span style="color:#24292E;"> </span><span style="color:#032F62;">patch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><a href="https://github.com/tjunnone/npm-check-updates" target="_blank" rel="noreferrer">npm-check-updates | Github</a></p><h2 id="yalc" tabindex="-1">yalc <a class="header-anchor" href="#yalc" aria-label="Permalink to &quot;yalc&quot;">​</a></h2><p><code>npm</code> 包调试工具，可配合 <code>nodemon</code> 做自动化</p><p>在本地将 npm 包模拟发布，将发布后的资源存放在全局，再通过 <code>yalc</code> 命令将包添加至对应项目中</p><blockquote><p>安装</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yalc</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yalc</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yalc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yalc</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yalc</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yalc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>常用命令</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 发布</span></span>
<span class="line"><span style="color:#B392F0;">yalc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span></span>
<span class="line"><span style="color:#6A737D;"># OR 快速更新所有依赖</span></span>
<span class="line"><span style="color:#B392F0;">yalc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加依赖</span></span>
<span class="line"><span style="color:#B392F0;">yalc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> [my-package]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 链接</span></span>
<span class="line"><span style="color:#B392F0;">yalc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 更新依赖</span></span>
<span class="line"><span style="color:#B392F0;">yalc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 移除依赖</span></span>
<span class="line"><span style="color:#B392F0;">yalc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> [my-package]</span></span>
<span class="line"><span style="color:#6A737D;"># 移除所有依赖并还原</span></span>
<span class="line"><span style="color:#B392F0;">yalc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 发布</span></span>
<span class="line"><span style="color:#6F42C1;">yalc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span></span>
<span class="line"><span style="color:#6A737D;"># OR 快速更新所有依赖</span></span>
<span class="line"><span style="color:#6F42C1;">yalc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加依赖</span></span>
<span class="line"><span style="color:#6F42C1;">yalc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> [my-package]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 链接</span></span>
<span class="line"><span style="color:#6F42C1;">yalc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 更新依赖</span></span>
<span class="line"><span style="color:#6F42C1;">yalc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 移除依赖</span></span>
<span class="line"><span style="color:#6F42C1;">yalc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> [my-package]</span></span>
<span class="line"><span style="color:#6A737D;"># 移除所有依赖并还原</span></span>
<span class="line"><span style="color:#6F42C1;">yalc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><a href="https://github.com/wclr/yalc" target="_blank" rel="noreferrer">yalc | Github</a></p><h2 id="nodemon" tabindex="-1">nodemon <a class="header-anchor" href="#nodemon" aria-label="Permalink to &quot;nodemon&quot;">​</a></h2><p>用于监视 <code>node.js</code> 中当前应用程序的任何更改并自动重启服务器</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodemon</span></span>
<span class="line"><span style="color:#6A737D;">#OR</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodemon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="color:#B392F0;">nodemon</span><span style="color:#E1E4E8;"> [入口文件]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodemon</span></span>
<span class="line"><span style="color:#6A737D;">#OR</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodemon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="color:#6F42C1;">nodemon</span><span style="color:#24292E;"> [入口文件]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><a href="https://github.com/remy/nodemon" target="_blank" rel="noreferrer">nodemon | Github</a></p><h2 id="pm2" tabindex="-1">pm2 <a class="header-anchor" href="#pm2" aria-label="Permalink to &quot;pm2&quot;">​</a></h2><p><code>node</code> 进程管理工具，提供了进程监控、负载均衡、内存监控、日志管理、服务管理等功能</p><blockquote><p>安装</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pm2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pm2</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pm2</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pm2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>常用命令</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 通过文件启动应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> [入口文件]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 通过包管理器启动应用（比如 next 项目）</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 pm2 管理的所有应用列表</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#6A737D;"># 查看指定应用的所有信息</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> [id]</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> [id]</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> [name]</span></span>
<span class="line"><span style="color:#6A737D;"># 停止所有应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> [id]</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> [id]</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> [id]</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看进程状态</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">monit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 通过文件启动应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> [入口文件]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 通过包管理器启动应用（比如 next 项目）</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 pm2 管理的所有应用列表</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#6A737D;"># 查看指定应用的所有信息</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> [id]</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> [id]</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> [name]</span></span>
<span class="line"><span style="color:#6A737D;"># 停止所有应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> [id]</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> [id]</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> [id]</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看进程状态</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">monit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><a href="https://github.com/Unitech/pm2" target="_blank" rel="noreferrer">pm2 | Github</a></p>`,102),o=[e];function c(r,t,i,y,b,E){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
