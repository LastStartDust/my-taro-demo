// src/store/index.js

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

//中间件
const middlewares = [
  thunkMiddleware,
  createLogger()
]

//配置store
export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}
