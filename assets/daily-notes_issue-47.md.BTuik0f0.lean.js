import{_ as a,h as i,a8 as n,o as e}from"./chunks/framework.BU7NHiAd.js";const c=JSON.parse('{"title":"在 GitHub Actions 中触发其他仓库的 Actions","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-47.md","filePath":"daily-notes/issue-47.md","lastUpdated":null}'),l={name:"daily-notes/issue-47.md"};function p(t,s,h,r,k,o){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="在-github-actions-中触发其他仓库的-actions" tabindex="-1">在 GitHub Actions 中触发其他仓库的 Actions <a class="header-anchor" href="#在-github-actions-中触发其他仓库的-actions" aria-label="Permalink to &quot;在 GitHub Actions 中触发其他仓库的 Actions&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/47" target="_blank" rel="noreferrer">在 GitHub Actions 中触发其他仓库的 Actions | GitHub</a></p></div><p>为了偷懒，在发布日常笔记时能够自动触发博客的构建和部署</p><blockquote><p>以茂茂的两个笔记仓库举 🌰</p></blockquote><ul><li><strong>源仓库</strong>: 日常笔记仓库 <a href="https://github.com/maomao1996/daily-notes" target="_blank" rel="noreferrer">https://github.com/maomao1996/daily-notes</a></li><li><strong>目标仓库</strong>: 博客仓库 <a href="https://github.com/maomao1996/mm-notes" target="_blank" rel="noreferrer">https://github.com/maomao1996/mm-notes</a></li></ul><h2 id="生成并添加-github-个人访问令牌" tabindex="-1">生成并添加 GitHub 个人访问令牌 <a class="header-anchor" href="#生成并添加-github-个人访问令牌" aria-label="Permalink to &quot;生成并添加 GitHub 个人访问令牌&quot;">​</a></h2><ol><li>请参考 GitHub 官方文档：<a href="https://docs.github.com/zh/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#%E5%88%9B%E5%BB%BA-personal-access-token" target="_blank" rel="noreferrer">创建 personal access token</a>（<strong>确保选中了 <code>workflows</code> 权限</strong>）</li><li>将生成的 GitHub 个人访问令牌添加到源仓库的 Secrets 中</li></ol><p>详细教程请查看 <a href="https://notes.fe-mm.com/workflow/git/#%E9%85%8D%E7%BD%AE-secrets" target="_blank" rel="noreferrer">配置 Secrets | 茂茂物语</a></p><h2 id="在源仓库中创建工作流" tabindex="-1">在源仓库中创建工作流 <a class="header-anchor" href="#在源仓库中创建工作流" aria-label="Permalink to &quot;在源仓库中创建工作流&quot;">​</a></h2><p>在源仓库中创建或修改已有的 GitHub Actions 工作流文件，例如 <code>.github/workflows/trigger-notes-workflow.yml</code>，内容如下：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Trigger Notes Actions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 手动触发</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  issues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">opened</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建 issue 时触发</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  trigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Repository Dispatch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">peter-evans/repository-dispatch@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">maomao1996/mm-notes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          event-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build-and-deploy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>这里使用 <a href="https://github.com/peter-evans/repository-dispatch" target="_blank" rel="noreferrer">repository-dispatch</a> 直接触发目标仓库的 Actions</p><h2 id="在目标仓库配置响应的工作流" tabindex="-1">在目标仓库配置响应的工作流 <a class="header-anchor" href="#在目标仓库配置响应的工作流" aria-label="Permalink to &quot;在目标仓库配置响应的工作流&quot;">​</a></h2><p>在目标仓库中创建或修改已有的 GitHub Actions 工作流文件，内容如下：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GitHub Actions Build and Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  repository_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build-and-deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build-and-deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 添加其他步骤，如安装依赖、构建等</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><code>on: repository_dispatch: types: [build-and-deploy]</code>：监听来自 <code>repository_dispatch</code> 的自定义事件 <code>build-and-deploy</code></li></ul><hr><p>按照以上步骤配置后，每当源仓库满足触发条件时，目标仓库的构建和部署流程将自动启动</p>`,18)]))}const E=a(l,[["render",p]]);export{c as __pageData,E as default};
