import{_ as s,h as i,o as a,a9 as t}from"./chunks/framework.35Ps3iiG.js";const l="/notes/assets/dom.CV8UFRHN.webp",E=JSON.parse('{"title":"Virtual DOM","description":"茂茂的 React v18.2.0 源码阅读笔记 —— Virtual DOM","frontmatter":{"description":"茂茂的 React v18.2.0 源码阅读笔记 —— Virtual DOM"},"headers":[],"relativePath":"analysis/react/18.2.0/base/virtual-dom.md","filePath":"analysis/react/18.2.0/base/virtual-dom.md","lastUpdated":1697968286000}'),n={name:"analysis/react/18.2.0/base/virtual-dom.md"},r=t(`<h1 id="virtual-dom" tabindex="-1">Virtual DOM <a class="header-anchor" href="#virtual-dom" aria-label="Permalink to &quot;Virtual DOM&quot;">​</a></h1><p>Virtual DOM（虚拟 DOM）是一种用于优化 Web 前端性能的技术，也是 React 的关键特性之一</p><h2 id="为什么需要-virtual-dom" tabindex="-1">为什么需要 Virtual DOM <a class="header-anchor" href="#为什么需要-virtual-dom" aria-label="Permalink to &quot;为什么需要 Virtual DOM&quot;">​</a></h2><p>浏览器中的 DOM 是非常“昂贵&quot;的，它是一个很复杂的数据结构，我们可以通过下面的代码来查看 DOM 对象上的属性和方法</p><blockquote><p>创建一个 <code>div</code> 元素为 🌰</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> div) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+l+'" alt="DOM"></p><p>可以看到原生 DOM 对象上有很多属性和方法，而我们在操作 DOM 后，浏览器会进行重排（Reflow）和重绘（Repaint），一旦操作不当，就会造成性能问题</p><h2 id="什么是-virtual-dom" tabindex="-1">什么是 Virtual DOM <a class="header-anchor" href="#什么是-virtual-dom" aria-label="Permalink to &quot;什么是 Virtual DOM&quot;">​</a></h2><p>Virtual DOM 是 JavaScript 和 DOM 之间的一个映射缓存，其本质上是<strong>一个轻量级的 JavaScript 对象树</strong>，它通过这个树来描述 DOM 树的结构和属性</p><h2 id="virtual-dom-的工作原理" tabindex="-1">Virtual DOM 的工作原理 <a class="header-anchor" href="#virtual-dom-的工作原理" aria-label="Permalink to &quot;Virtual DOM 的工作原理&quot;">​</a></h2><ol><li><strong>创建 Virtual DOM</strong>：当应用初始化时或数据发生变化时，会创建或更新 Virtual DOM</li><li><strong>Diff 算法</strong>：在生成新的 Virtual DOM 之后，会与之前的 Virtual DOM 进行比较，找出两者之间的差异。这个过程称为 <strong>Diff 算法</strong>，它能够高效地计算出需要更新的最小操作集合</li><li><strong>更新原生 DOM</strong>：通过 Diff 算法的结果，确定了哪些部分需要更新，然后将这些变化应用到真实 DOM 上。这个阶段真正将变化应用到 DOM 上，通常使用最小的 DOM 操作来实现更新，从而减少了 DOM 操作的开销。</li></ol><p>可以看到 Virtual DOM 的本质是一种在内存中进行 DOM 树的处理和优化的机制。通过在 JavaScript 对象上进行操作，可以避免频繁的直接 DOM 操作，从而提高了应用的性能和响应速度。虽然 Virtual DOM 本身会引入一定的计算开销，但由于减少了真实 DOM 操作，整体上还是对性能有所提升</p><h2 id="virtual-dom-的优缺点" tabindex="-1">Virtual DOM 的优缺点 <a class="header-anchor" href="#virtual-dom-的优缺点" aria-label="Permalink to &quot;Virtual DOM 的优缺点&quot;">​</a></h2><p><strong>优点</strong>：</p><ul><li>简化开发：Virtual DOM 使得开发者能够更专注于应用的业务逻辑，而无需过多关注手动 DOM 操作</li><li>性能方面：使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流，提高性能</li><li>跨平台：借助 Virtual DOM，带来了跨平台的能力，可以一套代码多端运行</li></ul><p><strong>缺点</strong>：</p><ul><li>在一些性能要求极高的应用中 Virtual DOM 无法进行针对性的极致优化</li><li>首次渲染慢（需要构建 Virtual DOM）</li></ul><hr><div class="tip custom-block"><p class="custom-block-title">相关资料</p><p><a href="https://www.zhihu.com/question/31809713/answer/53544875" target="_blank" rel="noreferrer">网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？ - 尤雨溪的回答</a></p></div>',20),e=[r];function p(h,k,o,d,u,c){return a(),i("div",null,e)}const g=s(n,[["render",p]]);export{E as __pageData,g as default};
