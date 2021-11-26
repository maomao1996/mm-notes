# CSS 奇淫技巧

## 识别 HTML 字符中的 \n

::: tip
`white-space` 属性用于设置如何处理元素中的空白
:::

```css
white-space: pre;
```

|    属性值    | 换行符 | 空格和制表符 | 文字换行 |
| :----------: | :----: | :----------: | :------: |
|    normal    |  合并  |     合并     |   换行   |
|    nowrap    |  合并  |     合并     |  不换行  |
|     pre      |  保留  |     保留     |  不换行  |
|   pre-wrap   |  保留  |     保留     |   换行   |
|   pre-line   |  保留  |     合并     |   换行   |
| break-spaces |  保留  |     保留     |   换行   |

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)

## CSS(Unicode 字符) 实现换行

::: tip
在 `Unicode` 中，`0x000A` 字符是专门控制换行的。在 `CSS` 中，我们可以写为 `\A` 或 `\000A` 作为 `after` 伪元素的内容，并添加到指定元素中实现换行效果。
:::

```html
<div>
  <span class="br">前端常用知识软件推荐</span>
  <span class="br">踩坑记录</span>
  <span>各种兼容问题</span>
</div>
```

```css
.br::after {
  content: '\A';
  white-space: pre;
}
```

<style>
.br::after {
  content: '\A';
  white-space: pre;
}
</style>
<div>
  <span class="br">前端常用知识软件推荐</span>
  <span class="br">踩坑记录</span>
  <span>各种兼容问题</span>
</div>

[使用 CSS(Unicode 字符)让 inline 水平元素换行](https://www.zhangxinxu.com/wordpress/2012/03/tip-css-multiline-display/)
