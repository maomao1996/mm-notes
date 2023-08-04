import{_ as s,v as n,b as a,R as e}from"./chunks/framework.975b469a.js";const l="/mm-notes/assets/rootfiber.3263dda8.png",o="/mm-notes/assets/workInProgressFiber.e476948b.png",p="/mm-notes/assets/wipTreeFinish.01903533.png",r="/mm-notes/assets/wipTreeUpdate.b570d550.png",c="/mm-notes/assets/currentTreeUpdate.dce275cd.png",h=JSON.parse('{"title":"Fiber 架构和双缓存","description":"","frontmatter":{},"headers":[],"relativePath":"analysis/react/18.2.0/base/fiber.md","filePath":"analysis/react/18.2.0/base/fiber.md","lastUpdated":1691152019000}'),t={name:"analysis/react/18.2.0/base/fiber.md"},i=e(`<h1 id="fiber-架构和双缓存" tabindex="-1">Fiber 架构和双缓存 <a class="header-anchor" href="#fiber-架构和双缓存" aria-label="Permalink to &quot;Fiber 架构和双缓存&quot;">​</a></h1><p>React 16 开始引入了 Fiber 架构，它的主要目的是为了解决 React 15 存在的一些问题，比如递归调用栈过深导致的卡顿、无法中断渲染、无法优先级更新等。即<strong>将递归的无法中断的更新重构为异步的可中断更新</strong></p><h2 id="fiber-的含义" tabindex="-1">Fiber 的含义 <a class="header-anchor" href="#fiber-的含义" aria-label="Permalink to &quot;Fiber 的含义&quot;">​</a></h2><p>Fiber 的三层含义：</p><ul><li><strong>作为架构</strong>来说： <ul><li>React 15 的 <code>Reconciler</code> 采用递归的方式执行，数据保存在递归调用栈中，所以被称为 <code>stack Reconciler</code></li><li>React 16 的 <code>Reconciler</code> 基于 <code>Fiber 节点</code> 实现，被称为 <code>Fiber Reconciler</code></li></ul></li><li><strong>作为静态的数据结构</strong>来说：每个 <code>Fiber 节点</code> 对应一个 <code>React element</code> ，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的 DOM 节点等信息</li><li><strong>作为动态的工作单元</strong>来说：每个 <code>Fiber 节点</code> 保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）</li></ul><div class="tip custom-block"><p class="custom-block-title">Fiber Reconciler 的主要作用</p><ul><li>能够把可中断的任务切片处理</li><li>能够调整优先级，重置并复用任务</li><li>能够在父元素与子元素之间交错处理，以支持 React 中的布局</li><li>能够在 <code>render()</code> 中返回多个元素</li><li>更好地支持错误边界</li></ul><p><a href="https://zh-hans.legacy.reactjs.org/docs/codebase-overview.html#fiber-reconciler" target="_blank" rel="noreferrer">Fiber reconciler | React 旧版官方文档</a></p></div><h2 id="fiber-的数据结构" tabindex="-1">Fiber 的数据结构 <a class="header-anchor" href="#fiber-的数据结构" aria-label="Permalink to &quot;Fiber 的数据结构&quot;">​</a></h2><p>Fiber 上主要有 DOM、Fiber 树、状态数据、副作用四种标识</p><blockquote><p>源码地址 <a href="https://github.com/maomao1996/code-analysis/blob/9a3aa89acc830353e3795276b0eda4e96e840975/react-v18.2.0/src/react/packages/react-reconciler/src/ReactFiber.old.js#L118" target="_blank" rel="noreferrer">function FiberNode | ReactFiber.old.js</a></p></blockquote><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FiberNode</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">tag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WorkTag</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// /react-reconciler/src/ReactWorkTags.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">pendingProps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mixed</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TypeOfMode</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/*! --------------- 作为静态数据结构 --------------- */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Fiber 对应组件的类型</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// key</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">elementType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 大部分情况同 type，某些情况不同，比如 FunctionComponent 使用 React.memo 包裹</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// FunctionComponent 指函数本身；ClassComponent 指 class；HostComponent 指 DOM 节点的tagName</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stateNode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Fiber 对应的真实DOM节点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/*! --------------- 作为 Fiber 架构 --------------- */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 指向父级 Fiber 节点</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">child</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 指向第一个子 Fiber 节点</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">sibling</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 指向下一个兄弟 Fiber 节点</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/*! -------------- 作为动态的工作单元 --------------- */</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 保存本次更新造成的状态改变相关信息</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">pendingProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pendingProps</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">memoizedProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">updateQueue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">memoizedState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dependencies</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">mode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Effects 副作用相关</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">flags</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NoFlags</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">subtreeFlags</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NoFlags</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">deletions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 调度优先级相关</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lanes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NoLanes</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">childLanes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NoLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 指向该 Fiber 节点对应的双缓存 Fiber 节点</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">alternate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="fiber-双缓存" tabindex="-1">Fiber 双缓存 <a class="header-anchor" href="#fiber-双缓存" aria-label="Permalink to &quot;Fiber 双缓存&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">双缓存</p><p>当我们用 <code>canvas</code> 绘制动画时，每一帧绘制前都会调用 <code>ctx.clearRect</code> 清除上一帧的画面，如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。</p><p>为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。</p><p>这种在<strong>内存中构建并直接替换</strong>的技术叫做双缓存</p></div><p>React 使用“双缓存”来完成 Fiber 树的构建与替换——对应着 DOM 树的创建与更新</p><h3 id="fiber-双缓存的构建" tabindex="-1">Fiber 双缓存的构建 <a class="header-anchor" href="#fiber-双缓存的构建" aria-label="Permalink to &quot;Fiber 双缓存的构建&quot;">​</a></h3><p>在 React 中最多会同时存在两棵 Fiber 树</p><ul><li>当前屏幕上显示内容对应的 Fiber 树叫做 <code>current Fiber 树</code></li><li>正在内存中构建的 Fiber 树叫做 <code>workInProgress Fiber 树</code></li></ul><p>React 应用的根节点通过使 <code>current</code> 指针在不同 <code>Fiber 树</code> 的 <code>rootFiber</code> 间切换来完成 <code>current Fiber 树</code> 指向的切换</p><p>当 <code>workInProgress Fiber 树</code> 构建完成交给 <code>Renderer</code> 渲染在页面上后，React 会将应用根节点的 <code>current</code> 指针指向 <code>workInProgress Fiber 树</code>，此时 <code>workInProgress Fiber 树</code> 就变为 <code>current Fiber 树</code></p><p>每次状态更新都会产生新的 <code>workInProgress Fiber 树</code>，通过 <code>current</code> 与 <code>workInProgress</code> 的替换，完成 DOM 更新</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><code>current Fiber 树</code> 中的 <code>Fiber 节点</code> 被称为 <code>current fiber</code></li><li><code>workInProgress Fiber 树</code> 中的 <code>Fiber 节点</code> 被称为 <code>workInProgress fiber</code></li><li><code>current Fiber 树</code> 中的 <code>Fiber 节点</code> 都有 <code>alternate</code> 属性指向 <code>workInProgress Fiber 树</code> 中对应的 <code>Fiber 节点</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">currentFiber</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">alternate </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> workInProgressFiber</span></span>
<span class="line"><span style="color:#A6ACCD;">workInProgressFiber</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">alternate </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> currentFiber</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h3 id="mount-阶段" tabindex="-1"><code>mount</code> 阶段 <a class="header-anchor" href="#mount-阶段" aria-label="Permalink to &quot;\`mount\` 阶段&quot;">​</a></h3><blockquote><p>以下面的代码为 🌰</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(num </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol><li>首次执行 <code>ReactDOM.render</code> 时会创建 <code>fiberRootNode</code>（源码中叫 <code>fiberRoot</code>）和 <code>rootFiber</code></li></ol><ul><li><code>fiberRootNode</code> 是整个应用的根节点</li><li><code>rootFiber</code> 是 <code>&lt;App/&gt;</code> 所在组件树的根节点</li></ul><div class="tip custom-block"><p class="custom-block-title">为什么要区分 <code>fiberRootNode</code> 与 <code>rootFiber</code></p><p>因为在一个 React 应用中我们可以多次调用 <code>ReactDOM.render</code> 来渲染不同的组件树，这时它们会拥有不同的 <code>rootFiber</code>。但是整个应用的根节点只有一个那就是 <code>fiberRootNode</code></p></div><p>这时 <code>fiberRootNode</code> 的 <code>current</code> 指针会指向当前页面上已渲染内容对应 <code>Fiber 树</code>（即 <code>current Fiber 树</code>）</p><p><img src="`+l+'" alt="rootFiber"></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fiberRootNode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rootFiber</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>由于是首屏渲染，页面中还没有挂载任何 DOM，所以 <code>fiberRootNode.current</code> 指向的 <code>rootFiber</code> 是没有任何 <code>子 Fiber 节点</code>的（即<code>current Fiber 树</code>为空）</p><ol start="2"><li>接下来进入 <code>render 阶段</code>，根据组件返回的 JSX 在内存中依次创建 <code>Fiber 节点</code> 并连接在一起构建 <code>Fiber 树</code>，其被称为<code>workInProgress Fiber 树</code>（下图中右侧为内存中构建的树，左侧为页面显示的树）</li></ol><p>在构建 <code>workInProgress Fiber 树</code> 时会尝试复用 <code>current Fiber 树</code> 中已有的 <code>Fiber 节点</code> 内的属性，在<code>首屏渲染</code>时只有 <code>rootFiber</code> 存在对应的 <code>current fiber</code>（即 <code>rootFiber.alternate</code>）</p><p><img src="'+o+'" alt="workInProgressFiber"></p><ol start="3"><li>图中右侧已构建完的 <code>workInProgress Fiber 树</code> 会在 <code>commit 阶段</code> 渲染到页面</li></ol><p>此时 DOM 更新为右侧树对应的界面。<code>fiberRootNode</code> 的 <code>current</code> 指针指向 <code>workInProgress Fiber 树</code> 使其变更为<code>current Fiber 树</code>（即下图所示）</p><p><img src="'+p+'" alt="wipTreeFinish"></p><h2 id="update-阶段" tabindex="-1"><code>update</code> 阶段 <a class="header-anchor" href="#update-阶段" aria-label="Permalink to &quot;`update` 阶段&quot;">​</a></h2><ol><li>当我们点击 <code>p 节点</code> 触发状态改变时，会开启一次新的 <code>render 阶段</code> 并构建一棵新的 <code>workInProgress Fiber 树</code></li></ol><p><img src="'+r+'" alt="wipTreeUpdate"></p><p>和 <code>mount</code> 时一样，<code>workInProgress fiber</code> 的创建会复用 <code>current Fiber 树</code> 中对应的节点数据</p><blockquote><p>决定是否复用的过程就是 Diff 算法</p></blockquote><ol start="2"><li><code>workInProgress Fiber 树</code> 在 <code>render 阶段</code> 完成构建后进入 <code>commit 阶段</code> 渲染到页面上。在渲染完毕后<code>workInProgress Fiber 树</code> 变更为 <code>current Fiber 树</code></li></ol><p><img src="'+c+'" alt="currentTreeUpdate"></p><hr><div class="tip custom-block"><p class="custom-block-title">相关资料</p><ul><li><a href="https://react.iamkasong.com/process/fiber.html" target="_blank" rel="noreferrer">Fiber 架构的实现原理 | React 技术揭秘</a></li><li><a href="https://react.iamkasong.com/process/doubleBuffer.html" target="_blank" rel="noreferrer">Fiber 架构的工作原理 | React 技术揭秘</a></li></ul></div>',45),F=[i];function y(d,b,D,u,C,A){return n(),a("div",null,F)}const g=s(t,[["render",y]]);export{h as __pageData,g as default};
