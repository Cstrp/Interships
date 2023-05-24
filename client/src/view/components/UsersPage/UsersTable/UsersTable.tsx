import { Box, Paper, Table, TableContainer } from '@mui/material';
import { User } from '../../../../data';
import { UsersTableCols } from '../UsersTableCols/UsersTableCols.tsx';

interface UsersTableProps {
  users: User[];
}

export const UsersTable = ({ users }: UsersTableProps): JSX.Element => {
  console.log(users);
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <UsersTableCols />
        </Table>
      </TableContainer>
    </Box>
  );
};
