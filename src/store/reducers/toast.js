import { handleActions } from 'redux-actions'
import {ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT, LOGIN_FAILED, NETWORK_ERROR} from '../types'

export default handleActions({
  [ADD_ACCOUNT] (state, action) {
    return {
      ...state,
      message: 'Add Successfully'
    }
  },
  [EDIT_ACCOUNT] (state, action) {
    return {
      ...state,
      message: 'Edit Successfully'
    }
  },
  [DELETE_ACCOUNT] (state, action) {
    return {
      ...state,
      message: 'Delete Successfully'
    }
  },
  [LOGIN_FAILED] (state, action) {
    return {
      ...state,
      message: 'Login failed'
    }
  },
  [NETWORK_ERROR] (state, action) {
    return {
      ...state,
      message: 'Network Error'
    }
  }
}, {
  message: undefined
})
