import{_ as s,v as a,b as n,R as l}from"./chunks/framework.975b469a.js";const b=JSON.parse('{"title":"修改 CRA 的默认配置","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-3.md","filePath":"daily-notes/issue-3.md","lastUpdated":null}'),e={name:"daily-notes/issue-3.md"},p=l(`<h1 id="修改-cra-的默认配置" tabindex="-1">修改 CRA 的默认配置 <a class="header-anchor" href="#修改-cra-的默认配置" aria-label="Permalink to &quot;修改 CRA 的默认配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/3" target="_blank" rel="noreferrer">修改 CRA 的默认配置 | GitHub</a></p></div><p>使用 <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">create-react-app</a> 初始化项目</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># JavaScript 模板</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">create</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">react-app</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">my-app</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">my-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># TypeScript 模板</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">create</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">react-app</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">my-app</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--template</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">typescript</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">my-app</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--template</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">typescript</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="使用-react-app-rewired-和-customize-cra-方案" tabindex="-1">使用 <a href="https://github.com/timarney/react-app-rewired" target="_blank" rel="noreferrer">react-app-rewired</a> 和 <a href="https://github.com/arackaf/customize-cra" target="_blank" rel="noreferrer">customize-cra</a> 方案 <a class="header-anchor" href="#使用-react-app-rewired-和-customize-cra-方案" aria-label="Permalink to &quot;使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) 和 [customize-cra](https://github.com/arackaf/customize-cra) 方案&quot;">​</a></h2><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><h5 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h5><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">react-app-rewired</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">customize-cra</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">react-app-rewired</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">customize-cra</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="修改-package-json-文件" tabindex="-1">修改 <code>package.json</code> 文件 <a class="header-anchor" href="#修改-package-json-文件" aria-label="Permalink to &quot;修改 \`package.json\` 文件&quot;">​</a></h5><div class="language-diff line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">   &quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">   &quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">   &quot;test&quot;: &quot;react-scripts test&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">   &quot;start&quot;: &quot;react-app-rewired start&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">   &quot;build&quot;: &quot;react-app-rewired build&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">   &quot;test&quot;: &quot;react-app-rewired test&quot;,</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="项目根目录创建-config-overrides-js" tabindex="-1">项目根目录创建 <code>config-overrides.js</code> <a class="header-anchor" href="#项目根目录创建-config-overrides-js" aria-label="Permalink to &quot;项目根目录创建 \`config-overrides.js\`&quot;">​</a></h5><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> override</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> addWebpackAlias </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">customize-cra</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">override</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 配置别名</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">addWebpackAlias</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#BABED8;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="相关资料" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料" aria-label="Permalink to &quot;相关资料&quot;">​</a></h3><ul><li><a href="https://github.com/arackaf/customize-cra/blob/master/api.md" target="_blank" rel="noreferrer">customize-cra Api 文档</a></li><li><a href="https://github.com/ant-design/ant-design/blob/4.2.2/docs/react/use-with-create-react-app.zh-CN.md" target="_blank" rel="noreferrer">在 create-react-app 中使用 antd</a></li><li><a href="https://github.com/ant-design/ant-design/blob/4.2.2/docs/react/use-in-typescript.zh-CN.md" target="_blank" rel="noreferrer">在 TypeScript 中使用 antd</a></li><li><a href="https://medium.com/javascript-in-plain-english/introduce-babel-new-plugins-to-create-react-app-ea55f56c3811" target="_blank" rel="noreferrer">Introducing new plugins in Babel to create react app</a></li></ul><h2 id="使用-craco-方案" tabindex="-1">使用 <a href="https://github.com/gsoft-inc/craco" target="_blank" rel="noreferrer">craco</a> 方案 <a class="header-anchor" href="#使用-craco-方案" aria-label="Permalink to &quot;使用 [craco](https://github.com/gsoft-inc/craco) 方案&quot;">​</a></h2><h3 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h3><h5 id="安装依赖-1" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-1" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h5><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@craco/craco</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@craco/craco</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="修改-package-json-文件-1" tabindex="-1">修改 <code>package.json</code> 文件 <a class="header-anchor" href="#修改-package-json-文件-1" aria-label="Permalink to &quot;修改 \`package.json\` 文件&quot;">​</a></h5><div class="language-diff line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">   &quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">   &quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">   &quot;test&quot;: &quot;react-scripts test&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">   &quot;start&quot;: &quot;craco start&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">   &quot;build&quot;: &quot;craco build&quot;,</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">   &quot;test&quot;: &quot;craco test&quot;,</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="项目根目录创建-craco-config-js" tabindex="-1">项目根目录创建 <code>craco.config.js</code> <a class="header-anchor" href="#项目根目录创建-craco-config-js" aria-label="Permalink to &quot;项目根目录创建 \`craco.config.js\`&quot;">​</a></h5><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">webpack</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 配置别名</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#BABED8;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="相关资料-1" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料-1" aria-label="Permalink to &quot;相关资料&quot;">​</a></h3><ul><li><a href="https://github.com/dilanx/craco/blob/master/packages/craco/README.md#configuration" target="_blank" rel="noreferrer">craco 配置说明</a></li><li><a href="https://ant.design/docs/react/use-with-create-react-app-cn" target="_blank" rel="noreferrer">在 create-react-app 中使用 antd</a></li><li><a href="https://ant.design/docs/react/use-in-typescript-cn" target="_blank" rel="noreferrer">在 TypeScript 中使用 antd</a></li></ul><h2 id="typescript-模板踩坑点" tabindex="-1">TypeScript 模板踩坑点 <a class="header-anchor" href="#typescript-模板踩坑点" aria-label="Permalink to &quot;TypeScript 模板踩坑点&quot;">​</a></h2><p><code>CRA</code> 创建的 <code>TypeScript</code> 模板中，配置别名 <code>alias</code> 时有坑</p><p>在 <code>tsconfig.json</code> 配置的 <code>paths</code> 字段，会在运行 <code>start / build</code> 命令后被 <code>CRA</code> 给删除，同时控制台会有如下提示和报错</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">The</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">following</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">changes</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">are</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">being</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">made</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">to</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">your</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tsconfig.json</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">compilerOptions.paths</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">must</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">not</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">be</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> (aliased </span><span style="color:#C3E88D;">imports</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">are</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">not</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">supported</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Cannot</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">find</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">module</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">TS2307</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><p>新建 <code>paths.json</code> 文件，并将 <code>paths</code> 的配置写入进去， <code>paths</code> 的配置项要与 <code>webpack alias</code> 配置项一致</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">baseUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">@/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>再去 <code>tsconfig.json</code> 中使用 <code>extends</code> 配置引入</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./paths.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="相关-issues" tabindex="-1">相关 <code>issues</code> <a class="header-anchor" href="#相关-issues" aria-label="Permalink to &quot;相关 \`issues\`&quot;">​</a></h3><ul><li><a href="https://github.com/facebook/create-react-app/issues/5118" target="_blank" rel="noreferrer">5118</a></li><li><a href="https://github.com/facebook/create-react-app/issues/5645" target="_blank" rel="noreferrer">5645</a></li></ul><p>fb 真霸道，自己不用 <code>alias</code>，也不让用户搞</p>`,36),o=[p];function r(t,c,i,y,D,u){return a(),n("div",null,o)}const B=s(e,[["render",r]]);export{b as __pageData,B as default};
