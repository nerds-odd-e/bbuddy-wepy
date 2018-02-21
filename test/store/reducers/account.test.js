import reducer from '../../../src/store/reducers/account'

test('initial state', () => {
  expect(reducer(undefined, {type: 'ANY_ACTION'})).toEqual({allAccounts: []})
})
