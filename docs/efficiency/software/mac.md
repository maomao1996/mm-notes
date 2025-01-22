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

然后去『`系统设置 > 安全性与隐私 > 安全性 > 任何来源`』打开

### 提示已损坏/无法确认开发者身份

开启『任何来源』后，还是有部分软件在安装后会提示『已损坏』或『无法确认开发者身份』，需要使用 `xattr` 命令绕过

```sh
sudo xattr -d com.apple.quarantine /Applications/[应用名称].app
# 举个 🌰
sudo xattr -d com.apple.quarantine /Application
```

### 开发者工具

> 允许下面不满足系统安全性策略的应用程序在本地运行软件。

打开『`系统设置 > 安全性与隐私 > 开发者工具`』根据需要添加如下应用：

- `终端`
- `iTerm`
- `Visual Studio Code`

[苹果：为了安全让 M2 吃灰 | 程序员的喵](https://catcoding.me/p/apple-perf/)

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

> 条件许可下优先使用官方源安装

```sh
# 官方源安装
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

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

- [Homebrew | Github](https://github.com/Homebrew/brew)
- [软件官网](https://brew.sh/index_zh-cn)

## iTerm2

Mac 上最好用的终端

1. 支持子窗口
2. 自动补全
3. 查看粘贴历史
4. 自定义配置项

> [brew 安装](https://formulae.brew.sh/cask/iterm2)

```sh
brew install --cask iterm2
```

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

- [iTerm2 | Github](https://github.com/gnachman/iTerm2)
- [软件官网](https://www.iterm2.com)

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

### Amazon Q（原 Fig）

> Fig 已迁移到 Amazon Q

终端自动补全命令提示工具

- 支持近 300 多种 `CLI` 工具的补全提示，如 `cd git brew npm yarn`
- 支持插件
- 支持自定义补全规范

> [brew 安装](https://formulae.brew.sh/cask/amazon-q)

```sh
brew install amazon-q
```

常用命令

```sh
# 打开 Amazon Q GUI
q

# 检查 Amazon Q 是否正常运行
q doctor

# 打开 Amazon Q 设置
q settings

# 升级 Amazon Q
q update
```

在 `vscode` 中使用，需修改 `editor.accessibilitySupport` 为 `"off"`

- [autocomplete | Github](https://github.com/withfig/autocomplete)
- [软件官网](https://fig.io/)

## mas-cli

Mac App Store 命令行工具

> [brew 安装](https://formulae.brew.sh/formula/mas)

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

[mas-cli | Github](https://github.com/mas-cli/mas)

## duti 设置默认应用程序

设置默认应用程序的命令行工具

> [brew 安装](https://formulae.brew.sh/formula/duti)

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

# PDF 还是浏览器快，WPS 有点卡
duti -s com.google.Chrome .pdf all
```

::: tip 获取应用程序的 ID

> **使用命令行**

```sh
# 获取应用程序的 ID （用 Chrome 举 🌰）
mdls -name kMDItemCFBundleIdentifier /Applications/Google\ Chrome.app
# 输出 kMDItemCFBundleIdentifier = "com.google.Chrome"

```

> **使用访达**

1. 打开 `访达`
2. 点击 `应用程序`
3. 右键 `应用程序`，如 `微信`
4. 点击 `显示包内容`
5. 打开 `Contents` 文件夹
6. 打开 `Info.plist` 文件
7. 找到 `CFBundleIdentifier` 字段对应的值

:::

[duti | Github](https://github.com/moretension/duti)

## 效率神器 Alfred

1. 定位文件、打开文件
2. 打开网址、书签、App
3. 自定义搜索
4. 查看剪贴板历史
5. 计算器、查词典、运行 `shell` 命令

[软件官网](https://www.alfredapp.com)

## 微信相关

### 设置使用默认浏览器打开链接

> 微信 3.8.0 for Mac 以上版本可用

1. 微信搜索框输入 **`:recover`**
2. 勾选『**使用默认浏览器打开链接**』

### Mac 微信功能拓展

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

[WeChatTweak-macOS | Github](https://github.com/Sunnyyoung/WeChatTweak-macOS)

## IINA

视频播放器

1. 界面简洁、美观，契合 macOS 设计风格
2. 功能强大，设置以播放体验为中心
3. 支持鼠标和触控板手势
4. 在线字幕、缩略图预览、画中画等

> [brew 安装](https://formulae.brew.sh/cask/iina)

```sh
brew install --cask iina
```

- [IINA | Github](https://github.com/iina/iina)
- [软件官网](https://iina.io/)

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

- [软件官网](https://www.better365.cn/ishot.html)
- [App Store](https://apps.apple.com/cn/app/ishot-%E6%88%AA%E5%9B%BE-%E5%BD%95%E5%B1%8F-2020%E5%85%A8%E6%96%B0%E9%AB%98%E5%BA%A6/id1485844094)

## 超级右键 iRightMouse

1. 多种格式的右键新建文件
2. 快速移动文件
3. 常用目录设置
4. 快速打开终端、vscode 等

- [软件官网](https://www.better365.cn/irightmouse.html)
- [App Store](https://apps.apple.com/cn/app/irightmouse-%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AE/id1497428978)

## 翻译软件 Bob

1. 支持划词、截图、输入翻译
2. 支持翻译多开
3. 自动识别语种
4. 可自定义插件

- [Bob | Github](https://github.com/ripperhe/Bob)
- [软件官网](https://ripperhe.gitee.io/bob)

## 菜单栏图标管理 Hidden Bar

1. 简单易用、支持全局快捷键
2. 免费开源、支持中文

> [brew 安装](https://formulae.brew.sh/cask/hiddenbar)

```sh
brew install --cask hiddenbar
```

- [Hidden Bar | Github](https://github.com/dwarvesf/hidden)
- [App Store](https://apps.apple.com/cn/app/hidden-bar/id1452453066)

## 音量管理 BackgroundMusic

1. 背景音乐管理
2. 设置各个应用程序的音量
3. 录制系统音频

> [brew 安装](https://formulae.brew.sh/cask/background-music)

```sh
brew install --cask background-music
```

[BackgroundMusic | Github](https://github.com/kyleneideck/BackgroundMusic)

## 窗口管理神器 Rectangle

比系统分屏更强大，支持快捷键分屏、支持三个及以上分屏

> [brew 安装](https://formulae.brew.sh/cask/rectangle)

```sh
brew install --cask rectangle
```

- [Rectangle | Github](https://github.com/rxhanson/Rectangle)
- [软件官网](https://rectangleapp.com/)

## 应用快捷启动神器 Thor Launcher

通过设定快捷键，快速在应用之间切换

- [Thor | Github](https://github.com/gbammc/Thor)
- [App Store](https://apps.apple.com/cn/app/thor-launcher/id1120999687)

## 快捷键提示 CheatSheet

长按 `Command` 即可查看当前应用的快捷键提示

- [软件官网](https://www.ergonis.com/products/keycue/)
- [安装包](https://github.com/maomao1996/software-backup/tree/main/mac/CheatSheet)

## 显示器控制 MonitorControl

1. 控制外接显示器的亮度和音量
2. 支持键盘控制亮度和音量

> [brew 安装](https://formulae.brew.sh/cask/monitorcontrol)

```sh
brew install --cask monitorcontrol
```

[MonitorControl | Github](https://github.com/MonitorControl/MonitorControl)

## 显示器设置 BetterDisplay

> 主要用于解决外接显示器不清晰问题（4k 以下），部分功能与 [MonitorControl](#显示器控制-monitorcontrol) 重叠

1. 解锁 HiDPI （Retina 显示）
2. 自定义分辨率
3. 创建虚拟显示器
4. 创建显示器的画中画窗口
5. 控制显示器的亮度和音量

> [brew 安装](https://formulae.brew.sh/cask/betterdisplay)

```sh
brew install --cask betterdisplay
```

::: tip 操作方法 - 以 BetterDisplay v1.4.15 为例

1. 下载 - 安装 - 打开
2. 点击导航栏小图标
3. 点击面板最下面的设置按钮
   1. 点击『`Display`』
   2. 选择扩展显示器
   3. 勾选『`Edit the system configuration of this display`』
   4. 添加自定义分辨率（可选）
      1. 勾选『『`Add custom scaled resolutions`』
      2. 设置自己需要的分辨率（如 `1600x900` ）
   5. 修改 Default resolution 选项
      1. 勾选『`Edit default resolution`』
      2. 设置自己需要的分辨率（如 `1920x1080@60` ）
4. 保存并应用设置（设置完以后可关闭软件，不需要一直开着）

:::

[BetterDisplay | Github](https://github.com/waydabber/BetterDisplay)

## 剪贴板管理器 Maccy

1. 免费开源、支持中文
2. 简单易用、支持复制图片和文件
3. 快速唤起（`SHIFT (⇧) + COMMAND (⌘) + C`）
4. 强大的历史记录管理（最多 999 条）
5. 丰富的个性化配置（可以忽略指定应用）

> [brew 安装](https://formulae.brew.sh/cask/maccy)

```sh
brew install --cask maccy
```

- [Maccy | Github](https://github.com/p0deje/Maccy)
- [软件官网](https://maccy.app)
