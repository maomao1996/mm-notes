# TypeScript 基础知识

`TypeScript` 作为 `JavaScript` 语言的超集，它为 `JavaScript` 添加了可选择的类型标注，大大增强了代码的可读性和可维护性。同时，它提供最新和不断发展的 `JavaScript` 特性，能让我们建立更健壮的组件。

引用[官网](https://www.typescriptlang.org/zh/)的定义

> `TypeScript` 扩展了 `JavaScript`，为它添加了类型支持。
>
> `TypeScript` 可以在您运行代码之前找到错误并提供修复，从而改善您的开发体验。
>
> 任何浏览器，任何操作系统，任何运行 `JavaScript` 的地方，完全开源。

用 `TypeScript` 编写的文件以 `.ts` 为后缀；用 `TypeScript` 编写 `React` 时，以 `.tsx` 为后缀。

## 数据类型

### 原始类型

`TypeScript` 提供了和 `JavaScript` 一样的原始类型

#### boolean 布尔类型

布尔类型就是简单的 `true / false` 值

```ts
let isFlag: boolean = true
```

#### string 字符串类型

```ts
let name: string = 'maomao'
name = '茂茂'
```

#### number 数字类型

和 `JavaScript` 一样，`TypeScript` 里的所有数字都是浮点数。这些浮点数的类型是 `number`。除了支持十进制和十六进制字面量，`TypeScript` 还支持 `ES6` 中引入的二进制和八进制字面量。

```ts
let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24
```

#### `bigint`

```ts
let big: bigint = 19961996n
```

#### `symbol`

`symbol` 类型表示独一无二的值，必须通过 `Symbol` 函数生成

```ts
let sym: symbol = Symbol('maomao')
sym = Symbol('茂茂') // OK
sym = '茂茂' // Error
```

### 特殊类型

除以上被提到的一些原始类型外，在 `TypeScript` 中，还存在一些特殊的类型

- `any` 任意值
- `void` 空值
- `null`
- `undefined`

#### `any` 任意值

`any` 是一个特殊的类型，当一个值是 `any` 类型的时候，`TypeScript` 将不会对其进行类型检查

```ts
/* 你可以任意操作你的变量 TypeScript 不会抛出相关的提示 */
let value: any = 1
free = { name: 'maomao' }
free.log()
free = '茂茂'
```

:::warning 注意点
无论是开发者指定或是由 `TypeScript` 隐式推断出的 `any` 类型，都会导致 `TypeScript` 失去准确的类型推断能力，这可能会导致遗漏一些运行时错误，违背了使用 `TypeScript` 的初衷
:::

#### `void` 空值

`JavaScript` 没有空值（Void）的概念，在 `TypeScript` 中，可以用 `void` 表示没有任何返回值的函数

```ts
function sayHello(): void {
  console.log('Hello, world')
}
```

也可以定义一个 `void` 类型的变量，不过这样的变量并没有什么意义，因为你只能为它赋予 `undefined` 和 `null`

```ts
let value: void = undefined
```

#### `null` 和 `undefined`

在 `TypeScript` 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型

```ts
let u: undefined = undefined
let n: null = null
```

默认情况下 `null` 和 `undefined` 是所有类型的子类型。就是说你可以把 `null` 和 `undefined` 赋值给 `number` 类型的变量。

当编译选项指定了 `--strictNullChecks`（开启严格空值检查模式）时，`null` 和 `undefined` 只允许赋值给自己或 `any` 类型的变量，这能避免很多常见的问题

### `unknown` 未知类型

`unknown` 类型用于描述一个我们还不知道其类型的变量

就像所有类型都可以被归为 `any`，所有类型也都可以被归为 `unknown`。这使得 `unknown` 成为 `TypeScript` 类型系统的另一种顶级类型

```ts
let notSure: unknown = 4
notSure = 'maybe a string instead'
notSure = false // 也可以是个 boolean
```

:::tip `unknown` 和 `any`
相比于 `any` 类型不会对变量进行任何检查，对于 `unknown` 类型的变量在执行大多数操作时必须进行相应的检查，因此 `unknown` 类型相对更加严格
:::

### `never`

`never` 类型表示的是那些永不存在的值的类型，常用于一个从来不会有返回值的函数，或者一个总是会抛出错误的函数

```ts
// 不会有返回值
function infiniteLoop(): never {
  while (true) {}
}

// 总是会抛出错误的函数
function error(message: string): never {
  throw new Error(message)
}
```

`never` 类型仅能被赋值给另外一个 `never` 类型

### 字符串字面量类型

字符串字面量类型用来约束一个变量只能是某几个字符串中的一个

```ts
type EventName = 'click' | 'scroll' | 'mousemove'
function handleEvent(event: EventName) {}

handleEvent('click')
handleEvent('scroll')
handleEvent('dbclick') // 报错：类型“"dbclick"”的参数不能赋给类型“EventName”的参数
```
