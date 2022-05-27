<template>
  <el-menu class="menu">
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
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
