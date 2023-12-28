<template>
  <div>
    <label class="text-h6 q-mr-md">資料載入元件</label>
    <q-btn color="primary" @click="refreshData">Refresh Data</q-btn>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from "vue";
import { useApiStore } from "../stores/example-store.js";

export default defineComponent({
  name: "EssentialLink",
  setup() {
    const apiStore = useApiStore();

    onBeforeMount(async () => {
      // Check if data is already available in Pinia
      if (!apiStore.data) {
        // If not, fetch data from API and store it in Pinia
        try {
          await apiStore.fetchData();
        } catch (error) {
          // Handle error
          console.error("Error fetching data:", error);
        }
      } else {
        alert("use data from pinia");
      }
    });

    const refreshData = () => {
      apiStore.data = null; // 清空數據
      if (!apiStore.data) {
        // If not, fetch data from API and store it in Pinia
        try {
          apiStore.fetchData();
        } catch (error) {
          // Handle error
          console.error("Error fetching data:", error);
        }
      }
      alert("資料已刷新");
    };

    return {
      apiStore,
      refreshData,
    };
  },
});
</script>
