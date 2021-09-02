## 為什麼我們需要 Redux？
* 簡單說就是集中營，統一管理的概念
* 如果專案大一點的話，一定會有超級多 component ，然後每個 component 裡面都有各自的 state ， setState 可能也是透過 props 傳遞的亂七八糟，而 Redux 就是要解決這個混亂的狀態。
* 透過把所有的 state 集中到 Redux 的 store 裡面統一管理，再透過 dispatch action 的方式，把更改 state 的方式寫下來，而且只能透過這個方法更改 state，這樣程式出錯的時候，就比較好找到問題出在哪裡？因為調整了 stateA，進而需要調整 stateB 時，也因為程式碼都在一起了，也比較好修改

## Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？
* redux 是管理 state 的工具，要改動透過 redux 來管理的 state 只能透過 action 來觸發 reducer ，而 reducer 是 pure function ，所以不會產生 side effect。

* redux 這個資料夾，底下會有幾個東西
	* reducers （資料夾）
		*  index.js
			*  如果有很多個像是 todos.js 的檔案，在這邊 combine
		*  todos.js
			*  大重點，設定對應的 action.type 要做什麼事情

			```js
export default function todosReducer(state = initialState, action) {
			  // 設定 action
			  // 參數是用 action.payload.XX 傳進來
			  switch (action.type) {
			    case ADD_TODO: {
			      return {
			        todos: [
			          {
			            id: todoId++,
			            content: action.payload.content,
			            isDone: false,
			            isEditing: false,
			          },
			          ...state.todos,
			        ],
			      }
			    }
}
```
			*  這裡會有 state 的初始值，然後要設定 state 該怎麼改變

	* action.js
		* 這裡放的 function 只是描述是屬於 action 中的哪種類型（ type ），然後傳入的參數有哪些 （ payload ）

	
		```js
export function addTodo(content) {
			return {
				type: ADD_TODO,
				payload: {
					content,
				},
			}
}
```
	* actionTypes.js 
		* 因為不要自己打 action.js 中 type 的值，所以用這個檔案 export 給 action.js import ，為了更好 debug
		* `export const ADD_TODO = 'add_todo'
` 
	* store.js
		* create 出一個 store
		* redux 的 devtools 也是在這麼引入

	
			```js
import { createStore } from 'redux'
import rootReducer from './reducers'
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```


* [看圖說故事](https://camo.githubusercontent.com/80c5de2cb3b0a02c211feeaa068bfb51d528987dce0371a0195078448c57c782/68747470733a2f2f72656475782e6a732e6f72672f6173736574732f696d616765732f526564757844617461466c6f774469616772616d2d34396661386333393638333731643965663666326131343836626434306132362e676966)
	1. 按下 UI 按鈕
	2. 按鈕會觸發 dispatch ， dispatch 會帶一個 action 到 store
	3. store 裡面的 reducer 會依照剛剛的 action 做出動作
	4. state 被改變後，畫面就會重新渲染，那 UI 就改變了

## 該怎麼把 React 跟 Redux 串起來？


 
*  在最外層的 index.js 裡面，用 Provider 把 return 裡面的東西包起來，這樣就可以把 store 傳遞到下面的每一個 component

	```js
ReactDOM.render(
 	 <Provider store={store}>
		<App />
	  </Provider>,
  document.getElementById("root")
);
```

	*  在需要的地方，使用 useSelector 來取得 store 的 state
	*  `  const todos = useSelector(store => store.todos.todos)
`	
	*  在需要的地方，使用 useDispatch 可以分配任務給 reducer

	```js
const dispatch = useDispatch()
dispatch(addTodo(content))
```
