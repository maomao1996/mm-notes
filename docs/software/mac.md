---
sidebarDepth: 2
---

# Mac 平台

## Homebrew

Mac 上安装命令行程序最好的工具

安装

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

切换镜像

```sh
# 切换 brew.git
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 切换 homebrew-core.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 刷新
brew update

# 切换 homebrew-bottles
# 查看当前 shell
echo $SHELL

# Bash 版本
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile

# Zsh 版本
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

切换镜像详细可查看[阿里云 Homebrew 镜像](https://developer.aliyun.com/mirror/homebrew?spm=a2c6h.13651102.0.0.e40a1b11ZkPX9D)

[Github](https://github.com/Homebrew)
[软件官网](https://brew.sh/index_zh-cn)

## iTerm2

Mac 上最好用的终端

1. 支持子窗口
2. 自动补全
3. 查看粘贴历史
4. 自定义配置项

```sh
# 查看所有的 shell
cat /etc/shells

# 查看当前窗口使用的 shell
echo $SHELL

# 查看系统用户默认的 shell
cat /etc/passwd | grep sh

# 切换系统默认 shell
chsh -s /bin/zsh
```

[Github](https://github.com/gnachman/iTerm2)
[软件官网](https://www.iterm2.com)

## 效率神器 Alfred

1. 定位文件、打开文件
2. 打开网址、书签、App
3. 自定义搜索
4. 查看剪贴板历史
5. 计算器、查词典、运行 `shell` 命令

[软件官网](https://www.alfredapp.com)

## Mac 微信的功能拓展

1. 消息防撤回
2. 免认证登录与多开
3. 退群监控
4. 屏蔽更新

安装

```sh
# 安装小助手
curl -o- -L https://raw.githubusercontent.com/lmk123/oh-my-wechat/master/install.sh | bash -s
# OR 国内用户推荐
curl -o- -L https://omw.limingkai.cn/install.sh | bash -s

# 更新小助手
omw

# 微信在自动更新后会删除小助手，可运行以下命令恢复
omw -n
```

[Github](https://github.com/MustangYM/WeChatExtension-ForMac)

## IINA

视频播放器

1. 界面简洁、美观，契合 macOS 设计风格
2. 功能强大，设置以播放体验为中心
3. 支持鼠标和触控板手势
4. 在线字幕、缩略图预览、画中画等

[Github](https://github.com/iina/iina)
[软件官网](https://iina.io/)

## eZip

专为 macOS 而设计的压缩软件

1. 界面简洁、美观，完美兼容 Mojave
2. 支持超过 20 种压缩格式
3. 批量文件加密

[软件官网](https://ezip.awehunt.com)

## 腾讯柠檬清理

1. 界面简洁清新
2. 支持垃圾清理、文件查重、软件卸载
3. 支持微信、QQ、XCode、Sketch 深度扫描清理

[软件官网](https://lemon.qq.com)

## 截图神器 IShot

1. 区域截图、窗口截图、多窗口截图、延时截图、长截图、滚动截图
2. 快速标注(矩形、圆形、横线、箭头、画笔、马赛克、文字标记、序号标签、局部高亮)
3. 支持截图导圆角、阴影调节
4. 贴图、取色

[软件官网](https://www.better365.cn/ishot.html)
[App Store](https://apps.apple.com/cn/app/ishot-%E6%88%AA%E5%9B%BE-%E5%BD%95%E5%B1%8F-2020%E5%85%A8%E6%96%B0%E9%AB%98%E5%BA%A6/id1485844094)

## 超级右键 iRightMouse

1. 多种格式的右键新建文件
2. 快速移动文件
3. 常用目录设置
4. 快速打开终端、vscode 等

[软件官网](https://www.better365.cn/irightmouse.html)
[App Store](https://apps.apple.com/cn/app/irightmouse-%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AE/id1497428978)

## 翻译软件 Bob

1. 支持划词、截图、输入翻译
2. 支持翻译多开
3. 自动识别语种
4. 可自定义插件

[Github](https://github.com/ripperhe/Bob)
[软件官网](https://ripperhe.gitee.io/bob)
