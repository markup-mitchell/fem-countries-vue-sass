import Vue from 'vue';
import App from './App.vue';

import './styles/global.scss';

Vue.config.productionTip = false;

function fetchAPIData() {
  // this.responseAvailable = false;

  fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert(
          'Server returned ' + response.status + ' : ' + response.statusText
        );
      }
    })
    .then((response) => {
      new Vue({
        render: (h) => h(App),
        data() {
          return {
            data: response
          };
        }
      }).$mount('#app');
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchAPIData();
