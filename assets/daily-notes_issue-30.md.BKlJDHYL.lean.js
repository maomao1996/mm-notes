import{_ as a,h as i,a8 as n,o as l}from"./chunks/framework.BU7NHiAd.js";const g=JSON.parse('{"title":"修复谷歌翻译失效","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-30.md","filePath":"daily-notes/issue-30.md","lastUpdated":null}'),p={name:"daily-notes/issue-30.md"};function e(t,s,h,r,k,o){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="修复谷歌翻译失效" tabindex="-1">修复谷歌翻译失效 <a class="header-anchor" href="#修复谷歌翻译失效" aria-label="Permalink to &quot;修复谷歌翻译失效&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/30" target="_blank" rel="noreferrer">修复谷歌翻译失效 | GitHub</a></p></div><blockquote><p>之前找的<a href="https://zhuanlan.zhihu.com/p/570811957" target="_blank" rel="noreferrer">知乎帖</a>不知道为啥被删除，这里做下记录</p></blockquote><p>谷歌关闭了中国大陆的谷歌翻译服务，导致 chrome 内置翻译和扩展均不可用，但可以通过修改 <code>hosts</code> 继续使用</p><h2 id="获取-ip-地址" tabindex="-1">获取 IP 地址 <a class="header-anchor" href="#获取-ip-地址" aria-label="Permalink to &quot;获取 IP 地址&quot;">​</a></h2><h3 id="方案一-通过-ip-查询工具" tabindex="-1">方案一：通过 IP 查询工具 <a class="header-anchor" href="#方案一-通过-ip-查询工具" aria-label="Permalink to &quot;方案一：通过 IP 查询工具&quot;">​</a></h3><ol><li>打开 <a href="https://ping.chinaz.com/translate.google.cn" target="_blank" rel="noreferrer">https://ping.chinaz.com/translate.google.cn</a></li><li>选择物理距离最近（即通过 IP 归属地来选择响应最快的）</li></ol><h3 id="方案二-使用命令行获取-ip" tabindex="-1">方案二：使用命令行获取 IP <a class="header-anchor" href="#方案二-使用命令行获取-ip" aria-label="Permalink to &quot;方案二：使用命令行获取 IP&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开终端输入 ping 命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> google.cn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="修改-hosts" tabindex="-1">修改 hosts <a class="header-anchor" href="#修改-hosts" aria-label="Permalink to &quot;修改 hosts&quot;">​</a></h2><p>各系统 <code>hosts</code> 文件路径如下</p><ul><li>Windows 系统：<code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></li><li>Mac 系统：<code>/etc/hosts</code></li><li>Linux 系统：<code>/etc/hosts</code></li><li>Android 系统：<code>/system/etc/hosts</code></li><li>iOS 系统：<code>/etc/hosts</code></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">220.181.174.162</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意点：</p><ul><li><strong><code>translate.googleapis.com</code> 才是谷歌翻译的 API 地址</strong></li><li><code>220.181.174.162</code> 为之前获取到的 IP 地址</li></ul><p>推荐使用 Hosts 管理工具（<a href="https://github.com/oldj/SwitchHosts" target="_blank" rel="noreferrer">SwitchHosts</a>）修改</p><h3 id="当前可用的-ip-库" tabindex="-1">当前可用的 IP 库 <a class="header-anchor" href="#当前可用的-ip-库" aria-label="Permalink to &quot;当前可用的 IP 库&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">108.177.122.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.0.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.10.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.100.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.101.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.105.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.107.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.11.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.110.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.111.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.112.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.12.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.125.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.126.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.128.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.136.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.185.174</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.185.238</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.189.206</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.203.142</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.218.14</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.27.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.28.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.30.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.31.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.4.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.8.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.9.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.96.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.97.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.250.98.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.251.10.138</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.251.116.101</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.251.40.174</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.251.5.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">142.251.9.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.0.46</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.13.142</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.16.46</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.192.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.195.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.203.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.204.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.214.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.215.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.222.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.217.31.142</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.112.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.113.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.114.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.115.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.116.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.122.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.123.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.124.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.126.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.253.62.90</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">216.58.209.174</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">216.58.214.14</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">216.58.220.142</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> translate.googleapis.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p><a href="https://hcfy.app/blog/2022/09/28/ggg" target="_blank" rel="noreferrer">谷歌翻译不能用的解决方案 | 划词翻译</a></p>`,19)]))}const c=a(p,[["render",e]]);export{g as __pageData,c as default};
