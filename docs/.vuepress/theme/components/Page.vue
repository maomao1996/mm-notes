<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />

    <div id="gitalk-container"></div>
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'
import PageNav from '@parent-theme/components/PageNav.vue'
import Gitalk from 'gitalk'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  mounted() {
    this.init(location.pathname)
    this.$router.afterEach((to, from) => {
      if (to.path !== from.path) {
        console.log(to.path, from.path, '页面切换了')
        this.init(to.path)
      }
    })
  },
  methods: {
    init(path) {
      path = path.includes('/mm-notes') ? path : `/mm-notes${path}`
      const gitalk = new Gitalk({
        clientID: '40db65c1f8a836e97eea',
        clientSecret: 'eecd8e449183d4681af6240cbb5abb8db664c712',
        repo: 'mm-notes',
        owner: 'maomao1996',
        admin: ['maomao1996'],
        id: path,
        body: path,
        distractionFreeMode: false
      })
      const dom = document.getElementById('gitalk-container')
      dom && (dom.innerHTML = '')
      gitalk.render('gitalk-container')
    }
  }
}
</script>

<style lang="stylus">
// @require '../styles/wrapper.styl'
@require '../../styles/gitalk.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

#gitalk-container {
  padding: 0 2.25rem;
  max-width: $contentWidth;
  margin: 0 auto;
}
</style>
