import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 50, disableColumnMenu: true },
  { field: 'username', headerName: 'username', width: 100, disableColumnMenu: true },
  { field: 'email', headerName: 'email', width: 200, disableColumnMenu: true },
  {
    field: 'registration_date',
    headerName: 'registration_date',
    width: 200,
    disableColumnMenu: true,
  },
  { field: 'last_visit', headerName: 'last_visit', width: 200, disableColumnMenu: true },
  { field: 'status', headerName: 'status', width: 150, disableColumnMenu: true },
];
