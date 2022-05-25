<template>
  <div class="navBar">
    <div class="right-menu">
      <el-dropdown class="avatar-wrapper" trigger="click">
        <div class="avatar-container">
          <el-avatar shape="square" :size="40" :src="store.getters.userInfo.avatar"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <a href="/">
              <el-dropdown-item>课程首页</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="handleLoginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import store from '@/store'
const handleLoginOut = () => {
  store.dispatch('user/loginOut')
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.navBar {
  height: $navBarHeight;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgb(0, 21, 41, 0.08);

  .right-menu {
    display: flex;
    align-items: center;
    float: right;

    :deep(.avatar-wrapper) {
      cursor: pointer;

      .avatar-container {
        margin-top: calc((#{$navBarHeight} - 40px) / 2);
        position: relative;

        .el-avatar {
          --el-avatar-border-radius: none;
          --el-avatar-bg-color: none;
        }
      }
    }
  }
}
</style>
