import { Request, Response } from 'express';
import { sql } from '../services';
import { REQUESTS } from '../enums';
import { RowDataPacket } from 'mysql2';
import { MESSAGES } from '../enums/errorMessages';

const getUsers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    sql.query(REQUESTS.FIND_USER_BY_ID, [userId], (err, result: RowDataPacket[]) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: MESSAGES.FAILED });
      }

      if (result.length > 0) {
        return res.status(404).json({ message: MESSAGES.USER_NOT_FOUND });
      }

      sql.query(REQUESTS.SELECT_ALL_USERS, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: MESSAGES.FAILED });
        }

        res.status(200).json({ message: MESSAGES.SUCCESSFULLY, users: result });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get users' });
  }
};

const updateUserStatus = (req: Request, res: Response) => {
  try {
    const { status, ids } = req.body;

    sql.query(REQUESTS.UPDATE_USER_STATUS, [status, ids], (err) => {
      if (err) return res.status(500).json({ message: MESSAGES.FAILED_UPDATE });

      res.status(200).json({ message: MESSAGES.SUCCESSFULLY_UPDATE });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MESSAGES.FAILED });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;

    sql.query(REQUESTS.DELETE_USERS, [ids], (err, result: RowDataPacket[]) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: MESSAGES.FAILED });
      }

      if (result.length === 0) return res.status(404).json({ message: MESSAGES.USER_NOT_FOUND });

      res.status(200).json({ message: MESSAGES.DELETE_SUCCESS });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MESSAGES.FAILED });
  }
};

export { getUsers, updateUserStatus, deleteUser };
