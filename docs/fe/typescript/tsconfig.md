# TypeScript 编译配置

TypeScript 编译配置指的是 TypeScript 编译器的选项和参数，这些选项和参数描述了 TypeScript 编译器应如何将 TypeScript 代码编译为可执行的 JavaScript 代码

在 TypeScript 项目中，[`tsc` 命令](#tsc) 和 [`tsconfig.json`](#tsconfigjson)是密不可分的。`tsc` 命令是用于启动 TypeScript 编译器进行编译的命令行工具，而 `tsconfig.json` 是用于配置 TypeScript 编译器的选项

## `tsc`

`tsc` 命令是用于启动 TypeScript 编译器进行编译的命令行工具

在执行 `tsc` 命令时，默认情况下，TypeScript 编译器会在当前目录下查找 `tsconfig.json` 文件，并根据该文件中指定的选项进行编译。如果 `tsconfig.json` 文件不存在，则会使用默认的编译选项和文件列表进行编译；而通过 `tsc` 命令的参数，可以覆盖 `tsconfig.json` 文件中的部分或全部编译选项

### 安装 TypeScript 命令行工具

```sh
pnpm add -g typescript
```

### 常用命令

```sh
tsx <file>                                    # 编译指定的文件
tsx <dir>                                     # 编译指定的目录

tsx -h, --help                                # 查看帮助信息
tsx -v, --version                             # 查看版本信息
tsx -w, --watch                               # 监听文件变化并自动编译
tsx -p, --project <path>                      # 指定 tsconfig.json 文件的路径
tsx -b, --build                               # 构建项目

tsx --init                                    # 创建 tsconfig.json 文件
tsx --showConfig                              # 查看当前的编译选项
```

## `tsconfig.json`

`tsconfig.json` 是用于配置 TypeScript 编译器的选项

通过 `tsconfig.json` 文件并在其中指定编译选项，可以让开发者在运行 `tsc` 命令时省略大量的命令行参数，从而提高开发效率和代码质量

### 创建 `tsconfig.json` 文件

```sh
tsc --init
```

### `tsconfig.json` 文件的配置

[`tsconfig.json` 详细配置文档 | TypeScript 官方文档](https://www.typescriptlang.org/tsconfig)

#### `compilerOptions`

`compilerOptions` 是用于配置 TypeScript 编译器的选项

> 这里列举的是通过 `tsc --init` 生成的默认配置（`tsc` 的版本为 `5.0.3`）

<<< @/fe/typescript/code/tsconfig.jsonc{2,10,24,46,77,98,102 json}

#### `files`

`files` 是用于指定 TypeScript 编译器应该编译哪些文件（支持相对路径、绝对路径）

- **Default: `false`**

```json
{
  "files": ["core.ts", "types.ts", "utils.ts", "maomao.ts"]
}
```

::: warning
当指定的文件或文件夹不存在时，会提示错误
:::

#### `include`

`include` 是用于指定 TypeScript 编译器应该编译哪些文件（支持相对路径、绝对路径和 `glob` 模式）

- **Default: `[]`**

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```

::: tip `files` 和 `include`

- `files`
  - 不会排除 `exclude` 中指定的文件或目录
  - 支持相对路径、绝对路径
  - 路径必须指向文件，不能指向目录
- `include`
  - 会排除 `exclude` 中指定的文件或目录
  - 支持相对路径、绝对路径和 `glob` 模式
  - 路径可以指向文件，也可以指向目录

:::

#### `exclude`

`exclude` 是用于指定 TypeScript 编译器应该忽略哪些文件，从而不对这些文件进行编译

- **Default: `["node_modules", "bower_components", "jspm_packages", "outDir"]`**

```json
{
  "exclude": ["node_modules", "maomao"]
}
```

#### `extends`

`extends` 是用于指定父级配置文件的路径，从而继承父级配置文件中的编译选项

- **Default: `false`**

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

#### `references`

> 项目引用是 TypeScript 3.0 新增的特性，用于将多个 TypeScript 项目组合在一起进行编译

`references` 是用于指定项目引用的路径，从而引用项目

- **Default: `false`**

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  },
  "references": [{ "path": "./tsconfig.base.json" }]
}
```
