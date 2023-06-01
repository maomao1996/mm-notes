<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const timer = ref(null)
const count = ref(dayjs.duration(0))

// 计算倒计时的时间差
const countdown = () => {
  const now = dayjs()
  const target = dayjs().endOf('D')
  const diff = target.diff(now);

  count.value = dayjs.duration(diff)
}

onMounted(() => {
  timer.value = setInterval(countdown, 30)
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

# Day.js 使用技巧

- [Day.js | GitHub](https://github.com/iamkun/dayjs)
- [Day.js | 文档](https://day.js.org/docs/en/installation/installation)

## 使用 `Day.js` 实现倒计时

- [duration 插件](https://day.js.org/docs/en/plugin/duration) 用于将时间差转换为 `Day.js` 对象

```js
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

// 配置 duration 插件
dayjs.extend(duration)

// 计算倒计时的时间差
const countdown = () => {
  const now = dayjs()
  // 目标日期（默认为当天 23:59:59）
  const target = dayjs().endOf('D')
  const diff = target.diff(now)

  // 将时间差转换为 Day.js 对象
  const duration = dayjs.duration(diff)

  // 输出倒计时结果（可直接使用 format 格式化）
  console.log(`倒计时：${duration.format('DD 天 HH 时 mm 分 ss 秒')}`)
}

// 使用定时器更新倒计时
setInterval(countdown, 1000)
```

格式化（以 `Vue` 举 🌰）

```vue
<script setup>
const format = '[<span>]HH[</span>] 时 [<span>]mm[</span>] 分 [<span>]ss[</span>] 秒'
</script>

<template>
  <div class="countdown" v-html="count.format(format)"></div>
  {{ count.format('D 天 HH 时 mm 分 ss 秒') }}
  {{ count.format('DD : HH : mm : ss') }}
  {{ count.format('HH-mm-ss') }}
  <div class="countdown">
    使用取值方法：
    <span>{{ count.hours() }}</span>
    时
    <span>{{ count.minutes() }}</span>
    分
    <span>{{ count.seconds() }}</span>
    秒
    <span>{{ count.milliseconds() }}</span>
  </div>
</template>
```

<style>
.countdown span {
  display: inline-block;
  border-radius: 4px;
  padding: 0 4px;
  min-width: 24px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  background: var(--vp-c-brand);
}
</style>

<div class="countdown" v-html="count.format('[<span>]HH[</span>] 时 [<span>]mm[</span>] 分 [<span>]ss[</span>] 秒')"></div>

{{count.format('D 天 HH 时 mm 分 ss 秒')}}

{{count.format('DD : HH : mm : ss')}}

{{count.format('HH-mm-ss')}}

<div class="countdown">
  使用取值方法：
  <span>{{ count.hours() }}</span>
  时
  <span>{{ count.minutes() }}</span>
  分
  <span>{{ count.seconds() }}</span>
  秒
  <span>{{ count.milliseconds() }}</span>
</div>

::: tip 优点

- 使用 `Day.js` 对象的 `format` 方法进行格式化
  - 无需自己实现格式化函数
  - 个位数时都不需要字符串补位操作
  - 在使用 `format` 时，在方括号中的字符不会被格式化替换
- 兼容性良好

:::

::: warning 缺点

当需求场景超出 `Day.js` 对象的 `format` 方法的能力时（即不是标准的年月日时分秒格式）需要自己实现格式化函数

- 40 天 13 时 14 分 00 秒
- 52 时 13 分 14 秒
- 100 分 50 秒

:::
