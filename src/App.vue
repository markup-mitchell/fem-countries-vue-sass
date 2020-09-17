<template>
  <div id="app" :class="mode" class="theme-transition">
    <header
      class="header theme-transition"
      :class="darkMode ? 'card--dark' : 'card--light'"
    >
      <div class="header__contents">
        <h1>Where in the world?</h1>
        <DarkModeToggle v-on:toggle="toggleMode" :darkMode="darkMode" />
      </div>
    </header>
    <div class="page-wrapper">
      <div class="filter-layout">
        <Filters />
      </div>
      <div class="grid">
        <div
          v-for="country in selectedRegion"
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
  </div>
</template>

<script>
import DarkModeToggle from './components/DarkModeToggle';
import Filters from './components/Filters';
import CountryCard from './components/CountryCard';
export default {
  name: 'App',
  components: { CountryCard, DarkModeToggle, Filters },
  data() {
    return {
      countries: this.$parent.data,
      darkMode: false
    };
  },
  methods: {
    toggleMode() {
      this.darkMode = !this.darkMode;
    }
  },
  computed: {
    mode: function() {
      return this.darkMode ? 'dark' : 'light';
    },
    selectedRegion: function() {
      let region = 'Europe';
      return this.countries.filter((country) => {
        return country.region === region;
      });
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
@import './styles/themes.scss';

#app {
  font-family: 'Nunito Sans', sans-serif;
}

.card-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.grid {
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  align-items: stretch;
  justify-items: center;
  justify-content: space-between;
  grid-gap: 4rem;
}

.app-background-color {
  background-color: var(--primary-1);
}

.theme-switch {
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 12px;
    margin: 0 0 0 0.5rem;
    line-height: 1;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  svg {
    margin-bottom: 4px;
    transition: stroke 0.2s ease-in-out;
  }
  .stroke {
    stroke: #111517;
  }
}
.header {
  height: 80px;
  width: 100%;

  &__contents {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 55px;
    @media (min-width: 768px) {
      padding: 0 80px;
    }
  }
  h1 {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
}
.page-wrapper {
  padding: 0 55px;
  max-width: 1280px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 80px;
  }
  .filter-layout {
    margin: 2.5rem 0;
  }
}
</style>
