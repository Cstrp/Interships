import { Alert, AppBar, Box, Button, Snackbar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '../../../../data';
import { HeaderTabs } from '../HeaderTabs/HeaderTabs';
import { tabs } from './tabs';
import { useState } from 'react';
import { check_health } from '../../../../data/api/check_health';

export const Header = () => {
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleCheck = () => {
    check_health(setMessage);
    setOpen(true);
  };

  return (
    <Box>
      <AppBar color={'inherit'} elevation={12}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to={ROUTER_PATHS.HOME}>Users dashboard</Link>
          </Box>

          <Box className={'w-4/5'}>
            <Button onClick={handleCheck}>Check_health</Button>
            <Snackbar open={open} onClose={() => setOpen(!open)} autoHideDuration={3000}>
              <Alert variant={'filled'} severity={'info'} onClose={() => setOpen(!open)}>
                {message}
              </Alert>
            </Snackbar>
          </Box>

          <HeaderTabs tabs={tabs} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
