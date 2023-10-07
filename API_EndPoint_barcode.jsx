var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'http://localhost:9000/store/products/prod_01HBZBP8FWNE7QRNM64AQ91MVK',
  headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});