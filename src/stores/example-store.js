import { defineStore } from "pinia";
import { fetchDataFromApi } from "../boot/axios.js";

export const useApiStore = defineStore("api", {
  state: () => ({
    data: null,
  }),
  actions: {
    async fetchData() {
      if (!this.data) {
        try {
          this.data = await fetchDataFromApi();
        } catch (error) {
          // Handle error
          console.error("Error fetching data:", error);
        }
      }
      return this.data;
    },
  },
});
