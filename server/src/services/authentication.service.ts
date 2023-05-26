import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import {STATUS} from "../enums";

const getToken = (id: string, email: string, status: STATUS) => {
  return jwt.sign({ id, email, status }, JWT_SECRET, { expiresIn: '666m' });
};

export { getToken };
