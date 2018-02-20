import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'
import {auth} from './middleware'

export default function configStore () {
  return createStore(rootReducer, applyMiddleware(promiseMiddleware, auth))
}
