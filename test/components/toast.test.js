import {message} from '../../src/components/watch/toast'
import wepy from 'wepy'

beforeEach(() => {
  wepy.showToast = jest.fn()
})

test('show toast', () => {
  message('new Message', undefined)

  expect(wepy.showToast).toBeCalledWith({
    title: 'new Message',
    icon: 'success',
    duration: 1000
  })
})

test('not show toast', () => {
  message(undefined, undefined)

  expect(wepy.showToast).not.toBeCalled()
})
