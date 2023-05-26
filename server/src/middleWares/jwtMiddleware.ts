import jwt from 'jsonwebtoken';
import { DecodedData } from '../models';
import { JWT_SECRET } from '../config';
import { NextFunction, Request, Response } from 'express';
import { MESSAGES } from '../enums/errorMessages';
import {STATUS} from "../enums";

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];

  if (!token) return res.status(401).json({ message: MESSAGES.UNAUTHORIZED });

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) return res.status(403).json({ message: MESSAGES.INVALID_TOKEN });

    const decodedToken = decoded as Pick<DecodedData, 'userId'>;

    const decodedStatus = decoded as Pick<DecodedData, 'status'>;

    req.params.userId = decodedToken.userId;
    req.params.status = decodedStatus.status

    if (decodedStatus.status === STATUS.DEACTIVATED) {
      return res.status(500).json({message: 'This user deactivated'})
    }
      next();
  });
};

export { jwtMiddleware };
