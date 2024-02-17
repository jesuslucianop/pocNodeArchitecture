import express from 'express';
//import { exampleController } from '../controllers/exampleController';
import { login, verifyToken } from '../controllers/authController';
import exampleRoutes from  '../routes/examplesRoutes';
import authRoutes from '../routes/authRoutes';
const router = express.Router();


router.use('/example', verifyToken,exampleRoutes);
/**
 * @swagger
 * /example:
 *   get:
 *     summary: Obtiene un ejemplo
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *   post:
 *     summary: Crea un ejemplo
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *     responses:
 *       200:
 *         description: Datos creados con éxito
 */

router.use('/login',authRoutes);

export default router;
