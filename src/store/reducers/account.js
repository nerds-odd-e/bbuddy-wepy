import { handleActions } from 'redux-actions'
import {ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT, LOAD_ALL_ACCOUNTS} from '../types'

export default handleActions({
  [LOAD_ALL_ACCOUNTS] (state, action) {
    return {
      ...state,
      allAccounts: action.payload.data
    }
  },
  [ADD_ACCOUNT] (state, action) {
    return {
      ...state,
      updatedTime: action.payload.data.updated_at
    }
  },
  [EDIT_ACCOUNT] (state, action) {
    return {
      ...state,
      updatedTime: action.payload.data.updated_at
    }
  },
  [DELETE_ACCOUNT] (state, action) {
    return {
      ...state,
      updatedTime: action.payload.data.updated_at
    }
  }
}, {
  allAccounts: [],
  updatedTime: undefined
})
