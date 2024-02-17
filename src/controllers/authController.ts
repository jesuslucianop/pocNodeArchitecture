import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
 import bcrypt  from 'bcrypt';

 const secretKey = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwODExOTkzNCwiaWF0IjoxNzA4MTE5OTM0fQ.2fjTWfO7BEDnarlUhVyJz9JQFB3YJ1xMUckxXH30XCI';
 interface AuthenticatedRequest<T> extends Request {
    user?: T;
  }
  
export const login = (req:Request, res:Response): Response | void =>{
    const hashPassword = (password: string): string => {
        const saltRounds = 10; // Número de rondas de sal (puedes ajustarlo según tus necesidades)
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        return hashedPassword;
      };
      // Ejemplo de uso
const plainPassword = 'admin'; // La contraseña que quieres convertir a hash
const hashedPassword = hashPassword(plainPassword);
    console.log("LLego a esta ruta");
    const { username, password } = req.body;
  
    const validUser = {username:'admin', password:'admin' };
    console.log("parametrtos",req.body);
    if (!validUser || !bcrypt.compareSync(password, hashedPassword)) 
    {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
const token = jwt.sign({sub:validUser.username }, secretKey,{expiresIn:'1h'});
    res.json({token});
    console.log("parametrtos final ",req.body);
};

export const verifyToken = (req: AuthenticatedRequest<any>, res: Response, next: Function):Response |  void => {
    const token  = req.header('Authorization')?.replace('Bearer','');
    if(!token)
    {
        return res.status(401).json({message:'Token no Proporcionado'});
    }

    try {
        const decoded = jwt.verify(token, secretKey, { ignoreExpiration: false });
        req.user = decoded;
        next();
    } catch ( error) {
        console.error('Error al verificar el token:', error);

        return res.status(401).json({ message: 'Token inválido' });

    }

};