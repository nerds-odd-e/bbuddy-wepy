import reducer from '../../../src/store/reducers/auth'
import {LOGIN, REQUIRE_LOGIN} from '../../../src/store/types'

describe('login', () => {
  test('initial state', () => {
    expect(reducer(undefined, {type: 'ANY_ACTION'}))
      .toEqual({needLogin: false})
  })

  test('initial state with require login action', () => {
    expect(reducer({needLogin: false}, {type: REQUIRE_LOGIN}))
      .toEqual({needLogin: true})
  })

  test('login action', () => {
    expect(reducer({needLogin: true}, {type: LOGIN}))
      .toEqual({needLogin: false})
  })
})
