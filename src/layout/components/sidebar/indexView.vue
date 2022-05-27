<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <div class="icon-container">图标</div>
      <sidebar-menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import sidebarMenu from './sidebarMenu'
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.sidebar-container {
  background-color: $sideBarBackground;

  .icon-container {
    height: 100px;
    padding: 24px;
    text-align: center;
    line-height: 50px;
    font-size: 32px;
  }
}
:deep(.el-menu){
  border-right: none !important;
}
</style>
