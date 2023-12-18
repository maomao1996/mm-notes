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

```vue preview
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
  const diff = target.diff(now)

  if (diff <= 0) {
    cancelAnimationFrame(timer.value)
    return
  }

  count.value = dayjs.duration(diff)
  timer.value = requestAnimationFrame(countdown)
}

onMounted(() => {
  timer.value = requestAnimationFrame(countdown)
})

onUnmounted(() => {
  cancelAnimationFrame(timer.value)
})
</script>

<template>
  <div class="flex m-1">
    <div class="w-36">使用 format 方法：</div>
    <div class="flex-1">
      <div
        class="countdown"
        v-html="
          count.format('[<span>]HH[</span>] 时 [<span>]mm[</span>] 分 [<span>]ss[</span>] 秒')
        "
      ></div>
      <div class="mt-1">{{ count.format('D 天 HH 时 mm 分 ss 秒') }}</div>
      <div class="mt-1">{{ count.format('DD : HH : mm : ss') }}</div>
      <div class="mt-1">{{ count.format('HH-mm-ss') }}</div>
    </div>
  </div>
  <div class="flex m-1">
    <div class="w-36">使用取值方法：</div>
    <div class="countdown">
      <span>{{ count.hours() }}</span>
      时
      <span>{{ count.minutes() }}</span>
      分
      <span>{{ count.seconds() }}</span>
      秒
      <span>{{ count.milliseconds() }}</span>
    </div>
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

## 常用预设范围

常用于 `antd` 的 [`RangePicker` 组件](https://ant.design/components/date-picker-cn#components-date-picker-demo-presetted-ranges)

::: code-group

```js [在 antd 5 使用]
import dayjs from 'dayjs'

// 获取当前的时间
const now = dayjs()

/* antd 5 为 presets 属性 */
const presets = [
  { label: '今天', value: [now.startOf('day'), now] },
  {
    label: '昨天',
    value: [now.subtract(1, 'day').startOf('day'), now.subtract(1, 'day').endOf('day')],
  },
  {
    label: '前天',
    value: [now.subtract(2, 'day').startOf('day'), now.subtract(2, 'day').endOf('day')],
  },

  { label: '本周', value: [now.subtract(1, 'week').startOf('day'), now] },
  {
    label: '上周',
    value: [now.subtract(1, 'week').startOf('week'), now.subtract(1, 'week').endOf('week')],
  },

  { label: '本月', value: [now.startOf('month'), now] },
  {
    label: '上个月',
    value: [now.subtract(1, 'month').startOf('month'), now.subtract(1, 'month').endOf('month')],
  },

  { label: '今年', value: [now.startOf('year'), now] },
  {
    label: '去年',
    value: [now.subtract(1, 'year').startOf('year'), now.subtract(1, 'year').endOf('year')],
  },
  {
    label: '前年',
    value: [now.subtract(2, 'year').startOf('year'), now.subtract(2, 'year').endOf('year')],
  },

  { label: '近7天', value: [now.subtract(7, 'day'), now] },
  { label: '近15天', value: [now.subtract(15, 'day'), now] },
  { label: '近30天', value: [now.subtract(30, 'day'), now] },
  { label: '近90天', value: [now.subtract(90, 'day'), now] },
  { label: '近180天', value: [now.subtract(180, 'day'), now] },
  { label: '近一年', value: [now.subtract(1, 'year'), now] },
]
```

```js [在 antd 4 使用]
import dayjs from 'dayjs'

// 获取当前的时间
const now = dayjs()

/* antd 4 为 ranges 属性 */
const ranges = {
  今天: [now.startOf('day'), now],
  昨天: [now.subtract(1, 'day').startOf('day'), now.subtract(1, 'day').endOf('day')],
  前天: [now.subtract(2, 'day').startOf('day'), now.subtract(2, 'day').endOf('day')],

  本周: [now.subtract(1, 'week').startOf('day'), now],
  上周: [now.subtract(1, 'week').startOf('week'), now.subtract(1, 'week').endOf('week')],

  本月: [now.startOf('month'), now],
  上个月: [now.subtract(1, 'month').startOf('month'), now.subtract(1, 'month').endOf('month')],

  今年: [now.startOf('year'), now],
  去年: [now.subtract(1, 'year').startOf('year'), now.subtract(1, 'year').endOf('year')],
  前年: [now.subtract(2, 'year').startOf('year'), now.subtract(2, 'year').endOf('year')],

  近7天: [now.subtract(7, 'day'), now],
  近15天: [now.subtract(15, 'day'), now],
  近30天: [now.subtract(30, 'day'), now],
  近90天: [now.subtract(90, 'day'), now],
  近180天: [now.subtract(180, 'day'), now],
  近一年: [now.subtract(1, 'year'), now],
}
```

:::

::: tip 注意点

- 相对范围的截止时间为当前时间
- 绝对范围的截止时间为最后一天的 `23:59:00`

:::
