import{_ as s,h as i,o as a,a9 as e}from"./chunks/framework.35Ps3iiG.js";const g=JSON.parse('{"title":"在项目中使用 ESLint 和 Prettier（以 React + TypeScript 为例）","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-6.md","filePath":"daily-notes/issue-6.md","lastUpdated":null}'),n={name:"daily-notes/issue-6.md"},t=e(`<h1 id="在项目中使用-eslint-和-prettier-以-react-typescript-为例" tabindex="-1">在项目中使用 ESLint 和 Prettier（以 React + TypeScript 为例） <a class="header-anchor" href="#在项目中使用-eslint-和-prettier-以-react-typescript-为例" aria-label="Permalink to &quot;在项目中使用 ESLint 和 Prettier（以 React + TypeScript 为例）&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/6" target="_blank" rel="noreferrer">在项目中使用 ESLint 和 Prettier | GitHub</a></p></div><h2 id="使用-cra-初始化项目" tabindex="-1">使用 CRA 初始化项目 <a class="header-anchor" href="#使用-cra-初始化项目" aria-label="Permalink to &quot;使用 CRA 初始化项目&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-react-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用-eslint" tabindex="-1">使用 ESLint <a class="header-anchor" href="#使用-eslint" aria-label="Permalink to &quot;使用 ESLint&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><blockquote><p>CRA 自带了 <code>eslint</code>，不用额外安装</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @typescript-eslint/parser</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @typescript-eslint/eslint-plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-plugin-react</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><a href="https://cn.eslint.org/" target="_blank" rel="noreferrer"><code>eslint</code></a>: <code>javascript</code> 代码检测工具</li><li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser" target="_blank" rel="noreferrer"><code>@typescript-eslint/parser</code></a>: <code>ESLint</code> 的解析器，用于解析 <code>typescript</code></li><li><a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin" target="_blank" rel="noreferrer"><code>@typescript-eslint/eslint-plugin</code></a>: <code>ESLint</code> 插件，内置了 <code>typescript</code> 代码的相关规范</li><li><a href="https://github.com/yannickcr/eslint-plugin-react" target="_blank" rel="noreferrer"><code>eslint-plugin-react</code></a>: <code>ESLint</code> 插件，内置了 <code>react</code> 代码的相关规范</li></ul><h3 id="配置文件-eslintrc-js-介绍" tabindex="-1">配置文件 <code>.eslintrc.js</code> 介绍 <a class="header-anchor" href="#配置文件-eslintrc-js-介绍" aria-label="Permalink to &quot;配置文件 \`.eslintrc.js\` 介绍&quot;">​</a></h3><p>根目录新建 <code>.eslintrc.js</code> 文件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 运行环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    browser: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    es2020: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 继承的规则 / 插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;plugin:react/recommended&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;plugin:@typescript-eslint/recommended&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 解析器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parser: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@typescript-eslint/parser&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 解析器配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ecmaFeatures: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      jsx: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ecmaVersion: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2018</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sourceType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;module&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@typescript-eslint&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  settings: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 自动检测 React 的版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    react: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;detect&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 规则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;react/prop-types&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;react/forbid-prop-types&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;react/jsx-indent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><a href="https://cn.eslint.org/docs/user-guide/configuring" target="_blank" rel="noreferrer">.eslintrc.js 配置项说明</a></p><h3 id="添加脚本命令" tabindex="-1">添加脚本命令 <a class="header-anchor" href="#添加脚本命令" aria-label="Permalink to &quot;添加脚本命令&quot;">​</a></h3><p>在 <code>package.json</code> 的 <code>scripts</code> 配置项中写入 <code>&quot;lint&quot;: &quot;eslint --ext js,ts,tsx src&quot;</code></p><hr><h2 id="使用-prettier" tabindex="-1">使用 Prettier <a class="header-anchor" href="#使用-prettier" aria-label="Permalink to &quot;使用 Prettier&quot;">​</a></h2><p>Prettier 是一个代码格式化工具，它通过解析代码并使用自己的规则（考虑最大行长）重新格式化代码，从而实现一致的编码风格</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-config-prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-plugin-prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><a href="https://github.com/prettier/prettier" target="_blank" rel="noreferrer"><code>prettier</code></a>代码格式化程序</li><li><a href="https://github.com/prettier/eslint-config-prettier" target="_blank" rel="noreferrer"><code>eslint-config-prettier</code></a>: 关闭 <code>ESLint</code> 中不必要的或可能与 <code>Prettier</code> 冲突的规则。</li><li><a href="https://github.com/prettier/eslint-plugin-prettier" target="_blank" rel="noreferrer"><code>eslint-plugin-prettier</code></a>: 将 <code>Prettier</code> 作为 <code>ESLint</code> 规则运行，并将差异报告为单个 <code>ESLint</code> 问题。</li></ul><h3 id="修改-eslintrc-js" tabindex="-1">修改 <code>.eslintrc.js</code> <a class="header-anchor" href="#修改-eslintrc-js" aria-label="Permalink to &quot;修改 \`.eslintrc.js\`&quot;">​</a></h3><h4 id="eslint-config-prettier-8-0-0-之后版本" tabindex="-1"><code>eslint-config-prettier</code> 8.0.0 之后版本 <a class="header-anchor" href="#eslint-config-prettier-8-0-0-之后版本" aria-label="Permalink to &quot;\`eslint-config-prettier\` 8.0.0 之后版本&quot;">​</a></h4><p>在 <code>extends</code> 配置项中增加 <code>prettier</code> 和 <code>plugin:prettier/recommended</code></p><h4 id="eslint-config-prettier-8-0-0-之前版本" tabindex="-1"><code>eslint-config-prettier</code> 8.0.0 之前版本 <a class="header-anchor" href="#eslint-config-prettier-8-0-0-之前版本" aria-label="Permalink to &quot;\`eslint-config-prettier\` 8.0.0 之前版本&quot;">​</a></h4><p>在 <code>extends</code> 配置项中增加 <code>prettier/@typescript-eslint</code> 和 <code>plugin:prettier/recommended</code></p><p><a href="https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21" target="_blank" rel="noreferrer">相关 CHANGELOG</a></p><h3 id="自定义-prettier-风格规则" tabindex="-1">自定义 <code>Prettier</code> 风格规则 <a class="header-anchor" href="#自定义-prettier-风格规则" aria-label="Permalink to &quot;自定义 \`Prettier\` 风格规则&quot;">​</a></h3><p>在根目录创建 <code>.prettierrc</code> 文件和 <code>.prettierignore</code></p><p><code>.prettierrc</code></p><ol><li>自定义 <code>Prettier</code> 风格规则</li></ol><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;singleQuote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;semi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;trailingComma&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;printWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;overrides&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.prettierrc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;options&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2"><li><code>.prettierignore</code></li></ol><p>配置 <code>Prettier</code> 忽略文件</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tsconfig.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="添加脚本命令-1" tabindex="-1">添加脚本命令 <a class="header-anchor" href="#添加脚本命令-1" aria-label="Permalink to &quot;添加脚本命令&quot;">​</a></h3><p>在 <code>package.json</code> 的 <code>scripts</code> 配置项中写入 <code>&quot;fix&quot;: &quot;prettier --write ./src&quot;</code></p><h2 id="相关资料" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料" aria-label="Permalink to &quot;相关资料&quot;">​</a></h2><p><a href="https://cn.eslint.org/docs/rules/" target="_blank" rel="noreferrer">ESLint Rules</a><a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noreferrer">Prettier Options</a></p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p><a href="https://github.com/maomao1996/daily-notes/issues/8" target="_blank" rel="noreferrer">使用 husky、lint-staged、commitlint 构建前端工作流</a></p>`,41),l=[t];function p(r,h,k,c,d,o){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};
