<template>
  <div id="app">
    <div v-for="country in countries" :key="country.alpha2code">
      <CountryCard
        :name="country.name"
        :flag="country.flag"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
      />
    </div>
  </div>
</template>

<script>
import CountryCard from './components/CountryCard';
export default {
  name: 'App',
  components: { CountryCard },
  data() {
    return {
      countries: this.$parent.data
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  > * + * {
    margin-left: 1rem;
  }
}
</style>
