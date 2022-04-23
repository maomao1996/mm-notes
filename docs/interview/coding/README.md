# 编程题

## 模拟实现系列

### new 运算符

::: tip new 运算符原理

1. 创建一个全新的对象
2. 为新创建的对象添加 **`__proto__`** 属性并指向构造函数的原型对象
3. 将新创建的对象作为函数调用的 this
4. 如果构造函数没有返回对象类型，则新创建的对象

:::

@[code](./code/new.js)

[new 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)<br>
[相关学习文章](https://github.com/mqyqingfeng/Blog/issues/13)

### instanceof 运算符

::: tip instanceof 运算符原理
`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

:::

@[code](./code/instanceof.js)

[instanceof 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)<br>
[相关学习文章](https://juejin.cn/post/6844903613584654344#heading-1)
