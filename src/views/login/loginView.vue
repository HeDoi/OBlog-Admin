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
            <el-icon>
              <User />
            </el-icon>
          </span>
          <el-input name="username" type="text">
            <template #suffix>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <span class="svg-container">
            <el-icon>
              <Lock />
            </el-icon>
          </span>
          <el-input name="password">
            <template #suffix>
            </template>
          </el-input>
          <span class="show-pwd">
            <el-icon>
              <View />
            </el-icon>
          </span>
        </el-form-item>
        <el-button type="primary" size="default" style="width: 100%">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { User, Lock, View } from '@element-plus/icons'
import {} from 'vue'
</script>

<style lang="scss" scoped>
@import '@/style/login/login.scss'
</style>
