import { setItem, getItem } from './storage'
import { LOGIN_TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constants'

// 获取登陆时间戳
export function getLoginTime () {
  return getItem(LOGIN_TIME_STAMP)
}

// 设置登陆时间戳
export function setLoginTime () {
  setItem(LOGIN_TIME_STAMP, Date.now())
}

// 失效时间戳
export function tokenTimeOut () {
  const loginTime = getLoginTime()
  const now = Date.now()
  return now - loginTime > TOKEN_TIMEOUT_VALUE
}
