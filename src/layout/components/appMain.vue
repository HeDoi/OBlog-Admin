<template>
  <div class="app-main">
    <router-view ></router-view>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.app-main {
  width: 100%;
  height: calc(100vh - $navBarHeight);
  position: relative;
  overflow: hidden;
  padding: .61rem .2rem .2rem .2rem;
  box-sizing: border-box;
}
</style>
