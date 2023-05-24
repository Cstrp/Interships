import { TableCell, TableHead, TableRow } from '@mui/material';
import { columns } from './columns.ts';

export const UsersTableCols = (): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>{columns.id}</TableCell>
        <TableCell>{columns.username}</TableCell>
        <TableCell>{columns.email}</TableCell>
        <TableCell>{columns.registrationDate}</TableCell>
        <TableCell>{columns.lastVisit}</TableCell>
        <TableCell>{columns.status}</TableCell>
      </TableRow>
    </TableHead>
  );
};
