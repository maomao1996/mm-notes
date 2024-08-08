<script setup lang="ts">
import { FRIEND_DATA } from './friend-data'
</script>

<template>
  <div class="pt-8">
    <MNavLinks v-bind="FRIEND_DATA" />
  </div>
</template>
