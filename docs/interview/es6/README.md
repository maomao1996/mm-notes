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

/* ES5 拼接字符串 */
let es5Str = '我叫: ' + name + '，我的年龄是: ' + (age + 1) + ' 岁'

/* ES6 模板字符串 */
let es6Str = `我叫: ${name}，我的年龄是: ${age + 1} 岁`
```

## 解构赋值

### 解构对象

```js
const obj = {
  name: 'maomao',
  age: 18
}

// ES5 写法
const name = obj.name
const age = obj.age

/* ES6 解构写法 */
const { name, age } = obj
// 重命名
const { name: myName } = obj
```

### 解构数组

```js
const arr = ['maomao', 18]

/* ES5 写法 */
const name = arr[0]
const age = arr[1]

/* ES6 解构写法 */
const [name, age] = arr
const { 0: name, 1: age } = arr
```

## 函数的扩展

### 参数默认值

```js
/* ES5 */
function add(x, y) {
  // 当参数 y 对应的布尔值为 false 则该赋值不起作用
  y = y || 1
  console.log(x + y)
}
add(10) // 11
add(10, 2) // 12
add(10, 0) // 11

/* ES6 */
function add(x, y = 1) {
  console.log(x + y)
}
add(10) // 11
add(10, 2) // 12
add(10, 0) // 10
```

::: tip 函数参数的默认值

- 参数变量是默认声明的不能用 `let`或 `const` 再次声明，否则会报错
- 使用参数默认值时函数不能有同名参数
- 参数默认值的位置应该是函数的尾参数

:::

### 剩余参数(rest 参数)

`ES6` 引入 `rest` 参数(形式为 `...变量名`) 用于获取函数的剩余参数(可以替换 `arguments` 对象)

```js
function log(name, ...params) {
  console.log(name, params)
}

log('maomao', 1, 2) // maomao [1, 2]
log('maomao', 1, 2, 3) // maomao [1, 2, 3]
```

::: tip 剩余参数(rest 参数)

- `rest` 参数是一个真正的数组，数组特有的方法都可以使用
- `rest` 参数之后不能再有其他参数，否则会报错
- 函数的 `length` 属性，不包括 `rest` 参数

:::

### 箭头函数

`ES6` 允许使用**箭头**(`=>`)定义函数

```js
// 不需要参数时使用一个圆括号代表参数部分
const fn = () => {}
// 等同于
const fn = function () {}

// 当函数体只有 return 时
const fn = (value) => value
// 等同于
const fn = function (value) {
  return value
}
const fn = () => {
  console.log('this', this)
}
```

::: tip 箭头函数与普通函数的区别

- `this`
  - 普通函数
    - `this` 指向是动态的(取决于函数的调用方式)
    - 可以用 `call apply bind` 改变 `this` 指向
  - 箭头函数
    - `this` 指向是固定的，指向定义时上层作用域中的 `this`(它没有自己的 `this`)
    - `call apply bind` 无法改变箭头函数的 `this` 指向(上下文值始终按词法解析)
    - 全局作用域下 `this` 指向全局对象
- 箭头函数不可以当作构造函数(不能使用 `new` 运算符，否则会报错)
- 箭头函数的函数体内不可以使用`arguments super new.target`
- 箭头函数不可以使用 yield 命令(不能用作 `Generator` 函数)
- 在 `class` 中使用箭头函数其 `this` 会和类实例进行绑定

:::

[利用 `babel` 编译箭头函数代码查看 `this` 的指向](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBANiA5jAvDAFASlQPhgbwCgYZRIQ4BTAOgUXQHI6YoALASwgC4GAaFjhEyEAvoUIAzAK5hgUduBgSwWAsRgRKUACrsAtpRBSo6VSjxESJMhAo06jZQM49-bTsJIj-ARgAMfsIiQA&debug=false&forceAllTransforms=true&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=script&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.17.11&externalPlugins=&assumptions=%7B%7D)

```js
/* ES6 */
const log = () => {
  console.log('log this:', this)
}

function fn() {
  setTimeout(() => {
    console.log('fn this:', this)
  }, 100)
}

/* babel 编译后的 ES5 代码 */
var _this = this

var log = function log() {
  console.log('log this:', _this)
}

function fn() {
  var _this2 = this

  setTimeout(function () {
    console.log('fn this:', _this2)
  }, 100)
}
```

## 扩展运算符

扩展运算符 (`spread`)是三个点 (`...`) 它好比 `rest` 参数的逆运算

### 函数调用

扩展运算符在函数调用时可以将一个数组变为参数序列，从而可以替代函数的 `apply()` 方法

```js
// 举个 🌰 求出一个数组最大元素
/* ES5 写法 */
Math.max.apply(null, [2022, 520, 1314])

/* ES6 写法 */
Math.max(...[2022, 520, 1314])
// 等同于
Math.max(2022, 520, 1314)
```

### 拷贝数组/对象

```js
/* 拷贝数组 */
const arr1 = [1, 2, 3]
// 写法一
const arr2 = [...arr1]
// 写法二
const [...arr2] = arr1

/* 拷贝对象 */
const obj1 = { name: 'maomao' }
// 写法一
const obj2 = { ...obj1 }
// 写法二
const { ...obj2 } = obj1
```

### 合并数组/对象

```js
/* 合并数组 */
const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']
const arr = [...arr1, ...arr2]

/* 合并对象 */
const obj1 = { name: 'maomao' }
const obj2 = { age: 18 }
const obj = { ...obj1, ...obj2 }
```

### 使用表达式

```js
const obj = {
  ...(false ? { a: 1 } : {}),
  b: 2
}
// {b: 2}

const obj = {
  ...(true ? { a: 1 } : {}),
  b: 2
}
// {a: 1, b: 2}
```

### 与解构赋值结合

```js
const arr1 = [1, 2, 3]

/* ES5 写法 */
const first = arr1[0]
const rest = arr1.slice(1)

/* ES6 写法 */
const [first, ...rest] = arr1
```

::: tip 扩展运算符

- 使用扩展运算符拷贝数组或对象时其都是**浅拷贝**
- 对象的扩展运算符等同于使用 `Object.assign()` 方法
- 只有函数调用时扩展运算符才可以放在圆括号中，否则会报错
- 扩展运算符用于赋值时只能放在参数的最后一位，否则会报错

:::
