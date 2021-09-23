import { createStore } from 'redux'
import rootReducer from './reducers'
// 引入 reducers 這個資料夾底下的 reducer ，沒有寫說是哪個資料夾的話
// 就是其中的 index.js，而 index.js 有把其他的檔案一起 combine 在一起了

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
