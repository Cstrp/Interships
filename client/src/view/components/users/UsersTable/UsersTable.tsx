import { Box } from '@mui/material';
import { DataGrid, GridRowParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { UsersTableToolbar } from '../UsersTableToolbar/UsersTableToolbar';
import { UsersTableProps } from './usersTableProps';
import { formattedUsers } from '../../../../data/utils/formattedUsers';
import { useState } from 'react';
import { col } from './col';

export const UsersTable = ({ users, setUsers }: UsersTableProps) => {
  const [row, setRow] = useState<GridRowParams>();
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

  return (
    <Box>
      <UsersTableToolbar
        row={row!}
        selectedRows={selectedRows}
        setUsers={setUsers}
        allSelectedRows={selectedRows.length === users.length}
      />
      <DataGrid
        sx={{ width: '100%', height: '600px' }}
        columns={col}
        rows={formattedUsers(users)}
        loading={users.length < 0 || users.length === 0}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
        pageSizeOptions={[10, 15, 20]}
        checkboxSelection
        onRowSelectionModelChange={(evt) => setSelectedRows(evt)}
        onRowClick={(evt) => setRow(evt)}
      />
    </Box>
  );
};
