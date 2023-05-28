import { Alert, Box, Snackbar } from '@mui/material';
import { UsersTable } from '../../components';
import { useEffect, useState } from 'react';
import { api, User, UserData } from '../../../data';

export const UsersDashboard = () => {
  const [message, setMessage] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get<UserData>('/users');

        if (res) {
          setMessage(res.data.message);
          setOpen(true);
          setUsers(res.data.users);
        }
      } catch (error: any) {
        setMessage(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box className={'w-full p-5 bg-gray-50 rounded-md'}>
      <UsersTable users={users} setUsers={setUsers} />
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(!open)}>
        <Alert variant={'filled'} elevation={10} severity={'info'} onClose={() => setOpen(!open)}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
