import { GridColDef } from '@mui/x-data-grid';

export const col: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 30, disableColumnMenu: true },
  { field: 'username', headerName: 'username', width: 100, disableColumnMenu: true },
  { field: 'email', headerName: 'email', width: 250, disableColumnMenu: true },
  {
    field: 'registration_date',
    headerName: 'registration_date',
    width: 250,
    disableColumnMenu: true,
  },
  { field: 'last_visit', headerName: 'last_visit', width: 250, disableColumnMenu: true },
  { field: 'status', headerName: 'status', width: 100, disableColumnMenu: true },
];
