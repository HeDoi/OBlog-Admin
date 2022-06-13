<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { isTags } from '@/utils/tags'
import { useStore } from 'vuex'
import { generateTitle } from '@/i18n'

const route = useRoute()
const store = useStore()

const getTitle = route => {
  let title = ''
  if (!route.meta) {
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }
  return title
}

watch(route, (to, from) => {
  if (!isTags(to.path)) return
  const { fullPath, meta, name, params, path, query } = to
  store.commit('app/addTagsViewList', {
    fullPath,
    meta,
    name,
    params,
    path,
    query,
    title: getTitle(to)
  })
},
{
  immediate: true
})
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.app-main {
  width: 100%;
  height: calc(100vh - $navBarHeight);
  position: relative;
  overflow: hidden;
  padding: .61rem .2rem .2rem .2rem;
  box-sizing: border-box;
}
</style>
