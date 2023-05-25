import { GridRowParams } from '@mui/x-data-grid';
import { Dispatch, SetStateAction } from 'react';

export interface UsersActions {
  data: GridRowParams;
  setFormattedUsers?: Dispatch<SetStateAction<any[]>>;
}
