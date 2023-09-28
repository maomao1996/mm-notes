import{_ as t,o as e,g as s,Q as a}from"./chunks/framework.4c5231b1.js";const o="/mm-notes/assets/legacy-process.38b86371.webp",r="/mm-notes/assets/concurrent-process.01ad8069.webp",b=JSON.parse('{"title":"启动模式和渲染流程","description":"","frontmatter":{},"headers":[],"relativePath":"analysis/react/18.2.0/base/mode-process.md","filePath":"analysis/react/18.2.0/base/mode-process.md","lastUpdated":1691303219000}'),n={name:"analysis/react/18.2.0/base/mode-process.md"},l=a(`<h1 id="启动模式和渲染流程" tabindex="-1">启动模式和渲染流程 <a class="header-anchor" href="#启动模式和渲染流程" aria-label="Permalink to &quot;启动模式和渲染流程&quot;">​</a></h1><h2 id="启动模式" tabindex="-1">启动模式 <a class="header-anchor" href="#启动模式" aria-label="Permalink to &quot;启动模式&quot;">​</a></h2><p>在 React 18 中，React 应用有两种启动模式：</p><ul><li><strong><code>legacy</code> 模式</strong>：<code>ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;))</code> 这个模式可能不支持<a href="https://17.reactjs.org/docs/concurrent-mode-patterns.html#the-three-steps" target="_blank" rel="noreferrer">这些新功能(concurrent 支持的所有功能)</a></li><li><strong><code>concurrent</code> 模式</strong>：<code>ReactDOM.createRoot(rootNode).render(&lt;App /&gt;)</code> 这个模式开启了所有的新功能（是 React 18 的默认模式）</li></ul><div class="tip custom-block"><p class="custom-block-title"><code>blocking</code> 模式</p><p>在 React 17 中，还有一种 <strong><code>blocking</code> 模式</strong>，它是开启部分 <code>concurrent</code> 模式特性的中间模式，是作为迁移到 <strong><code>concurrent</code> 模式</strong>的第一个步骤</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ReactDOM.</span><span style="color:#B392F0;">createBlockingRoot</span><span style="color:#E1E4E8;">(rootNode).</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(&lt;</span><span style="color:#79B8FF;">App</span><span style="color:#E1E4E8;"> /&gt;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ReactDOM.</span><span style="color:#6F42C1;">createBlockingRoot</span><span style="color:#24292E;">(rootNode).</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(&lt;</span><span style="color:#005CC5;">App</span><span style="color:#24292E;"> /&gt;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>这个模式 React 18 中已经被移除</p></blockquote><p><a href="https://17.reactjs.org/docs/concurrent-mode-adoption.html#migration-step-blocking-mode" target="_blank" rel="noreferrer">Blocking Mode</a></p></div><h3 id="各种模式对特性的支持" tabindex="-1">各种模式对特性的支持 <a class="header-anchor" href="#各种模式对特性的支持" aria-label="Permalink to &quot;各种模式对特性的支持&quot;">​</a></h3><table><thead><tr><th></th><th>legacy 模式</th><th>blocking 模式</th><th>concurrent 模式</th></tr></thead><tbody><tr><td><a href="https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs" target="_blank" rel="noreferrer">String Refs</a></td><td>✅</td><td>🚫**</td><td>🚫**</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/legacy-context.html" target="_blank" rel="noreferrer">Legacy Context</a></td><td>✅</td><td>🚫**</td><td>🚫**</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage" target="_blank" rel="noreferrer">findDOMNode</a></td><td>✅</td><td>🚫**</td><td>🚫**</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly" target="_blank" rel="noreferrer">Suspense</a></td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspenselist" target="_blank" rel="noreferrer">SuspenseList</a></td><td>🚫</td><td>✅</td><td>✅</td></tr><tr><td>Suspense SSR + Hydration</td><td>🚫</td><td>✅</td><td>✅</td></tr><tr><td>Progressive Hydration</td><td>🚫</td><td>✅</td><td>✅</td></tr><tr><td>Selective Hydration</td><td>🚫</td><td>🚫</td><td>✅</td></tr><tr><td>Cooperative Multitasking</td><td>🚫</td><td>🚫</td><td>✅</td></tr><tr><td>Automatic batching of multiple setStates</td><td>🚫*</td><td>✅</td><td>✅</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#splitting-high-and-low-priority-state" target="_blank" rel="noreferrer">Priority-based Rendering</a></td><td>🚫</td><td>🚫</td><td>✅</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html#interruptible-rendering" target="_blank" rel="noreferrer">Interruptible Prerendering</a></td><td>🚫</td><td>🚫</td><td>✅</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#transitions" target="_blank" rel="noreferrer">useTransition</a></td><td>🚫</td><td>🚫</td><td>✅</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#deferring-a-value" target="_blank" rel="noreferrer">useDeferredValue</a></td><td>🚫</td><td>🚫</td><td>✅</td></tr><tr><td><a href="https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#suspense-reveal-train" target="_blank" rel="noreferrer">Suspense Reveal &quot;Train&quot;</a></td><td>🚫</td><td>🚫</td><td>✅</td></tr></tbody></table><p>*<code>：legacy</code> 模式在合成事件中有自动批处理的功能，但仅限于一个浏览器任务。非 React 事件想使用这个功能必须使用 <code>unstable_batchedUpdates</code>。在 <code>blocking</code> 模式和 <code>concurrent</code> 模式下，所有的 <code>setState</code> 在默认情况下都是批处理的</p><p>**：会在开发中发出警告</p><hr><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>React 通过不同的<strong>入口函数</strong>开启不同模式，且模式的变化影响的是整个应用的工作方式，所以无法只针对某个组件开启不同模式</li><li>这几种模式下的 <code>fiber.mode</code> 的值有所不同</li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RootTag</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">LegacyRoot</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ConcurrentRoot</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RootTag</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">LegacyRoot</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ConcurrentRoot</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><h2 id="渲染流程" tabindex="-1">渲染流程 <a class="header-anchor" href="#渲染流程" aria-label="Permalink to &quot;渲染流程&quot;">​</a></h2><p>React 应用程序的渲染流程可以分为三个阶段：</p><ul><li>初始化阶段</li><li><code>render</code> 阶段：即 Reconciler 工作的阶段，<code>render</code> 阶段会调用组件的 <code>render</code> 方法获取组件的 <code>React Element</code>，并构建 <code>Fiber</code> 树</li><li><code>commit</code> 阶段：即 Renderer 工作的阶段，<code>commit</code> 阶段会把 <code>render</code> 阶段提交的信息渲染在页面上</li></ul><p><code>render</code> 与 <code>commit</code> 阶段统称为 <code>work</code>，即 React 在工作中。如果任务正在 Scheduler 内调度就不属于 <code>work</code> 阶段</p><h3 id="legacy-模式的调用栈" tabindex="-1">legacy 模式的调用栈 <a class="header-anchor" href="#legacy-模式的调用栈" aria-label="Permalink to &quot;legacy 模式的调用栈&quot;">​</a></h3><p><img src="`+o+'" alt="legacy-process"></p><h3 id="concurrent-模式的调用栈" tabindex="-1">concurrent 模式的调用栈 <a class="header-anchor" href="#concurrent-模式的调用栈" aria-label="Permalink to &quot;concurrent 模式的调用栈&quot;">​</a></h3><p><img src="'+r+'" alt="concurrent-process"></p>',19),c=[l];function d(p,i,h,y,u,g){return e(),s("div",null,c)}const E=t(n,[["render",d]]);export{b as __pageData,E as default};
