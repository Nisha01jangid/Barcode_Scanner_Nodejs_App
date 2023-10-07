const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Sample product data (replace with your data source)
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
];

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.json(product);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

