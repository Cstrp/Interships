import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_DATABASE = process.env.DB_DATABASE || '';
const JWT_SECRET = process.env.JWT_SECRET || '';
const PORT = process.env.PORT || '8080';

export { PORT, DB_USER, DB_DATABASE, DB_HOST, DB_PASSWORD, JWT_SECRET };
