"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[873],{8203:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-21995a44","path":"/terminal/zsh.html","title":"Zsh","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"oh-my-zsh","slug":"oh-my-zsh","children":[]},{"level":2,"title":"zsh 插件","slug":"zsh-插件","children":[{"level":3,"title":"autojump","slug":"autojump","children":[]},{"level":3,"title":"z","slug":"z","children":[]},{"level":3,"title":"fast-syntax-highlighting","slug":"fast-syntax-highlighting","children":[]},{"level":3,"title":"zsh-autosuggestions","slug":"zsh-autosuggestions","children":[]}]},{"level":2,"title":"zsh 主题","slug":"zsh-主题","children":[{"level":3,"title":"powerlevel10k","slug":"powerlevel10k","children":[]}]},{"level":2,"title":"常用配置","slug":"常用配置","children":[]}],"git":{"updatedTime":1672904385000},"filePathRelative":"terminal/zsh.md"}')},8728:(s,n,a)=>{a.r(n),a.d(n,{default:()=>$});var l=a(6252);const e=(0,l.uE)('<h1 id="zsh" tabindex="-1"><a class="header-anchor" href="#zsh" aria-hidden="true">#</a> Zsh</h1><p>zsh 相关配置和好用的命令行工具</p><h2 id="oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh" aria-hidden="true">#</a> oh-my-zsh</h2><p>用于自定义 zsh 的配置</p><ol><li>主题配置</li><li>插件安装</li></ol><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">sh -c </span><span style="color:#CE9178;">&quot;$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span>\n<span class="line"><span style="color:#6A9955;"># OR 国内镜像</span></span>\n<span class="line"><span style="color:#D4D4D4;">sh -c </span><span style="color:#CE9178;">&quot;$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">omz update</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',9),p={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("Github"),o=(0,l._)("a",{href:"zsh"},"zsh 插件",-1),c=(0,l.uE)('<h2 id="zsh-插件" tabindex="-1"><a class="header-anchor" href="#zsh-插件" aria-hidden="true">#</a> zsh 插件</h2><h3 id="autojump" tabindex="-1"><a class="header-anchor" href="#autojump" aria-hidden="true">#</a> autojump</h3><p>用于常用目录间的快速跳转（通过维护命令行中最常用的目录的数据库来工作）</p><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 推荐</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew install autojump</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">git clone --depth=1 git://github.com/joelthelion/autojump.git</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> autojump</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">./install.py or ./uninstall.py</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),r={href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"},t=(0,l.Uk)("Github"),d=(0,l.uE)('<h3 id="z" tabindex="-1"><a class="header-anchor" href="#z" aria-hidden="true">#</a> z</h3><p>和 <code>autojump</code> 功能一致，是 <code>oh-my-zsh</code> 内置插件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 在 ~/.zshrc 中配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">plugins=(其他插件 z)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 使配置生效</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),u={href:"https://github.com/rupa/z",target:"_blank",rel:"noopener noreferrer"},D=(0,l.Uk)("Github"),h=(0,l.uE)('<h3 id="fast-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#fast-syntax-highlighting" aria-hidden="true">#</a> fast-syntax-highlighting</h3><p>终端语法高亮显示</p><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># clone</span></span>\n<span class="line"><span style="color:#D4D4D4;">git clone --depth=1 https://github.com/zdharma-continuum/fast-syntax-highlighting.git </span><span style="color:#9CDCFE;">${ZSH_CUSTOM</span><span style="color:#D4D4D4;">:-</span><span style="color:#9CDCFE;">$HOME</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">.oh-my-zsh</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">custom}</span><span style="color:#D4D4D4;">/plugins/fast-syntax-highlighting</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 在 ~/.zshrc 中配置(在 plugins 的最后面加上 fast-syntax-highlighting)</span></span>\n<span class="line"><span style="color:#D4D4D4;">plugins=(其他插件 fast-syntax-highlighting)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 使配置生效</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),v={href:"https://github.com/zdharma-continuum/fast-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"},y=(0,l.Uk)("Github"),m=(0,l.uE)('<h3 id="zsh-autosuggestions" tabindex="-1"><a class="header-anchor" href="#zsh-autosuggestions" aria-hidden="true">#</a> zsh-autosuggestions</h3><p>根据您的历史记录和完成情况建议您键入的命令</p><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># clone</span></span>\n<span class="line"><span style="color:#D4D4D4;">git clone --depth=1 git://github.com/zsh-users/zsh-autosuggestions </span><span style="color:#9CDCFE;">$ZSH_CUSTOM</span><span style="color:#D4D4D4;">/plugins/zsh-autosuggestions</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 在 ~/.zshrc 中配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">plugins=(其他插件 zsh-autosuggestions)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 使配置生效</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),b={href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("Github"),C=(0,l.uE)('<h2 id="zsh-主题" tabindex="-1"><a class="header-anchor" href="#zsh-主题" aria-hidden="true">#</a> zsh 主题</h2><h3 id="powerlevel10k" tabindex="-1"><a class="header-anchor" href="#powerlevel10k" aria-hidden="true">#</a> powerlevel10k</h3><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git clone --depth=1 https://github.com/romkatv/powerlevel10k.git </span><span style="color:#9CDCFE;">${ZSH_CUSTOM</span><span style="color:#D4D4D4;">:-</span><span style="color:#9CDCFE;">$HOME</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">.oh-my-zsh</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">custom}</span><span style="color:#D4D4D4;">/themes/powerlevel10k</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 在 ~/.zshrc 中配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">ZSH_THEME=</span><span style="color:#CE9178;">&quot;powerlevel10k/powerlevel10k&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 使配置生效</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p>',5),E=(0,l.Uk)("使用 "),A={href:"/software/mac.html#iterm2",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("iTerm2"),z=(0,l.Uk)(" 可自动安装所需字体"),f=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">p10k configure</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修复 <code>vscode</code> 终端图标乱码，修改 <code>terminal.integrated.fontFamily</code> 为 <code>&quot;MesloLGS NF&quot;</code></p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&quot;terminal.integrated.fontFamily&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;MesloLGS NF&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git -C </span><span style="color:#9CDCFE;">${ZSH_CUSTOM</span><span style="color:#D4D4D4;">:-</span><span style="color:#9CDCFE;">$HOME</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">.oh-my-zsh</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">custom}</span><span style="color:#D4D4D4;">/themes/powerlevel10k pull</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看当前配置使用的图标</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">get_icon_names</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自定义配置</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 打开 p10k 配置文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">code ~/.p10k.zsh</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 修改 POWERLEVEL9K_LEFT_PROMPT_ELEMENTS 和 POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS 的配置</span></span>\n<span class="line"><span style="color:#6A9955;"># 比如显示当前使用的 node 版本</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 使配置生效</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9),q={href:"https://github.com/romkatv/powerlevel10k",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("Github"),x=(0,l.uE)('<h2 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置" aria-hidden="true">#</a> 常用配置</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 主题</span></span>\n<span class="line"><span style="color:#D4D4D4;">ZSH_THEME=</span><span style="color:#CE9178;">&quot;powerlevel10k/powerlevel10k&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 历史命令显示时间</span></span>\n<span class="line"><span style="color:#D4D4D4;">HIST_STAMPS=</span><span style="color:#CE9178;">&quot;yyyy-mm-dd&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 插件配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">plugins=(git autojump vscode brew node npm yarn web-search zsh-autosuggestions fast-syntax-highlighting)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 常用别名</span></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> p=</span><span style="color:#CE9178;">&quot;pnpm&quot;</span></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> pnpx=</span><span style="color:#CE9178;">&quot;pnpm dlx&quot;</span></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> d=</span><span style="color:#CE9178;">&quot;yarn dev&quot;</span></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> s=</span><span style="color:#CE9178;">&quot;yarn start&quot;</span></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> b=</span><span style="color:#CE9178;">&quot;yarn build&quot;</span></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> t=</span><span style="color:#CE9178;">&quot;yarn test&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> glogp=</span><span style="color:#CE9178;">&quot;git log --pretty=&#39;%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)&#39;&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> cat=</span><span style="color:#CE9178;">&quot;bat&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 代理相关</span></span>\n<span class="line"><span style="color:#DCDCAA;">proxy</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">export</span><span style="color:#D4D4D4;"> ALL_PROXY=socks5://127.0.0.1:1086</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;\\033[32m已开启终端代理\\033[0m&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DCDCAA;">unproxy</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">unset</span><span style="color:#D4D4D4;"> ALL_PROXY</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;\\033[32m已关闭终端代理\\033[0m&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 修改 github 用户名和邮箱地址（防止造成用公司信息提交到 github 的尴尬）</span></span>\n<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [[ -d .git ]]; </span><span style="color:#C586C0;">then</span></span>\n<span class="line"><span style="color:#D4D4D4;">  githubName=</span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># github 用户名</span></span>\n<span class="line"><span style="color:#D4D4D4;">  githubEmail=</span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># github 邮箱地址</span></span>\n<span class="line"><span style="color:#D4D4D4;">  url=</span><span style="color:#CE9178;">$(git remote get-url origin)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  localName=</span><span style="color:#CE9178;">$(git config user.name)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  localEmail=</span><span style="color:#CE9178;">$(git config user.email)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 只判断 github 仓库，根据需要修改（判断字符建议写长点）</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [[ </span><span style="color:#9CDCFE;">$url</span><span style="color:#D4D4D4;"> =~ </span><span style="color:#CE9178;">&quot;github.com/maomao1996&quot;</span><span style="color:#D4D4D4;"> ]]; </span><span style="color:#C586C0;">then</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;"># 提示当前为 github 项目（不需要就注释）</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;\\033[34m当前为 github 项目\\033[0m&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [[ </span><span style="color:#9CDCFE;">$githubName</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">$githubName</span><span style="color:#D4D4D4;"> != </span><span style="color:#9CDCFE;">$localName</span><span style="color:#D4D4D4;"> ]]; </span><span style="color:#C586C0;">then</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">$(git config user.name &quot;</span><span style="color:#9CDCFE;">$githubName</span><span style="color:#CE9178;">&quot;)</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;已将当前仓库的 name 从\\033[33m </span><span style="color:#9CDCFE;">$localName</span><span style="color:#CE9178;"> \\033[0m修改为\\033[32m </span><span style="color:#9CDCFE;">$githubName</span><span style="color:#CE9178;"> \\033[0m&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">fi</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> [[ </span><span style="color:#9CDCFE;">$githubEmail</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">$githubEmail</span><span style="color:#D4D4D4;"> != </span><span style="color:#9CDCFE;">$localEmail</span><span style="color:#D4D4D4;"> ]]; </span><span style="color:#C586C0;">then</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">$(git config user.email &quot;</span><span style="color:#9CDCFE;">$githubEmail</span><span style="color:#CE9178;">&quot;)</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;已将当前仓库的 email 从\\033[33m </span><span style="color:#9CDCFE;">$localEmail</span><span style="color:#CE9178;"> \\033[0m修改为\\033[32m </span><span style="color:#9CDCFE;">$githubEmail</span><span style="color:#CE9178;"> \\033[0m&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">fi</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">fi</span></span>\n<span class="line"><span style="color:#C586C0;">fi</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),F={},$=(0,a(3744).Z)(F,[["render",function(s,n){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[e,(0,l._)("p",null,[(0,l._)("a",p,[i,(0,l.Wm)(a)]),o]),c,(0,l._)("p",null,[(0,l._)("a",r,[t,(0,l.Wm)(a)])]),d,(0,l._)("p",null,[(0,l._)("a",u,[D,(0,l.Wm)(a)])]),h,(0,l._)("p",null,[(0,l._)("a",v,[y,(0,l.Wm)(a)])]),m,(0,l._)("p",null,[(0,l._)("a",b,[g,(0,l.Wm)(a)])]),C,(0,l._)("blockquote",null,[(0,l._)("p",null,[E,(0,l._)("a",A,[k,(0,l.Wm)(a)]),z])]),f,(0,l._)("p",null,[(0,l._)("a",q,[_,(0,l.Wm)(a)])]),x])}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,l]of n)a[s]=l;return a}}}]);