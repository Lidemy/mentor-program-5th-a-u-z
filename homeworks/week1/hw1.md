## 交作業流程
1. 點入連結：：[https://classroom.github.com/a/yNNrtNyW]() // 按接受邀請
2. 頁面會自己更新，之後會產生出新連結，點進去 // 進入自己的 repository
3. 按 code 按鈕，複製 url // 取得 url
4. 回到本機上面，進入 terminal ，在 terminal 讓輸入 `git clone url` ，這裡的 url ，就是步驟三的 url // 把整份資料夾下載到自己的電腦上面

5. 在 terminal 輸入 `cd mentor-program-5th-a-u-z` // 移動到 mentor-program-5th-a-u-z 這個資料夾
6. 在 terminal 輸入 `cd homeworks`  // 移動到 homeworks 這個資料夾
7. 在 terminal 輸入 `cd week1` // 移動到 week1 這個資料夾
8. 在 terminal 輸入 `git checkout -b week1_branch` // 用 git 指令，開一個叫做 week1 的分支，並且移動到上面
9. 開始寫作業，並且存檔，然後休息，其他的等下一個番茄鐘再做😀
10. 如果有新增檔案，要先 add 。
11. 在 terminal（目前還是在 week1 這個資料夾底下喔）  輸入 `git commit -am "hw1_finished"` // 把做過更動的檔案（也就是上面存檔的） add 加上 commit 一起做完 並說這次是 hw1 完成了
12. 循環第五點與第六點
13. 在 terminal 輸入`git push origin week1_branch` // 把本地端的 week1_branch 上傳到 遠端的 github 上面
14. 在 github 上面發一個 pull request(PR) // 給這個專案的人看到一個通知，說想要合併到 master 上面
15. 在 [https://learning.lidemy.com/course]() 按繳交作業，並貼上步驟 9 轉跳後的 url
16. 改完作業後，切換到 master，`git checkout master`
17. 將改好的作業拉下來，`git pull origin master`
18. 刪掉原本的分支，`git branch -d week1_branch`
