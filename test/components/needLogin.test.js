import {needLogin} from '../../src/components/watch'
import wepy from 'wepy'

test('navigate to login if need login', () => {
  wepy.navigateTo = jest.fn()

  needLogin(true, undefined)

  expect(wepy.navigateTo).toBeCalledWith({
    url: '/pages/login'
  })
})

test('navigate back if not need login', () => {
  wepy.navigateBack = jest.fn()

  needLogin(false, undefined)

  expect(wepy.navigateBack).toBeCalled()
})
