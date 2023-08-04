import{_ as e,v as s,b as a,R as n}from"./chunks/framework.975b469a.js";const A=JSON.parse('{"title":"获取软件内置浏览器的 User-Agent","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-41.md","filePath":"daily-notes/issue-41.md","lastUpdated":null}'),t={name:"daily-notes/issue-41.md"},l=n('<h1 id="获取软件内置浏览器的-user-agent" tabindex="-1">获取软件内置浏览器的 User-Agent <a class="header-anchor" href="#获取软件内置浏览器的-user-agent" aria-label="Permalink to &quot;获取软件内置浏览器的 User-Agent&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/41" target="_blank" rel="noreferrer">获取软件内置浏览器的 User-Agent | GitHub</a></p></div><p>有的时候我们需要获取软件内置浏览器的 User-Agent，以便于我们做一些特殊的处理</p><h2 id="user-agent" tabindex="-1">User-Agent <a class="header-anchor" href="#user-agent" aria-label="Permalink to &quot;User-Agent&quot;">​</a></h2><p>User-Agent（用户代理）是一个用于识别客户端（通常是网络浏览器）类型和版本的字符串。它是由客户端在向服务器发送请求时自动包含的头部信息之一</p><p>User-Agent 字符串提供了关于客户端应用程序、操作系统、设备和版本的信息，以便服务器可以根据这些信息提供适合客户端的响应内容。服务器可以根据 User-Agent 字符串来确定如何呈现网页、提供适当的样式和功能，或者根据客户端的能力做出其他定制化的处理</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent" target="_blank" rel="noreferrer">User-Agent - HTTP | MDN</a></p><h3 id="获取-user-agent" tabindex="-1">获取 User-Agent <a class="header-anchor" href="#获取-user-agent" aria-label="Permalink to &quot;获取 User-Agent&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userAgent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userAgent</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="解析-user-agent" tabindex="-1">解析 User-Agent <a class="header-anchor" href="#解析-user-agent" aria-label="Permalink to &quot;解析 User-Agent&quot;">​</a></h3><blockquote><p>访问以下网站，在线解析 User-Agent</p></blockquote><ul><li><a href="https://www.useragentstring.com" target="_blank" rel="noreferrer">User Agent String.Com</a></li><li><a href="https://www.whatismybrowser.com" target="_blank" rel="noreferrer">WhatIsMyBrowser.com</a></li><li><a href="https://www.useragentinfo.com" target="_blank" rel="noreferrer">UserAgentInfo</a></li></ul><blockquote><p>通过以下库，解析 User-Agent</p></blockquote><ul><li><a href="https://github.com/faisalman/ua-parser-js" target="_blank" rel="noreferrer">ua-parser-js</a></li></ul><h2 id="以钉钉为例获取其内置浏览器的-user-agent" tabindex="-1">以钉钉为例获取其内置浏览器的 User-Agent <a class="header-anchor" href="#以钉钉为例获取其内置浏览器的-user-agent" aria-label="Permalink to &quot;以钉钉为例获取其内置浏览器的 User-Agent&quot;">​</a></h2><p>在 <code>Android</code> 和 <code>iOS</code> 版钉钉打开外部链接时，会调用钉钉内置浏览器打开，可以获取到钉钉内置浏览器的 User-Agent</p><p>但在 <code>PC</code> 版钉钉打开外部链接时，会调用默认浏览器打开，导致无法获取钉钉内置浏览器的 User-Agent 信息，这时我们可以通过钉钉的跳转协议去打开外部链接，这样就可以获取到钉钉内置浏览器的 User-Agent</p><p>在浏览器中打开以下链接，即可获取钉钉内置浏览器的 User-Agent</p><blockquote><p>使用 User Agent String.Com 解析</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dingtalk://dingtalkclient/page/link?url</span><span style="color:#A6ACCD;">=https%3A%2F%2Fwww.useragentstring.com</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">pc_slide</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>使用 UserAgentInfo 解析</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">dingtalk://dingtalkclient/page/link?url</span><span style="color:#A6ACCD;">=https%3A%2F%2Fwww.useragentinfo.com</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">pc_slide</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>钉钉内置浏览器的 User-Agent</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Mozilla/5.0</span><span style="color:#A6ACCD;"> (Macintosh</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Intel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Mac</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#C3E88D;">_6_2</span><span style="color:#A6ACCD;">) AppleWebKit/537.36 </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">KHTML,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">like</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Gecko</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Chrome/96.0.4664.110 Safari/537.36 DingTalk</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">7.0.10-macOS-28453097</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> nw Channel/201200 Architecture/x86_64</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><a href="https://open.dingtalk.com/document/client/unified-routing-protocol#title-kkq-kgx-lbq" target="_blank" rel="noreferrer">统一跳转协议 | 钉钉开放平台</a></li></ul>',25),r=[l];function o(p,c,i,u,d,g){return s(),a("div",null,r)}const C=e(t,[["render",o]]);export{A as __pageData,C as default};
