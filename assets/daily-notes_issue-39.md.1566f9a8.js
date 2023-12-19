import{_ as s,o as a,g as n,Q as l}from"./chunks/framework.e96f8bd7.js";const d=JSON.parse('{"title":"VitePress 生成站点地图","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-39.md","filePath":"daily-notes/issue-39.md","lastUpdated":null}'),p={name:"daily-notes/issue-39.md"},o=l(`<h1 id="vitepress-生成站点地图" tabindex="-1"><code>VitePress</code> 生成站点地图 <a class="header-anchor" href="#vitepress-生成站点地图" aria-label="Permalink to &quot;\`VitePress\` 生成站点地图&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/39" target="_blank" rel="noreferrer">VitePress 生成站点地图 | GitHub</a></p></div><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><blockquote><p>环境和依赖版本</p></blockquote><ul><li><code>node</code> 18.x</li><li><code>pnpm</code> 7.x</li><li><code>vitepress</code> 1.0.0-alpha.51</li><li><code>sitemap</code> 7.1.1</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sitemap</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sitemap</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-label="Permalink to &quot;修改配置文件&quot;">​</a></h2><blockquote><p><code>docs/.vitepress/config.ts</code></p></blockquote><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWriteStream } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;node:fs&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { resolve } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;node:path&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { SitemapStream } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;sitemap&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig, PageData } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">links</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">lastmod</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PageData</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;lastUpdated&#39;</span><span style="color:#E1E4E8;">] }[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 其他配置项...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 站点地图 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">transformHtml</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">pageData</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">404</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">html</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(id))</span></span>
<span class="line"><span style="color:#E1E4E8;">      links.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: pageData.relativePath.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">((</span><span style="color:#F97583;">^|</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">)index)</span><span style="color:#F97583;">?</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">md</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;$2&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        lastmod: pageData.lastUpdated</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">buildEnd</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">outDir</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// hostname 为线上域名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sitemap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SitemapStream</span><span style="color:#E1E4E8;">({ hostname: </span><span style="color:#9ECBFF;">&#39;https://notes.fe-mm.com/&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">writeStream</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWriteStream</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(outDir, </span><span style="color:#9ECBFF;">&#39;sitemap.xml&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    sitemap.</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(writeStream)</span></span>
<span class="line"><span style="color:#E1E4E8;">    links.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">link</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> sitemap.</span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">(link))</span></span>
<span class="line"><span style="color:#E1E4E8;">    sitemap.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> writeStream.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">, r))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createWriteStream } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;node:fs&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { resolve } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;node:path&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { SitemapStream } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;sitemap&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig, PageData } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">links</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">lastmod</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PageData</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;lastUpdated&#39;</span><span style="color:#24292E;">] }[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 其他配置项...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 站点地图 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">transformHtml</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">_</span><span style="color:#24292E;">, </span><span style="color:#E36209;">id</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">pageData</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">404</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(id))</span></span>
<span class="line"><span style="color:#24292E;">      links.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        url: pageData.relativePath.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/((</span><span style="color:#D73A49;">^|</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">)index)</span><span style="color:#D73A49;">?</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">md</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;$2&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        lastmod: pageData.lastUpdated</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">buildEnd</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">outDir</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// hostname 为线上域名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sitemap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SitemapStream</span><span style="color:#24292E;">({ hostname: </span><span style="color:#032F62;">&#39;https://notes.fe-mm.com/&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">writeStream</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createWriteStream</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(outDir, </span><span style="color:#032F62;">&#39;sitemap.xml&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    sitemap.</span><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(writeStream)</span></span>
<span class="line"><span style="color:#24292E;">    links.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">link</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> sitemap.</span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">(link))</span></span>
<span class="line"><span style="color:#24292E;">    sitemap.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">r</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> writeStream.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">, r))</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="相关-issues" tabindex="-1">相关 <code>issues</code> <a class="header-anchor" href="#相关-issues" aria-label="Permalink to &quot;相关 \`issues\`&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/vitepress/issues/520" target="_blank" rel="noreferrer">Sitemap generation</a></li></ul>`,11),e=[o];function t(r,c,E,y,i,F){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{d as __pageData,b as default};