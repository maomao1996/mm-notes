import{_ as s,v as a,b as n,R as e}from"./chunks/framework.975b469a.js";const m=JSON.parse('{"title":"修改 DNS 解决 Github 图片资源加载失败","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-16.md","filePath":"daily-notes/issue-16.md","lastUpdated":null}'),l={name:"daily-notes/issue-16.md"},t=e(`<h1 id="修改-dns-解决-github-图片资源加载失败" tabindex="-1">修改 DNS 解决 Github 图片资源加载失败 <a class="header-anchor" href="#修改-dns-解决-github-图片资源加载失败" aria-label="Permalink to &quot;修改 DNS 解决 Github 图片资源加载失败&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/16" target="_blank" rel="noreferrer">修改 DNS 解决 Github 资源加载失败 | GitHub</a></p></div><h2 id="获取-ip-地址" tabindex="-1">获取 IP 地址 <a class="header-anchor" href="#获取-ip-地址" aria-label="Permalink to &quot;获取 IP 地址&quot;">​</a></h2><ol><li>打开 <a href="https://www.ipaddress.com" target="_blank" rel="noreferrer">ipaddress</a></li><li>搜索 <code>raw.githubusercontent.com</code> (控制台资源报错的域名)</li></ol><p><a href="https://githubusercontent.com.ipaddress.com/raw.githubusercontent.com" target="_blank" rel="noreferrer">快捷搜索 raw.githubusercontent.com IP 地址</a></p><h2 id="修改本地-hosts-文件" tabindex="-1">修改本地 Hosts 文件 <a class="header-anchor" href="#修改本地-hosts-文件" aria-label="Permalink to &quot;修改本地 Hosts 文件&quot;">​</a></h2><p>各系统 <code>hosts</code> 文件路径如下</p><ul><li>Windows 系统：<code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></li><li>Mac 系统：<code>/etc/hosts</code></li><li>Linux 系统：<code>/etc/hosts</code></li><li>Android 系统：<code>/system/etc/hosts</code></li><li>iOS 系统：<code>/etc/hosts</code></li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">assets-cdn.github.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">raw.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">gist.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">camo.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">cloud.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">user-images.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">avatars.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">avatars0.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">avatars1.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">avatars2.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">avatars3.githubusercontent.com</span></span>
<span class="line"><span style="color:#FFCB6B;">199.232.96.133</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">avatars4.githubusercontent.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>199.232.96.133</code> 为之前获取到的 IP 地址</p><p>推荐使用 Hosts 管理工具（SwitchHosts）修改</p><h2 id="switchhosts" tabindex="-1">SwitchHosts <a class="header-anchor" href="#switchhosts" aria-label="Permalink to &quot;SwitchHosts&quot;">​</a></h2><ol><li>Hosts 文件语法高亮</li><li>快速切换 Hosts</li><li>在线 Hosts 方案</li><li>系统托盘图标快速切换</li><li>支持 windows macOS linux</li></ol><p><a href="https://github.com/oldj/SwitchHosts" target="_blank" rel="noreferrer">SwitchHosts | GitHub</a></p><h2 id="在-switchhosts-中使用远程配置文件" tabindex="-1">在 SwitchHosts 中使用远程配置文件 <a class="header-anchor" href="#在-switchhosts-中使用远程配置文件" aria-label="Permalink to &quot;在 SwitchHosts 中使用远程配置文件&quot;">​</a></h2><ol><li>打开 SwitchHosts</li><li>添加 hosts</li><li>选择类型为「远程」</li><li>URL 为以下链接 <ol><li><code>https://gitlab.com/ineo6/hosts/-/raw/master/hosts</code></li><li><code>https://raw.hellogithub.com/hosts</code></li></ol></li></ol><ul><li><a href="https://github.com/ineo6/hosts" target="_blank" rel="noreferrer">hosts | GitHub</a> 解决GitHub图片无法显示，加速GitHub网页浏览</li><li><a href="https://github.com/521xueweihan/GitHub520" target="_blank" rel="noreferrer">GitHub520 | GitHub</a> 让你“爱”上 GitHub，解决访问时图裂、加载慢的问题。（无需安装）</li></ul><h2 id="刷新本地-dns-缓存" tabindex="-1">刷新本地 DNS 缓存 <a class="header-anchor" href="#刷新本地-dns-缓存" aria-label="Permalink to &quot;刷新本地 DNS 缓存&quot;">​</a></h2><p>macOS</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">killall</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-HUP</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mDNSResponder</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Windows</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ipconfig</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/flushdns</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,22),o=[t];function i(r,p,c,h,u,d){return a(),n("div",null,o)}const B=s(l,[["render",i]]);export{m as __pageData,B as default};
