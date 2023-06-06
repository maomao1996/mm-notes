# Webpack

Webpack 是一个用于现代 `JavaScript` 应用程序的静态模块打包工具

- [Webpack 英文官网](https://webpack.js.org)
- [Webpack 中文官网](https://www.webpackjs.com)

## 核心概念

- `entry` 编译的入口文件
- `output` 如何输出以及在哪里输出
- `module` Webpack 一切皆模块，一个模块对应一个文件
- `chunk` 代码块，由多个 module 组成
- `loader` Webpack 通过不同的 loader 对模块的源代码进行转换
- `plugin` 插件 Webpack 在打包构建的生命周期中提供了不同的 hooks 允许调用方能够对打包的资源注入自己的逻辑处理
- `compiler` 编译器，把控整个 Webpack 打包的构建流程
- `compilation` 每一次构建的上下文对象包含了当次构建的所有信息
- `dependence` 记录模块间依赖关系

## 构建流程

### `Init` 初始化阶段

1. 解析命令行与 `webpack.config.js` 配置的参数，合并生成最后的配置
2. 创建 `compiler` 对象并开始启动插件
   1. 调用 `createCompiler` 函数创建 `compiler` 对象
   2. 遍历注册的 `Plugins` 并执行其 `apply` 方法
   3. 调用 `new WebpackOptionsApply().process` 方法，根据配置内容动态注入相应插件
      1. 调用 `EntryOptionPlugin` 插件，该插件根据 `entry` 值注入 `DynamicEntryPlugin` 或 `EntryPlugin` 插件
      2. 根据 `devtool` 值注入 `Sourcemap` 插件
         1. `SourceMapDevToolPlugin`
         2. `EvalSourceMapDevToolPlugin`
         3. `EvalDevToolModulePlugin`
      3. 注入 `RuntimePlugin` 用于根据代码内容动态注入 `webpack` 运行时
   4. 调用 `compiler.compile` 方法开始执行构建

### `Make` 构建阶段

1. 读入文件内容
2. 调用 `Loader` 将模块转译为标准的 `JS` 内容
3. 调用 `acorn` 生成 `AST` 语法树
4. 分析 `AST` 确定模块依赖列表
5. 解析模块依赖（对每一个依赖模块重新执行上述流程，直到生成完整的模块依赖图 —— `ModuleGraph` 对象）

### `Seal` 生成阶段

1. 遍历模块依赖图并执行操作
   1. 代码转译，如 `import` 转换为 `require` 调用
   2. 分析运行时依赖
2. 合并模块代码与运行时代码并生成 `chunk`
3. 执行产物优化操作
   1. `Tree-shaking`
   2. 压缩
   3. `Code Split`
4. 输出结果（根据配置确定输出的路径和文件名，把文件内容写入到文件系统）
