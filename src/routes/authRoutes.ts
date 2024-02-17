import express from 'express';
import { login, verifyToken } from '../controllers/authController';
const router = express.Router();


router.post('/', login);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Endpoint para iniciar sesión y obtener un token JWT.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token de acceso generado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

export default router;
