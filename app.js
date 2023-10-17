const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Sample product data (replace with your data source)
const products = {
  'spG146558127': 
  { 
    name: 'spG146558127',
    title: 'Medusa Coffee Mug', 
    subtitle:null,
    description:"Every programmer's best friend.",
    handle:"coffee-mug",
    is_giftcard:false,
    status:"published",
    thumbnail:"https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
    weight:400,
    length:300,
    height:500,
    width:150,
    hs_code:'medusa_hs_code_for_test',
    origin_country:'India',
    mid_code:12343454324234,
    material:'cotton',
    type_id:1231234,
    discountable:true,
    external_id:null,
    metadata:'Best Products ever on discount',
    collection:'Star collections',
    collection_id:2313412312

  },

};

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/scan', (req, res) => {
  const barcode = req.body.barcode;
  const product = products[barcode];
  if (product) {
    res.render('product', { product });
  } else {
    res.render('not-found');
  }
});


// app.post('/scan', async (req, res) => {
//   const barcode = req.body.barcode;

//   try {
//     // Make an API request to fetch product details
//     const response = await axios.get(`http://localhost:9000/store/products/${barcode}`);
//     const productData = response.data;
//     console.log(productData)

//     res.render('product', {product: productData.product });
//   } catch (error) {
//     res.render('not-found');
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

