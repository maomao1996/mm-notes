"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[691],{5570:(s,l,e)=>{e.r(l),e.d(l,{data:()=>n});const n=JSON.parse('{"key":"v-a262aafa","path":"/terminal/shell.html","title":"Shell 命令","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"echo","slug":"echo","children":[{"level":3,"title":"修改输出内容的样式","slug":"修改输出内容的样式","children":[]}]}],"git":{"updatedTime":1672392327000},"filePathRelative":"terminal/shell.md"}')},7555:(s,l,e)=>{e.r(l),e.d(l,{default:()=>o});var n=e(6252);const a=[(0,n.uE)('<h1 id="shell-命令" tabindex="-1"><a class="header-anchor" href="#shell-命令" aria-hidden="true">#</a> Shell 命令</h1><blockquote><p>一些自己常用 <code>shell</code> 命令的学习笔记</p></blockquote><h2 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h2><p>用于字符串的输出</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 输出普通字符</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;hello world&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 使用 -e 开启转义</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;这是第一行文本\\n这是第二行文本&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 输出变量（查看当前窗口使用的 shell）</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$SHELL</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 输出命令执行结果</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">`date`</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 将结果输出到文件中</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;hello world&#39;</span><span style="color:#D4D4D4;"> &gt; test.txt</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 将结果追加到文件中</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;hello world&#39;</span><span style="color:#D4D4D4;"> &gt;&gt; test.txt</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">echo &gt; 和 echo &gt;&gt; 的区别</p><ul><li>当文件不存在时都会创建文件</li><li>当文件存在时 <ul><li><strong><code>echo &gt;</code></strong> 会<strong>覆盖</strong>文件中的原有内容</li><li><strong><code>echo &gt;&gt;</code></strong> 会将结果<strong>追加</strong>到文件中</li></ul></li></ul></div><h3 id="修改输出内容的样式" tabindex="-1"><a class="header-anchor" href="#修改输出内容的样式" aria-hidden="true">#</a> 修改输出内容的样式</h3><p><code>ANSI</code> 转义序列是一些特殊的字符，它们可以用于修改文本的颜色、格式和其他外观属性。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 语法格式</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;\\033[背景颜色;字体颜色;显示方式m 需要输出的内容 \\033[0m&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 🌰 白底黑字</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;\\033[47;30m 白底黑字 \\033[0m&quot;</span></span>\n<span class="line"><span style="color:#6A9955;"># 🌰 黑底白字 高亮显示</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;\\033[30;37;1m 黑底白字 高亮显示 \\033[0m&quot;</span></span>\n<span class="line"><span style="color:#6A9955;"># 🌰 黑底白字带下划线</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> -e </span><span style="color:#CE9178;">&quot;\\033[30;37;4m 黑底白字带下划线 \\033[0m&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>\\033</code> 转义起始符，定义一个转义序列，（也可以使用 <code>\\e</code> 或 <code>\\E</code> 代替）</li><li><code>[</code> 表示开始定义颜色</li><li>背景颜色 范围 <code>40-47</code></li><li>字体颜色 范围 <code>30-37</code></li><li><code>m</code> 转义终止符，表示颜色定义完毕</li><li><code>\\033[0m</code> 表示关闭所有属性恢复默认样式</li></ul><h4 id="背景色和字体颜色" tabindex="-1"><a class="header-anchor" href="#背景色和字体颜色" aria-hidden="true">#</a> 背景色和字体颜色</h4><blockquote><p>背景色范围： 40 - 47</p><p>字体颜色范围： 30 - 37</p></blockquote><table><thead><tr><th></th><th>背景色</th><th>字体颜色</th></tr></thead><tbody><tr><td>黑色</td><td>40</td><td>30</td></tr><tr><td>红色</td><td>41</td><td>31</td></tr><tr><td>绿色</td><td>42</td><td>32</td></tr><tr><td>黄色</td><td>43</td><td>33</td></tr><tr><td>蓝色</td><td>44</td><td>34</td></tr><tr><td>紫色</td><td>45</td><td>35</td></tr><tr><td>深绿</td><td>46</td><td>36</td></tr><tr><td>白色</td><td>47</td><td>37</td></tr></tbody></table><h4 id="显示方式" tabindex="-1"><a class="header-anchor" href="#显示方式" aria-hidden="true">#</a> 显示方式</h4><ul><li><code>0</code> 关闭所有属性</li><li><code>1</code> 设置高亮显示</li><li><code>4</code> 设置下划线</li><li><code>5</code> 闪烁</li><li><code>7</code> 反显</li><li><code>8</code> 不可见</li></ul><h4 id="其他属性" tabindex="-1"><a class="header-anchor" href="#其他属性" aria-hidden="true">#</a> 其他属性</h4><ul><li><code>\\033[nA</code> 光标上移 n 行</li><li><code>\\033[nB</code> 光标下移 n 行</li><li><code>\\033[nC</code> 光标右移 n 列</li><li><code>\\033[nD</code> 光标左移 n 列</li><li><code>\\033[x;yH</code> 设置光标位置 x 行 y 列</li><li><code>\\033[2J</code> 清屏</li><li><code>\\033[K</code> 清除从光标到行尾的内容</li><li><code>\\033[s</code> 保存光标位置</li><li><code>\\033[u</code> 恢复光标位置</li><li><code>\\033[?25l</code> 隐藏光标</li><li><code>\\033[?25h</code> 显示光标</li></ul>',17)],d={},o=(0,e(3744).Z)(d,[["render",function(s,l){return(0,n.wg)(),(0,n.iD)("div",null,a)}]])},3744:(s,l)=>{l.Z=(s,l)=>{const e=s.__vccOpts||s;for(const[s,n]of l)e[s]=n;return e}}}]);