const express = require('express');
const router = express.Router();
const { getProducts } = require('../services/products');

router.get('/products', getProducts);

module.exports = router;