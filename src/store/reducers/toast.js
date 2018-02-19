import { handleActions } from 'redux-actions'
import {ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT} from '../types'

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
  }
}, {
  message: undefined
})
