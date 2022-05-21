<template>
  <div class="login-page">
    <div class="main-bg">
    </div>
    <div class="login-container">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form class="login-form" :model="loginFrom" :rules="loginRules">
        <el-form-item prop="username">
          <span class="svg-container">
            <i class="iconfont icon-user"></i>
          </span>
          <el-input name="username" type="text" v-model="loginFrom.username">
            <template #suffix>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="iconfont icon-password"></i>
          </span>
          <el-input name="password" :type="passwordShow?'text':'password'" v-model="loginFrom.password">
            <template #suffix>
            </template>
          </el-input>
          <span class="show-pwd" @click="onChangePasswordShow">
            <i class="iconfont" :class="passwordShow?'icon-view':'icon-view-off'"></i>
          </span>
        </el-form-item>
        <el-button type="primary" size="default" style="width: 100%">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loginFrom = ref({
  username: 'admin',
  password: '123456'
})

const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码应大于五位', trigger: 'blur', min: 6 }
  ]
}

const passwordShow = ref(false)
const onChangePasswordShow = () => {
  passwordShow.value = !passwordShow.value
}

</script>

<style lang="scss" scoped>
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
