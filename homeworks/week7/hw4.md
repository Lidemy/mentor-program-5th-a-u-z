## 什麼是 DOM？
* 由 W3C 提出
* 文件與程式之間的橋樑
* 將文件（ document）轉換物件（ object），以達到讓 javascipt 等程式語言控制的目的。
* 將 html 的毎一個標籤定義為物件，按照階層關係組成樹狀圖的模型，透過控制每一個節點或是物件（ node ）來控制網頁
* DOM 其實就是一個 API，讓我們能夠使用被給定的指令去訪問指定元素。
![](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

* 分三個階段： 1. 捕獲 2. 目標 3. 冒泡
* 當一個元素被點擊或是輸入時，事件傳遞發生
* 事件傳遞的機制會先從最頂層的 Window 一路往下傳到各層的元素直到該目標元素 （Capture Phase 、捕獲）
* 到達該目標 （目標）
* 再走同一條路往上傳回 Window（ Bubble Phase、冒泡)
* 總而言之，先補獲，再冒泡。
* 不過事件傳到目標本身時沒有分捕獲跟冒泡，如果要印出的順序，就是看誰的程式碼寫在前面。

![](https://camo.githubusercontent.com/3b68e2eaad286f88424c8c06ac35d52d95b5ba8815306a4fea79f780aa7895ff/68747470733a2f2f7777772e77332e6f72672f54522f444f4d2d4c6576656c2d332d4576656e74732f696d616765732f6576656e74666c6f772e737667)
## 什麼是 event delegation，為什麼我們需要它？
* 直覺來說會在每一個需要監聽器的地方加上監聽器，但是這樣很麻煩，因為同樣的事情重複做了很多次。這時候可以利用事件傳遞機制的特性，在父元素直接加上監聽器，再利用 e.target 來判斷使用者是在哪一個元素上面操作的，進而提供相應的反應。
* 簡單來就是省事，減少監聽器
* 如果後來有動態新增到元素，那麼還是可以被監聽到

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

1. event.preventDefault()：阻止預設的動作
	* 阻止預設行為發生，但是還是會繼續傳遞
	* 加在表單的送出鍵，就是不能送出
	* 加在超連結，就是不能連出去別的網站
	* 
2. event.stopPropagation() ：阻止事件傳遞
	* 阻止繼續捕獲或是繼續冒泡，但是不影響已經接收到的事件
	* 加在 window 上面的話，就什麼事情都不會發生，因為一開始就被阻止了
	