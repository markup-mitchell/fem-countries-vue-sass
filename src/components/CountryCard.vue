<template>
  <div class="card">
    <Article>
      <div class="flag-wrapper">
        <img :src="flag" :alt="name + ' flag'" />
      </div>
      <div class="stat-wrapper">
        <h2 class="heading">{{ name }}</h2>
        <p>Population: {{ population }}</p>
        <p>Region: {{ region }}</p>
        <p>Capital: {{ capital }}</p>
      </div>
    </Article>
  </div>
</template>

<style lang="scss">
.card {
  width: 264px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  .heading {
    text-align: left;
    margin-top: 0;
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
    p {
      text-align: left;
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
    capital: String
  }
};
</script>
