import request from '@/utils/request'
import Qs from 'qs'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function loginByLoginId(loginId, password, kaptcha) {
  const data = {
    loginId,
    password,
    kaptcha
  }
  return request({
    url: '/user/login',
    method: 'post',
    data: Qs.stringify(data)
  })
}

