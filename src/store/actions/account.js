import {createAction} from 'redux-actions'
import {callApi} from '../../api'
import {ADD_ACCOUNT, LOAD_ALL_ACCOUNTS} from '../types'

export const loadAllAccounts = createAction(LOAD_ALL_ACCOUNTS, callApi('accounts', 'GET', {}))
export const addAccount = (account) => {
  return createAction(ADD_ACCOUNT, callApi('accounts', 'POST', account))()
}
