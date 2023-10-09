
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
  
const openapiSpecification = swaggerJsdoc(options);

module.exports = {
    openapiSpecification
}