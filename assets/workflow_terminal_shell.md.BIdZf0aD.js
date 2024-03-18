import{_ as s,h as a,o as i,a9 as n}from"./chunks/framework.35Ps3iiG.js";const u=JSON.parse('{"title":"Shell 命令","description":"一些常用 shell 命令的学习笔记","frontmatter":{"description":"一些常用 shell 命令的学习笔记"},"headers":[],"relativePath":"workflow/terminal/shell.md","filePath":"workflow/terminal/shell.md","lastUpdated":1700821295000}'),l={name:"workflow/terminal/shell.md"},e=n(`<h1 id="shell-命令" tabindex="-1">Shell 命令 <a class="header-anchor" href="#shell-命令" aria-label="Permalink to &quot;Shell 命令&quot;">​</a></h1><blockquote><p>一些自己常用 <code>shell</code> 命令的学习笔记</p></blockquote><h2 id="echo-输出" tabindex="-1"><code>echo</code> 输出 <a class="header-anchor" href="#echo-输出" aria-label="Permalink to &quot;\`echo\` 输出&quot;">​</a></h2><p>用于字符串的输出</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出普通字符</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 -e 开启转义</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;这是第一行文本\\n这是第二行文本&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 -n 不换行输出</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出变量（查看当前窗口使用的 shell）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $SHELL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出命令执行结果</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将结果输出到文件中</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hello world&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将结果追加到文件中</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hello world&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">echo &gt; 和 echo &gt;&gt; 的区别</p><ul><li>当文件不存在时都会创建文件</li><li>当文件存在时 <ul><li><strong><code>echo &gt;</code></strong> 会<strong>覆盖</strong>文件中的原有内容</li><li><strong><code>echo &gt;&gt;</code></strong> 会将结果<strong>追加</strong>到文件中</li></ul></li></ul></div><h3 id="修改输出内容的样式" tabindex="-1">修改输出内容的样式 <a class="header-anchor" href="#修改输出内容的样式" aria-label="Permalink to &quot;修改输出内容的样式&quot;">​</a></h3><p><code>ANSI</code> 转义序列是一些特殊的字符，它们可以用于修改文本的颜色、格式和其他外观属性。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 语法格式</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[背景颜色;字体颜色;显示方式m 需要输出的内容 \\033[0m&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 🌰 白底黑字</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[47;30m 白底黑字 \\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 🌰 黑底白字 高亮显示</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[30;37;1m 黑底白字 高亮显示 \\033[0m&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 🌰 黑底白字带下划线</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\033[30;37;4m 黑底白字带下划线 \\033[0m&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><code>\\033</code> 转义起始符，定义一个转义序列，（也可以使用 <code>\\e</code> 或 <code>\\E</code> 代替）</li><li><code>[</code> 表示开始定义颜色</li><li>背景颜色 范围 <code>40-47</code></li><li>字体颜色 范围 <code>30-37</code></li><li><code>m</code> 转义终止符，表示颜色定义完毕</li><li><code>\\033[0m</code> 表示关闭所有属性恢复默认样式</li></ul><h4 id="背景色和字体颜色" tabindex="-1">背景色和字体颜色 <a class="header-anchor" href="#背景色和字体颜色" aria-label="Permalink to &quot;背景色和字体颜色&quot;">​</a></h4><blockquote><p>背景色范围： 40 - 47</p><p>字体颜色范围： 30 - 37</p></blockquote><table><thead><tr><th></th><th>背景色</th><th>字体颜色</th></tr></thead><tbody><tr><td>黑色</td><td>40</td><td>30</td></tr><tr><td>红色</td><td>41</td><td>31</td></tr><tr><td>绿色</td><td>42</td><td>32</td></tr><tr><td>黄色</td><td>43</td><td>33</td></tr><tr><td>蓝色</td><td>44</td><td>34</td></tr><tr><td>紫色</td><td>45</td><td>35</td></tr><tr><td>深绿</td><td>46</td><td>36</td></tr><tr><td>白色</td><td>47</td><td>37</td></tr></tbody></table><h4 id="显示方式" tabindex="-1">显示方式 <a class="header-anchor" href="#显示方式" aria-label="Permalink to &quot;显示方式&quot;">​</a></h4><ul><li><code>0</code> 关闭所有属性</li><li><code>1</code> 设置高亮显示</li><li><code>4</code> 设置下划线</li><li><code>5</code> 闪烁</li><li><code>7</code> 反显</li><li><code>8</code> 不可见</li></ul><h4 id="其他属性" tabindex="-1">其他属性 <a class="header-anchor" href="#其他属性" aria-label="Permalink to &quot;其他属性&quot;">​</a></h4><ul><li><code>\\033[nA</code> 光标上移 n 行</li><li><code>\\033[nB</code> 光标下移 n 行</li><li><code>\\033[nC</code> 光标右移 n 列</li><li><code>\\033[nD</code> 光标左移 n 列</li><li><code>\\033[x;yH</code> 设置光标位置 x 行 y 列</li><li><code>\\033[2J</code> 清屏</li><li><code>\\033[K</code> 清除从光标到行尾的内容</li><li><code>\\033[s</code> 保存光标位置</li><li><code>\\033[u</code> 恢复光标位置</li><li><code>\\033[?25l</code> 隐藏光标</li><li><code>\\033[?25h</code> 显示光标</li></ul><h2 id="cp-复制" tabindex="-1"><code>cp</code> 复制 <a class="header-anchor" href="#cp-复制" aria-label="Permalink to &quot;\`cp\` 复制&quot;">​</a></h2><p>用于复制文件或目录</p><blockquote><p>语法格式</p></blockquote><ul><li><code>cp [options] source_file target_file</code></li><li><code>cp [options] source_file ... target_directory</code></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制单个文件到指定目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制单个文件到指定目录并重命名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test/test1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制多个文件到指定目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test1.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test2.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制目录到指定目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制目录到指定目录并重命名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test1/test2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>复制目录时必须使用 <code>-r</code> 参数，否则会报错</p></div><p><strong>常用参数说明</strong>：</p><ul><li><code>-r</code> 递归复制目录</li><li><code>-i</code> 覆盖前提示</li><li><code>-f</code> 强制覆盖已存在的文件</li><li><code>-p</code> 保留文件的属性（权限、时间戳等）</li><li><code>-a</code> 递归复制目录，并保留文件属性（相当于同时使用 <code>-p</code> 和 <code>-r</code>）</li><li><code>-v</code> 显示详细的复制过程</li></ul><h2 id="mv-移动" tabindex="-1"><code>mv</code> 移动 <a class="header-anchor" href="#mv-移动" aria-label="Permalink to &quot;\`mv\` 移动&quot;">​</a></h2><p>用于移动文件或目录</p><blockquote><p>语法格式</p></blockquote><ul><li><code>mv [options] source target</code></li><li><code>mv [options] source... directory</code></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移动单个文件到指定目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移动单个文件到指定目录并重命名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test/test1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移动多个文件到指定目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test1.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test2.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移动目录到指定目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>当 <code>source</code> 为文件时，<code>target</code> 可以为文件或目录</li><li>当 <code>source</code> 为目录时，<code>target</code> 必须为目录</li><li>当 <code>target</code> 为目录时，<code>source</code> 会被移动到 <code>target</code> 目录下</li><li>当 <code>target</code> 已存在时，<code>source</code> 会覆盖 <code>target</code> 文件或目录</li><li>当 <code>target</code> 不存在时，<code>source</code> 会被重命名为 <code>target</code> 文件或目录</li></ul></div><p><strong>常用参数说明</strong>：</p><ul><li><code>-f</code> 强制移动文件或目录</li><li><code>-i</code> 覆盖前提示</li><li><code>-n</code> 不覆盖已存在的文件</li><li><code>-v</code> 显示详细的移动过程</li></ul>`,33),t=[e];function p(h,c,d,r,o,k){return i(),a("div",null,t)}const F=s(l,[["render",p]]);export{u as __pageData,F as default};
