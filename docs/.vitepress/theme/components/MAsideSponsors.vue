<script setup lang="ts">
import { withBase } from 'vitepress'
import { VPDocAsideSponsors } from 'vitepress/theme'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const data = [
  {
    items: [
      {
        img: withBase('/sponsor/wechat-color.webp')
      }
    ]
  },
  {
    items: [
      {
        img: withBase('/sponsor/alipay-color.webp')
      }
    ]
  }
]
</script>

<template>
  <p class="m-sponsor-title">
    鼓励作者：欢迎
    <VPLink href="https://github.com/maomao1996/mm-notes" no-icon>star</VPLink>
    或打赏犒劳
  </p>
  <VPDocAsideSponsors :data="data" />
</template>

<style lang="scss">
.m-sponsor-title {
  margin-top: 10px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand);

  .VPLink {
    text-decoration: underline;

    &:hover {
      color: var(--vp-c-brand-2);
    }
  }
}

.vp-sponsor-grid.vp-sponsor-grid {
  .vp-sponsor-grid-link {
    height: 144px;
  }
  .vp-sponsor-grid-image {
    max-width: none;
    max-height: 128px;
    filter: grayscale(0.8);
  }
}

.dark .vp-sponsor-grid-item:hover {
  background: var(--vp-custom-block-info-bg);
}
.vp-sponsor-grid-item:hover .vp-sponsor-grid-image {
  filter: none;
}
</style>
