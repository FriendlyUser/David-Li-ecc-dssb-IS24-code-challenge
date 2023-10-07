const products = require('../data/products.json');

function getProducts (req, res) {
    // Logic to get products
    res.json(products);
};

exports.getProducts = getProducts;