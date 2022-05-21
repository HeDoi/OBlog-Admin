import request from '@/utils/axios'
import md5 from 'md5'

/**
 * 接口请求模块
 */
export const login = data => {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return request({
    url: 'sys/login',
    method: 'POST',
    headers: {
      icode: md5(code),
      codeType: now
    },
    data
  })
}
