import axios from 'axios'

export const instance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://120.25.156.192:8089/',
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
    if (token) {
      config.headers['Authorization'] = `${token}`
    }

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

// 上架
export const updateFoods = (payload) =>
  instance.get('/item/status', {
    params: payload,
  })
// 查询商品详情
export const foodsInfo = (itemId) => instance.get(`/item/get/${itemId}`)

/*-- 上传图片 --*/
export const uploadImage = (payload) =>
  instance.post(`/common/file/upload`, payload)
