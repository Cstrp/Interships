import { UsersTable } from '../../components';
import { Box } from '@mui/material';
import { useState } from 'react';
import { User } from '../../../data';

export const Users = () => {
  const [formattedUsers, setFormattedUsers] = useState<User[]>([]);

  return (
    <Box className={'max-w-[1440px] '}>
      <UsersTable users={formattedUsers} />
    </Box>
  );
};
