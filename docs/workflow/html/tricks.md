# HTML 奇淫技巧

## 使用空格实体字符实现文本两端对齐

::: tip 三种空格实体字符

- **`&nbsp;`** 不换行空格（No-Break Space）
  - 占据的宽度可能会受到字体样式、容器宽度、CSS 布局和其他相关因素的影响
- **`&ensp;`** 半角空格（En Space）
  - **占据的宽度正好是 1/2 个中文字符的宽度**
- **`&emsp;`** 全角空格（Em Space）
  - **占据的宽度正好是 1 个中文字符的宽度**

:::

```html
<div>
  <div>姓&emsp;&emsp;名： 茂茂</div>
  <div>手&ensp;机&ensp;号： 15912341234</div>
  <div>电子邮箱： maomao@1996.com</div>
</div>
```

<div>
  <div>姓&emsp;&emsp;名： 茂茂</div>
  <div>手&ensp;机&ensp;号： 15912341234</div>
  <div>电子邮箱： maomao@1996.com</div>
</div>
