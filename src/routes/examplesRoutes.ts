import express from 'express';
import { exampleController, createExample } from '../controllers/exampleController';
import { login, verifyToken } from '../controllers/authController';

const router = express.Router();

router.get('/', verifyToken,exampleController);
/** 
 * @swagger
 * /example:
 *   get:
 *     summary: Obtiene un ejemplo
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */

router.post('/', verifyToken,createExample);
/** 
 * @swagger
 * /example:
 *   post:
 *     summary: crea un ejemplo
 *     responses:
 *       201:
 *         description: Respuesta exitosa
 */

export default router;
