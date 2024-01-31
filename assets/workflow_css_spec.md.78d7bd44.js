import{_ as s,o as n,g as a,Q as l}from"./chunks/framework.308e1374.js";const m=JSON.parse('{"title":"CSS 常用语法记录","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/css/spec.md","filePath":"workflow/css/spec.md","lastUpdated":1695296955000}'),p={name:"workflow/css/spec.md"},e=l(`<h1 id="css-常用语法记录" tabindex="-1">CSS 常用语法记录 <a class="header-anchor" href="#css-常用语法记录" aria-label="Permalink to &quot;CSS 常用语法记录&quot;">​</a></h1><blockquote><p>工作中会用到的 CSS 语法笔记</p></blockquote><h2 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h2><h3 id="设备屏幕宽度常用断点" tabindex="-1">设备屏幕宽度常用断点 <a class="header-anchor" href="#设备屏幕宽度常用断点" aria-label="Permalink to &quot;设备屏幕宽度常用断点&quot;">​</a></h3><blockquote><p>设备屏幕设备尺寸很多，一般写断点时以 Apple 设备的屏幕尺寸为标准</p></blockquote><ul><li><code>min-width</code> 表示<strong>移动端优先</strong><ul><li>样式默认在所有屏幕尺寸下都有效</li><li>常用于先写移动端的场景</li></ul></li><li><code>max-width</code> 表示 <strong>PC 端优先</strong><ul><li>样式默认在指定屏幕尺寸下有效</li><li>常用于先写 PC 端的场景</li></ul></li></ul><h4 id="移动端" tabindex="-1">移动端 <a class="header-anchor" href="#移动端" aria-label="Permalink to &quot;移动端&quot;">​</a></h4><blockquote><p>移动端包含手机和平板</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* iPhone 4 / 5 等 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">320</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPhone 6 - 8 / X / XS 等 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">375</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPhone 6 - 8 Plus / XR 等 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">414</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 常用断点（无特定机型） */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">640</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPad mini 等 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 常用断点（无特定机型） */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">960</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPad Pro 12.9 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* iPhone 4 / 5 等 */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">320</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPhone 6 - 8 / X / XS 等 */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">375</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPhone 6 - 8 Plus / XR 等 */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">414</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 常用断点（无特定机型） */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">640</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPad mini 等 */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">768</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 常用断点（无特定机型） */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">960</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* iPad Pro 12.9 */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1024</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="pc-端" tabindex="-1">PC 端 <a class="header-anchor" href="#pc-端" aria-label="Permalink to &quot;PC 端&quot;">​</a></h4><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1280</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1366</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1440</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1920</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2560</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1280</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1366</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1440</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1920</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2560</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><div class="tip custom-block"><p class="custom-block-title">屏幕尺寸查询工具</p><ul><li><a href="https://uiiiuiii.com/screen/index.htm" target="_blank" rel="noreferrer">屏幕尺寸大全</a></li><li><a href="https://screensizemap.com" target="_blank" rel="noreferrer">screen size map</a> 可视化屏幕尺寸比较</li></ul></div><h2 id="滚动条样式" tabindex="-1">滚动条样式 <a class="header-anchor" href="#滚动条样式" aria-label="Permalink to &quot;滚动条样式&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 滚动条 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 纵向 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 横向 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的按钮(上下箭头) */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-track</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道，没有滑块 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-track-piece</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 垂直滚动条和水平滚动条交汇的部分 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-corner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的滚动滑块 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-thumb</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#d6d6d6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 右下角拖动块 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-resizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 滚动条 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 纵向 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 横向 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的按钮(上下箭头) */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-button</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-track</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道，没有滑块 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-track-piece</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 垂直滚动条和水平滚动条交汇的部分 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-corner</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的滚动滑块 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-thumb</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#d6d6d6</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 右下角拖动块 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-resizer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar" target="_blank" rel="noreferrer">::-webkit-scrollbar | MDN</a></p>`,16),o=[e];function c(r,t,i,y,E,b){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
