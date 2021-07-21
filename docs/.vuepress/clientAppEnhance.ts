import { defineClientAppEnhance } from '@vuepress/client'
import ScriptX from 'vue-scriptx'

export default defineClientAppEnhance(({ app }) => {
  app.use(ScriptX)
})
