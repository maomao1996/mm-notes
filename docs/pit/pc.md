---
outline: 2
---

# PC 踩坑记录

## `transform` 导致字体不清晰

`transform` 在**渲染非整数的 `px` 时**就会出现字体模糊

#### 解决方法

```css
/* 方案一 */
目标元素 {
  -webkit-font-smoothing: antialiased;
}

/* 方案二 */
目标元素 {
  transform: perspective(1px);
}
```

[详细说明 CSS-TRACKS](https://css-tricks.com/forums/topic/transforms-cause-font-smoothing-weirdness-in-webkit/)

## 删除 `PWA` 服务后，浏览器无法更新到最新页面

本站之前使用了 `PWA`，在切换到 `vitepress` 后移除了 `PWA` 服务，在部署后浏览器仍然访问的是 `vuepress` 版本的

#### 解决方法

```js
/* 注销 PWA 服务 */
if (window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
}

/* 删除浏览器中的缓存 */
if ('caches' in window) {
  caches.keys().then(function (keyList) {
    return Promise.all(
      keyList.map(function (key) {
        return caches.delete(key)
      })
    )
  })
}
```
