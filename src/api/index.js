import wepy from 'wepy'

export const callApi = (endpoint, method, data) => {
  const url = 'http://192.168.1.10:3000/' + endpoint
  return () => wepy.request({
    url,
    header: {...wepy.getStorageSync('token')},
    method,
    data
  })
}
