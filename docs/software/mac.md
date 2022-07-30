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

常用命令

```sh
# 更新 Homebrew
brew update

# 查看已安装的包
brew list

# 查看可更新的包
brew outdated

# 更新所有包
brew upgrade
# 更新指定包
brew upgrade git

# 查看包的详细信息
brew info git


# 清理所有包的旧版本
brew cleanup
# 查看可清理的旧版本包
brew cleanup -n
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

- 其他教程
  - [Homebrew 国内安装脚本](https://gitee.com/cunkai/HomebrewCN)
  - [Homebrew 安装教程](https://github.com/ineo6/homebrew-install)

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

### 配色方案

- [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)
- [iterm2-material-design](https://github.com/MartinSeeler/iterm2-material-design)

### Fig

终端自动补全命令提示工具

- 支持近 300 多种 `CLI` 工具的补全提示，如 `cd git brew npm yarn`
- 支持插件
- 支持自定义补全规范

安装

```sh
brew install --cask fig
```

在 `vscode` 中使用，需修改 `editor.accessibilitySupport` 为 `"off"`

[Github](https://github.com/withfig/autocomplete)
[软件官网](https://fig.io/)

## 效率神器 Alfred

1. 定位文件、打开文件
2. 打开网址、书签、App
3. 自定义搜索
4. 查看剪贴板历史
5. 计算器、查词典、运行 `shell` 命令

[软件官网](https://www.alfredapp.com)

## Mac 微信功能拓展

1. 消息防撤回
2. 免认证登录与多开
3. 消息处理增强(表情导出、二维码识别等)

安装

```sh
# 安装 WeChatTweak-CLI
brew install sunnyyoung/repo/wechattweak-cli

# 安装 Tweak
sudo wechattweak-cli --install

# 卸载
sudo wechattweak-cli --uninstall
```

[Github](https://github.com/Sunnyyoung/WeChatTweak-macOS)

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

## 菜单栏图标管理 Hidden Bar

1. 简单易用、支持全局快捷键
2. 免费开源、支持中文

[Github](https://github.com/dwarvesf/hidden)
[App Store](https://apps.apple.com/cn/app/hidden-bar/id1452453066)

## 音量管理 BackgroundMusic

1. 背景音乐管理
2. 设置各个应用程序的音量
3. 录制系统音频

[Github](https://github.com/kyleneideck/BackgroundMusic)

## 窗口管理神器 Rectangle

比系统分屏更强大，支持快捷键分屏、支持三个及以上分屏

[Github](https://github.com/rxhanson/Rectangle)
[软件官网](https://rectangleapp.com/)

## 应用快捷启动神器 Thor Launcher

通过设定快捷键，快速在应用之间切换

[App Store](https://apps.apple.com/cn/app/thor-launcher/id1120999687)
