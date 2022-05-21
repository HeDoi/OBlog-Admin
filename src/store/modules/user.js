import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => {},
  mutations: {},
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
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
