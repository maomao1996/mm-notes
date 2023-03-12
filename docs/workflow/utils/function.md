---
description: 记录开发中的一些常用方法：环境判断、验证url是否有效、提取身份证信息
---

# 常用方法

> 收集开发中的一些常用方法

## 环境判断

```js
const UA = window.navigator.userAgent.toLowerCase()

// Android
const isAndroid = /android/.test(UA)

// IOS
const isIOS = /iphone|ipad|ipod|ios/.test(UA)

// 浏览器环境
const inBrowser = typeof window !== 'undefined'

// IE
const isIE = /msie|trident/.test(UA)

// Edge
const isEdge = UA.indexOf('edge/') > 0

// Chrome
const isChrome = /chrome\/\d+/.test(UA) && !isEdge

// 微信
const isWeChat = /micromessenger/.test(UA)

// 移动端
const isMobile = 'ontouchstart' in window
```

## 微信 `api promise` 化

```js
function promisify(fn) {
  return function (options) {
    return new Promise((resolve, reject) => {
      fn(
        Object.assign({}, options, {
          success: resolve,
          fail: reject
        })
      )
    })
  }
}

// 例 获取系统信息
promisify(wx.getSystemInfo)
  .then((res) => {
    console.log('success', res)
  })
  .catch((err) => {
    console.log('fail', err)
  })
```

## 验证 `url` 是否有效

```js
function isUrl(string) {
  if (typeof string !== 'string') {
    return false
  }
  try {
    new URL(string)
    return true
  } catch (err) {
    return false
  }
}

isUrl('maomao') // false

isUrl('https://github.com/maomao1996') // true
isUrl('https://a.b.c') // true
```

::: warning 注意
该技巧只适用于一些验证不严格的场景，[严格场景下可以使用这个 npm 包 —— is-url](https://github.com/segmentio/is-url)
:::

## 提取身份证信息

- #### 参数

  - **idCard:** 身份证号码
  - **separator:** 出生年月日的分割字符，默认为 `/`

- #### 返回值

  - **age:** 年龄（实岁）
  - **birthday:** 出生年月日
  - **gender:** 性别（0 女 1 男）

```js
function getIdCardInfo(idCard, separator = '/') {
  if (
    !/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
      idCard
    )
  ) {
    throw Error(`${idCard}不是一个身份证号码`)
  }
  // 提取 idCard 中的字符
  const idSubstr = (s, e) => idCard.substr(s, e)
  // 拼接日期
  const splice = (d) => d.join(separator)
  // 获取出生年月日 性别（0 女 1 男）
  let birthday, gender
  if (idCard.length === 18) {
    birthday = splice([idSubstr(6, 4), idSubstr(10, 2), idSubstr(12, 2)])
    gender = idSubstr(-2, 1) & 1
  } else {
    birthday = splice(idSubstr(6, 2), idSubstr(8, 2), idSubstr(10, 2))
    gender = idSubstr(-1, 1) & 1
  }
  // 获取年龄（实岁）
  const birthDate = new Date(birthday)
  const newDate = new Date()
  const year = newDate.getFullYear()
  let age = year - birthDate.getFullYear()
  if (newDate < new Date(splice([year, birthday.substring(5)]))) {
    age--
  }
  return {
    age,
    birthday,
    gender
  }
}
```
