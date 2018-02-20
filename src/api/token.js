import wepy from 'wepy'

export const loadToken = () => {
  return wepy.getStorageSync('token')
}

export const saveToken = (token) => {
  wepy.setStorageSync('token', {
    'access-token': token['access-token'],
    'token-type': token['token-type'],
    'uid': token['uid'],
    'client': token['client'],
    'expiry': token['expiry']
  })
}
