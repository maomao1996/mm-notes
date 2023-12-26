import{_ as s,o as n,g as a,Q as l}from"./chunks/framework.e96f8bd7.js";const p="/mm-notes/assets/commitRoot.0d33fe8d.webp",m=JSON.parse('{"title":"commitRoot","description":"茂茂的 React v18.2.0 源码阅读笔记 —— commitRoot","frontmatter":{"description":"茂茂的 React v18.2.0 源码阅读笔记 —— commitRoot"},"headers":[],"relativePath":"analysis/react/18.2.0/process/commitRoot.md","filePath":"analysis/react/18.2.0/process/commitRoot.md","lastUpdated":1702987116000}'),e={name:"analysis/react/18.2.0/process/commitRoot.md"},o=l('<h1 id="commitroot" tabindex="-1"><code>commitRoot</code> <a class="header-anchor" href="#commitroot" aria-label="Permalink to &quot;`commitRoot`&quot;">​</a></h1><p>在 <strong>render 阶段</strong>完成更新后，会调用 <code>commitRoot(root)</code>（进入 <strong>commit 阶段</strong>）来提交更新。</p><blockquote><p><code>commitRoot</code> 流程图</p></blockquote><p><img src="'+p+`" alt="commitRoot"></p><h2 id="commitroot-root" tabindex="-1"><code>commitRoot(root)</code> <a class="header-anchor" href="#commitroot-root" aria-label="Permalink to &quot;\`commitRoot(root)\`&quot;">​</a></h2><p><code>commitRoot</code> 函数会做一些准备工作，然后调用 <code>commitRootImpl</code> 函数完成更新的提交</p><blockquote><p>源码地址 <a href="https://github.com/maomao1996/code-analysis/blob/c0b1b3529c628ba6b2b81bdbc6d212f666b2f20f/react-v18.2.0/src/react/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1958" target="_blank" rel="noreferrer">commitRoot | react-reconciler/src/ReactFiberWorkLoop.old.js</a></p></blockquote><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commitRoot</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FiberRoot</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">recoverableErrors</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CapturedValue</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">mixed</span><span style="color:#E1E4E8;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">transitions</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Transition</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 保存当前更新优先级</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">previousUpdateLanePriority</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentUpdatePriority</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 保存当前 transition</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">prevTransition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ReactCurrentBatchConfig.transition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置 transition 为 null</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ReactCurrentBatchConfig.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将当前的更新优先级设置为离散事件优先级，也就是不可中断的同步更新（即最高优先级任务</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCurrentUpdatePriority</span><span style="color:#E1E4E8;">(DiscreteEventPriority)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 调用 commitRootImpl 函数完成提交</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">commitRootImpl</span><span style="color:#E1E4E8;">(root, recoverableErrors, transitions, previousUpdateLanePriority)</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 恢复 transition</span></span>
<span class="line"><span style="color:#E1E4E8;">    ReactCurrentBatchConfig.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prevTransition</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 恢复之前的更新优先级</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCurrentUpdatePriority</span><span style="color:#E1E4E8;">(previousUpdateLanePriority)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commitRoot</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FiberRoot</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">recoverableErrors</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">CapturedValue</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">mixed</span><span style="color:#24292E;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">transitions</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Transition</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 保存当前更新优先级</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">previousUpdateLanePriority</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentUpdatePriority</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 保存当前 transition</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">prevTransition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ReactCurrentBatchConfig.transition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置 transition 为 null</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ReactCurrentBatchConfig.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将当前的更新优先级设置为离散事件优先级，也就是不可中断的同步更新（即最高优先级任务</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCurrentUpdatePriority</span><span style="color:#24292E;">(DiscreteEventPriority)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 调用 commitRootImpl 函数完成提交</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">commitRootImpl</span><span style="color:#24292E;">(root, recoverableErrors, transitions, previousUpdateLanePriority)</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 恢复 transition</span></span>
<span class="line"><span style="color:#24292E;">    ReactCurrentBatchConfig.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prevTransition</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 恢复之前的更新优先级</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCurrentUpdatePriority</span><span style="color:#24292E;">(previousUpdateLanePriority)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="commitrootimpl" tabindex="-1"><code>commitRootImpl</code> <a class="header-anchor" href="#commitrootimpl" aria-label="Permalink to &quot;\`commitRootImpl\`&quot;">​</a></h2><p><code>commitRootImpl</code> 函数是 <strong>commit 阶段</strong> 的主要函数，其主要工作（即 Renderer 的工作流程）可以分为三部分：</p><ul><li><a href="./commitBeforeMutationEffects"><strong>before mutation 阶段</strong></a>（执行 DOM 操作前）</li><li><a href="./commitMutationEffects"><strong>mutation 阶段</strong></a>（执行 DOM 操作）</li><li><a href="./commitLayoutEffects"><strong>layout 阶段</strong></a>（执行 DOM 操作后）</li></ul><p>这三个阶段会</p><p>同时在 <a href="#before-mutation-阶段之前"><strong>before mutation 阶段之前</strong></a> 和 <a href="#layput-阶段之后"><strong>layout 阶段之后</strong></a> 还有一些额外的操作，涉及到比如 <code>useEffect</code> 的触发、优先级相关的重置、<code>ref</code> 的绑定/解绑等</p><blockquote><p>源码地址 <a href="https://github.com/maomao1996/code-analysis/blob/c0b1b3529c628ba6b2b81bdbc6d212f666b2f20f/react-v18.2.0/src/react/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1958" target="_blank" rel="noreferrer">commitRootImpl | react-reconciler/src/ReactFiberWorkLoop.old.js</a></p></blockquote><p>各个阶段的大致划分如下：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commitRootImpl</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FiberRoot</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">recoverableErrors</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CapturedValue</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">mixed</span><span style="color:#E1E4E8;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">transitions</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Transition</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">renderPriorityLevel</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventPriority</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* before mutation 阶段之前 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">flushPassiveEffects</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (rootWithPendingPassiveEffects </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">subtreeHasEffects</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">    (finishedWork.subtreeFlags </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> (BeforeMutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> MutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> LayoutMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> PassiveMask)) </span><span style="color:#F97583;">!==</span></span>
<span class="line"><span style="color:#E1E4E8;">    NoFlags</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rootHasEffect</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">    (finishedWork.flags </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> (BeforeMutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> MutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> LayoutMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> PassiveMask)) </span><span style="color:#F97583;">!==</span></span>
<span class="line"><span style="color:#E1E4E8;">    NoFlags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (subtreeHasEffects </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> rootHasEffect) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* before mutation 阶段主函数 */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">shouldFireAfterActiveInstanceBlur</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commitBeforeMutationEffects</span><span style="color:#E1E4E8;">(root, finishedWork)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* mutation 阶段主函数 */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">commitMutationEffects</span><span style="color:#E1E4E8;">(root, finishedWork, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* layout 阶段主函数 */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">commitLayoutEffects</span><span style="color:#E1E4E8;">(finishedWork, root, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> finishedWork</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* layout 阶段之后 */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rootDidHavePassiveEffects</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rootDoesHavePassiveEffects</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">flushSyncCallbacks</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commitRootImpl</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FiberRoot</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">recoverableErrors</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">CapturedValue</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">mixed</span><span style="color:#24292E;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">transitions</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Transition</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">renderPriorityLevel</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventPriority</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* before mutation 阶段之前 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">flushPassiveEffects</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (rootWithPendingPassiveEffects </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">subtreeHasEffects</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">    (finishedWork.subtreeFlags </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> (BeforeMutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> MutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> LayoutMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> PassiveMask)) </span><span style="color:#D73A49;">!==</span></span>
<span class="line"><span style="color:#24292E;">    NoFlags</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rootHasEffect</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">    (finishedWork.flags </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> (BeforeMutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> MutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> LayoutMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> PassiveMask)) </span><span style="color:#D73A49;">!==</span></span>
<span class="line"><span style="color:#24292E;">    NoFlags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (subtreeHasEffects </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> rootHasEffect) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* before mutation 阶段主函数 */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">shouldFireAfterActiveInstanceBlur</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commitBeforeMutationEffects</span><span style="color:#24292E;">(root, finishedWork)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* mutation 阶段主函数 */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">commitMutationEffects</span><span style="color:#24292E;">(root, finishedWork, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* layout 阶段主函数 */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">commitLayoutEffects</span><span style="color:#24292E;">(finishedWork, root, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    root.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> finishedWork</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* layout 阶段之后 */</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rootDidHavePassiveEffects</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rootDoesHavePassiveEffects</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">flushSyncCallbacks</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="before-mutation-阶段之前" tabindex="-1">before mutation 阶段之前 <a class="header-anchor" href="#before-mutation-阶段之前" aria-label="Permalink to &quot;before mutation 阶段之前&quot;">​</a></h3><p><code>commitRootImpl</code> 函数中直到 <a href="https://github.com/maomao1996/code-analysis/blob/c0b1b3529c628ba6b2b81bdbc6d212f666b2f20f/react-v18.2.0/src/react/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2115" target="_blank" rel="noreferrer"><code>if (subtreeHasEffects || rootHasEffect)</code> 判断</a>之前都属于 <strong>before mutation 阶段之前</strong></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commitRootImpl</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FiberRoot</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">recoverableErrors</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CapturedValue</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">mixed</span><span style="color:#E1E4E8;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">transitions</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Transition</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">renderPriorityLevel</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventPriority</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// \`flushPassiveEffects\` will call \`flushSyncUpdateQueue\` at the end, which</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// means \`flushPassiveEffects\` will sometimes result in additional</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// passive effects. So we need to keep flushing in a loop until there are</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// no more pending effects.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TODO: Might be better if \`flushPassiveEffects\` did not automatically</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// flush synchronous work at the end, to avoid factoring hazards like this.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 触发 useEffect 的创建、销毁函数及其他同步任务</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 由于执行这些任务时可能触发新的更新任务，所以这里要一直遍历执行直到没有任务为止</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">flushPassiveEffects</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (rootWithPendingPassiveEffects </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ((executionContext </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> (RenderContext </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> CommitContext)) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> NoContext) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Should not already be working.&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// render 阶段已经构建好的 Fiber 树（即 workInProgress Fiber 树）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">finishedWork</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root.finishedWork</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 优先级相关</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lanes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root.finishedLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">markCommitStarted</span><span style="color:#E1E4E8;">(lanes)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (finishedWork </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">markCommitStopped</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 清空已完成的工作</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  root.finishedWork </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  root.finishedLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> NoLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (finishedWork </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> root.current) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;Cannot commit the same tree as before. This error is likely caused by &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;a bug in React. Please file an issue.&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// commitRoot never returns a continuation; it always finishes synchronously.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// So we can clear these now to allow a new callback to be scheduled.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 重置 Scheduler 回调函数</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  root.callbackNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  root.callbackPriority </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> NoLane</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Update the first and last pending times on this root. The new first</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// pending time is whatever is left on the root fiber.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> remainingLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeLanes</span><span style="color:#E1E4E8;">(finishedWork.lanes, finishedWork.childLanes)</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 标记 root 工作已经完成（即重置优先级相关变量）</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">markRootFinished</span><span style="color:#E1E4E8;">(root, remainingLanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (root </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> workInProgressRoot) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// We can reset these now that they are finished.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 重置 render 阶段相关的全局变量（因为它们的工作已经完成了）</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    workInProgressRoot </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    workInProgress </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    workInProgressRootRenderLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> NoLanes</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// This indicates that the last root we worked on is not the same one that</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// we&#39;re committing now. This most commonly happens when a suspended root</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// times out.</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// If there are pending passive effects, schedule a callback to process them.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Do this as early as possible, so it is queued before anything else that</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// might get scheduled in the commit phase. (See #16714.)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// TODO: Delete all other places that schedule the passive effect callback</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// They&#39;re redundant.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 检查当前工作单元的 flags 或 subtreeFlags 中是否存在 PassiveMask（Passive | ChildDeletion）相关的副作用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    (finishedWork.subtreeFlags </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> PassiveMask) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> NoFlags </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">    (finishedWork.flags </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> PassiveMask) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> NoFlags</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">rootDoesHavePassiveEffects) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rootDoesHavePassiveEffects </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      pendingPassiveEffectsRemainingLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> remainingLanes</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// workInProgressTransitions might be overwritten, so we want</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// to store it in pendingPassiveTransitions until they get processed</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// We need to pass this through as an argument to commitRoot</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// because workInProgressTransitions might have changed between</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// the previous render and commit if we throttle the commit</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// with setTimeout</span></span>
<span class="line"><span style="color:#E1E4E8;">      pendingPassiveTransitions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> transitions</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 创建调度任务，并以 NormalSchedulerPriority 优先级来执行</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">scheduleCallback</span><span style="color:#E1E4E8;">(NormalSchedulerPriority, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 触发 useEffect 的创建、销毁函数及其他同步任务</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">flushPassiveEffects</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// This render triggered passive effects: release the root cache pool</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// *after* passive effects fire to avoid freeing a cache pool that may</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// be referenced by a node in the tree (HostRoot, Cache boundary etc)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commitRootImpl</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FiberRoot</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">recoverableErrors</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">CapturedValue</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">mixed</span><span style="color:#24292E;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">transitions</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Transition</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">renderPriorityLevel</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventPriority</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// \`flushPassiveEffects\` will call \`flushSyncUpdateQueue\` at the end, which</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// means \`flushPassiveEffects\` will sometimes result in additional</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// passive effects. So we need to keep flushing in a loop until there are</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// no more pending effects.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TODO: Might be better if \`flushPassiveEffects\` did not automatically</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// flush synchronous work at the end, to avoid factoring hazards like this.</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 触发 useEffect 的创建、销毁函数及其他同步任务</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 由于执行这些任务时可能触发新的更新任务，所以这里要一直遍历执行直到没有任务为止</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">flushPassiveEffects</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (rootWithPendingPassiveEffects </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ((executionContext </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> (RenderContext </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> CommitContext)) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> NoContext) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Should not already be working.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// render 阶段已经构建好的 Fiber 树（即 workInProgress Fiber 树）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">finishedWork</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root.finishedWork</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 优先级相关</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lanes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root.finishedLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">markCommitStarted</span><span style="color:#24292E;">(lanes)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (finishedWork </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">markCommitStopped</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 清空已完成的工作</span></span>
<span class="line highlighted"><span style="color:#24292E;">  root.finishedWork </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line highlighted"><span style="color:#24292E;">  root.finishedLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> NoLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (finishedWork </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> root.current) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;Cannot commit the same tree as before. This error is likely caused by &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;a bug in React. Please file an issue.&#39;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// commitRoot never returns a continuation; it always finishes synchronously.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// So we can clear these now to allow a new callback to be scheduled.</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 重置 Scheduler 回调函数</span></span>
<span class="line highlighted"><span style="color:#24292E;">  root.callbackNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line highlighted"><span style="color:#24292E;">  root.callbackPriority </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> NoLane</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Update the first and last pending times on this root. The new first</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// pending time is whatever is left on the root fiber.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> remainingLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mergeLanes</span><span style="color:#24292E;">(finishedWork.lanes, finishedWork.childLanes)</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 标记 root 工作已经完成（即重置优先级相关变量）</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">markRootFinished</span><span style="color:#24292E;">(root, remainingLanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (root </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> workInProgressRoot) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// We can reset these now that they are finished.</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 重置 render 阶段相关的全局变量（因为它们的工作已经完成了）</span></span>
<span class="line highlighted"><span style="color:#24292E;">    workInProgressRoot </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line highlighted"><span style="color:#24292E;">    workInProgress </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line highlighted"><span style="color:#24292E;">    workInProgressRootRenderLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> NoLanes</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// This indicates that the last root we worked on is not the same one that</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// we&#39;re committing now. This most commonly happens when a suspended root</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// times out.</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// If there are pending passive effects, schedule a callback to process them.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Do this as early as possible, so it is queued before anything else that</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// might get scheduled in the commit phase. (See #16714.)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// TODO: Delete all other places that schedule the passive effect callback</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// They&#39;re redundant.</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 检查当前工作单元的 flags 或 subtreeFlags 中是否存在 PassiveMask（Passive | ChildDeletion）相关的副作用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    (finishedWork.subtreeFlags </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> PassiveMask) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> NoFlags </span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;">    (finishedWork.flags </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> PassiveMask) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> NoFlags</span></span>
<span class="line"><span style="color:#24292E;">  ) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">rootDoesHavePassiveEffects) {</span></span>
<span class="line"><span style="color:#24292E;">      rootDoesHavePassiveEffects </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">      pendingPassiveEffectsRemainingLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> remainingLanes</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// workInProgressTransitions might be overwritten, so we want</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// to store it in pendingPassiveTransitions until they get processed</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// We need to pass this through as an argument to commitRoot</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// because workInProgressTransitions might have changed between</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// the previous render and commit if we throttle the commit</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// with setTimeout</span></span>
<span class="line"><span style="color:#24292E;">      pendingPassiveTransitions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> transitions</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 创建调度任务，并以 NormalSchedulerPriority 优先级来执行</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">scheduleCallback</span><span style="color:#24292E;">(NormalSchedulerPriority, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 触发 useEffect 的创建、销毁函数及其他同步任务</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">flushPassiveEffects</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// This render triggered passive effects: release the root cache pool</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// *after* passive effects fire to avoid freeing a cache pool that may</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// be referenced by a node in the tree (HostRoot, Cache boundary etc)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br></div></div><p>可以看到在 <strong>before mutation 阶段之前</strong> 主要是做一些<strong>变量赋值和状态重置</strong>的工作</p><h4 id="flushpassiveeffects" tabindex="-1"><code>flushPassiveEffects</code> <a class="header-anchor" href="#flushpassiveeffects" aria-label="Permalink to &quot;\`flushPassiveEffects\`&quot;">​</a></h4><p><code>flushPassiveEffects</code> 是处理 <code>passive effect</code> 的入口函数</p><blockquote><p>源码地址 <a href="https://github.com/maomao1996/code-analysis/blob/c0b1b3529c628ba6b2b81bdbc6d212f666b2f20f/react-v18.2.0/src/react/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2356" target="_blank" rel="noreferrer">flushPassiveEffects | react-reconciler/src/ReactFiberWorkLoop.old.js</a></p></blockquote><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flushPassiveEffects</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Returns whether passive effects were flushed.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// TODO: Combine this check with the one in flushPassiveEFfectsImpl. We should</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// probably just combine the two functions. I believe they were only separate</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// in the first place because we used to wrap it with</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`Scheduler.runWithPriority\`, which accepts a function. But now we track the</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// priority within React itself, so we can mutate the variable directly.</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 判断是否有待处理的 passive effect</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rootWithPendingPassiveEffects </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Cache the root since rootWithPendingPassiveEffects is cleared in</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// flushPassiveEffectsImpl</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rootWithPendingPassiveEffects</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Cache and clear the remaining lanes flag; it must be reset since this</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// method can be called from various places, not always from commitRoot</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// where the remaining lanes are known</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">remainingLanes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pendingPassiveEffectsRemainingLanes</span></span>
<span class="line"><span style="color:#E1E4E8;">    pendingPassiveEffectsRemainingLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> NoLanes</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将 Lane 优先级转换为事件优先级</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">renderPriority</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lanesToEventPriority</span><span style="color:#E1E4E8;">(pendingPassiveEffectsLanes)</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将上一步的 renderPriority 和默认的事件优先级进行对比并取较低的优先级（保证 passive effect 的执行不会打断更高优先级的更新）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">priority</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lowerEventPriority</span><span style="color:#E1E4E8;">(DefaultEventPriority, renderPriority)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">prevTransition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ReactCurrentBatchConfig.transition</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">previousPriority</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentUpdatePriority</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      ReactCurrentBatchConfig.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setCurrentUpdatePriority</span><span style="color:#E1E4E8;">(priority)</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 执行 passive effect 相关的操作</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flushPassiveEffectsImpl</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setCurrentUpdatePriority</span><span style="color:#E1E4E8;">(previousPriority)</span></span>
<span class="line"><span style="color:#E1E4E8;">      ReactCurrentBatchConfig.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prevTransition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Once passive effects have run for the tree - giving components a</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// chance to retain cache instances they use - release the pooled</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// cache at the root (if there is one)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">releaseRootPooledCache</span><span style="color:#E1E4E8;">(root, remainingLanes)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 表示没有待处理的 passive effect</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flushPassiveEffects</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Returns whether passive effects were flushed.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// TODO: Combine this check with the one in flushPassiveEFfectsImpl. We should</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// probably just combine the two functions. I believe they were only separate</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// in the first place because we used to wrap it with</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`Scheduler.runWithPriority\`, which accepts a function. But now we track the</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// priority within React itself, so we can mutate the variable directly.</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 判断是否有待处理的 passive effect</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rootWithPendingPassiveEffects </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Cache the root since rootWithPendingPassiveEffects is cleared in</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// flushPassiveEffectsImpl</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">root</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rootWithPendingPassiveEffects</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Cache and clear the remaining lanes flag; it must be reset since this</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// method can be called from various places, not always from commitRoot</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// where the remaining lanes are known</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">remainingLanes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pendingPassiveEffectsRemainingLanes</span></span>
<span class="line"><span style="color:#24292E;">    pendingPassiveEffectsRemainingLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> NoLanes</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将 Lane 优先级转换为事件优先级</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">renderPriority</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lanesToEventPriority</span><span style="color:#24292E;">(pendingPassiveEffectsLanes)</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将上一步的 renderPriority 和默认的事件优先级进行对比并取较低的优先级（保证 passive effect 的执行不会打断更高优先级的更新）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">priority</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lowerEventPriority</span><span style="color:#24292E;">(DefaultEventPriority, renderPriority)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">prevTransition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ReactCurrentBatchConfig.transition</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">previousPriority</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentUpdatePriority</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      ReactCurrentBatchConfig.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setCurrentUpdatePriority</span><span style="color:#24292E;">(priority)</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 执行 passive effect 相关的操作</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flushPassiveEffectsImpl</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setCurrentUpdatePriority</span><span style="color:#24292E;">(previousPriority)</span></span>
<span class="line"><span style="color:#24292E;">      ReactCurrentBatchConfig.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prevTransition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Once passive effects have run for the tree - giving components a</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// chance to retain cache instances they use - release the pooled</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// cache at the root (if there is one)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">releaseRootPooledCache</span><span style="color:#24292E;">(root, remainingLanes)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 表示没有待处理的 passive effect</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h4 id="flushpassiveeffectsimpl" tabindex="-1"><code>flushPassiveEffectsImpl</code> <a class="header-anchor" href="#flushpassiveeffectsimpl" aria-label="Permalink to &quot;\`flushPassiveEffectsImpl\`&quot;">​</a></h4><p><code>flushPassiveEffectsImpl</code> 函数是处理 <code>passive effect</code> 的主要函数</p><blockquote><p>源码地址 <a href="https://github.com/maomao1996/code-analysis/blob/c0b1b3529c628ba6b2b81bdbc6d212f666b2f20f/react-v18.2.0/src/react/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2408" target="_blank" rel="noreferrer">flushPassiveEffectsImpl | react-reconciler/src/ReactFiberWorkLoop.old.js</a></p></blockquote><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flushPassiveEffectsImpl</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 判断是否有待处理的 passive effect</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rootWithPendingPassiveEffects </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Cache and clear the transitions flag</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transitions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pendingPassiveTransitions</span></span>
<span class="line"><span style="color:#E1E4E8;">  pendingPassiveTransitions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rootWithPendingPassiveEffects</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lanes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pendingPassiveEffectsLanes</span></span>
<span class="line"><span style="color:#E1E4E8;">  rootWithPendingPassiveEffects </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// TODO: This is sometimes out of sync with rootWithPendingPassiveEffects.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Figure out why and fix it. It&#39;s not causing any known issues (probably</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// because it&#39;s only used for profiling), but it&#39;s a refactor hazard.</span></span>
<span class="line"><span style="color:#E1E4E8;">  pendingPassiveEffectsLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> NoLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 判断当前当前执行上下文是否为 Commit 上下文或 Render 上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ((executionContext </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> (RenderContext </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> CommitContext)) </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> NoContext) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Cannot flush passive effects while already rendering.&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 缓存当前的执行上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">prevExecutionContext</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> executionContext</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置当前执行上下文为 Commit 上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">  executionContext </span><span style="color:#F97583;">|=</span><span style="color:#E1E4E8;"> CommitContext</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 执行 useEffect 的销毁函数（实际是调用 commitHookEffectListUnmount）</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">commitPassiveUnmountEffects</span><span style="color:#E1E4E8;">(root.current)</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 执行 useEffect 的创建函数（实际是调用 commitHookEffectListMount）</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">commitPassiveMountEffects</span><span style="color:#E1E4E8;">(root, root.current, lanes, transitions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 恢复之前的执行上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">  executionContext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prevExecutionContext</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 刷新同步回调</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">flushSyncCallbacks</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flushPassiveEffectsImpl</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 判断是否有待处理的 passive effect</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rootWithPendingPassiveEffects </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Cache and clear the transitions flag</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transitions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pendingPassiveTransitions</span></span>
<span class="line"><span style="color:#24292E;">  pendingPassiveTransitions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">root</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rootWithPendingPassiveEffects</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lanes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pendingPassiveEffectsLanes</span></span>
<span class="line"><span style="color:#24292E;">  rootWithPendingPassiveEffects </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// TODO: This is sometimes out of sync with rootWithPendingPassiveEffects.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Figure out why and fix it. It&#39;s not causing any known issues (probably</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// because it&#39;s only used for profiling), but it&#39;s a refactor hazard.</span></span>
<span class="line"><span style="color:#24292E;">  pendingPassiveEffectsLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> NoLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 判断当前当前执行上下文是否为 Commit 上下文或 Render 上下文</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ((executionContext </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> (RenderContext </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> CommitContext)) </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> NoContext) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Cannot flush passive effects while already rendering.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 缓存当前的执行上下文</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">prevExecutionContext</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> executionContext</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置当前执行上下文为 Commit 上下文</span></span>
<span class="line"><span style="color:#24292E;">  executionContext </span><span style="color:#D73A49;">|=</span><span style="color:#24292E;"> CommitContext</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 执行 useEffect 的销毁函数（实际是调用 commitHookEffectListUnmount）</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">commitPassiveUnmountEffects</span><span style="color:#24292E;">(root.current)</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 执行 useEffect 的创建函数（实际是调用 commitHookEffectListMount）</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">commitPassiveMountEffects</span><span style="color:#24292E;">(root, root.current, lanes, transitions)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 恢复之前的执行上下文</span></span>
<span class="line"><span style="color:#24292E;">  executionContext </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prevExecutionContext</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 刷新同步回调</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">flushSyncCallbacks</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="三个主要阶段" tabindex="-1">三个主要阶段 <a class="header-anchor" href="#三个主要阶段" aria-label="Permalink to &quot;三个主要阶段&quot;">​</a></h3><ul><li><a href="./commitBeforeMutationEffects"><strong>before mutation 阶段</strong></a>（执行 DOM 操作前）</li><li><a href="./commitMutationEffects"><strong>mutation 阶段</strong></a>（执行 DOM 操作）</li><li><a href="./commitLayoutEffects"><strong>layout 阶段</strong></a>（执行 DOM 操作后）</li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commitRootImpl</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FiberRoot</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">recoverableErrors</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CapturedValue</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">mixed</span><span style="color:#E1E4E8;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">transitions</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Transition</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">renderPriorityLevel</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventPriority</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... 省略 before mutation 阶段之前的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Check if there are any effects in the whole tree.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// TODO: This is left over from the effect list implementation, where we had</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// to check for the existence of \`firstEffect\` to satisfy Flow. I think the</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// only other reason this optimization exists is because it affects profiling.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Reconsider whether this is necessary.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 检查子节点中是否存在副作用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">subtreeHasEffects</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">    (finishedWork.subtreeFlags </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> (BeforeMutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> MutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> LayoutMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> PassiveMask)) </span><span style="color:#F97583;">!==</span></span>
<span class="line"><span style="color:#E1E4E8;">    NoFlags</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 检查根节点中是否存在副作用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rootHasEffect</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">    (finishedWork.flags </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> (BeforeMutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> MutationMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> LayoutMask </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> PassiveMask)) </span><span style="color:#F97583;">!==</span></span>
<span class="line"><span style="color:#E1E4E8;">    NoFlags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (subtreeHasEffects </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> rootHasEffect) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 保存当前 transition 和更新优先级</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">prevTransition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ReactCurrentBatchConfig.transition</span></span>
<span class="line"><span style="color:#E1E4E8;">    ReactCurrentBatchConfig.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">previousPriority</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentUpdatePriority</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将当前的更新优先级设置为离散事件优先级，也就是不可中断的同步更新（即最高优先级任务</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCurrentUpdatePriority</span><span style="color:#E1E4E8;">(DiscreteEventPriority)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 保存当前执行上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">prevExecutionContext</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> executionContext</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置当前执行上下文为 Commit 上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">    executionContext </span><span style="color:#F97583;">|=</span><span style="color:#E1E4E8;"> CommitContext</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Reset this to null before calling lifecycles</span></span>
<span class="line"><span style="color:#E1E4E8;">    ReactCurrentOwner.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// The commit phase is broken into several sub-phases. We do a separate pass</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// of the effect list for each phase: all mutation effects come before all</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// layout effects, and so on.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// The first phase a &quot;before mutation&quot; phase. We use this phase to read the</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// state of the host tree right before we mutate it. This is where</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// getSnapshotBeforeUpdate is called.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 进入 commitBeforeMutationEffects 阶段，执行 DOM 操作前</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">shouldFireAfterActiveInstanceBlur</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commitBeforeMutationEffects</span><span style="color:#E1E4E8;">(root, finishedWork)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableProfilerTimer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Mark the current commit time to be shared by all Profilers in this</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// batch. This enables them to be grouped later.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">recordCommitTime</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableProfilerTimer </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> enableProfilerNestedUpdateScheduledHook) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Track the root here, rather than in commitLayoutEffects(), because of ref setters.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// Updates scheduled during ref detachment should also be flagged.</span></span>
<span class="line"><span style="color:#E1E4E8;">      rootCommittingMutationOrLayoutEffects </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// The next phase is the mutation phase, where we mutate the host tree.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 进入 mutation 阶段，执行 DOM 操作后</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">commitMutationEffects</span><span style="color:#E1E4E8;">(root, finishedWork, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableCreateEventHandleAPI) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (shouldFireAfterActiveInstanceBlur) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">afterActiveInstanceBlur</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resetAfterCommit</span><span style="color:#E1E4E8;">(root.containerInfo)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// The work-in-progress tree is now the current tree. This must come after</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// the mutation phase, so that the previous tree is still current during</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// componentWillUnmount, but before the layout phase, so that the finished</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// work is current during componentDidMount/Update.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 修改 current 指针</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    root.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> finishedWork</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// The next phase is the layout phase, where we call effects that read</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// the host tree after it&#39;s been mutated. The idiomatic use case for this is</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// layout, but class component lifecycles also fire here for legacy reasons.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">markLayoutEffectsStarted</span><span style="color:#E1E4E8;">(lanes)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 进入 layout 阶段，执行 DOM 操作</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">commitLayoutEffects</span><span style="color:#E1E4E8;">(finishedWork, root, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">markLayoutEffectsStopped</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableProfilerTimer </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> enableProfilerNestedUpdateScheduledHook) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rootCommittingMutationOrLayoutEffects </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Tell Scheduler to yield at the end of the frame, so the browser has an</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// opportunity to paint.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">requestPaint</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将执行上下文修改为之前的上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">    executionContext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prevExecutionContext</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Reset the priority to the previous non-sync value.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 恢复之前的更新优先级和 transition</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCurrentUpdatePriority</span><span style="color:#E1E4E8;">(previousPriority)</span></span>
<span class="line"><span style="color:#E1E4E8;">    ReactCurrentBatchConfig.transition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prevTransition</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// No effects.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 修改 current 指针</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    root.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> finishedWork</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Measure these anyway so the flamegraph explicitly shows that there were</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// no effects.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TODO: Maybe there&#39;s a better way to report this.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableProfilerTimer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">recordCommitTime</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... 省略 layput 阶段之后的代码</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commitRootImpl</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FiberRoot</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">recoverableErrors</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">CapturedValue</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">mixed</span><span style="color:#24292E;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">transitions</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Transition</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">renderPriorityLevel</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventPriority</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... 省略 before mutation 阶段之前的代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Check if there are any effects in the whole tree.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// TODO: This is left over from the effect list implementation, where we had</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// to check for the existence of \`firstEffect\` to satisfy Flow. I think the</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// only other reason this optimization exists is because it affects profiling.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Reconsider whether this is necessary.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 检查子节点中是否存在副作用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">subtreeHasEffects</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">    (finishedWork.subtreeFlags </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> (BeforeMutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> MutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> LayoutMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> PassiveMask)) </span><span style="color:#D73A49;">!==</span></span>
<span class="line"><span style="color:#24292E;">    NoFlags</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 检查根节点中是否存在副作用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rootHasEffect</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">    (finishedWork.flags </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> (BeforeMutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> MutationMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> LayoutMask </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> PassiveMask)) </span><span style="color:#D73A49;">!==</span></span>
<span class="line"><span style="color:#24292E;">    NoFlags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (subtreeHasEffects </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> rootHasEffect) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 保存当前 transition 和更新优先级</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">prevTransition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ReactCurrentBatchConfig.transition</span></span>
<span class="line"><span style="color:#24292E;">    ReactCurrentBatchConfig.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">previousPriority</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentUpdatePriority</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将当前的更新优先级设置为离散事件优先级，也就是不可中断的同步更新（即最高优先级任务</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCurrentUpdatePriority</span><span style="color:#24292E;">(DiscreteEventPriority)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 保存当前执行上下文</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">prevExecutionContext</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> executionContext</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置当前执行上下文为 Commit 上下文</span></span>
<span class="line"><span style="color:#24292E;">    executionContext </span><span style="color:#D73A49;">|=</span><span style="color:#24292E;"> CommitContext</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Reset this to null before calling lifecycles</span></span>
<span class="line"><span style="color:#24292E;">    ReactCurrentOwner.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// The commit phase is broken into several sub-phases. We do a separate pass</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// of the effect list for each phase: all mutation effects come before all</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// layout effects, and so on.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// The first phase a &quot;before mutation&quot; phase. We use this phase to read the</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// state of the host tree right before we mutate it. This is where</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// getSnapshotBeforeUpdate is called.</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 进入 commitBeforeMutationEffects 阶段，执行 DOM 操作前</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">shouldFireAfterActiveInstanceBlur</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commitBeforeMutationEffects</span><span style="color:#24292E;">(root, finishedWork)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableProfilerTimer) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Mark the current commit time to be shared by all Profilers in this</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// batch. This enables them to be grouped later.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">recordCommitTime</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableProfilerTimer </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> enableProfilerNestedUpdateScheduledHook) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Track the root here, rather than in commitLayoutEffects(), because of ref setters.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// Updates scheduled during ref detachment should also be flagged.</span></span>
<span class="line"><span style="color:#24292E;">      rootCommittingMutationOrLayoutEffects </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// The next phase is the mutation phase, where we mutate the host tree.</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 进入 mutation 阶段，执行 DOM 操作后</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">commitMutationEffects</span><span style="color:#24292E;">(root, finishedWork, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableCreateEventHandleAPI) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (shouldFireAfterActiveInstanceBlur) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">afterActiveInstanceBlur</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resetAfterCommit</span><span style="color:#24292E;">(root.containerInfo)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// The work-in-progress tree is now the current tree. This must come after</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// the mutation phase, so that the previous tree is still current during</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// componentWillUnmount, but before the layout phase, so that the finished</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// work is current during componentDidMount/Update.</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 修改 current 指针</span></span>
<span class="line highlighted"><span style="color:#24292E;">    root.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> finishedWork</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// The next phase is the layout phase, where we call effects that read</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// the host tree after it&#39;s been mutated. The idiomatic use case for this is</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// layout, but class component lifecycles also fire here for legacy reasons.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">markLayoutEffectsStarted</span><span style="color:#24292E;">(lanes)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 进入 layout 阶段，执行 DOM 操作</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">commitLayoutEffects</span><span style="color:#24292E;">(finishedWork, root, lanes)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">markLayoutEffectsStopped</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableProfilerTimer </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> enableProfilerNestedUpdateScheduledHook) {</span></span>
<span class="line"><span style="color:#24292E;">      rootCommittingMutationOrLayoutEffects </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Tell Scheduler to yield at the end of the frame, so the browser has an</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// opportunity to paint.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">requestPaint</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将执行上下文修改为之前的上下文</span></span>
<span class="line"><span style="color:#24292E;">    executionContext </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prevExecutionContext</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Reset the priority to the previous non-sync value.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 恢复之前的更新优先级和 transition</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCurrentUpdatePriority</span><span style="color:#24292E;">(previousPriority)</span></span>
<span class="line"><span style="color:#24292E;">    ReactCurrentBatchConfig.transition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prevTransition</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// No effects.</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 修改 current 指针</span></span>
<span class="line highlighted"><span style="color:#24292E;">    root.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> finishedWork</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Measure these anyway so the flamegraph explicitly shows that there were</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// no effects.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TODO: Maybe there&#39;s a better way to report this.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableProfilerTimer) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">recordCommitTime</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... 省略 layput 阶段之后的代码</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br></div></div><p>可以看到，当存在副作用时会触发三个子阶段再更新 <code>current</code> 指针，否则直接更新 <code>current</code> 指针</p><h3 id="layput-阶段之后" tabindex="-1">layput 阶段之后 <a class="header-anchor" href="#layput-阶段之后" aria-label="Permalink to &quot;layput 阶段之后&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commitRootImpl</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">root</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FiberRoot</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">recoverableErrors</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">CapturedValue</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">mixed</span><span style="color:#E1E4E8;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">transitions</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Transition</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">renderPriorityLevel</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventPriority</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rootDidHavePassiveEffects</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rootDoesHavePassiveEffects</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 判断本次 commit 是否存在副作用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rootDoesHavePassiveEffects) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// This commit has passive effects. Stash a reference to them. But don&#39;t</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// schedule a callback until after flushing layout work.</span></span>
<span class="line"><span style="color:#E1E4E8;">    rootDoesHavePassiveEffects </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 保证下次执行该函数时，开头的 do while 能继续执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    rootWithPendingPassiveEffects </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root</span></span>
<span class="line"><span style="color:#E1E4E8;">    pendingPassiveEffectsLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lanes</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// There were no passive effects, so we can immediately release the cache</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// pool for this render.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">releaseRootPooledCache</span><span style="color:#E1E4E8;">(root, remainingLanes)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Read this again, since an effect might have updated it</span></span>
<span class="line"><span style="color:#E1E4E8;">  remainingLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root.pendingLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Check if there&#39;s remaining work on this root</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// TODO: This is part of the \`componentDidCatch\` implementation. Its purpose</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// is to detect whether something might have called setState inside</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`componentDidCatch\`. The mechanism is known to be flawed because \`setState\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// inside \`componentDidCatch\` is itself flawed — that&#39;s why we recommend</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`getDerivedStateFromError\` instead. However, it could be improved by</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// checking if remainingLanes includes Sync work, instead of whether there&#39;s</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// any work remaining at all (which would also include stuff like Suspense</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// retries or transitions). It&#39;s been like this for a while, though, so fixing</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// it probably isn&#39;t that urgent.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (remainingLanes </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> NoLanes) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// If there&#39;s no remaining work, we can clear the set of already failed</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// error boundaries.</span></span>
<span class="line"><span style="color:#E1E4E8;">    legacyErrorBoundariesThatAlreadyFailed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Always call this before exiting \`commitRoot\`, to ensure that any</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// additional work on this root is scheduled.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在退出 commitRoot 函数前触发一次新的调度，确保在 commit 阶段产生的更新被调度</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ensureRootIsScheduled</span><span style="color:#E1E4E8;">(root, </span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (recoverableErrors </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// There were errors during this render, but recovered from them without</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// needing to surface it to the UI. We log them here.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">onRecoverableError</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root.onRecoverableError</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> recoverableErrors.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">recoverableError</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> recoverableErrors[i]</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">componentStack</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> recoverableError.stack</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">digest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> recoverableError.digest</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">onRecoverableError</span><span style="color:#E1E4E8;">(recoverableError.value, { componentStack, digest })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果有未捕获的错误，抛出它并终止渲染</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (hasUncaughtError) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    hasUncaughtError </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> firstUncaughtError</span></span>
<span class="line"><span style="color:#E1E4E8;">    firstUncaughtError </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// If the passive effects are the result of a discrete render, flush them</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// synchronously at the end of the current task so that the result is</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// immediately observable. Otherwise, we assume that they are not</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// order-dependent and do not need to be observed by external systems, so we</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// can wait until after paint.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// TODO: We can optimize this by not scheduling the callback earlier. Since we</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// currently schedule the callback in multiple places, will wait until those</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// are consolidated.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">includesSomeLane</span><span style="color:#E1E4E8;">(pendingPassiveEffectsLanes, SyncLane) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> root.tag </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> LegacyRoot) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">flushPassiveEffects</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Read this again, since a passive effect might have updated it</span></span>
<span class="line"><span style="color:#E1E4E8;">  remainingLanes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root.pendingLanes</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">includesSomeLane</span><span style="color:#E1E4E8;">(remainingLanes, SyncLane)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableProfilerTimer </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> enableProfilerNestedUpdatePhase) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">markNestedUpdateScheduled</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Count the number of times the root synchronously re-renders without</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// finishing. If there are too many, it indicates an infinite update loop.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这里记录一次同步任务的执行次数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (root </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> rootWithNestedUpdates) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nestedUpdateCount</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      nestedUpdateCount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      rootWithNestedUpdates </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> root</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nestedUpdateCount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// If layout work was scheduled, flush it now.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 执行同步任务，这样同步任务不需要等到下次事件循环再执行</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 在 componentDidMount 中的 setState 和 useLayoutEffect 中的更新都会在这里被同步执行</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">flushSyncCallbacks</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">markCommitStopped</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commitRootImpl</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">root</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FiberRoot</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// root 指 FiberRootNode</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">recoverableErrors</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">CapturedValue</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">mixed</span><span style="color:#24292E;">&gt;&gt;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">transitions</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Transition</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">renderPriorityLevel</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventPriority</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... 省略大量代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rootDidHavePassiveEffects</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rootDoesHavePassiveEffects</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 判断本次 commit 是否存在副作用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rootDoesHavePassiveEffects) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// This commit has passive effects. Stash a reference to them. But don&#39;t</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// schedule a callback until after flushing layout work.</span></span>
<span class="line"><span style="color:#24292E;">    rootDoesHavePassiveEffects </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 保证下次执行该函数时，开头的 do while 能继续执行</span></span>
<span class="line"><span style="color:#24292E;">    rootWithPendingPassiveEffects </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root</span></span>
<span class="line"><span style="color:#24292E;">    pendingPassiveEffectsLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> lanes</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// There were no passive effects, so we can immediately release the cache</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// pool for this render.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">releaseRootPooledCache</span><span style="color:#24292E;">(root, remainingLanes)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Read this again, since an effect might have updated it</span></span>
<span class="line"><span style="color:#24292E;">  remainingLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root.pendingLanes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Check if there&#39;s remaining work on this root</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// TODO: This is part of the \`componentDidCatch\` implementation. Its purpose</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// is to detect whether something might have called setState inside</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`componentDidCatch\`. The mechanism is known to be flawed because \`setState\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// inside \`componentDidCatch\` is itself flawed — that&#39;s why we recommend</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`getDerivedStateFromError\` instead. However, it could be improved by</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// checking if remainingLanes includes Sync work, instead of whether there&#39;s</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// any work remaining at all (which would also include stuff like Suspense</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// retries or transitions). It&#39;s been like this for a while, though, so fixing</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// it probably isn&#39;t that urgent.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (remainingLanes </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> NoLanes) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// If there&#39;s no remaining work, we can clear the set of already failed</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// error boundaries.</span></span>
<span class="line"><span style="color:#24292E;">    legacyErrorBoundariesThatAlreadyFailed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Always call this before exiting \`commitRoot\`, to ensure that any</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// additional work on this root is scheduled.</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 在退出 commitRoot 函数前触发一次新的调度，确保在 commit 阶段产生的更新被调度</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ensureRootIsScheduled</span><span style="color:#24292E;">(root, </span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 错误处理</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (recoverableErrors </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// There were errors during this render, but recovered from them without</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// needing to surface it to the UI. We log them here.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">onRecoverableError</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root.onRecoverableError</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> recoverableErrors.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">recoverableError</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> recoverableErrors[i]</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">componentStack</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> recoverableError.stack</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">digest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> recoverableError.digest</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">onRecoverableError</span><span style="color:#24292E;">(recoverableError.value, { componentStack, digest })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果有未捕获的错误，抛出它并终止渲染</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (hasUncaughtError) {</span></span>
<span class="line"><span style="color:#24292E;">    hasUncaughtError </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> firstUncaughtError</span></span>
<span class="line"><span style="color:#24292E;">    firstUncaughtError </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> error</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// If the passive effects are the result of a discrete render, flush them</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// synchronously at the end of the current task so that the result is</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// immediately observable. Otherwise, we assume that they are not</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// order-dependent and do not need to be observed by external systems, so we</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// can wait until after paint.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// TODO: We can optimize this by not scheduling the callback earlier. Since we</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// currently schedule the callback in multiple places, will wait until those</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// are consolidated.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">includesSomeLane</span><span style="color:#24292E;">(pendingPassiveEffectsLanes, SyncLane) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> root.tag </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> LegacyRoot) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">flushPassiveEffects</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Read this again, since a passive effect might have updated it</span></span>
<span class="line"><span style="color:#24292E;">  remainingLanes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root.pendingLanes</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">includesSomeLane</span><span style="color:#24292E;">(remainingLanes, SyncLane)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableProfilerTimer </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> enableProfilerNestedUpdatePhase) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">markNestedUpdateScheduled</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Count the number of times the root synchronously re-renders without</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// finishing. If there are too many, it indicates an infinite update loop.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这里记录一次同步任务的执行次数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (root </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> rootWithNestedUpdates) {</span></span>
<span class="line"><span style="color:#24292E;">      nestedUpdateCount</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      nestedUpdateCount </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      rootWithNestedUpdates </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> root</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    nestedUpdateCount </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// If layout work was scheduled, flush it now.</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 执行同步任务，这样同步任务不需要等到下次事件循环再执行</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 在 componentDidMount 中的 setState 和 useLayoutEffect 中的更新都会在这里被同步执行</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">flushSyncCallbacks</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (enableSchedulingProfiler) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">markCommitStopped</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br></div></div><p>可以看到在 <strong>layput 阶段之后</strong> 主要做了以下工作：</p><ul><li>变量重置</li><li>开启新的调度</li><li>异常捕获处理</li><li>执行同步任务</li></ul>`,36),r=[o];function t(c,i,E,y,b,u){return n(),a("div",null,r)}const f=s(e,[["render",t]]);export{m as __pageData,f as default};
