import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../constant/SECRETKEY';

function authenticateToken(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers['authorization'];

  if (!token) {
    res.status(401).json({ message: 'Token não fornecido' });
    return;
  }

  jwt.verify(token as string, SECRET_KEY, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Token inválido' });
      return;
    }

    req.body.user = user;
    next();
  });
}

export default authenticateToken;
