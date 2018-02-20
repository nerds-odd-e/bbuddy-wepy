import {createAction} from 'redux-actions'
import {callApi} from '../../api'
import {LOGIN} from '../types'

export const login = (credential) => {
  return createAction(LOGIN, callApi('auth/sign_in', 'POST', credential))()
}
