---
outline: [2, 3]
description: 收集个人使用过或遇到的JavaScript工具库
---

<script setup>
import { DATA } from './library-data'
</script>

# 常用工具库整理

> 收集个人使用过或遇到的类库，按照类别进行分类，方便查找（不定期更新）

<MNavLinks v-for="item in DATA" noIcon v-bind="item"/>
