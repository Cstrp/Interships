import { Request, Response } from 'express';
import { checkBody, checkPassword, encrypt, getToken, sql } from '../services';
import { User } from '../models';
import moment from 'moment';
import { REQUESTS, STATUS } from '../enums';
import mysql, { RowDataPacket } from 'mysql2';

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const error = checkBody(req.body, ['email', 'password']);

  if (error) return res.status(400).json({ message: 'Invalid request. Email or password are required' });

  sql.query(REQUESTS.FIND_USER_BY_EMAIL, [email], (err, result: RowDataPacket[]) => {
    if (err) return res.status(400).json({ message: 'Invalid request.' });

    const user = result[0];

    const correctPassword = checkPassword(password, user.password);
    const updatedData = moment().unix();

    if (correctPassword)
      sql.query(
        REQUESTS.UPDATE_LAST_VISIT,
        [user.status !== STATUS.DEACTIVATED ? updatedData : null, user.id],
        (err) => {
          if (err) return res.status(500).json({ message: 'Failed to update user last visit' });

          return res.status(200).json({
            status: user.status,
            id: user.status === STATUS.ACTIVE ? user.id : null,
            message: user.status === STATUS.ACTIVE ? 'User authorization successful' : 'Authorization failed',
            token: user.status === STATUS.ACTIVE ? `Bearer ${getToken(user.id, email)}` : null,
          });
        },
      );
  });
};

const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const error = checkBody(req.body, ['username', 'email', 'password']);

    if (error) return res.status(400).json({ message: 'Username, email, and password are required' });

    sql.query(REQUESTS.FIND_USER_BY_USERNAME_OR_EMAIL, [username, email], (err, results: RowDataPacket[]) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to create a new user' });
      }

      if (results.length > 0)
        return res.status(400).json({ message: 'User with the same username or email already exists' });

      const encryptedPassword = encrypt(password);

      const newUser: User = {
        username,
        email,
        password: encryptedPassword,
        registration_date: moment().unix(),
        last_visit: null,
        status: STATUS.ACTIVE,
      };

      sql.query(REQUESTS.CREATE_USER, newUser, (error, results: mysql.ResultSetHeader) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Failed to create a new user' });
        }

        const userId = results.insertId;
        return res.status(201).json({ message: 'New user created', userId });
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export { signUp, signIn };
