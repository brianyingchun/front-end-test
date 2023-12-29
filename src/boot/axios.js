import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({ baseURL: "https://api.example.com" });

const apiUrl =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

export const fetchDataFromApi = async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // 收到伺服器的錯誤回應
      const status = error.response.status;
      switch (status) {
        case 400:
          console.log("錯誤 400：請求無效");
          break;
        case 401:
          console.log("錯誤 401：未授權");
          break;
        case 404:
          console.log("錯誤 404：找不到資源");
          break;
        case 500:
          console.log("錯誤 500：伺服器內部錯誤");
          break;
        default:
          console.log(`發生錯誤，狀態碼：${status}`);
      }
      console.log("伺服器錯誤：", error.response.data);
    } else if (error.request) {
      // 沒有收到伺服器回應
      console.log("沒有收到伺服器回應");
    } else {
      // 請求時發生錯誤，處理時出現問題
      console.log("請求錯誤：", error.message);
    }
    console.log("詳細錯誤資訊：", error.config);
    throw error;
  }
};

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
