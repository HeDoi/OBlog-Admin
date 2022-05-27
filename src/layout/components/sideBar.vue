<template>
  <div></div>
</template>

<script setup>
import {} from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateRoutes } from '@/utils/route'
const router = useRouter()
const filterRoute = filterRoutes(router.getRoutes())
const routes = generateRoutes(filterRoute)

console.log(JSON.stringify(routes))
</script>

<style lang="scss" scoped>
</style>
