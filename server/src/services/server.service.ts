import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from '../config';
import { checkRouter } from '../routes';
import { authRouter } from '../routes/auth';
import { ROUTES } from '../models';
import bodyParser from 'body-parser';
import { usersRouter } from '../routes/users';

const app = express();

const sql = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ROUTES.DEFAULT, checkRouter);
app.use(ROUTES.DEFAULT, authRouter);
app.use(ROUTES.DEFAULT, usersRouter);

export { app, sql };
