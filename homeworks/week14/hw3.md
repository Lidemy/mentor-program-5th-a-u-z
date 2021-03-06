## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

Domain Name Systemm，也就是網域名稱系統
它將人們可讀取的網域名稱 (例如，www.amazon.com) 轉換為機器可讀取的 IP 地址 (例如，192.0.2.44)

因為一串 IP 地址是沒有語意的，人們可以記起來的是有語意的名稱，所以需要一個對應表格，就像是電話本，裡面有名稱跟電話的對應，類比到網路世界就是網站名稱（google.com）跟網站 IP 地址(一串數字)的對應。

而網路世界有很多本電話本，都是隸屬於不同的公司，那如果有一本電話本更改了內容，那就需要通知其他公司的電話本，這樣會需要花到最多兩天的時間。此時 Google 就開創了自己的超強電話本，那如果這個電話本都是大家第一首選的話那所有的網站名稱跟網站地址的資料都集中在這裡，那運算的速度就會比較快

 * Google DNS 
	* Google
		* 可以蒐集更多資料，以利商業價值
		* 在成為搜尋引擎的霸主後，要挑戰成為 DNS 的霸主，就可以更完整的蒐集使用者的網路足跡
	* 一般大眾
		* 更快的網路速度
		* 免費
		* 提升網路安全？
		* 更穩定，Google 世界各地都有伺服器

[aws解說](https://aws.amazon.com/tw/route53/what-is-dns/
)
## 什麼是資料庫的 lock？為什麼我們需要 lock？

像是上廁所，進去廁所後要鎖門 lock，如果沒有鎖門那就會很尷尬😅😅😅。資料庫也是一樣的，當多個使用者想要同時對資料庫進行操作的時候，那就會出問題，所以需要一個一個來，讓先來的人先操作，並鎖門，而其他人就要在外面等，等這個人完成後，其他人才可以操作，避免造成 race condition、商品超賣等現象


## NoSQL 跟 SQL 的差別在哪裡？

* NoSQL 
	* 採用 key-value 來互相索引，用類似 JSON 格式來儲存資料
	* 資料可以任意切割，彈性大
	* 不支援 JOIN 語法
	* 適合儲存大量且結構不固定的資料

* SQL
	* 資料必須在 schema 先定義好有哪些欄位，才能插入資料，會很有多個 table ，然後每個 table 彼此之間用 index 互相索引，要求一定要是正確的。
	* 強調資料的一致性，用在交易上面，嚴格遵守 ACID

## 資料庫的 ACID 是什麼？

* Atomicity
	* 確認整個 operation 成功的執行，或是回到未執行的狀態

* Consistency：一致性
	* 在 transaction 執行的前後，資料內容仍保持完整，並符合預設標準

* Isolation：獨立性
	* 每個 transaction 的讀或是寫，不會互相影響

* Durability：永久性
	* transaction 執行成功後，改寫的內容被永久儲存在資料庫中，之前的交易記錄不會不見。

不知道 atomicity 怎麼翻譯成中文，看大多數都是翻譯成 原子性，但是原子性跟要馬全部成功，要馬全部失敗沒有關係阿，所以就沒有翻譯了，但我覺得比較恰當的是把一個 transaction 包成一個東西，然後真的東西就是最小單位（雖然可以拆成很多個步驟），那這個最小單位是不可分割的。