import {REQUIRE_LOGIN} from '../types'
import wepy from 'wepy'

export const auth = store => next => action => {
  if (action.payload && action.payload.statusCode === 401) {
    return next({type: REQUIRE_LOGIN})
  }

  if (action.payload && action.payload.statusCode === 200 && action.payload.header) {
    const {header} = action.payload
    wepy.setStorageSync('token', {
      'access-token': header['access-token'],
      'token-type': header['token-type'],
      'uid': header['uid'],
      'client': header['client'],
      'expiry': header['expiry']
    })
  }

  return next(action)
}
