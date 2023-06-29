# `Vue` 实用技巧

## `Vue2` 在父组件中监听子组件的生命周期钩子

```vue
<template>
  <child @hook:mounted="onChildMounted"></child>
</template>
<script>
export default {
  methods: {
    onChildMounted() {}
  }
}
</script>
```

[相关源码](https://github.com/vuejs/vue/blob/dev/src/core/instance/lifecycle.js#L347)

## 在 `methods` 中使用 `debounce` / `throttle`

```vue{8,9}
<template>
  <div class="container" @click="handleClick"></div>
</template>
<script>
import { debounce } from 'lodash-es'
export default {
  methods: {
    // 猪猪：这里不能使用箭头函数，否则 this 会指向 window 或 undefined
    handleClick: debounce(function () {}, 500)
  }
}
</script>
```

[替换 debounce 过滤器 | Vue.js 官方文档](https://v2.cn.vuejs.org/v2/guide/migration.html#%E6%8F%92%E5%85%A5%E6%96%87%E6%9C%AC%E4%B9%8B%E5%A4%96%E7%9A%84%E8%BF%87%E6%BB%A4%E5%99%A8%E7%A7%BB%E9%99%A4)
