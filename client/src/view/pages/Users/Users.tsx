import { UsersTable } from '../../components';
import { Box } from '@mui/material';
import { getUsers, User } from '../../../data';
import { useEffect, useState } from 'react';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();

        if (res) {
          setUsers(res.users);
          setMessage(res.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Box className={'max-w-[1440px] '}>
      <UsersTable users={users} setUsers={setUsers} />
    </Box>
  );
};
