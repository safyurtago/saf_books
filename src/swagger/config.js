const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "This is a Backend Definition for Swagger APi",
        version: "1.0.0",
        description: "This is a Swagger Definition for Swagger"
    },
    servers: [
        {
            url: "http://localhost:8080",
            description: "Development Server"
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ["src/swagger/*.swagger.js"],
};

const swaggerUI = require('swagger-ui-express');

const swaggerSpec = swaggerJSDoc(options);


module.exports = {
    swaggerUI,
    swaggerSpec
}