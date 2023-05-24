import { TableBody, TableCell, TableRow } from '@mui/material';
import { User } from '../../../../data';

interface UsersTableRowsProps {
  formattedUsers: User[];
}

export const UsersTableRows = ({ formattedUsers }: UsersTableRowsProps): JSX.Element => {
  return (
    <TableBody>
      {formattedUsers.map((user) => (
        <TableRow key={user.id}>
          <TableCell sx={{ width: '10px' }}>{user.id}</TableCell>
          <TableCell sx={{ width: '20px' }}>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.registration_date}</TableCell>
          <TableCell>{user.last_visit}</TableCell>
          <TableCell>{user.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
