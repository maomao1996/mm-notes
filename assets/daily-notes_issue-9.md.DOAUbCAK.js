import{_ as e,h as a,a9 as d,o}from"./chunks/framework.iNNLCK4S.js";const f=JSON.parse(`{"title":"package.json 相关知识","description":"","frontmatter":{"head":[["script",{"charset":"UTF-8","id":"LA_COLLECT","src":"//sdk.51.la/js-sdk-pro.min.js"}],["script",{},"typeof LA !== 'undefined' && LA.init({\\"id\\":\\"3LNfUkScYzEz6k4D\\",\\"ck\\":\\"3LNfUkScYzEz6k4D\\",\\"hashMode\\":true})"]]},"headers":[],"relativePath":"daily-notes/issue-9.md","filePath":"daily-notes/issue-9.md","lastUpdated":null}`),l={name:"daily-notes/issue-9.md"};function s(r,t,n,c,i,h){return o(),a("div",null,t[0]||(t[0]=[d('<h1 id="package-json-相关知识" tabindex="-1"><code>package.json</code> 相关知识 <a class="header-anchor" href="#package-json-相关知识" aria-label="Permalink to &quot;`package.json` 相关知识&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/9" target="_blank" rel="noreferrer">package.json 相关知识 | GitHub</a></p></div><h2 id="版本说明" tabindex="-1">版本说明 <a class="header-anchor" href="#版本说明" aria-label="Permalink to &quot;版本说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>^1.0.0</code></td><td style="text-align:left;">会匹配所有 <code>1.x.x</code>版本，保持一致 <code>major version</code> (大于等于当前版本，小于 <code>2.0.0</code>)</td></tr><tr><td style="text-align:left;"><code>~1.0.0</code></td><td style="text-align:left;">会匹配所有 <code>1.0.x</code>版本，保持一致 <code>minor version</code> (大于等于当前版本，小于 <code>1.1.0</code>)</td></tr><tr><td style="text-align:left;"><code>1.x</code></td><td style="text-align:left;">会根据 <code>x</code> 的位置来匹配对应规则</td></tr></tbody></table><h2 id="npm-包入口文件定义" tabindex="-1"><code>npm</code> 包入口文件定义 <a class="header-anchor" href="#npm-包入口文件定义" aria-label="Permalink to &quot;`npm` 包入口文件定义&quot;">​</a></h2><h3 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-label="Permalink to &quot;字段说明&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th><th style="text-align:left;">支持环境</th></tr></thead><tbody><tr><td style="text-align:left;"><code>main</code></td><td style="text-align:left;">用于指定 <code>npm</code> 包的入口文件</td><td style="text-align:left;"><code>browser / node</code></td></tr><tr><td style="text-align:left;"><code>module</code></td><td style="text-align:left;">用于指定 <code>es modules</code> 规范的入口文件</td><td style="text-align:left;"><code>browser / node</code></td></tr><tr><td style="text-align:left;"><code>browser</code></td><td style="text-align:left;">用于指定 <code>npm</code> 包在 <code>browser</code> 环境下的入口文件</td><td style="text-align:left;"><code>browser</code></td></tr></tbody></table><h3 id="优先级说明" tabindex="-1">优先级说明 <a class="header-anchor" href="#优先级说明" aria-label="Permalink to &quot;优先级说明&quot;">​</a></h3><p><a href="https://github.com/SunshowerC/blog/issues/8" target="_blank" rel="noreferrer">详细资料 - package.json 中 你还不清楚的 browser，module，main 字段优先级</a></p><p><img src="https://cdn.jsdelivr.net/gh/maomao1996/daily-notes/static/9/9-1.png" alt="流程图" loading="lazy"></p>',10)]))}const g=e(l,[["render",s]]);export{f as __pageData,g as default};
