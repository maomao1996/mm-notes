<script setup lang="ts">
import { withBase } from 'vitepress'
import { VPDocAsideSponsors } from 'vitepress/theme'

const data = [
  {
    items: [{ img: withBase('/sponsor/wechat-color.jpg') }]
  },
  {
    items: [{ img: withBase('/sponsor/alipay-color.jpg') }]
  }
]
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 90px;
}
</style>
