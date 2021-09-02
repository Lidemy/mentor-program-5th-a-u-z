import { combineReducers } from 'redux' // 可以把多個 reducer combine 在一起
import todos from './todos' // 要有個 todos.js 的檔案
import users from './users'

export default combineReducers({
  todos,
  users,
})
