import { User } from '../../../../data';
import { Dispatch, SetStateAction } from 'react';

export type UsersTableProps = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};
