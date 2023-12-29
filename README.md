###HOW TO BUILD IT IN LOCAL ENV

您好
主要的代碼撰寫在以下幾支檔案：
src/layouts/MainLayout.vue          >主要版面
src/pages/IndexPage.vue             >首頁組件
src/components/EssentialLink.vue    >資料組件
src/components/SearchComponent.vue  >搜尋組件
src/boot/axios.js                   >呼叫api方法
src/stores/example-store.js         >pinia全局狀態方法


# node version

V18.19.0

# use yarn to add quasar

yarn global add @quasar/cli

# cd front-end-test

yarn quasar dev

### BASIC FUNCTION OK

1. 數據整合：
   使用 axios 非同步處理 api
2. 搜尋功能：
   使用 vue3 元件根據輸入即時過濾結果。
3. 顯示結果：
   展示與輸入匹配的結果,空白會回到初始狀態，無匹配顯示 No matches found 字樣
4. 使用者介面：
   使用基於 vue3 之 Quasar 框架, 使用經典配色、極簡風格。
5. 程式碼組織：
   - 讀取及刷新 pinia 數據讀取的元件 EssentialLink、搜尋框元件 SearchComponent, 引入 IndexPage
   - 遵循框架推薦的最佳實踐和程式碼風格, api 呼叫統一、pinia 全局狀態均抽象分離至獨立之 js 檔
6. 額外挑戰（選擇性）：

   - 實現進階功能，如快取搜尋結果、防抖動、錯誤處理介面等。>>
     防抖動設定為 500 毫秒。
     錯誤處理 quasar 預設 404 會有轉導頁面，另外以 console.log 的方式則在 axios.js 以判斷式對有伺服器回傳、無伺
     服回傳、請求時錯誤、其他錯誤等做 log，有伺服器回傳則在細分為各種狀態碼。而在各個引入呼叫 api 元件的組
     件，則再做錯誤處理，log 下錯誤發生的組件名稱方便 debug。
   - 當搜尋框清空時並沒有恢復到最初的狀態>>
     已完成。
   - 思考要如何實現專案的 `可攜性` 讓任何的開發者可以在不同的裝置都能夠輕鬆開發。>>
     可攜性依本人淺見，現行技術 docker 容器技術的導入能夠帶來顯著的提昇。宥限於開發測試時間，且本
     次開發並沒有太多的系統參數需要設置。因此本次開發實踐可攜性的方式著重在盡可能使用易於取得的依賴和框
     架，因此採用 yarn 和 quasar cli。
   - 可能的話可以嘗試部屬到 `github-pages`

   - 目前該範例的 json 資料是從另一個 repo 中取得，這並不是一個很優雅的作法...>>
     使用 pinia 實踐全局狀態，將數據存儲到客戶端，優先讀取本機資料避免重複呼叫遠端減少開銷。另外實做
     刷新數據之按鈕，以及若本機端沒有資料，則呼叫遠端之判斷。
