import{_ as s,h as i,o as a,a9 as n}from"./chunks/framework.DFTF_j0L.js";const E=JSON.parse('{"title":"JavaScript 踩坑记录","description":"记录个人遇到或他人分享的 JavaScript 相关踩坑记录","frontmatter":{"description":"记录个人遇到或他人分享的 JavaScript 相关踩坑记录"},"headers":[],"relativePath":"pit/javascript.md","filePath":"pit/javascript.md","lastUpdated":1714113595000}'),l={name:"pit/javascript.md"},e=n(`<h1 id="javascript-踩坑记录" tabindex="-1">JavaScript 踩坑记录 <a class="header-anchor" href="#javascript-踩坑记录" aria-label="Permalink to &quot;JavaScript 踩坑记录&quot;">​</a></h1><h2 id="字符串长度统计不正确" tabindex="-1">字符串长度统计不正确 <a class="header-anchor" href="#字符串长度统计不正确" aria-label="Permalink to &quot;字符串长度统计不正确&quot;">​</a></h2><p>JavaScript 引擎使用 UTF-16 编码来存储字符串，而 UTF-16 编码中的大部分字符都是用一个或多个 UTF-16 单元表示，而字符串的 <code>length</code> 属性返回的是字符串中包含的 16 位值的数量，而不是字符的实际数量</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 直接计算长度</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;𠮷&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;😀&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;👩‍👩‍👧‍👧&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 11</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转为数组计算</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;𠮷&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;😀&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;👩‍👩‍👧‍👧&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 7</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在 <code>html</code> 中，<code>input</code> 和 <code>textarea</code> 的 <code>maxlength</code> 属性也会计算错误</p></div><p><strong>解决方法</strong>：</p><p>使用 <a href="https://github.com/lodash/lodash" target="_blank" rel="noreferrer">lodash</a> 提供的 <a href="https://www.lodashjs.com/docs/lodash.size" target="_blank" rel="noreferrer">size</a> 方法来计算字符串的长度</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { size } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lodash&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;𠮷&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;😀&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;👩‍👩‍👧‍👧&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><a href="https://mp.weixin.qq.com/s/YuGPfaDpak-TO8vt20LAyA" target="_blank" rel="noreferrer">探索 emoji 字符串长度之谜</a></li><li><a href="https://github.com/lodash/lodash" target="_blank" rel="noreferrer">lodash | GitHub</a></li></ul>`,9),p=[e];function t(h,r,k,d,c,o){return a(),i("div",null,p)}const y=s(l,[["render",t]]);export{E as __pageData,y as default};
