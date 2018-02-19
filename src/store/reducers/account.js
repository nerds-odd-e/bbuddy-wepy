import { handleActions } from 'redux-actions'
import {LOAD_ALL_ACCOUNTS} from '../types'

export default handleActions({
  [LOAD_ALL_ACCOUNTS] (state, action) {
    return {
      ...state,
      allAccounts: action.payload.data
    }
  }
}, {
  allAccounts: []
})
