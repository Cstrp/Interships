import { Request, Response } from 'express';
import { connection } from '../services';
import { REQUESTS } from '../enums';
import mysql from 'mysql2';

const getUsers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    connection.query(REQUESTS.FIND_USER_BY_ID, [userId], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to retrieve users' });
      }

      if (Array.isArray(result) && result.length > 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      connection.query('select * from users', (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Failed to get users' });
        }

        res.status(200).json({ message: 'Get users successfully', users: result });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get users' });
  }
};

const updateUserStatus = (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { status } = req.body;

    connection.query(REQUESTS.UPDATE_USER_STATUS, [status, userId], (err, result: mysql.ResultSetHeader) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to update user status' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User status updated successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user status' });
  }
};

const updateAllUsersStatus = (req: Request, res: Response) => {
  try {
    const { status } = req.body;

    connection.query(REQUESTS.UPDATE_USERS_STATUS, [status], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to update users status' });
      }

      res.status(200).json({ message: 'Successfully updated all users status' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update all users status' });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    connection.query(REQUESTS.FIND_USER_BY_ID_AND_DELETE, [userId], (err, result: mysql.ResultSetHeader) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to delete user' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User deleted successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

export { getUsers, updateUserStatus, updateAllUsersStatus, deleteUser };
