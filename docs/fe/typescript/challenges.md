# TypeScript 类型体操

通过学习 `TypeScript` 类型体操 —— [`Type-Challenges`](https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md) 来巩固所学到 `TypeScript` 知识点

在 `Type-Challenges` 中，我们可以从简单、中等、困难以及地狱难度，循序渐进的学习 `TypeScript` 高级技巧

## Easy 简单

### `Pick` 选取

> 实现内置的 `Pick<T, K>`

`Pick` 表示从一个类型 `T` 中选取指定的几个字段（`K`）组合成一个新的类型

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
```

**实现**:

```ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

- `K extends keyof T` 表示 `K` 是 `keyof T` 的子类型，确保我们在使用 `MyPick` 时只能传递类型 `T` 中已有的属性键
- `P in K` 遍历类型 `K` 拿到具体属性键

```ts
type result = MyPick<Todo, 'time'>
// Error: 类型“"time"”不满足约束“keyof Todo”
```

### `Readonly` 只读

> 实现内置的 `Readonly<T>`

`Readonly` 会接收一个泛型参数，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰

```ts
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar'
}

todo.title = 'Hello' // Error: 无法为“title”赋值，因为它是只读属性
todo.description = 'barFoo' // Error: 无法为“description”赋值，因为它是只读属性
```

**实现**:

```ts
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

### `TupleToObject` 元组转对象

`TupleToObject<T>` 是用来把一个元组转换成一个 `key/value` 相同的对象

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>
// 结果：{ tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

**实现**:

```ts
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}
```

::: tip 索引访问类型
在 `TypeScript` 中，索引访问类型（Index Types）是一种特殊的类型，它允许我们使用类型中的某个索引类型（比如字符串或数字类型）来访问另一个类型中的属性。索引访问类型通常用于动态地访问对象的属性或数组的元素类型
:::

- `as const` 常量断言，可以将一个数组或对象的类型推断为只读的精确类型，在此处会将 `['tesla', 'model 3']` 推导为常量元组表示其不能新增、删除、修改元素（即 `readonly ["tesla", "model 3", "model X", "model Y"]`）
- `K in T[number]`
  - 先通过数字索引类型 `T[number]`，获取类型 `T` 中的所有元素类型，并将它们组成一个联合类型
  - 再对联合类型进行遍历拿到具体的元素

### `First` 数组的第一个元素

`First<T>` 会接受一个数组 `T` 并返回它的第一个元素的类型

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1>
// 结果：'a'

type head2 = First<arr2>
// 结果：3
```

**实现**:

```ts
/* 使用索引实现 */
type First<T extends any[]> = T extends [] ? never : T[0]
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

/* 使用 infer 占位实现 */
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never
```

- 判断 `T` 是否是一个空数组
  - `T extends []`
  - `T['length'] extends 0`
  - `T[0] extends T[number]`
- `T[0]` 根据下标取数组第一个元素
- `infer R` 表示数组第一个元素的占位
- `...infer Rest` 表示数组剩余元素的占位

### `Length` 元组的长度

`Length<T>` 用来获取一个数组（包括类数组）的长度

```ts
type result1 = Length<[1, 2, 3]>
// 结果：3

type result2 = Length<{ a: 'a'; length: 10 }>
// 结果：10
```

**实现**:

```ts
type Length<T extends any> = T extends { length: number } ? T['length'] : never
```

- `T extends { length: number }` 判断 `T` 是否为 `{ length: number }` 的子类型，如果是则代表 `T` 是数组或类数组
- `T['length']` 获取 `T` 对象的 `length` 属性的值

::: warning
在 `TypeScript` 中不能使用 `T.length` 来取值，应使用 `T['length']` 即索引访问类型
:::

### `Exclude` 排除

> 实现内置的 `Exclude <T, U>`

从联合类型 `T` 中排除 `U` 的类型成员（即取 `T` 对于 `U` 的差集），来构造一个新的类型

```ts
type Result = MyExclude<'name' | 'age' | 'sex', 'sex' | 'address'>
// 结果：'name' | 'age'
```

**实现**:

```ts
type MyExclude<T, U> = T extends U ? never : T
```

[分布式条件类型](/fe/typescript/base#分布式条件类型)（对联合类型应用 `extends` 时，会遍历联合类型成员并一一应用该条件类型）

### `Awaited` 获取 `Promise` 返回值类型

> 实现内置的 `Awaited<T>`

`Awaited` 可以用来获取 `Promise` 返回值类型

```ts
type result1 = MyAwaited<Promise<string>>
// 结果：string

type result2 = MyAwaited<Promise<string | number>>
// 结果：string | number
```

**实现**:

```ts
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T
```

### `If` 判断

`If<C, T, F>` 接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型

```ts
type A = If<true, 'a', 'b'>
// 结果：'a'

type B = If<false, 'a', 'b'>
// 结果：'b'
```

**实现**:

```ts
type If<C extends boolean, T, F> = C extends true ? T : F
```

- `C extends boolean` 表示类型 `C` 只能为 `boolean` 的子类型，即只能为 `true` 或 `false`
- `C extends true` 表示类型 `C` 可以被赋值为字面量类型 `true` 时条件成立（相当于 `JavaScript` 中的 `C === true`）

### `Concat` 数组的 `concat` 方法

`Concat<T, U>` 可以将两个数组合并起来，即在类型系统里实现 `JavaScript` 内置的 `Array.concat` 方法

```ts
type result = Concat<[1, 2], [3, 4]>
// 结果：[1, 2, 3, 4]
```

**实现**:

```ts
type Concat<T extends any[], U extends any[]> = [...T, ...U]
```

- `T extends any[]` 限制传入的参数只能是数组
- `[...T, ...U]` 和 `ES6` 的扩展运算符一样

### `Includes` 数组的 `includes` 方法

> 这题不太 Easy

`Includes<T, U>` 判断 `U` 是否在数组 `T` 中，即在类型系统里实现 `JavaScript` 的 `Array.includes` 方法

```ts
type result1 = Includes<[1, 2, 3], 1>
// 结果：true

type result2 = Includes<[1, 2, 3], 4>
// 结果：false

type result3 = Includes<[boolean, 1, 2, 3], true>
// 结果：false

type result4 = Includes<[true, 1, 2, 3], boolean>
// 结果：false
```

**实现**:

```ts
/* 简单版（存在问题）*/
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false

/* 递归完善版 */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
type Includes<T extends any[], U> = T extends [infer F, ...infer Rest]
  ? Equal<F, U> extends true
    ? true
    : Includes<Rest, U>
  : false
```

::: tip
`boolean` 实际是 `true ｜ false` 的别名（[详细信息](https://github.com/microsoft/TypeScript/issues/22596)）
:::

- `Equal` 是用来判断两个值是否相等的辅助方法（具体可以[看这里](https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript)）

### `Push` 数组 `push` 方法

`Push<T, U>` 将 `U` 添加到数组 `T` 中，即在类型系统里实现 `JavaScript` 的 `Array.push` 方法

```ts
type result = Push<[1, 2, 3], 4>
// 结果：[1, 2, 3, 4]
```

**实现**:

```ts
type Push<T extends any[], U> = [...T, U]
```

### `Unshift` 数组的 `unshift` 方法

在类型系统里实现 `JavaScript` 的 `Array.unshift` 方法

```ts
type result = Unshift<[1, 2], 0>
// 结果：[0, 1, 2]
```

**实现**:

```ts
type Unshift<T extends any[], U> = [U, ...T]
```

### `Parameters` 函数的参数类型

> 实现内置的 `Parameters<T>`

`Parameters` 可以获取一个函数的参数类型，其返回的结果是一个元组

```ts
const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type result1 = MyParameters<typeof foo>
// 结果：[boolean, { a: 'A' }]

type result2 = MyParameters<typeof bar>
// 结果：[boolean, { a: 'A' }]

type result3 = MyParameters<typeof baz>
// 结果：[]
```

**实现**:

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any
  ? R
  : never
```
