import reducer from '../../../src/store/reducers/toast'
import {ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT, LOGIN_FAILED} from '../../../src/store/types'

describe('account related toast', () => {
  test('initial state', () => {
    expect(reducer(undefined, {type: 'ANY_ACTION'}))
      .toEqual({message: undefined})
  })
  test('add account action', () => {
    expect(reducer({message: undefined}, {type: ADD_ACCOUNT}))
      .toEqual({message: 'Add Successfully'})
  })
  test('edit account action', () => {
    expect(reducer({message: undefined}, {type: EDIT_ACCOUNT}))
      .toEqual({message: 'Edit Successfully'})
  })
  test('delete account action', () => {
    expect(reducer({message: undefined}, {type: DELETE_ACCOUNT}))
      .toEqual({message: 'Delete Successfully'})
  })
  test('login failed action', () => {
    expect(reducer({message: undefined}, {type: LOGIN_FAILED}))
      .toEqual({message: 'Login failed'})
  })
})
