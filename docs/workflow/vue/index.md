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

```vue
<template>
  <div class="container" @click="handleClick"></div>
</template>
<script>
import { debounce } from 'lodash-es'
export default {
  methods: {
    handleClick: debounce(function () {}, 500)
  }
}
</script>
```

[官网例子](https://cn.vuejs.org/v2/guide/migration.html#%E5%B8%A6%E6%9C%89-debounce-%E7%9A%84-v-model%E7%A7%BB%E9%99%A4)
