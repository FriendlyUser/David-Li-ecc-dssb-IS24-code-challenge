const products = require('../data/products.json');

/**
 * Retrieves products based on the provided search query.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @return {void} The filtered products or all products.
 */
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

/**
 * Adds a product to the products array if all required fields are provided.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {void}
 */
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
        
        res.status(400).json({ message: 'Invalid request' });
    }
};


/**
 * Edits a product based on the provided request and response objects.
 *
 * @param {Object} req - The request object containing the body and params.
 * @param {Object} res - The response object used to send the response.
 * @return {void} No return value.
 */
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
            res.status(404).json({ message: 'Cannot find product given the product Id' });
        }
        return;
    } else {
        res.status(400).json({ message: 'Invalid request' });
    }
}


// delete product
exports.getProducts = getProducts;

exports.addProduct = addProduct;

exports.editProduct = editProduct;
