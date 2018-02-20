import { combineReducers } from 'redux'
import account from './account'
import toast from './toast'
import auth from './auth'

export default combineReducers({
  toast,
  auth,
  account
})
