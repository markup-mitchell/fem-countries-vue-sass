this.responseAvailable = false;

fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      alert('Server returned ' + response.status + ' : ' + response.statusText);
    }
  })
  .then((response) => {
    this.result = response.body;
    this.responseAvailable = true;
  })
  .catch((err) => {
    console.log(err);
  });
