import axios from 'axios'
import { getToken } from './index'
export const instance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://54.153.12.169:8787/simeta/',
})

const token = getToken()
instance.interceptors.request.use(
  (config) => {
    // if(getCookie('simetaToken')){
    // config.headers['Authorization'] = getCookie('simetaToken')

    // }
    if (token) {
      config.headers['Authorization'] = token
    }
    // config.headers['Authorization'] = '1f4e05e9-d039-435d-a1bc-ffe3a2dea305'

    config.headers['content-type'] = 'application/json'

    // if (config.method === 'get') {
    //   config.paramsSerializer = function (params) {
    //     return qs.stringify(params, {
    //       arrayFormat: 'repeat',
    //     })
    //   }
    // }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    if (err.response) {
      if (err.response.status === 403) {
        // window.location.href = '/admin/auth/login'
      }
      if (err.response.data) {
        return Promise.reject(err.response.data)
      }
      return Promise.reject(err.response)
    }
    return Promise.reject(err)
  }
)

// 用户签到接口
export const loadSign = (payload) =>
  instance.post(`/buyer/sign/record/loadSign`, payload)
// 用户签到详情
export const signDetail = (payload) =>
  instance.post(`/buyer/sign/in/sign`, payload)

// export const updateFoods = (payload) =>
//   instance.get('/item/status', {
//     params: payload,
//   })
// // 查询商品详情
// export const foodsInfo = (itemId) => instance.get(`/item/get/${itemId}`)

// /*-- 上传图片 --*/
// export const uploadImage = (payload) =>
//   instance.post(`/common/file/upload`, payload)
