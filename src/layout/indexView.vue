<template>
  <div class="app-wrapper">
    <SidebarView class="sideBar-container"></SidebarView>
    <div class="app-container">
      <div class="fixed-header">
        <NavBar></NavBar>
      </div>
      <AppMain class="main-container"></AppMain>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import SidebarView from './components/sidebar/indexView.vue'
import NavBar from './components/navBar.vue'
import AppMain from './components/appMain.vue'
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.app-wrapper {
  width: 100%;
  height: 100%;
  color: $appMainTextColor;

  .sideBar-container {
    float: left;
    width: $sideBarWidth;
    height: 100%;
  }
  .app-container {
    float: right;
    width: calc(100% - #{$sideBarWidth});
    height: 100%;
    display: flex;
    flex-direction: column;

    .fixed-header {
      width: 100%;
      max-height: $navBarHeight + $tagHeight;
      flex: 1;
    }

    .main-container {
      width: 100%;
      background-color: $appMainBackground;
    }
  }
}
</style>
