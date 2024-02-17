import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';


const app = express();

const PORT = process.env.port || 3000;

app.use(express.json());
// Configuración de Swagger JSDoc
const swaggerOptions = require('./swaggerOptions');
const specs = swaggerJsdoc(swaggerOptions);

app.use(express.json());  // Añadir este middleware
app.use(express.urlencoded({ extended: true }));  // Añadir este middleware

// Rutas
app.use('/api',routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT,()=>{
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);

});