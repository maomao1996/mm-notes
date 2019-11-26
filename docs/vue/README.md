# Vue

## 在父组件中监听子组件的生命周期钩子

```vue
<template>
  <child @hook:mounted="onChildMounted"></child>
</template>
<script>
export default {
  methods: {
    onChildMounted() {}
  }
};
</script>
```
