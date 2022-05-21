<template>
  <div class="login-page">
    <div class="main-bg">
    </div>
    <div class="login-container">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form class="login-form">
        <el-form-item>
          <span class="svg-container">
            <i class="iconfont icon-user"></i>
          </span>
          <el-input name="username" type="text">
            <template #suffix>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <span class="svg-container">
            <i class="iconfont icon-password"></i>
          </span>
          <el-input name="password">
            <template #suffix>
            </template>
          </el-input>
          <span class="show-pwd">
            <i class="iconfont icon-view-off"></i>
          </span>
        </el-form-item>
        <el-button type="primary" size="default" style="width: 100%">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
@import url(//at.alicdn.com/t/font_3418537_ltqyl35tn4.css);
@import '@/style/login/login.scss';
.iconfont {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  vertical-align: -0.15em;
  font-size: 1em;
}
</style>
