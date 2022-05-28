<template>
  <div class="app-wrapper">
    <sidebar-view class="sideBar-container"></sidebar-view>
    <div class="app-container">
      <div class="fixed-header">
        <nav-bar class="navBar-container"></nav-bar>
      </div>
      <app-main class="main-container"></app-main>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import SidebarView from './components/sidebar/indexView'
import NavBar from './components/navBar'
import AppMain from './components/appMain'
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

    .fixed-header {
      width: 100%;
      height: $navBarHeight;
    }

    .main-container {
      width: 100%;
      height: calc(100% - #{$navBarHeight});
      background-color: $appMainBackground;
    }
  }
}
</style>
