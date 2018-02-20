import { handleActions } from 'redux-actions'
import {LOGIN, REQUIRE_LOGIN} from '../types'

export default handleActions({
  [REQUIRE_LOGIN] (state, action) {
    return {
      ...state,
      needLogin: true
    }
  },
  [LOGIN] (state, action) {
    return {
      ...state,
      needLogin: false
    }
  }
}, {
  needLogin: false
})
