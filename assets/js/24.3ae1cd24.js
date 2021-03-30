(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{469:function(t,e,r){"use strict";r.r(e);var a=r(31),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mac-平台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mac-平台"}},[t._v("#")]),t._v(" Mac 平台")]),t._v(" "),r("h2",{attrs:{id:"homebrew"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[t._v("#")]),t._v(" Homebrew")]),t._v(" "),r("p",[t._v("Mac 上安装命令行程序最好的工具")]),t._v(" "),r("p",[t._v("安装")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("/bin/bash -c "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),r("p",[t._v("切换镜像")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换 brew.git")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("brew --repo"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换 homebrew-core.git")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("brew --repo"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/Library/Taps/homebrew/homebrew-core"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 刷新")]),t._v("\nbrew update\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换 homebrew-bottles")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前 shell")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$SHELL")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bash 版本")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bash_profile\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.bash_profile\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Zsh 版本")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshrc\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.zshrc\n")])])]),r("p",[t._v("切换镜像详细可查看"),r("a",{attrs:{href:"https://developer.aliyun.com/mirror/homebrew?spm=a2c6h.13651102.0.0.e40a1b11ZkPX9D",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云 Homebrew 镜像"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/Homebrew",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"iterm2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iterm2"}},[t._v("#")]),t._v(" iTerm2")]),t._v(" "),r("p",[t._v("Mac 上最好用的终端")]),t._v(" "),r("ol",[r("li",[t._v("支持子窗口")]),t._v(" "),r("li",[t._v("自动补全")]),t._v(" "),r("li",[t._v("查看粘贴历史")]),t._v(" "),r("li",[t._v("自定义配置项")])]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有的 shell")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/shells\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前窗口使用的 shell")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$SHELL")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看系统用户默认的 shell")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/passwd "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换系统默认 shell")]),t._v("\nchsh -s /bin/zsh\n")])])]),r("p",[r("a",{attrs:{href:"https://github.com/gnachman/iTerm2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://www.iterm2.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"效率神器-alfred"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#效率神器-alfred"}},[t._v("#")]),t._v(" 效率神器 Alfred")]),t._v(" "),r("ol",[r("li",[t._v("定位文件、打开文件")]),t._v(" "),r("li",[t._v("打开网址、书签、App")]),t._v(" "),r("li",[t._v("自定义搜索")]),t._v(" "),r("li",[t._v("查看剪贴板历史")]),t._v(" "),r("li",[t._v("计算器、查词典、运行 "),r("code",[t._v("shell")]),t._v(" 命令")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.alfredapp.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"mac-微信的功能拓展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mac-微信的功能拓展"}},[t._v("#")]),t._v(" Mac 微信的功能拓展")]),t._v(" "),r("ol",[r("li",[t._v("消息防撤回")]),t._v(" "),r("li",[t._v("免认证登录与多开")]),t._v(" "),r("li",[t._v("退群监控")]),t._v(" "),r("li",[t._v("屏蔽更新")])]),t._v(" "),r("p",[t._v("安装")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装小助手")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- -L https://raw.githubusercontent.com/lmk123/oh-my-wechat/master/install.sh "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -s\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR 推荐")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- -L https://omw.limingkai.cn/install.sh "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -s\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新小助手")]),t._v("\nomw\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 微信在自动更新后会删除小助手，可运行以下命令恢复")]),t._v("\nomw -n\n")])])]),r("p",[r("a",{attrs:{href:"https://github.com/MustangYM/WeChatExtension-ForMac",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"iina"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iina"}},[t._v("#")]),t._v(" IINA")]),t._v(" "),r("p",[t._v("视频播放器")]),t._v(" "),r("ol",[r("li",[t._v("界面简洁、美观，契合 macOS 设计风格")]),t._v(" "),r("li",[t._v("功能强大，设置以播放体验为中心")]),t._v(" "),r("li",[t._v("支持鼠标和触控板手势")]),t._v(" "),r("li",[t._v("在线字幕、缩略图预览、画中画等")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/iina/iina",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://iina.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"ezip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ezip"}},[t._v("#")]),t._v(" eZip")]),t._v(" "),r("p",[t._v("专为 macOS 而设计的压缩软件")]),t._v(" "),r("ol",[r("li",[t._v("界面简洁、美观，完美兼容 Mojave")]),t._v(" "),r("li",[t._v("支持超过 20 种压缩格式")]),t._v(" "),r("li",[t._v("批量文件加密")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://ezip.awehunt.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"腾讯柠檬清理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#腾讯柠檬清理"}},[t._v("#")]),t._v(" 腾讯柠檬清理")]),t._v(" "),r("ol",[r("li",[t._v("界面简洁清新")]),t._v(" "),r("li",[t._v("支持垃圾清理、文件查重、软件卸载")]),t._v(" "),r("li",[t._v("支持微信、QQ、XCode、Sketch 深度扫描清理")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://lemon.qq.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"截图神器-ishot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#截图神器-ishot"}},[t._v("#")]),t._v(" 截图神器 IShot")]),t._v(" "),r("ol",[r("li",[t._v("区域截图、窗口截图、多窗口截图、延时截图、长截图、滚动截图")]),t._v(" "),r("li",[t._v("快速标注(矩形、圆形、横线、箭头、画笔、马赛克、文字标记、序号标签、局部高亮)")]),t._v(" "),r("li",[t._v("支持截图导圆角、阴影调节")]),t._v(" "),r("li",[t._v("贴图、取色")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.better365.cn/ishot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://apps.apple.com/cn/app/ishot-%E6%88%AA%E5%9B%BE-%E5%BD%95%E5%B1%8F-2020%E5%85%A8%E6%96%B0%E9%AB%98%E5%BA%A6/id1485844094",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Store"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"超级右键-irightmouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超级右键-irightmouse"}},[t._v("#")]),t._v(" 超级右键 iRightMouse")]),t._v(" "),r("ol",[r("li",[t._v("多种格式的右键新建文件")]),t._v(" "),r("li",[t._v("快速移动文件")]),t._v(" "),r("li",[t._v("常用目录设置")]),t._v(" "),r("li",[t._v("快速打开终端、vscode 等")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.better365.cn/irightmouse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://apps.apple.com/cn/app/irightmouse-%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AE/id1497428978",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Store"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"翻译软件-bob"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#翻译软件-bob"}},[t._v("#")]),t._v(" 翻译软件 Bob")]),t._v(" "),r("ol",[r("li",[t._v("支持划词、截图、输入翻译")]),t._v(" "),r("li",[t._v("支持翻译多开")]),t._v(" "),r("li",[t._v("自动识别语种")]),t._v(" "),r("li",[t._v("可自定义插件")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ripperhe/Bob",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://ripperhe.gitee.io/bob",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件官网"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);