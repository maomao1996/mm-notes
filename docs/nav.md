---
description: 前端导航是由茂茂制作并收录了大量高质量前端相关站点，为前端开发工程师提供最简单便捷的网址导航服务
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.scss"></style>

# 前端导航

<MNavLinks v-for="item in NAV_DATA" v-bind="item"/>
