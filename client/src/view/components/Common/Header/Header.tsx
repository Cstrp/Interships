import { AppBar, Box, Toolbar } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { tabs } from './tabs';
import React from 'react';
import { HeaderTabs } from '../HeaderTabs/HeaderTabs';
import { ROUTER_PATHS } from '../../../../data';

export const Header = () => {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar variant={'elevation'} color={'inherit'}>
        <Toolbar>
          <Link style={{ flexGrow: 1 }} to={ROUTER_PATHS.DEFAULT}>
            TEST APP
          </Link>

          {location.pathname !== ROUTER_PATHS.USERS ? <HeaderTabs tabs={tabs} /> : ''}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
