import  request  from './request'

export function register(data) {
  // console.log(data)
  return request({
    url: '/api/auth/register',
    method: 'post',
    data
  })
}

export function login(data) {
  console.log(data)

  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/auth/logout',
    method: 'post'

  })
}
