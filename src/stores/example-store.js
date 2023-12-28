import { defineStore } from "pinia";
import { fetchDataFromApi } from "../boot/axios.js";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

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
  getters: {
    getData: (state) => state.data,
    // 可以添加其他的 getters
  },
});
