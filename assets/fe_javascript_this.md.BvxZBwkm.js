import{_ as s,h as i,o as a,aa as n}from"./chunks/framework.C-tu2utv.js";const e="/mm-notes/assets/global-this-browser.CkTHeUAj.png",t="/mm-notes/assets/global-this-node-commonjs.CVMUGbqK.png",l="/mm-notes/assets/global-this-node-esmodule.gEh_fVnY.png",p="/mm-notes/assets/fn-this-browser.Cf-9cBso.png",h="/mm-notes/assets/fn-this-node-commonjs.BbuuRuak.webp",d="/mm-notes/assets/fn-this-node-esmodule.1ZoN9L7_.webp",C=JSON.parse('{"title":"this 指向","description":"","frontmatter":{},"headers":[],"relativePath":"fe/javascript/this.md","filePath":"fe/javascript/this.md","lastUpdated":1702823661000}'),o={name:"fe/javascript/this.md"},r=n('<h1 id="this-指向" tabindex="-1"><code>this</code> 指向 <a class="header-anchor" href="#this-指向" aria-label="Permalink to &quot;`this` 指向&quot;">​</a></h1><p>在 JavaScript 中，<code>this</code> 指向可以分为以下两种情况：</p><ul><li>默认的全局 <code>this</code> 指向</li><li>函数调用时的 <code>this</code> 指向</li></ul><h2 id="默认的全局-this" tabindex="-1">默认的全局 <code>this</code> <a class="header-anchor" href="#默认的全局-this" aria-label="Permalink to &quot;默认的全局 `this`&quot;">​</a></h2><p>默认的全局 <code>this</code> 指向取决于当前运行环境</p><h3 id="浏览器环境" tabindex="-1">浏览器环境 <a class="header-anchor" href="#浏览器环境" aria-label="Permalink to &quot;浏览器环境&quot;">​</a></h3><p>在浏览器环境中默认的全局 <code>this</code> 指向<strong>全局对象 <code>window</code></strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+e+'" alt="浏览器环境全局 this" loading="lazy"></p><h3 id="node-js-环境" tabindex="-1">Node.js 环境 <a class="header-anchor" href="#node-js-环境" aria-label="Permalink to &quot;Node.js 环境&quot;">​</a></h3><p>在 Node.js 环境中默认的全局 <code>this</code> 指向取决于<strong>当前使用的模块化规范</strong></p><p>在 <code>CommonJS</code> 中默认的<strong>全局 <code>this</code> 指向一个空对象</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+t+'" alt="Node.js 环境全局 this — CommonJS" loading="lazy"></p><p>在 <code>ESModule</code> 中默认的<strong>全局 <code>this</code> 指向 <code>undefined</code></strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // undefined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+l+`" alt="Node.js 环境全局 this — ESModule" loading="lazy"></p><h2 id="函数调用时的-this" tabindex="-1">函数调用时的 <code>this</code> <a class="header-anchor" href="#函数调用时的-this" aria-label="Permalink to &quot;函数调用时的 \`this\`&quot;">​</a></h2><p>函数调用时的 <code>this</code> 指向取决于函数的调用方式，一共有如下几种情况</p><table><thead><tr><th>调用方式</th><th>示例</th><th>函数中的 <code>this</code> 指向</th></tr></thead><tbody><tr><td>直接调用</td><td><code>method()</code></td><td>全局对象<br>浏览器环境为 <code>window</code> 对象<br>Node.js 环境为 <code>global</code> 对象</td></tr><tr><td>通过对象方法调用</td><td><code>obj.method()</code></td><td>前面的对象</td></tr><tr><td>通过<code>call</code>、<code>apply</code>、<code>bind</code> 调用</td><td><code>method.call({})</code></td><td>第一个参数</td></tr><tr><td>通过 <code>new</code> 构造函数调用</td><td><code>new method()</code></td><td>新创建的对象</td></tr><tr><td>箭头函数</td><td><code>() =&gt; {}</code></td><td>箭头函数中的 <code>this</code> 指向外层作用域的第一个 <code>this</code></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mao - obj1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mao - obj2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mao - new&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;method() :&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 方法名前面的对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;obj1.method() :&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, obj1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// call 的第一个参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;obj1.method.call(obj2) :&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, obj1.method.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj2))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// new 创建的对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;new Method().method() :&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><strong>打印结果如下</strong>：</p><p>在浏览器环境中 <strong><code>this</code> 指向 <code>window</code> 对象</strong></p><p><img src="`+p+'" alt="函数调用 this — 浏览器环境" loading="lazy"></p><p>在 Node.js 环境 <strong>CommonJS 中 <code>this</code> 指向 <code>global</code> 对象</strong></p><p><img src="'+h+'" alt="函数调用 this — CommonJS" loading="lazy"></p><p>在 Node.js 环境 <strong>ESModule 中 <code>this</code> 指向 <code>undefined</code></strong></p><p><img src="'+d+'" alt="函数调用 this — ESModule" loading="lazy"></p>',28),k=[r];function c(E,g,b,m,y,u){return a(),i("div",null,k)}const _=s(o,[["render",c]]);export{C as __pageData,_ as default};
