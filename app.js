const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Sample product data (replace with your data source)
const products = {
  '12345': { name: 'Product 1', description: 'Description 1' },
  '67890': { name: 'Product 2', description: 'Description 2' },
};

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/scan', async (req, res) => {
  const barcode = req.body.barcode;

  try {
    // Make an API request to fetch product details
    const response = await axios.get(`http://localhost:9000/products/${barcode}`);
    const product = response.data;

    res.render('product', { product });
  } catch (error) {
    res.render('not-found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
