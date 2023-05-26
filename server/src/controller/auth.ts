import { Request, Response } from 'express';
import { checkBody, checkPassword, encrypt, getToken, sql } from '../services';
import { User } from '../models';
import moment from 'moment';
import { REQUESTS, STATUS } from '../enums';
import mysql, { RowDataPacket } from 'mysql2';
import { MESSAGES } from '../enums/errorMessages';

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const error = checkBody(req.body, ['email', 'password']);

  if (error) return res.status(400).json({ message: MESSAGES.REQ_USERNAME_OR_PASSWORD });

  sql.query(REQUESTS.FIND_USER_BY_EMAIL, [email], (err, result: RowDataPacket[]) => {
    if (err) return res.status(400).json({ message: MESSAGES.INVALID_REQUEST });

    const user = result[0];

    const correctPassword = checkPassword(password, user.password);
    const updatedData = moment().unix();

    if (correctPassword)
      sql.query(
        REQUESTS.UPDATE_LAST_VISIT,
        [user.status !== STATUS.DEACTIVATED ? updatedData : null, user.id],
        (err) => {
          if (err) return res.status(500).json({ message: MESSAGES.FAILED_UPDATE_USER_LAST_VISIT });

          return res.status(200).json({
            id: user.status === STATUS.ACTIVE ? user.id : null,
            status: user.status,
            message: user.status === STATUS.ACTIVE ? MESSAGES.SUCCESS_AUTHORIZATION : MESSAGES.FAILED_AUTHORIZATION,
            token: user.status === STATUS.ACTIVE ? `Bearer ${getToken(user.id, email, user.status)}` : null,
          });
        },
      );
  });
};

const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const error = checkBody(req.body, ['username', 'email', 'password']);

    if (error) return res.status(400).json({ message: MESSAGES.REQ_USERNAME_OR_PASSWORD });

    sql.query(REQUESTS.FIND_USER_BY_USERNAME_OR_EMAIL, [username, email], (err, results: RowDataPacket[]) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: MESSAGES.FAILED_CREATE_NEW_USER });
      }

      if (results.length > 0) return res.status(400).json({ message: MESSAGES.ALREADY_EXIST });

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

        return res.status(201).json({ message: MESSAGES.SUCCESS_CREATE_USER, userId });
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export { signUp, signIn };
