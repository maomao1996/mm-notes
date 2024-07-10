import{_ as a,h as e,o as i,aa as s}from"./chunks/framework.C-tu2utv.js";const b=JSON.parse('{"title":"浏览器的自动播放策略","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-45.md","filePath":"daily-notes/issue-45.md","lastUpdated":null}'),l={name:"daily-notes/issue-45.md"},t=s(`<h1 id="浏览器的自动播放策略" tabindex="-1">浏览器的自动播放策略 <a class="header-anchor" href="#浏览器的自动播放策略" aria-label="Permalink to &quot;浏览器的自动播放策略&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/45" target="_blank" rel="noreferrer">浏览器的自动播放策略 | GitHub</a></p></div><blockquote><p>最近有个项目被坑到了，正好记录一下</p></blockquote><p>自动播放即网页加载完成后能否立即播放音视频</p><blockquote><p>以 Chrome 为例（以下为自动播放策略）</p></blockquote><ul><li>始终允许静音自动播放</li><li>在以下情况下，允许带声音的自动播放 <ul><li>用户已经在当前域进行了交互操作（点击触摸滑动等）</li><li>用户将当前网站添加到移动设备上的主屏幕或在桌面上安装了 PWA</li><li>在桌面设备上：用户的<a href="https://developer.chrome.com/blog/autoplay?hl=zh-cn#media_engagement_index" target="_blank" rel="noreferrer">媒体互动指数</a>超过一定阈值（意味着用户之前播放过有声视频）</li></ul></li><li><code>iframe</code> 会继承父级页面的自动播放策略（需要父窗口满足自动播放条件）</li></ul><h2 id="媒体互动指数" tabindex="-1">媒体互动指数 <a class="header-anchor" href="#媒体互动指数" aria-label="Permalink to &quot;媒体互动指数&quot;">​</a></h2><p>媒体互动指数 (MEI Media Engagement Index) 衡量的是个人在网站上观看媒体的倾向</p><blockquote><p>Chrome 的方法是统计每个来源的访问次数与重要媒体播放事件的比率</p></blockquote><ul><li>媒体（音频/视频）的用时必须超过 7 秒</li><li>音频必须存在且已取消静音</li><li>包含该视频的标签页处于有效状态</li><li>视频的尺寸（以像素为单位）必须大于 200x140</li></ul><p>MEI 是一个数字，可以在 <code>about://media-engagement</code> 中进行查看；其值越高，表示用户对该站点的媒体参与度越高</p><blockquote><ul><li><p>媒体互动指数的计算规则不透明</p></li><li><p>媒体互动指数的计算规则在不同的浏览器版本上可能会有差异</p></li></ul></blockquote><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="交互后播放" tabindex="-1">交互后播放 <a class="header-anchor" href="#交互后播放" aria-label="Permalink to &quot;交互后播放&quot;">​</a></h3><ol><li>先尝试自动播放</li><li>自动播放失败后，引导用户进行交互</li><li>用户交互后再进行播放</li></ol><blockquote><p>一般会在视频区添加一个全局按钮，用户点击后触发交互操作，并自动播放</p></blockquote><h3 id="交互后播放声音" tabindex="-1">交互后播放声音 <a class="header-anchor" href="#交互后播放声音" aria-label="Permalink to &quot;交互后播放声音&quot;">​</a></h3><p>先静音播放，然后根据能否自动播放判断是否取消静音</p><ol><li>能自动播放，取消静音</li><li>不能自动播放，引导用户进行交互操作后取消静音</li></ol><p><strong>关键点</strong>：通过 <code>AudioContext</code> 判断其上下文的状态</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AudioContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> canAutoPlay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ctx.state </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;running&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="相关资料" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料" aria-label="Permalink to &quot;相关资料&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Media/Autoplay_guide" target="_blank" rel="noreferrer">媒体和 Web Audio API 的自动播放指南 | MDN</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/BaseAudioContext/state" target="_blank" rel="noreferrer">AudioContext.state | MDN</a></li><li><a href="https://developer.chrome.com/blog/autoplay?hl=zh-cn" target="_blank" rel="noreferrer">Chrome 中的自动播放政策</a></li></ul>`,23),n=[t];function o(r,h,p,d,c,k){return i(),e("div",null,n)}const g=a(l,[["render",o]]);export{b as __pageData,g as default};
