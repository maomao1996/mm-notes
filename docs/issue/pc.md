# PC 相关

## `transform` 导致字体不清晰

#### 原因

`transform` 在渲染非整数的 `px` 时就会出现字体模糊。

#### 解决方案

方案一

```css
目标元素 {
  -webkit-font-smoothing: antialiased;
}
```

方案二

```css
目标元素 {
  transform: perspective(1px);
}
```

[详细说明 CSS-TRACKS](https://css-tricks.com/forums/topic/transforms-cause-font-smoothing-weirdness-in-webkit/)
