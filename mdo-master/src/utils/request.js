import axios from 'axios'

export const instance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://54.153.12.169:8787/simeta/',
})

function getToken() {
  var token = localStorage.getItem('token')
  return {
    token,
  }
}

instance.interceptors.request.use(
  (config) => {
    const { token } = getToken()
    // if (token) {
    //   config.headers['Authorization'] = `${token}`
    //   config.headers['content-type'] = 'application/json'
    // }
    config.headers['Authorization'] = 'd5181d3c-7e1c-41f3-b73f-1a9f7da408fd'
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
