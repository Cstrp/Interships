import { UsersTable } from '../../components';
import { Box } from '@mui/material';
import { getItem, getUsers, ROUTER_PATHS, User } from '../../../data';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const token = getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        setUsers(res?.users!);
      } catch (err) {
        console.log(err);
      }
    };

    if (token) {
      fetchData();
    } else {
      navigate(ROUTER_PATHS.DEFAULT);
    }
  }, []);

  return (
    <Box className={'max-w-[1440px] '}>
      <UsersTable users={users} setUsers={setUsers} />
    </Box>
  );
};
