import reducer from '../../../src/store/reducers/account'
import {LOAD_ALL_ACCOUNTS} from '../../../src/store/types'

describe('load all accounts', () => {
  const account = {id: 1, name: 'name', balance: 100}
  const payload = {data: [account]}
  test('initial state not changed with other action even containing payload data', () => {
    expect(reducer(undefined, {type: 'ANY_ACTION', payload}))
      .toEqual({allAccounts: []})
  })

  test('initial state with action containing response payload', () => {
    expect(reducer({allAccounts: []}, {type: LOAD_ALL_ACCOUNTS, payload}))
      .toEqual({allAccounts: [account]})
  })
})
