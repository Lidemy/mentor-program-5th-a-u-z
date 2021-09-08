## 請列出 React 內建的所有 hook，並大概講解功能是什麼

所有的 hook 都必須放在 component 裡面

* useState
	* 可以在組件中設定狀態，讓 React 控制著個組件
	* 當 state 的值改變時， React 變會重新執行一次該組件
	* 	`const [state, setState] = useState(initialState)`
	*  `initialState` 
		*  是放初始值，可以是任何型態，如果要放空值的話，也要寫上，例如("") 。
		* 雖然是初始值，但是其實每次程式碼執行到 initialState 的時候都會執行一次，所以要用 Lazy initial state，就可以解決這個問題

			```js
useState( () => { 
	const initialState = 複雜運算()
	return initialState
})  
```

	*  `state` 
		* `state` 的初始值就是用上面所說的方式設定
	*  `setState` 
		*  是用來改變 `state` 的 function
		*  `setState( (prev) => prev + 100 )`
		*  要用上面的這種方式來寫 setState
		*  setState 裡面包一個箭頭函式，return 想要改變的值，這樣確保每次 state 都被改動到，才往下執行
*  useEffect
	*  effect 原始應該是 side effect 副作用的意思，不過不是日常生活中那種不好的副作用，而是額外的作用的意思，就是要在 React 更新 DOM 之後，再執行一些額外的程式碼。
	*  `useEffect(functionA, [state1, state2])`
	*  後面的 array 的意思是，第一個參數 function 裡面會用到的 state ，那當 state1 有改變時，才會執行第一個參數的 function 。state1, state2 的意思是可以放入多個 state
	*  第二個參數 array 也可以不要放進去，變成這樣 `useEffect(functionA)` 這樣就是每次 render 完之後，就會執行 function ，包括第一次喔
	*  第二個參數 array 也可以放空的 array ，變成這樣 `useEffect(functionA, [])`，這樣的意思是只有在第一次 render 完之後會執行 functionA，之後都不會了，因為之後 array 都不會改變了
	*  每一次的 useEffect 都是不同版本的 useEffect，裡面拿到的 state 都是那次版本最新的 state
	*  分成兩種。第一種是無需清除的 effect。第二種是需清除的 effect
	*  無需清除的 useEffect

	
		```js
useEffect(() => { document.title = `You clicked ${count} times`})
```


	*  可以放入 count ，這個是一個 state 而已
	*  需清除的 useEffect
		* 還沒研究.... * useLayoutEffect
	* 另一種版本的 useEffect ，使用都跟 useEffect 相同，差異在執行的時間點 ， useLayoutEffect 是在 render 之前執行

	
* useContext
	* 為了避免 state 透過 props 一層層傳遞下去，造成程式碼複雜度增加，可以使用 useContext
	* 原本要傳遞 state 資料，需要用 props 去傳遞。現在資料結構長這樣，曾祖父 --> 祖父 --> 父 --> 本身，那 state 建立在曾祖父上面，祖父跟父層是不需要這項資料的，但是必須幫忙傳遞 props，「本身」才能拿到資料。 useContext 要解決的就是這樣問題，可以變成跳過祖父與父這兩層（過客），直接在本身拿到
	* 需要 import { createContext, useContext } 兩個東西
	* 由四個東西組成。 
		* `const Z = createContext()`
		* `const [a, setA] = useState()`
		* `<Z.Provider value={{a, setA}}></ Z.Provider>`
		* `const {a, setA} = useContext(Z)`

	* 用上面提到的結構繼續說明
	* 在宣告曾祖父的地方宣告`const XXX = createContext()`代表要使用 「 context 這個 hook 」
	* 然後把曾祖父的 return 用 `<XXX.Provider value={{a, setA}}></ XXX.Provider>` 包起來， value 放剛剛在曾祖父裡面宣告的 state，這樣就完成了跟 react 的交代，等等可以把 state 傳送給曾祖父層底下的任何 component 。
	* 移動到「本身」這一層，在「本身」裡面  `const {} = useContext(XXX)`，就可以拿到曾祖父層的 state ，而且跳過祖父和父這兩個過客
	* 程式碼如下
		
		```js
// 這裡是 曾祖父層
const Z = createContext()
const [a, setA] = useState()
return (
    <>
        <Z.Provider value={{a, setA}}> // value 後面有兩層「 { 」，外層的「 { 」是在 JSX 裡面寫 JS 要用「 { 」包起來，內層的「 { 」是用物件把 a, setA 包起來，等等可以用解構方式拿出來
            <Grandfather />
        </Z.Provider>
    </>
)
// Grandfather 裡面還有 Father ，Father 裡面還有 本身
// 這裡是 本身 層
function MeComponent() {
    const {a, setA} = useContext(Z)
    // 在這層就可以用 a 或是 setA 做一些事情
}
```


* useReducer
	* 可以想成這是完整版本的 useState，或是稱 useState 是簡化過的 useReducer
	* 先宣告要使用 useReducer 
	* 
```js
	function Counter({initialCount}) {
			const [state, dispatch] = useReducer(
				reducer,
				initialCount,
				init
			)
	}
```

	* 後面 () 內的 reducer 是一個 function ，裡面將會如何改變 state，也就是會進行什麼操作
	* 
```js
	function reducer(state, action) {
			switch (action.type) {
				case 'reset':
					return {count: action.payload}
				case 'increment':
					return {count: state.count + 1}
				case 'decrement':
					return {count: state.count - 1}
				default:
					return state
			}
	}
```

	* initialState 放初始值或是代表初始值的變數，目前 initialState 這是一個由 function 參數傳進來的變數，所以到時候要用 pops 傳進 Counter ，像是這樣 `<Counter initialCount={1} />`
	* init 是一個 function ，用於把 initialState 做第一次加工
	* 
```js
	function init(initialCountState) {
			return {count: initialCountState + 1}
	}
```
	* 一樣接收 Counter 傳進來的參數 initialCountState 然後把它加工，所以第一次顯示出來的 count 會是 `<Counter initialCount={1} />` 1+1 所以是 2
	* 前面的 [] 內的 state 和 dispatch 是解構出來的。 state 是一個變數，dispatch 是 function 用來改變 state 。
	* 
```js
	<button onClick={
			()=> dispatch({type:'reset', payload: initialCount})
	}> reset </ button>
	<button onClick={
			()=> dispatch({type:'increment'})}> plus </ button>
	<button onClick={
			()=> dispatch({type:'decrement'})}> minus </ button>
```
	* 當點擊按鈕，會觸發執行 dispatch，dispatch 就會執行 reducer 這個 function，參數 state 就是舊的 state action 就是dispatch 傳入的參數。那 reducer return 的整個值就是 state 的值。

* useCallback
	* 避免 fucntion 被重新生成
	* 
```
	const aa = useCallback(
		() => {console.log('123')}, 
		[num]
	)
```

* React.memo
	* 因為同一層級有 state 改變，所以整個 component 被重新執行，但是其實其中的另一個 component 沒有改變卻被重新渲染，為了避免這個問題，所以用 memo
* useCallback
	* 在 function App 裡面的 handleChange 其實每次都會因為 App 裡面的 state 改變而被重新分配記憶體一次， useCallback 解決的就是這個問題
	* `const handleChange = useCallback(() => {}, [])`
	* 第一個參數是 function，第二個參數是陣列，裡面放依賴的 state

* useMemo
	* 因為 state 只要改變，擁有 state 的那個 component 就會重新執行一次，可是裡面有些東西並沒有改變到，要重新執行的話就是浪費效能，這時候對於一個「值」的保留，就可 用 useMemo
	* 
```js
const a = useMemo(() => {
    const value = a * b * c * 9999999 // 複雜計算
    return value
  }, [a, b, c] )
```

	* 第一個參數是一個 function
	* 第二個參數是一個 array, 裡面放依賴的 state
 
* useRef
	* 將值存於 useRef 之中，用 `.currnt` 將其取出
	* const aa = useRef('123')
	* console.log(aa.current) // 123
	* 放一些與畫面無關的變數


## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點
* Mounting
	* constructor
		* 在組件建立前，初始化 props 和 state
	* static getDerivedStateFromProps
		* 回傳一個物件來表示要更新的 state，或回傳 null 表示不需要更新
	* componentWillMount
		* 在第一次的 render 之前執行
	* render
		* 執行第一次渲染
	* componentDidMount()
		* 在 component mount 之後執行，適合用來串接 API 來請求資料
* Updating
	* 當 props, state 改變時就會觸發 Updating
	* static getDerivedStateFromProps()
	* shouldComponentUpdate()
		* 在 render 前比較 props 或 state 是否有更新，預設值為 true，若設定回傳 false，則可跳過下列三個步驟
	* componentWillUpdate()
		* 在 render 發生前執行
	* render
		* 當 props 或 state 改變後，就會執行一次渲染
	* componentDidUpdate()
		* 跟 componentDidMount 一樣，只是名字不同，屬於 Updating 階段
* Unmounting
	* componentWillUnmount()
		* 會在組件 unmount 之前執行，可以清除 eventListener, cookie, localStorage 之類的

## 請問 class component 與 function component 的差別是什麼？

* class component
	* 程式碼較多
	* 用 this 拿到最新的值
	* 需要搞清楚 this
* function component
	* 程式碼較少
	* 每一次 render 都會把整個 function 重新執行一遍
	* 拿到的值是執行完 function 的值




## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？
* uncontrolled component 是沒有被 React 控制的
	* 通常是使用 useRef
	* `<input type="file" />` 基於安全性， JavaScript 只能取值不能改值，所以只能透過 Uncontrolled Component 來處理
* controlled component 是有被 React 控制的
	* 有傳入 state 或是 props ，當這兩者改變時進而重新執行 component