import {REQUIRE_LOGIN} from '../types'
// import {createAction} from 'redux-actions'

export const auth = store => next => action => {
  console.log(action)
  if (action.payload && action.payload.statusCode === 401) {
    return next({type: REQUIRE_LOGIN})
  } else {
    return next(action)
  }
}
