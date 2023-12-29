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

    //check store and call api if there was no data in stores
    onBeforeMount(async () => {
      if (!apiStore.data) {
        try {
          await apiStore.fetchData();
        } catch (error) {
          console.error(
            "Error occur when onBeforeMount in EssentialLink.vue:",
            error
          );
        }
      } else {
        alert("use data from pinia");
      }
    });

    //clear store and refresh
    const refreshData = () => {
      apiStore.data = null;
      if (!apiStore.data) {
        try {
          apiStore.fetchData();
        } catch (error) {
          console.error(
            "Error occur when calling refreshData in EssentialLink.vue:",
            error
          );
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
