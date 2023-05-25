import { Request, Response } from 'express';
import { sql } from '../services';
import { REQUESTS } from '../enums';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const getUsers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    sql.query(REQUESTS.FIND_USER_BY_ID, [userId], (err, result: RowDataPacket[]) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to retrieve users' });
      }

      if (result.length > 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      sql.query(REQUESTS.SELECT_ALL_USERS, (err, result) => {
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
    const { status, id } = req.body;

    sql.query(REQUESTS.UPDATE_USER_STATUS, [status, id], (err, result: RowDataPacket[]) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to update user status' });
      }

      if (result.length === 0) return res.status(404).json({ message: 'User not found' });

      res.status(200).json({ message: 'User status updated successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user status' });
  }
};

const updateMultipleUsersStatus = (req: Request, res: Response) => {
  try {
    const { status, ids } = req.body;

    sql.query(`update users set status = ? where id in (?)`, [status, ids], (err) => {
      if (err) return res.status(500).json({ message: 'Failed to update selected users status' });

      res.status(200).json({ message: 'Update selected users successful' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update multiple users status' });
  }
};

const updateAllUsersStatus = (req: Request, res: Response) => {
  const { status } = req.body;

  sql.query(REQUESTS.UPDATE_USERS_STATUS, [status], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update users status' });
    }

    res.status(200).json({ message: 'Successfully updated all users status' });
  });
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    sql.query(REQUESTS.FIND_USER_BY_ID_AND_DELETE, [userId], (err, result: ResultSetHeader) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to delete user' });
      }

      if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });

      res.status(200).json({ message: 'User deleted successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

export { getUsers, updateUserStatus, updateMultipleUsersStatus, updateAllUsersStatus, deleteUser };
