<template>
  <div class="search-wrapper">
    <input type="text" />
    <div class="">
      <label for="regions">Filter by region </label>

      <select
        name="regions"
        id="regions"
        v-on:change="$emit('update-current-region', $event.target.value)"
        v-model="selected"
      >
        <option
          v-for="region in this.$parent.regionArray"
          :key="region"
          :value="region"
          >{{ region }}</option
        >
        <!-- <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option> -->
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: { regionArray: Array }
};
</script>
<style>
.search-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  background-color: transparent;
}
</style>
