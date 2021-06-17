import axios from 'axios'
import { Notify, Toast } from 'vant'
import router from '../router'

function request(config) {
  const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    timeout: 5000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    // 如果有一些接口需要认证才可以访问，就在这里统一设置
    const bookshopToken = window.localStorage.getItem('bookshopToken')

    if (bookshopToken) {
      config.headers.Authorization = 'Bearer ' + bookshopToken
    }
    // 直接放行
    return config
  }, err => {
    return err
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data ? res.data : res
  }, err => {
    console.log(err.request)
    if (err.response) {
      console.log(err.response)

      if (err.response.status === 401) {
        Toast.fail('请先登录')
        setTimeout(() => {
          router.push({ path: '/login' })
        }, 1000)
      }
    } else if (err.request) {
      Toast.fail('网络好像出了点问题，等会再试试')
    }

    // 如果有需要授权才可以访问的接口，统一去login授权
    // err.response.data.message && Notify(err.response.data.message)
    // 如果有错误，这里面会处理，显示错误信息
    Notify(err.response.data.errors[Object.keys(err.response.data.errors)[0]][0])
  })
  return instance(config)
}

export default request