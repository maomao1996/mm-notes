import{_ as s,o as n,g as a,Q as p}from"./chunks/framework.e96f8bd7.js";const u=JSON.parse('{"title":"Plop 实战笔记","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-22.md","filePath":"daily-notes/issue-22.md","lastUpdated":null}'),l={name:"daily-notes/issue-22.md"},e=p(`<h1 id="plop-实战笔记" tabindex="-1">Plop 实战笔记 <a class="header-anchor" href="#plop-实战笔记" aria-label="Permalink to &quot;Plop 实战笔记&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/22" target="_blank" rel="noreferrer">Plop 实战笔记 | GitHub</a></p></div><p><a href="https://github.com/plopjs/plop" target="_blank" rel="noreferrer">Plop</a> 是一个轻量级的项目搭建生成工具，提供了一种以一致的方式生成代码或任何其他类型的纯文本文件的简单方法</p><p>当我们在项目中引入时，可以通过定制对应的命令询问，可以帮助我们自动生成页面文件，添加对应的路由配置等</p><h2 id="安装-plop" tabindex="-1">安装 Plop <a class="header-anchor" href="#安装-plop" aria-label="Permalink to &quot;安装 Plop&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="添加运行脚本命令" tabindex="-1">添加运行脚本命令 <a class="header-anchor" href="#添加运行脚本命令" aria-label="Permalink to &quot;添加运行脚本命令&quot;">​</a></h2><p>修改 <code>package.json</code> 文件</p><div class="language-diff vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#85E89D;">+   &quot;plop&quot;: &quot;plop&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#22863A;">+   &quot;plop&quot;: &quot;plop&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-label="Permalink to &quot;创建配置文件&quot;">​</a></h2><p>在项目根目录创建 <code>plopfile.js</code> 文件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">plop</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 添加一个生成器(生成器名称和配置项)</span></span>
<span class="line"><span style="color:#E1E4E8;">  plop.</span><span style="color:#B392F0;">setGenerator</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;basics&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 生成器描述</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&#39;this is a skeleton plopfile&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 添加交互式问答</span></span>
<span class="line"><span style="color:#6A737D;">     * 文档: https://github.com/SBoudrias/Inquirer.js</span></span>
<span class="line"><span style="color:#6A737D;">     **/</span></span>
<span class="line"><span style="color:#E1E4E8;">    prompts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;请输入组件名&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;confirm&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;style&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;是否需要样式文件?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 需要执行的操作</span></span>
<span class="line"><span style="color:#E1E4E8;">    actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 添加一个全新的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;add&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 通过双花括号语法使用用户输入的答案</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;src/{{name}}.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        templateFile: </span><span style="color:#9ECBFF;">&#39;/plop-templates/pages/index.hbs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 修改一个文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;modify&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * 通过双花括号语法使用用户输入的答案</span></span>
<span class="line"><span style="color:#6A737D;">         * 同时可以使用辅助函数对参数进行修饰</span></span>
<span class="line"><span style="color:#6A737D;">         * 例子：使用 {{pascalCase name}} 可以将 name 修饰为大写驼峰</span></span>
<span class="line"><span style="color:#6A737D;">         **/</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;src/{{name}}.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * 可以通过设置 pattern 匹配对应的特殊字符，在某个位置进行修改操作</span></span>
<span class="line"><span style="color:#6A737D;">         * 具体案例地址:</span></span>
<span class="line"><span style="color:#6A737D;">         * https://github.com/maomao1996/plop-demo/blob/main/plopfile.js#L86</span></span>
<span class="line"><span style="color:#6A737D;">         * https://github.com/maomao1996/plop-demo/blob/main/src/routes/index.jsx#L8</span></span>
<span class="line"><span style="color:#6A737D;">         **/</span></span>
<span class="line"><span style="color:#E1E4E8;">        pattern:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">(</span><span style="color:#85E89D;font-weight:bold;">\\/\\*</span><span style="color:#DBEDFF;"> plop add </span><span style="color:#85E89D;font-weight:bold;">\\*\\/</span><span style="color:#DBEDFF;">)</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        templateFile: </span><span style="color:#9ECBFF;">&#39;/plop-templates/pages/index.hbs&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 可以设置 data 传入额外参数供模板使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 高阶用法可以使用函数，返回一个 actions 数组</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">actions</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">actions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (data.style) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        actions.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({})</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> actions</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">plop</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 添加一个生成器(生成器名称和配置项)</span></span>
<span class="line"><span style="color:#24292E;">  plop.</span><span style="color:#6F42C1;">setGenerator</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;basics&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 生成器描述</span></span>
<span class="line"><span style="color:#24292E;">    description: </span><span style="color:#032F62;">&#39;this is a skeleton plopfile&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 添加交互式问答</span></span>
<span class="line"><span style="color:#6A737D;">     * 文档: https://github.com/SBoudrias/Inquirer.js</span></span>
<span class="line"><span style="color:#6A737D;">     **/</span></span>
<span class="line"><span style="color:#24292E;">    prompts: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;input&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        message: </span><span style="color:#032F62;">&#39;请输入组件名&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;confirm&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;style&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        message: </span><span style="color:#032F62;">&#39;是否需要样式文件?&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 需要执行的操作</span></span>
<span class="line"><span style="color:#24292E;">    actions: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 添加一个全新的文件</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;add&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 通过双花括号语法使用用户输入的答案</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;src/{{name}}.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        templateFile: </span><span style="color:#032F62;">&#39;/plop-templates/pages/index.hbs&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 修改一个文件</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;modify&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * 通过双花括号语法使用用户输入的答案</span></span>
<span class="line"><span style="color:#6A737D;">         * 同时可以使用辅助函数对参数进行修饰</span></span>
<span class="line"><span style="color:#6A737D;">         * 例子：使用 {{pascalCase name}} 可以将 name 修饰为大写驼峰</span></span>
<span class="line"><span style="color:#6A737D;">         **/</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;src/{{name}}.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * 可以通过设置 pattern 匹配对应的特殊字符，在某个位置进行修改操作</span></span>
<span class="line"><span style="color:#6A737D;">         * 具体案例地址:</span></span>
<span class="line"><span style="color:#6A737D;">         * https://github.com/maomao1996/plop-demo/blob/main/plopfile.js#L86</span></span>
<span class="line"><span style="color:#6A737D;">         * https://github.com/maomao1996/plop-demo/blob/main/src/routes/index.jsx#L8</span></span>
<span class="line"><span style="color:#6A737D;">         **/</span></span>
<span class="line"><span style="color:#24292E;">        pattern:</span><span style="color:#032F62;"> /(</span><span style="color:#22863A;font-weight:bold;">\\/\\*</span><span style="color:#032F62;"> plop add </span><span style="color:#22863A;font-weight:bold;">\\*\\/</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        templateFile: </span><span style="color:#032F62;">&#39;/plop-templates/pages/index.hbs&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 可以设置 data 传入额外参数供模板使用</span></span>
<span class="line"><span style="color:#24292E;">        data: {}</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 高阶用法可以使用函数，返回一个 actions 数组</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">actions</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">actions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (data.style) {</span></span>
<span class="line"><span style="color:#24292E;">        actions.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({})</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> actions</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>Plop 的字符串转化函数底层(<a href="https://github.com/plopjs/node-plop/blob/master/src/baked-in-helpers.js" target="_blank" rel="noreferrer">相关源码</a>)使用了 <a href="https://github.com/blakeembrey/change-case" target="_blank" rel="noreferrer">change-case</a> 库</p><p>当我们在 JS 中需要使用时可以引入该库，与模板语法处理保持统一</p><p><a href="https://github.com/maomao1996/plop-demo/blob/main/plopfile.js#L52" target="_blank" rel="noreferrer">相关案例地址</a></p><h2 id="完整案例" tabindex="-1">完整案例 <a class="header-anchor" href="#完整案例" aria-label="Permalink to &quot;完整案例&quot;">​</a></h2><p><a href="https://github.com/maomao1996/plop-demo" target="_blank" rel="noreferrer">https://github.com/maomao1996/plop-demo</a></p>`,18),o=[e];function c(r,t,i,E,y,b){return n(),a("div",null,o)}const d=s(l,[["render",c]]);export{u as __pageData,d as default};
