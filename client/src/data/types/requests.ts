import { STATUS } from '../enums';
import { User } from './user';

export interface Requests {
  id: number;
  message: string;
  status: STATUS;
  users: User[];
  token: string;
}

export type Message = Pick<Requests, 'message'>;

export type UserData = Pick<Requests, 'message' | 'users'>;

export type SignInData = Pick<Requests, 'message' | 'token' | 'status' | 'id'>;
