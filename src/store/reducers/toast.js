import { handleActions } from 'redux-actions'
import {ADD_ACCOUNT} from '../types'

export default handleActions({
  [ADD_ACCOUNT] (state, action) {
    console.log('toast reducer called')
    return {
      ...state,
      message: 'Add Successfully'
    }
  }
}, {
  message: undefined
})
