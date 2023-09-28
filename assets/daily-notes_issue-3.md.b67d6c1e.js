import{_ as s,o as a,g as n,Q as p}from"./chunks/framework.4c5231b1.js";const b=JSON.parse('{"title":"修改 CRA 的默认配置","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-3.md","filePath":"daily-notes/issue-3.md","lastUpdated":null}'),l={name:"daily-notes/issue-3.md"},e=p(`<h1 id="修改-cra-的默认配置" tabindex="-1">修改 CRA 的默认配置 <a class="header-anchor" href="#修改-cra-的默认配置" aria-label="Permalink to &quot;修改 CRA 的默认配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/3" target="_blank" rel="noreferrer">修改 CRA 的默认配置 | GitHub</a></p></div><p>使用 <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">create-react-app</a> 初始化项目</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># JavaScript 模板</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-react-app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># TypeScript 模板</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">typescript</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-react-app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">typescript</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># JavaScript 模板</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-react-app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># TypeScript 模板</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">typescript</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-react-app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">typescript</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="使用-react-app-rewired-和-customize-cra-方案" tabindex="-1">使用 <a href="https://github.com/timarney/react-app-rewired" target="_blank" rel="noreferrer">react-app-rewired</a> 和 <a href="https://github.com/arackaf/customize-cra" target="_blank" rel="noreferrer">customize-cra</a> 方案 <a class="header-anchor" href="#使用-react-app-rewired-和-customize-cra-方案" aria-label="Permalink to &quot;使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) 和 [customize-cra](https://github.com/arackaf/customize-cra) 方案&quot;">​</a></h2><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><h5 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h5><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-app-rewired</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">customize-cra</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-app-rewired</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">customize-cra</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-app-rewired</span><span style="color:#24292E;"> </span><span style="color:#032F62;">customize-cra</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-app-rewired</span><span style="color:#24292E;"> </span><span style="color:#032F62;">customize-cra</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="修改-package-json-文件" tabindex="-1">修改 <code>package.json</code> 文件 <a class="header-anchor" href="#修改-package-json-文件" aria-label="Permalink to &quot;修改 \`package.json\` 文件&quot;">​</a></h5><div class="language-diff vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#FDAEB7;">-   &quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-   &quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-   &quot;test&quot;: &quot;react-scripts test&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+   &quot;start&quot;: &quot;react-app-rewired start&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+   &quot;build&quot;: &quot;react-app-rewired build&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+   &quot;test&quot;: &quot;react-app-rewired test&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#B31D28;">-   &quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span style="color:#B31D28;">-   &quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span style="color:#B31D28;">-   &quot;test&quot;: &quot;react-scripts test&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+   &quot;start&quot;: &quot;react-app-rewired start&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+   &quot;build&quot;: &quot;react-app-rewired build&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+   &quot;test&quot;: &quot;react-app-rewired test&quot;,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="项目根目录创建-config-overrides-js" tabindex="-1">项目根目录创建 <code>config-overrides.js</code> <a class="header-anchor" href="#项目根目录创建-config-overrides-js" aria-label="Permalink to &quot;项目根目录创建 \`config-overrides.js\`&quot;">​</a></h5><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">override</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">addWebpackAlias</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;customize-cra&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">override</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置别名</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">addWebpackAlias</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">override</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">addWebpackAlias</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;customize-cra&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">override</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置别名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">addWebpackAlias</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="相关资料" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料" aria-label="Permalink to &quot;相关资料&quot;">​</a></h3><ul><li><a href="https://github.com/arackaf/customize-cra/blob/master/api.md" target="_blank" rel="noreferrer">customize-cra Api 文档</a></li><li><a href="https://github.com/ant-design/ant-design/blob/4.2.2/docs/react/use-with-create-react-app.zh-CN.md" target="_blank" rel="noreferrer">在 create-react-app 中使用 antd</a></li><li><a href="https://github.com/ant-design/ant-design/blob/4.2.2/docs/react/use-in-typescript.zh-CN.md" target="_blank" rel="noreferrer">在 TypeScript 中使用 antd</a></li><li><a href="https://medium.com/javascript-in-plain-english/introduce-babel-new-plugins-to-create-react-app-ea55f56c3811" target="_blank" rel="noreferrer">Introducing new plugins in Babel to create react app</a></li></ul><h2 id="使用-craco-方案" tabindex="-1">使用 <a href="https://github.com/gsoft-inc/craco" target="_blank" rel="noreferrer">craco</a> 方案 <a class="header-anchor" href="#使用-craco-方案" aria-label="Permalink to &quot;使用 [craco](https://github.com/gsoft-inc/craco) 方案&quot;">​</a></h2><h3 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h3><h5 id="安装依赖-1" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-1" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h5><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@craco/craco</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@craco/craco</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@craco/craco</span></span>
<span class="line"><span style="color:#6A737D;"># OR</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@craco/craco</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="修改-package-json-文件-1" tabindex="-1">修改 <code>package.json</code> 文件 <a class="header-anchor" href="#修改-package-json-文件-1" aria-label="Permalink to &quot;修改 \`package.json\` 文件&quot;">​</a></h5><div class="language-diff vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#FDAEB7;">-   &quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-   &quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-   &quot;test&quot;: &quot;react-scripts test&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+   &quot;start&quot;: &quot;craco start&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+   &quot;build&quot;: &quot;craco build&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+   &quot;test&quot;: &quot;craco test&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#B31D28;">-   &quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span style="color:#B31D28;">-   &quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span style="color:#B31D28;">-   &quot;test&quot;: &quot;react-scripts test&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+   &quot;start&quot;: &quot;craco start&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+   &quot;build&quot;: &quot;craco build&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+   &quot;test&quot;: &quot;craco test&quot;,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="项目根目录创建-craco-config-js" tabindex="-1">项目根目录创建 <code>craco.config.js</code> <a class="header-anchor" href="#项目根目录创建-craco-config-js" aria-label="Permalink to &quot;项目根目录创建 \`craco.config.js\`&quot;">​</a></h5><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  webpack: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 配置别名</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  webpack: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 配置别名</span></span>
<span class="line"><span style="color:#24292E;">    alias: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="相关资料-1" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料-1" aria-label="Permalink to &quot;相关资料&quot;">​</a></h3><ul><li><a href="https://github.com/dilanx/craco/blob/master/packages/craco/README.md#configuration" target="_blank" rel="noreferrer">craco 配置说明</a></li><li><a href="https://ant.design/docs/react/use-with-create-react-app-cn" target="_blank" rel="noreferrer">在 create-react-app 中使用 antd</a></li><li><a href="https://ant.design/docs/react/use-in-typescript-cn" target="_blank" rel="noreferrer">在 TypeScript 中使用 antd</a></li></ul><h2 id="typescript-模板踩坑点" tabindex="-1">TypeScript 模板踩坑点 <a class="header-anchor" href="#typescript-模板踩坑点" aria-label="Permalink to &quot;TypeScript 模板踩坑点&quot;">​</a></h2><p><code>CRA</code> 创建的 <code>TypeScript</code> 模板中，配置别名 <code>alias</code> 时有坑</p><p>在 <code>tsconfig.json</code> 配置的 <code>paths</code> 字段，会在运行 <code>start / build</code> 命令后被 <code>CRA</code> 给删除，同时控制台会有如下提示和报错</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">The</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">following</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">changes</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">are</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">being</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">made</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">your</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tsconfig.json</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compilerOptions.paths</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">must</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">be</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> (aliased </span><span style="color:#9ECBFF;">imports</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">are</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">supported</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cannot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">find</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">module</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/xxx&#39;.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">TS2307</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">The</span><span style="color:#24292E;"> </span><span style="color:#032F62;">following</span><span style="color:#24292E;"> </span><span style="color:#032F62;">changes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">are</span><span style="color:#24292E;"> </span><span style="color:#032F62;">being</span><span style="color:#24292E;"> </span><span style="color:#032F62;">made</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">your</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tsconfig.json</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compilerOptions.paths</span><span style="color:#24292E;"> </span><span style="color:#032F62;">must</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">be</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> (aliased </span><span style="color:#032F62;">imports</span><span style="color:#24292E;"> </span><span style="color:#032F62;">are</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">supported</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cannot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">find</span><span style="color:#24292E;"> </span><span style="color:#032F62;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/xxx&#39;.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">TS2307</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><p>新建 <code>paths.json</code> 文件，并将 <code>paths</code> 的配置写入进去， <code>paths</code> 的配置项要与 <code>webpack alias</code> 配置项一致</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;baseUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@/*&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src/*&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;baseUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@/*&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;src/*&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>再去 <code>tsconfig.json</code> 中使用 <code>extends</code> 配置引入</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./paths.json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./paths.json&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="相关-issues" tabindex="-1">相关 <code>issues</code> <a class="header-anchor" href="#相关-issues" aria-label="Permalink to &quot;相关 \`issues\`&quot;">​</a></h3><ul><li><a href="https://github.com/facebook/create-react-app/issues/5118" target="_blank" rel="noreferrer">5118</a></li><li><a href="https://github.com/facebook/create-react-app/issues/5645" target="_blank" rel="noreferrer">5645</a></li></ul><p>fb 真霸道，自己不用 <code>alias</code>，也不让用户搞</p>`,36),o=[e];function t(r,c,i,E,y,u){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{b as __pageData,h as default};
