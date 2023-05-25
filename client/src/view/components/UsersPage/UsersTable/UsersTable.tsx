import { DataGrid, GridRowParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { columns } from './columns';
import { UsersTableToolbar } from '../UsersTableToolbar/UsersTableToolbar';
import { useLoading } from '../../../../data';
import { useState } from 'react';
import { Box } from '@mui/material';
import { UsersTableProps } from './usersTableProps';

export const UsersTable = ({ users }: UsersTableProps) => {
  const { loading } = useLoading();
  const [rowData, setRowData] = useState<GridRowParams>();
  const [selectAllUsers, setSelectAllUsers] = useState<GridRowSelectionModel>([]);

  return (
    <Box className={'flex flex-col items-center '}>
      <UsersTableToolbar data={rowData!} selectedUsers={selectAllUsers?.length === users.length} />
      <DataGrid
        sx={{ width: '100%' }}
        columns={columns}
        density={'comfortable'}
        rows={users}
        loading={loading}
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
