## 教你朋友 CLI


# 轉生到 command line 地下城的世界 

command line 中文是終端機，在早期的電腦，還沒有圖像使用介面（GUI, graphical user interface），只能使用終端機命令電腦。

題外話，為了讓使用電腦更直覺，減少學習成本，所以後來產生出 GUI

下面來介紹 command line 裡頭的指令。
以下會用一些比喻來增加趣味與更容易理解。
資料夾 -> 城鎮

## 關於轉生，我是誰？

* 我是誰？
	*  在詠唱前，先問問系統系統，世界上誰是最美麗的女人，然後詠唱`whoami`，系統就會告訴你了。😂

## 轉生降臨，我在哪？

首先我們已經轉生到電腦裡面的世界了，到了陌生環境，當然要先確認我們在哪？這時候要詠唱 `pwd`。

* `pwd` ，終端機會列印出現在所在位置（在哪個資料夾裡面），一開始會在新手村，通常會是以你的名字命名的喔。

## 新手村長怎樣？有什麼？

開始探索世界了，首先要先知道這個地方有什麼東西。這時候可以開啟魔眼詠唱 `ls` ，而這個詠唱還有階級之分，隨著詠唱的長度越長，可以開啟的魔眼等級也越高。

* 請問你的名字？
	* 詠唱 `ls` 列出這個城鎮中所有東西的名稱。
* 我想更了解你
	* 詠唱 `ls -l` 可以看到包含名字的更詳細資訊。
* 好像還有什麼？
	*  詠唱 `ls -a` 可以看到一些害羞而藏起來的人（有些東西會被系統隱藏起來，怕被使用者更改到而導致系統出錯）
* 太麻煩了，大絕招
	* 詠唱 `ls -la` 可以一次被隱藏的檔案的名字跟更詳細資訊

## 我要去哪裡？前進地下城

大概弄清楚了狀況後，可以踏出另一步，去看看地下城吧
先給各位一個架構，新手村位於最上層，然後可以往下去到地下城，而地下城可以分出很多個城鎮，像是新手村是樹幹，而地下城是根部個感覺，越往下，分岔越多。
會把資料夾比喻成一個城鎮，而檔案比喻成東西（而東西通常都是由文字組成的）

* 開始轉移魔法
	* 詠唱 `cd 資料夾名稱` ，可以轉移到剛剛詠唱中的城鎮，但是只能移動到上或是下一層的城鎮，就像是做電梯的時候，如果你在 5 樓，想要到 2 樓，只能先按 4 樓，到了 4 樓後，再按 3 樓，到了 3 樓後，再按 2 樓，會有點麻煩。
*  走錯路了，逆向轉移
	* 詠唱 `cd ..` ，可以轉移到上一層城鎮
	* 詠唱 `cd ../../..`，可以一直回到上一層
* 回家捲軸
	* 詠唱 `cd ~` ，可以直接回到新手村（根目錄）
* 一次都給你
	* 	詠唱 ` cd /users/資料夾名稱/資料夾名稱/資料夾名稱`
	*  這是絕對路徑，可以一個詠唱就到達目的地，不過詠唱要很長就是了


## 城鎮的魔法
可以到別的城鎮，那我也想創造一個城鎮

* 當個鎮長吧
	* 詠唱 `mkdir 資料夾名稱`，資料夾名稱可以換成想要的名字，這樣就可以創糙出一個城鎮了
	*  發現好玩的東西，也可以一次新增很多個城鎮喔，只要用空格隔開就可以了。
* 複製城鎮
	* 詠唱 `cp -r 原資料夾名稱 新資料夾名稱`，新資料夾名稱要放想要的名字，不能跟原資料夾名稱相同，這樣就可以創造一個城鎮雖然名字不同，不過裡面會是相同的。
*  我是破壞王
	* 詠唱高級破壞魔法， `rm -r 資料夾名稱` ，把資料夾名稱改成想要摧毀的資料夾名稱，這樣就可以不管城鎮裡面有沒有東西，都可以一概清除掉，注意喔真的是毀滅，所以在垃圾桶也找不到，要謹慎使用 。

## 城鎮裡面呢？
如果只要空無一物的城鎮，那麼也很空虛，所以加點東西進去城鎮吧

* 讓我摸一下
	* 想要創造東西，就必須摸一下，並且想著想要它長怎樣，這樣它就會跑出來，所以詠唱 `touch 名稱.副檔名`，名稱就是可以自己幫它取個名字，副檔名呢，就想成是它的種類，可以有 .js .sh .pdf .pages 好多好多種，之後再慢慢認識有沒關係喔。
	* 發現好玩的東西，也可以一次新增很多個檔案喔，只要用空格隔開就可以了。
* 我想改名成「鮭魚」
	* 剛剛取名字的時候太隨便了，現在想要認真取個好名字，這時候詠唱 `mv 舊的名字.副檔名 新的名字.副檔名` ，就可以改名字囉。
* 好東西，跟我一起旅行
	* 帶到下面去，要詠唱 `mv 檔案名稱.副檔名 下一層資料夾的名稱`
	* 如果要一次往下移動很多層的話，詠唱 `mv 檔案名稱.副檔名 下一層資料夾的名稱/下一層資料夾的名稱/下一層資料夾的名稱`。
	* 注意如果沒有下一層的話，但不小心使用這個詠唱，它就會判斷成上面的鮭魚改名，那麼這個檔案就會被改名字，就會變成一個只有檔名但是沒有副檔名的東西了
	* 帶到上面去，要詠唱 `mv 檔案名稱.副檔名 ..` ，這樣就可以移動到上一層
	* 也可以詠唱`mv 檔案名稱.副檔名 ../..`，可以移動到上上一層，當然也可以移動到上上上一層。
* 複製物品大軍
	*  詠唱 `cp 原檔案名稱.副檔名 新檔案名稱.副檔名`，新檔案名稱，不能跟原檔案名稱相同。
* 再會了
	* 詠唱 `rm 名稱.副檔名` ，這樣這個東西就消失了


## vim 編輯器

![](https://milyzoo.github.io/Others/Command%20Line%20與%20Vim%20基本操作/13.jpg)

參考來源：https://milyzoo.github.io/Others/Command%20Line%20與%20Vim%20基本操作/

## 有趣的詠唱

* 我們一起學貓叫
	* 詠唱 ` cat 文件名稱.副檔名`，可以把這個檔案內容全部印出來。
* 看到內心深處
	* 詠唱 `less 文件名稱.副檔名`，可以在終端機上面以分頁的模式顯示，因為進入了別人的內心世界，所以要用特別的方式 `q`來逃跑。


* `grep 要搜尋的字 被搜尋的檔案.副檔名`，這可以在「被搜尋的檔案」中，找看看有沒有「要搜尋的字」，如果沒有，就什麼也不會顯示，如果有，就是把那一行列出來。
* `curl 網址`，可以測試 api 。
* `>` 可以把在 terminal 裡面顯示的東西變成一個檔案
	* 例如 ` ls -al > aa.js` ，可以把現在資料中的詳細資訊，輸入到一個叫做 aa.js 的檔案中。
	* 例如 `echo '123' > aa.js`，原本 echo '123'的意思是在 terminal 中印出 123 的字，現在變成，把 123 寫入 aa.js，而且是把原本的刪除，重新寫入 123 ，所以 aa.js 就只有 123 在裡面了。
	* 如果不想要原本的被覆蓋掉的話，要用 `echo '123' >> aa.js` 這樣就可以新增一行 123 在 aa.js 裡面了
* 白天不懂夜的黑
	* 在任何詠唱之中的空格，系統會認定為是下一句話的意思，如果你的檔名中真的有空格的話，在空格前先打上 `\`系統就知道這真的是空格，不是下一句話。


## 教 h0w 哥 建立檔案

1. 開啟 terminal
2.  詠唱`pwd` 確定現在所在的位置，確定是要在這個地方建立資料夾
3. 詠唱`mkdir wifi` 來建立一個叫做 wifi 的資料夾
4. 詠唱 `cd wifi`，移動到 wifi 資料夾裡面。
4. 詠唱`touch afu.js` 來建立一個叫做 afu 種類是 js 的檔案
5. h0w wifi afu ，我懂你的明白😂

##參考資料

https://vera-daily.coderbridge.io/2020/06/14/command-line-note/
