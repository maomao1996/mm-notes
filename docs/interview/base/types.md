# 数据类型

::: tip 温馨提示
阅读[《JavaScript 高级程序设计（第 4 版）》](https://www.ituring.com.cn/book/2472)和各个大佬的文章所归纳的总结，**如有异议按你的理解为主**
:::

`JavaScript` 中的数据类型分为基本数据类型和引用数据类型

## 基本类型

> 注: 基本数据类型也可以叫原始数据类型

在 `ES2020` 标准下的 `JavaScript` 一共有以下 7 种基本类型

- **`undefined`** 未定义
- **`null`** 空指针
- **`boolean`** 布尔值
- **`string`** 字符串
- **`number`** 数值
- **`symbol`** 独一无二的值 ([ES6 引入](https://es6.ruanyifeng.com/#docs/symbol))
- **`bigint`** 大整数 ([ES2020 引入](https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B))

::: tip 基本类型总结

- 基本类型仅保存原始值，不存在属性和方法
- 基本类型存储在 **栈内存** 中
- 保存基本类型的变量是 **按值 (by value) 访问** 的，操作的就是存储在变量中的实际值
- 复制基本类型时会创建该值的第二个副本 (独立使用，互不干扰)

:::

::: tip 为什么原始值不存在属性和方法，但 'hello world'.toString() 可以正确执行
为了方便操作原始值 `ECMAScript` 提供了 3 种特殊的引用类型：`Boolean` `Number` `String`，每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象，在执行完后再销毁这个包装对象
:::

```js
// 举个 🌰
const str = 'hello world'
str.toString()
str.length

/**
 * 在执行上面的代码时 `JavaScript` 都会执行以下 3 步
 * 1. 创建一个 String 类型的实例
 * 2. 调用实例上的特定方法或属性
 * 3. 销毁刚刚创建的实例
 */
const str = 'hello world'
new String(str).toString()
new String(str).length
```

## 引用类型

在 `JavaScript` 中除了基本类型，其他的都是引用类型，常见的引用类型如下

- **`Object`** 对象
- **`Array`** 数组
- **`Function`** 函数
- **`Date`** 日期与时间
- **`RegExp`** 正则表达式
- **`Set`** 类似于数组但成员的值都是唯一的 ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#Set))
- **`WeakSet`** ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#WeakSet))
- **`Map`** 类似于对象也是键值对的集合 ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#Map))
- **`WeakMap`** ([ES6 引入](https://es6.ruanyifeng.com/#docs/set-map#WeakMap))

::: tip 引用类型总结

- 因为 `JavaScript` 不允许直接访问内存位置(不能直接操作对象所在的内存空间)，所以引用类型在 **栈内存** 中存储的是地址(内存指针)，而引用类型中的数据(方法或属性)是存储在 **堆内存** 中
- 保存引用类型的变量是 **按引用 (by reference) 访问** ，实际上操作的是对该对象的引用而非实际的对象本身
- 复制引用类型时只会复制内存指针

:::

::: tip 栈内存和堆内存

- **栈内存**
  - 存储基本数据类型和堆内存地址
  - 是连续的内存空间
- **堆内存**
  - 存储引用数据类型和闭包中的变量
  - 不是连续的内存空间
- 了解更多请点击 [JS 中的栈内存和堆内存](https://github.com/chenqf/frontEndBlog/issues/9)

:::
