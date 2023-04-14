# 第三方库踩坑记录

## `moment` 迁移到 `dayjs`

在做 `webpack` 构建优化时，会使用 [antd-dayjs-webpack-plugin](https://github.com/ant-design/antd-dayjs-webpack-plugin) 插件将 `moment` 替换为 `dayjs`

在迁移时需要注意这些方法的部分参数不一致

- `add` 增加时间
- `subtract` 减少时间
- `startOf` 开始时间
- `endOf` 结束时间

| 描述 | `moment` 支持的参数               | `dayjs` 支持的参数                |
| ---- | --------------------------------- | --------------------------------- |
| 年   | `years` `year` `Y` `y`            | `years` `year` `y`                |
| 月   | `months` `month` `M`              | `months` `month` `M`              |
| 周   | `weeks` `week` `w`                | `weeks` `week` `w`                |
| 日   | `days` `day` `d`                  | `days` `day` `d`                  |
| 时   | `hours` `hour` `H` `h`            | `hours` `hour` `h`                |
| 分   | `minutes` `minute` `m`            | `minutes` `minute` `m`            |
| 秒   | `seconds` `second` `s`            | `seconds` `second` `s`            |
| 毫秒 | `milliseconds` `millisecond` `ms` | `milliseconds` `millisecond` `ms` |

- [Moment.js 文档](https://momentjs.com/docs/#/manipulating/add/)
- [Day.js 文档](https://day.js.org/docs/en/manipulate/add)
