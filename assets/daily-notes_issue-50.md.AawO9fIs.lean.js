import{_ as e,h as i,a8 as a,o}from"./chunks/framework.BU7NHiAd.js";const u=JSON.parse('{"title":"从 VSCode 迁移到 Cursor","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-50.md","filePath":"daily-notes/issue-50.md","lastUpdated":null}'),l={name:"daily-notes/issue-50.md"};function t(n,s,r,d,c,p){return o(),i("div",null,s[0]||(s[0]=[a('<h1 id="从-vscode-迁移到-cursor" tabindex="-1">从 VSCode 迁移到 Cursor <a class="header-anchor" href="#从-vscode-迁移到-cursor" aria-label="Permalink to &quot;从 VSCode 迁移到 Cursor&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/50" target="_blank" rel="noreferrer">从 VSCode 迁移到 Cursor | GitHub</a></p></div><blockquote><p>记录下最近从 VSCode 迁移到 Cursor 的配置过程</p></blockquote><p><a href="https://www.cursor.com/" target="_blank" rel="noreferrer">Cursor</a> 是一款专为 AI 编程而构建的代码编辑器，它将 AI 助手集成到编辑器中，提供智能的代码补全、建议和解释，帮助开发者提高编码效率和代码质量</p><h2 id="修改活动栏布局" tabindex="-1">修改活动栏布局 <a class="header-anchor" href="#修改活动栏布局" aria-label="Permalink to &quot;修改活动栏布局&quot;">​</a></h2><p>Cursor 的活动栏默认是水平的，用起来很别扭</p><ol><li>打开 VSCode，按 <code>Ctrl/⌘ + ,</code> 打开设置</li><li>设置 <code>workbench.activityBar.orientation</code> 为 <code>vertical</code></li></ol><blockquote><p><code>Ctrl</code> 为 Windows 下的快捷键，<code>⌘</code> 为 Mac 下的快捷键</p></blockquote><h2 id="迁移-vscode-的扩展、主题、设置、和快捷键" tabindex="-1">迁移 VSCode 的扩展、主题、设置、和快捷键 <a class="header-anchor" href="#迁移-vscode-的扩展、主题、设置、和快捷键" aria-label="Permalink to &quot;迁移 VSCode 的扩展、主题、设置、和快捷键&quot;">​</a></h2><blockquote><p>以下操作均在 Cursor 中完成</p></blockquote><p>根据官网文档 <a href="https://docs.cursor.com/get-started/migrate-from-vscode" target="_blank" rel="noreferrer">Migrate from VS Code</a> 的指引，操作步骤如下：</p><ol><li>按 <code>Ctrl/⌘ + Shift + J</code> 打开设置</li><li>点击 <code>VS Code Import</code> 栏下的 <code>Import</code> 按钮</li></ol><p>导入后发现如下问题</p><ul><li><code>settings.json</code> 文件中丢失了注释</li><li>未导入代码片段</li><li>扩展导入不全 <ul><li>很多扩展导入后无法正常使用（插件文件已导入，但扩展列表中没有）</li></ul></li></ul><p>经过一番折腾，发现还是手动导入好</p><h3 id="手动导入-settings-json-和代码片段" tabindex="-1">手动导入 <code>settings.json</code> 和代码片段 <a class="header-anchor" href="#手动导入-settings-json-和代码片段" aria-label="Permalink to &quot;手动导入 `settings.json` 和代码片段&quot;">​</a></h3><h4 id="方案一-直接复制文件" tabindex="-1">方案一：直接复制文件 <a class="header-anchor" href="#方案一-直接复制文件" aria-label="Permalink to &quot;方案一：直接复制文件&quot;">​</a></h4><p><strong>目录说明</strong></p><ul><li><strong>Mac</strong><ul><li><strong>VSCode 目录</strong> <code>/Users/电脑用户名/Library/Application Support/Code/User/</code></li><li><strong>Cursor 目录</strong> <code>/Users/电脑用户名/Library/Application Support/Cursor/User/</code></li></ul></li><li><strong>Windows</strong><ul><li><strong>VSCode 目录</strong> <code>C:\\Users\\电脑用户名\\AppData\\Roaming\\Code\\User</code></li><li><strong>Cursor 目录</strong> <code>C:\\Users\\电脑用户名\\AppData\\Roaming\\Cursor\\User</code></li></ul></li></ul><p><strong>文件说明</strong></p><ul><li><code>settings.json</code>：用户的设置文件</li><li><code>snippets</code>：用户的全局代码片段</li><li><code>keybindings.json</code>：用户的自定义快捷键配置</li></ul><h4 id="方案二-在编辑器打开对应配置文件再复制" tabindex="-1">方案二：在编辑器打开对应配置文件再复制 <a class="header-anchor" href="#方案二-在编辑器打开对应配置文件再复制" aria-label="Permalink to &quot;方案二：在编辑器打开对应配置文件再复制&quot;">​</a></h4><blockquote><p>适合文件较少的配置</p></blockquote><ul><li>打开 <code>settings.json</code> 文件 <ul><li>打开 VSCode，按 <code>Ctrl/⌘ + ,</code> 打开设置</li><li>点击右上角的 <code>打开设置 / Open Settings (JSON)</code></li></ul></li><li>打开代码片段文件 <ul><li>点击左下角的设置按钮</li><li></li></ul></li></ul><ol><li>打开 VSCode，按 <code>Ctrl/⌘ + ,</code> 打开设置</li><li>点击右上角的 <code>打开设置 / Open Settings (JSON)</code></li><li>复制 <code>settings.json</code> 文件中的内容</li><li>打开 Cursor，按 <code>Ctrl/⌘ + ,</code> 打开设置</li><li>点击右上角的 <code>打开设置 / Open Settings (JSON)</code></li><li>将复制的内容粘贴到打开的 <code>settings.json</code> 文件中</li></ol><h3 id="手动导入扩展" tabindex="-1">手动导入扩展 <a class="header-anchor" href="#手动导入扩展" aria-label="Permalink to &quot;手动导入扩展&quot;">​</a></h3><p><strong>1. 获取 VSCode 的扩展列表</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">code</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list-extensions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/vscode_extensions.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>获取后可以编辑 <code>vscode_extensions.txt</code> 文件挑选需要的扩展</p><p><strong>2. 在 Cursor 中安装扩展</strong></p><p>使用 <code>while</code> 循环逐行读取扩展列表并安装</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> read</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extension</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  cursor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install-extension</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$extension</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME/vscode_extensions.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>--force</code> 参数用于强制安装扩展</li><li>安装完成后，运行 <code>rm $HOME/vscode_extensions.txt</code> 删除扩展列表文件</li></ul><p><strong>一键迁移命令</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">code</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list-extensions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> read</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extension</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  cursor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install-extension</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$extension</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="扩展安装失败" tabindex="-1">扩展安装失败 <a class="header-anchor" href="#扩展安装失败" aria-label="Permalink to &quot;扩展安装失败&quot;">​</a></h4><p>使用上述命令后，还是会有些扩展安装失败，需要手动安装</p><blockquote><p>命令行提示找不到扩展</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/maomao1996/daily-notes/static/50/50-1.png" alt="命令行提示找不到扩展" loading="lazy"></p><blockquote><p>手动搜索是可以的</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/maomao1996/daily-notes/static/50/50-2.png" alt="手动搜索是可以的" loading="lazy"></p><h3 id="语言包" tabindex="-1">语言包 <a class="header-anchor" href="#语言包" aria-label="Permalink to &quot;语言包&quot;">​</a></h3><p>迁移插件时不会迁移语言包，需要手动安装</p><blockquote><p>安装语言包</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cursor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install-extension</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MS-CEINTL.vscode-language-pack-zh-hans</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>修改设置</p></blockquote><ol><li>打开设置面板 <code>Ctrl/⌘ + Shift + P</code></li><li>输入 <code>Configure Display Language</code></li><li>选择 <code>zh-cn</code></li></ol><h2 id="cursor-使用技巧" tabindex="-1">Cursor 使用技巧 <a class="header-anchor" href="#cursor-使用技巧" aria-label="Permalink to &quot;Cursor 使用技巧&quot;">​</a></h2><h3 id="ai-快捷键" tabindex="-1">AI 快捷键 <a class="header-anchor" href="#ai-快捷键" aria-label="Permalink to &quot;AI 快捷键&quot;">​</a></h3><ul><li><code>Ctrl/⌘ + K</code> 在光标处插入 AI 生成的代码</li><li><code>Ctrl/⌘ + I</code> 对选中的代码进行快速智能编辑和补全，直接在编辑器中显示建议</li><li><code>Ctrl/⌘ + Shift + I</code> 打开独立的智能编辑面板，提供更详细的编辑建议和交互选项（功能和 <code>Ctrl/⌘ + I</code> 一样）</li><li><code>Ctrl/⌘ + L</code> 打开 AI 聊天面板,可以与 AI 进行对话交互</li></ul><h4 id="聊天中的-符号" tabindex="-1">聊天中的 <code>@</code> 符号 <a class="header-anchor" href="#聊天中的-符号" aria-label="Permalink to &quot;聊天中的 `@` 符号&quot;">​</a></h4><p>在 AI 对话框中可以使用 <code>@</code> 符合添加对应上下文</p><ul><li><code>@Files</code> 引入文件，使用文件内容进行 AI 分析</li><li><code>@Folders</code> 引入文件夹，可以让 AI 了解整个项目结构</li><li><code>@Code</code> 当前选中的代码，将选中的代码片段发送给 AI 分析</li><li><code>@Docs</code> 引用内置的第三方文档内容进行 AI 分析</li><li><code>@Git</code> 引入 Git 相关信息，如提交历史、分支等</li><li><code>@Codebase</code> 引入整个代码库的上下文，让 AI 了解项目全貌</li><li><code>@Web</code> 允许 AI 访问网络资源获取信息</li><li><code>@Chat</code> 引用之前的对话内容</li><li><code>@Definitions</code> 引入代码中的定义，如函数、类等</li></ul><h3 id="提示词" tabindex="-1">提示词 <a class="header-anchor" href="#提示词" aria-label="Permalink to &quot;提示词&quot;">​</a></h3><p><a href="https://cursor.directory/" target="_blank" rel="noreferrer">Cursor Directory</a> 收录了大量 Cursor 的提示词，可以参考使用</p><h3 id="cursorignore-文件" tabindex="-1"><code>.cursorignore</code> 文件 <a class="header-anchor" href="#cursorignore-文件" aria-label="Permalink to &quot;`.cursorignore` 文件&quot;">​</a></h3><p>Cursor 会根据 <code>.cursorignore</code> 文件中的内容忽略一些文件或文件夹，可以用来排除一些不希望被 AI 分析的文件</p><ul><li>官网文档 <a href="https://docs.cursor.com/context/ignore-files" target="_blank" rel="noreferrer">Ignore Files | Cursor</a></li></ul>',58)]))}const k=e(l,[["render",t]]);export{u as __pageData,k as default};
