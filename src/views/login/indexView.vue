<template>
  <div class="login-page">
    <div class="main-bg">
    </div>
    <div class="login-container">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form class="login-form" ref="loginFromRef" :model="loginFrom" :rules="loginRules">
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
        <el-button type="primary" size="default" :loading="loading" @click="handlerLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
const loginFrom = ref({
  username: 'super-admin',
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

const loading = ref(false)
const loginFromRef = ref(null)
const store = useStore()
const handlerLogin = () => {
  // 进行表单校验
  loginFromRef.value.validate(valid => {
    if (!valid) {
      loading.value = true
    } else {
      loading.value = true
      // 进行登录
      store.dispatch('user/login', loginFrom.value)
        .then(() => {
          loading.value = false
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          loading.value = false
        })
    }
  })
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
