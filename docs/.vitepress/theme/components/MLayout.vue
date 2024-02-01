<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import Giscus from '@giscus/vue'

import { usePageId } from '../composables'

import MNavVisitor from './MNavVisitor.vue'
import MDocFooter from './MDocFooter.vue'
import MAsideSponsors from './MAsideSponsors.vue'

const { Layout } = DefaultTheme
const { isDark } = useData()
const pageId = usePageId()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  // @ts-ignore
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <Layout v-bind="$attrs">
    <!--
      相关插槽
      https://vitepress.dev/guide/extending-default-theme#layout-slots
      https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
    -->
    <template #nav-bar-title-after>
      <MNavVisitor />
    </template>
    <template #doc-footer-before>
      <div class="doc-comments">
        <Giscus
          id="comments"
          repo="maomao1996/mm-notes"
          repoId="MDEwOlJlcG9zaXRvcnkxNTc0ODc5Mjg="
          category="Announcements"
          categoryId="DIC_kwDOCWMTOM4CZ2rf"
          mapping="specific"
          :term="pageId"
          strict="1"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          :theme="isDark ? 'dark' : 'light'"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </template>
    <template #doc-after>
      <MDocFooter />
    </template>
    <template #aside-bottom>
      <MAsideSponsors />
    </template>
  </Layout>
</template>

<style>
.prev-next.prev-next {
  border-top: none;
}

.doc-comments {
  margin-top: 24px;
  margin-bottom: 48px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}
</style>
