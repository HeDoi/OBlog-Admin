import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    const { success, data, message } = response.data
    if (success) {
      ElMessage.success(message)
      return data
    } else {
      console.log(data)
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
