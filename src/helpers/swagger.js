const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API with Swagger',
    version: '1.0.0',
    description: 'This is API for app Pink App Demo',
  },
  servers: [
    {
      url: 'http://localhost:3105/api/v1', // Adjust the URL to match your API's base URL
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  // Ensure the path here correctly points to your route files
  apis: ['./src/app/v1/routes/**/*.js'], // This might need to be adjusted based on your project structure
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
