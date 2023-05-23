import { Request, Response } from 'express';
import { connection } from '../services';

const getUsers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    connection.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
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

const updateUserStatus = (req: Request, res: Response) => {};

const updateAllUsersStatus = (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export { getUsers, updateUserStatus, updateAllUsersStatus, deleteUser };
