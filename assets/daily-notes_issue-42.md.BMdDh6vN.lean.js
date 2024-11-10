import{_ as a,h as i,a8 as n,o as e}from"./chunks/framework.BU7NHiAd.js";const k=JSON.parse('{"title":"修改 node_modules 中的依赖（打补丁）","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-42.md","filePath":"daily-notes/issue-42.md","lastUpdated":null}'),l={name:"daily-notes/issue-42.md"};function p(t,s,h,d,r,o){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="修改-node-modules-中的依赖-打补丁" tabindex="-1">修改 <code>node_modules</code> 中的依赖（打补丁） <a class="header-anchor" href="#修改-node-modules-中的依赖-打补丁" aria-label="Permalink to &quot;修改 \`node_modules\` 中的依赖（打补丁）&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/42" target="_blank" rel="noreferrer">修改 node_modules 中的依赖（打补丁） | GitHub</a></p></div><blockquote><p>为什么要修改 <code>node_modules</code> 中的依赖？</p></blockquote><ol><li>依赖包有 <code>bug</code>，但作者没有及时修复</li><li>依赖包的版本过旧，但不能升级到新版本</li><li>对依赖包的功能有定制化需求时</li></ol><h2 id="常见做法" tabindex="-1">常见做法 <a class="header-anchor" href="#常见做法" aria-label="Permalink to &quot;常见做法&quot;">​</a></h2><ul><li>自己维护这个 <code>npm</code> 包 <ul><li>维护成本较高，周期长</li></ul></li><li>直接修改 <code>node_modules</code> 中的依赖 <ul><li>适合应急，周期短</li><li>修改只在本地生效</li><li>适合对 <code>npm</code> 包的修改不需要发布的情况</li></ul></li><li>对 <code>node_modules</code> 中的依赖打补丁 <ul><li>适合应急，周期短</li><li>提交补丁文件后修改可在本地和远程生效</li><li>适合对 <code>npm</code> 包的修改不需要发布的情况</li></ul></li></ul><h2 id="什么是打补丁" tabindex="-1">什么是打补丁？ <a class="header-anchor" href="#什么是打补丁" aria-label="Permalink to &quot;什么是打补丁？&quot;">​</a></h2><p>打补丁是一种在不修改原始文件的情况下对文件进行增量修改的技术，它可以用来修复 <code>bug</code>、添加功能、或者改变行为。</p><p>打补丁的原理是使用 <code>diff</code> 工具来比较两个文件（或目录）之间的差异，并生成一个补丁文件（patch file），这个补丁文件记录了如何从一个文件（或目录）变成另一个文件（或目录）所需要做的修改，然后使用 <code>patch</code> 工具来将补丁文件应用到原始文件（或目录）上，从而实现修改。</p><p>打补丁有以下优点：</p><ul><li>补丁文件通常很小，可以节省磁盘空间和网络带宽</li><li>补丁文件可以被提交到版本控制系统中，方便追踪和管理</li><li>补丁文件可以在不同的平台和环境中使用，提高兼容性和可移植性</li><li>补丁文件可以在安装或更新依赖包后自动应用，减少手动操作</li></ul><h2 id="如何打补丁" tabindex="-1">如何打补丁 <a class="header-anchor" href="#如何打补丁" aria-label="Permalink to &quot;如何打补丁&quot;">​</a></h2><p>不同的包管理器，打补丁的方法也不同，但其原理都是一样的</p><ol><li>在项目目录下生成一个 <code>patches</code> 文件夹，里面存放着所有的补丁文件（其补丁内容为 <code>diff</code> 格式）</li><li>在 <code>npm install</code> 后自动应用补丁</li></ol><h3 id="使用-pnpm-或-yarn-v2" tabindex="-1">使用 <code>pnpm</code> 或 <code>yarn v2+</code> <a class="header-anchor" href="#使用-pnpm-或-yarn-v2" aria-label="Permalink to &quot;使用 \`pnpm\` 或 \`yarn v2+\`&quot;">​</a></h3><p><code>pnpm</code> 和 <code>yarn v2+</code> 都提供了 <code>patch</code> 命令，可以直接使用</p><p><strong>以 <code>pnpm</code> 为例</strong></p><p>添加补丁，该命令会将指定的软件包提取到一个可以随意编辑的临时目录中供我们修改</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> patch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 🌰</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> patch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @astrojs/cli-kit@0.2.3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>生成补丁文件到项目中（默认保存在项目根目录下的 <code>patches</code> 目录中）</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;path&gt; 是之前提取的临时目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> patch-commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="使用-npm-或-yarn-v1-时" tabindex="-1">使用 <code>npm</code> 或 <code>yarn v1</code> 时 <a class="header-anchor" href="#使用-npm-或-yarn-v1-时" aria-label="Permalink to &quot;使用 \`npm\` 或 \`yarn v1\` 时&quot;">​</a></h3><p>使用 <code>npm</code> 或 <code>yarn v1</code> 管理依赖时，需要借助第三方工具 <code>patch-package</code> 来实现对 <code>node_modules</code> 中的依赖打补丁</p><p><strong>以 <code>npm</code> 为例</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 安装 patch-package</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> patch-package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 添加 postinstall 脚本，以便在每次 npm install 后自动应用补丁</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts.postinstall=&quot;patch-package&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 修改 node_modules 指定依赖包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 生成补丁 &lt;pkg name&gt; 是上一步修改的依赖包名称</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> patch-package</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://pnpm.io/zh/cli/patch" target="_blank" rel="noreferrer">pnpm patch &lt;pkg&gt; | pnpm</a></li><li><a href="https://github.com/ds300/patch-package" target="_blank" rel="noreferrer">patch-package | GitHub</a></li></ul>`,27)]))}const u=a(l,[["render",p]]);export{k as __pageData,u as default};
