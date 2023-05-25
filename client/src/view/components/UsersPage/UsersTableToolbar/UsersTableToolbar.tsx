import { Box, IconButton } from '@mui/material';
import { Delete, Lock, LockOpen } from '@mui/icons-material';
import React from 'react';
import { UsersTableToolbarProps } from './UsersTableToolbarProps';
import { deleteUser, STATUS, updateAllStatus, updateMultipleStatus, updateStatus } from '../../../../data';

export const UsersTableToolbar = ({ data, selectedUsers, setUsers, selectedUsersCount }: UsersTableToolbarProps) => {
  const handleStatusChange = (status: STATUS) => {
    if (selectedUsers) {
      updateAllStatus(status);
      setUsers((prevState) => prevState.map((user) => ({ ...user, status })));
    } else if (selectedUsersCount.length === 1) {
      updateStatus({ id: data.id as number, status });
      setUsers((prevState) => prevState.map((user) => (user.id === data.id ? { ...user, status } : user)));
    } else {
      updateMultipleStatus({ status, ids: selectedUsersCount as number[] });
      setUsers((prevState) =>
        prevState.map((user) => (selectedUsersCount.includes(user?.id!) ? { ...user, status } : user)),
      );
    }
  };

  const handleDeleteUser = () => {
    deleteUser(data.id);
    setUsers((prevState) => prevState.filter((user) => user.id !== data.id));
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
