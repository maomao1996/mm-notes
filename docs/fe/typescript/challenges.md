# TypeScript 类型体操

通过学习 `TypeScript` 类型体操 —— [`Type-Challenges`](https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md) 来巩固所学到 `TypeScript` 知识点

在 `Type-Challenges` 中，我们可以从简单、中等、困难以及地狱难度，循序渐进的学习 `TypeScript` 高级技巧

## 简单

### `Pick` 选取

> 实现 `TS` 内置的 `Pick<T, K>`

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

> 实现 `TS` 内置的 `Readonly<T>`

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
