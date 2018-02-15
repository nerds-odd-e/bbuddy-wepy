import { handleActions } from 'redux-actions'
import {ALL_ACCOUNTS_SUCCESS} from '../types'

export default handleActions({
  [ALL_ACCOUNTS_SUCCESS] (state, action) {
    return {
      ...state,
      allAccounts: action.payload
    }
  }
}, {
  allAccounts: []
})
