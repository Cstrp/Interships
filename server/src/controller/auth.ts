import { Request, Response } from 'express';
import { checkBody, checkPassword, connection, encrypt, getToken } from '../services';
import { User } from '../models';
import moment from 'moment';
import { REQUESTS, STATUS } from '../enums';
import mysql, { RowDataPacket } from 'mysql2';

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const error = checkBody(req.body, ['email', 'password']);

    if (error) return res.status(400).json({ message: 'Invalid request. Email or password are required' });

    const foundedUser = REQUESTS.FIND_USER_BY_EMAIL;
    const updateUserLastVisit = REQUESTS.UPDATE_LAST_VISIT;
    const updateLastVisit = moment().format('YYYY-MM-DD HH:mm:ss');

    connection.query(foundedUser, [email], (err, result: RowDataPacket[]) => {
      if (err) return res.status(400).json({ message: 'Invalid request.' });

      const user = result[0];

      if (user.status === STATUS.DEACTIVATED) {
        return res.status(403).json({ message: 'User is deactivated. Unable to sign in.' });
      }
      const correctPassword = checkPassword(password, user.password);

      if (correctPassword)
        connection.query(updateUserLastVisit, [updateLastVisit, user.id], (err) => {
          if (err) return res.status(500).json({ message: 'Failed to update user last visit' });

          return res
            .status(200)
            .json({ message: 'User authorization successful', token: `Bearer ${getToken(user.id, email)} ` });
        });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authorization error, email or password is incorrect' });
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const error = checkBody(req.body, ['username', 'email', 'password']);

    if (error) {
      return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    const foundedUser = REQUESTS.FIND_USER_BY_USERNAME_OR_EMAIL;
    const createUser = REQUESTS.CREATE_USER;

    connection.query(foundedUser, [username, email], (err, results: RowDataPacket[]) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to create a new user' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'User with the same username or email already exists' });
      }

      const encryptedPassword = encrypt(password);

      const newUser: User = {
        username,
        email,
        password: encryptedPassword,
        registration_date: moment().format('YYYY-MM-DD HH:mm:ss'),
        last_visit: null,
        status: STATUS.ACTIVE,
      };

      connection.query(createUser, newUser, (error, results: mysql.ResultSetHeader) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Failed to create a new user' });
        }

        const userId = results.insertId;
        return res.status(201).json({ message: 'New user created', userId });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create a new user' });
  }
};

export { signUp, signIn };
