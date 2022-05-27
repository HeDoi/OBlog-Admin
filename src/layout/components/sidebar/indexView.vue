<template>
  <div class="">
    <el-scrollbar>
      <h1>占位</h1>
      <sidebar-menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import sidebarMenu from './sidebarMenu'
</script>

<style lang="scss" scoped>
:deep(.el-menu){
  border-right: none !important;
}
</style>
