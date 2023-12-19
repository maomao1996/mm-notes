import{_ as s,o as n,g as a,Q as p}from"./chunks/framework.e96f8bd7.js";const u=JSON.parse('{"title":"PC 踩坑记录","description":"记录个人遇到或他人分享的 PC 相关踩坑记录","frontmatter":{"description":"记录个人遇到或他人分享的 PC 相关踩坑记录"},"headers":[],"relativePath":"pit/pc.md","filePath":"pit/pc.md","lastUpdated":1700821602000}'),l={name:"pit/pc.md"},e=p(`<h1 id="pc-踩坑记录" tabindex="-1">PC 踩坑记录 <a class="header-anchor" href="#pc-踩坑记录" aria-label="Permalink to &quot;PC 踩坑记录&quot;">​</a></h1><p>记录个人遇到或他人分享的 PC 相关踩坑记录</p><h2 id="transform-导致字体不清晰" tabindex="-1"><code>transform</code> 导致字体不清晰 <a class="header-anchor" href="#transform-导致字体不清晰" aria-label="Permalink to &quot;\`transform\` 导致字体不清晰&quot;">​</a></h2><p><code>transform</code> 在<strong>渲染非整数的 <code>px</code> 时</strong>就会出现字体模糊</p><p><strong>解决方法</strong>：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 方案一 */</span></span>
<span class="line"><span style="color:#E1E4E8;">目标元素 {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-webkit-font-smoothing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">antialiased</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 方案二 */</span></span>
<span class="line"><span style="color:#E1E4E8;">目标元素 {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">perspective</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 方案一 */</span></span>
<span class="line"><span style="color:#24292E;">目标元素 {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-font-smoothing</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">antialiased</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 方案二 */</span></span>
<span class="line"><span style="color:#24292E;">目标元素 {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">perspective</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><a href="https://css-tricks.com/forums/topic/transforms-cause-font-smoothing-weirdness-in-webkit/" target="_blank" rel="noreferrer">详细说明 CSS-TRACKS</a></p><h2 id="删除-pwa-服务后-浏览器无法更新到最新页面" tabindex="-1">删除 <code>PWA</code> 服务后，浏览器无法更新到最新页面 <a class="header-anchor" href="#删除-pwa-服务后-浏览器无法更新到最新页面" aria-label="Permalink to &quot;删除 \`PWA\` 服务后，浏览器无法更新到最新页面&quot;">​</a></h2><p>本站之前使用了 <code>PWA</code>，在切换到 <code>vitepress</code> 后移除了 <code>PWA</code> 服务，在部署后浏览器仍然访问的是 <code>vuepress</code> 版本的</p><p><strong>解决方法</strong>：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 注销 PWA 服务 */</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (window.navigator </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> navigator.serviceWorker) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  navigator.serviceWorker.</span><span style="color:#B392F0;">getRegistrations</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">registrations</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> registration </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> registrations) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      registration.</span><span style="color:#B392F0;">unregister</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 删除浏览器中的缓存 */</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;caches&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  caches.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">keyList</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      keyList.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> caches.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 注销 PWA 服务 */</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (window.navigator </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> navigator.serviceWorker) {</span></span>
<span class="line"><span style="color:#24292E;">  navigator.serviceWorker.</span><span style="color:#6F42C1;">getRegistrations</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">registrations</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> registration </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> registrations) {</span></span>
<span class="line"><span style="color:#24292E;">      registration.</span><span style="color:#6F42C1;">unregister</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 删除浏览器中的缓存 */</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;caches&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> window) {</span></span>
<span class="line"><span style="color:#24292E;">  caches.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">keyList</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      keyList.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> caches.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,11),o=[e];function r(c,t,i,E,y,d){return n(),a("div",null,o)}const m=s(l,[["render",r]]);export{u as __pageData,m as default};