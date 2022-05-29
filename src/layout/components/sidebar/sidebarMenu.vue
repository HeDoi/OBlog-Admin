<template>
  <el-menu
    class="menu"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.sideBarBackground"
    :text-color="$store.getters.cssVar.sideBarTextColor"
    :active-text-color="$store.getters.cssVar.sideBarTextColor"
    :unique-opened="true"
    router
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
    <!-- 自定义sidebar菜单插槽 -->
    <el-menu-item disabled>
      Sidebar
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import sidebarItem from './sidebarItem.vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRoutes, generateRoutes } from '@/utils/route'

const router = useRouter()
const routes = computed(() => {
  const filterRoute = filterRoutes(router.getRoutes())
  return generateRoutes(filterRoute)
})

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped>

</style>
