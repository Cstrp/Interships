import { Box, IconButton } from '@mui/material';
import { Delete, Lock, LockOpen } from '@mui/icons-material';
import React from 'react';
import { UsersTableToolbarProps } from './UsersTableToolbarProps';
import { deleteUser, STATUS, updateStatus } from '../../../../data';
import { useNavigate } from 'react-router-dom';

export const UsersTableToolbar = ({ data, selectedUsers, setUsers, selectedUsersCount }: UsersTableToolbarProps) => {
  const navigate = useNavigate();

  const handleStatusChange = (status: STATUS) => {
    updateStatus({ status, ids: selectedUsersCount as number[] });
    setUsers((prevState) =>
      prevState.map((user) => (selectedUsersCount.includes(user?.id!) ? { ...user, status } : user)),
    );
  };

  const handleDeleteUser = () => {
    deleteUser({ ids: selectedUsersCount as number[] });
    setUsers((prevState) => prevState.filter((user) => !selectedUsersCount.includes(user.id!)));
  };

  return (
    <Box className={'flex flex-row gap-10 mx-1 my-2'}>
      <IconButton onClick={() => handleStatusChange(STATUS.DEACTIVATED)}>
        <Lock />
      </IconButton>
      <IconButton onClick={() => handleStatusChange(STATUS.ACTIVE)}>
        <LockOpen />
      </IconButton>
      <IconButton onClick={handleDeleteUser}>
        <Delete />
      </IconButton>
    </Box>
  );
};
