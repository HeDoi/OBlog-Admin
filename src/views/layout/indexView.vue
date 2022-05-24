<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <div class="fixed-header">
        <nav-bar class="navbar-container"></nav-bar>
      </div>
      <app-main class="main-container"></app-main>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import SideBar from './components/sideBar.vue'
import NavBar from './components/navBar.vue'
import AppMain from './components/appMain.vue'
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.app-wrapper {
  width: 100%;
  height: 100%;

  .sidebar-container {
    float: left;
    width: $sideBarWidth;
    height: 100%;
    background-color: #666;
  }
  .main-container {
    float: right;
    width: calc(100% - #{$sideBarWidth});
    height: 100%;

    .fixed-header {
      width: 100%;
      height: $navBarHeight;
      background-color: #777;
    }

    .main-container {
      width: 100%;
      height: calc(100% - #{$navBarHeight});
      background-color: #888;
    }
  }
}
</style>
