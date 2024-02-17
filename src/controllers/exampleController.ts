import { Request, Response } from 'express';

export const exampleController = (req: Request, res: Response): void => {
  res.json({ message: 'Hola, este es un ejemplo de API en Node.js con TypeScript' });
};

export const createExample = (req: Request, res: Response): void => {
    // Lógica para manejar la solicitud POST
    const { data } = req.body;
    // Realiza operaciones con los datos
    res.json({ message: 'Datos recibidos con éxito', data });
  };