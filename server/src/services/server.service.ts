import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from '../config/db';

const app = express();
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

app.use(cors({ origin: '*' }));

export { app, connection };
