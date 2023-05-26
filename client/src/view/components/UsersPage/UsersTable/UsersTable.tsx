import { DataGrid, GridRowParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { columns } from './columns';
import { UsersTableToolbar } from '../UsersTableToolbar/UsersTableToolbar';
import { useState } from 'react';
import { Box } from '@mui/material';
import { UsersTableProps } from './usersTableProps';
import { formattedUsers } from '../../../../data';

export const UsersTable = ({ users, setUsers }: UsersTableProps) => {
  const [rowData, setRowData] = useState<GridRowParams>();
  const [selectAllUsers, setSelectAllUsers] = useState<GridRowSelectionModel>([]);

  return (
    <Box className={'flex flex-col items-center h-screen py-20'}>
      <UsersTableToolbar
        data={rowData!}
        selectedUsers={selectAllUsers?.length === users.length}
        setUsers={setUsers}
        selectedUsersCount={selectAllUsers}
      />
      <DataGrid
        sx={{ width: '100%' }}
        columns={columns}
        density={'comfortable'}
        rows={formattedUsers(users)}
        loading={users.length < 0 || users.length === 0}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15, 20]}
        checkboxSelection
        onRowSelectionModelChange={(users) => {
          setSelectAllUsers(users);
        }}
        onRowClick={(row) => {
          setRowData(row);
        }}
      />
    </Box>
  );
};
