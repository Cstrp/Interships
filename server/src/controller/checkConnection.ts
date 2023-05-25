import { Request, Response } from 'express';
import * as server from '../services/server.service';

export const checkConnection = (req: Request, res: Response) => {
  server.sql.query('select 1', (err) => {
    if (err) {
      res.status(500).json({ message: 'Failed to connect to the database' });
    } else {
      res.json({ message: 'Successfully connected to the database' });
    }
  });
};
