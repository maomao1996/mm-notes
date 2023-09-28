import{_ as s,o as n,g as a,Q as p}from"./chunks/framework.4c5231b1.js";const u=JSON.parse('{"title":"Mac 终端小技巧","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-18.md","filePath":"daily-notes/issue-18.md","lastUpdated":null}'),l={name:"daily-notes/issue-18.md"},e=p(`<h1 id="mac-终端小技巧" tabindex="-1">Mac 终端小技巧 <a class="header-anchor" href="#mac-终端小技巧" aria-label="Permalink to &quot;Mac 终端小技巧&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/18" target="_blank" rel="noreferrer">Mac 终端小技巧 | GitHub</a></p></div><h2 id="终端代理" tabindex="-1">终端代理 <a class="header-anchor" href="#终端代理" aria-label="Permalink to &quot;终端代理&quot;">​</a></h2><h3 id="临时使用" tabindex="-1">临时使用 <a class="header-anchor" href="#临时使用" aria-label="Permalink to &quot;临时使用&quot;">​</a></h3><p>打开终端直接运行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># http://proxyAddress:port 是 SSR 软件代理监听地址(一般为 127.0.0.1:xxxx)</span></span>
<span class="line"><span style="color:#6A737D;"># 只代理 http 请求</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> HTTP_PROXY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">http://proxyAddress:port</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只代理 https 请求</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> HTTPS_PROXY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">http://proxyAddress:port</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 代理所有请求</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> ALL_PROXY</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">http://proxyAddress:port</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># http://proxyAddress:port 是 SSR 软件代理监听地址(一般为 127.0.0.1:xxxx)</span></span>
<span class="line"><span style="color:#6A737D;"># 只代理 http 请求</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> HTTP_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">http://proxyAddress:port</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只代理 https 请求</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> HTTPS_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">http://proxyAddress:port</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 代理所有请求</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> ALL_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">http://proxyAddress:port</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="永久使用" tabindex="-1">永久使用 <a class="header-anchor" href="#永久使用" aria-label="Permalink to &quot;永久使用&quot;">​</a></h3><p>打开 <code>.bashrc</code> 或 <code>.zshrc</code> 文件，根据需要写入如下内容</p><blockquote><p>这里用 <code>http://127.0.0.1:1087</code> 和 <code>socks5://127.0.0.1:1086</code> 来举 🌰</p><p>同时设置大小写的环境变量来保证兼容性（因为有的应用读取的是大写的环境变量，而有的应用读取的是小写的环境变量）</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">proxy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  http</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;http://127.0.0.1:1087&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  socks5</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;socks5://127.0.0.1:1086&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 只代理 http 请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> http_proxy</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$http</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> HTTP_PROXY</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 只代理 https 请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> https_proxy</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$http</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> HTTPS_PROXY</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 代理所有请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> all_proxy</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$socks5</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> ALL_PROXY</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$socks5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\\033[32m已开启终端代理\\033[0m&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">unproxy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">unset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http_proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTP_PROXY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https_proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HTTPS_PROXY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all_proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ALL_PROXY</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\\033[32m已关闭终端代理\\033[0m&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">proxy</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  http</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;http://127.0.0.1:1087&quot;</span></span>
<span class="line"><span style="color:#24292E;">  socks5</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;socks5://127.0.0.1:1086&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 只代理 http 请求</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> http_proxy</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$http</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> HTTP_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 只代理 https 请求</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> https_proxy</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$http</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> HTTPS_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 代理所有请求</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> all_proxy</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$socks5</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> ALL_PROXY</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$socks5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\\033[32m已开启终端代理\\033[0m&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">unproxy</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">unset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http_proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTP_PROXY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https_proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HTTPS_PROXY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all_proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ALL_PROXY</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\\033[32m已关闭终端代理\\033[0m&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使配置生效 (zsh 为例)</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行 proxy 开启代理</span></span>
<span class="line"><span style="color:#B392F0;">proxy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 测试效果</span></span>
<span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myip.ipip.net</span></span>
<span class="line"><span style="color:#6A737D;"># 当前 IP：xx.xx.xx.xx  来自于：xxx xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行 unproxy 关闭代理</span></span>
<span class="line"><span style="color:#B392F0;">unproxy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使配置生效 (zsh 为例)</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行 proxy 开启代理</span></span>
<span class="line"><span style="color:#6F42C1;">proxy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 测试效果</span></span>
<span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myip.ipip.net</span></span>
<span class="line"><span style="color:#6A737D;"># 当前 IP：xx.xx.xx.xx  来自于：xxx xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行 unproxy 关闭代理</span></span>
<span class="line"><span style="color:#6F42C1;">unproxy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="常用快捷键" tabindex="-1">常用快捷键 <a class="header-anchor" href="#常用快捷键" aria-label="Permalink to &quot;常用快捷键&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">操作</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">Ctrl + P</td><td style="text-align:left;">上一条命令</td></tr><tr><td style="text-align:left;">Ctrl + R</td><td style="text-align:left;">搜索命令历史</td></tr><tr><td style="text-align:left;">Ctrl + L</td><td style="text-align:left;">清屏</td></tr><tr><td style="text-align:left;">Ctrl + U</td><td style="text-align:left;">清除当前行</td></tr><tr><td style="text-align:left;">Ctrl + W</td><td style="text-align:left;">删除光标前面的一个单词</td></tr><tr><td style="text-align:left;">Ctrl + K</td><td style="text-align:left;">删除光标后面的所有字符</td></tr><tr><td style="text-align:left;">Ctrl + A</td><td style="text-align:left;">移动光标到行首</td></tr><tr><td style="text-align:left;">Ctrl + E</td><td style="text-align:left;">移动光标到行尾</td></tr></tbody></table>`,13),o=[e];function t(r,c,y,i,E,d){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
