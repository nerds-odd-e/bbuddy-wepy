import {LOGIN, LOGIN_FAILED, REQUIRE_LOGIN, NETWORK_ERROR} from '../types'
import {saveToken} from '../../api'

export const auth = store => next => action => {
  if (action.error === true) {
    return next({type: NETWORK_ERROR})
  }

  if (action.payload.statusCode === 401 && action.type === LOGIN) {
    return next({type: LOGIN_FAILED})
  }

  if (action.payload.statusCode === 401) {
    return next({type: REQUIRE_LOGIN})
  }

  if (action.payload.statusCode === 200) {
    saveToken(action.payload.header)
  }

  return next(action)
}
