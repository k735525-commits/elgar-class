# 愛兒家 雙親教室報名系統
## 部署指南（Firebase + Vercel）

---

## 第一步：建立 Firebase 專案（免費）

1. 前往 https://console.firebase.google.com
2. 點選「新增專案」
3. 專案名稱輸入：`elgar-class`，點「繼續」
4. 關閉 Google Analytics（不需要），點「建立專案」
5. 等待建立完成，點「繼續」

---

## 第二步：建立 Firestore 資料庫

1. 在左側選單點「建構」→「Firestore Database」
2. 點「建立資料庫」
3. 選「以測試模式啟動」（之後可改規則）
4. 選擇伺服器位置：選 `asia-east1`（台灣最近）
5. 點「完成」

---

## 第三步：取得 Firebase 設定值

1. 點左上角的「專案設定」（齒輪圖示）
2. 往下滾到「您的應用程式」區塊
3. 點「網頁」圖示（`</>`）
4. 應用程式暱稱：`elgar-web`，點「註冊應用程式」
5. 你會看到類似以下的設定值：

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "elgar-class.firebaseapp.com",
  projectId: "elgar-class",
  storageBucket: "elgar-class.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

6. **複製並保存這些值**，下一步會用到

---

## 第四步：上傳程式碼到 GitHub

1. 前往 https://github.com，登入（沒有帳號請免費註冊）
2. 點右上角「+」→「New repository」
3. 名稱：`elgar-class-system`，選 Public，點「Create repository」
4. 把本資料夾（elgar-class）的所有檔案上傳到這個 repository
   - 可以直接拖曳上傳，或使用 GitHub Desktop 工具

---

## 第五步：部署到 Vercel

1. 前往 https://vercel.com，用 GitHub 帳號登入
2. 點「Add New Project」
3. 選擇剛才建立的 `elgar-class-system` repository
4. **重要：在「Environment Variables」區塊加入以下 6 個變數**

| 名稱 | 值（填入你的 Firebase 設定值） |
|------|------|
| `VITE_FIREBASE_API_KEY` | 你的 apiKey |
| `VITE_FIREBASE_AUTH_DOMAIN` | 你的 authDomain |
| `VITE_FIREBASE_PROJECT_ID` | 你的 projectId |
| `VITE_FIREBASE_STORAGE_BUCKET` | 你的 storageBucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | 你的 messagingSenderId |
| `VITE_FIREBASE_APP_ID` | 你的 appId |

5. 點「Deploy」，等待約 1-2 分鐘
6. 部署完成後，Vercel 會給你一個網址，例如：
   `https://elgar-class-system.vercel.app`

---

## 第六步：設定 Firebase 安全規則（建議）

部署完成後，回到 Firebase Console：

1. 「Firestore Database」→「規則」
2. 將規則改為：

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /classes/{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

3. 點「發布」

---

## 完成！

- 📱 將 Vercel 網址分享給媽媽們即可報名
- 🔐 管理員密碼：`0205`
- ☁️ 所有資料即時同步，永久保存在 Firebase

---

## 常見問題

**Q: 費用是多少？**
A: Firebase 免費方案每天可讀取 50,000 次、寫入 20,000 次，一般護理之家使用量完全免費。Vercel 免費方案也足夠使用。

**Q: 如何更改管理員密碼？**
A: 開啟 `src/App.jsx`，找到 `const ADMIN_PASSWORD = "0205"` 這行，改成你想要的密碼，再重新部署。

**Q: 部署後資料會消失嗎？**
A: 不會，所有資料儲存在 Firebase，與 Vercel 部署無關。
