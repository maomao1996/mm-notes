# ES6 常用知识

`ECMAScript 6` (简称 `ES6`) 是 `JavaScript` 语言的下一代标准

`ECMAScript` 的提案流程

- `Stage 0 - Strawman`（展示阶段）
- `Stage 1 - Proposal`（征求意见阶段）
- `Stage 2 - Draft`（草案阶段）
- `Stage 3 - Candidate`（候选人阶段）
- `Stage 4 - Finished`（定案阶段）

一个提案只要能进入 `Stage 2` 就差不多肯定会包括在以后的正式标准里面

[ECMAScript 当前的所有提案](https://github.com/tc39/ecma262)

::: tip ES6 和 ES2015 的区别
`ES2015` 是一个年份标记，表示当年发布的 `ECMAScript` 标准的正式版本，其全称为《`ECMAScript 2015` 标准》（简称 `ES2015`）<br>
`ES6` 是一个历史名词也是一个泛指，含义是 `5.1` 版以后的 `JavaScript` 的下一代标准，涵盖了 `ES2015、ES2016、ES2017 ES2018` 等等
:::

## let const

`ES6` 新增了 **`let`** 和 **`const`** 命令，用于声明变量，其声明的变量只在声明所在的块级作用域内有效

::: tip let const var 的区别

- `var` 声明的变量会提升到作用域的顶部，`let const` 不存在变量提升
- `var` 声明的全局变量会被挂载到全局对象 `window` 上，而 `let const` 不会
- `var` 可以对一个变量进行重复声明，而 `let const` 不能重复声明
- `var` 声明的变量作用域范围是函数作用域，`let const` 声明的变量作用域范围是块级作用域
- `const` 声明的是一个只读的常量，一旦声明常量的值就不能改变(必须对变量进行初始化)
  - 基本类型保证值不可变
  - 引用类型保证内存指针不可变

:::

### 变量提升

```js
console.log(a) // 输出 undefined
console.log(b) // 报错
console.log(c) // 报错

var a = 'var'
let b = 'let'
const c = 'const'
```

### 挂载到全局对象

```js
var a = 'var'
let b = 'let'
const c = 'const'

console.log(window.a) // 输出 var
console.log(window.b) // 输出 undefined
console.log(window.c) // 输出 undefined
```

### 重复声明

```js
var a = 'var'
var a
console.log(a) // 输出 var

let b = 'let'
let b // 报错
```

### 作用域范围

```js
function fn() {
  if (true) {
    var a = 'var'
    let b = 'let'

    console.log(a) // 输出 var
    console.log(b) // 输出 let
  }

  console.log(a) // 输出 var
  console.log(b) // 报错
}

fn()
```

### const 常量定义

```js
const NAME = 'maomao'
NAME = 'maomao1996' // 报错
```

## 模板字符串

模板字符串 (template string) 是增强版的字符串，用反引号(**`**)标识。它可以当作普通字符串、定义多行字符串或者在字符串中嵌入变量、函数调用以及表达式

```js
let name = 'maomao'
let age = 18

// ES5 拼接字符串
let es5Str = '我叫: ' + name + '，我的年龄是: ' + (age + 1) + ' 岁'

// ES6 模板字符串
let es6Str = `我叫: ${name}，我的年龄是: ${age + 1} 岁`
```
