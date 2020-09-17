<template>
  <div id="app" :class="mode" class="theme-transition">
    <input type="checkbox" class="theme-switch" v-model="darkMode" />
    <div class="grid">
      <div
        v-for="country in countries"
        :key="country.alpha2code"
        class="card-wrapper"
      >
        <CountryCard
          :name="country.name"
          :flag="country.flag"
          :population="country.population"
          :region="country.region"
          :capital="country.capital"
          :mode="mode"
        />
      </div>
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
      countries: this.$parent.data,
      darkMode: false
    };
  },
  // toggleMode() {
  //   this.mode === 'dark' ? 'light' : 'dark';
  // },
  computed: {
    mode: function() {
      return this.darkMode ? 'dark' : 'light';
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
@import './styles/themes.scss';

#app {
  padding: 55px;
  font-family: 'Nunito Sans', sans-serif;
}

@media (min-width: 768px) {
  #app {
    padding: 80px;
  }
}

.card-wrapper {
  display: inline-block;
}

.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  align-items: stretch;
  grid-gap: 75px;
}

.app-background-color {
  background-color: var(--primary-1);
}
</style>
