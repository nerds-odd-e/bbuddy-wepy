import {LOGIN, LOGIN_FAILED, REQUIRE_LOGIN} from '../../../src/store/types'

describe('auth', () => {
  const store = jest.fn()
  const next = jest.fn()
  const api = {saveToken: jest.fn()}
  jest.setMock('../../../src/api', api)
  const auth = require('../../../src/store/middleware').auth
  const header = {token: 'token'}

  test('require login if status code is 401', () => {
    auth(store)(next)({payload: {statusCode: 401}})

    expect(next).toBeCalledWith({
      type: REQUIRE_LOGIN
    })
  })

  test('save token if status code is 200', () => {
    const action = {payload: {statusCode: 200, header}}

    auth(store)(next)(action)

    expect(api.saveToken).toBeCalledWith(header)
    expect(next).toBeCalledWith(action)
  })

  test('call next with action if status code is not either 200 or 401', () => {
    const action = {payload: {statusCode: 300, header}}

    auth(store)(next)(action)

    expect(next).toBeCalledWith(action)
  })

  test('login failed if status code is 401 and the action is login', () => {
    auth(store)(next)({type: LOGIN, payload: {statusCode: 401}})

    expect(next).toBeCalledWith({
      type: LOGIN_FAILED
    })
  })
})
