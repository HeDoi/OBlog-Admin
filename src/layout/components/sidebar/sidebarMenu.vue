<template>
  <el-menu
    class="menu"
    :background-color="$store.getters.cssVar.sideBarBackground"
    :text-color="$store.getters.cssVar.sideBarTextColor"
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
import {} from 'vue'
import sidebarItem from './sidebarItem.vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateRoutes } from '@/utils/route'

const router = useRouter()
const filterRoute = filterRoutes(router.getRoutes())
const routes = generateRoutes(filterRoute)
</script>

<style lang="scss" scoped>

</style>
