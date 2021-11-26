"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[430],{4576:(t,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-43ebe826",path:"/css/skill.html",title:"CSS 奇淫技巧",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"识别 HTML 字符中的 \\n",slug:"识别-html-字符中的-n",children:[]},{level:2,title:"CSS(Unicode 字符) 实现换行",slug:"css-unicode-字符-实现换行",children:[]}],filePathRelative:"css/skill.md",git:{updatedTime:1637912318e3}}},2419:(t,n,s)=>{s.r(n),s.d(n,{default:()=>d});var a=s(6252);const e=(0,a.uE)('<h1 id="css-奇淫技巧" tabindex="-1"><a class="header-anchor" href="#css-奇淫技巧" aria-hidden="true">#</a> CSS 奇淫技巧</h1><h2 id="识别-html-字符中的-n" tabindex="-1"><a class="header-anchor" href="#识别-html-字符中的-n" aria-hidden="true">#</a> 识别 HTML 字符中的 \\n</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>white-space</code> 属性用于设置如何处理元素中的空白</p></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">换行符</th><th style="text-align:center;">空格和制表符</th><th style="text-align:center;">文字换行</th></tr></thead><tbody><tr><td style="text-align:center;">normal</td><td style="text-align:center;">合并</td><td style="text-align:center;">合并</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">nowrap</td><td style="text-align:center;">合并</td><td style="text-align:center;">合并</td><td style="text-align:center;">不换行</td></tr><tr><td style="text-align:center;">pre</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">不换行</td></tr><tr><td style="text-align:center;">pre-wrap</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">pre-line</td><td style="text-align:center;">保留</td><td style="text-align:center;">合并</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">break-spaces</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">换行</td></tr></tbody></table>',5),l={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("MDN"),c=(0,a.uE)('<h2 id="css-unicode-字符-实现换行" tabindex="-1"><a class="header-anchor" href="#css-unicode-字符-实现换行" aria-hidden="true">#</a> CSS(Unicode 字符) 实现换行</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在 <code>Unicode</code> 中，<code>0x000A</code> 字符是专门控制换行的。在 <code>CSS</code> 中，我们可以写为 <code>\\A</code> 或 <code>\\000A</code> 作为 <code>after</code> 伪元素的内容，并添加到指定元素中实现换行效果。</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>br<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>前端常用知识软件推荐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>br<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>踩坑记录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>各种兼容问题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.br::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;\\A&#39;</span><span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div><span class="br">前端常用知识软件推荐</span><span class="br">踩坑记录</span><span>各种兼容问题</span></div>',5),o={href:"https://www.zhangxinxu.com/wordpress/2012/03/tip-css-multiline-display/",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("使用 CSS(Unicode 字符)让 inline 水平元素换行"),i={},d=(0,s(3744).Z)(i,[["render",function(t,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e,(0,a._)("p",null,[(0,a._)("a",l,[p,(0,a.Wm)(s)])]),c,(0,a._)("p",null,[(0,a._)("a",o,[r,(0,a.Wm)(s)])])],64)}]])},3744:(t,n)=>{n.Z=(t,n)=>{const s=t.__vccOpts||t;for(const[t,a]of n)s[t]=a;return s}}}]);