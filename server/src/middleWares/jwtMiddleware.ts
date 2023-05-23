import jwt from 'jsonwebtoken';
import { DecodedToken } from '../models';
import { JWT_SECRET } from '../config/db';
import { NextFunction, Request, Response } from 'express';

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) return res.status(403).json({ message: 'Invalid token' });

    const decodedToken = decoded as DecodedToken;
    req.params.userId = decodedToken.userId;
    next();
  });
};

export { jwtMiddleware };
