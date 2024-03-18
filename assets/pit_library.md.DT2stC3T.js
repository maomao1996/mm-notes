import{_ as d,h as e,o,a9 as t}from"./chunks/framework.35Ps3iiG.js";const u=JSON.parse('{"title":"第三方库踩坑记录","description":"记录个人遇到或他人分享的第三方库相关踩坑记录","frontmatter":{"description":"记录个人遇到或他人分享的第三方库相关踩坑记录"},"headers":[],"relativePath":"pit/library.md","filePath":"pit/library.md","lastUpdated":1700821602000}'),c={name:"pit/library.md"},a=t('<h1 id="第三方库踩坑记录" tabindex="-1">第三方库踩坑记录 <a class="header-anchor" href="#第三方库踩坑记录" aria-label="Permalink to &quot;第三方库踩坑记录&quot;">​</a></h1><p>记录个人遇到或他人分享的第三方库相关踩坑记录</p><h2 id="moment-迁移到-dayjs" tabindex="-1"><code>moment</code> 迁移到 <code>dayjs</code> <a class="header-anchor" href="#moment-迁移到-dayjs" aria-label="Permalink to &quot;`moment` 迁移到 `dayjs`&quot;">​</a></h2><p>在做 <code>webpack</code> 构建优化时，会使用 <a href="https://github.com/ant-design/antd-dayjs-webpack-plugin" target="_blank" rel="noreferrer">antd-dayjs-webpack-plugin</a> 插件将 <code>moment</code> 替换为 <code>dayjs</code></p><p>在迁移时需要注意这些方法的部分参数不一致</p><ul><li><code>add</code> 增加时间</li><li><code>subtract</code> 减少时间</li><li><code>startOf</code> 开始时间</li><li><code>endOf</code> 结束时间</li></ul><table><thead><tr><th>描述</th><th><code>moment</code> 支持的参数</th><th><code>dayjs</code> 支持的参数</th></tr></thead><tbody><tr><td>年</td><td><code>years</code> <code>year</code> <code>Y</code> <code>y</code></td><td><code>years</code> <code>year</code> <code>y</code></td></tr><tr><td>月</td><td><code>months</code> <code>month</code> <code>M</code></td><td><code>months</code> <code>month</code> <code>M</code></td></tr><tr><td>周</td><td><code>weeks</code> <code>week</code> <code>w</code></td><td><code>weeks</code> <code>week</code> <code>w</code></td></tr><tr><td>日</td><td><code>days</code> <code>day</code> <code>d</code></td><td><code>days</code> <code>day</code> <code>d</code></td></tr><tr><td>时</td><td><code>hours</code> <code>hour</code> <code>H</code> <code>h</code></td><td><code>hours</code> <code>hour</code> <code>h</code></td></tr><tr><td>分</td><td><code>minutes</code> <code>minute</code> <code>m</code></td><td><code>minutes</code> <code>minute</code> <code>m</code></td></tr><tr><td>秒</td><td><code>seconds</code> <code>second</code> <code>s</code></td><td><code>seconds</code> <code>second</code> <code>s</code></td></tr><tr><td>毫秒</td><td><code>milliseconds</code> <code>millisecond</code> <code>ms</code></td><td><code>milliseconds</code> <code>millisecond</code> <code>ms</code></td></tr></tbody></table><ul><li><a href="https://momentjs.com/docs/#/manipulating/add/" target="_blank" rel="noreferrer">Moment.js 文档</a></li><li><a href="https://day.js.org/docs/en/manipulate/add" target="_blank" rel="noreferrer">Day.js 文档</a></li></ul>',8),r=[a];function s(n,i,l,m,h,p){return o(),e("div",null,r)}const y=d(c,[["render",s]]);export{u as __pageData,y as default};
