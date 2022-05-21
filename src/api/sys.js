import request from '@/utils/axios'

/**
 * 接口请求模块
 */
export const login = data => {
  return request({
    url: '/login',
    methods: 'POST',
    data
  })
}
