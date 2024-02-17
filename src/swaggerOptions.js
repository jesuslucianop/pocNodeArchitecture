const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API en Node.js con TypeScript',
        version: '1.0.0',
        description: 'Una API de ejemplo con Swagger y TypeScript',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./src/routes/*.ts'], // Rutas de tu API
  };
  
  module.exports = swaggerOptions;
  