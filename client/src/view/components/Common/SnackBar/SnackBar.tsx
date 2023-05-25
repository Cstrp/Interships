import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import { SnackBarProps } from './snackBarProps';

export const SnackBar = ({ message }: SnackBarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (message) setOpen(!open);
  };

  return (
    <Snackbar
      open={message ? !open : open}
      message={message}
      autoHideDuration={6000}
      action={<Button onClick={handleClick}>Close</Button>}
    />
  );
};
