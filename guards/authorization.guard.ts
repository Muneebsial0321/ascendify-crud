import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';



const  SECRET_KEY = process.env.SECRET_KEY || ""
const authenticateJWT = (req: any, res: Response, next: NextFunction):string | any => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }
  try {
    


   const decoded =  jwt.verify(token,SECRET_KEY)
    req.user = decoded;
    next();  

  } catch (error) {
    return res.status(403).json({ message: 'INVAILD TOKEN' });
  }
  };


export default authenticateJWT;
