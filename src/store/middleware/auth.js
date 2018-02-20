import {REQUIRE_LOGIN} from '../types'
import {saveToken} from '../../api'

export const auth = store => next => action => {
  if (action.payload.statusCode === 401) {
    return next({type: REQUIRE_LOGIN})
  }

  if (action.payload.statusCode === 200) {
    saveToken(action.payload.header)
  }

  return next(action)
}
