# 十一到十五週心得



## week11

這週是資安週，學習到資安相關的東西，主要有三種（SQL injection, XSS, CSRF）。
第一次寫作業的時候，我都亂加 htmlescape() ，導致資料庫的資料都是 &lt 之類的東西，好險有看檢討直播，後來全部都改回來了。 

## week12 & 13

在訂正 week12, week13 留言板的時候，改到快要崩潰，因為之前的寫法都只是堪用，然後都有一些 bug 。訂正的時候改了一個功能，然後另一個功能就壞掉，如此反覆，然後也有因為邏輯寫的不好跟程式碼順序不對的種種原因，總之最後終於改好了。

在改的過程中，才知道原來會有這麼多坑產生，然後這些坑可能也是要真的踩進去然後爬出來之後才不會再犯的吧。不過每次重新看程式碼，重新疏理清楚後，對於這兩週的作業的了解跟掌握度也變高了。

學習 webpack 打包東西，更有開發的感覺了


## week14

這週看了之前學長姊的筆記，所以沒有遇到什麼問題


好像能寫的也不多，所以就去看了之前的 week2 檢討直播

## week2&3 檢討直播
*  JavaScript 分號與換行的問題，但我覺得照著 eslint 走就對了。
*  複習 `console.log(a1 === a2 === a3)`，程式是先判斷 `a1 === a2` 的結果 ，假設結果是 true，再判斷 `true === a3`
*  是說當時直播好多人留言互動喔