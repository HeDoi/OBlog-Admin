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

:deep(.el-menu) {
  border-right: none !important;
  overflow: hidden !important;
}

:deep(.el-menu--inline) {
  .el-menu-item:hover {
    background-color: transparent !important;
    border-radius: 0px !important;
  }
  .el-menu-item::after,
  .el-menu-item:hover::after {
    content: "";
    position: absolute;
    width: 00%;
    height: 2px;
    left: 40px;
    bottom: 0;
    background-color: #5e72e4;
    transition: all 0.2s;
  }
  .el-menu-item:hover::after {
    width: 70%;
  }
  > .is-active::after {
    width: 70%;
  }
}

:deep(.menu) {
  span {
    line-height: 40px;
    height: 40px;
  }
  .el-menu-item,
  .el-sub-menu__title {
    margin: 2px 10px;
    transition: none !important;
    height: 40px !important;
  }
  > .el-menu-item,
  .el-sub-menu__title {
    &:hover {
      background-color: #1F7290 !important;
      border-radius: 5px;
    }
  }
  > .is-active {
    background-color: #1F7290;
    border-radius: 5px;

    > .el-sub-menu__title {
      background-color: #1F7290 !important;
      border-radius: 5px;
    }
  }

  > .el-sub-menu {
    background-color: transparent;
  }
}
</style>
