<script setup lang="ts">
import { inject, Ref } from 'vue'
import { useRoute } from 'vitepress'

const DEV = inject('DEV') as Ref<boolean>
const route = useRoute()
</script>

<template>
  <img
    v-if="!DEV"
    class="visitor"
    :src="`https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes&p=${route.path}`"
    onerror="this.style.display='none'"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>
