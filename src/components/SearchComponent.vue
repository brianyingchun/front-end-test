<template>
  <div>
    <label class="text-h6">搜尋元件</label>
    <form class="search-form">
      <input
        v-model="searchTerm"
        type="text"
        class="search"
        placeholder="City or State"
      />
      <ul v-if="searchTerm === ''" class="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
      <ul v-if="searchTerm !== ''" class="suggestions">
        <li v-if="suggestions.length === 0">No matches found</li>
        <li v-for="place in suggestions" :key="place.id">
          <span
            class="name"
            v-html="
              highlightText(place.city, searchTerm) +
              ', ' +
              highlightText(place.state, searchTerm)
            "
          ></span>
          <span class="population">{{
            numberWithCommas(place.population)
          }}</span>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, watch, watchEffect } from "vue";
import { useApiStore } from "../stores/example-store.js";

export default defineComponent({
  name: "SearchComponet",
  setup() {
    const searchTerm = ref("");
    const suggestions = ref([]);
    const apiStore = useApiStore();
    const cities = ref(apiStore.data);
    watchEffect(() => {
      cities.value = apiStore.data || [];
    });

    const findMatches = (wordToMatch, cities) => {
      const regex = new RegExp(wordToMatch, "gi");
      return cities.filter(
        (place) => place.city.match(regex) || place.state.match(regex)
      );
    };

    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const highlightText = (text, term) => {
      const regex = new RegExp(term, "gi");
      return text.replace(regex, (match) => `<span class="hl">${match}</span>`);
    };

    const displayMatches = () => {
      suggestions.value = findMatches(searchTerm.value, cities.value);
    };

    watch(searchTerm, displayMatches);

    return {
      apiStore,
      searchTerm,
      suggestions,
      cities,
      numberWithCommas,
      highlightText,
    };
  },
});
</script>
<style>
.search-form {
  max-width: 400px;
  margin: 50px auto;
}

input.search {
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10%;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}

.suggestions {
  margin: 0;
  padding: 0;
  position: relative;
  /*perspective:20px;*/
}
.suggestions li {
  background: white;
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}

.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
}
.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
}

span.population {
  font-size: 15px;
}
</style>
