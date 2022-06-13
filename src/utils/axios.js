import md5 from 'md5'
import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { tokenTimeOut } from '@/utils/auth'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      if (tokenTimeOut()) {
        store.dispatch('user/loginOut')
        return Promise.reject(new Error('token过期'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    const now = parseInt(Date.now() / 1000)
    const code = now + 'LGD_Sunday-1991'
    config.headers.icode = md5(code)
    config.headers.codeType = now
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { success, data, message } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  error => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
