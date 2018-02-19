import {createAction} from 'redux-actions'
import {callApi} from '../../api'
import {ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT, LOAD_ALL_ACCOUNTS} from '../types'

export const loadAllAccounts = createAction(LOAD_ALL_ACCOUNTS, callApi('accounts', 'GET', {}))

export const addAccount = (account) => {
  return createAction(ADD_ACCOUNT, callApi('accounts', 'POST', account))()
}

export const editAccount = (account) => {
  return createAction(EDIT_ACCOUNT, callApi(`accounts/${account.id}`, 'PUT', account))()
}

export const deleteAccount = (account) => {
  return createAction(DELETE_ACCOUNT, callApi(`accounts/${account.id}`, 'DELETE', account))()
}
