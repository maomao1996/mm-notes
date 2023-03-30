# TypeScript 基础知识

`TypeScript` 作为 `JavaScript` 语言的超集，它为 `JavaScript` 添加了可选择的类型标注，大大增强了代码的可读性和可维护性。同时，它提供最新和不断发展的 `JavaScript` 特性，能让我们建立更健壮的组件。

引用[官网](https://www.typescriptlang.org/zh/)的定义

> `TypeScript` 扩展了 `JavaScript`，为它添加了类型支持。
>
> `TypeScript` 可以在您运行代码之前找到错误并提供修复，从而改善您的开发体验。
>
> 任何浏览器，任何操作系统，任何运行 `JavaScript` 的地方，完全开源。

用 `TypeScript` 编写的文件以 `.ts` 为后缀；用 `TypeScript` 编写 `React` 时，以 `.tsx` 为后缀。

## 基础

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

`bigint` 类型表示一个任意精度的整数，它可以用来处理超出 `JavaScript` `number` 类型范围的整数

```ts
let big: bigint = 19961996n
```

#### `symbol`

`symbol` 类型表示独一无二的值，其必须通过 `Symbol` 函数生成，常用于创建对象属性的唯一标识符

```ts
let sym: symbol = Symbol('maomao')
sym = Symbol('茂茂') // OK
sym = '茂茂' // Error
```

### `object`

`object` 类型表示非原始类型，也就是除 `boolean` `string` `number` `bigint` `symbol` `null` `undefined` 之外的类型。

使用 `object` 类型，就可以更好的表示像 `Object.create` 这样的 `API`

```ts
declare function create(o: object | null): void

create({ prop: 0 }) // OK
create(null) // OK

create(42) // Error
create('string') // Error
create(false) // Error
create(undefined) // Error
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

:::warning
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

### 类型推断与类型注解

- **类型注解**：显式指定变量的类型
- **类型推断**：由 `TypeScript` 根据上下文内容自动推断出变量类型

```ts
let name: string = 'maomao'
let age = 18 // TypeScript 自动推断为 job: number
```

:::tip

- 在为变量赋值明确的值时，建议尽量使用 **类型注解** 的方式
- 对于函数返回值，始终显示指明返回类型是个更好的习惯

:::

### 数组

在 `TypeScript` 中，数组类型声明有 `类型[]` 以及**泛型**两种形式

通过**类型 + 方括号**定义数组类型：

```ts
// 只允许存储 string 类型
const strArray: string[] = ['1', '2', '3']
// 只允许存储 number 类型
const numArray: number[] = [1, 2, 3]
// 任意类型
const anyArray: any[] = ['maomao', 18, {}]
```

通过**泛型**定义数组类型：

```ts
// 只允许存储 string 类型
const strArray: Array<string> = ['1', '2', '3']
// 只允许存储 number 类型
const numArray: Array<number> = [1, 2, 3]
// 任意类型
const anyArray: Array<any> = ['maomao', 18, {}]
```

### 元组 Tuple

元组（Tuple）类型表示一个固定长度的数组，并且已知每项所对应的类型

当对元组类型的数据进行 **越界访问** 或 **分配错误的类型值** 时，`TypeScript` 将报错提示

```ts
const tuple: [string, number] = ['maomao', 18]

console.log(tuple[2]) // Error
tuple[0] = 666 // Error
```

### 枚举 Enum

`enum` 类型是对 `JavaScript` 标准数据类型的一个补充。像 `C#` 等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```ts
enum Color {
  Red,
  Green,
  Blue
}
const c: Color = Color.Green
```

默认情况下，从 `0` 开始为元素编号。你也可以手动的指定成员的数值。例如，我们将上面的例子改成从 `1` 开始编号：

```ts
enum Color {
  Red = 1,
  Green,
  Blue
}
const c: Color = Color.Green
```

或者全部都采用手动赋值：

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
const c: Color = Color.Green
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。例如，我们知道数值为 `2`，但是不确定它映射到 `Color` 里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {
  Red = 1,
  Green,
  Blue
}
const colorName: string = Color[2]

console.log(colorName) // 'Green' 因为上面代码里它的值是 2
```

::: tip 枚举总结

- 都没有初始值时，默认是从 `0` 开始自增
- 当第一个成员初始化赋值为 `10` 时，后面的成员从 `10` 开始增长
- 数字类型的枚举可以映射，字符串类型的枚举不可以映射
  - 当一个枚举都为数字类型时，被赋值的变量可以取超出枚举值的数值
  - 当一个枚举都为字符串类型时，被赋值的变量只能取枚举成员
- 如果第 n 个成员赋值为 `string` 类型时，则 n 只后的成员都需要初始化
- `const` 声明的枚举是常量枚举，会在编译后被移除
- 常量枚举会在编译时直接计算出结果，计算类型的枚举会在运行时计算出结果
- 不建议数字类型和字符串枚举混用

:::

### 对象的类型 —— 接口

在 `TypeScript` 中，我们使用接口（Interfaces）来定义对象的类型。
接口是一种用于描述对象形状的方式，它可以定义一个对象需要具备哪些属性和方法（接口只是对类型做出了一些限制，并不会在代码中创建新的对象，即不会编译到 `JavaScript` 中）

```ts
interface Person {
  name: string
  age: number
}

const person: Person = {
  name: 'maomao',
  age: 18
}
```

以上代码中，`person` 变量是 `Person` 类型的，因此它**只能接受接口规定的属性，且属性值的类型也必须和接口中规定的一致，当多一个或少一个属性时 `TypeScript` 都会编译出错**

```ts{5,9}
interface Person {
  name: string
  age: number
}

// Error: 缺少属性 "age"
const person1: Person = {
  name: 'maomao'
}
// Error: "gender" 不在类型 "Person" 中
const person2: Person = {
  name: '茂茂',
  age: 18,
  gender: 'male'
}
```

#### 可选属性

当我们希望不要完全匹配一个形状时，可以**使用问号（?）来标记一个接口属性为可选的**（意味着这个属性可以不存在）

```ts
interface Person {
  name: string
  age?: number
}

const person: Person = {
  name: 'maomao'
}
```

这时**仍然不允许添加未定义的属性**

```ts{6}
interface Person {
  name: string
  age?: number
}

// Error: "gender" 不在类型 "Person" 中
const person: Person = {
  name: '茂茂',
  age: 18,
  gender: 'male'
}
```

#### 任意属性

当我们希望一个接口允许有任意的属性时，可以使用如下方式：

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: any
}

const person: Person = {
  name: 'maomao',
  gender: 'male'
}
```

**使用 `[propName: string]` 定义了任意属性取 `string` 类型的值**

::: warning
**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**
:::

```ts{7}
interface Person {
  name: string
  age?: number
  [propName: string]: string
}

// Error: 属性 "age" 与索引签名不兼容，不能将类型 "number" 分配给类型 "string"
const person: Person = {
  name: '茂茂',
  age: 18,
  gender: 'male'
}
```

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: string | number
}

const person: Person = {
  name: '茂茂',
  age: 18,
  gender: 'male'
}
```

#### 只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：

```ts{15}
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

const person: Person = {
  id: 1,
  name: '茂茂',
  age: 18,
  gender: 'male'
}

// Error: 无法为 "id" 赋值，因为它是只读属性
person.id = 1996
```

**只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**：

```ts{8,15}
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

// Error: 缺少属性 "id"
const person: Person = {
  name: '茂茂',
  age: 18,
  gender: 'male'
}

// Error: 无法为 "id" 赋值，因为它是只读属性
person.id = 1996
```

### 函数

常见的定义函数的方式：

- 函数声明
- 函数表达式
- 箭头函数

```ts
/* 函数声明 */
function fn1() {
  console.log('Hello, world')
}

/* 函数表达式 */
const fn2 = function () {
  console.log('Hello, world')
}

/* 箭头函数 */
const fn3 = () => {
  console.log('Hello, world')
}
```

在 `TypeScript` 中对函数进行约束时，需要指定函数的参数类型和返回类型

```ts
function add(x: number, y: number): number {
  return x + y
}

add(1, 2) // 3
add(1, '2') // Error: 类型 “string” 的参数不能赋给类型 “number” 的参数
```

#### 接口定义函数

函数也可以使用接口来为其定义类型：

```ts
interface AddInterface {
  (x: number, y: number): number
}

const add1: AddInterface = function (x, y) {
  return x + y
}
// OR
let add2: AddInterface
add2 = function (x, y) {
  return x + y
}

add1(1, 2) // 3
add2(1, 2) // 3
```

使用函数表达式 + 接口定义函数的方式时，对等号左侧进行类型限制，可以保证后面对函数名赋值时保证参数个数、参数类型、返回值类型不变

#### 可选参数

如果一个函数接受一个参数，而这个参数又是可选的，这时可以用 `?` 表示可选的参数：

```ts
function add(x: number, y?: number): number {
  if (y) {
    return x + y
  } else {
    return x
  }
}

add(10, 20) // 30
add(10) // 10
```

::: warning
可选参数必须接在必需参数后面，即**可选参数后面不允许再出现必需参数**
:::

```ts
// Error: 必选参数不能位于可选参数后
function add(x?: number, y: number): number {
  if (x) {
    return x + y
  } else {
    return y
  }
}
```

#### 参数默认值

在 `ES6` 中，我们可以给参数设置默认值，因此另外一种处理可选参数的方式是：为参数提供一个默认值，此时 `TypeScript` 会把该参数识别为可选参数

```ts
function add(x: number, y: number = 1): number {
  return x + y
}

add(10, 20) // 30
add(10) // 11
```

::: tip
当给一个参数设置了默认值后，就不再受 `TypeScript` 可选参数必须在最后一个位置的限制
:::

```ts {6}
function add(x: number = 10, y: number): number {
  return x + y
}

add(10, 20) // 30
/* 必须显示传递一个 undefined 进行占位 */
add(undefined, 10) // 20
```

#### 剩余参数

在 `ES6` 中，可以使用 `...变量名` 的方式获取函数的剩余参数（`rest` 参数）

```ts {1}
/* rest 是一个数组，我们可以使用数组的类型来定义它 */
function getTotal(a: number, ...rest: number[]) {
  console.log(a) // 1
  console.log(rest) // [2, 3, 4]
}

getTotal(1, 2, 3, 4)
```

#### 函数重载

在 `JavaScript` 中，并没有限制函数参数的个数或者类型，因此 `JavaScript` 没有函数重载的概念；在 `TypeScript` 中对于函数重载的理解是：只要函数参数的类型或者函数参数的数量不同时，就可以认为这是两个函数，即函数重载（**允许一个函数接受不同数量或类型的参数时作出不同的处理**）

```ts
/* 函数重载 */
function add(a: number, b: number): number
function add(a: string, b: string): string

/* 实际函数 */
function add(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else {
    return a + '' + b
  }
}

add(1, 2) // 3
add('1', '2') // 12
```

::: tip
当存在函数重载时，会优先从第一个进行逐一匹配，因此如果重载函数有包含关系时应将**最精准的函数定义写在最前面**
:::

### 类型别名

类型别名使用 `type` 关键字定义，它可以给现有的类型起一个新的名字。其主要用于定义一些复杂的类型：如联合类型、交叉类型等

```ts
type ID = number

type Person = {
  name: string
  age: number
}
```

### 联合类型

联合类型是由两个或者更多类型组成的类型，并用 `|` 连接，表示值可能是这些类型中的任意一个

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
}

padLeft('Hello world', 4) // '    Hello world'
padLeft('Hello world', 'maomao ') // 'maomao Hello world'

padLeft('Hello world', true) // Error: 类型 “boolean” 的参数不能赋给类型 “string | number” 的参数
```

::: warning
在使用联合类型时，因为 `TypeScript` 不确定其具体是哪一个类型，所以我们**只能访问此联合类型的所有类型里共有的成员**
:::

```ts {2}
/* 编译报错 */
function getLength(value: string | number): number {
  // Error: 类型 “string | number” 上不存在属性 “length”（类型 “number”上 不存在属性 “length”）
  return value.length
}

/* 编译通过 */
function valueToStr(value: string | number): string {
  return value.toString()
}
```

::: warning
当联合类型被赋值后，`TypeScript` 会根据类型推断来确定变量的类型，一旦确定后，则此变量只能使用这种类型的属性和方法
:::

```ts
let value: string | number

value = '123'
console.log(value.length) // 编译正确

value = 123
console.log(value.length) // Error: 类型 “number” 上不存在属性 “length”
```

### 交叉类型

交叉类型是将多个类型合并为一个类型，用 `&` 连接

```ts
type Bird = {
  fly: () => void
}
type Fish = {
  swim: () => void
}

const animal: Bird & Fish = {
  fly() {},
  swim() {}
}
```

### 字面量类型

字面量类型是一种特殊的类型，表示一个固定的值

**字符串字面量类型**：

```ts
type Name = 'maomao' | 'maomao1996' | '茂茂'
```

**数字字面量类型**：

```ts
type Age = 18 | 19 | 20
```

**布尔字面量类型**：

```ts
type IsLoggedIn = true
```

使用字面量类型可以在编译时进行更严格的类型检查，避免因为传入了不正确的值导致运行时出错。同时字面量类型还可以用于定义联合类型、交叉类型等高级类型，提高代码的可读性和可维护性

### 类型断言

有时候你会遇到这样的情况，你会比 `TypeScript` 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型，这时我们可以通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。

类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。`TypeScript` 会假设你已经进行了必须的检查。

类型断言有两种形式。其一是“尖括号”语法：

```ts
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length
```

另一个为 `as` 语法：

```ts
let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length
```

两种形式是等价的。使用哪个大多数情况下是凭个人喜好；在 `tsx` 文件中我们只能使用 `as` 语法。
