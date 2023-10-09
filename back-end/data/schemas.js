
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'BC Gov Assessment',
        version: '1.0.0',
      },
    },
    components: {},
    apis: ['./controllers/*.js']
  };
  
  /**
   * @swagger
   * components:
   *   schemas:
   *     NewProduct:
   *       type: object
   *       required:
   *         - productName
   *         - productOwnerName
   *         - scrumMasterName
   *         - startDate
   *         - methodology
   *         - location
   *       properties:
   *         productId:
   *           type: integer
   *           description: The auto-generated id of the product
   *         productName:
   *           type: string
   *           description: The name of the product
   *         productOwnerName: 
   *           type: string
   *           description: The name of the product owner 
   *         Developers:
   *           type: array
   *           items:
   *             type: string
   *           description: List of developers        
   *         scrumMasterName:
   *           type: string
   *           description: The name of the scrum master
   *         startDate: 
   *           type: string 
   *           format: date
   *           description: The start date of the project
   *         methodology:
   *           type: string
   *           enum: [Agile, Waterfall] 
   *           description: The development methodology         
   *         location:
   *           type: string
   *           format: uri
   *           description: Project repository URL
   *     UpdateProduct:
   *       type: object
   *       required:
   *         - productName
   *         - productOwnerName
   *         - scrumMasterName
   *         - methodology
   *         - location
   *       properties:
   *         productId:
   *           type: integer
   *           description: The auto-generated id of the product
   *         productName:
   *           type: string
   *           description: The name of the product
   *         productOwnerName: 
   *           type: string
   *           description: The name of the product owner 
   *         Developers:
   *           type: array
   *           items:
   *             type: string
   *           description: List of developers        
   *         scrumMasterName:
   *           type: string
   *           description: The name of the scrum master
   *         startDate: 
   *           type: string 
   *           format: date
   *           description: The start date of the project
   *         methodology:
   *           type: string
   *           enum: [Agile, Waterfall] 
   *           description: The development methodology         
   *         location:
   *           type: string
   *           format: uri
   *           description: Project repository URL
   */
const openapiSpecification = swaggerJsdoc(options);

module.exports = {
    openapiSpecification
}