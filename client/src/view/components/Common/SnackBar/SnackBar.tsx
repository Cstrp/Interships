import { useEffect, useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import { SnackBarProps } from './snackBarProps';

export const SnackBar = ({ message }: SnackBarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      message={message}
      autoHideDuration={3000}
      action={<Button onClick={handleClick}>Close</Button>}
    />
  );
};
