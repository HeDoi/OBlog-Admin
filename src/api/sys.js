import request from '@/utils/axios'

/**
 * 接口请求模块
 */
export const login = data => {
  return request({
    url: 'sys/login',
    method: 'POST',
    data
  })
}
/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: 'sys/profile',
    method: 'GET'
  })
}
