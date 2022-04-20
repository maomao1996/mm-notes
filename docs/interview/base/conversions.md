# 类型转换

::: tip 温馨提示
阅读[《你不知道的 JavaScript（中卷）》](https://www.ituring.com.cn/book/1563)和各个大佬的文章所归纳的总结，**如有异议按你的理解为主**
:::

将值从一种类型转换为另一种类型称为**类型转换** <br>
在 `JavaScript` 中进行类型转换时，根据调用形式的不同可以分为以下两种:

- **显式类型转换**
- **隐式类型转换**

## 抽象操作 (内部的类型转换规则)

在了解类型转换前我们需要知道 `JavaScript` 的 **抽象操作** (类型转换规则)

> **抽象操作** 是指仅供内部使用的操作

- `ToPrimitive` 将引用类型转换成相应的基本类型值
- `ToString` 将非字符串值转换成字符串
- `ToBoolean` 将非布尔值转换成布尔值
- `ToNumber` 将非数字值转换成数字值

### ToPrimitive

`ToPrimitive` 用来处理引用类型到基本类型的类型转换

::: tip ToPrimitive 转换规则

- 检查是否存在 `Symbol.toPrimitive()`
  - 基本类型直接返回
  - 引用类型抛出 `TypeError` 错误
- 检查是否存在 `valueOf()`
  - 基本类型直接返回
  - 引用类型则继续调用 `toString()`
- 调用 `toString()`
  - 基本类型直接返回
  - 引用类型抛出 `TypeError` 错误

:::

::: warning 注意点

- 使用 `Object.create(null)` 创建的对象没有原型，即不存在 `valueOf()` 和 `toString()`，当对其进行类型转换时会抛出 `TypeError` 错误
- 在做显式类型转换时 `valueOf()` 和 `toString()` 的调用顺序会根据转换目标不同去做相应调整

:::

@[code](./code/ToPrimitive.js)

### ToString

`ToString` 用来处理非字符串到字符串的类型转换

::: tip ToString 转换规则

- 基本类型
  - `undefined` => `'undefined'`
  - `null` => `'null'`
  - `true` => `'true'`
  - `false` => `'false'`
  - `number`
    - 普通数值直接加引号
    - 极小和极大的数字将转换成指数形式的字符串
    - `+0 0 -0` => `'0'`
    - `Infinity` => `'Infinity'`
- 引用类型会先调用 `ToPrimitive` 逻辑将其转换成基本类型，如果返回的基本类型不是字符串，再遵循以上规则进行转换

:::

### ToBoolean

`ToBoolean` 用来处理非布尔值到布尔值的类型转换，在 `JavaScript` 中，布尔类型分为真值(`true`)和假值(`false`)

- **假值**：可以被强制类型转换为 `false` 的值
- **真值**：除假值之外的值

::: tip ToBoolean 转换规则

- 以下值会被转换成假值(`false`)
  - **`undefined`**
  - **`null`**
  - **`false`**
  - **`+0 0 -0 NaN`**
  - **`''`**
- 除假值之外的值都会被转换成真值(`true`)

:::

### ToNumber

`ToNumber` 用来处理非数字值到数字值的类型转换

::: tip ToNumber 转换规则

- 基本类型
  - `undefined` => `NaN`
  - `null` => `0`
  - `true` => `1`
  - `false` => `0`
  - `string`
    - 空字符串(`''`) => `0`
    - 非数字字符串 => `NaN`
- 引用类型会先调用 `ToPrimitive` 逻辑将其转换成基本类型，如果返回的基本类型不是数值，再遵循以上规则进行转换

:::

## 显式类型转换

显式类型转换是指显式的去调用类型转换方法

- 转换成布尔值
  - `Boolean()`
- 转换成数值
  - `Number()`
  - `parseInt()`
  - `parseFloat()`
- 转换成字符串
  - `String()`

::: warning 注意点

- `Number()` 转换的是整个值
- `parseInt()` 和 `parseFloat()` 转换的是部分值，是对字符串逐个进行解析和转换，如果传入的参数不是字符串，会先对其进行字符串的转换

:::

## 隐式类型转换

隐式类型转换是指在执行过程中，当实际操作的值与 `JavaScript` 内部期望得到的值不同时，就会对其做隐式类型转换(即不易察觉的类型转换)<br>
在 `JavaScript` 中有以下场景会发生隐式类型转换

- 四则运算符 (`+ - * /`)
- 相等运算符 (`==`)
- 关系运算符 (`> < >= <=`)
- 逻辑操作符 (`&& ||`)
- 条件判断语句
  - `if()`
  - `while()`
  - 三元运算符

::: tip 四则运算符运算规则

- `-`(减) `*`(乘) `/`(除) 运算符: 先对操作数做 `ToNumber` 处理再执行运算
- `+`(加) 运算符
  - 做一元运算时，对操作数做 `ToNumber` 处理
  - 做二元运算时
    - 当其中一个操作数为 `string` 时，将另一个操作数做 `ToString` 处理再执行字符串拼接
    - 当一个操作数为 `number` 另一个操作数为基本类型时，将基本类型做 `ToNumber` 处理再执行运算
    - 当一个操作数为 `number` 另一个操作数为引用类型时，都会先做 `ToString` 处理再执行字符串拼接

:::

::: tip 相等运算符运算规则

- `boolean` 与其它类型进行比较时，将 `boolean` 做 `ToNumber` 处理
- `string` 与 `number` 进行比较时，将 `string` 做 `ToNumber` 处理
- `undefined` 与 `null` 比较时返回 `true`
- `undefined` `null` 与其它类型的比较时都返回 `false`
- `引用类型` 与 `基本类型` 进行比较时，将 `引用类型` 做 `ToPrimitive` 处理
- `引用类型` 与 `引用类型` 比较时，直接判断引用地址是否一致

:::

::: tip 关系运算符运算规则

- 将引用类型做 `ToPrimitive` 处理
- 如果两个参数都是 `string` 类型时进行 `Unicode 编码` 大小比较
- 否则将两个参数做 `ToNumber` 处理，再进行数值大小比较

:::

::: tip
在**逻辑操作符**与**条件判断语句**中都是做 `ToBoolean` 处理
:::
