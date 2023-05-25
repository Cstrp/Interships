import { Box, IconButton } from '@mui/material';
import { Delete, Lock, LockOpen } from '@mui/icons-material';
import React from 'react';
import { UsersTableToolbarProps } from './UsersTableToolbarProps';
import { STATUS, useUsersActions } from '../../../../data';

export const UsersTableToolbar = ({ data, selectedUsers }: UsersTableToolbarProps) => {
  const { handleDeleteUser, handleStatusChange, handleAllStatusChange } = useUsersActions({ data });

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
