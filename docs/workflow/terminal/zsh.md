---
description: '茂茂的 zsh 配置和好用的插件、主题'
---

# zsh 配置

> 个人所有配置已上传至 [maomao1996/dotfiles | GitHub](https://github.com/maomao1996/dotfiles/tree/main/zsh)

`zsh` 相关配置和好用的插件、主题

## zsh 配置文件

zsh 的配置文件用于定制和配置 shell 的行为，根据存放的目录和使用场景，有以下配置文件

### 系统范围的配置文件

系统范围的配置文件，对所有用户都生效

1. **`/etc/zshenv`**
   - **执行时机：** 在每次 zsh 启动时都会执行
   - **用途：** 用于设置全局环境变量
2. **`/etc/zshrc`**
   - **执行时机：** 在每次交互式启动 zsh 时被执行
   - **用途：** 用于配置终端外观、添加别名、定义函数等
3. **`/etc/zlogin`**
   - **执行时机：** 在用户登录时（非交互式）被执行
   - **用途：** 用于设置登录时的全局行为，如显示系统信息等
4. **`/etc/zlogout`**
   - **执行时机：** 在用户注销时被执行
   - **用途：** 用于设置注销时的全局行为

### 用户级别的配置文件

用户级别的配置文件，对每个用户都生效，可以通过 `echo $ZDOTDIR` 命令查看当前用户的配置文件存放目录

1. **`~/.zshenv`**
   - **执行时机：** 在每次 zsh 启动时都会执行
   - **用途：** 用于设置用户特定的环境变量和个人偏好设置
2. **`~/.zshrc` (推荐使用的配置文件)**
   - **执行时机：** 在每次交互式启动 zsh 时被执行
   - **用途：** 用户可以在这里定制个人的 shell 环境，例如添加个人别名、自定义提示符等
3. **`~/.zlogin`**
   - **执行时机：** 在用户登录时（非交互式）被执行
   - **用途：** 用户可以在这里添加个人登录时需要执行的命令
4. **`~/.zlogout`**
   - **执行时机：** 在用户注销时被执行
   - **用途：** 用户可以在这里添加个人注销时需要执行的命令

### 配置文件的执行顺序

> 从上到下，从左到右执行

| 系统范围的配置文件 | 用户级别的配置文件 | Login Shell | Interactive Shell | Scripts | Terminal.app |
| ------------------ | ------------------ | :---------: | :---------------: | :-----: | :----------: |
| `/etc/zshenv`      | `~/.zshenv`        |     ✅      |        ✅         |   ✅    |      ✅      |
| `/etc/zshrc`       | `~/.zshrc`         |     ❌      |        ✅         |   ❌    |      ✅      |
| `/etc/zlogin`      | `~/.zlogin`        |     ✅      |        ❌         |   ❌    |      ✅      |
| `/etc/zlogout`     | `~/.zlogout`       |     ✅      |        ❌         |   ❌    |      ✅      |

## zinit（推荐）

> **强烈推荐使用**，启动超快

一个**灵活快速**的 `zsh` 插件管理器

安装

```sh
# 下载安装脚本
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"

# 编译 zinit
zinit self-update
```

### 常用命令介绍

加载插件

```sh
# 加载插件（启动分析功能跟踪插件具体）
zinit load [插件]

# 加载插件（静默加载，启动更快）
zinit light [插件]

# 从 url 中加载插件
zinit snippet "https://github.com/maomao1996/dotfiles/blob/main/zsh/femm.plugin.zsh"

# 延迟加载 oh my zsh 中的插件
zinit ice svn               # 为下一条命令添加修饰符
zinit lucid wait="1" for \  # 延迟 1s 加载
    OMZL::clipboard.zsh \   # 加载 omz 中的 clipboard
    OMZP::git               # 加载 omz 中的 git.plugin
```

更新

```sh
# 更新 zinit
zinit self-update
# 更新所有插件
zinit update
# 并发更新所有插件
zinit update --parallel
```

卸载

```sh
# 卸载插件
zinit delete [插件]
# 卸载所有插件
zinit delete --all
# 卸载所有未使用插件
zinit delete --clean
```

- [zinit | Github](https://github.com/zdharma-continuum/zinit)
- [加速你的 zsh —— 最强 zsh 插件管理器 zinit 教程](https://www.aloxaf.com/2019/11/zplugin_tutorial/)

## oh-my-zsh

> 已不再使用，启动有点慢

用于自定义 `zsh` 的配置

1. 主题配置
2. 插件安装

安装

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# OR 国内镜像
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

更新

```sh
omz update
```

[Oh My Zsh | Github](https://github.com/ohmyzsh/ohmyzsh)

## zsh 插件

### autojump

用于常用目录间的快速跳转（通过维护命令行中最常用的目录的数据库来工作）

安装

```sh
brew install autojump
```

[autojump | Github](https://github.com/wting/autojump)

### z

和 `autojump` 功能一致，是 `oh-my-zsh` 内置插件

```sh
# 在 ~/.zshrc 中配置
plugins=(其他插件 z)

# 使配置生效
source ~/.zshrc
```

[z | Github](https://github.com/rupa/z)

### fast-syntax-highlighting

终端语法高亮显示

安装

:::: code-group

```sh [zinit]
# 在 ~/.zshrc 中配置
zinit light zdharma-continuum/fast-syntax-highlighting

# 使配置生效
source ~/.zshrc
```

```sh [oh-my-zsh]
# clone
git clone --depth=1 https://github.com/zdharma-continuum/fast-syntax-highlighting.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting

# 在 ~/.zshrc 中配置(在 plugins 的最后面加上 fast-syntax-highlighting)
plugins=(其他插件 fast-syntax-highlighting)

# 使配置生效
source ~/.zshrc
```

::::

[Fast Syntax Highlighting | Github](https://github.com/zdharma-continuum/fast-syntax-highlighting)

### zsh-autosuggestions

根据您的历史记录和完成情况建议您键入的命令

安装

:::: code-group

```sh [zinit]
# 在 ~/.zshrc 中配置
zinit ice lucid wait="0" atload="_zsh_autosuggest_start"
zinit light zsh-users/zsh-autosuggestions

# 使配置生效
source ~/.zshrc
```

```sh [oh-my-zsh]
# clone
git clone --depth=1 git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# 在 ~/.zshrc 中配置
plugins=(其他插件 zsh-autosuggestions)

# 使配置生效
source ~/.zshrc
```

::::

[zsh-autosuggestions | Github](https://github.com/zsh-users/zsh-autosuggestions)

## zsh 主题

### powerlevel10k

安装

:::: code-group

```sh [zinit]
# 在 ~/.zshrc 中配置
zinit ice depth=1
zinit light romkatv/powerlevel10k

# 使配置生效
source ~/.zshrc
```

```sh [oh-my-zsh]
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 在 ~/.zshrc 中配置
ZSH_THEME="powerlevel10k/powerlevel10k"

# 使配置生效
source ~/.zshrc
```

::::

配置

> 使用 [iTerm2](/efficiency/software/mac#iterm2) 可自动安装所需字体

```sh
p10k configure
```

修复 `vscode` 终端图标乱码，修改 `terminal.integrated.fontFamily` 为 `"MesloLGS NF"`

```json
"terminal.integrated.fontFamily": "MesloLGS NF",
```

更新

```sh
git -C ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k pull
```

查看当前配置使用的图标

```sh
get_icon_names
```

自定义配置

```sh
# 打开 p10k 配置文件
code ~/.p10k.zsh

# 修改 POWERLEVEL9K_LEFT_PROMPT_ELEMENTS 和 POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS 的配置
# 比如显示当前使用的 node 版本

# 使配置生效
source ~/.zshrc
```

- [Powerlevel10k | Github](https://github.com/romkatv/powerlevel10k)
- [Powerlevel10k | Github](https://github.com/romkatv/powerlevel10k)

## 常用配置

具体可参考 —— [茂茂的 zsh 配置文件](https://github.com/maomao1996/dotfiles/tree/main/zsh)

:::: code-group

```sh [zinit]
#--------------------------------------------------#
# 加载 p10k 主题
#--------------------------------------------------#
zinit ice depth=1
zinit light romkatv/powerlevel10k
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

#--------------------------------------------------#
# 加载高亮和自动补全插件
#--------------------------------------------------#
zinit ice lucid wait="0" atload="_zsh_autosuggest_start"
zinit light zsh-users/zsh-autosuggestions
zinit light zdharma-continuum/fast-syntax-highlighting

#--------------------------------------------------#
# 加载 Oh My Zsh 中的插件
#--------------------------------------------------#
zinit ice svn
zinit lucid wait="1" for \
    OMZL::clipboard.zsh \
    OMZL::completion.zsh \
    OMZL::directories.zsh \
    OMZL::history.zsh \
    OMZL::key-bindings.zsh \
    OMZL::theme-and-appearance.zsh \
    OMZL::git.zsh \
    OMZP::git

#--------------------------------------------------#
# 加载 maomao 的自定义配置插件
#--------------------------------------------------#
zinit snippet "https://github.com/maomao1996/dotfiles/blob/main/zsh/femm.plugin.zsh"

#--------------------------------------------------#
# 内置环境变量修改
#--------------------------------------------------#
HIST_STAMPS="yyyy-mm-dd"

export LESS="-R"
```

```sh [oh-my-zsh]
# 主题
ZSH_THEME="powerlevel10k/powerlevel10k"

# 历史命令显示时间
HIST_STAMPS="yyyy-mm-dd"

# 插件配置
plugins=(git autojump vscode web-search zsh-autosuggestions fast-syntax-highlighting)

```

> 自定义配置插件内容如下

::::

```sh
#--------------------------------------------------#
# alias 相关
#--------------------------------------------------#
# https://github.com/antfu-collective/ni
alias p="pnpm"
alias pnpx="pnpm dlx"
alias d="bun run dev"
alias s="bun run start"
alias b="bun run build"
alias t="bun run test"
alias dp="bun run deploy"
alias lint="nr lint"
alias lintf="nr lint --fix"

# git 相关
alias glogp="git log --pretty='%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)'"
alias gcl1="git clone --depth=1"
alias gpp="proxy && git push && unproxy"
alias glp="proxy && git pull && unproxy"
alias dmm="git checkout master && git pull && git merge develop"

# 包别名
alias cat="bat"
alias commit="czg"

#--------------------------------------------------#
# 代理相关
#--------------------------------------------------#
function proxy() {
  local http="http://127.0.0.1:7890"
  local socks5="socks5://127.0.0.1:7890"

  export http_proxy=$http
  export HTTP_PROXY=$http

  export https_proxy=$http
  export HTTPS_PROXY=$http

  export all_proxy=$socks5
  export ALL_PROXY=$socks5

  echo "\033[32m已开启终端代理\033[0m"
}

function unproxy() {
  unset http_proxy HTTP_PROXY https_proxy HTTPS_PROXY all_proxy ALL_PROXY
  echo "\033[32m已关闭终端代理\033[0m"
}

#--------------------------------------------------#
# 其他
#--------------------------------------------------#
# 复制当前项目名和分支名（方便提测）
function c() {
  if [[ -d .git ]]; then
    local data="项目名: $(basename $PWD)\n分支名: $(git_current_branch)"

    if echo -n $data | pbcopy; then
      echo -e "$data\n\033[32m复制成功\033[0m"
    else
      echo -e "$data\n\033[33m复制失败，请检查 pbcopy 是否可用\033[0m"
    fi

  else
    echo "\033[33m当前目录不存在 .git 配置\033[0m"
  fi
}

# 修改 github 用户名和邮箱地址（防止造成用公司信息提交到 github 的尴尬）
if [[ -d .git ]]; then
  githubName=""  # github 用户名
  githubEmail="" # github 邮箱地址
  url=$(git remote get-url origin)
  localName=$(git config user.name)
  localEmail=$(git config user.email)
  # 只判断 github 仓库，根据需要修改（判断字符建议写长点）
  if [[ $url =~ "github.com/maomao1996" ]]; then
    # 提示当前为 github 项目（不需要就注释）
    echo -e "\033[34m当前为 github 项目\033[0m"
    if [[ $githubName && $githubName != $localName ]]; then
      $(git config user.name "$githubName")
      echo -e "已将当前仓库的 name 从\033[33m $localName \033[0m修改为\033[32m $githubName \033[0m"
    fi
    if [[ $githubEmail && $githubEmail != $localEmail ]]; then
      $(git config user.email "$githubEmail")
      echo -e "已将当前仓库的 email 从\033[33m $localEmail \033[0m修改为\033[32m $githubEmail \033[0m"
    fi
  fi
fi
```

::: warning 代理相关说明

同时设置大小写的环境变量来保证兼容性（因为有的应用读取的是大写的环境变量，而有的应用读取的是小写的环境变量）

:::
