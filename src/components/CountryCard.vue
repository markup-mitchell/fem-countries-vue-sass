<template>
  <Article class="card">
    <div class="flag-wrapper">
      <img :src="flag" :alt="name + ' flag'" loading="lazy" />
    </div>
    <div
      class="stat-wrapper theme-transition"
      :class="mode === 'dark' ? 'card--dark' : 'card--light'"
    >
      <h2 class="heading">{{ name }}</h2>
      <p>Population: {{ population }}</p>
      <p>Region: {{ region }}</p>
      <p>Capital: {{ capital }}</p>
    </div>
  </Article>
</template>

<style lang="scss">
.card {
  // width: 264px;
  border-radius: 5px;
  overflow: hidden;
  color: inherit;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  .heading {
    text-align: left;
    margin: 0 0 1rem;
    font-size: 18px;
    font-weight: bold;
  }
  .flag-wrapper {
    height: 11.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .stat-wrapper {
    padding: 1.5rem;
    height: 100%;
    > * + * {
      margin-top: 0.5rem;
    }
    p {
      text-align: left;
      margin: 0;
    }
  }
}
</style>

<script>
export default {
  props: {
    name: String,
    flag: String,
    population: Number,
    region: String,
    capital: String,
    mode: String
  }
};
</script>
