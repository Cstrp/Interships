import { User } from '../../../../data';
import { Dispatch, SetStateAction } from 'react';

export interface UsersTableProps {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}
