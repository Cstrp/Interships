import { GridRowParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { Dispatch, SetStateAction } from 'react';
import { User } from '../../../../data';

export interface UsersTableToolbarProps {
  data: GridRowParams;
  selectedUsers: boolean;
  selectedUsersCount: GridRowSelectionModel;
  setUsers: Dispatch<SetStateAction<User[]>>;
}
