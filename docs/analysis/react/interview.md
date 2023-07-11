# React 常见面试题

::: tip 一些相关资料

- [React 官方文档](https://zh-hans.reactjs.org/)
- [旧版 React 官方文档](https://zh-hans.legacy.reactjs.org)
- [深入浅出搞定 React | 拉钩教育](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=510)
- [前端面试宝典之 React 篇 | 拉钩教育](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=566)

:::

## `JSX` 语法

`JSX` 是一个 `JavaScript` 的语法扩展，结构类似 `XML`

### 为什么要使用 `JSX`

> `JSX` 是 `React` 的一大特性

使用 `JSX` 可以让我们在 `JavaScript` 中编写类似 `HTML` 的代码，这样做的好处是可以让我们在 `JavaScript` 中直接使用 `HTML` 标签，而不用通过 `document.createElement` 等方法来创建元素，这样可以让我们的代码更加简洁，更加直观

### JSX 语法的本质

在 `React` 中所有的元素都是通过 `React.createElement` 方法创建的。使用 `JSX` 语法的代码最终会被 `Babel` 编译为 `React.createElement` 方法，即 **`JSX` 语法的本质就是 `React.createElement` 方法**

```jsx
// JSX 语法
import React from 'react'
const element = <h1 className="greeting">Hello, world!</h1>

// 通过 babel 转化为 React.createElement 方法
import React from 'react'
const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!')
```

这也是为什么在 `React 17` 之前我们在使用 `JSX` 语法时必须要引入 `React` 的原因，如果不引入 `React` 就会因为找不到 `React.createElement` 方法导致编译失败

::: tip 全新的 JSX 转换
`React 17` 提供了[全新的 JSX 转换](https://zh-hans.legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)，在使用时不再需要引入 `React`

```jsx
// 源代码
function App() {
  return <h1>Hello World</h1>
}

// 新的 JSX 转换
import { jsx as _jsx } from 'react/jsx-runtime'

function App() {
  return _jsx('h1', { children: 'Hello world' })
}
```

:::

### `JSX` 和 `HTML` 的区别

`JSX` 和 `HTML` 有以下几点区别：

- `JSX` 中的标签名使用驼峰命名法，而 `HTML` 中的标签名使用小写字母命名法；
- `JSX` 中的标签属性名使用驼峰命名法，而 `HTML` 中的标签属性名使用小写字母命名法；
- `JSX` 中的标签属性值可以是字符串也可以是表达式，而 `HTML` 中的标签属性值只能是字符串；
- `JSX` 中的标签可以自定义，而 `HTML` 中的标签必须是 `HTML` 规定的标签。

### 为什么使用自定义组件必须以大写字母开头

在 `JSX` 中，如果标签名以小写字母开头，那么它会被当作一个字符串而不是一个组件来处理，而如果标签名以大写字母开头，那么它会被当作一个组件来处理。这是因为在 `JSX` 中，`React` 会将以小写字母开头的标签名视为 `HTML` 原生标签，而将以大写字母开头的标签名视为自定义组件。为了避免混淆，`React` 自定义组件的标签名必须以大写字母开头

```jsx
/* 使用原生标签 */
<app>maomao</app>
// 等价于
React.createElement('app', null, 'maomao')

/* 使用自定义组件 */
<App>maomao</App>
// 等价于
React.createElement(App, null, 'maomao')
```
