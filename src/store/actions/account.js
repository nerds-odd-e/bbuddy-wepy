import {createAction} from 'redux-actions'
import {callApi} from '../../api'

export const LOAD_ALL_ACCOUNTS = createAction('LOAD_ALL_ACCOUNTS', callApi('accounts', 'GET', {}))
