<template>
  <el-tag
    v-for="(tag, index) in $store.getters.tagsViewList"
    :key="tag.fullPath"
    class="mx-1"
    :type="tag.type"
    :closable="!isActive(tag.fullPath)"
    @close="onCloseClick(index)"
    :class="{ active: isActive(tag.fullPath) }"
  >
    <router-link :to="{path: tag.fullPath}" >
      {{ tag.title }}
    </router-link>
  </el-tag>
</template>

<script setup>
import {} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
console.log(route.path)
const isActive = (path) => {
  return route.path === path
}
const store = useStore()
const onCloseClick = (index) => {
  store.commit('app/removeTagsView', {
    type: 'index',
    index: index
  })
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.el-tag {
  position: relative;
  margin-right: 10px;
  // min-width: 82px;
  background-color: $appMainBackground;
  color: $textColor;
  border: none !important;

  :deep(.el-tag__close) {
    color: $textColor !important;
  }
  &::after,
  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    background-color: #5e72e4;
    transition: all 0.2s;
  }
  &:hover::after {
    width: 00%;
  }
  > &::after {
    width: 00%;
  }
}
.active::before {
  content: "";
  background: #fff;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  margin-right: 6px;
}
</style>
