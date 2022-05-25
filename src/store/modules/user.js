import md5 from 'md5'
import router from '@/router'
import { getUserInfo, login } from '@/api/sys'
import { getItem, setItem, clear } from '@/utils/storage'
import { setLoginTime } from '@/utils/auth'
import { TOKEN } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 封装登录请求动作
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      // 返回promise对象
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(data => {
          // 设置token
          this.commit('user/setToken', data.token)
          // 设置登陆时间
          setLoginTime()
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    /**
     * 获取用户信息请求动作
     */
    async getUserInfo (context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    /**
     * 退出登录
     */
    loginOut () {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      clear()
      router.push('/login')
    }
  }
}
