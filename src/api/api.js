import wepy from 'wepy'
import {loadToken} from './token'
import {HOST} from '../config'

export const callApi = (endpoint, method, data) => {
  return () => wepy.request({
    url: HOST + endpoint,
    header: loadToken(),
    method,
    data
  })
}
