const express = require('express');
const router = express.Router();
const { getProducts, editProduct, addProduct} = require('../services/products');

router.get('/products', getProducts);
router.put('/products', editProduct);
router.post('/products', addProduct);

module.exports = router;