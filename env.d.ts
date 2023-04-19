/// <reference types="vitepress/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vitepress/dist/client/theme-default/composables/sidebar' {
  import type { ComputedRef } from 'vue'
  // https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/composables/sidebar.ts#L31
  export function useSidebar(): { hasSidebar: ComputedRef<boolean> }
}
