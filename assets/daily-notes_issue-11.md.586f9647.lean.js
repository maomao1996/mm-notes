import{_ as s,v as a,b as n,R as l}from"./chunks/framework.975b469a.js";const d=JSON.parse('{"title":"获取当前 git 分支","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-11.md","filePath":"daily-notes/issue-11.md","lastUpdated":null}'),e={name:"daily-notes/issue-11.md"},o=l(`<h1 id="获取当前-git-分支" tabindex="-1">获取当前 <code>git</code> 分支 <a class="header-anchor" href="#获取当前-git-分支" aria-label="Permalink to &quot;获取当前 \`git\` 分支&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/11" target="_blank" rel="noreferrer">获取当前 git 分支 | GitHub</a></p></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 命令一</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">symbolic-ref</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--short</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-q</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 命令二</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rev-parse</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--abbrev-ref</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://stackoverflow.com/questions/45028134/whats-the-difference-between-the-output-from-rev-parse-and-symbolic-ref" target="_blank" rel="noreferrer">symbolic-ref 和 rev-parse 的区别</a></p><h2 id="在-node-中使用" tabindex="-1">在 <code>node</code> 中使用 <a class="header-anchor" href="#在-node-中使用" aria-label="Permalink to &quot;在 \`node\` 中使用&quot;">​</a></h2><h3 id="execa" tabindex="-1"><code>execa</code> <a class="header-anchor" href="#execa" aria-label="Permalink to &quot;\`execa\`&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> execa </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">execa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> branchName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> execa</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commandSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git symbolic-ref --short -q HEAD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">stdout</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="shelljs" tabindex="-1"><code>shelljs</code> <a class="header-anchor" href="#shelljs" aria-label="Permalink to &quot;\`shelljs\`&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> shell </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shelljs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> branchName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> shell</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git symbolic-ref --short -q HEAD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">silent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">stdout</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="child-process" tabindex="-1"><code>child_process</code> <a class="header-anchor" href="#child-process" aria-label="Permalink to &quot;\`child_process\`&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> child_process </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">child_process</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> branchName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> child_process</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">execSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git symbolic-ref --short -q HEAD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">encoding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to &quot;用途&quot;">​</a></h2><p>可以根据分支名在 <code>webpack</code> 编译时做处理（如: 线上环境打包只允许在 <code>master</code> 分支）</p>`,14),p=[o];function r(c,t,i,y,D,C){return a(),n("div",null,p)}const F=s(e,[["render",r]]);export{d as __pageData,F as default};
