# `await-to-js` 源码阅读

[await-to-js](https://github.com/scopsy/await-to-js) 可以优雅的捕获 `await` 的错误，不用再写 `try-catch` 来捕获错误，而是直接使用解构赋值的方式来获取结果数据和错误对象

## `await-to-js` 使用方式

使用 `try-catch`

```js
function someAsyncFunction() {
  return new Promise(() => {
    throw new Error('maomao - try-catch')
  })
}

try {
  const data = await someAsyncFunction()
} catch (err) {
  console.log(err.message) // 'maomao - try-catch'
}
```

使用 `await-to-js`

```js
import to from 'await-to-js'

function someAsyncFunction() {
  return new Promise(() => {
    throw new Error('maomao')
  })
}

const [err, data] = await to(someAsyncFunction())
err && console.log(err.message) // 'maomao'

/* 传递 errorExt 参数 */
const [err, data] = await to(someAsyncFunction(), { title: 'await-to-js' })
err && console.log(err.message, err.title) // 'maomao' 'await-to-js'
```

通过对比可以发现，不光代码简洁了很多，还可以直接使用解构赋值的方式获取结果数据和错误对象

## `await-to-js` 源码笔记

> **当前 `await-to-js` 源码版本为 v3.0.0**

```ts
// 接收一个 Promise 和一个可选的 errorExt 参数
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object, // 可选参数：用于扩展错误对象
): Promise<[U, undefined] | [null, T]> {
  return (
    promise
      // 当 promise 执行成功时，返回包含结果数据的数组
      .then<[null, T]>((data: T) => [null, data])
      .catch<[U, undefined]>((err: U) => {
        // 如果传入了 errorExt 参数
        if (errorExt) {
          // 将错误对象 err 和 errorExt 合并为一个新的错误对象 parsedError
          const parsedError = Object.assign({}, err, errorExt)
          // 返回一个数组，包含新的错误对象和 undefined
          return [parsedError, undefined]
        }

        // 返回一个数组，包含原始的错误对象和 undefined
        return [err, undefined]
      })
  )
}
```

---

::: info 相关资料

- [How to write async await without try-catch blocks in Javascript](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)

:::
