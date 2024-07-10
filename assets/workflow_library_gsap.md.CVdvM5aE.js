import{_ as s,h as i,o as a,aa as n}from"./chunks/framework.C-tu2utv.js";const E=JSON.parse('{"title":"GSAP 使用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/library/gsap.md","filePath":"workflow/library/gsap.md","lastUpdated":1708947033000}'),l={name:"workflow/library/gsap.md"},e=n(`<h1 id="gsap-使用技巧" tabindex="-1">GSAP 使用技巧 <a class="header-anchor" href="#gsap-使用技巧" aria-label="Permalink to &quot;GSAP 使用技巧&quot;">​</a></h1><p><a href="https://gsap.com" target="_blank" rel="noreferrer">GreenSock 动画平台（GSAP）</a> 是一款高性能的动画库，可以对 JavaScript 可以操作的所有内容进行动画处理，包括 DOM、SVG、Canvas、CSS、JS 对象等</p><h2 id="添加平滑滚动" tabindex="-1">添加平滑滚动 <a class="header-anchor" href="#添加平滑滚动" aria-label="Permalink to &quot;添加平滑滚动&quot;">​</a></h2><p>在使用 GSAP 进行动画开发时，有时候需要添加平滑滚动保证动画的流畅性，而官方提供的 <a href="https://gsap.com/docs/v3/Plugins/ScrollSmoother/" target="_blank" rel="noreferrer">ScrollSmoother</a> 插件需要付费，这里提供一种免费平替方案 —— <a href="https://github.com/darkroomengineering/lenis" target="_blank" rel="noreferrer">lenis | GitHub</a></p><p>安装 <code>lenis</code></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lenis</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lenis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用 <code>lenis</code> 实现平滑滚动</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Lenis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@studio-freight/lenis&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { gsap } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gsap&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ScrollTrigger } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gsap/ScrollTrigger&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lenis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Lenis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lenis.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ScrollTrigger.update)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gsap.ticker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lenis.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">raf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gsap.ticker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lagSmoothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8),p=[e];function t(h,r,k,d,g,c){return a(),i("div",null,p)}const F=s(l,[["render",t]]);export{E as __pageData,F as default};
