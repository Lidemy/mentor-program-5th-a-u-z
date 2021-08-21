## 為什麼我們需要 React？可以不用嗎？
* react 省去了很多 document.querySelector 操作 DOM 的繁瑣操作
* 許多專案也使用 react ，開發生態完整（許多技術文章、討論），有許多輔助工具（相關配套 package）、其他人寫好的 component
* 會不會寫成 component 比較好做測試？



* 如果專案規模小或是之後不用維護一次性的網站，比較適合之前的方式
* 可以不用 React, 可以用傳統的三本柱（html, css, js）或是其他框架或是 library, jQuery, Vue, Angular


## React 的思考模式跟以前的思考模式有什麼不一樣？


||傳統方式|React 方式|
|----|----|----|
|切版＆資料|算是以畫面為主，先切版，等畫面變得漂亮後，再把要的資料產出來，塞進去|在切版前就要考慮資料跟怎麼傳遞，要利用資料改變來順帶改變畫面|
|操作畫面|用 document.querySelector 操作資料。對於整體性的熟悉度要求比較低，因為只需要產出資料，然後再用 DOM 去操作畫面，可以很零碎|要用 state 去改變畫面，要對 array, object 操作更熟悉。對於整體性要求高，因為一個 state 可以在很多地方用到，會牽一髮而動全身，利用 state 或是 props 的有無或是值的變化，來改變畫面|
|組成|拆分為三個檔案， html 檔案負責骨架，css 檔案負責美化， js 檔案負責資料處理或是操作 DOM 處理 |由 component 為最小單位，但是每個 component 都可能可以包括 JSX(類似 html), css, js |
|層級概念|沒有層級概念|有層級概念，資料由高層級往低層級流動|




## state 跟 props 的差別在哪裡？

||state|props|
|----|----|----|
|層級|產生的那層稱為 state|往下傳就叫做 props|
|讀寫|可以讀取，也可以透過 setState 改變|只能讀取|


