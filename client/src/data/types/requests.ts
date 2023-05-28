import { STATUS } from '../enums';
import { User } from '.';

export interface Requests {
  id: number;
  message: string;
  status: STATUS;
  users: User[];
  token: string;
}
