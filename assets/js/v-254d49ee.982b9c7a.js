"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[660],{8644:(e,l,i)=>{i.r(l),i.d(l,{data:()=>t});const t=JSON.parse('{"key":"v-254d49ee","path":"/interview/network/http.html","title":"HTTP","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"HTTP 协议的演变","slug":"http-协议的演变","children":[{"level":3,"title":"HTTP/0.9","slug":"http-0-9","children":[]},{"level":3,"title":"HTTP/1.0","slug":"http-1-0","children":[]},{"level":3,"title":"HTTP/1.1","slug":"http-1-1","children":[]},{"level":3,"title":"HTTP/2.0","slug":"http-2-0","children":[]},{"level":3,"title":"HTTP/3.0","slug":"http-3-0","children":[]}]},{"level":2,"title":"HTTP 状态码","slug":"http-状态码","children":[{"level":3,"title":"2XX 成功","slug":"_2xx-成功","children":[]},{"level":3,"title":"3XX 重定向","slug":"_3xx-重定向","children":[]},{"level":3,"title":"4XX 客户端错误","slug":"_4xx-客户端错误","children":[]},{"level":3,"title":"5XX 服务器错误","slug":"_5xx-服务器错误","children":[]}]}],"git":{"updatedTime":1659190757000},"filePathRelative":"interview/network/http.md"}')},1654:(e,l,i)=>{i.r(l),i.d(l,{default:()=>P});var t=i(6252);const o=(0,t._)("h1",{id:"http",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#http","aria-hidden":"true"},"#"),(0,t.Uk)(" HTTP")],-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("HTTP"),c=(0,t.Uk)(" 全称为 HyperText Transfer Protocol，即超文本传输协议，是一个用于传输超媒体文档(例如 "),a=(0,t._)("code",null,"HTML",-1),n=(0,t.Uk)(")的应用层协议"),h=(0,t.uE)('<div class="custom-container tip"><p class="custom-container-title">HTTP 协议的主要特点</p><ul><li>是一个应用层协议</li><li><strong>遵循经典的“客户端-服务端”模型</strong>(客户端发送请求，服务器返回响应)</li><li><strong>灵活可扩展</strong><ul><li>语义上的自由，只规定了报文的基本格式，报文里的各个组成部分可以由开发者任意定制</li><li>传输格式的多样性</li></ul></li><li><strong>无连接</strong>: 每完成一个请求就断开连接(HTTP/1.1 后默认开启长连接)</li><li><strong>无状态</strong>: HTTP 协议对于事务处理没有记忆能力(每个请求之间、浏览器和服务器之间都是相互独立毫无关联的)</li><li><strong>可靠传输</strong>: HTTP 协议是一个可靠的传输协议(基于 TCP/IP 协议)</li><li><strong>明文传输</strong>: 协议里的报文直接使用文本形式传输(HTTP/2.0 后改为二进制传输)</li></ul></div><h2 id="http-协议的演变" tabindex="-1"><a class="header-anchor" href="#http-协议的演变" aria-hidden="true">#</a> HTTP 协议的演变</h2>',2),s={href:"https://mp.weixin.qq.com/s/RuHaKgwpCMvPQeEwe31k2A",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("HTTP 协议演进与各版本特性"),u=(0,t.uE)('<h3 id="http-0-9" tabindex="-1"><a class="header-anchor" href="#http-0-9" aria-hidden="true">#</a> HTTP/0.9</h3><blockquote><p>1990 年问世</p></blockquote><p>功能简陋，只有一个 <code>GET</code> 方法，且只支持纯文本内容</p><h3 id="http-1-0" tabindex="-1"><a class="header-anchor" href="#http-1-0" aria-hidden="true">#</a> HTTP/1.0</h3><blockquote><p>1996 年 5 月正式发布</p></blockquote><ul><li>任何格式的内容都可以发送</li><li>请求和响应增加了头信息</li><li>新增方法: <code>POST HEAD</code></li><li>添加了状态码、多字符集支持、权限、缓存、内容编码等功能</li></ul><h3 id="http-1-1" tabindex="-1"><a class="header-anchor" href="#http-1-1" aria-hidden="true">#</a> HTTP/1.1</h3><blockquote><p>1997 年 1 月发布，是<strong>目前主流的 HTTP 协议版本</strong></p></blockquote><ul><li><strong>长连接</strong>: TCP 连接默认不关闭可以被多个请求复用</li><li><strong>管道机制</strong>: 在同一个 TCP 链接里面，客户端可以同时发送多个请求</li><li><strong>分块传输编码</strong></li><li>缓存处理: <code>Cache-Control</code> 和 <code>Etag/If-None-Match</code></li><li>断点续传</li><li>增加了 <code>TLS</code> 支持: 支持 <code>HTTPS</code> 传输</li><li>新增方法: <code>PUT PATCH OPTIONS DELETE</code></li></ul><div class="custom-container warning"><p class="custom-container-title">HTTP/1.1 缺点</p><ul><li>单路连接请求低效: 每个 TCP 连接只能对应一个 HTTP 请求</li><li>队头阻塞: 当顺序发送的请求序列中的一个请求因为某种原因被阻塞时，在后面排队的所有请求也一并被阻塞，会导致客户端迟迟收不到数据。</li><li>头信息冗余</li><li>只允许由客户端主动发起请求</li><li>明文传输</li></ul></div><h3 id="http-2-0" tabindex="-1"><a class="header-anchor" href="#http-2-0" aria-hidden="true">#</a> HTTP/2.0</h3><blockquote><p>2015 年发布</p></blockquote><ul><li><strong>二进制传输</strong>: 头信息和数据体都是二进制</li><li><strong>多路复用/二进制分帧</strong>: 在一个 TCP 连接中可以同时发送多个请求</li><li><strong>头部压缩</strong></li><li><strong>服务器推送</strong>: 允许服务器未经请求主动向客户端发送资源</li><li><strong>请求优先级</strong></li></ul><div class="custom-container warning"><p class="custom-container-title">HTTP/2.0 缺点</p><ul><li>建立连接时间长(本质上是 TCP 的问题)</li><li>没有彻底解决队头阻塞问题</li><li>弱网环境表现不佳</li></ul></div><h3 id="http-3-0" tabindex="-1"><a class="header-anchor" href="#http-3-0" aria-hidden="true">#</a> HTTP/3.0</h3><p>HTTP/3.0 又称为 HTTP Over QUIC，其弃用 TCP 协议，改为使用基于 UDP 协议的 QUIC 协议来实现</p><ul><li>实现了类似 TCP 的流量控制、传输可靠性的功能</li><li>实现了快速握手功能</li><li>集成了 TLS 加密功能</li><li>多路复用，彻底解决 TCP 中队头阻塞的问题</li></ul><h2 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> HTTP 状态码</h2><p><code>HTTP</code> 状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果。借助状态码，用户可以知道服务器端是正常处理了请求，还是出现了错误。</p><p>主要有以下 <code>5</code> 响应类别的状态码</p><ul><li><code>1XX</code> 是信息性状态码，表示接收的请求正在处理</li><li><code>2XX</code> 是成功状态码，表示请求正常处理完毕</li><li><code>3XX</code> 是重定向状态码，表示需要进行附加操作以完成请求</li><li><code>4XX</code> 是客户端错误状态码，表示服务器无法处理请求</li><li><code>5XX</code> 是服务器错误状态码，表示服务器处理请求出错</li></ul><h3 id="_2xx-成功" tabindex="-1"><a class="header-anchor" href="#_2xx-成功" aria-hidden="true">#</a> 2XX 成功</h3><ul><li><code>200 OK</code> 表示从客户端发来的请求在服务器端被正常处理</li><li><code>204 No Content</code> 表示请求成功但在返回的响应报文中不含实体的主体部分</li><li><code>206 Partial Content</code> 表示客户端进行了范围请求</li></ul><h3 id="_3xx-重定向" tabindex="-1"><a class="header-anchor" href="#_3xx-重定向" aria-hidden="true">#</a> 3XX 重定向</h3><ul><li><code>301 Moved Permanently</code> 永久性重定向，表示资源已被分配了新的 <code>URL</code></li><li><code>302 Found</code> 临时性重定向，表示资源临时被分配了新的 <code>URL</code></li><li><code>303 See Other</code> 表示资源存在着另一个 <code>URL</code>，应使用 <code>GET</code> 方法定向获取请求的资源</li><li><code>304 Not Modified</code> 表示客户端发送附带条件的请求时，服务器端允许请求访问资源但未满足条件的情况</li><li><code>307 Temporary Redirect</code> 临时重定向，和 <code>302 Found</code> 有着相同的含义</li></ul><h3 id="_4xx-客户端错误" tabindex="-1"><a class="header-anchor" href="#_4xx-客户端错误" aria-hidden="true">#</a> 4XX 客户端错误</h3><ul><li><code>400 Bad Request</code> 表示请求报文中存在语法错误</li><li><code>401 Unauthorized</code> 表示发送的请求需要有通过 <code>HTTP</code> 认证的认证信息</li><li><code>403 Forbidden</code> 表示对请求资源的访问被服务器拒绝</li><li><code>404 Not Found</code> 表示服务器上无法找到请求的资源</li></ul><h3 id="_5xx-服务器错误" tabindex="-1"><a class="header-anchor" href="#_5xx-服务器错误" aria-hidden="true">#</a> 5XX 服务器错误</h3><ul><li><code>500 Internal Server Error</code> 表示服务器端在执行请求时发生了错误</li><li><code>503 Service Unavailable</code> 表示服务器暂时处于超负载或正在进行停机维护，现在无法处理请求</li></ul>',29),p={},P=(0,i(3744).Z)(p,[["render",function(e,l){const i=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[o,(0,t._)("p",null,[(0,t._)("a",d,[r,(0,t.Wm)(i)]),c,a,n]),h,(0,t._)("p",null,[(0,t._)("a",s,[T,(0,t.Wm)(i)])]),u])}]])},3744:(e,l)=>{l.Z=(e,l)=>{const i=e.__vccOpts||e;for(const[e,t]of l)i[e]=t;return i}}}]);