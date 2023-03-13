---
description: '收录 Mac 平台下的实用软件，提升使用体验'
---

# Mac 平台

## 系统设置

```sh
# 禁止 “Are you sure you want to open this application?” 提示
defaults write com.apple.LaunchServices LSQuarantine -bool false

# 禁止磁盘映像验证
defaults write com.apple.frameworks.diskimages skip-verify -bool true
defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true
defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true

# 桌面隐藏外部磁盘和可移动介质
defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool false
defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool false

# 显示所有扩展名和隐藏文件
defaults write -g AppleShowAllExtensions -bool true
defaults write com.apple.finder AppleShowAllFiles -bool true

# 禁用修改扩展名时的警告
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false

# 显示底部地址栏
defaults write com.apple.finder ShowPathbar -bool true

# 禁止创建 .DS_Store 文件
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
```

### 允许打开任何来源的应用

```sh
sudo spctl --master-disable
```

## Xcode Command Line Tools

```sh
# 安装 Xcode Command Line Tools
xcode-select --install

# 删除 Xcode Command Line Tools
sudo rm -rf /Library/Developer/CommandLineTools
```

## Homebrew

Mac 的软件包管理工具，用于安装、卸载和管理各种软件，包括命令行工具、库和应用程序等

安装

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# 国内源完整版安装
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
# 极速安装（update 功能需要命令修复）
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed
```

- 安装教程
  - [Homebrew 国内安装脚本](https://gitee.com/cunkai/HomebrewCN)
  - [Homebrew 安装教程](https://github.com/ineo6/homebrew-install)

常用命令

```sh
# 更新 Homebrew
brew update

# 安装指定的软件包
brew install <package>

# 卸载指定的软件包
brew uninstall <package>

# 搜索可用的软件包，并显示匹配的结果
brew search <query>

# 列出已安装的软件包
brew list

# 查看可以升级的软件包
brew outdated

# 升级所有软件包到最新版本
brew upgrade
# 升级指定的软件包到最新版本
brew upgrade <package>

# 查看指定软件包的信息，包括版本号、安装路径、依赖关系等
brew info <package>

# 清理 Homebrew 临时文件和旧版本的软件包
brew cleanup
# 查看可以清理的 Homebrew 临时文件和旧版本的软件包
brew cleanup -n
```

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

### iTerm2 常用快捷键

| 操作          | 含义                   |
| :------------ | :--------------------- |
| ⌘ + N         | 新建窗口               |
| ⌘ + T         | 新建 Tab               |
| ⌘ + W         | 关闭 Tab / 窗口        |
| ⌘ + ←         | 切换到上一个 Tab       |
| ⌘ + →         | 切换到下一个 Tab       |
| ⌘ + 数字      | 快速切换 Tab           |
| ⌘ + D         | 垂直分屏               |
| ⌘ + Shift + D | 水平分屏               |
| ⌘ + Enter     | 切换全屏               |
| ⌘ + F         | 查找                   |
| ⌘ + /         | 查看光标的位置         |
| Ctrl + P      | 上一条命令             |
| Ctrl + R      | 搜索命令历史           |
| Ctrl + L      | 清屏                   |
| Ctrl + U      | 清除当前行             |
| Ctrl + W      | 删除光标前面的一个单词 |
| Ctrl + K      | 删除光标后面的所有字符 |
| Ctrl + A      | 移动光标到行首         |
| Ctrl + E      | 移动光标到行尾         |

### iTerm2 配色方案

- [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)
- [iTerm2-Material-Design](https://github.com/MartinSeeler/iterm2-material-design)

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

## mas-cli

Mac App Store 命令行工具

安装

```sh
brew install mas
```

常用命令

```sh
# 搜索应用程序
mas search [query]

# 列出已经安装的应用程序
mas list

# 通过应用程序的 ID 进行安装，可以从 search 命令或者应用程序网页中获取
mas install [app-id]

# 升级已经安装的应用程序
mas upgrade

# 列出有更新可用的应用程序
mas outdated
```

[Github](https://github.com/mas-cli/mas)

## duti 设置默认应用程序

设置默认应用程序的命令行工具

```sh
brew install duti
```

常用命令

```sh
# 查看指定文件类型的默认应用程序
duti -x txt

# 更改文件类型的默认应用程序
duti -s com.apple.TextEdit .txt all
```

常用的默认应用程序设置

> 万恶的微信开发者工具修改了很多默认应用程序设置
>
> 有一说一：微信开发者工具只配用来预览，开发还是一边玩去

```sh
duti -s com.microsoft.VSCode .ts all
duti -s com.microsoft.VSCode .js all
duti -s com.microsoft.VSCode .json all
duti -s com.microsoft.VSCode .wxml all
duti -s com.microsoft.VSCode .wxss all
```

[Github](https://github.com/moretension/duti)

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

## MacZip

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

## 快捷键提示 CheatSheet

长按 `Command` 即可查看当前应用的快捷键提示

[软件官网](https://www.ergonis.com/products/keycue/)
[安装包](https://github.com/maomao1996/software-backup/tree/main/mac/CheatSheet)

## 显示器控制 MonitorControl

1. 控制外接显示器的亮度和音量
2. 支持键盘控制亮度和音量

[Github](https://github.com/MonitorControl/MonitorControl)
