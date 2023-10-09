const express = require('express');
const swaggerUi = require('swagger-ui-express');

const { openapiSpecification } = require('../data/schemas');
const router = express.Router();
const { getProducts, editProduct, addProduct } = require('../services/products');

/**
 * @openapi
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: Successful operation. Returns a list of products.
 *       400:
 *         description: Internal server error.
 */
router.get('/products', getProducts);
/**
 * @openapi
 * components:
 *   schemas:
 *     UpdateProduct:
 *       type: object
 *       required: 
 *         - productName
 *         - productOwnerName
 *         - scrumMasterName 
 *         - startDate
 *         - methodology
 *         - location
 *       properties:
 *          productId: 
 *            type: integer
 *            description: The auto-generated id of the product
 *          productName:
 *            type: string
 *            description: The name of the product
 *          productOwnerName:
 *            type: string
 *            description: The name of the product owner
 *          Developers: 
 *            type: array 
 *            items:
 *              type: string
 *              description: List of developers
 *          scrumMasterName: 
 *            type: string
 *            description: The name of the scrum master 
 *          startDate:
 *            type: string 
 *            format: date
 *            description: The start date of the project
 *          methodology:
 *            type: string 
 *            enum: [Agile, Waterfall]
 *            description: The development methodology
 *          location: 
 *            type: string
 *            format: uri
 *            description: Project repository URL 
 * /api/products/{productId}:
 *   put:
 *     parameters:
 *       - name: productId
 *         in: path
 *         required: true
 *         description: ID of product to update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProduct'
 *     responses:
 *       200:
 *         description: Updated product object 
 *       404: 
 *         description: Product not found
*/
router.put('/products/:productId', editProduct);
/**
 * @openapi
 * /api/products:
 *   post:
 *     summary: Add a new product
 *     description: Add a new product to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productName
 *               - productOwnerName 
 *               - scrumMasterName
 *               - startDate
 *               - methodology 
 *               - location   
 *             properties:
 *               productId: 
 *                 type: integer
 *                 description: The auto-generated id of the product
 *               productName:
 *                 type: string
 *                 description: The name of the product
 *               productOwnerName:
 *                 type: string
 *                 description: The name of the product owner
 *               Developers: 
 *                 type: array 
 *                 items:
 *                   type: string
 *                 description: List of developers
 *               scrumMasterName: 
 *                 type: string
 *                 description: The name of the scrum master 
 *               startDate:
 *                 type: string 
 *                 format: date
 *                 description: The start date of the project
 *               methodology:
 *                 type: string
 *                 enum: [Agile, Waterfall]
 *               location: 
 *                 type: string
 *                 format: uri
 *                 description: Project repository URL
 *     responses:
 *       200:
 *         description: Created. Returns the newly created product.
 *       400:
 *         description: Bad request. Invalid input.
 */
router.post('/products', addProduct);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// serve openApiSpecification
router.get('/openapi.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(openapiSpecification);
})

module.exports = router;