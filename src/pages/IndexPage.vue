<template>
  <q-page class="flex flex-center">
    <q-card style="width: 60%">
      <div style="width: 100%; margin-bottom: 100px; margin-left: 30%">
        <EssentialLink></EssentialLink>
      </div>
      <div style="width: 50%; margin-left: 30%">
        <SearchComponent></SearchComponent>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import SearchComponent from "components/SearchComponent.vue";
import { useApiStore } from "../stores/example-store.js";

export default defineComponent({
  name: "IndexPage",

  components: {
    EssentialLink,
    SearchComponent,
  },

  setup() {
    const apiStore = useApiStore();
    return {
      apiStore,
    };
  },
});
</script>
