/* eslint-disable implicit-arrow-linebreak */
const getData = api =>
  fetch(api)
    .then(response => response.json())
    .then(res => res)
    .catch(error => error);

export default getData;
