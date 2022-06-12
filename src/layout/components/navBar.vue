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
    <div class="left-menu">
      <el-breadcrumb class="breadcrumb" separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
            <span class="no-redirect" v-if="index === breadcrumbData.length -1">{{ generateTitle(item.meta.title) }}</span>
            <router-link class="redirect" v-else :to="item.path">{{ generateTitle(item.meta.title) }}</router-link>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
  </div>
  <div class="tag-wrapper">
    <TagsView></TagsView>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { generateTitle } from '@/i18n'
import TagsView from '@/components/TagsView'

const store = useStore()
const handleLoginOut = () => {
  store.dispatch('user/loginOut')
}

const route = useRoute()
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    item => item.meta.sidebar
  )
}
watch(route, () => {
  getBreadcrumbData()
}, {
  immediate: true
})
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.navBar {
  min-height: $navBarHeight;
  overflow: hidden;
  position: relative;
  padding: 0 10px 0 40px;
  background-color: $navBarBackground;

  .right-menu {
    display: flex;
    align-items: center;
    float: right;

    :deep(.avatar-wrapper) {
      cursor: pointer;

      .avatar-container {
        margin: calc((#{$navBarHeight} - 40px) / 2);
        position: relative;

        .el-avatar {
          --el-avatar-border-radius: none;
          --el-avatar-bg-color: none;
        }
      }
    }
  }

  .left-menu {
    height: $navBarHeight;
    display: flex;
    align-items: center;
    float: left;

    :deep(.el-breadcrumb__inner) {
      color: $textColor;
      font-size: 18px;

      .no-redirect {
        color: $textColor;
        transition: all 0.5s;
      }
      .redirect {
        color: #56505B;
      }
    }
  }
}
// 面包屑动画
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
.breadcrumb-enter-from {
  opacity: 0;
  // position: absolute;
  // left: 100px;
  transform: translateX(15px);
}
.breadcrumb-leave-active {
  display: none;
}
.breadcrumb-leave-active {
  position: absolute;
}

.tag-wrapper {
  min-height: $tagHeight;
  line-height: $tagHeight;
  padding: 0 10px 0 20px;
  background-color:  $navBarBackground;
}
</style>
