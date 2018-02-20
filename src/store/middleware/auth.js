import {REQUIRE_LOGIN} from '../types'

export const auth = store => next => action => {
  if (action.payload && action.payload.statusCode === 401) {
    return next({type: REQUIRE_LOGIN})
  } else {
    return next(action)
  }
}
