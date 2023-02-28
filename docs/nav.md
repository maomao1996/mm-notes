---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './nav/components/MNavLinks.vue'

import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
