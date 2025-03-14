const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sample Blog Api",
      description: "Sample Blog Web App RESTful API Documentation",
      contact: {
        name: "MixedCode",
        email: "contact@mixedcode.com",
        url: "https://mixedcode.com",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local Development",
      },
      {
        url: "http://test.co.kr/",
        description: "Test Server",
      },
      {
        url: "http://real.co.kr/",
        description: "Real Server",
      },
    ],
    // components: {},
  },
  apis: ["./routes/api/*.js", "./swagger/*"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};