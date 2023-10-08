const products = require('../data/products.json');

function getProducts (req, res) {
    // Logic to get products
    res.json(products);
};

function addProduct (req, res) {
    const body = req.body;
    const { productId, productName, productOwnerName, startDate, methodology, location } = body;
    if (productId && productName && productOwnerName && startDate && methodology && location) {
        products.push(body);
        res.json(products);
        return;
    } else {
        // throw json error
        res.status(400).json({ message: 'Invalid request' });
    }
};

// editProduct
function editProduct (req, res) {
    const body = req.body;
    const { productId, productName, productOwnerName, startDate, methodology, location } = body;
    if (productId && productName && productOwnerName && startDate && methodology && location) {
        // find product by id
        const index = products.findIndex(product => product.productId === productId);
        // modify product 
        products[index] = body;
        res.json(products);
        return;
    } else {
        // throw json error
        res.status(400).json({ message: 'Invalid request' });
    }
}

// delete product
function deleteProduct (req, res) {
    const body = req.body;
    const { productId } = body;
    if (productId ) {
        // find product by id
        const index = products.findIndex(product => product.productId === productId);
        // modify product 
        products.splice(index, 1);
        res.json(products);
        return;
    } else {
        // throw json error
        res.status(400).json({ message: 'Invalid request' });
    }
}

// delete product
exports.getProducts = getProducts;

exports.addProduct = addProduct;

exports.editProduct = editProduct;
