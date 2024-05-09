---
description: 记录开发中的一些常用方法：环境判断、验证 url 是否有效、提取身份证信息
---

# 常用代码片段

> 收集开发中的一些常用代码片段

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

## 主题切换

根据用户的主题首选项（`light`、`dark` 或 `system`）切换主题

```js
;(() => {
  try {
    const rootElement = document.documentElement
    const classList = rootElement.classList
    const userTheme = localStorage.getItem('theme')

    // 移除 'light' 和 'dark' class，确保没有重复的主题类
    classList.remove('light', 'dark')

    // 判断用户的主题首选项
    if (userTheme === 'system' || !userTheme) {
      // 判断用户的系统主题首选项是否为 dark
      const systemDarkQuery = '(prefers-color-scheme: dark)'
      const systemMatchMedia = window.matchMedia(systemDarkQuery)
      const isSystemDark = systemMatchMedia.media !== systemDarkQuery || systemMatchMedia.matches

      // 根据系统主题设置添加对应的 class 和 document 的颜色模式
      if (isSystemDark) {
        classList.add('dark')
        rootElement.style.colorScheme = 'dark'
      } else {
        classList.add('light')
        rootElement.style.colorScheme = 'light'
      }
    } else {
      // 如果用户设置了具体的主题首选项（'light' 或 'dark'），则添加对应的 class 和 document 的颜色模式
      classList.add(userTheme)
      rootElement.style.colorScheme = userTheme
    }
  } catch (e) {}
})()
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

## 金额格式化（保留两位小数）

```js
function formatNumber(value) {
  const num = parseFloat(value)

  if (isNaN(num)) {
    return 'Invalid number'
  }

  const [integer, decimal] = num.toFixed(2).split('.')
  return `${integer.replace(/\B(?=(\d{3})+\b)/g, ',')}.${decimal}`
}

formatNumber(0) // '0.00'
formatNumber(12) // '12.00'
formatNumber(123.4) // '123.40'
formatNumber(12345.6789) // '12,345.68'
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
