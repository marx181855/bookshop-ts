import axios from 'axios'



function request(config: any) {
  const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/',
    timeout: 3000
  })

  instance.interceptors.request.use(config => {
    return config
  }, error => {
    
  })

  instance.interceptors.response.use(res => {
    return res.data? res.data : res
  }, error => {

  })
  return instance(config)
}

export default request