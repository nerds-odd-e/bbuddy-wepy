import { combineReducers } from 'redux'
import account from './account'
import toast from './toast'

export default combineReducers({
  toast,
  account
})
