###HOW TO BUILD IT IN LOCAL ENV

# node version

V18.19.0

# use yarn to add quasar

yarn global add @quasar/cli

# cd front-end-test

yarn quasar dev

### BASIC FUNCTION OK 

1. 數據整合：
      使用axios非同步處理api
2. 搜尋功能：
      使用vue3元件根據輸入即時過濾結果。
3. 顯示結果：
      展示與輸入匹配的結果,空白會回到初始狀態，無匹配顯示No matches found字樣
4. 使用者介面：
      使用基於vue3之Quasar框架, 使用經典配色、極簡風格。
5. 程式碼組織：
    - 讀取及刷新pinia數據讀取的元件EssentialLink、搜尋框元件SearchComponent, 引入IndexPage
    - 遵循框架推薦的最佳實踐和程式碼風格, api 呼叫統一、pinia全局狀態均抽象分離至獨立之js檔
6. 額外挑戰（選擇性）：
    - 實現進階功能，如快取搜尋結果、防抖動、錯誤處理介面等。
    - 當搜尋框清空時並沒有恢復到最初的狀態
        已完成。
    - 思考要如何實現專案的 `可攜性` 讓任何的開發者可以在不同的裝置都能夠輕鬆開發。
        前端運行環境通常都是瀏覽器，且本次開發並沒有太多的系統參數需要設置。因此本次開發實踐可攜性的方
        式著重在盡可能使用易於取得的依賴和框架，因此採用yarn和quasar cli。
    - 可能的話可以嘗試部屬到 `github-pages`
    - 目前該範例的 json 資料是從另一個 repo 中取得，這並不是一個很優雅的作法...
        使用pinia實踐全局狀態，將數據存儲到客戶端，優先讀取本機資料避免重複呼叫遠端減少開銷。另外實做
        刷新數據之按鈕，以及若本機端沒有資料，則呼叫遠端之判斷。

