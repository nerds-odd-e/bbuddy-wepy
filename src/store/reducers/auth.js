import { handleActions } from 'redux-actions'
import {REQUIRE_LOGIN} from '../types'

export default handleActions({
  [REQUIRE_LOGIN] (state, action) {
    console.log('require login reducer called')
    return {
      ...state,
      needLogin: true
    }
  }
}, {
  needLogin: false
})
