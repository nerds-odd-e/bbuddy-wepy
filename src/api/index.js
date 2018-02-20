import wepy from 'wepy'

export const callApi = (endpoint, method, data) => {
  const url = 'http://192.168.1.10:3000/' + endpoint
  return () => wepy.request({
    url,
    header: {
      'access-token': '7cClbZU0jWpJardAiQ4Pmw',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': '-5KwblHPX7Chv6GJH_vCbA',
      'expiry': '1519098141'
    },
    method,
    data
  })
}
