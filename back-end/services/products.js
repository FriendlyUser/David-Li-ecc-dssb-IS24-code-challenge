const products = require('../data/products.json');

function getProducts (req, res) {

    // grab search query parameter and filter products
    const { q } = req.query;
    if (q) {
        const filteredProducts = products.filter(product => {
            const {scrumMasterName, Developers = []} = product;
            if (scrumMasterName.toLowerCase().includes(q.toLowerCase())) {
                return true;
            }
            // check Developers see if any of them contain the search query
            for (const developer of Developers) {
                if (developer.toLowerCase().includes(q.toLowerCase())) {
                    return true;
                }
            }

            return false; 
        })
        res.json(filteredProducts);
    } else {
        // Logic to get products
        res.json(products);
    }
};

function addProduct (req, res) {
    const body = req.body;
    const {productName, productOwnerName, startDate, methodology, location } = body;
    if (productName && productOwnerName && startDate && methodology && location) {
        // get latest product id and add 1
        const lastProduct = products[products.length - 1];
        const productId = lastProduct ? lastProduct.productId + 1 : 1;
        // add product to products array
        body.productId = productId;
        products.push(body);
        res.json(products);
        return;
    } else {
        console.log(body);
        // throw json error
        res.status(400).json({ message: 'Invalid request' });
    }
};

// editProduct
function editProduct (req, res) {
    const body = req.body;
    const { productId } = req.params;
    const { productName, productOwnerName, methodology, location } = body;
    if (productId && productName && productOwnerName && methodology && location) {
        // find product by id, need do type conversion
        const index = products.findIndex(product => product.productId === Number(productId));
        // modify product 
        if (index >= 0) {
            products[index] = {
                ...products[index],
                ...body,
            };
            res.json(products);
        } else {
            // throw json error
            res.status(400).json({ message: 'Cannot find product given the product Id' });
        }
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
