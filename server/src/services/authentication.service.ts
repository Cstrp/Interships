import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const getToken = (id: string, email: string) => {
  return jwt.sign({ id, email }, JWT_SECRET, { expiresIn: '666m' });
};

export { getToken };
